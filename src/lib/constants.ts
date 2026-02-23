import { Character } from '../types';

const CHARACTERS_BASE: Record<string, Character> = {
  GUSTAVE: {
    id: 'gustave',
    name: 'Gustave',
    imgData: {
      src: '/characters/gustave.png',
      alt: '',
      width: 40,
      height: 40
    },
    level: 0,
    stats: {
      vitality: 0,
      might: 0,
      agility: 0,
      defense: 0,
      luck: 0
    },
    weaponId: 'noahram',
    abilities: [],
    pictos: [],
    lumina: []
  },
  LUNE: {
    id: 'lune',
    name: 'Lune',
    imgData: {
      src: '/characters/lune.png',
      alt: '',
      width: 40,
      height: 40
    },
    level: 0,
    stats: {
      vitality: 0,
      might: 0,
      agility: 0,
      defense: 0,
      luck: 0
    },
    weaponId: 'lunerim',
    abilities: [],
    pictos: [],
    lumina: []
  }
};

export default CHARACTERS_BASE;
