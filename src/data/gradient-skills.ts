import { Skill } from '../types';

const LUNE_GRADIENT_SKILLS: Skill[] = [
  {
    id: 'tremor',
    cost: 1,
    characterId: 'lune',
    canBreak: false,
    stains: ['light'],
    en: {
      name: 'Tremor',
      description: "Deals high Earth damage to all enemies. 1 hit. Removes all enemies' Shields."
    },
    es: {
      name: 'Tremor',
      description: "Deals high Earth damage to all enemies. 1 hit. Removes all enemies' Shields."
    }
  },
  {
    id: 'tree-of-life',
    cost: 2,
    characterId: 'lune',
    canBreak: false,
    stains: ['light', 'light'],
    en: {
      name: 'Tree of Life',
      description: 'Cleanses all Status Effect and Heals all allies.'
    },
    es: {
      name: 'Tree of Life',
      description: 'Cleanses all Status Effect and Heals all allies.'
    }
  },
  {
    id: 'sky-break',
    cost: 3,
    characterId: 'lune',
    canBreak: true,
    stains: ['light', 'light', 'light'],
    en: {
      name: 'Sky Break',
      description:
        'Deals extreme damage to all enemies. 1 hit. Element depends on which Stains Lune has the most. Can Break.'
    },
    es: {
      name: 'Sky Break',
      description:
        'Deals extreme damage to all enemies. 1 hit. Element depends on which Stains Lune has the most. Can Break.'
    }
  }
];

const MAELLE_GRADIENT_SKILLS: Skill[] = [
  {
    id: 'virtuose-strike',
    cost: 1,
    characterId: 'maelle',
    canBreak: false,
    en: {
      name: 'Virtuose Strike',
      description: 'Deals high single target Physical damage. 5 hits.'
    },
    es: {
      name: 'Virtuose Strike',
      description: 'Deals high single target Physical damage. 5 hits.'
    }
  },
  {
    id: 'phoenix-flame',
    cost: 2,
    characterId: 'maelle',
    canBreak: false,
    en: {
      name: 'Phoenix Flame',
      description: 'Applies 10 Burn to all enemies and revives all allies with 50 to 70% Health.'
    },
    es: {
      name: 'Phoenix Flame',
      description: 'Applies 10 Burn to all enemies and revives all allies with 50 to 70% Health.'
    }
  },
  {
    id: 'gommage',
    cost: 3,
    characterId: 'maelle',
    canBreak: false,
    en: {
      name: 'Gommage',
      description: 'Kills weak targets. Otherwise deals extreme Void damage. 1 hit.'
    },
    es: {
      name: 'Gommage',
      description: 'Kills weak targets. Otherwise deals extreme Void damage. 1 hit.'
    }
  }
];

const SCIEL_GRADIENT_SKILLS: Skill[] = [
  {
    id: 'shadow-bringer',
    cost: 1,
    characterId: 'sciel',
    canBreak: false,
    en: {
      name: 'Shadow Bringer',
      description: 'Deals high single target Dark damage to random enemies. 10 hits. Applies 1 Foretell per hit.'
    },
    es: {
      name: 'Shadow Bringer',
      description: 'Deals high single target Dark damage to random enemies. 10 hits. Applies 1 Foretell per hit.'
    }
  },
  {
    id: 'doom',
    cost: 2,
    characterId: 'sciel',
    canBreak: true,
    en: {
      name: 'Doom',
      description:
        'Deals very high single target Dark damage. 3 hits. Applies Powerless, Defenceless, and Slow for 3 turns. Can Break.'
    },
    es: {
      name: 'Doom',
      description:
        'Deals very high single target Dark damage. 3 hits. Applies Powerless, Defenceless, and Slow for 3 turns. Can Break.'
    }
  },
  {
    id: 'end-slice',
    cost: 3,
    characterId: 'sciel',
    canBreak: false,
    en: {
      name: 'End Slice',
      description:
        'Deals extreme single target Physical damage. 1 hit. Damage is increased for each Foretell consumed since the beginning of the battle.'
    },
    es: {
      name: 'End Slice',
      description:
        'Deals extreme single target Physical damage. 1 hit. Damage is increased for each Foretell consumed since the beginning of the battle.'
    }
  }
];

const VERSO_GRADIENT_SKILLS: Skill[] = [
  {
    id: 'sabotage',
    cost: 1,
    characterId: 'verso',
    canBreak: false,
    en: {
      name: 'Sabotage',
      description: 'Deals medium Physical damage to all enemies. 1 hit. Applies Mark.'
    },
    es: {
      name: 'Sabotage',
      description: 'Deals medium Physical damage to all enemies. 1 hit. Applies Mark.'
    }
  },
  {
    id: 'striker',
    cost: 2,
    characterId: 'verso',
    canBreak: true,
    en: {
      name: 'Striker',
      description: 'Deals high single target Physical damage. 1 hit. Can break.'
    },
    es: {
      name: 'Striker',
      description: 'Deals high single target Physical damage. 1 hit. Can break.'
    }
  },
  {
    id: 'angels-eyes',
    cost: 3,
    characterId: 'verso',
    canBreak: false,
    en: {
      name: "Angel's Eyes",
      description:
        'Deals extreme Physical damage. 8 hits. Gain 1 additional Perfection per hit. Applies Aureole to Verso, reviving him if he dies.'
    },
    es: {
      name: "Angel's Eyes",
      description:
        'Deals extreme Physical damage. 8 hits. Gain 1 additional Perfection per hit. Applies Aureole to Verso, reviving him if he dies.'
    }
  }
];

const MONOCO_GRADIENT_SKILLS: Skill[] = [
  {
    id: 'mighty-strike',
    cost: 1,
    characterId: 'monoco',
    canBreak: false,
    buffedMask: 'almighty',
    roulettePositions: 2,
    en: {
      name: 'Mighty Strike',
      description:
        "Deals high single target damage. 2 hits. Uses weapon's element. Deals double damage if the target is Stunned. Goes to Almighty Mask."
    },
    es: {
      name: 'Mighty Strike',
      description:
        "Deals high single target damage. 2 hits. Uses weapon's element. Deals double damage if the target is Stunned. Goes to Almighty Mask."
    }
  },
  {
    id: 'sanctuary',
    cost: 2,
    characterId: 'monoco',
    canBreak: false,
    buffedMask: 'almighty',
    roulettePositions: 2,
    en: {
      name: 'Sanctuary',
      description: 'Gives 2 Shields and applies Regen to all allies for 3 turns.'
    },
    es: {
      name: 'Sanctuary',
      description: 'Gives 2 Shields and applies Regen to all allies for 3 turns.'
    }
  },
  {
    id: 'break-point',
    cost: 3,
    characterId: 'monoco',
    canBreak: true,
    buffedMask: 'almighty',
    roulettePositions: 2,
    en: {
      name: 'Break Point',
      description:
        "Deals extreme single target damage. 1 hit. Uses weapon's element. Fills the target's Break Bar and Breaks it."
    },
    es: {
      name: 'Break Point',
      description:
        "Deals extreme single target damage. 1 hit. Uses weapon's element. Fills the target's Break Bar and Breaks it."
    }
  }
];

const GRADIENT_SKILLS = [
  ...LUNE_GRADIENT_SKILLS,
  ...MAELLE_GRADIENT_SKILLS,
  ...SCIEL_GRADIENT_SKILLS,
  ...VERSO_GRADIENT_SKILLS,
  ...MONOCO_GRADIENT_SKILLS
];

export default GRADIENT_SKILLS;
