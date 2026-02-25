import { CharacterTemplate } from '../types';

export const CHARACTER_TEMPLATES: CharacterTemplate[] = [
  {
    id: 'gustave-template',
    name: 'Gustave',
    characterId: 'gustave',
    characterName: 'Gustave',
    imgData: {
      src: '/characters/gustave.png',
      alt: '',
      width: 40,
      height: 40
    },
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
    level: 0,
    weaponId: 'noahram',
    abilitiesIds: ['lumiere-assault', 'overcharge'],
    pictosIds: ['accelerating-heal', 'accelerating-last-stance', 'accelerating-shots'],
    luminasIds: [
      'accelerating-heal',
      'accelerating-last-stance',
      'accelerating-shots',
      'accelerating-heal',
      'accelerating-last-stance',
      'accelerating-shots',
      'accelerating-heal',
      'accelerating-last-stance',
      'accelerating-shots'
    ]
  }
];
