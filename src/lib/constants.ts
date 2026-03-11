import { Build, CharacterData } from '../types';

export const CHARACTER_DATA: CharacterData[] = [
  {
    id: 'gustave',
    name: 'Gustave',
    imgData: {
      src: '/characters/gustave.png',
      alt: 'Gustave Portrait',
      width: 40,
      height: 40
    },
    baseStats: {
      attackPower: 49,
      speed: 212,
      criticalRate: 8,
      health: 150,
      defense: 0
    }
  },
  {
    id: 'lune',
    name: 'Lune',
    imgData: {
      src: '/characters/lune.png',
      alt: 'Lune Portrait',
      width: 40,
      height: 40
    },
    baseStats: {
      attackPower: 51,
      speed: 200,
      criticalRate: 5,
      health: 150,
      defense: 0
    }
  },
  {
    id: 'maelle',
    name: 'Maelle',
    imgData: {
      src: '/characters/maelle.png',
      alt: 'Maelle Portrait',
      width: 40,
      height: 40
    },
    baseStats: {
      attackPower: 105,
      speed: 212,
      criticalRate: 5,
      health: 195,
      defense: 0
    }
  },
  {
    id: 'sciel',
    name: 'Sciel',
    imgData: {
      src: '/characters/sciel.png',
      alt: 'Sciel Portrait',
      width: 40,
      height: 40
    },
    baseStats: {
      attackPower: 279,
      speed: 251,
      criticalRate: 5,
      health: 318,
      defense: 0
    }
  },
  {
    id: 'verso',
    name: 'Verso',
    imgData: {
      src: '/characters/verso.png',
      alt: 'Verso Portrait',
      width: 40,
      height: 40
    },
    baseStats: {
      attackPower: 666,
      speed: 374,
      criticalRate: 14,
      health: 763,
      defense: 71
    }
  },
  {
    id: 'monoco',
    name: 'Monoco',
    imgData: {
      src: '/characters/monoco.png',
      alt: 'Monoco Portrait',
      width: 40,
      height: 40
    },
    baseStats: {
      attackPower: 491,
      speed: 304,
      criticalRate: 5,
      health: 509,
      defense: 0
    }
  }
];

export const CHARACTER_TEMPLATES: Build[] = [
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
    weaponId: 'lunerim',
    skillIds: ['immolation', '', 'ice-lance', '', '', ''],
    pictosIds: ['', '', ''],
    luminasIds: []
  },
  {
    id: 'maelle-template',
    buildName: 'Maelle',
    characterId: 'maelle',
    attributes: {
      vitality: 0,
      might: 0,
      agility: 0,
      defense: 0,
      luck: 0
    },
    weaponId: 'maellum',
    skillIds: ['offensive-switch', '', 'percee', '', 'spark', ''],
    pictosIds: ['', '', ''],
    luminasIds: []
  },
  {
    id: 'sciel-template',
    buildName: 'Sciel',
    characterId: 'sciel',
    attributes: {
      vitality: 0,
      might: 0,
      agility: 0,
      defense: 0,
      luck: 0
    },
    weaponId: 'scieleson',
    skillIds: ['focused-foretell', '', 'twilight-slash', '', '', ''],
    pictosIds: ['', '', ''],
    luminasIds: []
  },
  {
    id: 'verso-template',
    buildName: 'Verso',
    characterId: 'verso',
    attributes: {
      vitality: 0,
      might: 0,
      agility: 0,
      defense: 0,
      luck: 0
    },
    weaponId: 'verleso',
    skillIds: ['assault-zero', '', 'from-fire', '', '', ''],
    pictosIds: ['', '', ''],
    luminasIds: []
  },
  {
    id: 'monoco-template',
    buildName: 'Monoco',
    characterId: 'monoco',
    attributes: {
      vitality: 0,
      might: 0,
      agility: 0,
      defense: 0,
      luck: 0
    },
    weaponId: 'monocaro',
    skillIds: ['chalier-combo', '', 'stalact-punches', '', '', ''],
    pictosIds: ['', '', ''],
    luminasIds: []
  }
];

export const ATTRIBUTES = ['vitality', 'might', 'agility', 'defense', 'luck'] as const;

export const ELEMENTS = ['physical', 'light', 'dark', 'void', 'fire', 'ice', 'earth', 'lightning'] as const;

export const PICTO_STATS = ['speed', 'critRate', 'health', 'defense'] as const;

// Lune
export const LUNE_STAINS = ['fire', 'ice', 'earth', 'lightning', 'light'] as const;

// Sciel
export const SCIEL_CHARGES = ['sun', 'moon'] as const;

// Maelle
export const MAELLE_POSTURES = ['stanceless', 'offensive', 'defensive', 'virtuose'] as const;

// Monoco
export const MONOCO_MASKS = ['caster', 'agile', 'balanced', 'heavy', 'almighty'] as const;

// export const PICTO_CATEGORIES_FROM_GAME = [
//   'base-attack',
//   'free-aim',
//   'critical',
//   'defense',
//   'speed',
//   'damage',
//   'ap',
//   'heal',
//   'shield',
//   'burn',
//   'mark',
//   'buff',
//   'debuff',
//   'status-effect',
//   'parry',
//   'counter',
//   'break',
//   'death',
//   'solo',
//   'gradient',
//   'items'
// ] as const;

export const PICTO_CATEGORIES = [
  'damage',
  'defensive',
  'healing',
  'freeAim',
  'burn',
  'mark',
  'ap',
  'baseAttack',
  'parry',
  'solo',
  'tints',
  'death',
  'revive',
  'shields',
  'immunity',
  'statusEffect',
  'break',
  'gradient',
  'criticalHits',
  'slow',
  'dodge',
  'rush',
  'powerful',
  'shell',
  'weakness',
  'powerless',
  'defenceless',
  'special'
] as const;
