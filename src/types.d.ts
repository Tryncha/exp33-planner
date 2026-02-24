import { GUSTAVE_BASE } from './lib/constants';

export type Stat = 'vitality' | 'might' | 'agility' | 'defense' | 'luck';

export interface ImageData {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export interface Character {
  id: 'gustave' | 'lune';
  name: 'Gustave' | 'Lune';
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
  id: 'gustave' | 'lune';
  name: 'Gustave' | 'Lune';
  imgData: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
}

export interface Weapon {
  id: string;
  name: string;
  imgData: ImageData;
  basePower: number;
  element: string;
  passives: [string, string, string];
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
  name: string;
  characterId: 'gustave' | 'lune';
  level: number;
  stats: Stats;
  weaponId: string;
  abilitiesIds: string[];
  pictosIds: [string, string, string];
  luminasIds: string[];
}

export interface CharacterTemplate {
  id: string;
  name: string;
  characterId: 'gustave' | 'lune';
  characterName: string;
  imgData: ImageData;
  stats: Stats;
  level: number;
  weaponId: string;
  abilitiesIds: string[];
  pictosIds: [string, string, string];
  luminasIds: string[];
}

export interface Stats {
  vitality: number;
  might: number;
  agility: number;
  defense: number;
  luck: number;
}
