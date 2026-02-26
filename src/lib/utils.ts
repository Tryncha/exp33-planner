import PICTOS from '../data/pictos';
import SKILLS from '../data/skills';
import WEAPONS from '../data/weapons';
import { Attributes, CharacterData, PictoData, PictoStats, SkillData, Stats, WeaponData } from '../types';
import { CHARACTER_TEMPLATES } from './constants';
import {
  ATTACK_POWER_FROM_MIGHT,
  CRIT_FROM_DEFENSE,
  CRIT_FROM_LUCK,
  DEFENSE_FROM_AGILITY,
  DEFENSE_FROM_DEFENSE,
  HEALTH_FROM_VITALITY,
  SPEED_FROM_AGILITY,
  SPEED_FROM_LUCK
} from './stats-from-attibutes';

type ScalingTier = 'S' | 'A' | 'B' | 'C' | 'D';

const MAX_STAT = 99;
const SCALING_VALUES = {
  S: 0.9936, // S scaling: ~0.9936
  A: 0.6324, // A scaling: ~0.6324
  B: 0.3617, // B scaling: ~(0.361 - 0.362) or ~0.3617
  C: 0.1764, // C scaling: ~(0.1764 - 0.1803)
  D: 0.0882 // D scaling: ~0.0882
} as const;

export function calcWeaponPower(
  basePower: number,
  scaling: { vitality?: string; might?: string; agility?: string; defense?: string; luck?: string },
  attributes: { vitality: number; might: number; agility: number; defense: number; luck: number }
) {
  const bonusValues = { vitality: 0, might: 0, agility: 0, defense: 0, luck: 0 };

  for (const stat of ['vitality', 'might', 'agility', 'defense', 'luck'] as const) {
    if (!scaling[stat]) {
      bonusValues[stat] = 0;
    } else {
      bonusValues[stat] = (SCALING_VALUES[scaling[stat] as ScalingTier] / MAX_STAT) * attributes[stat];
    }
  }

  // Might scaling
  const mightBonus = (0.5 / MAX_STAT) * attributes.might;

  const totalPower =
    basePower *
    (1 +
      mightBonus +
      bonusValues.vitality +
      bonusValues.might +
      bonusValues.agility +
      bonusValues.defense +
      bonusValues.luck);

  return Math.round(totalPower);
}

export function getTemplateData(characterId: CharacterData['id']) {
  const characterTemplate = CHARACTER_TEMPLATES.find((tmp) => tmp.characterId === characterId);

  if (!characterTemplate) {
    throw new Error(`Character with id: ${characterId} not found...`);
  }

  return { ...characterTemplate };
}

export function getWeaponData(weaponId: WeaponData['id']) {
  const weaponData = WEAPONS.find((wpn) => wpn.id === weaponId);

  if (!weaponData) {
    throw new Error(`Weapon with id: ${weaponId} not found...`);
  }

  return weaponData;
}

export function getPictoData(pictoId: PictoData['id']) {
  return PICTOS.find((pic) => pic.id === pictoId);
}

export function getSkillData(skillId: SkillData['id']) {
  return SKILLS.find((pic) => pic.id === skillId);
}

export function getLuminaData(pictoId: PictoData['id']) {
  const luminaData = PICTOS.find((pic) => pic.id === pictoId);

  if (!luminaData) {
    throw new Error(`Lumina with id: ${pictoId} not found...`);
  }

  return luminaData;
}

export function formatPictoStats(stats: PictoStats) {
  const parts = [];

  if (stats.health) parts.push(`${stats.health} Health`);
  if (stats.defense) parts.push(`${stats.defense} Defense`);
  if (stats.speed) parts.push(`${stats.speed} Speed`);
  if (stats.critRate) parts.push(`${stats.critRate}% Crit. Rate`);

  return parts.join(', ');
}

export function calcStats(baseStats: Stats, attributes: Attributes, pictos: (PictoData | undefined)[]) {
  const { vitality, might, agility, defense: defenseAttr, luck } = attributes;

  let attackPower = baseStats.attackPower;
  let speed = baseStats.speed;
  let critRate = baseStats.criticalRate;
  let health = baseStats.health;
  let defense = baseStats.defense;

  attackPower += ATTACK_POWER_FROM_MIGHT[might];
  speed += SPEED_FROM_AGILITY[agility] + SPEED_FROM_LUCK[luck];
  critRate += CRIT_FROM_DEFENSE[defenseAttr] + CRIT_FROM_LUCK[luck];
  health += HEALTH_FROM_VITALITY[vitality];
  defense += DEFENSE_FROM_AGILITY[agility] + DEFENSE_FROM_DEFENSE[defenseAttr];

  for (const picto of pictos) {
    if (!picto) continue;

    speed += picto.stats.speed;
    critRate += picto.stats.critRate;
    health += picto.stats.health;
    defense += picto.stats.defense;
  }

  return {
    attackPower,
    speed,
    critRate,
    health,
    defense
  };
}

export function calcLevel(attributes: Attributes) {
  const totalValues = Object.values(attributes).reduce((acc, val) => acc + val, 0);
  const level = Math.ceil(totalValues / 3);
  return level;
}

export function swapElements<T>(arr: T[], indexA: number, indexB: number) {
  const temp = arr[indexA];
  arr[indexA] = arr[indexB];
  arr[indexB] = temp;
}
