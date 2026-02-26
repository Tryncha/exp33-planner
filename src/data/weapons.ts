import { WeaponData } from '../types';

const GUSTAVE_VERSO: WeaponData[] = [
  {
    id: 'noahram',
    name: 'Noahram',
    characterIds: ['gustave', 'verso'],
    imgData: {
      src: '/weapons/noahram.png',
      alt: '',
      width: 36,
      height: 36
    },
    basePower: 2260,
    element: 'Physical',
    scaling: {
      vitality: 'S'
    }
  },
  {
    id: 'lanceram',
    name: 'Lanceram',
    characterIds: ['gustave', 'verso'],
    imgData: {
      src: '/weapons/lanceram.png',
      alt: '',
      width: 36,
      height: 36
    },
    basePower: 3713,
    element: 'Physical',
    passives: [
      "Rank can't be lower than C.",
      'Base Attack gives 4 Perfection.',
      'Parrying gives 2 Perfection instead of 1.'
    ],
    scaling: {
      vitality: 'S',
      agility: 'A'
    }
  },
  {
    id: 'glaceso',
    name: 'Glaceso',
    characterIds: ['gustave', 'verso'],
    imgData: {
      src: '/weapons/glaceso.png',
      alt: '',
      width: 36,
      height: 36
    },
    basePower: 2873,
    element: 'Ice',
    passives: [
      '+1 Perfection on Critical hit.',
      'Self-Heal by 2% Health on dealing a Critical hit.',
      'Counterattack is always a Critical hit.'
    ],
    scaling: {
      defense: 'A',
      luck: 'S'
    }
  }
];

const WEAPONS: WeaponData[] = [...GUSTAVE_VERSO];

export default WEAPONS;
