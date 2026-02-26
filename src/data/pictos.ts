import { PictoData } from '../types';

const PICTOS: PictoData[] = [
  {
    id: 'accelerating-heal',
    name: 'Accelerating Heal',
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
    effect: '20% chance to gain Rush on Free Aim shot.',
    luminaPoints: 3,
    stats: {
      health: 4869,
      defense: 301,
      speed: 0,
      critRate: 0
    }
  },
  {
    id: 'accelerating-tint',
    name: 'Accelerating Tint',
    effect: 'Healing Tints also apply Rush.',
    luminaPoints: 5,
    stats: {
      health: 2162,
      defense: 0,
      speed: 434,
      critRate: 0
    }
  },
  {
    id: 'aegis-revival',
    name: 'Aegis Revival',
    effect: '+1 Shield on being revived.',
    luminaPoints: 5,
    stats: {
      health: 0,
      defense: 1990,
      speed: 672,
      critRate: 0
    }
  },
  {
    id: 'anti-blight',
    name: 'Anti-Blight',
    effect: 'Immune to Blight.',
    luminaPoints: 10,
    stats: {
      health: 1897,
      defense: 949,
      speed: 0,
      critRate: 0
    }
  },
  {
    id: 'anti-burn',
    name: 'Anti-Burn',
    effect: 'Immune to Burn.',
    luminaPoints: 15,
    stats: {
      health: 1602,
      defense: 801,
      speed: 0,
      critRate: 0
    }
  },
  {
    id: 'anti-charm',
    name: 'Anti-Charm',
    effect: 'Immune to Charm.',
    luminaPoints: 10,
    stats: {
      health: 599,
      defense: 240,
      speed: 0,
      critRate: 0
    }
  },
  {
    id: 'anti-freeze',
    name: 'Anti-Freeze',
    effect: 'Immune to Freeze.',
    luminaPoints: 15,
    stats: {
      health: 1464,
      defense: 733,
      speed: 0,
      critRate: 0
    }
  },
  {
    id: 'anti-stun',
    name: 'Anti-Stun',
    effect: 'Immune to Stun.',
    luminaPoints: 5,
    stats: {
      health: 2757,
      defense: 1572,
      speed: 0,
      critRate: 0
    }
  },
  {
    id: 'at-deaths-door',
    name: "At Death's Door",
    effect: 'Deal 50% more damage if Health is below 10%.',
    luminaPoints: 5,
    stats: {
      health: 0,
      defense: 1817,
      speed: 0,
      critRate: 34
    }
  },
  {
    id: 'attack-lifesteal',
    name: 'Attack Lifesteal',
    effect: 'Recover 15% Health on Base Attack.',
    luminaPoints: 15,
    stats: {
      health: 88,
      defense: 0,
      speed: 0,
      critRate: 4
    }
  },
  {
    id: 'augmented-aim',
    name: 'Augmented Aim',
    effect: '50% increased Free Aim damage.',
    luminaPoints: 3,
    stats: {
      health: 0,
      defense: 0,
      speed: 21,
      critRate: 4
    }
  },
  {
    id: 'augmented-attack',
    name: 'Augmented Attack',
    effect: '50% increased Base Attack damage.',
    luminaPoints: 7,
    stats: {
      health: 0,
      defense: 8,
      speed: 10,
      critRate: 0
    }
  },
  {
    id: 'augmented-counter-i',
    name: 'Augmented Counter I',
    effect: '25% increased Counterattack damage.',
    luminaPoints: 3,
    stats: {
      health: 95,
      defense: 0,
      speed: 0,
      critRate: 4
    }
  },
  {
    id: 'augmented-counter-ii',
    name: 'Augmented Counter II',
    effect: '50% increased Counterattack damage.',
    luminaPoints: 5,
    stats: {
      health: 0,
      defense: 208,
      speed: 0,
      critRate: 15
    }
  },
  {
    id: 'augmented-counter-iii',
    name: 'Augmented Counter III',
    effect: '75% increased Counterattack damage.',
    luminaPoints: 7,
    stats: {
      health: 0,
      defense: 733,
      speed: 0,
      critRate: 23
    }
  },
  {
    id: 'augmented-first-strike',
    name: 'Augmented First Strike',
    effect: '50% increased damage on the first hit. Once per battle.',
    luminaPoints: 5,
    stats: {
      health: 0,
      defense: 0,
      speed: 1008,
      critRate: 18
    }
  },
  {
    id: 'auto-death',
    name: 'Auto Death',
    effect: 'Kill self on battle start.',
    luminaPoints: 1,
    stats: {
      health: 0,
      defense: 0,
      speed: 0,
      critRate: 26
    }
  },
  {
    id: 'auto-powerful',
    name: 'Auto Powerful',
    effect: 'Apply Powerful for 3 turns on battle start.',
    luminaPoints: 10,
    stats: {
      health: 0,
      defense: 0,
      speed: 241,
      critRate: 20
    }
  },
  {
    id: 'auto-regen',
    name: 'Auto Regen',
    effect: 'Apply Regen for 3 turns on battle start.',
    luminaPoints: 10,
    stats: {
      health: 0,
      defense: 479,
      speed: 0,
      critRate: 0
    }
  },
  {
    id: 'auto-rush',
    name: 'Auto Rush',
    effect: 'Apply Rush for 3 turns on battle start.',
    luminaPoints: 10,
    stats: {
      health: 0,
      defense: 0,
      speed: 112,
      critRate: 7
    }
  },
  {
    id: 'auto-shell',
    name: 'Auto Shell',
    effect: 'Apply Shell for 3 turns on battle start.',
    luminaPoints: 10,
    stats: {
      health: 411,
      defense: 0,
      speed: 0,
      critRate: 0
    }
  },
  {
    id: 'base-shield',
    name: 'Base Shield',
    effect: '+1 Shield if not affected by any Shield on turn start.',
    luminaPoints: 20,
    stats: {
      health: 0,
      defense: 0,
      speed: 378,
      critRate: 11
    }
  },
  {
    id: 'beneficial-contamination',
    name: 'Beneficial Contamination',
    effect: '+2 AP on applying a Status Effect. Once per turn.',
    luminaPoints: 15,
    stats: {
      health: 0,
      defense: 274,
      speed: 135,
      critRate: 0
    }
  },
  {
    id: 'break-specialist',
    name: 'Break Specialist',
    effect: 'Break damage is increased by 50%, but base damage is reduced by 20%.',
    luminaPoints: 1,
    stats: {
      health: 2705,
      defense: 0,
      speed: 546,
      critRate: 0
    }
  },
  {
    id: 'breaker',
    name: 'Breaker',
    effect: '25% increased Break damage.',
    luminaPoints: 10,
    stats: {
      health: 0,
      defense: 0,
      speed: 26,
      critRate: 9
    }
  },
  {
    id: 'breaking-attack',
    name: 'Breaking Attack',
    effect: 'Base Attack can Break.',
    luminaPoints: 10,
    stats: {
      health: 0,
      defense: 0,
      speed: 154,
      critRate: 17
    }
  },
  {
    id: 'breaking-burn',
    name: 'Breaking Burn',
    effect: '25% increased Break damage on Burning enemies.',
    luminaPoints: 5,
    stats: {
      health: 0,
      defense: 0,
      speed: 243,
      critRate: 9
    }
  },
  {
    id: 'breaking-counter',
    name: 'Breaking Counter',
    effect: '50% increased Break damage on Counterattack.',
    luminaPoints: 3,
    stats: {
      health: 0,
      defense: 0,
      speed: 43,
      critRate: 10
    }
  },
  {
    id: 'breaking-death',
    name: 'Breaking Death',
    effect: "Fully charge enemy's Break Bar on death.",
    luminaPoints: 0,
    stats: {
      health: 0,
      defense: 0,
      speed: 586,
      critRate: 33
    }
  },
  {
    id: 'breaking-shots',
    name: 'Breaking Shots',
    effect: '50% increased Break damage with Free Aim shots.',
    luminaPoints: 1,
    stats: {
      health: 0,
      defense: 0,
      speed: 43,
      critRate: 10
    }
  },
  {
    id: 'breaking-slow',
    name: 'Breaking Slow',
    effect: '25% increased Break damage against Slowed enemies.',
    luminaPoints: 5,
    stats: {
      health: 0,
      defense: 0,
      speed: 162,
      critRate: 17
    }
  },
  {
    id: 'burn-affinity',
    name: 'Burn Affinity',
    effect: '25% increased damage on Burning targets.',
    luminaPoints: 10,
    stats: {
      health: 0,
      defense: 0,
      speed: 439,
      critRate: 12
    }
  },
  {
    id: 'burning-break',
    name: 'Burning Break',
    effect: 'Apply 3 Burn stacks on Breaking a target.',
    luminaPoints: 3,
    stats: {
      health: 1541,
      defense: 0,
      speed: 0,
      critRate: 24
    }
  },
  {
    id: 'burning-death',
    name: 'Burning Death',
    effect: 'Apply 3 Burn to all enemies on Death.',
    luminaPoints: 5,
    stats: {
      health: 0,
      defense: 0,
      speed: 546,
      critRate: 32
    }
  },
  {
    id: 'burning-mark',
    name: 'Burning Mark',
    effect: 'Apply Burn on hitting a Marked enemy.',
    luminaPoints: 15,
    stats: {
      health: 44,
      defense: 32,
      speed: 0,
      critRate: 0
    }
  },
  {
    id: 'burning-shots',
    name: 'Burning Shots',
    effect: '20% chance to Burn on Free Aim shot.',
    luminaPoints: 3,
    stats: {
      health: 0,
      defense: 0,
      speed: 1376,
      critRate: 8
    }
  },
  {
    id: 'charging-alteration',
    name: 'Charging Alteration',
    effect: '+10% of a Gradient Charge on applying a Buff. Once per turn.',
    luminaPoints: 10,
    stats: {
      health: 0,
      defense: 1501,
      speed: 546,
      critRate: 0
    }
  },
  {
    id: 'charging-attack',
    name: 'Charging Attack',
    effect: '+15% of a Gradient Charge on Base Attack.',
    luminaPoints: 7,
    stats: {
      health: 0,
      defense: 0,
      speed: 266,
      critRate: 22
    }
  },
  {
    id: 'charging-burn',
    name: 'Charging Burn',
    effect: '+20% of a Gradient Charge on applying Burn. Once per turn.',
    luminaPoints: 10,
    stats: {
      health: 3152,
      defense: 0,
      speed: 639,
      critRate: 0
    }
  },
  {
    id: 'charging-counter',
    name: 'Charging Counter',
    effect: '+10% of a Gradient Charge on Counterattack.',
    luminaPoints: 10,
    stats: {
      health: 1333,
      defense: 647,
      speed: 0,
      critRate: 0
    }
  },
  {
    id: 'charging-critical',
    name: 'Charging Critical',
    effect: '+20% of a Gradient Charge on hitting a Critical Hit. Once per turn.',
    luminaPoints: 10,
    stats: {
      health: 0,
      defense: 1891,
      speed: 0,
      critRate: 35
    }
  },
  {
    id: 'charging-mark',
    name: 'Charging Mark',
    effect: '+20% of a Gradient Charge on hitting a Marked target. Once per turn.',
    luminaPoints: 10,
    stats: {
      health: 0,
      defense: 0,
      speed: 413,
      critRate: 27
    }
  },
  {
    id: 'charging-stun',
    name: 'Charging Stun',
    effect: '+5% of a Gradient Charge on hitting a Stunned enemy.',
    luminaPoints: 5,
    stats: {
      health: 922,
      defense: 0,
      speed: 182,
      critRate: 0
    }
  },
  {
    id: 'charging-tint',
    name: 'Charging Tint',
    effect: '+5% of a Gradient Charge on using an item.',
    luminaPoints: 2,
    stats: {
      health: 329,
      defense: 122,
      speed: 0,
      critRate: 0
    }
  },
  {
    id: 'charging-weakness',
    name: 'Charging Weakness',
    effect: '+15% of a Gradient Charge on hitting a Weakness. Once per turn.',
    luminaPoints: 5,
    stats: {
      health: 0,
      defense: 0,
      speed: 280,
      critRate: 23
    }
  },
  {
    id: 'cheater',
    name: 'Cheater',
    effect: 'Always play twice in a row.',
    luminaPoints: 40,
    stats: {
      health: 1198,
      defense: 0,
      speed: 400,
      critRate: 0
    }
  },
  {
    id: 'cleas-life',
    name: "Clea's Life",
    effect: 'On turn start, if no damage taken since last turn, recover 100% Health.',
    luminaPoints: 30,
    stats: {
      health: 5591,
      defense: 0,
      speed: 0,
      critRate: 0
    }
  },
  {
    id: 'cleansing-tint',
    name: 'Cleansing Tint',
    effect: 'Healing Tints also remove all Status Effects from the target.',
    luminaPoints: 5,
    stats: {
      health: 778,
      defense: 319,
      speed: 0,
      critRate: 0
    }
  },
  {
    id: 'combo-attack-i',
    name: 'Combo Attack I',
    effect: 'Base Attack has 1 extra hit.',
    luminaPoints: 10,
    stats: {
      health: 0,
      defense: 0,
      speed: 93,
      critRate: 6
    }
  },
  {
    id: 'combo-attack-ii',
    name: 'Combo Attack II',
    effect: 'Base Attack has 1 extra hit.',
    luminaPoints: 20,
    stats: {
      health: 0,
      defense: 0,
      speed: 836,
      critRate: 16
    }
  },
  {
    id: 'combo-attack-iii',
    name: 'Combo Attack III',
    effect: 'Base Attack has 1 extra hit.',
    luminaPoints: 30,
    stats: {
      health: 0,
      defense: 0,
      speed: 619,
      critRate: 14
    }
  },
  {
    id: 'confident',
    name: 'Confident',
    effect: "Take 50% less damage, but can't be healed.",
    luminaPoints: 20,
    stats: {
      health: 0,
      defense: 0,
      speed: 519,
      critRate: 31
    }
  },
  {
    id: 'confident-fighter',
    name: 'Confident Fighter',
    effect: "Deal 30% more damage, but can't be healed.",
    luminaPoints: 15,
    stats: {
      health: 222,
      defense: 0,
      speed: 0,
      critRate: 20
    }
  },
  {
    id: 'critical-break',
    name: 'Critical Break',
    effect: '25% increased Break damage on Critical hits.',
    luminaPoints: 5,
    stats: {
      health: 0,
      defense: 0,
      speed: 203,
      critRate: 8
    }
  },
  {
    id: 'critical-burn',
    name: 'Critical Burn',
    effect: '25% increased Critical Chance on Burning enemies.',
    luminaPoints: 0,
    stats: {
      health: 0,
      defense: 0,
      speed: 413,
      critRate: 27
    }
  },
  {
    id: 'critical-moment',
    name: 'Critical Moment',
    effect: '50% increased Critical Chance if Health is below 30%.',
    luminaPoints: 0,
    stats: {
      health: 0,
      defense: 0,
      speed: 26,
      critRate: 7
    }
  },
  {
    id: 'critical-stun',
    name: 'Critical Stun',
    effect: '100% Critical Chance on hitting a Stunned target.',
    luminaPoints: 5,
    stats: {
      health: 0,
      defense: 681,
      speed: 0,
      critRate: 23
    }
  },
  {
    id: 'critical-vulnerability',
    name: 'Critical Vulnerability',
    effect: '25% increased Critical Chance on Defenceless enemies.',
    luminaPoints: 5,
    stats: {
      health: 0,
      defense: 116,
      speed: 62,
      critRate: 0
    }
  },
  {
    id: 'critical-weakness',
    name: 'Critical Weakness',
    effect: '25% increased Critical Chance on Weakness.',
    luminaPoints: 5,
    stats: {
      health: 0,
      defense: 0,
      speed: 670,
      critRate: 14
    }
  },
  {
    id: 'dead-energy-i',
    name: 'Dead Energy I',
    effect: '+3 AP on killing an enemy.',
    luminaPoints: 2,
    stats: {
      health: 0,
      defense: 0,
      speed: 162,
      critRate: 17
    }
  },
  {
    id: 'dead-energy-ii',
    name: 'Dead Energy II',
    effect: '+3 AP on killing an enemy.',
    luminaPoints: 2,
    stats: {
      health: 0,
      defense: 0,
      speed: 162,
      critRate: 7
    }
  },
  {
    id: 'death-bomb',
    name: 'Death Bomb',
    effect: 'On Death, deal damage to all enemies.',
    luminaPoints: 5,
    stats: {
      health: 0,
      defense: 0,
      speed: 43,
      critRate: 10
    }
  },
  {
    id: 'defensive-mode',
    name: 'Defensive Mode',
    effect: 'On receiving damage, consume 1 AP to take 30% less damage, if possible.',
    luminaPoints: 1,
    stats: {
      health: 216,
      defense: 71,
      speed: 0,
      critRate: 0
    }
  },
  {
    id: 'dodger',
    name: 'Dodger',
    effect: 'Gain 1 AP on Perfect Dodge. Once per turn.',
    luminaPoints: 1,
    stats: {
      health: 0,
      defense: 0,
      speed: 12,
      critRate: 3
    }
  },
  {
    id: 'double-burn',
    name: 'Double Burn',
    effect: 'On applying a Burn stack, apply a second one.',
    luminaPoints: 30,
    stats: {
      health: 0,
      defense: 0,
      speed: 399,
      critRate: 11
    }
  },
  {
    id: 'double-mark',
    name: 'Double Mark',
    effect: 'Mark requires 1 more hit to be removed.',
    luminaPoints: 20,
    stats: {
      health: 0,
      defense: 0,
      speed: 236,
      critRate: 0
    }
  },
  {
    id: 'draining-cleanse',
    name: 'Draining Cleanse',
    effect: 'Consume 1 AP to prevent Status Effects application, if possible.',
    luminaPoints: 15,
    stats: {
      health: 2000,
      defense: 324,
      speed: 0,
      critRate: 0
    }
  },
  {
    id: 'effective-heal',
    name: 'Effective Heal',
    effect: 'Double all Heals received.',
    luminaPoints: 30,
    stats: {
      health: 284,
      defense: 341,
      speed: 0,
      critRate: 0
    }
  },
  {
    id: 'effective-support',
    name: 'Effective Support',
    effect: '+2 AP on using an item.',
    luminaPoints: 5,
    stats: {
      health: 721,
      defense: 0,
      speed: 142,
      critRate: 0
    }
  },
  {
    id: 'empowering-attack',
    name: 'Empowering Attack',
    effect: 'Gain Powerful for 1 turn on Base Attack.',
    luminaPoints: 10,
    stats: {
      health: 0,
      defense: 0,
      speed: 399,
      critRate: 11
    }
  },
  {
    id: 'empowering-break',
    name: 'Empowering Break',
    effect: 'Gain Powerful on Breaking a target.',
    luminaPoints: 3,
    stats: {
      health: 0,
      defense: 0,
      speed: 546,
      critRate: 32
    }
  },
  {
    id: 'empowering-dodge',
    name: 'Empowering Dodge',
    effect: '5% increased damage for each consecutive successful Dodge. Can stack up to 10 times.',
    luminaPoints: 5,
    stats: {
      health: 0,
      defense: 0,
      speed: 162,
      critRate: 17
    }
  },
  {
    id: 'empowering-last-stand',
    name: 'Empowering Last Stand',
    effect: 'Gain Powerful if fighting alone.',
    luminaPoints: 3,
    stats: {
      health: 168,
      defense: 0,
      speed: 0,
      critRate: 10
    }
  },
  {
    id: 'empowering-parry',
    name: 'Empowering Parry',
    effect:
      'Each successful Parry increases damage by 5% until end of the following turn. Taking any damage removes this buff.',
    luminaPoints: 5,
    stats: {
      health: 0,
      defense: 0,
      speed: 162,
      critRate: 17
    }
  },
  {
    id: 'empowering-tint',
    name: 'Empowering Tint',
    effect: 'Healing Tints also apply Powerful.',
    luminaPoints: 5,
    stats: {
      health: 2705,
      defense: 0,
      speed: 546,
      critRate: 0
    }
  },
  {
    id: 'energetic-healer',
    name: 'Energetic Healer',
    effect: '+2 AP on Healing an ally. Once per turn.',
    luminaPoints: 5,
    stats: {
      health: 0,
      defense: 1426,
      speed: 519,
      critRate: 0
    }
  },
  {
    id: 'energising-attack-i',
    name: 'Energising Attack I',
    effect: '+1 AP on Base Attack.',
    luminaPoints: 10,
    stats: {
      health: 0,
      defense: 0,
      speed: 958,
      critRate: 18
    }
  },
  {
    id: 'energising-attack-ii',
    name: 'Energising Attack II',
    effect: '+1 AP on Base Attack.',
    luminaPoints: 15,
    stats: {
      health: 0,
      defense: 120,
      speed: 177,
      critRate: 0
    }
  },
  {
    id: 'energising-break',
    name: 'Energising Break',
    effect: '+3 AP on Breaking a target.',
    luminaPoints: 3,
    stats: {
      health: 0,
      defense: 0,
      speed: 14,
      critRate: 7
    }
  },
  {
    id: 'energising-burn',
    name: 'Energising Burn',
    effect: '+1 AP on applying Burn. Once per turn.',
    luminaPoints: 10,
    stats: {
      health: 0,
      defense: 401,
      speed: 321,
      critRate: 0
    }
  },
  {
    id: 'energising-cleanse',
    name: 'Energising Cleanse',
    effect: 'Dispel the first negative Status Effect received and gain 2 AP.',
    luminaPoints: 10,
    stats: {
      health: 1166,
      defense: 160,
      speed: 0,
      critRate: 0
    }
  },
  {
    id: 'energising-death',
    name: 'Energising Death',
    effect: 'On death, +4 AP to allies.',
    luminaPoints: 5,
    stats: {
      health: 0,
      defense: 771,
      speed: 308,
      critRate: 0
    }
  },
  {
    id: 'energising-gradient',
    name: 'Energising Gradient',
    effect: '+1 AP per Gradient Charge consumed.',
    luminaPoints: 10,
    stats: {
      health: 0,
      defense: 0,
      speed: 293,
      critRate: 10
    }
  },
  {
    id: 'energising-heal',
    name: 'Energising Heal',
    effect: 'On Healing an ally, also give 2 AP.',
    luminaPoints: 10,
    stats: {
      health: 206,
      defense: 0,
      speed: 41,
      critRate: 0
    }
  },
  {
    id: 'energising-jump',
    name: 'Energising Jump',
    effect: '+1 AP on Jump Counterattack.',
    luminaPoints: 5,
    stats: {
      health: 44,
      defense: 0,
      speed: 29,
      critRate: 0
    }
  },
  {
    id: 'energising-pain',
    name: 'Energising Pain',
    effect: 'No longer gain AP on Parry. +1 AP on getting hit.',
    luminaPoints: 10,
    stats: {
      health: 3855,
      defense: 713,
      speed: 0,
      critRate: 0
    }
  },
  {
    id: 'energising-parry',
    name: 'Energising Parry',
    effect: '+1 AP on successful Parry.',
    luminaPoints: 15,
    stats: {
      health: 6303,
      defense: 0,
      speed: 0,
      critRate: 0
    }
  },
  {
    id: 'energising-powerful',
    name: 'Energising Powerful',
    effect: 'Give 2 AP on applying Powerful.',
    luminaPoints: 10,
    stats: {
      health: 0,
      defense: 373,
      speed: 173,
      critRate: 0
    }
  },
  {
    id: 'energising-revive',
    name: 'Energising Revive',
    effect: '+3 AP to all allies when revived.',
    luminaPoints: 5,
    stats: {
      health: 270,
      defense: 96,
      speed: 0,
      critRate: 0
    }
  },
  {
    id: 'energising-rush',
    name: 'Energising Rush',
    effect: 'Give 2 AP on applying Rush.',
    luminaPoints: 10,
    stats: {
      health: 0,
      defense: 801,
      speed: 321,
      critRate: 0
    }
  },
  {
    id: 'energising-shell',
    name: 'Energising Shell',
    effect: 'Give 2 AP on applying Shell.',
    luminaPoints: 10,
    stats: {
      health: 0,
      defense: 319,
      speed: 154,
      critRate: 0
    }
  },
  {
    id: 'energising-shots',
    name: 'Energising Shots',
    effect: '20% chance to gain 1 AP on Free Aim shot.',
    luminaPoints: 0,
    stats: {
      health: 0,
      defense: 0,
      speed: 779,
      critRate: 16
    }
  },
  {
    id: 'energising-start-i',
    name: 'Energising Start I',
    effect: '+1 AP on battle start.',
    luminaPoints: 5,
    stats: {
      health: 320,
      defense: 0,
      speed: 0,
      critRate: 0
    }
  },
  {
    id: 'energising-start-ii',
    name: 'Energising Start II',
    effect: '+1 AP on battle start.',
    luminaPoints: 10,
    stats: {
      health: 175,
      defense: 0,
      speed: 0,
      critRate: 0
    }
  },
  {
    id: 'energising-start-iii',
    name: 'Energising Start III',
    effect: '+1 AP on battle start.',
    luminaPoints: 15,
    stats: {
      health: 320,
      defense: 0,
      speed: 0,
      critRate: 0
    }
  },
  {
    id: 'energising-start-iv',
    name: 'Energising Start IV',
    effect: '+1 AP on battle start.',
    luminaPoints: 20,
    stats: {
      health: 513,
      defense: 0,
      speed: 0,
      critRate: 0
    }
  },
  {
    id: 'energising-stun',
    name: 'Energising Stun',
    effect: '+1 AP on hitting a Stunned target with a Skill.',
    luminaPoints: 10,
    stats: {
      health: 0,
      defense: 519,
      speed: 31,
      critRate: 0
    }
  },
  {
    id: 'energising-turn',
    name: 'Energising Turn',
    effect: '+1 AP on turn start.',
    luminaPoints: 20,
    stats: {
      health: 0,
      defense: 1277,
      speed: 0,
      critRate: 0
    }
  },
  {
    id: 'energy-master',
    name: 'Energy Master',
    effect: 'Every AP gain is increased by 1.',
    luminaPoints: 40,
    stats: {
      health: 4970,
      defense: 0,
      speed: 0,
      critRate: 0
    }
  },
  {
    id: 'enfeebling-attack',
    name: 'Enfeebling Attack',
    effect: 'Base Attack applies Powerless for 1 turn.',
    luminaPoints: 10,
    stats: {
      health: 389,
      defense: 478,
      speed: 0,
      critRate: 0
    }
  },
  {
    id: 'enfeebling-mark',
    name: 'Enfeebling Mark',
    effect: 'Marked targets deal 30% less damage.',
    luminaPoints: 10,
    stats: {
      health: 0,
      defense: 102,
      speed: 21,
      critRate: 0
    }
  },
  {
    id: 'exhausting-power',
    name: 'Exhausting Power',
    effect: '50% increased damage when Exhausted.',
    luminaPoints: 2,
    stats: {
      health: 270,
      defense: 96,
      speed: 0,
      critRate: 0
    }
  },
  {
    id: 'exposing-attack',
    name: 'Exposing Attack',
    effect: 'Base Attack applies Defenceless for 1 turn.',
    luminaPoints: 10,
    stats: {
      health: 0,
      defense: 20,
      speed: 4,
      critRate: 0
    }
  },
  {
    id: 'exposing-break',
    name: 'Exposing Break',
    effect: 'Apply Defenceless on Break.',
    luminaPoints: 5,
    stats: {
      health: 0,
      defense: 681,
      speed: 280,
      critRate: 0
    }
  },
  {
    id: 'faster-than-strong',
    name: 'Faster Than Strong',
    effect: 'Always play twice in a row, but deal 50% less damage.',
    luminaPoints: 10,
    stats: {
      health: 876,
      defense: 373,
      speed: 0,
      critRate: 0
    }
  },
  {
    id: 'first-offensive',
    name: 'First Offensive',
    effect: 'First hit dealt and taken deals 50% more damage.',
    luminaPoints: 5,
    stats: {
      health: 0,
      defense: 75,
      speed: 13,
      critRate: 0
    }
  },
  {
    id: 'first-strike',
    name: 'First Strike',
    effect: 'Play first.',
    luminaPoints: 10,
    stats: {
      health: 0,
      defense: 41,
      speed: 10,
      critRate: 0
    }
  },
  {
    id: 'fueling-break',
    name: 'Fueling Break',
    effect: 'Breaking a target also doubles its Burn amount.',
    luminaPoints: 5,
    stats: {
      health: 0,
      defense: 507,
      speed: 31,
      critRate: 0
    }
  },
  {
    id: 'full-strength',
    name: 'Full Strength',
    effect: '25% increased damage on full Health.',
    luminaPoints: 15,
    stats: {
      health: 876,
      defense: 373,
      speed: 0,
      critRate: 0
    }
  },
  {
    id: 'glass-canon',
    name: 'Glass Canon',
    effect: 'Deal 25% more damage, but take 25% more damage.',
    luminaPoints: 10,
    stats: {
      health: 0,
      defense: 532,
      speed: 0,
      critRate: 0
    }
  },
  {
    id: 'gradient-break',
    name: 'Gradient Break',
    effect: '+50% of a Gradient Charge on Breaking a target.',
    luminaPoints: 0,
    stats: {
      health: 0,
      defense: 434,
      speed: 28,
      critRate: 0
    }
  },
  {
    id: 'gradient-breaker',
    name: 'Gradient Breaker',
    effect: '50% increased Break damage with Gradient Attacks.',
    luminaPoints: 5,
    stats: {
      health: 0,
      defense: 546,
      speed: 32,
      critRate: 0
    }
  },
  {
    id: 'gradient-fighter',
    name: 'Gradient Fighter',
    effect: '25% increased damage with Gradient Attacks.',
    luminaPoints: 5,
    stats: {
      health: 0,
      defense: 182,
      speed: 18,
      critRate: 0
    }
  },
  {
    id: 'greater-defenceless',
    name: 'Greater Defenceless',
    effect: '+15% to Defenceless damage amplification.',
    luminaPoints: 15,
    stats: {
      health: 0,
      defense: 293,
      speed: 23,
      critRate: 0
    }
  },
  {
    id: 'greater-powerful',
    name: 'Greater Powerful',
    effect: '+15% to Powerful damage increase.',
    luminaPoints: 10,
    stats: {
      health: 0,
      defense: 59,
      speed: 13,
      critRate: 0
    }
  },
  {
    id: 'greater-powerless',
    name: 'Greater Powerless',
    effect: '+15% to Powerless damage reduction.',
    luminaPoints: 15,
    stats: {
      health: 0,
      defense: 1727,
      speed: 597,
      critRate: 0
    }
  },
  {
    id: 'greater-rush',
    name: 'Greater Rush',
    effect: '+25% to Rush Speed increase.',
    luminaPoints: 10,
    stats: {
      health: 0,
      defense: 439,
      speed: 12,
      critRate: 0
    }
  },
  {
    id: 'greater-shell',
    name: 'Greater Shell',
    effect: '+10% to Shell damage reduction.',
    luminaPoints: 10,
    stats: {
      health: 599,
      defense: 240,
      speed: 0,
      critRate: 0
    }
  },
  {
    id: 'greater-slow',
    name: 'Greater Slow',
    effect: '+10% to Slow Speed reduction.',
    luminaPoints: 15,
    stats: {
      health: 0,
      defense: 647,
      speed: 266,
      critRate: 0
    }
  },
  {
    id: 'healing-boon',
    name: 'Healing Boon',
    effect: 'Heal 15% HP on applying buff.',
    luminaPoints: 10,
    stats: {
      health: 0,
      defense: 647,
      speed: 266,
      critRate: 0
    }
  },
  {
    id: 'healing-counter',
    name: 'Healing Counter',
    effect: 'Recover 25% Health on Counterattack.',
    luminaPoints: 10,
    stats: {
      health: 751,
      defense: 0,
      speed: 0,
      critRate: 0
    }
  },
  {
    id: 'healing-death',
    name: 'Healing Death',
    effect: 'On death, the rest of the Expedition recover all Health.',
    luminaPoints: 5,
    stats: {
      health: 0,
      defense: 78,
      speed: 13,
      critRate: 0
    }
  },
  {
    id: 'healing-fire',
    name: 'Healing Fire',
    effect: 'Recover 25% Health when attacking a Burning target. Once per turn.',
    luminaPoints: 10,
    stats: {
      health: 0,
      defense: 240,
      speed: 118,
      critRate: 0
    }
  },
  {
    id: 'healing-mark',
    name: 'Healing Mark',
    effect: 'Recover 25% Health on hitting a Marked enemy. Once per turn.',
    luminaPoints: 20,
    stats: {
      health: 0,
      defense: 65,
      speed: 0,
      critRate: 0
    }
  },
  {
    id: 'healing-parry',
    name: 'Healing Parry',
    effect: 'Recover 3% Health on Parry.',
    luminaPoints: 5,
    stats: {
      health: 395,
      defense: 152,
      speed: 0,
      critRate: 0
    }
  },
  {
    id: 'healing-share',
    name: 'Healing Share',
    effect: 'Receive 15% of all Heals affecting other characters.',
    luminaPoints: 5,
    stats: {
      health: 467,
      defense: 0,
      speed: 14,
      critRate: 0
    }
  },
  {
    id: 'healing-stun',
    name: 'Healing Stun',
    effect: 'Recover 5% Health on hitting a Stunned target.',
    luminaPoints: 10,
    stats: {
      health: 876,
      defense: 0,
      speed: 173,
      critRate: 0
    }
  },
  {
    id: 'healing-tint-energy',
    name: 'Healing Tint Energy',
    effect: 'Healing Tints also give 1 AP.',
    luminaPoints: 1,
    stats: {
      health: 216,
      defense: 71,
      speed: 0,
      critRate: 0
    }
  },
  {
    id: 'immaculate',
    name: 'Immaculate',
    effect: '30% increased damage until a hit is received.',
    luminaPoints: 10,
    stats: {
      health: 0,
      defense: 103,
      speed: 15,
      critRate: 0
    }
  },
  {
    id: 'in-medias-res',
    name: 'In Medias Res',
    effect: '+3 Shields on Battle Start, but max Health is halved.',
    luminaPoints: 10,
    stats: {
      health: 0,
      defense: 1310,
      speed: 13,
      critRate: 0
    }
  },
  {
    id: 'inverted-affinity',
    name: 'Inverted Affinity',
    effect: 'Apply Inverted on self for 3 turns on battle start. 50% increased damage while Inverted.',
    luminaPoints: 5,
    stats: {
      health: 270,
      defense: 0,
      speed: 11,
      critRate: 0
    }
  },
  {
    id: 'last-stand-critical',
    name: 'Last Stand Critical',
    effect: '100% Critical Chance while fighting alone.',
    luminaPoints: 3,
    stats: {
      health: 168,
      defense: 50,
      speed: 0,
      critRate: 0
    }
  },
  {
    id: 'longer-burn',
    name: 'Longer Burn',
    effect: 'Burn duration is increased by 2.',
    luminaPoints: 15,
    stats: {
      health: 2570,
      defense: 1426,
      speed: 0,
      critRate: 0
    }
  },
  {
    id: 'longer-powerful',
    name: 'Longer Powerful',
    effect: 'On applying Powerful, its duration is increased by 2.',
    luminaPoints: 10,
    stats: {
      health: 376,
      defense: 0,
      speed: 13,
      critRate: 0
    }
  },
  {
    id: 'longer-rush',
    name: 'Longer Rush',
    effect: 'On applying Rush, its duration is increased by 2.',
    luminaPoints: 10,
    stats: {
      health: 778,
      defense: 0,
      speed: 154,
      critRate: 0
    }
  },
  {
    id: 'longer-shell',
    name: 'Longer Shell',
    effect: 'On applying Shell, its duration is increased by 2.',
    luminaPoints: 10,
    stats: {
      health: 2757,
      defense: 1572,
      speed: 0,
      critRate: 0
    }
  },
  {
    id: 'marking-break',
    name: 'Marking Break',
    effect: 'Apply Mark on Break.',
    luminaPoints: 5,
    stats: {
      health: 0,
      defense: 434,
      speed: 28,
      critRate: 0
    }
  },
  {
    id: 'marking-shots',
    name: 'Marking Shots',
    effect: '20% chance to apply Mark on Free Aim shot.',
    luminaPoints: 3,
    stats: {
      health: 0,
      defense: 26,
      speed: 2,
      critRate: 0
    }
  },
  {
    id: 'painted-power',
    name: 'Painted Power',
    effect: 'Damage can exceed 9,999.',
    luminaPoints: 5,
    stats: {
      health: 1844,
      defense: 0,
      speed: 0,
      critRate: 0
    }
  },
  {
    id: 'painter',
    name: 'Painter',
    effect: 'Converts all Physical damage to Void damage.',
    luminaPoints: 10,
    stats: {
      health: 0,
      defense: 519,
      speed: 31,
      critRate: 0
    }
  },
  {
    id: 'perilous-parry',
    name: 'Perilous Parry',
    effect: '+1 AP on Parry, but damage received is doubled.',
    luminaPoints: 5,
    stats: {
      health: 0,
      defense: 586,
      speed: 33,
      critRate: 0
    }
  },
  {
    id: 'piercing-shot',
    name: 'Piercing Shot',
    effect: '25% increased Free Aim damage. Free Aim shots ignore Shields.',
    luminaPoints: 2,
    stats: {
      health: 546,
      defense: 0,
      speed: 15,
      critRate: 0
    }
  },
  {
    id: 'powered-attack',
    name: 'Powered Attack',
    effect: 'On every damage dealt, try to consume 1 AP. If succesful, increase damage by 20%.',
    luminaPoints: 10,
    stats: {
      health: 0,
      defense: 132,
      speed: 7,
      critRate: 0
    }
  },
  {
    id: 'powerful-heal',
    name: 'Powerful Heal',
    effect: 'Healing an ally also applies Powerful for 1 turn.',
    luminaPoints: 5,
    stats: {
      health: 2162,
      defense: 0,
      speed: 434,
      critRate: 0
    }
  },
  {
    id: 'powerful-mark',
    name: 'Powerful Mark',
    effect: 'Gain Powerful on hitting a Marked target.',
    luminaPoints: 5,
    stats: {
      health: 0,
      defense: 779,
      speed: 16,
      critRate: 0
    }
  },
  {
    id: 'powerful-on-shell',
    name: 'Powerful On Shell',
    effect: 'Apply Powerful on applying Shell.',
    luminaPoints: 10,
    stats: {
      health: 0,
      defense: 240,
      speed: 16,
      critRate: 0
    }
  },
  {
    id: 'powerful-revive',
    name: 'Powerful Revive',
    effect: 'Apply Powerful for 3 turns when revived.',
    luminaPoints: 3,
    stats: {
      health: 0,
      defense: 546,
      speed: 32,
      critRate: 0
    }
  },
  {
    id: 'powerful-shield',
    name: 'Powerful Shield',
    effect: '10% increased damage per Shield Point on self.',
    luminaPoints: 5,
    stats: {
      health: 0,
      defense: 651,
      speed: 14,
      critRate: 0
    }
  },
  {
    id: 'powerful-shots',
    name: 'Powerful Shots',
    effect: '20% chance to gain Powerful on Free Aim shot.',
    luminaPoints: 3,
    stats: {
      health: 983,
      defense: 44,
      speed: 0,
      critRate: 0
    }
  },
  {
    id: 'pro-retreat',
    name: 'Pro Retreat',
    effect: 'Allows Flee to be instantaneous.',
    luminaPoints: 40,
    stats: {
      health: 2014,
      defense: 0,
      speed: 406,
      critRate: 0
    }
  },
  {
    id: 'protecting-attack',
    name: 'Protecting Attack',
    effect: 'Gain Shell for 1 turn on Base Attack.',
    luminaPoints: 10,
    stats: {
      health: 3081,
      defense: 524,
      speed: 0,
      critRate: 0
    }
  },
  {
    id: 'protecting-death',
    name: 'Protecting Death',
    effect: 'On death, allies gain Shell.',
    luminaPoints: 5,
    stats: {
      health: 599,
      defense: 0,
      speed: 118,
      critRate: 0
    }
  },
  {
    id: 'protecting-heal',
    name: 'Protecting Heal',
    effect: 'Healing an ally also applies Shell for 1 turn.',
    luminaPoints: 5,
    stats: {
      health: 395,
      defense: 0,
      speed: 78,
      critRate: 0
    }
  },
  {
    id: 'protecting-last-stand',
    name: 'Protecting Last Stand',
    effect: 'Gain Shell if fighting alone.',
    luminaPoints: 3,
    stats: {
      health: 168,
      defense: 50,
      speed: 0,
      critRate: 0
    }
  },
  {
    id: 'protecting-shots',
    name: 'Protecting Shots',
    effect: '20% chance to gain Shell on Free Aim shot.',
    luminaPoints: 3,
    stats: {
      health: 4869,
      defense: 301,
      speed: 0,
      critRate: 0
    }
  },
  {
    id: 'protecting-tint',
    name: 'Protecting Tint',
    effect: 'Healing Tints also apply Shell.',
    luminaPoints: 5,
    stats: {
      health: 1403,
      defense: 681,
      speed: 0,
      critRate: 0
    }
  },
  {
    id: 'quick-break',
    name: 'Quick Break',
    effect: 'Play again on Breaking a target.',
    luminaPoints: 3,
    stats: {
      health: 0,
      defense: 672,
      speed: 36,
      critRate: 0
    }
  },
  {
    id: 'random-defense',
    name: 'Random Defense',
    effect: 'Damage taken is randomly multiplied by a value between 50% and 200%.',
    luminaPoints: 5,
    stats: {
      health: 0,
      defense: 0,
      speed: 34,
      critRate: 0
    }
  },
  {
    id: 'recovery',
    name: 'Recovery',
    effect: 'Recovers 10% Health on turn start.',
    luminaPoints: 10,
    stats: {
      health: 2000,
      defense: 0,
      speed: 324,
      critRate: 0
    }
  },
  {
    id: 'rejuvenating-revive',
    name: 'Rejuvenating Revive',
    effect: 'Apply Regen for 3 turns when revived.',
    luminaPoints: 3,
    stats: {
      health: 546,
      defense: 218,
      speed: 0,
      critRate: 0
    }
  },
  {
    id: 'revive-paradox',
    name: 'Revive Paradox',
    effect: 'Play immediately when revived.',
    luminaPoints: 5,
    stats: {
      health: 0,
      defense: 92,
      speed: 14,
      critRate: 0
    }
  },
  {
    id: 'revive-tint-energy',
    name: 'Revive Tint Energy',
    effect: 'Revive Tints also give 3 AP.',
    luminaPoints: 10,
    stats: {
      health: 257,
      defense: 92,
      speed: 0,
      critRate: 0
    }
  },
  {
    id: 'rewarding-mark',
    name: 'Rewarding Mark',
    effect: '+2 AP on dealing damage to a Marked target. Once per turn.',
    luminaPoints: 5,
    stats: {
      health: 0,
      defense: 20,
      speed: 7,
      critRate: 0
    }
  },
  {
    id: 'roulette',
    name: 'Roulette',
    effect: 'Every hit has a 50% chance to deal either 50% or 200% of its damage.',
    luminaPoints: 5,
    stats: {
      health: 0,
      defense: 34,
      speed: 9,
      critRate: 0
    }
  },
  {
    id: 'rush-on-powerful',
    name: 'Rush On Powerful',
    effect: 'Apply Rush on applying Powerful.',
    luminaPoints: 10,
    stats: {
      health: 0,
      defense: 639,
      speed: 35,
      critRate: 0
    }
  },
  {
    id: 'sos-power',
    name: 'SOS Power',
    effect: 'Apply Powerful when falling below 50% Health.',
    luminaPoints: 5,
    stats: {
      health: 0,
      defense: 43,
      speed: 10,
      critRate: 0
    }
  },
  {
    id: 'sos-rush',
    name: 'SOS Rush',
    effect: 'Apply Rush when falling below 50% Health.',
    luminaPoints: 0,
    stats: {
      health: 288,
      defense: 142,
      speed: 0,
      critRate: 0
    }
  },
  {
    id: 'sos-shell',
    name: 'SOS Shell',
    effect: 'Apply Shell when falling below 50% Health.',
    luminaPoints: 5,
    stats: {
      health: 0,
      defense: 13,
      speed: 14,
      critRate: 0
    }
  },
  {
    id: 'second-chance',
    name: 'Second Chance',
    effect: 'Revive with 100% Health. Once per battle.',
    luminaPoints: 0,
    stats: {
      health: 1107,
      defense: 0,
      speed: 8,
      critRate: 0
    }
  },
  {
    id: 'shared-care',
    name: 'Shared Care',
    effect: 'When Healing an ally, also Heal self for 50% of that value.',
    luminaPoints: 10,
    stats: {
      health: 206,
      defense: 68,
      speed: 0,
      critRate: 0
    }
  },
  {
    id: 'shell-on-rush',
    name: 'Shell On Rush',
    effect: 'Apply Shell on applying Rush.',
    luminaPoints: 10,
    stats: {
      health: 0,
      defense: 1048,
      speed: 413,
      critRate: 0
    }
  },
  {
    id: 'shield-affinity',
    name: 'Shield Affinity',
    effect: '30% increased damage while having Shields, but receiving any damage always removes all Shields.',
    luminaPoints: 15,
    stats: {
      health: 0,
      defense: 266,
      speed: 22,
      critRate: 0
    }
  },
  {
    id: 'shielding-death',
    name: 'Shielding Death',
    effect: 'On death, allies gain 3 Shield points.',
    luminaPoints: 10,
    stats: {
      health: 0,
      defense: 801,
      speed: 161,
      critRate: 0
    }
  },
  {
    id: 'shielding-tint',
    name: 'Shielding Tint',
    effect: 'Healing Tints also add 2 Shields.',
    luminaPoints: 10,
    stats: {
      health: 313,
      defense: 116,
      speed: 0,
      critRate: 0
    }
  },
  {
    id: 'shortcut',
    name: 'Shortcut',
    effect: 'Immediately play when falling below 30% Health. Once per battle.',
    luminaPoints: 0,
    stats: {
      health: 0,
      defense: 672,
      speed: 36,
      critRate: 0
    }
  },
  {
    id: 'slowing-attack',
    name: 'Slowing Attack',
    effect: '',
    luminaPoints: 10,
    stats: {
      health: 2757,
      defense: 0,
      speed: 557,
      critRate: 0
    }
  },
  {
    id: 'slowing-break',
    name: 'Slowing Break',
    effect: 'Apply Slow on Break.',
    luminaPoints: 5,
    stats: {
      health: 0,
      defense: 1501,
      speed: 546,
      critRate: 0
    }
  },
  {
    id: 'sniper',
    name: 'Sniper',
    effect: 'First Free Aim shot each turn deals 200% increased damage and can Break.',
    luminaPoints: 15,
    stats: {
      health: 0,
      defense: 552,
      speed: 13,
      critRate: 0
    }
  },
  {
    id: 'solidifying',
    name: 'Solidifying',
    effect: "+2 Shields when the character's Health falls below 50%. Once per battle.",
    luminaPoints: 10,
    stats: {
      health: 0,
      defense: 116,
      speed: 62,
      critRate: 0
    }
  },
  {
    id: 'solo-fighter',
    name: 'Solo Fighter',
    effect: 'Deal 50% more damage if fighting alone.',
    luminaPoints: 1,
    stats: {
      health: 168,
      defense: 50,
      speed: 0,
      critRate: 0
    }
  },
  {
    id: 'staggering-attack',
    name: 'Staggering Attack',
    effect: '50% increased Break damage on Base Attack.',
    luminaPoints: 1,
    stats: {
      health: 0,
      defense: 21,
      speed: 4,
      critRate: 0
    }
  },
  {
    id: 'stay-marked',
    name: 'Stay Marked',
    effect: '50% chance to apply Mark when attacking a Marked target.',
    luminaPoints: 10,
    stats: {
      health: 0,
      defense: 201,
      speed: 12,
      critRate: 0
    }
  },
  {
    id: 'stun-boost',
    name: 'Stun Boost',
    effect: '30% increased damage on Stunned targets.',
    luminaPoints: 10,
    stats: {
      health: 0,
      defense: 35,
      speed: 2,
      critRate: 0
    }
  },
  {
    id: 'survivor',
    name: 'Survivor',
    effect: 'Survive fatal damage with 1 Health. Once per battle.',
    luminaPoints: 0,
    stats: {
      health: 0,
      defense: 439,
      speed: 12,
      critRate: 0
    }
  },
  {
    id: 'sweet-kill',
    name: 'Sweet Kill',
    effect: 'Recover 50% Health on killing an enemy.',
    luminaPoints: 5,
    stats: {
      health: 0,
      defense: 54,
      speed: 11,
      critRate: 0
    }
  },
  {
    id: 'tainted',
    name: 'Tainted',
    effect: '15% increased damage for each Status Effect on self.',
    luminaPoints: 0,
    stats: {
      health: 0,
      defense: 1022,
      speed: 12,
      critRate: 0
    }
  },
  {
    id: 'teamwork',
    name: 'Teamwork',
    effect: '10% increased damage while all allies are alive.',
    luminaPoints: 5,
    stats: {
      health: 216,
      defense: 0,
      speed: 71,
      critRate: 0
    }
  },
  {
    id: 'the-one',
    name: 'The One',
    effect: 'Max Health reduced to 1.',
    luminaPoints: 1,
    stats: {
      health: 0,
      defense: 0,
      speed: 106,
      critRate: 0
    }
  },
  {
    id: 'time-tint',
    name: 'Time Tint',
    effect: 'Energy Tints also apply Rush.',
    luminaPoints: 10,
    stats: {
      health: 376,
      defense: 145,
      speed: 0,
      critRate: 0
    }
  },
  {
    id: 'versatile',
    name: 'Versatile',
    effect: 'After a Free Aim hit, Base Attack damage is increased by 50% for 1 turn.',
    luminaPoints: 5,
    stats: {
      health: 0,
      defense: 21,
      speed: 4,
      critRate: 0
    }
  },
  {
    id: 'warming-up',
    name: 'Warming Up',
    effect: '5% increased damage per turn. Can stack up to 5 turns.',
    luminaPoints: 15,
    stats: {
      health: 1166,
      defense: 0,
      speed: 9,
      critRate: 0
    }
  },
  {
    id: 'weakness-gain',
    name: 'Weakness Gain',
    effect: "+1 AP on hitting an enemy's Weakness. Once per turn.",
    luminaPoints: 3,
    stats: {
      health: 0,
      defense: 162,
      speed: 17,
      critRate: 0
    }
  }
];

export default PICTOS;
