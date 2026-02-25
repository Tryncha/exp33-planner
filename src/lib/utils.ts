import PICTOS from '../data/pictos';
import WEAPONS from '../data/weapons';
import { Attributes, CharacterData, PictoData, PictoStats, Stats, WeaponData } from '../types';
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
  const pictoData = PICTOS.find((pic) => pic.id === pictoId);

  if (!pictoData) {
    throw new Error(`Picto with id: ${pictoId} not found...`);
  }

  return pictoData;
}

export function formatPictoStats(stats: PictoStats) {
  const parts = [];

  if (stats.health) parts.push(`${stats.health} Health`);
  if (stats.defense) parts.push(`${stats.defense} Defense`);
  if (stats.speed) parts.push(`${stats.speed} Speed`);
  if (stats.critRate) parts.push(`${stats.critRate}% Crit. Rate`);

  return parts.join(', ');
}

export function calcStats(baseStats: Stats, attributes: Attributes) {
  const { vitality, might, agility, defense: defenseAttr, luck } = attributes;

  const attackPower = baseStats.attackPower + ATTACK_POWER_FROM_MIGHT[might];
  const speed = baseStats.speed + SPEED_FROM_AGILITY[agility] + SPEED_FROM_LUCK[luck];
  const criticalRate = baseStats.criticalRate + CRIT_FROM_DEFENSE[defenseAttr] + CRIT_FROM_LUCK[luck];
  const health = baseStats.health + HEALTH_FROM_VITALITY[vitality];
  const defense = baseStats.defense + DEFENSE_FROM_AGILITY[agility] + DEFENSE_FROM_DEFENSE[defenseAttr];

  return {
    attackPower,
    speed,
    criticalRate,
    health,
    defense
  };
}
