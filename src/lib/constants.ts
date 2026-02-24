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
    stats: {
      vitality: 0,
      might: 0,
      agility: 0,
      defense: 0,
      luck: 0
    },
    level: 0,
    weaponId: 'noahram',
    abilitiesIds: ['lumiere-assault', 'overcharge'],
    pictosIds: ['', '', ''],
    luminasIds: []
  }
];
