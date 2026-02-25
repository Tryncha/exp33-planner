import { PictoData } from '../types';

const PICTOS: PictoData[] = [
  {
    id: 'accelerating-heal',
    name: 'Accelerating Heal',
    imgData: {
      src: '/pictos/accelerating-heal.png',
      alt: 'Accelerating Heal Picto',
      width: 54,
      height: 54
    },
    effect: 'Healing an ally also applies Rush for 1 turn.',
    luminaPoints: 5,
    stats: {
      health: 329,
      defense: 0,
      speed: 65,
      critRate: 0
    }
  },
  {
    id: 'accelerating-last-stance',
    name: 'Accelerating Last Stance',
    imgData: {
      src: '/pictos/accelerating-last-stance.png',
      alt: 'Accelerating Last Stance Picto',
      width: 54,
      height: 54
    },
    effect: 'Gain Rush if fighting alone.',
    luminaPoints: 3,
    stats: {
      health: 168,
      defense: 0,
      speed: 34,
      critRate: 0
    }
  },
  {
    id: 'accelerating-shots',
    name: 'Accelerating Shots',
    imgData: {
      src: '/pictos/accelerating-shots.png',
      alt: 'Accelerating Shots',
      width: 54,
      height: 54
    },
    effect: '20% chance to gain Rush on Free Aim shot.',
    luminaPoints: 3,
    stats: {
      health: 4869,
      defense: 301,
      speed: 0,
      critRate: 0
    }
  }
];

export default PICTOS;
