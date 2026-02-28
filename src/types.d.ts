import { GUSTAVE_BASE } from './lib/constants';

export type CharacterId = 'gustave' | 'lune' | 'maelle' | 'sciel' | 'verso' | 'monoco';
export type AttributeId = 'vitality' | 'might' | 'agility' | 'defense' | 'luck';
export type CharacterStatId = 'attack-power' | 'speed' | 'critical-rate' | 'health' | 'defense';

export interface ImageData {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export interface Character {
  id: CharacterId;
  name: string;
  imgData: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  level: number;
  stats: {
    vitality: number;
    might: number;
    agility: number;
    defense: number;
    luck: number;
  };
  weaponId: string;
  abilities: string[];
  pictos: string[];
  lumina: string[];
}

export interface CharacterData {
  id: CharacterId;
  name: string;
  imgData: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
}

export interface WeaponData {
  id: string;
  name: string;
  characterIds: Array<Character['id']>;
  basePower: number;
  element: string;
  passives?: [string, string, string];
  scaling: {
    vitality?: string;
    might?: string;
    agility?: string;
    defense?: string;
    luck?: string;
  };
}

export interface Build {
  id: string;
  buildName: string;
  characterId: CharacterId;
  attributes: Attributes;
  weaponId: string;
  skillIds: string[];
  pictosIds: [string, string, string];
  luminasIds: string[];
}

export interface Stats {
  attackPower: number;
  speed: number;
  criticalRate: number;
  health: number;
  defense: number;
}

export interface CharacterTemplate {
  id: string;
  buildName: string;
  characterId: CharacterId;
  attributes: Attributes;
  baseStats: Stats;
  weaponId: string;
  skillIds: [string, string, string, string, string, string];
  pictosIds: [string, string, string];
  luminasIds: string[];
}

export interface Attributes {
  vitality: number;
  might: number;
  agility: number;
  defense: number;
  luck: number;
}

export interface PictoStats {
  health: number;
  defense: number;
  speed: number;
  critRate: number;
}

export interface PictoData {
  id: string;
  name: string;
  effect: string;
  luminaPoints: number;
  stats: PictoStats;
}

export interface SkillLocale {
  name: string;
  description: string;
}

export interface Skill {
  id: string;
  cost: number;
  characterId: CharacterId;
  en: SkillLocale;
  es: SkillLocale;
}
