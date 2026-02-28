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

export interface Scaling {
  vitality?: string;
  might?: string;
  agility?: string;
  defense?: string;
  luck?: string;
}

export interface LocaleWeapon {
  name: string;
  passives?: [string, string, string];
}

export interface Weapon {
  id: string;
  characterIds: Array<Character['id']>;
  basePower: number;
  element: string;
  scaling: Scaling;
  en: LocaleWeapon;
  es: LocaleWeapon;
  fr: LocaleWeapon;
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

export interface SkillBase {
  id: string;
  cost: number;
  en: SkillLocale;
  es: SkillLocale;
}

export interface GustaveSkill extends SkillBase {
  characterId: 'gustave';
}

export interface LuneSkill extends SkillBase {
  characterId: 'lune';
  stains: string[];
}

export interface MaelleSkill extends SkillBase {
  characterId: 'maelle';
}

export interface ScielSkill extends SkillBase {
  characterId: 'sciel';
}

export interface VersoSkill extends SkillBase {
  characterId: 'verso';
}

export interface MonocoSkill extends SkillBase {
  characterId: 'monoco';
}

export type Skill = GustaveSkill | LuneSkill | MaelleSkill | ScielSkill | VersoSkill | MonocoSkill;
