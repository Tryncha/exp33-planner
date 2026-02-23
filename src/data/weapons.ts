import { Weapon } from '../types';

const WEAPONS: Weapon[] = [
  {
    id: 'noahram',
    name: 'Noahram',
    imgData: {
      src: '/weapons/noahram.png',
      alt: '',
      width: 36,
      height: 36
    },
    basePower: 2260,
    element: 'Physical',
    passives: ['', '', ''],
    scaling: {
      vitality: 'S'
    }
  },
  {
    id: 'lanceram',
    name: 'Lanceram',
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

export default WEAPONS;
