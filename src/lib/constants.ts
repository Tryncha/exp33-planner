import { CharacterData, CharacterTemplate } from '../types';

export const CHARACTER_DATA: CharacterData[] = [
  {
    id: 'gustave',
    name: 'Gustave',
    imgData: {
      src: '/characters/gustave.png',
      alt: 'Gustave Artwork',
      width: 40,
      height: 40
    }
  },
  {
    id: 'lune',
    name: 'Lune',
    imgData: {
      src: '/characters/lune.png',
      alt: 'Lune Artwork',
      width: 40,
      height: 40
    }
  }
];

export const CHARACTER_TEMPLATES: CharacterTemplate[] = [
  {
    id: 'gustave-template',
    buildName: 'Gustave',
    characterId: 'gustave',
    attributes: {
      vitality: 0,
      might: 0,
      agility: 0,
      defense: 0,
      luck: 0
    },
    baseStats: {
      attackPower: 49,
      speed: 212,
      criticalRate: 8,
      health: 150,
      defense: 0
    },
    weaponId: 'noahram',
    skillIds: ['lumiere-assault', '', 'overcharge', '', '', ''],
    pictosIds: ['', '', ''],
    luminasIds: []
  },
  {
    id: 'lune-template',
    buildName: 'Lune',
    characterId: 'lune',
    attributes: {
      vitality: 0,
      might: 0,
      agility: 0,
      defense: 0,
      luck: 0
    },
    baseStats: {
      attackPower: 51,
      speed: 200,
      criticalRate: 5,
      health: 150,
      defense: 0
    },
    weaponId: 'lunerim',
    skillIds: ['immolation', '', 'ice-lance', '', '', ''],
    pictosIds: ['', '', ''],
    luminasIds: []
  }
];
