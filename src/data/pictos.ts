import { Picto } from '../types';

const PICTOS: Picto[] = [
  {
    id: 'accelerating-heal',
    luminaPoints: 5,
    types: ['healing', 'rush'],
    stats: {
      health: 329,
      defense: 0,
      speed: 65,
      critRate: 0
    },
    en: {
      name: 'Accelerating Heal',
      effect: 'Healing an ally also applies Rush for 1 turn.'
    },
    es: {
      name: 'Accelerating Heal',
      effect: 'Healing an ally also applies Rush for 1 turn.'
    }
  },
  {
    id: 'accelerating-last-stance',
    luminaPoints: 3,
    types: ['rush', 'solo'],
    stats: {
      health: 168,
      defense: 0,
      speed: 34,
      critRate: 0
    },
    en: {
      name: 'Accelerating Last Stance',
      effect: 'Gain Rush if fighting alone.'
    },
    es: {
      name: 'Accelerating Last Stance',
      effect: 'Gain Rush if fighting alone.'
    }
  },
  {
    id: 'accelerating-shots',
    luminaPoints: 3,
    types: ['free-aim', 'rush'],
    stats: {
      health: 4869,
      defense: 301,
      speed: 0,
      critRate: 0
    },
    en: {
      name: 'Accelerating Shots',
      effect: '20% chance to gain Rush on Free Aim shot.'
    },
    es: {
      name: 'Accelerating Shots',
      effect: '20% chance to gain Rush on Free Aim shot.'
    }
  },
  {
    id: 'accelerating-tint',
    luminaPoints: 5,
    types: ['rush', 'tints'],
    stats: {
      health: 2162,
      defense: 0,
      speed: 434,
      critRate: 0
    },
    en: {
      name: 'Accelerating Tint',
      effect: 'Healing Tints also apply Rush.'
    },
    es: {
      name: 'Accelerating Tint',
      effect: 'Healing Tints also apply Rush.'
    }
  },
  {
    id: 'aegis-revival',
    luminaPoints: 5,
    types: ['revive', 'shields'],
    stats: {
      health: 0,
      defense: 1990,
      speed: 672,
      critRate: 0
    },
    en: {
      name: 'Aegis Revival',
      effect: '+1 Shield on being revived.'
    },
    es: {
      name: 'Aegis Revival',
      effect: '+1 Shield on being revived.'
    }
  },
  {
    id: 'anti-blight',
    luminaPoints: 10,
    types: ['immunity'],
    stats: {
      health: 1897,
      defense: 949,
      speed: 0,
      critRate: 0
    },
    en: {
      name: 'Anti-Blight',
      effect: 'Immune to Blight.'
    },
    es: {
      name: 'Anti-Blight',
      effect: 'Immune to Blight.'
    }
  },
  {
    id: 'anti-burn',
    luminaPoints: 15,
    types: ['immunity'],
    stats: {
      health: 1602,
      defense: 801,
      speed: 0,
      critRate: 0
    },
    en: {
      name: 'Anti-Burn',
      effect: 'Immune to Burn.'
    },
    es: {
      name: 'Anti-Burn',
      effect: 'Immune to Burn.'
    }
  },
  {
    id: 'anti-charm',
    luminaPoints: 10,
    types: ['immunity'],
    stats: {
      health: 599,
      defense: 240,
      speed: 0,
      critRate: 0
    },
    en: {
      name: 'Anti-Charm',
      effect: 'Immune to Charm.'
    },
    es: {
      name: 'Anti-Charm',
      effect: 'Immune to Charm.'
    }
  },
  {
    id: 'anti-freeze',
    luminaPoints: 15,
    types: ['immunity'],
    stats: {
      health: 1464,
      defense: 733,
      speed: 0,
      critRate: 0
    },
    en: {
      name: 'Anti-Freeze',
      effect: 'Immune to Freeze.'
    },
    es: {
      name: 'Anti-Freeze',
      effect: 'Immune to Freeze.'
    }
  },
  {
    id: 'anti-stun',
    luminaPoints: 5,
    types: ['immunity'],
    stats: {
      health: 2757,
      defense: 1572,
      speed: 0,
      critRate: 0
    },
    en: {
      name: 'Anti-Stun',
      effect: 'Immune to Stun.'
    },
    es: {
      name: 'Anti-Stun',
      effect: 'Immune to Stun.'
    }
  },
  {
    id: 'at-deaths-door',
    luminaPoints: 5,
    types: ['damage'],
    stats: {
      health: 0,
      defense: 1817,
      speed: 0,
      critRate: 34
    },
    en: {
      name: "At Death's Door",
      effect: 'Deal 50% more damage if Health is below 10%.'
    },
    es: {
      name: "At Death's Door",
      effect: 'Deal 50% more damage if Health is below 10%.'
    }
  },
  {
    id: 'attack-lifesteal',
    luminaPoints: 15,
    types: ['base-attack', 'healing', 'lifesteal'],
    stats: {
      health: 88,
      defense: 0,
      speed: 0,
      critRate: 4
    },
    en: {
      name: 'Attack Lifesteal',
      effect: 'Recover 15% Health on Base Attack.'
    },
    es: {
      name: 'Attack Lifesteal',
      effect: 'Recover 15% Health on Base Attack.'
    }
  },
  {
    id: 'augmented-aim',
    luminaPoints: 3,
    types: ['free-aim'],
    stats: {
      health: 0,
      defense: 0,
      speed: 21,
      critRate: 4
    },
    en: {
      name: 'Augmented Aim',
      effect: '50% increased Free Aim damage.'
    },
    es: {
      name: 'Augmented Aim',
      effect: '50% increased Free Aim damage.'
    }
  },
  {
    id: 'augmented-attack',
    luminaPoints: 7,
    types: ['base-attack'],
    stats: {
      health: 0,
      defense: 8,
      speed: 10,
      critRate: 0
    },
    en: {
      name: 'Augmented Attack',
      effect: '50% increased Base Attack damage.'
    },
    es: {
      name: 'Augmented Attack',
      effect: '50% increased Base Attack damage.'
    }
  },
  {
    id: 'augmented-counter-i',
    luminaPoints: 3,
    types: ['counterattack'],
    stats: {
      health: 95,
      defense: 0,
      speed: 0,
      critRate: 4
    },
    en: {
      name: 'Augmented Counter I',
      effect: '25% increased Counterattack damage.'
    },
    es: {
      name: 'Augmented Counter I',
      effect: '25% increased Counterattack damage.'
    }
  },
  {
    id: 'augmented-counter-ii',
    luminaPoints: 5,
    types: ['counterattack'],
    stats: {
      health: 0,
      defense: 208,
      speed: 0,
      critRate: 15
    },
    en: {
      name: 'Augmented Counter II',
      effect: '50% increased Counterattack damage.'
    },
    es: {
      name: 'Augmented Counter II',
      effect: '50% increased Counterattack damage.'
    }
  },
  {
    id: 'augmented-counter-iii',
    luminaPoints: 7,
    types: ['counterattack'],
    stats: {
      health: 0,
      defense: 733,
      speed: 0,
      critRate: 23
    },
    en: {
      name: 'Augmented Counter III',
      effect: '75% increased Counterattack damage.'
    },
    es: {
      name: 'Augmented Counter III',
      effect: '75% increased Counterattack damage.'
    }
  },
  {
    id: 'augmented-first-strike',
    luminaPoints: 5,
    types: ['damage'],
    stats: {
      health: 0,
      defense: 0,
      speed: 1008,
      critRate: 18
    },
    en: {
      name: 'Augmented First Strike',
      effect: '50% increased damage on the first hit. Once per battle.'
    },
    es: {
      name: 'Augmented First Strike',
      effect: '50% increased damage on the first hit. Once per battle.'
    }
  },
  {
    id: 'auto-death',
    luminaPoints: 1,
    types: ['death'],
    stats: {
      health: 0,
      defense: 0,
      speed: 0,
      critRate: 26
    },
    en: {
      name: 'Auto Death',
      effect: 'Kill self on battle start.'
    },
    es: {
      name: 'Auto Death',
      effect: 'Kill self on battle start.'
    }
  },
  {
    id: 'auto-powerful',
    luminaPoints: 10,
    types: ['powerful'],
    stats: {
      health: 0,
      defense: 0,
      speed: 241,
      critRate: 20
    },
    en: {
      name: 'Auto Powerful',
      effect: 'Apply Powerful for 3 turns on battle start.'
    },
    es: {
      name: 'Auto Powerful',
      effect: 'Apply Powerful for 3 turns on battle start.'
    }
  },
  {
    id: 'auto-regen',
    luminaPoints: 10,
    types: ['regen'],
    stats: {
      health: 0,
      defense: 479,
      speed: 0,
      critRate: 0
    },
    en: {
      name: 'Auto Regen',
      effect: 'Apply Regen for 3 turns on battle start.'
    },
    es: {
      name: 'Auto Regen',
      effect: 'Apply Regen for 3 turns on battle start.'
    }
  },
  {
    id: 'auto-rush',
    luminaPoints: 10,
    types: ['rush'],
    stats: {
      health: 0,
      defense: 0,
      speed: 112,
      critRate: 7
    },
    en: {
      name: 'Auto Rush',
      effect: 'Apply Rush for 3 turns on battle start.'
    },
    es: {
      name: 'Auto Rush',
      effect: 'Apply Rush for 3 turns on battle start.'
    }
  },
  {
    id: 'auto-shell',
    luminaPoints: 10,
    types: ['shell'],
    stats: {
      health: 411,
      defense: 0,
      speed: 0,
      critRate: 0
    },
    en: {
      name: 'Auto Shell',
      effect: 'Apply Shell for 3 turns on battle start.'
    },
    es: {
      name: 'Auto Shell',
      effect: 'Apply Shell for 3 turns on battle start.'
    }
  },
  {
    id: 'base-shield',
    luminaPoints: 20,
    types: ['shields'],
    stats: {
      health: 0,
      defense: 0,
      speed: 378,
      critRate: 11
    },
    en: {
      name: 'Base Shield',
      effect: '+1 Shield if not affected by any Shield on turn start.'
    },
    es: {
      name: 'Base Shield',
      effect: '+1 Shield if not affected by any Shield on turn start.'
    }
  },
  {
    id: 'beneficial-contamination',
    luminaPoints: 15,
    types: ['status-effect', 'ap'],
    stats: {
      health: 0,
      defense: 274,
      speed: 135,
      critRate: 0
    },
    en: {
      name: 'Beneficial Contamination',
      effect: '+2 AP on applying a Status Effect. Once per turn.'
    },
    es: {
      name: 'Beneficial Contamination',
      effect: '+2 AP on applying a Status Effect. Once per turn.'
    }
  },
  {
    id: 'break-specialist',
    luminaPoints: 1,
    types: ['break'],
    stats: {
      health: 2705,
      defense: 0,
      speed: 546,
      critRate: 0
    },
    en: {
      name: 'Break Specialist',
      effect: 'Break damage is increased by 50%, but base damage is reduced by 20%.'
    },
    es: {
      name: 'Break Specialist',
      effect: 'Break damage is increased by 50%, but base damage is reduced by 20%.'
    }
  },
  {
    id: 'breaker',
    luminaPoints: 10,
    types: ['break'],
    stats: {
      health: 0,
      defense: 0,
      speed: 26,
      critRate: 9
    },
    en: {
      name: 'Breaker',
      effect: '25% increased Break damage.'
    },
    es: {
      name: 'Breaker',
      effect: '25% increased Break damage.'
    }
  },
  {
    id: 'breaking-attack',
    luminaPoints: 10,
    types: ['base-attack', 'break'],
    stats: {
      health: 0,
      defense: 0,
      speed: 154,
      critRate: 17
    },
    en: {
      name: 'Breaking Attack',
      effect: 'Base Attack can Break.'
    },
    es: {
      name: 'Breaking Attack',
      effect: 'Base Attack can Break.'
    }
  },
  {
    id: 'breaking-burn',
    luminaPoints: 5,
    types: ['break', 'burn'],
    stats: {
      health: 0,
      defense: 0,
      speed: 243,
      critRate: 9
    },
    en: {
      name: 'Breaking Burn',
      effect: '25% increased Break damage on Burning enemies.'
    },
    es: {
      name: 'Breaking Burn',
      effect: '25% increased Break damage on Burning enemies.'
    }
  },
  {
    id: 'breaking-counter',
    luminaPoints: 3,
    types: ['break', 'counterattack'],
    stats: {
      health: 0,
      defense: 0,
      speed: 43,
      critRate: 10
    },
    en: {
      name: 'Breaking Counter',
      effect: '50% increased Break damage on Counterattack.'
    },
    es: {
      name: 'Breaking Counter',
      effect: '50% increased Break damage on Counterattack.'
    }
  },
  {
    id: 'breaking-death',
    luminaPoints: 0,
    types: ['break', 'death'],
    stats: {
      health: 0,
      defense: 0,
      speed: 586,
      critRate: 33
    },
    en: {
      name: 'Breaking Death',
      effect: "Fully charge enemy's Break Bar on death."
    },
    es: {
      name: 'Breaking Death',
      effect: "Fully charge enemy's Break Bar on death."
    }
  },
  {
    id: 'breaking-shots',
    luminaPoints: 1,
    types: ['break', 'free-aim'],
    stats: {
      health: 0,
      defense: 0,
      speed: 43,
      critRate: 10
    },
    en: {
      name: 'Breaking Shots',
      effect: '50% increased Break damage with Free Aim shots.'
    },
    es: {
      name: 'Breaking Shots',
      effect: '50% increased Break damage with Free Aim shots.'
    }
  },
  {
    id: 'breaking-slow',
    luminaPoints: 5,
    types: ['break', 'slow'],
    stats: {
      health: 0,
      defense: 0,
      speed: 162,
      critRate: 17
    },
    en: {
      name: 'Breaking Slow',
      effect: '25% increased Break damage against Slowed enemies.'
    },
    es: {
      name: 'Breaking Slow',
      effect: '25% increased Break damage against Slowed enemies.'
    }
  },
  {
    id: 'burn-affinity',
    luminaPoints: 10,
    types: ['burn', 'damage'],
    stats: {
      health: 0,
      defense: 0,
      speed: 439,
      critRate: 12
    },
    en: {
      name: 'Burn Affinity',
      effect: '25% increased damage on Burning targets.'
    },
    es: {
      name: 'Burn Affinity',
      effect: '25% increased damage on Burning targets.'
    }
  },
  {
    id: 'burning-break',
    luminaPoints: 3,
    types: ['break', 'burn'],
    stats: {
      health: 1541,
      defense: 0,
      speed: 0,
      critRate: 24
    },
    en: {
      name: 'Burning Break',
      effect: 'Apply 3 Burn stacks on Breaking a target.'
    },
    es: {
      name: 'Burning Break',
      effect: 'Apply 3 Burn stacks on Breaking a target.'
    }
  },
  {
    id: 'burning-death',
    luminaPoints: 5,
    types: ['burn', 'death'],
    stats: {
      health: 0,
      defense: 0,
      speed: 546,
      critRate: 32
    },
    en: {
      name: 'Burning Death',
      effect: 'Apply 3 Burn to all enemies on Death.'
    },
    es: {
      name: 'Burning Death',
      effect: 'Apply 3 Burn to all enemies on Death.'
    }
  },
  {
    id: 'burning-mark',
    luminaPoints: 15,
    types: ['burn', 'mark'],
    stats: {
      health: 44,
      defense: 32,
      speed: 0,
      critRate: 0
    },
    en: {
      name: 'Burning Mark',
      effect: 'Apply Burn on hitting a Marked enemy.'
    },
    es: {
      name: 'Burning Mark',
      effect: 'Apply Burn on hitting a Marked enemy.'
    }
  },
  {
    id: 'burning-shots',
    luminaPoints: 3,
    types: ['burn', 'free-aim'],
    stats: {
      health: 0,
      defense: 0,
      speed: 1376,
      critRate: 8
    },
    en: {
      name: 'Burning Shots',
      effect: '20% chance to Burn on Free Aim shot.'
    },
    es: {
      name: 'Burning Shots',
      effect: '20% chance to Burn on Free Aim shot.'
    }
  },
  {
    id: 'charging-alteration',
    luminaPoints: 10,
    types: ['gradient'],
    stats: {
      health: 0,
      defense: 1501,
      speed: 546,
      critRate: 0
    },
    en: {
      name: 'Charging Alteration',
      effect: '+10% of a Gradient Charge on applying a Buff. Once per turn.'
    },
    es: {
      name: 'Charging Alteration',
      effect: '+10% of a Gradient Charge on applying a Buff. Once per turn.'
    }
  },
  {
    id: 'charging-attack',
    luminaPoints: 7,
    types: ['base-attack', 'gradient'],
    stats: {
      health: 0,
      defense: 0,
      speed: 266,
      critRate: 22
    },
    en: {
      name: 'Charging Attack',
      effect: '+15% of a Gradient Charge on Base Attack.'
    },
    es: {
      name: 'Charging Attack',
      effect: '+15% of a Gradient Charge on Base Attack.'
    }
  },
  {
    id: 'charging-burn',
    luminaPoints: 10,
    types: ['gradient', 'burn'],
    stats: {
      health: 3152,
      defense: 0,
      speed: 639,
      critRate: 0
    },
    en: {
      name: 'Charging Burn',
      effect: '+20% of a Gradient Charge on applying Burn. Once per turn.'
    },
    es: {
      name: 'Charging Burn',
      effect: '+20% of a Gradient Charge on applying Burn. Once per turn.'
    }
  },
  {
    id: 'charging-counter',
    luminaPoints: 10,
    types: ['gradient', 'counterattack'],
    stats: {
      health: 1333,
      defense: 647,
      speed: 0,
      critRate: 0
    },
    en: {
      name: 'Charging Counter',
      effect: '+10% of a Gradient Charge on Counterattack.'
    },
    es: {
      name: 'Charging Counter',
      effect: '+10% of a Gradient Charge on Counterattack.'
    }
  },
  {
    id: 'charging-critical',
    luminaPoints: 10,
    types: ['gradient', 'critical'],
    stats: {
      health: 0,
      defense: 1891,
      speed: 0,
      critRate: 35
    },
    en: {
      name: 'Charging Critical',
      effect: '+20% of a Gradient Charge on hitting a Critical Hit. Once per turn.'
    },
    es: {
      name: 'Charging Critical',
      effect: '+20% of a Gradient Charge on hitting a Critical Hit. Once per turn.'
    }
  },
  {
    id: 'charging-mark',
    luminaPoints: 10,
    types: ['gradient', 'mark'],
    stats: {
      health: 0,
      defense: 0,
      speed: 413,
      critRate: 27
    },
    en: {
      name: 'Charging Mark',
      effect: '+20% of a Gradient Charge on hitting a Marked target. Once per turn.'
    },
    es: {
      name: 'Charging Mark',
      effect: '+20% of a Gradient Charge on hitting a Marked target. Once per turn.'
    }
  },
  {
    id: 'charging-stun',
    luminaPoints: 5,
    types: ['gradient', 'break'],
    stats: {
      health: 922,
      defense: 0,
      speed: 182,
      critRate: 0
    },
    en: {
      name: 'Charging Stun',
      effect: '+5% of a Gradient Charge on hitting a Stunned enemy.'
    },
    es: {
      name: 'Charging Stun',
      effect: '+5% of a Gradient Charge on hitting a Stunned enemy.'
    }
  },
  {
    id: 'charging-tint',
    luminaPoints: 2,
    types: ['gradient', 'tints'],
    stats: {
      health: 329,
      defense: 122,
      speed: 0,
      critRate: 0
    },
    en: {
      name: 'Charging Tint',
      effect: '+5% of a Gradient Charge on using an item.'
    },
    es: {
      name: 'Charging Tint',
      effect: '+5% of a Gradient Charge on using an item.'
    }
  },
  {
    id: 'charging-weakness',
    luminaPoints: 5,
    types: ['gradient', 'weakness'],
    stats: {
      health: 0,
      defense: 0,
      speed: 280,
      critRate: 23
    },
    en: {
      name: 'Charging Weakness',
      effect: '+15% of a Gradient Charge on hitting a Weakness. Once per turn.'
    },
    es: {
      name: 'Charging Weakness',
      effect: '+15% of a Gradient Charge on hitting a Weakness. Once per turn.'
    }
  },
  {
    id: 'cheater',
    luminaPoints: 40,
    types: ['special'],
    stats: {
      health: 1198,
      defense: 0,
      speed: 400,
      critRate: 0
    },
    en: {
      name: 'Cheater',
      effect: 'Always play twice in a row.'
    },
    es: {
      name: 'Cheater',
      effect: 'Always play twice in a row.'
    }
  },
  {
    id: 'cleas-life',
    luminaPoints: 30,
    types: ['healing'],
    stats: {
      health: 5591,
      defense: 0,
      speed: 0,
      critRate: 0
    },
    en: {
      name: "Clea's Life",
      effect: 'On turn start, if no damage taken since last turn, recover 100% Health.'
    },
    es: {
      name: "Clea's Life",
      effect: 'On turn start, if no damage taken since last turn, recover 100% Health.'
    }
  },
  {
    id: 'cleansing-tint',
    luminaPoints: 5,
    types: ['tints', 'status-effect'],
    stats: {
      health: 778,
      defense: 319,
      speed: 0,
      critRate: 0
    },
    en: {
      name: 'Cleansing Tint',
      effect: 'Healing Tints also remove all Status Effects from the target.'
    },
    es: {
      name: 'Cleansing Tint',
      effect: 'Healing Tints also remove all Status Effects from the target.'
    }
  },
  {
    id: 'combo-attack-i',
    luminaPoints: 10,
    types: ['base-attack'],
    stats: {
      health: 0,
      defense: 0,
      speed: 93,
      critRate: 6
    },
    en: {
      name: 'Combo Attack I',
      effect: 'Base Attack has 1 extra hit.'
    },
    es: {
      name: 'Combo Attack I',
      effect: 'Base Attack has 1 extra hit.'
    }
  },
  {
    id: 'combo-attack-ii',
    luminaPoints: 20,
    types: ['base-attack'],
    stats: {
      health: 0,
      defense: 0,
      speed: 836,
      critRate: 16
    },
    en: {
      name: 'Combo Attack II',
      effect: 'Base Attack has 1 extra hit.'
    },
    es: {
      name: 'Combo Attack II',
      effect: 'Base Attack has 1 extra hit.'
    }
  },
  {
    id: 'combo-attack-iii',
    luminaPoints: 30,
    types: ['base-attack'],
    stats: {
      health: 0,
      defense: 0,
      speed: 619,
      critRate: 14
    },
    en: {
      name: 'Combo Attack III',
      effect: 'Base Attack has 1 extra hit.'
    },
    es: {
      name: 'Combo Attack III',
      effect: 'Base Attack has 1 extra hit.'
    }
  },
  {
    id: 'confident',
    luminaPoints: 20,
    types: ['defensive'],
    stats: {
      health: 0,
      defense: 0,
      speed: 519,
      critRate: 31
    },
    en: {
      name: 'Confident',
      effect: "Take 50% less damage, but can't be healed."
    },
    es: {
      name: 'Confident',
      effect: "Take 50% less damage, but can't be healed."
    }
  },
  {
    id: 'confident-fighter',
    luminaPoints: 15,
    types: ['damage'],
    stats: {
      health: 222,
      defense: 0,
      speed: 0,
      critRate: 20
    },
    en: {
      name: 'Confident Fighter',
      effect: "Deal 30% more damage, but can't be healed."
    },
    es: {
      name: 'Confident Fighter',
      effect: "Deal 30% more damage, but can't be healed."
    }
  },
  {
    id: 'critical-break',
    luminaPoints: 5,
    types: ['break', 'critical'],
    stats: {
      health: 0,
      defense: 0,
      speed: 203,
      critRate: 8
    },
    en: {
      name: 'Critical Break',
      effect: '25% increased Break damage on Critical hits.'
    },
    es: {
      name: 'Critical Break',
      effect: '25% increased Break damage on Critical hits.'
    }
  },
  {
    id: 'critical-burn',
    luminaPoints: 0,
    types: ['critical', 'burn'],
    stats: {
      health: 0,
      defense: 0,
      speed: 413,
      critRate: 27
    },
    en: {
      name: 'Critical Burn',
      effect: '25% increased Critical Chance on Burning enemies.'
    },
    es: {
      name: 'Critical Burn',
      effect: '25% increased Critical Chance on Burning enemies.'
    }
  },
  {
    id: 'critical-moment',
    luminaPoints: 0,
    types: ['critical'],
    stats: {
      health: 0,
      defense: 0,
      speed: 26,
      critRate: 7
    },
    en: {
      name: 'Critical Moment',
      effect: '50% increased Critical Chance if Health is below 30%.'
    },
    es: {
      name: 'Critical Moment',
      effect: '50% increased Critical Chance if Health is below 30%.'
    }
  },
  {
    id: 'critical-stun',
    luminaPoints: 5,
    types: ['critical', 'break'],
    stats: {
      health: 0,
      defense: 681,
      speed: 0,
      critRate: 23
    },
    en: {
      name: 'Critical Stun',
      effect: '100% Critical Chance on hitting a Stunned target.'
    },
    es: {
      name: 'Critical Stun',
      effect: '100% Critical Chance on hitting a Stunned target.'
    }
  },
  {
    id: 'critical-vulnerability',
    luminaPoints: 5,
    types: ['critical', 'defenceless'],
    stats: {
      health: 0,
      defense: 116,
      speed: 62,
      critRate: 0
    },
    en: {
      name: 'Critical Vulnerability',
      effect: '25% increased Critical Chance on Defenceless enemies.'
    },
    es: {
      name: 'Critical Vulnerability',
      effect: '25% increased Critical Chance on Defenceless enemies.'
    }
  },
  {
    id: 'critical-weakness',
    luminaPoints: 5,
    types: ['critical', 'weakness'],
    stats: {
      health: 0,
      defense: 0,
      speed: 670,
      critRate: 14
    },
    en: {
      name: 'Critical Weakness',
      effect: '25% increased Critical Chance on Weakness.'
    },
    es: {
      name: 'Critical Weakness',
      effect: '25% increased Critical Chance on Weakness.'
    }
  },
  {
    id: 'dead-energy-i',
    luminaPoints: 2,
    types: ['ap'],
    stats: {
      health: 0,
      defense: 0,
      speed: 162,
      critRate: 17
    },
    en: {
      name: 'Dead Energy I',
      effect: '+3 AP on killing an enemy.'
    },
    es: {
      name: 'Dead Energy I',
      effect: '+3 AP on killing an enemy.'
    }
  },
  {
    id: 'dead-energy-ii',
    luminaPoints: 2,
    types: ['ap'],
    stats: {
      health: 0,
      defense: 0,
      speed: 162,
      critRate: 7
    },
    en: {
      name: 'Dead Energy II',
      effect: '+3 AP on killing an enemy.'
    },
    es: {
      name: 'Dead Energy II',
      effect: '+3 AP on killing an enemy.'
    }
  },
  {
    id: 'death-bomb',
    luminaPoints: 5,
    types: ['death'],
    stats: {
      health: 0,
      defense: 0,
      speed: 43,
      critRate: 10
    },
    en: {
      name: 'Death Bomb',
      effect: 'On Death, deal damage to all enemies.'
    },
    es: {
      name: 'Death Bomb',
      effect: 'On Death, deal damage to all enemies.'
    }
  },
  {
    id: 'defensive-mode',
    luminaPoints: 1,
    types: ['defensive'],
    stats: {
      health: 216,
      defense: 71,
      speed: 0,
      critRate: 0
    },
    en: {
      name: 'Defensive Mode',
      effect: 'On receiving damage, consume 1 AP to take 30% less damage, if possible.'
    },
    es: {
      name: 'Defensive Mode',
      effect: 'On receiving damage, consume 1 AP to take 30% less damage, if possible.'
    }
  },
  {
    id: 'dodger',
    luminaPoints: 1,
    types: ['ap', 'dodge'],
    stats: {
      health: 0,
      defense: 0,
      speed: 12,
      critRate: 3
    },
    en: {
      name: 'Dodger',
      effect: 'Gain 1 AP on Perfect Dodge. Once per turn.'
    },
    es: {
      name: 'Dodger',
      effect: 'Gain 1 AP on Perfect Dodge. Once per turn.'
    }
  },
  {
    id: 'double-burn',
    luminaPoints: 30,
    types: ['burn'],
    stats: {
      health: 0,
      defense: 0,
      speed: 399,
      critRate: 11
    },
    en: {
      name: 'Double Burn',
      effect: 'On applying a Burn stack, apply a second one.'
    },
    es: {
      name: 'Double Burn',
      effect: 'On applying a Burn stack, apply a second one.'
    }
  },
  {
    id: 'double-mark',
    luminaPoints: 20,
    types: ['mark'],
    stats: {
      health: 0,
      defense: 0,
      speed: 236,
      critRate: 0
    },
    en: {
      name: 'Double Mark',
      effect: 'Mark requires 1 more hit to be removed.'
    },
    es: {
      name: 'Double Mark',
      effect: 'Mark requires 1 more hit to be removed.'
    }
  },
  {
    id: 'draining-cleanse',
    luminaPoints: 15,
    types: ['status-effect'],
    stats: {
      health: 2000,
      defense: 324,
      speed: 0,
      critRate: 0
    },
    en: {
      name: 'Draining Cleanse',
      effect: 'Consume 1 AP to prevent Status Effects application, if possible.'
    },
    es: {
      name: 'Draining Cleanse',
      effect: 'Consume 1 AP to prevent Status Effects application, if possible.'
    }
  },
  {
    id: 'effective-heal',
    luminaPoints: 30,
    types: ['healing'],
    stats: {
      health: 284,
      defense: 341,
      speed: 0,
      critRate: 0
    },
    en: {
      name: 'Effective Heal',
      effect: 'Double all Heals received.'
    },
    es: {
      name: 'Effective Heal',
      effect: 'Double all Heals received.'
    }
  },
  {
    id: 'effective-support',
    luminaPoints: 5,
    types: ['ap', 'tints'],
    stats: {
      health: 721,
      defense: 0,
      speed: 142,
      critRate: 0
    },
    en: {
      name: 'Effective Support',
      effect: '+2 AP on using an item.'
    },
    es: {
      name: 'Effective Support',
      effect: '+2 AP on using an item.'
    }
  },
  {
    id: 'empowering-attack',
    luminaPoints: 10,
    types: ['powerful', 'base-attack'],
    stats: {
      health: 0,
      defense: 0,
      speed: 399,
      critRate: 11
    },
    en: {
      name: 'Empowering Attack',
      effect: 'Gain Powerful for 1 turn on Base Attack.'
    },
    es: {
      name: 'Empowering Attack',
      effect: 'Gain Powerful for 1 turn on Base Attack.'
    }
  },
  {
    id: 'empowering-break',
    luminaPoints: 3,
    types: ['powerful', 'break'],
    stats: {
      health: 0,
      defense: 0,
      speed: 546,
      critRate: 32
    },
    en: {
      name: 'Empowering Break',
      effect: 'Gain Powerful on Breaking a target.'
    },
    es: {
      name: 'Empowering Break',
      effect: 'Gain Powerful on Breaking a target.'
    }
  },
  {
    id: 'empowering-dodge',
    luminaPoints: 5,
    types: ['damage', 'dodge'],
    stats: {
      health: 0,
      defense: 0,
      speed: 162,
      critRate: 17
    },
    en: {
      name: 'Empowering Dodge',
      effect: '5% increased damage for each consecutive successful Dodge. Can stack up to 10 times.'
    },
    es: {
      name: 'Empowering Dodge',
      effect: '5% increased damage for each consecutive successful Dodge. Can stack up to 10 times.'
    }
  },
  {
    id: 'empowering-last-stand',
    luminaPoints: 3,
    types: ['powerful', 'solo'],
    stats: {
      health: 168,
      defense: 0,
      speed: 0,
      critRate: 10
    },
    en: {
      name: 'Empowering Last Stand',
      effect: 'Gain Powerful if fighting alone.'
    },
    es: {
      name: 'Empowering Last Stand',
      effect: 'Gain Powerful if fighting alone.'
    }
  },
  {
    id: 'empowering-parry',
    luminaPoints: 5,
    types: ['parry', 'damage'],
    stats: {
      health: 0,
      defense: 0,
      speed: 162,
      critRate: 17
    },
    en: {
      name: 'Empowering Parry',
      effect:
        'Each successful Parry increases damage by 5% until end of the following turn. Taking any damage removes this buff.'
    },
    es: {
      name: 'Empowering Parry',
      effect:
        'Each successful Parry increases damage by 5% until end of the following turn. Taking any damage removes this buff.'
    }
  },
  {
    id: 'empowering-tint',
    luminaPoints: 5,
    types: ['tints', 'powerful'],
    stats: {
      health: 2705,
      defense: 0,
      speed: 546,
      critRate: 0
    },
    en: {
      name: 'Empowering Tint',
      effect: 'Healing Tints also apply Powerful.'
    },
    es: {
      name: 'Empowering Tint',
      effect: 'Healing Tints also apply Powerful.'
    }
  },
  {
    id: 'energetic-healer',
    luminaPoints: 5,
    types: ['ap', 'healing'],
    stats: {
      health: 0,
      defense: 1426,
      speed: 519,
      critRate: 0
    },
    en: {
      name: 'Energetic Healer',
      effect: '+2 AP on Healing an ally. Once per turn.'
    },
    es: {
      name: 'Energetic Healer',
      effect: '+2 AP on Healing an ally. Once per turn.'
    }
  },
  {
    id: 'energising-attack-i',
    luminaPoints: 10,
    types: ['ap', 'base-attack'],
    stats: {
      health: 0,
      defense: 0,
      speed: 958,
      critRate: 18
    },
    en: {
      name: 'Energising Attack I',
      effect: '+1 AP on Base Attack.'
    },
    es: {
      name: 'Energising Attack I',
      effect: '+1 AP on Base Attack.'
    }
  },
  {
    id: 'energising-attack-ii',
    luminaPoints: 15,
    types: ['ap', 'base-attack'],
    stats: {
      health: 0,
      defense: 120,
      speed: 177,
      critRate: 0
    },
    en: {
      name: 'Energising Attack II',
      effect: '+1 AP on Base Attack.'
    },
    es: {
      name: 'Energising Attack II',
      effect: '+1 AP on Base Attack.'
    }
  },
  {
    id: 'energising-break',
    luminaPoints: 3,
    types: ['ap', 'break'],
    stats: {
      health: 0,
      defense: 0,
      speed: 14,
      critRate: 7
    },
    en: {
      name: 'Energising Break',
      effect: '+3 AP on Breaking a target.'
    },
    es: {
      name: 'Energising Break',
      effect: '+3 AP on Breaking a target.'
    }
  },
  {
    id: 'energising-burn',
    luminaPoints: 10,
    types: ['ap', 'burn'],
    stats: {
      health: 0,
      defense: 401,
      speed: 321,
      critRate: 0
    },
    en: {
      name: 'Energising Burn',
      effect: '+1 AP on applying Burn. Once per turn.'
    },
    es: {
      name: 'Energising Burn',
      effect: '+1 AP on applying Burn. Once per turn.'
    }
  },
  {
    id: 'energising-cleanse',
    luminaPoints: 10,
    types: ['status-effect', 'ap'],
    stats: {
      health: 1166,
      defense: 160,
      speed: 0,
      critRate: 0
    },
    en: {
      name: 'Energising Cleanse',
      effect: 'Dispel the first negative Status Effect received and gain 2 AP.'
    },
    es: {
      name: 'Energising Cleanse',
      effect: 'Dispel the first negative Status Effect received and gain 2 AP.'
    }
  },
  {
    id: 'energising-death',
    luminaPoints: 5,
    types: ['death', 'ap'],
    stats: {
      health: 0,
      defense: 771,
      speed: 308,
      critRate: 0
    },
    en: {
      name: 'Energising Death',
      effect: 'On death, +4 AP to allies.'
    },
    es: {
      name: 'Energising Death',
      effect: 'On death, +4 AP to allies.'
    }
  },
  {
    id: 'energising-gradient',
    luminaPoints: 10,
    types: ['ap', 'gradient'],
    stats: {
      health: 0,
      defense: 0,
      speed: 293,
      critRate: 10
    },
    en: {
      name: 'Energising Gradient',
      effect: '+1 AP per Gradient Charge consumed.'
    },
    es: {
      name: 'Energising Gradient',
      effect: '+1 AP per Gradient Charge consumed.'
    }
  },
  {
    id: 'energising-heal',
    luminaPoints: 10,
    types: ['healing', 'ap'],
    stats: {
      health: 206,
      defense: 0,
      speed: 41,
      critRate: 0
    },
    en: {
      name: 'Energising Heal',
      effect: 'On Healing an ally, also give 2 AP.'
    },
    es: {
      name: 'Energising Heal',
      effect: 'On Healing an ally, also give 2 AP.'
    }
  },
  {
    id: 'energising-jump',
    luminaPoints: 5,
    types: ['ap', 'jump'],
    stats: {
      health: 44,
      defense: 0,
      speed: 29,
      critRate: 0
    },
    en: {
      name: 'Energising Jump',
      effect: '+1 AP on Jump Counterattack.'
    },
    es: {
      name: 'Energising Jump',
      effect: '+1 AP on Jump Counterattack.'
    }
  },
  {
    id: 'energising-pain',
    luminaPoints: 10,
    types: ['ap'],
    stats: {
      health: 3855,
      defense: 713,
      speed: 0,
      critRate: 0
    },
    en: {
      name: 'Energising Pain',
      effect: 'No longer gain AP on Parry. +1 AP on getting hit.'
    },
    es: {
      name: 'Energising Pain',
      effect: 'No longer gain AP on Parry. +1 AP on getting hit.'
    }
  },
  {
    id: 'energising-parry',
    luminaPoints: 15,
    types: ['ap', 'parry'],
    stats: {
      health: 6303,
      defense: 0,
      speed: 0,
      critRate: 0
    },
    en: {
      name: 'Energising Parry',
      effect: '+1 AP on successful Parry.'
    },
    es: {
      name: 'Energising Parry',
      effect: '+1 AP on successful Parry.'
    }
  },
  {
    id: 'energising-powerful',
    luminaPoints: 10,
    types: ['ap', 'powerful'],
    stats: {
      health: 0,
      defense: 373,
      speed: 173,
      critRate: 0
    },
    en: {
      name: 'Energising Powerful',
      effect: 'Give 2 AP on applying Powerful.'
    },
    es: {
      name: 'Energising Powerful',
      effect: 'Give 2 AP on applying Powerful.'
    }
  },
  {
    id: 'energising-revive',
    luminaPoints: 5,
    types: ['ap', 'revive'],
    stats: {
      health: 270,
      defense: 96,
      speed: 0,
      critRate: 0
    },
    en: {
      name: 'Energising Revive',
      effect: '+3 AP to all allies when revived.'
    },
    es: {
      name: 'Energising Revive',
      effect: '+3 AP to all allies when revived.'
    }
  },
  {
    id: 'energising-rush',
    luminaPoints: 10,
    types: ['ap', 'rush'],
    stats: {
      health: 0,
      defense: 801,
      speed: 321,
      critRate: 0
    },
    en: {
      name: 'Energising Rush',
      effect: 'Give 2 AP on applying Rush.'
    },
    es: {
      name: 'Energising Rush',
      effect: 'Give 2 AP on applying Rush.'
    }
  },
  {
    id: 'energising-shell',
    luminaPoints: 10,
    types: ['ap', 'shell'],
    stats: {
      health: 0,
      defense: 319,
      speed: 154,
      critRate: 0
    },
    en: {
      name: 'Energising Shell',
      effect: 'Give 2 AP on applying Shell.'
    },
    es: {
      name: 'Energising Shell',
      effect: 'Give 2 AP on applying Shell.'
    }
  },
  {
    id: 'energising-shots',
    luminaPoints: 0,
    types: ['ap', 'free-aim'],
    stats: {
      health: 0,
      defense: 0,
      speed: 779,
      critRate: 16
    },
    en: {
      name: 'Energising Shots',
      effect: '20% chance to gain 1 AP on Free Aim shot.'
    },
    es: {
      name: 'Energising Shots',
      effect: '20% chance to gain 1 AP on Free Aim shot.'
    }
  },
  {
    id: 'energising-start-i',
    luminaPoints: 5,
    types: ['ap'],
    stats: {
      health: 320,
      defense: 0,
      speed: 0,
      critRate: 0
    },
    en: {
      name: 'Energising Start I',
      effect: '+1 AP on battle start.'
    },
    es: {
      name: 'Energising Start I',
      effect: '+1 AP on battle start.'
    }
  },
  {
    id: 'energising-start-ii',
    luminaPoints: 10,
    types: ['ap'],
    stats: {
      health: 175,
      defense: 0,
      speed: 0,
      critRate: 0
    },
    en: {
      name: 'Energising Start II',
      effect: '+1 AP on battle start.'
    },
    es: {
      name: 'Energising Start II',
      effect: '+1 AP on battle start.'
    }
  },
  {
    id: 'energising-start-iii',
    luminaPoints: 15,
    types: ['ap'],
    stats: {
      health: 320,
      defense: 0,
      speed: 0,
      critRate: 0
    },
    en: {
      name: 'Energising Start III',
      effect: '+1 AP on battle start.'
    },
    es: {
      name: 'Energising Start III',
      effect: '+1 AP on battle start.'
    }
  },
  {
    id: 'energising-start-iv',
    luminaPoints: 20,
    types: ['ap'],
    stats: {
      health: 513,
      defense: 0,
      speed: 0,
      critRate: 0
    },
    en: {
      name: 'Energising Start IV',
      effect: '+1 AP on battle start.'
    },
    es: {
      name: 'Energising Start IV',
      effect: '+1 AP on battle start.'
    }
  },
  {
    id: 'energising-stun',
    luminaPoints: 10,
    types: ['ap', 'break'],
    stats: {
      health: 0,
      defense: 519,
      speed: 31,
      critRate: 0
    },
    en: {
      name: 'Energising Stun',
      effect: '+1 AP on hitting a Stunned target with a Skill.'
    },
    es: {
      name: 'Energising Stun',
      effect: '+1 AP on hitting a Stunned target with a Skill.'
    }
  },
  {
    id: 'energising-turn',
    luminaPoints: 20,
    types: ['ap'],
    stats: {
      health: 0,
      defense: 1277,
      speed: 0,
      critRate: 0
    },
    en: {
      name: 'Energising Turn',
      effect: '+1 AP on turn start.'
    },
    es: {
      name: 'Energising Turn',
      effect: '+1 AP on turn start.'
    }
  },
  {
    id: 'energy-master',
    luminaPoints: 40,
    types: ['ap'],
    stats: {
      health: 4970,
      defense: 0,
      speed: 0,
      critRate: 0
    },
    en: {
      name: 'Energy Master',
      effect: 'Every AP gain is increased by 1.'
    },
    es: {
      name: 'Energy Master',
      effect: 'Every AP gain is increased by 1.'
    }
  },
  {
    id: 'enfeebling-attack',
    luminaPoints: 10,
    types: ['base-attack', 'powerless'],
    stats: {
      health: 389,
      defense: 478,
      speed: 0,
      critRate: 0
    },
    en: {
      name: 'Enfeebling Attack',
      effect: 'Base Attack applies Powerless for 1 turn.'
    },
    es: {
      name: 'Enfeebling Attack',
      effect: 'Base Attack applies Powerless for 1 turn.'
    }
  },
  {
    id: 'enfeebling-mark',
    luminaPoints: 10,
    types: ['mark'],
    stats: {
      health: 0,
      defense: 102,
      speed: 21,
      critRate: 0
    },
    en: {
      name: 'Enfeebling Mark',
      effect: 'Marked targets deal 30% less damage.'
    },
    es: {
      name: 'Enfeebling Mark',
      effect: 'Marked targets deal 30% less damage.'
    }
  },
  {
    id: 'exhausting-power',
    luminaPoints: 2,
    types: ['damage'],
    stats: {
      health: 270,
      defense: 96,
      speed: 0,
      critRate: 0
    },
    en: {
      name: 'Exhausting Power',
      effect: '50% increased damage when Exhausted.'
    },
    es: {
      name: 'Exhausting Power',
      effect: '50% increased damage when Exhausted.'
    }
  },
  {
    id: 'exposing-attack',
    luminaPoints: 10,
    types: ['base-attack', 'defenceless'],
    stats: {
      health: 0,
      defense: 20,
      speed: 4,
      critRate: 0
    },
    en: {
      name: 'Exposing Attack',
      effect: 'Base Attack applies Defenceless for 1 turn.'
    },
    es: {
      name: 'Exposing Attack',
      effect: 'Base Attack applies Defenceless for 1 turn.'
    }
  },
  {
    id: 'exposing-break',
    luminaPoints: 5,
    types: ['defenceless', 'break'],
    stats: {
      health: 0,
      defense: 681,
      speed: 280,
      critRate: 0
    },
    en: {
      name: 'Exposing Break',
      effect: 'Apply Defenceless on Break.'
    },
    es: {
      name: 'Exposing Break',
      effect: 'Apply Defenceless on Break.'
    }
  },
  {
    id: 'faster-than-strong',
    luminaPoints: 10,
    types: ['special'],
    stats: {
      health: 876,
      defense: 373,
      speed: 0,
      critRate: 0
    },
    en: {
      name: 'Faster Than Strong',
      effect: 'Always play twice in a row, but deal 50% less damage.'
    },
    es: {
      name: 'Faster Than Strong',
      effect: 'Always play twice in a row, but deal 50% less damage.'
    }
  },
  {
    id: 'first-offensive',
    luminaPoints: 5,
    types: ['damage'],
    stats: {
      health: 0,
      defense: 75,
      speed: 13,
      critRate: 0
    },
    en: {
      name: 'First Offensive',
      effect: 'First hit dealt and taken deals 50% more damage.'
    },
    es: {
      name: 'First Offensive',
      effect: 'First hit dealt and taken deals 50% more damage.'
    }
  },
  {
    id: 'first-strike',
    luminaPoints: 10,
    types: ['special'],
    stats: {
      health: 0,
      defense: 41,
      speed: 10,
      critRate: 0
    },
    en: {
      name: 'First Strike',
      effect: 'Play first.'
    },
    es: {
      name: 'First Strike',
      effect: 'Play first.'
    }
  },
  {
    id: 'fueling-break',
    luminaPoints: 5,
    types: ['break', 'burn'],
    stats: {
      health: 0,
      defense: 507,
      speed: 31,
      critRate: 0
    },
    en: {
      name: 'Fueling Break',
      effect: 'Breaking a target also doubles its Burn amount.'
    },
    es: {
      name: 'Fueling Break',
      effect: 'Breaking a target also doubles its Burn amount.'
    }
  },
  {
    id: 'full-strength',
    luminaPoints: 15,
    types: ['damage'],
    stats: {
      health: 876,
      defense: 373,
      speed: 0,
      critRate: 0
    },
    en: {
      name: 'Full Strength',
      effect: '25% increased damage on full Health.'
    },
    es: {
      name: 'Full Strength',
      effect: '25% increased damage on full Health.'
    }
  },
  {
    id: 'glass-canon',
    luminaPoints: 10,
    types: ['damage'],
    stats: {
      health: 0,
      defense: 532,
      speed: 0,
      critRate: 0
    },
    en: {
      name: 'Glass Canon',
      effect: 'Deal 25% more damage, but take 25% more damage.'
    },
    es: {
      name: 'Glass Canon',
      effect: 'Deal 25% more damage, but take 25% more damage.'
    }
  },
  {
    id: 'gradient-break',
    luminaPoints: 0,
    types: ['gradient', 'break'],
    stats: {
      health: 0,
      defense: 434,
      speed: 28,
      critRate: 0
    },
    en: {
      name: 'Gradient Break',
      effect: '+50% of a Gradient Charge on Breaking a target.'
    },
    es: {
      name: 'Gradient Break',
      effect: '+50% of a Gradient Charge on Breaking a target.'
    }
  },
  {
    id: 'gradient-breaker',
    luminaPoints: 5,
    types: ['break', 'gradient'],
    stats: {
      health: 0,
      defense: 546,
      speed: 32,
      critRate: 0
    },
    en: {
      name: 'Gradient Breaker',
      effect: '50% increased Break damage with Gradient Attacks.'
    },
    es: {
      name: 'Gradient Breaker',
      effect: '50% increased Break damage with Gradient Attacks.'
    }
  },
  {
    id: 'gradient-fighter',
    luminaPoints: 5,
    types: ['damage', 'gradient'],
    stats: {
      health: 0,
      defense: 182,
      speed: 18,
      critRate: 0
    },
    en: {
      name: 'Gradient Fighter',
      effect: '25% increased damage with Gradient Attacks.'
    },
    es: {
      name: 'Gradient Fighter',
      effect: '25% increased damage with Gradient Attacks.'
    }
  },
  {
    id: 'greater-defenceless',
    luminaPoints: 15,
    types: ['defenceless'],
    stats: {
      health: 0,
      defense: 293,
      speed: 23,
      critRate: 0
    },
    en: {
      name: 'Greater Defenceless',
      effect: '+15% to Defenceless damage amplification.'
    },
    es: {
      name: 'Greater Defenceless',
      effect: '+15% to Defenceless damage amplification.'
    }
  },
  {
    id: 'greater-powerful',
    luminaPoints: 10,
    types: ['powerful'],
    stats: {
      health: 0,
      defense: 59,
      speed: 13,
      critRate: 0
    },
    en: {
      name: 'Greater Powerful',
      effect: '+15% to Powerful damage increase.'
    },
    es: {
      name: 'Greater Powerful',
      effect: '+15% to Powerful damage increase.'
    }
  },
  {
    id: 'greater-powerless',
    luminaPoints: 15,
    types: ['powerless'],
    stats: {
      health: 0,
      defense: 1727,
      speed: 597,
      critRate: 0
    },
    en: {
      name: 'Greater Powerless',
      effect: '+15% to Powerless damage reduction.'
    },
    es: {
      name: 'Greater Powerless',
      effect: '+15% to Powerless damage reduction.'
    }
  },
  {
    id: 'greater-rush',
    luminaPoints: 10,
    types: ['rush'],
    stats: {
      health: 0,
      defense: 439,
      speed: 12,
      critRate: 0
    },
    en: {
      name: 'Greater Rush',
      effect: '+25% to Rush Speed increase.'
    },
    es: {
      name: 'Greater Rush',
      effect: '+25% to Rush Speed increase.'
    }
  },
  {
    id: 'greater-shell',
    luminaPoints: 10,
    types: ['shell'],
    stats: {
      health: 599,
      defense: 240,
      speed: 0,
      critRate: 0
    },
    en: {
      name: 'Greater Shell',
      effect: '+10% to Shell damage reduction.'
    },
    es: {
      name: 'Greater Shell',
      effect: '+10% to Shell damage reduction.'
    }
  },
  {
    id: 'greater-slow',
    luminaPoints: 15,
    types: ['slow'],
    stats: {
      health: 0,
      defense: 647,
      speed: 266,
      critRate: 0
    },
    en: {
      name: 'Greater Slow',
      effect: '+10% to Slow Speed reduction.'
    },
    es: {
      name: 'Greater Slow',
      effect: '+10% to Slow Speed reduction.'
    }
  },
  {
    id: 'healing-boon',
    luminaPoints: 10,
    types: ['healing'],
    stats: {
      health: 0,
      defense: 647,
      speed: 266,
      critRate: 0
    },
    en: {
      name: 'Healing Boon',
      effect: 'Heal 15% HP on applying buff.'
    },
    es: {
      name: 'Healing Boon',
      effect: 'Heal 15% HP on applying buff.'
    }
  },
  {
    id: 'healing-counter',
    luminaPoints: 10,
    types: ['healing', 'counterattack'],
    stats: {
      health: 751,
      defense: 0,
      speed: 0,
      critRate: 0
    },
    en: {
      name: 'Healing Counter',
      effect: 'Recover 25% Health on Counterattack.'
    },
    es: {
      name: 'Healing Counter',
      effect: 'Recover 25% Health on Counterattack.'
    }
  },
  {
    id: 'healing-death',
    luminaPoints: 5,
    types: ['death', 'healing'],
    stats: {
      health: 0,
      defense: 78,
      speed: 13,
      critRate: 0
    },
    en: {
      name: 'Healing Death',
      effect: 'On death, the rest of the Expedition recover all Health.'
    },
    es: {
      name: 'Healing Death',
      effect: 'On death, the rest of the Expedition recover all Health.'
    }
  },
  {
    id: 'healing-fire',
    luminaPoints: 10,
    types: ['healing', 'burn'],
    stats: {
      health: 0,
      defense: 240,
      speed: 118,
      critRate: 0
    },
    en: {
      name: 'Healing Fire',
      effect: 'Recover 25% Health when attacking a Burning target. Once per turn.'
    },
    es: {
      name: 'Healing Fire',
      effect: 'Recover 25% Health when attacking a Burning target. Once per turn.'
    }
  },
  {
    id: 'healing-mark',
    luminaPoints: 20,
    types: ['healing', 'mark'],
    stats: {
      health: 0,
      defense: 65,
      speed: 0,
      critRate: 0
    },
    en: {
      name: 'Healing Mark',
      effect: 'Recover 25% Health on hitting a Marked enemy. Once per turn.'
    },
    es: {
      name: 'Healing Mark',
      effect: 'Recover 25% Health on hitting a Marked enemy. Once per turn.'
    }
  },
  {
    id: 'healing-parry',
    luminaPoints: 5,
    types: ['healing', 'parry'],
    stats: {
      health: 395,
      defense: 152,
      speed: 0,
      critRate: 0
    },
    en: {
      name: 'Healing Parry',
      effect: 'Recover 3% Health on Parry.'
    },
    es: {
      name: 'Healing Parry',
      effect: 'Recover 3% Health on Parry.'
    }
  },
  {
    id: 'healing-share',
    luminaPoints: 5,
    types: ['healing'],
    stats: {
      health: 467,
      defense: 0,
      speed: 14,
      critRate: 0
    },
    en: {
      name: 'Healing Share',
      effect: 'Receive 15% of all Heals affecting other characters.'
    },
    es: {
      name: 'Healing Share',
      effect: 'Receive 15% of all Heals affecting other characters.'
    }
  },
  {
    id: 'healing-stun',
    luminaPoints: 10,
    types: ['healing', 'break'],
    stats: {
      health: 876,
      defense: 0,
      speed: 173,
      critRate: 0
    },
    en: {
      name: 'Healing Stun',
      effect: 'Recover 5% Health on hitting a Stunned target.'
    },
    es: {
      name: 'Healing Stun',
      effect: 'Recover 5% Health on hitting a Stunned target.'
    }
  },
  {
    id: 'healing-tint-energy',
    luminaPoints: 1,
    types: ['tints', 'ap'],
    stats: {
      health: 216,
      defense: 71,
      speed: 0,
      critRate: 0
    },
    en: {
      name: 'Healing Tint Energy',
      effect: 'Healing Tints also give 1 AP.'
    },
    es: {
      name: 'Healing Tint Energy',
      effect: 'Healing Tints also give 1 AP.'
    }
  },
  {
    id: 'immaculate',
    luminaPoints: 10,
    types: ['damage'],
    stats: {
      health: 0,
      defense: 103,
      speed: 15,
      critRate: 0
    },
    en: {
      name: 'Immaculate',
      effect: '30% increased damage until a hit is received.'
    },
    es: {
      name: 'Immaculate',
      effect: '30% increased damage until a hit is received.'
    }
  },
  {
    id: 'in-medias-res',
    luminaPoints: 10,
    types: ['shields'],
    stats: {
      health: 0,
      defense: 1310,
      speed: 13,
      critRate: 0
    },
    en: {
      name: 'In Medias Res',
      effect: '+3 Shields on Battle Start, but max Health is halved.'
    },
    es: {
      name: 'In Medias Res',
      effect: '+3 Shields on Battle Start, but max Health is halved.'
    }
  },
  {
    id: 'inverted-affinity',
    luminaPoints: 5,
    types: ['status-effect', 'damage'],
    stats: {
      health: 270,
      defense: 0,
      speed: 11,
      critRate: 0
    },
    en: {
      name: 'Inverted Affinity',
      effect: 'Apply Inverted on self for 3 turns on battle start. 50% increased damage while Inverted.'
    },
    es: {
      name: 'Inverted Affinity',
      effect: 'Apply Inverted on self for 3 turns on battle start. 50% increased damage while Inverted.'
    }
  },
  {
    id: 'last-stand-critical',
    luminaPoints: 3,
    types: ['critical', 'solo'],
    stats: {
      health: 168,
      defense: 50,
      speed: 0,
      critRate: 0
    },
    en: {
      name: 'Last Stand Critical',
      effect: '100% Critical Chance while fighting alone.'
    },
    es: {
      name: 'Last Stand Critical',
      effect: '100% Critical Chance while fighting alone.'
    }
  },
  {
    id: 'longer-burn',
    luminaPoints: 15,
    types: ['burn'],
    stats: {
      health: 2570,
      defense: 1426,
      speed: 0,
      critRate: 0
    },
    en: {
      name: 'Longer Burn',
      effect: 'Burn duration is increased by 2.'
    },
    es: {
      name: 'Longer Burn',
      effect: 'Burn duration is increased by 2.'
    }
  },
  {
    id: 'longer-powerful',
    luminaPoints: 10,
    types: ['powerful'],
    stats: {
      health: 376,
      defense: 0,
      speed: 13,
      critRate: 0
    },
    en: {
      name: 'Longer Powerful',
      effect: 'On applying Powerful, its duration is increased by 2.'
    },
    es: {
      name: 'Longer Powerful',
      effect: 'On applying Powerful, its duration is increased by 2.'
    }
  },
  {
    id: 'longer-rush',
    luminaPoints: 10,
    types: ['rush'],
    stats: {
      health: 778,
      defense: 0,
      speed: 154,
      critRate: 0
    },
    en: {
      name: 'Longer Rush',
      effect: 'On applying Rush, its duration is increased by 2.'
    },
    es: {
      name: 'Longer Rush',
      effect: 'On applying Rush, its duration is increased by 2.'
    }
  },
  {
    id: 'longer-shell',
    luminaPoints: 10,
    types: ['shell'],
    stats: {
      health: 2757,
      defense: 1572,
      speed: 0,
      critRate: 0
    },
    en: {
      name: 'Longer Shell',
      effect: 'On applying Shell, its duration is increased by 2.'
    },
    es: {
      name: 'Longer Shell',
      effect: 'On applying Shell, its duration is increased by 2.'
    }
  },
  {
    id: 'marking-break',
    luminaPoints: 5,
    types: ['mark', 'break'],
    stats: {
      health: 0,
      defense: 434,
      speed: 28,
      critRate: 0
    },
    en: {
      name: 'Marking Break',
      effect: 'Apply Mark on Break.'
    },
    es: {
      name: 'Marking Break',
      effect: 'Apply Mark on Break.'
    }
  },
  {
    id: 'marking-shots',
    luminaPoints: 3,
    types: ['mark', 'free-aim'],
    stats: {
      health: 0,
      defense: 26,
      speed: 2,
      critRate: 0
    },
    en: {
      name: 'Marking Shots',
      effect: '20% chance to apply Mark on Free Aim shot.'
    },
    es: {
      name: 'Marking Shots',
      effect: '20% chance to apply Mark on Free Aim shot.'
    }
  },
  {
    id: 'painted-power',
    luminaPoints: 5,
    types: ['special'],
    stats: {
      health: 1844,
      defense: 0,
      speed: 0,
      critRate: 0
    },
    en: {
      name: 'Painted Power',
      effect: 'Damage can exceed 9,999.'
    },
    es: {
      name: 'Painted Power',
      effect: 'Damage can exceed 9,999.'
    }
  },
  {
    id: 'painter',
    luminaPoints: 10,
    types: ['special'],
    stats: {
      health: 0,
      defense: 519,
      speed: 31,
      critRate: 0
    },
    en: {
      name: 'Painter',
      effect: 'Converts all Physical damage to Void damage.'
    },
    es: {
      name: 'Painter',
      effect: 'Converts all Physical damage to Void damage.'
    }
  },
  {
    id: 'perilous-parry',
    luminaPoints: 5,
    types: ['ap', 'parry'],
    stats: {
      health: 0,
      defense: 586,
      speed: 33,
      critRate: 0
    },
    en: {
      name: 'Perilous Parry',
      effect: '+1 AP on Parry, but damage received is doubled.'
    },
    es: {
      name: 'Perilous Parry',
      effect: '+1 AP on Parry, but damage received is doubled.'
    }
  },
  {
    id: 'piercing-shot',
    luminaPoints: 2,
    types: ['free-aim'],
    stats: {
      health: 546,
      defense: 0,
      speed: 15,
      critRate: 0
    },
    en: {
      name: 'Piercing Shot',
      effect: '25% increased Free Aim damage. Free Aim shots ignore Shields.'
    },
    es: {
      name: 'Piercing Shot',
      effect: '25% increased Free Aim damage. Free Aim shots ignore Shields.'
    }
  },
  {
    id: 'powered-attack',
    luminaPoints: 10,
    types: ['damage'],
    stats: {
      health: 0,
      defense: 132,
      speed: 7,
      critRate: 0
    },
    en: {
      name: 'Powered Attack',
      effect: 'On every damage dealt, try to consume 1 AP. If succesful, increase damage by 20%.'
    },
    es: {
      name: 'Powered Attack',
      effect: 'On every damage dealt, try to consume 1 AP. If succesful, increase damage by 20%.'
    }
  },
  {
    id: 'powerful-heal',
    luminaPoints: 5,
    types: ['healing', 'powerful'],
    stats: {
      health: 2162,
      defense: 0,
      speed: 434,
      critRate: 0
    },
    en: {
      name: 'Powerful Heal',
      effect: 'Healing an ally also applies Powerful for 1 turn.'
    },
    es: {
      name: 'Powerful Heal',
      effect: 'Healing an ally also applies Powerful for 1 turn.'
    }
  },
  {
    id: 'powerful-mark',
    luminaPoints: 5,
    types: ['powerful', 'mark'],
    stats: {
      health: 0,
      defense: 779,
      speed: 16,
      critRate: 0
    },
    en: {
      name: 'Powerful Mark',
      effect: 'Gain Powerful on hitting a Marked target.'
    },
    es: {
      name: 'Powerful Mark',
      effect: 'Gain Powerful on hitting a Marked target.'
    }
  },
  {
    id: 'powerful-on-shell',
    luminaPoints: 10,
    types: ['powerful', 'shell'],
    stats: {
      health: 0,
      defense: 240,
      speed: 16,
      critRate: 0
    },
    en: {
      name: 'Powerful On Shell',
      effect: 'Apply Powerful on applying Shell.'
    },
    es: {
      name: 'Powerful On Shell',
      effect: 'Apply Powerful on applying Shell.'
    }
  },
  {
    id: 'powerful-revive',
    luminaPoints: 3,
    types: ['powerful', 'revive'],
    stats: {
      health: 0,
      defense: 546,
      speed: 32,
      critRate: 0
    },
    en: {
      name: 'Powerful Revive',
      effect: 'Apply Powerful for 3 turns when revived.'
    },
    es: {
      name: 'Powerful Revive',
      effect: 'Apply Powerful for 3 turns when revived.'
    }
  },
  {
    id: 'powerful-shield',
    luminaPoints: 5,
    types: ['damage', 'shields'],
    stats: {
      health: 0,
      defense: 651,
      speed: 14,
      critRate: 0
    },
    en: {
      name: 'Powerful Shield',
      effect: '10% increased damage per Shield Point on self.'
    },
    es: {
      name: 'Powerful Shield',
      effect: '10% increased damage per Shield Point on self.'
    }
  },
  {
    id: 'powerful-shots',
    luminaPoints: 3,
    types: ['powerful', 'free-aim'],
    stats: {
      health: 983,
      defense: 44,
      speed: 0,
      critRate: 0
    },
    en: {
      name: 'Powerful Shots',
      effect: '20% chance to gain Powerful on Free Aim shot.'
    },
    es: {
      name: 'Powerful Shots',
      effect: '20% chance to gain Powerful on Free Aim shot.'
    }
  },
  {
    id: 'pro-retreat',
    luminaPoints: 40,
    types: ['special'],
    stats: {
      health: 2014,
      defense: 0,
      speed: 406,
      critRate: 0
    },
    en: {
      name: 'Pro Retreat',
      effect: 'Allows Flee to be instantaneous.'
    },
    es: {
      name: 'Pro Retreat',
      effect: 'Allows Flee to be instantaneous.'
    }
  },
  {
    id: 'protecting-attack',
    luminaPoints: 10,
    types: ['shell', 'base-attack'],
    stats: {
      health: 3081,
      defense: 524,
      speed: 0,
      critRate: 0
    },
    en: {
      name: 'Protecting Attack',
      effect: 'Gain Shell for 1 turn on Base Attack.'
    },
    es: {
      name: 'Protecting Attack',
      effect: 'Gain Shell for 1 turn on Base Attack.'
    }
  },
  {
    id: 'protecting-death',
    luminaPoints: 5,
    types: ['death', 'shell'],
    stats: {
      health: 599,
      defense: 0,
      speed: 118,
      critRate: 0
    },
    en: {
      name: 'Protecting Death',
      effect: 'On death, allies gain Shell.'
    },
    es: {
      name: 'Protecting Death',
      effect: 'On death, allies gain Shell.'
    }
  },
  {
    id: 'protecting-heal',
    luminaPoints: 5,
    types: ['healing', 'shell'],
    stats: {
      health: 395,
      defense: 0,
      speed: 78,
      critRate: 0
    },
    en: {
      name: 'Protecting Heal',
      effect: 'Healing an ally also applies Shell for 1 turn.'
    },
    es: {
      name: 'Protecting Heal',
      effect: 'Healing an ally also applies Shell for 1 turn.'
    }
  },
  {
    id: 'protecting-last-stand',
    luminaPoints: 3,
    types: ['shell', 'solo'],
    stats: {
      health: 168,
      defense: 50,
      speed: 0,
      critRate: 0
    },
    en: {
      name: 'Protecting Last Stand',
      effect: 'Gain Shell if fighting alone.'
    },
    es: {
      name: 'Protecting Last Stand',
      effect: 'Gain Shell if fighting alone.'
    }
  },
  {
    id: 'protecting-shots',
    luminaPoints: 3,
    types: ['shell', 'free-aim'],
    stats: {
      health: 4869,
      defense: 301,
      speed: 0,
      critRate: 0
    },
    en: {
      name: 'Protecting Shots',
      effect: '20% chance to gain Shell on Free Aim shot.'
    },
    es: {
      name: 'Protecting Shots',
      effect: '20% chance to gain Shell on Free Aim shot.'
    }
  },
  {
    id: 'protecting-tint',
    luminaPoints: 5,
    types: ['tints', 'shell'],
    stats: {
      health: 1403,
      defense: 681,
      speed: 0,
      critRate: 0
    },
    en: {
      name: 'Protecting Tint',
      effect: 'Healing Tints also apply Shell.'
    },
    es: {
      name: 'Protecting Tint',
      effect: 'Healing Tints also apply Shell.'
    }
  },
  {
    id: 'quick-break',
    luminaPoints: 3,
    types: ['break'],
    stats: {
      health: 0,
      defense: 672,
      speed: 36,
      critRate: 0
    },
    en: {
      name: 'Quick Break',
      effect: 'Play again on Breaking a target.'
    },
    es: {
      name: 'Quick Break',
      effect: 'Play again on Breaking a target.'
    }
  },
  {
    id: 'random-defense',
    luminaPoints: 5,
    types: ['defensive'],
    stats: {
      health: 0,
      defense: 0,
      speed: 34,
      critRate: 0
    },
    en: {
      name: 'Random Defense',
      effect: 'Damage taken is randomly multiplied by a value between 50% and 200%.'
    },
    es: {
      name: 'Random Defense',
      effect: 'Damage taken is randomly multiplied by a value between 50% and 200%.'
    }
  },
  {
    id: 'recovery',
    luminaPoints: 10,
    types: ['healing'],
    stats: {
      health: 2000,
      defense: 0,
      speed: 324,
      critRate: 0
    },
    en: {
      name: 'Recovery',
      effect: 'Recovers 10% Health on turn start.'
    },
    es: {
      name: 'Recovery',
      effect: 'Recovers 10% Health on turn start.'
    }
  },
  {
    id: 'rejuvenating-revive',
    luminaPoints: 3,
    types: ['regen', 'revive'],
    stats: {
      health: 546,
      defense: 218,
      speed: 0,
      critRate: 0
    },
    en: {
      name: 'Rejuvenating Revive',
      effect: 'Apply Regen for 3 turns when revived.'
    },
    es: {
      name: 'Rejuvenating Revive',
      effect: 'Apply Regen for 3 turns when revived.'
    }
  },
  {
    id: 'revive-paradox',
    luminaPoints: 5,
    types: ['revive'],
    stats: {
      health: 0,
      defense: 92,
      speed: 14,
      critRate: 0
    },
    en: {
      name: 'Revive Paradox',
      effect: 'Play immediately when revived.'
    },
    es: {
      name: 'Revive Paradox',
      effect: 'Play immediately when revived.'
    }
  },
  {
    id: 'revive-tint-energy',
    luminaPoints: 10,
    types: ['revive', 'tints', 'ap'],
    stats: {
      health: 257,
      defense: 92,
      speed: 0,
      critRate: 0
    },
    en: {
      name: 'Revive Tint Energy',
      effect: 'Revive Tints also give 3 AP.'
    },
    es: {
      name: 'Revive Tint Energy',
      effect: 'Revive Tints also give 3 AP.'
    }
  },
  {
    id: 'rewarding-mark',
    luminaPoints: 5,
    types: ['ap', 'mark'],
    stats: {
      health: 0,
      defense: 20,
      speed: 7,
      critRate: 0
    },
    en: {
      name: 'Rewarding Mark',
      effect: '+2 AP on dealing damage to a Marked target. Once per turn.'
    },
    es: {
      name: 'Rewarding Mark',
      effect: '+2 AP on dealing damage to a Marked target. Once per turn.'
    }
  },
  {
    id: 'roulette',
    luminaPoints: 5,
    types: ['damage'],
    stats: {
      health: 0,
      defense: 34,
      speed: 9,
      critRate: 0
    },
    en: {
      name: 'Roulette',
      effect: 'Every hit has a 50% chance to deal either 50% or 200% of its damage.'
    },
    es: {
      name: 'Roulette',
      effect: 'Every hit has a 50% chance to deal either 50% or 200% of its damage.'
    }
  },
  {
    id: 'rush-on-powerful',
    luminaPoints: 10,
    types: ['rush', 'powerful'],
    stats: {
      health: 0,
      defense: 639,
      speed: 35,
      critRate: 0
    },
    en: {
      name: 'Rush On Powerful',
      effect: 'Apply Rush on applying Powerful.'
    },
    es: {
      name: 'Rush On Powerful',
      effect: 'Apply Rush on applying Powerful.'
    }
  },
  {
    id: 'sos-power',
    luminaPoints: 5,
    types: ['powerful'],
    stats: {
      health: 0,
      defense: 43,
      speed: 10,
      critRate: 0
    },
    en: {
      name: 'SOS Power',
      effect: 'Apply Powerful when falling below 50% Health.'
    },
    es: {
      name: 'SOS Power',
      effect: 'Apply Powerful when falling below 50% Health.'
    }
  },
  {
    id: 'sos-rush',
    luminaPoints: 0,
    types: ['rush'],
    stats: {
      health: 288,
      defense: 142,
      speed: 0,
      critRate: 0
    },
    en: {
      name: 'SOS Rush',
      effect: 'Apply Rush when falling below 50% Health.'
    },
    es: {
      name: 'SOS Rush',
      effect: 'Apply Rush when falling below 50% Health.'
    }
  },
  {
    id: 'sos-shell',
    luminaPoints: 5,
    types: ['shell'],
    stats: {
      health: 0,
      defense: 13,
      speed: 14,
      critRate: 0
    },
    en: {
      name: 'SOS Shell',
      effect: 'Apply Shell when falling below 50% Health.'
    },
    es: {
      name: 'SOS Shell',
      effect: 'Apply Shell when falling below 50% Health.'
    }
  },
  {
    id: 'second-chance',
    luminaPoints: 0,
    types: ['revive'],
    stats: {
      health: 1107,
      defense: 0,
      speed: 8,
      critRate: 0
    },
    en: {
      name: 'Second Chance',
      effect: 'Revive with 100% Health. Once per battle.'
    },
    es: {
      name: 'Second Chance',
      effect: 'Revive with 100% Health. Once per battle.'
    }
  },
  {
    id: 'shared-care',
    luminaPoints: 10,
    types: ['healing'],
    stats: {
      health: 206,
      defense: 68,
      speed: 0,
      critRate: 0
    },
    en: {
      name: 'Shared Care',
      effect: 'When Healing an ally, also Heal self for 50% of that value.'
    },
    es: {
      name: 'Shared Care',
      effect: 'When Healing an ally, also Heal self for 50% of that value.'
    }
  },
  {
    id: 'shell-on-rush',
    luminaPoints: 10,
    types: ['shell', 'rush'],
    stats: {
      health: 0,
      defense: 1048,
      speed: 413,
      critRate: 0
    },
    en: {
      name: 'Shell On Rush',
      effect: 'Apply Shell on applying Rush.'
    },
    es: {
      name: 'Shell On Rush',
      effect: 'Apply Shell on applying Rush.'
    }
  },
  {
    id: 'shield-affinity',
    luminaPoints: 15,
    types: ['damage', 'shields'],
    stats: {
      health: 0,
      defense: 266,
      speed: 22,
      critRate: 0
    },
    en: {
      name: 'Shield Affinity',
      effect: '30% increased damage while having Shields, but receiving any damage always removes all Shields.'
    },
    es: {
      name: 'Shield Affinity',
      effect: '30% increased damage while having Shields, but receiving any damage always removes all Shields.'
    }
  },
  {
    id: 'shielding-death',
    luminaPoints: 10,
    types: ['death', 'shields'],
    stats: {
      health: 0,
      defense: 801,
      speed: 161,
      critRate: 0
    },
    en: {
      name: 'Shielding Death',
      effect: 'On death, allies gain 3 Shield points.'
    },
    es: {
      name: 'Shielding Death',
      effect: 'On death, allies gain 3 Shield points.'
    }
  },
  {
    id: 'shielding-tint',
    luminaPoints: 10,
    types: ['tints', 'shields'],
    stats: {
      health: 313,
      defense: 116,
      speed: 0,
      critRate: 0
    },
    en: {
      name: 'Shielding Tint',
      effect: 'Healing Tints also add 2 Shields.'
    },
    es: {
      name: 'Shielding Tint',
      effect: 'Healing Tints also add 2 Shields.'
    }
  },
  {
    id: 'shortcut',
    luminaPoints: 0,
    types: ['special'],
    stats: {
      health: 0,
      defense: 672,
      speed: 36,
      critRate: 0
    },
    en: {
      name: 'Shortcut',
      effect: 'Immediately play when falling below 30% Health. Once per battle.'
    },
    es: {
      name: 'Shortcut',
      effect: 'Immediately play when falling below 30% Health. Once per battle.'
    }
  },
  {
    id: 'slowing-attack',
    luminaPoints: 10,
    types: ['slow', 'base-attack'],
    stats: {
      health: 2757,
      defense: 0,
      speed: 557,
      critRate: 0
    },
    en: {
      name: 'Slowing Attack',
      effect: 'Base attack applies Slow for 1 turn.'
    },
    es: {
      name: 'Slowing Attack',
      effect: 'Base attack applies Slow for 1 turn.'
    }
  },
  {
    id: 'slowing-break',
    luminaPoints: 5,
    types: ['slow', 'break'],
    stats: {
      health: 0,
      defense: 1501,
      speed: 546,
      critRate: 0
    },
    en: {
      name: 'Slowing Break',
      effect: 'Apply Slow on Break.'
    },
    es: {
      name: 'Slowing Break',
      effect: 'Apply Slow on Break.'
    }
  },
  {
    id: 'sniper',
    luminaPoints: 15,
    types: ['free-aim'],
    stats: {
      health: 0,
      defense: 552,
      speed: 13,
      critRate: 0
    },
    en: {
      name: 'Sniper',
      effect: 'First Free Aim shot each turn deals 200% increased damage and can Break.'
    },
    es: {
      name: 'Sniper',
      effect: 'First Free Aim shot each turn deals 200% increased damage and can Break.'
    }
  },
  {
    id: 'solidifying',
    luminaPoints: 10,
    types: ['shields'],
    stats: {
      health: 0,
      defense: 116,
      speed: 62,
      critRate: 0
    },
    en: {
      name: 'Solidifying',
      effect: "+2 Shields when the character's Health falls below 50%. Once per battle."
    },
    es: {
      name: 'Solidifying',
      effect: "+2 Shields when the character's Health falls below 50%. Once per battle."
    }
  },
  {
    id: 'solo-fighter',
    luminaPoints: 1,
    types: ['damage', 'solo'],
    stats: {
      health: 168,
      defense: 50,
      speed: 0,
      critRate: 0
    },
    en: {
      name: 'Solo Fighter',
      effect: 'Deal 50% more damage if fighting alone.'
    },
    es: {
      name: 'Solo Fighter',
      effect: 'Deal 50% more damage if fighting alone.'
    }
  },
  {
    id: 'staggering-attack',
    luminaPoints: 1,
    types: ['break', 'base-attack'],
    stats: {
      health: 0,
      defense: 21,
      speed: 4,
      critRate: 0
    },
    en: {
      name: 'Staggering Attack',
      effect: '50% increased Break damage on Base Attack.'
    },
    es: {
      name: 'Staggering Attack',
      effect: '50% increased Break damage on Base Attack.'
    }
  },
  {
    id: 'stay-marked',
    luminaPoints: 10,
    types: ['mark'],
    stats: {
      health: 0,
      defense: 201,
      speed: 12,
      critRate: 0
    },
    en: {
      name: 'Stay Marked',
      effect: '50% chance to apply Mark when attacking a Marked target.'
    },
    es: {
      name: 'Stay Marked',
      effect: '50% chance to apply Mark when attacking a Marked target.'
    }
  },
  {
    id: 'stun-boost',
    luminaPoints: 10,
    types: ['damage', 'break'],
    stats: {
      health: 0,
      defense: 35,
      speed: 2,
      critRate: 0
    },
    en: {
      name: 'Stun Boost',
      effect: '30% increased damage on Stunned targets.'
    },
    es: {
      name: 'Stun Boost',
      effect: '30% increased damage on Stunned targets.'
    }
  },
  {
    id: 'survivor',
    luminaPoints: 0,
    types: ['defensive'],
    stats: {
      health: 0,
      defense: 439,
      speed: 12,
      critRate: 0
    },
    en: {
      name: 'Survivor',
      effect: 'Survive fatal damage with 1 Health. Once per battle.'
    },
    es: {
      name: 'Survivor',
      effect: 'Survive fatal damage with 1 Health. Once per battle.'
    }
  },
  {
    id: 'sweet-kill',
    luminaPoints: 5,
    types: ['healing'],
    stats: {
      health: 0,
      defense: 54,
      speed: 11,
      critRate: 0
    },
    en: {
      name: 'Sweet Kill',
      effect: 'Recover 50% Health on killing an enemy.'
    },
    es: {
      name: 'Sweet Kill',
      effect: 'Recover 50% Health on killing an enemy.'
    }
  },
  {
    id: 'tainted',
    luminaPoints: 0,
    types: ['damage', 'status-effect'],
    stats: {
      health: 0,
      defense: 1022,
      speed: 12,
      critRate: 0
    },
    en: {
      name: 'Tainted',
      effect: '15% increased damage for each Status Effect on self.'
    },
    es: {
      name: 'Tainted',
      effect: '15% increased damage for each Status Effect on self.'
    }
  },
  {
    id: 'teamwork',
    luminaPoints: 5,
    types: ['damage'],
    stats: {
      health: 216,
      defense: 0,
      speed: 71,
      critRate: 0
    },
    en: {
      name: 'Teamwork',
      effect: '10% increased damage while all allies are alive.'
    },
    es: {
      name: 'Teamwork',
      effect: '10% increased damage while all allies are alive.'
    }
  },
  {
    id: 'the-one',
    luminaPoints: 1,
    types: ['special'],
    stats: {
      health: 0,
      defense: 0,
      speed: 106,
      critRate: 0
    },
    en: {
      name: 'The One',
      effect: 'Max Health reduced to 1.'
    },
    es: {
      name: 'The One',
      effect: 'Max Health reduced to 1.'
    }
  },
  {
    id: 'time-tint',
    luminaPoints: 10,
    types: ['tints', 'rush'],
    stats: {
      health: 376,
      defense: 145,
      speed: 0,
      critRate: 0
    },
    en: {
      name: 'Time Tint',
      effect: 'Energy Tints also apply Rush.'
    },
    es: {
      name: 'Time Tint',
      effect: 'Energy Tints also apply Rush.'
    }
  },
  {
    id: 'versatile',
    luminaPoints: 5,
    types: ['free-aim', 'base-attack'],
    stats: {
      health: 0,
      defense: 21,
      speed: 4,
      critRate: 0
    },
    en: {
      name: 'Versatile',
      effect: 'After a Free Aim hit, Base Attack damage is increased by 50% for 1 turn.'
    },
    es: {
      name: 'Versatile',
      effect: 'After a Free Aim hit, Base Attack damage is increased by 50% for 1 turn.'
    }
  },
  {
    id: 'warming-up',
    luminaPoints: 15,
    types: ['damage'],
    stats: {
      health: 1166,
      defense: 0,
      speed: 9,
      critRate: 0
    },
    en: {
      name: 'Warming Up',
      effect: '5% increased damage per turn. Can stack up to 5 turns.'
    },
    es: {
      name: 'Warming Up',
      effect: '5% increased damage per turn. Can stack up to 5 turns.'
    }
  },
  {
    id: 'weakness-gain',
    luminaPoints: 3,
    types: ['ap', 'weakness'],
    stats: {
      health: 0,
      defense: 162,
      speed: 17,
      critRate: 0
    },
    en: {
      name: 'Weakness Gain',
      effect: "+1 AP on hitting an enemy's Weakness. Once per turn."
    },
    es: {
      name: 'Weakness Gain',
      effect: "+1 AP on hitting an enemy's Weakness. Once per turn."
    }
  }
];

export default PICTOS;
