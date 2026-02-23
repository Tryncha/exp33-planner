import { GUSTAVE_BASE } from './lib/constants';

export type Character = {
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
};

export type Stat = 'vitality' | 'might' | 'agility' | 'defense' | 'luck';

export type Weapon = {
  id: string;
  name: string;
  imgData: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
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
};
