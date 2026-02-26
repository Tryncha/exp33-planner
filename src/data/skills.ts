import { PictoData, SkillData } from '../types';

const GUSTAVE_SKILLS: SkillData[] = [
  {
    id: 'from-fire',
    name: 'From Fire',
    imgData: {
      src: '/skills/from-fire.png',
      alt: 'From Fire Skill',
      width: 54,
      height: 54
    },
    characterId: 'gustave',
    effect: "Deals medium single target damage. 3 hits. Uses weapon's element. Heals self by 20% if the target Burns.",
    apCost: 4
  },
  {
    id: 'lumiere-assault',
    name: 'Lumière Assault',
    imgData: {
      src: '/skills/lumiere-assault.png',
      alt: 'Lumière Assault Skill',
      width: 54,
      height: 54
    },
    characterId: 'gustave',
    effect:
      "Deals low single target damage. 5 hits. Uses weapon\'s element. Critical Hits generate 1 additional Charge.",
    apCost: 3
  },
  {
    id: 'marking-shot',
    name: 'Marking Shot',
    imgData: {
      src: '/skills/marking-shot.png',
      alt: 'Marking Shot Skill',
      width: 54,
      height: 54
    },
    characterId: 'gustave',
    effect: 'Deals low single target Lightning damage. 1 hit. Applies Mark.',
    apCost: 2
  },
  {
    id: 'overcharge',
    name: 'Overcharge',
    imgData: {
      src: '/skills/overcharge.png',
      alt: 'Overcharge Skill',
      width: 54,
      height: 54
    },
    characterId: 'gustave',
    effect: 'High Lightning damage based on the amount of Charges. 1 hit. Can Break.',
    apCost: 4
  },
  {
    id: 'powerful',
    name: 'Powerful',
    imgData: {
      src: '/skills/powerful.png',
      alt: 'Powerful Skill',
      width: 54,
      height: 54
    },
    characterId: 'gustave',
    effect: 'Applies Powerful to 1-3 allies, increasing the damage they deal for 3 turns. Give 0 to 2 Charges.',
    apCost: 3
  },
  {
    id: 'recovery',
    name: 'Recovery',
    imgData: {
      src: '/skills/recovery.png',
      alt: 'Recovery Skill',
      width: 54,
      height: 54
    },
    characterId: 'gustave',
    effect: 'Recovers 50% Health and dispels Status Effects. Give 0-2 Charges.',
    apCost: 3
  },
  {
    id: 'shatter',
    name: 'Shatter',
    imgData: {
      src: '/skills/shatter.png',
      alt: 'Shatter Skill',
      width: 54,
      height: 54
    },
    characterId: 'gustave',
    effect:
      'Deals High Lightning damage to all enemies. 1 hit. Can Break. If a target is Broken by the hit, Overcharge is fully Charged.',
    apCost: 5
  },
  {
    id: 'strike-storm',
    name: 'Strike Storm',
    imgData: {
      src: '/skills/strike-storm.png',
      alt: 'Strike Storm Skill',
      width: 54,
      height: 54
    },
    characterId: 'gustave',
    effect:
      "Deals very high single target damage. 6 hits. Uses Weapon's element. Critical Hits generate 2 additional Charges.",
    apCost: 7
  }
];

const SKILLS = [...GUSTAVE_SKILLS];

export default SKILLS;
