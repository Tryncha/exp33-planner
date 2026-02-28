import { Weapon } from '../types';

const GUSTAVE_VERSO: Weapon[] = [
  {
    id: 'abysseram',
    characterIds: ['gustave', 'verso'],
    element: 'physical',
    basePower: 3228,
    scaling: { vitality: 'S', defense: 'A' },
    en: {
      name: 'Abysseram',
      passives: [
        '50% increased damage on Rank D. No damage increase on other ranks.',
        '50% increased Base Attack damage.',
        'On Rank D, recover 20% Health with Base Attack.'
      ]
    },
    es: {
      name: 'Abysseram',
      passives: [
        '50% increased damage on Rank D. No damage increase on other ranks.',
        '50% increased Base Attack damage.',
        'On Rank D, recover 20% Health with Base Attack.'
      ]
    },
    fr: {
      name: 'Abysseram',
      passives: [
        '50% increased damage on Rank D. No damage increase on other ranks.',
        '50% increased Base Attack damage.',
        'On Rank D, recover 20% Health with Base Attack.'
      ]
    }
  },
  {
    id: 'blodam',
    characterIds: ['gustave', 'verso'],
    element: 'light',
    basePower: 3487,
    scaling: { defense: 'A', agility: 'S' },
    en: {
      name: 'Blodam',
      passives: [
        'Perfection is now based on current Health. Gain 1 Rank every 20% missing Health.',
        '20% increased Light damage with Skills.',
        '+1 AP on Rank Up.'
      ]
    },
    es: {
      name: 'Blodam',
      passives: [
        'Perfection is now based on current Health. Gain 1 Rank every 20% missing Health.',
        '20% increased Light damage with Skills.',
        '+1 AP on Rank Up.'
      ]
    },
    fr: {
      name: 'Blodam',
      passives: [
        'Perfection is now based on current Health. Gain 1 Rank every 20% missing Health.',
        '20% increased Light damage with Skills.',
        '+1 AP on Rank Up.'
      ]
    }
  },
  {
    id: 'chevalam',
    characterIds: ['gustave', 'verso'],
    element: 'physical',
    basePower: 3067,
    scaling: { agility: 'S', luck: 'A' },
    en: {
      name: 'Chevalam',
      passives: [
        "Start battle at Rank S, but can't be Healed or gain Shields.",
        '20% increased damage for each consecutive turn without taking damage. Can stack up to 5 times.',
        'Apply Rush on Rank S.'
      ]
    },
    es: {
      name: 'Chevalam',
      passives: [
        "Start battle at Rank S, but can't be Healed or gain Shields.",
        '20% increased damage for each consecutive turn without taking damage. Can stack up to 5 times.',
        'Apply Rush on Rank S.'
      ]
    },
    fr: {
      name: 'Chevalam',
      passives: [
        "Start battle at Rank S, but can't be Healed or gain Shields.",
        '20% increased damage for each consecutive turn without taking damage. Can stack up to 5 times.',
        'Apply Rush on Rank S.'
      ]
    }
  },
  {
    id: 'confuso',
    characterIds: ['gustave', 'verso'],
    element: 'light',
    basePower: 3067,
    scaling: { agility: 'A', luck: 'S' },
    en: {
      name: 'Confuso',
      passives: [
        'Light damage can Burn on Critical hits.',
        'Apply 3 Burn instead of Mark.',
        'Increase Burn damage by 50% per Rank, up to 300% on Rank S.'
      ]
    },
    es: {
      name: 'Confuso',
      passives: [
        'Light damage can Burn on Critical hits.',
        'Apply 3 Burn instead of Mark.',
        'Increase Burn damage by 50% per Rank, up to 300% on Rank S.'
      ]
    },
    fr: {
      name: 'Confuso',
      passives: [
        'Light damage can Burn on Critical hits.',
        'Apply 3 Burn instead of Mark.',
        'Increase Burn damage by 50% per Rank, up to 300% on Rank S.'
      ]
    }
  },
  {
    id: 'contorso',
    characterIds: ['gustave', 'verso'],
    element: 'lightning',
    basePower: 2841,
    scaling: { defense: 'A', agility: 'S' },
    en: {
      name: 'Contorso',
      passives: [
        'Switch to Rank S on Break. Base Attack can Break.',
        '100% Critical Chance on Rank S.',
        'Triggers a lightning strike on Critical hits.'
      ]
    },
    es: {
      name: 'Contorso',
      passives: [
        'Switch to Rank S on Break. Base Attack can Break.',
        '100% Critical Chance on Rank S.',
        'Triggers a lightning strike on Critical hits.'
      ]
    },
    fr: {
      name: 'Contorso',
      passives: [
        'Switch to Rank S on Break. Base Attack can Break.',
        '100% Critical Chance on Rank S.',
        'Triggers a lightning strike on Critical hits.'
      ]
    }
  },
  {
    id: 'corpeso',
    characterIds: ['gustave', 'verso'],
    element: 'fire',
    basePower: 3648,
    scaling: { vitality: 'A', agility: 'S' },
    en: {
      name: 'Corpeso',
      passives: [
        'Base Attack applies 2 Burn stack per Rank.',
        '+1 AP on Rank Up.',
        'Increase Burn damage by 50% per Rank, up to 300% on Rank S.'
      ]
    },
    es: {
      name: 'Corpeso',
      passives: [
        'Base Attack applies 2 Burn stack per Rank.',
        '+1 AP on Rank Up.',
        'Increase Burn damage by 50% per Rank, up to 300% on Rank S.'
      ]
    },
    fr: {
      name: 'Corpeso',
      passives: [
        'Base Attack applies 2 Burn stack per Rank.',
        '+1 AP on Rank Up.',
        'Increase Burn damage by 50% per Rank, up to 300% on Rank S.'
      ]
    }
  },
  {
    id: 'cruleram',
    characterIds: ['gustave', 'verso'],
    element: 'ice',
    basePower: 3454,
    scaling: { defense: 'S', luck: 'A' },
    en: {
      name: 'Cruleram',
      passives: [
        "Don't lose Rank when taking damage from Powerless enemies.",
        '+1 Perfection on hitting a Powerless enemy.',
        'Apply Powerless on Counterattack.'
      ]
    },
    es: {
      name: 'Cruleram',
      passives: [
        "Don't lose Rank when taking damage from Powerless enemies.",
        '+1 Perfection on hitting a Powerless enemy.',
        'Apply Powerless on Counterattack.'
      ]
    },
    fr: {
      name: 'Cruleram',
      passives: [
        "Don't lose Rank when taking damage from Powerless enemies.",
        '+1 Perfection on hitting a Powerless enemy.',
        'Apply Powerless on Counterattack.'
      ]
    }
  },
  {
    id: 'cultam',
    characterIds: ['gustave', 'verso'],
    element: 'dark',
    basePower: 3132,
    scaling: { defense: 'S', agility: 'A' },
    en: {
      name: 'Cultam',
      passives: [
        'No Perfection loss on damage taken. Perfection is instead lost on being Healed.',
        'Gain 2 AP on Counterattack.',
        'Gain 1 Rank on Counterattack.'
      ]
    },
    es: {
      name: 'Cultam',
      passives: [
        'No Perfection loss on damage taken. Perfection is instead lost on being Healed.',
        'Gain 2 AP on Counterattack.',
        'Gain 1 Rank on Counterattack.'
      ]
    },
    fr: {
      name: 'Cultam',
      passives: [
        'No Perfection loss on damage taken. Perfection is instead lost on being Healed.',
        'Gain 2 AP on Counterattack.',
        'Gain 1 Rank on Counterattack.'
      ]
    }
  },
  {
    id: 'danseso',
    characterIds: ['gustave', 'verso'],
    element: 'fire',
    basePower: 2970,
    scaling: { agility: 'A', luck: 'S' },
    en: {
      name: 'Danseso',
      passives: [
        'Base attack gives 1 Perfection per Burn on target.',
        'While Powerful, 20% chance to Burn on hit.',
        '+1 AP on Rank Up.'
      ]
    },
    es: {
      name: 'Danseso',
      passives: [
        'Base attack gives 1 Perfection per Burn on target.',
        'While Powerful, 20% chance to Burn on hit.',
        '+1 AP on Rank Up.'
      ]
    },
    fr: {
      name: 'Danseso',
      passives: [
        'Base attack gives 1 Perfection per Burn on target.',
        'While Powerful, 20% chance to Burn on hit.',
        '+1 AP on Rank Up.'
      ]
    }
  },
  {
    id: 'delaram',
    characterIds: ['gustave', 'verso'],
    element: 'light',
    basePower: 3390,
    scaling: { vitality: 'A', luck: 'S' },
    en: {
      name: 'Delaram',
      passives: [
        'Start battle on Rank B, but 50% Health.',
        'Recover 15% Health on Base Attack.',
        'Apply Powerful on Rank B.'
      ]
    },
    es: {
      name: 'Delaram',
      passives: [
        'Start battle on Rank B, but 50% Health.',
        'Recover 15% Health on Base Attack.',
        'Apply Powerful on Rank B.'
      ]
    },
    fr: {
      name: 'Delaram',
      passives: [
        'Start battle on Rank B, but 50% Health.',
        'Recover 15% Health on Base Attack.',
        'Apply Powerful on Rank B.'
      ]
    }
  },
  {
    id: 'demonam',
    characterIds: ['gustave', 'verso'],
    element: 'light',
    basePower: 2809,
    scaling: { defense: 'A', agility: 'S' },
    en: {
      name: 'Demonam',
      passives: [
        'Casting a Light Skill increases damage of next Physical Skill cast by 50% and vice versa.',
        '20% increased Physical damage with Skills.',
        'Dealing Light damage with a Skill recovers 3% Health.'
      ]
    },
    es: {
      name: 'Demonam',
      passives: [
        'Casting a Light Skill increases damage of next Physical Skill cast by 50% and vice versa.',
        '20% increased Physical damage with Skills.',
        'Dealing Light damage with a Skill recovers 3% Health.'
      ]
    },
    fr: {
      name: 'Demonam',
      passives: [
        'Casting a Light Skill increases damage of next Physical Skill cast by 50% and vice versa.',
        '20% increased Physical damage with Skills.',
        'Dealing Light damage with a Skill recovers 3% Health.'
      ]
    }
  },
  {
    id: 'dreameso',
    characterIds: ['gustave', 'verso'],
    element: 'physical',
    basePower: 3067,
    scaling: { agility: 'S', luck: 'A' },
    en: {
      name: 'Dreameso',
      passives: ['Gain 1 Rank on Counterattack', '50% increased Counterattack damage.', 'Gain 2 AP on Counterattack.']
    },
    es: {
      name: 'Dreameso',
      passives: ['Gain 1 Rank on Counterattack', '50% increased Counterattack damage.', 'Gain 2 AP on Counterattack.']
    },
    fr: {
      name: 'Dreameso',
      passives: ['Gain 1 Rank on Counterattack', '50% increased Counterattack damage.', 'Gain 2 AP on Counterattack.']
    }
  },
  {
    id: 'dualiso',
    characterIds: ['gustave', 'verso'],
    element: 'lightning',
    basePower: 1776,
    scaling: { vitality: 'A', defense: 'S' },
    en: {
      name: 'Dualiso',
      passives: [
        'Play again after a Base Attack.',
        '50% increased Base Attack damage.',
        'Base Attack gives 4 Perfection.'
      ]
    },
    es: {
      name: 'Dualiso',
      passives: [
        'Play again after a Base Attack.',
        '50% increased Base Attack damage.',
        'Base Attack gives 4 Perfection.'
      ]
    },
    fr: {
      name: 'Dualiso',
      passives: [
        'Play again after a Base Attack.',
        '50% increased Base Attack damage.',
        'Base Attack gives 4 Perfection.'
      ]
    }
  },
  {
    id: 'gaulteram',
    characterIds: ['gustave', 'verso'],
    element: 'earth',
    basePower: 3261,
    scaling: { agility: 'S', luck: 'A' },
    en: {
      name: 'Gaulteram',
      passives: [
        'When hit, lose 1 Perfection instead of 1 rank.',
        'Apply Rush on Rank S',
        'Gain 2 Perfection on turn start.'
      ]
    },
    es: {
      name: 'Gaulteram',
      passives: [
        'When hit, lose 1 Perfection instead of 1 rank.',
        'Apply Rush on Rank S',
        'Gain 2 Perfection on turn start.'
      ]
    },
    fr: {
      name: 'Gaulteram',
      passives: [
        'When hit, lose 1 Perfection instead of 1 rank.',
        'Apply Rush on Rank S',
        'Gain 2 Perfection on turn start.'
      ]
    }
  },
  {
    id: 'glaceso',
    characterIds: ['gustave', 'verso'],
    element: 'ice',
    basePower: 2873,
    scaling: { defense: 'A', luck: 'S' },
    en: {
      name: 'Glaceso',
      passives: [
        '+1 Perfection on Critical hit.',
        'Self-Heal by 2% Health on dealing a Critical hit.',
        'Countemttack is always a Critical hit.'
      ]
    },
    es: {
      name: 'Glaceso',
      passives: [
        '+1 Perfection on Critical hit.',
        'Self-Heal by 2% Health on dealing a Critical hit.',
        'Countemttack is always a Critical hit.'
      ]
    },
    fr: {
      name: 'Glaceso',
      passives: [
        '+1 Perfection on Critical hit.',
        'Self-Heal by 2% Health on dealing a Critical hit.',
        'Countemttack is always a Critical hit.'
      ]
    }
  },
  {
    id: 'lanceram',
    characterIds: ['gustave', 'verso'],
    element: 'physical',
    basePower: 3713,
    scaling: { vitality: 'S', agility: 'A' },
    en: {
      name: 'Lanceram',
      passives: [
        "Rank can't be lower than C.",
        'Base Attack gives 4 Perfection.',
        'Parrying gives 2 Perfection instead of 1.'
      ]
    },
    es: {
      name: 'Lanceram',
      passives: [
        "Rank can't be lower than C.",
        'Base Attack gives 4 Perfection.',
        'Parrying gives 2 Perfection instead of 1.'
      ]
    },
    fr: {
      name: 'Lanceram',
      passives: [
        "Rank can't be lower than C.",
        'Base Attack gives 4 Perfection.',
        'Parrying gives 2 Perfection instead of 1.'
      ]
    }
  },
  {
    id: 'liteso',
    characterIds: ['gustave', 'verso'],
    element: 'physical',
    basePower: 3551,
    scaling: { defense: 'S', agility: 'A' },
    en: {
      name: 'Liteso',
      passives: [
        'Base Attack consumes all Shields to deal 100% increased damage per Shield.',
        '+1 Shield on Counterattack.',
        'Base Attack gives 4 Perfection.'
      ]
    },
    es: {
      name: 'Liteso',
      passives: [
        'Base Attack consumes all Shields to deal 100% increased damage per Shield.',
        '+1 Shield on Counterattack.',
        'Base Attack gives 4 Perfection.'
      ]
    },
    fr: {
      name: 'Liteso',
      passives: [
        'Base Attack consumes all Shields to deal 100% increased damage per Shield.',
        '+1 Shield on Counterattack.',
        'Base Attack gives 4 Perfection.'
      ]
    }
  },
  {
    id: 'noahram',
    characterIds: ['gustave', 'verso'],
    element: 'physical',
    basePower: 2260,
    scaling: { vitality: 'S' },
    en: { name: 'Noahram', passives: ['N/A', 'N/A', 'N/A'] },
    es: { name: 'Noahram', passives: ['N/A', 'N/A', 'N/A'] },
    fr: { name: 'Noahram', passives: ['N/A', 'N/A', 'N/A'] }
  },
  {
    id: 'nosaram',
    characterIds: ['gustave', 'verso'],
    element: 'physical',
    basePower: 3551,
    scaling: { agility: 'S', luck: 'A' },
    en: {
      name: 'Nosaram',
      passives: [
        'Double Perfection gained on Free Aim shots.',
        'Free Aim shots break 2 Shields.',
        '50% increased Free Aim damage.'
      ]
    },
    es: {
      name: 'Nosaram',
      passives: [
        'Double Perfection gained on Free Aim shots.',
        'Free Aim shots break 2 Shields.',
        '50% increased Free Aim damage.'
      ]
    },
    fr: {
      name: 'Nosaram',
      passives: [
        'Double Perfection gained on Free Aim shots.',
        'Free Aim shots break 2 Shields.',
        '50% increased Free Aim damage.'
      ]
    }
  },
  {
    id: 'sakaram',
    characterIds: ['gustave', 'verso'],
    element: 'physical',
    basePower: 2938,
    scaling: { agility: 'S', luck: 'A' },
    en: {
      name: 'Sakaram',
      passives: [
        "Can't lose Perfection. No damage increase from Rank.",
        '50% increased Base Attack damage.',
        'Base Attack gives 4 Perfection.'
      ]
    },
    es: {
      name: 'Sakaram',
      passives: [
        "Can't lose Perfection. No damage increase from Rank.",
        '50% increased Base Attack damage.',
        'Base Attack gives 4 Perfection.'
      ]
    },
    fr: {
      name: 'Sakaram',
      passives: [
        "Can't lose Perfection. No damage increase from Rank.",
        '50% increased Base Attack damage.',
        'Base Attack gives 4 Perfection.'
      ]
    }
  },
  {
    id: 'seeram',
    characterIds: ['gustave', 'verso'],
    element: 'light',
    basePower: 3713,
    scaling: { vitality: 'C', agility: 'B' },
    en: {
      name: 'Seeram',
      passives: [
        "-1 to all Perfection gain but can't reach Rank S.",
        'Base Attack gives 4 Perfection.',
        '20% increased Light damage with Skills.'
      ]
    },
    es: {
      name: 'Seeram',
      passives: [
        "-1 to all Perfection gain but can't reach Rank S.",
        'Base Attack gives 4 Perfection.',
        '20% increased Light damage with Skills.'
      ]
    },
    fr: {
      name: 'Seeram',
      passives: [
        "-1 to all Perfection gain but can't reach Rank S.",
        'Base Attack gives 4 Perfection.',
        '20% increased Light damage with Skills.'
      ]
    }
  },
  {
    id: 'simoso',
    characterIds: ['gustave', 'verso'],
    element: 'light',
    basePower: 3228,
    scaling: { vitality: 'A', agility: 'S' },
    en: {
      name: 'Simoso',
      passives: [
        'An ethereal Sword deals Light damage on any damage dealt with Skills.',
        '20% chance to apply Burn on dealing Light damage.',
        "Can't die if at least Rank A."
      ]
    },
    es: {
      name: 'Simoso',
      passives: [
        'An ethereal Sword deals Light damage on any damage dealt with Skills.',
        '20% chance to apply Burn on dealing Light damage.',
        "Can't die if at least Rank A."
      ]
    },
    fr: {
      name: 'Simoso',
      passives: [
        'An ethereal Sword deals Light damage on any damage dealt with Skills.',
        '20% chance to apply Burn on dealing Light damage.',
        "Can't die if at least Rank A."
      ]
    }
  },
  {
    id: 'sireso',
    characterIds: ['gustave', 'verso'],
    element: 'physical',
    basePower: 2583,
    scaling: { vitality: 'A', agility: 'S' },
    en: {
      name: 'Sireso',
      passives: [
        'Bonus damage from Perfection applies to all allies at half value. Bonus damage no longer applies to Verso.',
        'Perfection gained is increased by 1 while Powerful',
        'Support Skills cost 1 less AP.'
      ]
    },
    es: {
      name: 'Sireso',
      passives: [
        'Bonus damage from Perfection applies to all allies at half value. Bonus damage no longer applies to Verso.',
        'Perfection gained is increased by 1 while Powerful',
        'Support Skills cost 1 less AP.'
      ]
    },
    fr: {
      name: 'Sireso',
      passives: [
        'Bonus damage from Perfection applies to all allies at half value. Bonus damage no longer applies to Verso.',
        'Perfection gained is increased by 1 while Powerful',
        'Support Skills cost 1 less AP.'
      ]
    }
  },
  {
    id: 'tireso',
    characterIds: ['gustave', 'verso'],
    element: 'earth',
    basePower: 3713,
    scaling: { vitality: 'S', defense: 'A' },
    en: {
      name: 'Tireso',
      passives: [
        'Gain 1 Rank on applying Mark.',
        'Mark an enemy on Base Attack.',
        'Apply Powerless on Marking an enemy.'
      ]
    },
    es: {
      name: 'Tireso',
      passives: [
        'Gain 1 Rank on applying Mark.',
        'Mark an enemy on Base Attack.',
        'Apply Powerless on Marking an enemy.'
      ]
    },
    fr: {
      name: 'Tireso',
      passives: [
        'Gain 1 Rank on applying Mark.',
        'Mark an enemy on Base Attack.',
        'Apply Powerless on Marking an enemy.'
      ]
    }
  },
  {
    id: 'verleso',
    characterIds: ['gustave', 'verso'],
    element: 'physical',
    basePower: 3454,
    scaling: { vitality: 'S' },
    en: { name: 'Verleso', passives: ['N/A', 'N/A', 'N/A'] },
    es: { name: 'Verleso', passives: ['N/A', 'N/A', 'N/A'] },
    fr: { name: 'Verleso', passives: ['N/A', 'N/A', 'N/A'] }
  },
  {
    id: 'sucreso',
    characterIds: ['gustave', 'verso'],
    element: 'earth',
    basePower: 3713,
    scaling: { vitality: 'B', defense: 'A' },
    en: {
      name: 'Sucreso',
      passives: [
        'Rank D on turn start.',
        'Ranks reduce damage taken by 20% per Rank, instead of increasing damage dealt.',
        '25% increased damage on Rank up. Resets on taking damage'
      ]
    },
    es: {
      name: 'Sucreso',
      passives: [
        'Rank D on turn start.',
        'Ranks reduce damage taken by 20% per Rank, instead of increasing damage dealt.',
        '25% increased damage on Rank up. Resets on taking damage'
      ]
    },
    fr: {
      name: 'Sucreso',
      passives: [
        'Rank D on turn start.',
        'Ranks reduce damage taken by 20% per Rank, instead of increasing damage dealt.',
        '25% increased damage on Rank up. Resets on taking damage'
      ]
    }
  }
];

const LUNE: Weapon[] = [
  {
    id: 'angerim',
    characterIds: ['lune'],
    element: 'fire',
    basePower: 3293,
    scaling: { defense: 'A', luck: 'S' },
    en: {
      name: 'Angerim',
      passives: [
        'Base Attack applies 2 Burn per Fire Stain.',
        'Generate one Fire Stain at the beginning of each turn.',
        '30% increased Burn damage per Fire Stain.'
      ]
    },
    es: {
      name: 'Angerim',
      passives: [
        'Base Attack applies 2 Burn per Fire Stain.',
        'Generate one Fire Stain at the beginning of each turn.',
        '30% increased Burn damage per Fire Stain.'
      ]
    },
    fr: {
      name: 'Angerim',
      passives: [
        'Base Attack applies 2 Burn per Fire Stain.',
        'Generate one Fire Stain at the beginning of each turn.',
        '30% increased Burn damage per Fire Stain.'
      ]
    }
  },
  {
    id: 'benisim',
    characterIds: ['lune'],
    element: 'earth',
    basePower: 2744,
    scaling: { vitality: 'S', defense: 'A' },
    en: {
      name: 'Benisim',
      passives: [
        'Healing Skills cost 1 less AP.',
        'Generate one Earth Stain at the beginning of each turn.',
        'Replay instantly on consuming Stains with a Healing Skill.'
      ]
    },
    es: {
      name: 'Benisim',
      passives: [
        'Healing Skills cost 1 less AP.',
        'Generate one Earth Stain at the beginning of each turn.',
        'Replay instantly on consuming Stains with a Healing Skill.'
      ]
    },
    fr: {
      name: 'Benisim',
      passives: [
        'Healing Skills cost 1 less AP.',
        'Generate one Earth Stain at the beginning of each turn.',
        'Replay instantly on consuming Stains with a Healing Skill.'
      ]
    }
  },
  {
    id: 'betelim',
    characterIds: ['lune'],
    element: 'earth',
    basePower: 3228,
    scaling: { vitality: 'A', agility: 'S' },
    en: {
      name: 'Betelim',
      passives: [
        'Using a Skill that consumes Stains increases damage by 20%. Can stack up to 5 times. Resets on using a Skill without consuming Stains.',
        'On turn start, if no Stains, 2 random Stains are generated.',
        '+l AP when Stains are consumed.'
      ]
    },
    es: {
      name: 'Betelim',
      passives: [
        'Using a Skill that consumes Stains increases damage by 20%. Can stack up to 5 times. Resets on using a Skill without consuming Stains.',
        'On turn start, if no Stains, 2 random Stains are generated.',
        '+l AP when Stains are consumed.'
      ]
    },
    fr: {
      name: 'Betelim',
      passives: [
        'Using a Skill that consumes Stains increases damage by 20%. Can stack up to 5 times. Resets on using a Skill without consuming Stains.',
        'On turn start, if no Stains, 2 random Stains are generated.',
        '+l AP when Stains are consumed.'
      ]
    }
  },
  {
    id: 'braselim',
    characterIds: ['lune'],
    element: 'fire',
    basePower: 3390,
    scaling: { vitality: 'A', luck: 'S' },
    en: {
      name: 'Braselim',
      passives: [
        '30% increased Critical Chance per Ice Stain.',
        '+5% of a Gradient Charge on Critical hit.',
        '20% increased Fire damage with Skills.'
      ]
    },
    es: {
      name: 'Braselim',
      passives: [
        '30% increased Critical Chance per Ice Stain.',
        '+5% of a Gradient Charge on Critical hit.',
        '20% increased Fire damage with Skills.'
      ]
    },
    fr: {
      name: 'Braselim',
      passives: [
        '30% increased Critical Chance per Ice Stain.',
        '+5% of a Gradient Charge on Critical hit.',
        '20% increased Fire damage with Skills.'
      ]
    }
  },
  {
    id: 'chapelim',
    characterIds: ['lune'],
    element: 'earth',
    basePower: 3164,
    scaling: { defense: 'A', agility: 'S' },
    en: {
      name: 'Chapelim',
      passives: [
        '30% increased Break damage per Earth Stain.',
        'Gain 9 AP on Breaking an enemy.',
        'Generate one Earth Stain at the beginning of each turn.'
      ]
    },
    es: {
      name: 'Chapelim',
      passives: [
        '30% increased Break damage per Earth Stain.',
        'Gain 9 AP on Breaking an enemy.',
        'Generate one Earth Stain at the beginning of each turn.'
      ]
    },
    fr: {
      name: 'Chapelim',
      passives: [
        '30% increased Break damage per Earth Stain.',
        'Gain 9 AP on Breaking an enemy.',
        'Generate one Earth Stain at the beginning of each turn.'
      ]
    }
  },
  {
    id: 'choralim',
    characterIds: ['lune'],
    element: 'fire',
    basePower: 3551,
    scaling: { defense: 'S', agility: 'A' },
    en: {
      name: 'Choralim',
      passives: [
        '100% Critical Chance when 4 Stans are simultaneously active.',
        '20% increased damage for each consecutive turn without taking damage. Can stack up to 5 times.',
        'Critical hits apply Burn.'
      ]
    },
    es: {
      name: 'Choralim',
      passives: [
        '100% Critical Chance when 4 Stans are simultaneously active.',
        '20% increased damage for each consecutive turn without taking damage. Can stack up to 5 times.',
        'Critical hits apply Burn.'
      ]
    },
    fr: {
      name: 'Choralim',
      passives: [
        '100% Critical Chance when 4 Stans are simultaneously active.',
        '20% increased damage for each consecutive turn without taking damage. Can stack up to 5 times.',
        'Critical hits apply Burn.'
      ]
    }
  },
  {
    id: 'colim',
    characterIds: ['lune'],
    element: 'light',
    basePower: 2583,
    scaling: { defense: 'S', agility: 'A' },
    en: {
      name: 'Colim',
      passives: [
        '50% chance to generate a Light Stain when consuming Stains.',
        '+1 AP on consuming a Light Stain.',
        '20% increased damage with Skills per active Light Stain.'
      ]
    },
    es: {
      name: 'Colim',
      passives: [
        '50% chance to generate a Light Stain when consuming Stains.',
        '+1 AP on consuming a Light Stain.',
        '20% increased damage with Skills per active Light Stain.'
      ]
    },
    fr: {
      name: 'Colim',
      passives: [
        '50% chance to generate a Light Stain when consuming Stains.',
        '+1 AP on consuming a Light Stain.',
        '20% increased damage with Skills per active Light Stain.'
      ]
    }
  },
  {
    id: 'coralim',
    characterIds: ['lune'],
    element: 'ice',
    basePower: 2744,
    scaling: { vitality: 'A', defense: 'S' },
    en: {
      name: 'Coralim',
      passives: [
        'Ice Skills cost 1 less AP.',
        '20% increased Ice damage with Skills.',
        'Start battle with 1 Earth Stain.'
      ]
    },
    es: {
      name: 'Coralim',
      passives: [
        'Ice Skills cost 1 less AP.',
        '20% increased Ice damage with Skills.',
        'Start battle with 1 Earth Stain.'
      ]
    },
    fr: {
      name: 'Coralim',
      passives: [
        'Ice Skills cost 1 less AP.',
        '20% increased Ice damage with Skills.',
        'Start battle with 1 Earth Stain.'
      ]
    }
  },
  {
    id: 'deminerim',
    characterIds: ['lune'],
    element: 'lightning',
    basePower: 2744,
    scaling: { agility: 'A', luck: 'S' },
    en: {
      name: 'Deminerim',
      passives: [
        'Lightning Skills cost 1 less AP.',
        '20% increased Lightning damage with Skills.',
        'Start battle with 1 Fire Stain.'
      ]
    },
    es: {
      name: 'Deminerim',
      passives: [
        'Lightning Skills cost 1 less AP.',
        '20% increased Lightning damage with Skills.',
        'Start battle with 1 Fire Stain.'
      ]
    },
    fr: {
      name: 'Deminerim',
      passives: [
        'Lightning Skills cost 1 less AP.',
        '20% increased Lightning damage with Skills.',
        'Start battle with 1 Fire Stain.'
      ]
    }
  },
  {
    id: 'elerim',
    characterIds: ['lune'],
    element: 'earth',
    basePower: 3551,
    scaling: { vitality: 'S', defense: 'A' },
    en: {
      name: 'Elerim',
      passives: [
        'Consuming an Earth Stain applies 1 Shield to self.',
        '20% increased Earth damage with Skills.',
        'Base Attack generates an Earth Stain.'
      ]
    },
    es: {
      name: 'Elerim',
      passives: [
        'Consuming an Earth Stain applies 1 Shield to self.',
        '20% increased Earth damage with Skills.',
        'Base Attack generates an Earth Stain.'
      ]
    },
    fr: {
      name: 'Elerim',
      passives: [
        'Consuming an Earth Stain applies 1 Shield to self.',
        '20% increased Earth damage with Skills.',
        'Base Attack generates an Earth Stain.'
      ]
    }
  },
  {
    id: 'kralim',
    characterIds: ['lune'],
    element: 'lightning',
    basePower: 3390,
    scaling: { vitality: 'A', agility: 'S' },
    en: {
      name: 'Kralim',
      passives: [
        'Casting a Skill increases the Skill damage of all other elements by 20%. Resets when casting a Skill of a previous element.',
        'On turn start, if no Stains, 2 random Stains are generated.',
        '+1 AP when Stains are consumed.'
      ]
    },
    es: {
      name: 'Kralim',
      passives: [
        'Casting a Skill increases the Skill damage of all other elements by 20%. Resets when casting a Skill of a previous element.',
        'On turn start, if no Stains, 2 random Stains are generated.',
        '+1 AP when Stains are consumed.'
      ]
    },
    fr: {
      name: 'Kralim',
      passives: [
        'Casting a Skill increases the Skill damage of all other elements by 20%. Resets when casting a Skill of a previous element.',
        'On turn start, if no Stains, 2 random Stains are generated.',
        '+1 AP when Stains are consumed.'
      ]
    }
  },
  {
    id: 'lighterim',
    characterIds: ['lune'],
    element: 'fire',
    basePower: 2744,
    scaling: { defense: 'A', agility: 'S' },
    en: {
      name: 'Lighterim',
      passives: [
        'Fire Skills cost 1 less AP.',
        '20% increased Fire damage with Skills.',
        'Start battle with 1 Ice Stain.'
      ]
    },
    es: {
      name: 'Lighterim',
      passives: [
        'Fire Skills cost 1 less AP.',
        '20% increased Fire damage with Skills.',
        'Start battle with 1 Ice Stain.'
      ]
    },
    fr: {
      name: 'Lighterim',
      passives: [
        'Fire Skills cost 1 less AP.',
        '20% increased Fire damage with Skills.',
        'Start battle with 1 Ice Stain.'
      ]
    }
  },
  {
    id: 'lithelim',
    characterIds: ['lune'],
    element: 'void',
    basePower: 3099,
    scaling: { vitality: 'S' },
    en: {
      name: 'Lithelim',
      passives: [
        '5% chance to generate a Dark Stain when consuming Stains. Deal 50% more damage with Skills per active Dark Stain.',
        '+1 AP on consuming a Light Stain.',
        'Base Attacks can consume one Dark Stain to deal 200% more damage.'
      ]
    },
    es: {
      name: 'Lithelim',
      passives: [
        '5% chance to generate a Dark Stain when consuming Stains. Deal 50% more damage with Skills per active Dark Stain.',
        '+1 AP on consuming a Light Stain.',
        'Base Attacks can consume one Dark Stain to deal 200% more damage.'
      ]
    },
    fr: {
      name: 'Lithelim',
      passives: [
        '5% chance to generate a Dark Stain when consuming Stains. Deal 50% more damage with Skills per active Dark Stain.',
        '+1 AP on consuming a Light Stain.',
        'Base Attacks can consume one Dark Stain to deal 200% more damage.'
      ]
    }
  },
  {
    id: 'lunerim',
    characterIds: ['lune'],
    element: 'fire',
    basePower: 2421,
    scaling: { vitality: 'A', luck: 'S' },
    en: { name: 'Lunerim', passives: ['N/A', 'N/A', 'N/A'] },
    es: { name: 'Lunerim', passives: ['N/A', 'N/A', 'N/A'] },
    fr: { name: 'Lunerim', passives: ['N/A', 'N/A', 'N/A'] }
  },
  {
    id: 'painerim',
    characterIds: ['lune'],
    element: 'earth',
    basePower: 2744,
    scaling: { vitality: 'A', luck: 'S' },
    en: {
      name: 'Painerim',
      passives: [
        'Earth Skills cost 1 less AP.',
        '20% increased Earth damage with Skills.',
        'Start battle with 1 Lightning Stain.'
      ]
    },
    es: {
      name: 'Painerim',
      passives: [
        'Earth Skills cost 1 less AP.',
        '20% increased Earth damage with Skills.',
        'Start battle with 1 Lightning Stain.'
      ]
    },
    fr: {
      name: 'Painerim',
      passives: [
        'Earth Skills cost 1 less AP.',
        '20% increased Earth damage with Skills.',
        'Start battle with 1 Lightning Stain.'
      ]
    }
  },
  {
    id: 'potierim',
    characterIds: ['lune'],
    element: 'ice',
    basePower: 2906,
    scaling: { defense: 'A', agility: 'S' },
    en: {
      name: 'Potierim',
      passives: [
        'Healing Skills generate one additional 1 Light stain.',
        'Consuming a Light Stain applies Slow to a random enemy.',
        'Base Attack generates a Light Stain.'
      ]
    },
    es: {
      name: 'Potierim',
      passives: [
        'Healing Skills generate one additional 1 Light stain.',
        'Consuming a Light Stain applies Slow to a random enemy.',
        'Base Attack generates a Light Stain.'
      ]
    },
    fr: {
      name: 'Potierim',
      passives: [
        'Healing Skills generate one additional 1 Light stain.',
        'Consuming a Light Stain applies Slow to a random enemy.',
        'Base Attack generates a Light Stain.'
      ]
    }
  },
  {
    id: 'redalim',
    characterIds: ['lune'],
    element: 'ice',
    basePower: 2583,
    scaling: { defense: 'S', agility: 'A' },
    en: {
      name: 'Redalim',
      passives: [
        'Healing Skills generate one additional Light stain.',
        'Generate one Ice Stain at the beginning of each turn.',
        'Replay instantly on consuming Stains with a Healing Skill.'
      ]
    },
    es: {
      name: 'Redalim',
      passives: [
        'Healing Skills generate one additional Light stain.',
        'Generate one Ice Stain at the beginning of each turn.',
        'Replay instantly on consuming Stains with a Healing Skill.'
      ]
    },
    fr: {
      name: 'Redalim',
      passives: [
        'Healing Skills generate one additional Light stain.',
        'Generate one Ice Stain at the beginning of each turn.',
        'Replay instantly on consuming Stains with a Healing Skill.'
      ]
    }
  },
  {
    id: 'saperim',
    characterIds: ['lune'],
    element: 'lightning',
    basePower: 3067,
    scaling: { defense: 'S', luck: 'A' },
    en: {
      name: 'Saperim',
      passives: [
        'Using a Gradient Attack generates 1 additional Light Stain.',
        'When a Fire Stain is generated, a Lightning Stain is also generated. Once per turn.',
        'Gradient Attacks and Gradient Counters deal 50% more damage.'
      ]
    },
    es: {
      name: 'Saperim',
      passives: [
        'Using a Gradient Attack generates 1 additional Light Stain.',
        'When a Fire Stain is generated, a Lightning Stain is also generated. Once per turn.',
        'Gradient Attacks and Gradient Counters deal 50% more damage.'
      ]
    },
    fr: {
      name: 'Saperim',
      passives: [
        'Using a Gradient Attack generates 1 additional Light Stain.',
        'When a Fire Stain is generated, a Lightning Stain is also generated. Once per turn.',
        'Gradient Attacks and Gradient Counters deal 50% more damage.'
      ]
    }
  },
  {
    id: 'scaverim',
    characterIds: ['lune'],
    element: 'dark',
    basePower: 4197,
    scaling: { vitality: 'S', agility: 'A' },
    en: {
      name: 'Scaverim',
      passives: [
        '50% chance to generate a Dark Stain when consuming Stains. Deal 50% more damage with Skills per active Dark Stain.',
        'Base Attacks can consume one Dark Stain to deal 200% more damage.',
        'With 4 active Dark Stains, any Skill can consume them to deal 300% more damage.'
      ]
    },
    es: {
      name: 'Scaverim',
      passives: [
        '50% chance to generate a Dark Stain when consuming Stains. Deal 50% more damage with Skills per active Dark Stain.',
        'Base Attacks can consume one Dark Stain to deal 200% more damage.',
        'With 4 active Dark Stains, any Skill can consume them to deal 300% more damage.'
      ]
    },
    fr: {
      name: 'Scaverim',
      passives: [
        '50% chance to generate a Dark Stain when consuming Stains. Deal 50% more damage with Skills per active Dark Stain.',
        'Base Attacks can consume one Dark Stain to deal 200% more damage.',
        'With 4 active Dark Stains, any Skill can consume them to deal 300% more damage.'
      ]
    }
  },
  {
    id: 'snowim',
    characterIds: ['lune'],
    element: 'ice',
    basePower: 3874,
    scaling: { vitality: 'A', agility: 'S' },
    en: {
      name: 'Snowim',
      passives: [
        'Freeze self when falling below 30% health. Prevent the next instance of damage while Frozen.',
        'On turn start, if Frozen, remove Freeze and recover 60% Health.',
        'Gain 2 Ice Stains and 3 AP when Frozen.'
      ]
    },
    es: {
      name: 'Snowim',
      passives: [
        'Freeze self when falling below 30% health. Prevent the next instance of damage while Frozen.',
        'On turn start, if Frozen, remove Freeze and recover 60% Health.',
        'Gain 2 Ice Stains and 3 AP when Frozen.'
      ]
    },
    fr: {
      name: 'Snowim',
      passives: [
        'Freeze self when falling below 30% health. Prevent the next instance of damage while Frozen.',
        'On turn start, if Frozen, remove Freeze and recover 60% Health.',
        'Gain 2 Ice Stains and 3 AP when Frozen.'
      ]
    }
  },
  {
    id: 'trebuchim',
    characterIds: ['lune'],
    element: 'lightning',
    basePower: 3067,
    scaling: { vitality: 'S', luck: 'A' },
    en: {
      name: 'Trebuchim',
      passives: [
        'Generate a random Stain on Free Aim shot.',
        '+1 AP when Stains are consumed.',
        'Base Attack generates 2 random Stains.'
      ]
    },
    es: {
      name: 'Trebuchim',
      passives: [
        'Generate a random Stain on Free Aim shot.',
        '+1 AP when Stains are consumed.',
        'Base Attack generates 2 random Stains.'
      ]
    },
    fr: {
      name: 'Trebuchim',
      passives: [
        'Generate a random Stain on Free Aim shot.',
        '+1 AP when Stains are consumed.',
        'Base Attack generates 2 random Stains.'
      ]
    }
  },
  {
    id: 'troubadim',
    characterIds: ['lune'],
    element: 'physical',
    basePower: 3067,
    scaling: { vitality: 'A', defense: 'S' },
    en: {
      name: 'Troubadim',
      passives: [
        'Free Aim Shots deal damage to an additional random target.',
        '50% increased Free Aim damage.',
        'Generate a random Stain on Free Aim shot.'
      ]
    },
    es: {
      name: 'Troubadim',
      passives: [
        'Free Aim Shots deal damage to an additional random target.',
        '50% increased Free Aim damage.',
        'Generate a random Stain on Free Aim shot.'
      ]
    },
    fr: {
      name: 'Troubadim',
      passives: [
        'Free Aim Shots deal damage to an additional random target.',
        '50% increased Free Aim damage.',
        'Generate a random Stain on Free Aim shot.'
      ]
    }
  },
  {
    id: 'bonbim',
    characterIds: ['lune'],
    element: 'lightning',
    basePower: 3810,
    scaling: { vitality: 'S', defense: 'A' },
    en: {
      name: 'Bonbim',
      passives: [
        '+5% Critical chance per Burn on the target.',
        'Critical hits apply Burn.',
        'Lightning Skills consume up to 100 Burn to deal 2% more damage per Burn consumed.'
      ]
    },
    es: {
      name: 'Bonbim',
      passives: [
        '+5% Critical chance per Burn on the target.',
        'Critical hits apply Burn.',
        'Lightning Skills consume up to 100 Burn to deal 2% more damage per Burn consumed.'
      ]
    },
    fr: {
      name: 'Bonbim',
      passives: [
        '+5% Critical chance per Burn on the target.',
        'Critical hits apply Burn.',
        'Lightning Skills consume up to 100 Burn to deal 2% more damage per Burn consumed.'
      ]
    }
  },
  {
    id: 'cleim',
    characterIds: ['lune'],
    element: 'light',
    basePower: 3551,
    scaling: { agility: 'A', luck: 'S' },
    en: {
      name: 'Cleim',
      passives: [
        "Damage can't be reduced, blocked, or absorbed by Elemental Affinities.",
        'An ethereal Sword deals Light damage on any damage dealt with Skills.',
        'Starting a turn with 1 Earth, 1 Fire, 1 Ice, and 1 Lightning Stain doubles damage dealt this turn'
      ]
    },
    es: {
      name: 'Cleim',
      passives: [
        "Damage can't be reduced, blocked, or absorbed by Elemental Affinities.",
        'An ethereal Sword deals Light damage on any damage dealt with Skills.',
        'Starting a turn with 1 Earth, 1 Fire, 1 Ice, and 1 Lightning Stain doubles damage dealt this turn'
      ]
    },
    fr: {
      name: 'Cleim',
      passives: [
        "Damage can't be reduced, blocked, or absorbed by Elemental Affinities.",
        'An ethereal Sword deals Light damage on any damage dealt with Skills.',
        'Starting a turn with 1 Earth, 1 Fire, 1 Ice, and 1 Lightning Stain doubles damage dealt this turn'
      ]
    }
  },
  {
    id: 'esquim',
    characterIds: ['lune'],
    element: 'dark',
    basePower: 3616,
    scaling: { defense: 'B', agility: 'A' },
    en: {
      name: 'Esquim',
      passives: [
        "Using a Skill that doesn't consume Stains increases damage by 20%. Resets on using a Skill that consumes Stains",
        'Base attack changes all current Stains into Dark Stains.',
        'With 4 active Dark Stains, any Skill can consume them to deal 300% more damage.'
      ]
    },
    es: {
      name: 'Esquim',
      passives: [
        "Using a Skill that doesn't consume Stains increases damage by 20%. Resets on using a Skill that consumes Stains",
        'Base attack changes all current Stains into Dark Stains.',
        'With 4 active Dark Stains, any Skill can consume them to deal 300% more damage.'
      ]
    },
    fr: {
      name: 'Esquim',
      passives: [
        "Using a Skill that doesn't consume Stains increases damage by 20%. Resets on using a Skill that consumes Stains",
        'Base attack changes all current Stains into Dark Stains.',
        'With 4 active Dark Stains, any Skill can consume them to deal 300% more damage.'
      ]
    }
  }
];

const MAELLE: Weapon[] = [
  {
    id: 'barrier-breaker',
    characterIds: ['maelle'],
    element: 'void',
    basePower: 3616,
    scaling: { defense: 'S', agility: 'A' },
    en: {
      name: 'Barrier Breaker',
      passives: [
        'Steal Shields removed by hitting enemies.',
        'Switch to Virtuose Stance on breaking any Shield.',
        'Hitting a Marked enemy breaks all its Shields.'
      ]
    },
    es: {
      name: 'Barrier Breaker',
      passives: [
        'Steal Shields removed by hitting enemies.',
        'Switch to Virtuose Stance on breaking any Shield.',
        'Hitting a Marked enemy breaks all its Shields.'
      ]
    },
    fr: {
      name: 'Barrier Breaker',
      passives: [
        'Steal Shields removed by hitting enemies.',
        'Switch to Virtuose Stance on breaking any Shield.',
        'Hitting a Marked enemy breaks all its Shields.'
      ]
    }
  },
  {
    id: 'battlum',
    characterIds: ['maelle'],
    element: 'physical',
    basePower: 3067,
    scaling: { defense: 'S', luck: 'A' },
    en: {
      name: 'Battlum',
      passives: [
        'Double Gradient generation while in Defensive Stance.',
        'lf Stanceless, Base Attack switches to Defensive Stance.',
        '+5% of a Gradient Charge on Parry.'
      ]
    },
    es: {
      name: 'Battlum',
      passives: [
        'Double Gradient generation while in Defensive Stance.',
        'lf Stanceless, Base Attack switches to Defensive Stance.',
        '+5% of a Gradient Charge on Parry.'
      ]
    },
    fr: {
      name: 'Battlum',
      passives: [
        'Double Gradient generation while in Defensive Stance.',
        'lf Stanceless, Base Attack switches to Defensive Stance.',
        '+5% of a Gradient Charge on Parry.'
      ]
    }
  },
  {
    id: 'brulerum',
    characterIds: ['maelle'],
    element: 'fire',
    basePower: 2744,
    scaling: { agility: 'A', luck: 'S' },
    en: {
      name: 'Brulerum',
      passives: ['Critical hits apply Burn.', 'Base Attack applies 2 Burn.', '100% Critical Chance while Stanceless.']
    },
    es: {
      name: 'Brulerum',
      passives: ['Critical hits apply Burn.', 'Base Attack applies 2 Burn.', '100% Critical Chance while Stanceless.']
    },
    fr: {
      name: 'Brulerum',
      passives: ['Critical hits apply Burn.', 'Base Attack applies 2 Burn.', '100% Critical Chance while Stanceless.']
    }
  },
  {
    id: 'chalium',
    characterIds: ['maelle'],
    element: 'light',
    basePower: 3422,
    scaling: { vitality: 'A', agility: 'S' },
    en: {
      name: 'Chalium',
      passives: [
        'On Defensive Stance, gain 1 Shield per Parry. Lose all Shields on turn start.',
        '20% increased Light damage with Skills.',
        '50% increased Counter damage per Shield.'
      ]
    },
    es: {
      name: 'Chalium',
      passives: [
        'On Defensive Stance, gain 1 Shield per Parry. Lose all Shields on turn start.',
        '20% increased Light damage with Skills.',
        '50% increased Counter damage per Shield.'
      ]
    },
    fr: {
      name: 'Chalium',
      passives: [
        'On Defensive Stance, gain 1 Shield per Parry. Lose all Shields on turn start.',
        '20% increased Light damage with Skills.',
        '50% increased Counter damage per Shield.'
      ]
    }
  },
  {
    id: 'chantenum',
    characterIds: ['maelle'],
    element: 'fire',
    basePower: 2841,
    scaling: { agility: 'A', luck: 'S' },
    en: {
      name: 'Chantenum',
      passives: [
        'On turn start, if Stanceless, switch to Offensive Stance.',
        'Fire Skills cost 1 less AP.',
        '+1 Shield on switching to Offensive Stance.'
      ]
    },
    es: {
      name: 'Chantenum',
      passives: [
        'On turn start, if Stanceless, switch to Offensive Stance.',
        'Fire Skills cost 1 less AP.',
        '+1 Shield on switching to Offensive Stance.'
      ]
    },
    fr: {
      name: 'Chantenum',
      passives: [
        'On turn start, if Stanceless, switch to Offensive Stance.',
        'Fire Skills cost 1 less AP.',
        '+1 Shield on switching to Offensive Stance.'
      ]
    }
  },
  {
    id: 'clierum',
    characterIds: ['maelle'],
    element: 'lightning',
    basePower: 3196,
    scaling: { defense: 'A', agility: 'S' },
    en: {
      name: 'Clierum',
      passives: [
        'Critical hits with Skills give 2 AP. Once per turn.',
        '20% increased Lightning damage with Skills.',
        '+50% Critical Chance while in Offensive Stance.'
      ]
    },
    es: {
      name: 'Clierum',
      passives: [
        'Critical hits with Skills give 2 AP. Once per turn.',
        '20% increased Lightning damage with Skills.',
        '+50% Critical Chance while in Offensive Stance.'
      ]
    },
    fr: {
      name: 'Clierum',
      passives: [
        'Critical hits with Skills give 2 AP. Once per turn.',
        '20% increased Lightning damage with Skills.',
        '+50% Critical Chance while in Offensive Stance.'
      ]
    }
  },
  {
    id: 'coldum',
    characterIds: ['maelle'],
    element: 'ice',
    basePower: 2583,
    scaling: { vitality: 'S', defense: 'A' },
    en: {
      name: 'Coldum',
      passives: [
        'Self-Heal by 2% Health on dealing a Critical hit.',
        '+50% Critical Chance while in Defensive Stance.',
        'If Stanceless, Base Attack switches to Defensive Stance.'
      ]
    },
    es: {
      name: 'Coldum',
      passives: [
        'Self-Heal by 2% Health on dealing a Critical hit.',
        '+50% Critical Chance while in Defensive Stance.',
        'If Stanceless, Base Attack switches to Defensive Stance.'
      ]
    },
    fr: {
      name: 'Coldum',
      passives: [
        'Self-Heal by 2% Health on dealing a Critical hit.',
        '+50% Critical Chance while in Defensive Stance.',
        'If Stanceless, Base Attack switches to Defensive Stance.'
      ]
    }
  },
  {
    id: 'duenum',
    characterIds: ['maelle'],
    element: 'physical',
    basePower: 2421,
    scaling: { defense: 'S', agility: 'A' },
    en: {
      name: 'Duenum',
      passives: [
        'In Defensive Stance, gaining AP also gives 1 AP to allies.',
        'If Stanceless, Base Attack switches to Defensive Stance.',
        '+1 AP on Stance switch.'
      ]
    },
    es: {
      name: 'Duenum',
      passives: [
        'In Defensive Stance, gaining AP also gives 1 AP to allies.',
        'If Stanceless, Base Attack switches to Defensive Stance.',
        '+1 AP on Stance switch.'
      ]
    },
    fr: {
      name: 'Duenum',
      passives: [
        'In Defensive Stance, gaining AP also gives 1 AP to allies.',
        'If Stanceless, Base Attack switches to Defensive Stance.',
        '+1 AP on Stance switch.'
      ]
    }
  },
  {
    id: 'facesum',
    characterIds: ['maelle'],
    element: 'physical',
    basePower: 3519,
    scaling: { vitality: 'A', luck: 'S' },
    en: {
      name: 'Facesum',
      passives: [
        'In Offensive Stance, double the amount of Burn applied.',
        '50% increased Burn damage.',
        'Base Attack propagates Burn.'
      ]
    },
    es: {
      name: 'Facesum',
      passives: [
        'In Offensive Stance, double the amount of Burn applied.',
        '50% increased Burn damage.',
        'Base Attack propagates Burn.'
      ]
    },
    fr: {
      name: 'Facesum',
      passives: [
        'In Offensive Stance, double the amount of Burn applied.',
        '50% increased Burn damage.',
        'Base Attack propagates Burn.'
      ]
    }
  },
  {
    id: 'glaisum',
    characterIds: ['maelle'],
    element: 'physical',
    basePower: 3713,
    scaling: { defense: 'S', agility: 'A' },
    en: {
      name: 'Glaisum',
      passives: [
        'Allies recover 20% Health on switching to Virtuose Stance.',
        'Gain Shell when switching out of Virtuose Stance.',
        'Cleanse self Status Effects when switching to Virtuose Stance.'
      ]
    },
    es: {
      name: 'Glaisum',
      passives: [
        'Allies recover 20% Health on switching to Virtuose Stance.',
        'Gain Shell when switching out of Virtuose Stance.',
        'Cleanse self Status Effects when switching to Virtuose Stance.'
      ]
    },
    fr: {
      name: 'Glaisum',
      passives: [
        'Allies recover 20% Health on switching to Virtuose Stance.',
        'Gain Shell when switching out of Virtuose Stance.',
        'Cleanse self Status Effects when switching to Virtuose Stance.'
      ]
    }
  },
  {
    id: 'jarum',
    characterIds: ['maelle'],
    element: 'physical',
    basePower: 2583,
    scaling: { defense: 'S', luck: 'A' },
    en: {
      name: 'Jarum',
      passives: [
        'Switch to Virtuose Stance on Counterattack.',
        'Apply 5 Burn on Counterattack.',
        '50% increased Counter damage per Shield.'
      ]
    },
    es: {
      name: 'Jarum',
      passives: [
        'Switch to Virtuose Stance on Counterattack.',
        'Apply 5 Burn on Counterattack.',
        '50% increased Counter damage per Shield.'
      ]
    },
    fr: {
      name: 'Jarum',
      passives: [
        'Switch to Virtuose Stance on Counterattack.',
        'Apply 5 Burn on Counterattack.',
        '50% increased Counter damage per Shield.'
      ]
    }
  },
  {
    id: 'lithum',
    characterIds: ['maelle'],
    element: 'void',
    basePower: 3228,
    scaling: { agility: 'A', luck: 'S' },
    en: {
      name: 'Lithum',
      passives: [
        "In Virtuose Stance, hitting a Marked enemy doesn't remove Mark.",
        'Switch to Virtuose Stance on Counterattack.',
        'Gain Shell when switching out of Virtuose Stance.'
      ]
    },
    es: {
      name: 'Lithum',
      passives: [
        "In Virtuose Stance, hitting a Marked enemy doesn't remove Mark.",
        'Switch to Virtuose Stance on Counterattack.',
        'Gain Shell when switching out of Virtuose Stance.'
      ]
    },
    fr: {
      name: 'Lithum',
      passives: [
        "In Virtuose Stance, hitting a Marked enemy doesn't remove Mark.",
        'Switch to Virtuose Stance on Counterattack.',
        'Gain Shell when switching out of Virtuose Stance.'
      ]
    }
  },
  {
    id: 'maellum',
    characterIds: ['maelle'],
    element: 'physical',
    basePower: 3228,
    scaling: { vitality: 'S' },
    en: { name: 'Maellum', passives: ['N/A', 'N/A', 'N/A'] },
    es: { name: 'Maellum', passives: ['N/A', 'N/A', 'N/A'] },
    fr: { name: 'Maellum', passives: ['N/A', 'N/A', 'N/A'] }
  },
  {
    id: 'medalum',
    characterIds: ['maelle'],
    element: 'physical',
    basePower: 2906,
    scaling: { defense: 'S', agility: 'A' },
    en: {
      name: 'Medalum',
      passives: [
        'Start in Virtuose Stance.',
        'In Virtuose Stance, every Burn applied is doubled.',
        'In Virtuose Stance, Burn deals double damage.'
      ]
    },
    es: {
      name: 'Medalum',
      passives: [
        'Start in Virtuose Stance.',
        'In Virtuose Stance, every Burn applied is doubled.',
        'In Virtuose Stance, Burn deals double damage.'
      ]
    },
    fr: {
      name: 'Medalum',
      passives: [
        'Start in Virtuose Stance.',
        'In Virtuose Stance, every Burn applied is doubled.',
        'In Virtuose Stance, Burn deals double damage.'
      ]
    }
  },
  {
    id: 'melarum',
    characterIds: ['maelle'],
    element: 'physical',
    basePower: 3584,
    scaling: { vitality: 'S', luck: 'A' },
    en: {
      name: 'Melarum',
      passives: [
        'Allies recover 20% Health on switching to Virtuose Stance.',
        'Applies Shell when Health is above 80%.',
        'Switch to Virtuose Stance when Health falls below 50%.'
      ]
    },
    es: {
      name: 'Melarum',
      passives: [
        'Allies recover 20% Health on switching to Virtuose Stance.',
        'Applies Shell when Health is above 80%.',
        'Switch to Virtuose Stance when Health falls below 50%.'
      ]
    },
    fr: {
      name: 'Melarum',
      passives: [
        'Allies recover 20% Health on switching to Virtuose Stance.',
        'Applies Shell when Health is above 80%.',
        'Switch to Virtuose Stance when Health falls below 50%.'
      ]
    }
  },
  {
    id: 'plenum',
    characterIds: ['maelle'],
    element: 'ice',
    basePower: 3035,
    scaling: { defense: 'A', luck: 'S' },
    en: {
      name: 'Plenum',
      passives: [
        'On turn start, if Stanceless, switch to Defensive Stance.',
        'In Defensive Stance, double Break damage.',
        'Support Skills cost 1 less AP.'
      ]
    },
    es: {
      name: 'Plenum',
      passives: [
        'On turn start, if Stanceless, switch to Defensive Stance.',
        'In Defensive Stance, double Break damage.',
        'Support Skills cost 1 less AP.'
      ]
    },
    fr: {
      name: 'Plenum',
      passives: [
        'On turn start, if Stanceless, switch to Defensive Stance.',
        'In Defensive Stance, double Break damage.',
        'Support Skills cost 1 less AP.'
      ]
    }
  },
  {
    id: 'seashelum',
    characterIds: ['maelle'],
    element: 'fire',
    basePower: 3003,
    scaling: { defense: 'A', agility: 'S' },
    en: {
      name: 'Seashelum',
      passives: [
        '+1 Shield on switching to Offesnive Stance.',
        'If Stanceless, Base Attack switches to Offensive Stance.',
        '+50% Critical Chance while in Offensive Stance.'
      ]
    },
    es: {
      name: 'Seashelum',
      passives: [
        '+1 Shield on switching to Offesnive Stance.',
        'If Stanceless, Base Attack switches to Offensive Stance.',
        '+50% Critical Chance while in Offensive Stance.'
      ]
    },
    fr: {
      name: 'Seashelum',
      passives: [
        '+1 Shield on switching to Offesnive Stance.',
        'If Stanceless, Base Attack switches to Offensive Stance.',
        '+50% Critical Chance while in Offensive Stance.'
      ]
    }
  },
  {
    id: 'sekarum',
    characterIds: ['maelle'],
    element: 'physical',
    basePower: 3390,
    scaling: { vitality: 'S', agility: 'A' },
    en: {
      name: 'Sekarum',
      passives: [
        'Switch to Virtuose Stance on breaking any Shield.',
        'Free Aim shots break 2 shields.',
        'In Virtuose Stance, all damage pierce Shields.'
      ]
    },
    es: {
      name: 'Sekarum',
      passives: [
        'Switch to Virtuose Stance on breaking any Shield.',
        'Free Aim shots break 2 shields.',
        'In Virtuose Stance, all damage pierce Shields.'
      ]
    },
    fr: {
      name: 'Sekarum',
      passives: [
        'Switch to Virtuose Stance on breaking any Shield.',
        'Free Aim shots break 2 shields.',
        'In Virtuose Stance, all damage pierce Shields.'
      ]
    }
  },
  {
    id: 'stalum',
    characterIds: ['maelle'],
    element: 'fire',
    basePower: 3228,
    scaling: { defense: 'S', luck: 'A' },
    en: {
      name: 'Stalum',
      passives: [
        'Apply Burn on self on turn start. 10% increased damage for each self Burn stack.',
        'Base Attack applies 2 Burn.',
        'While in Defensive Stance, receive Heal instead of Burn damage.'
      ]
    },
    es: {
      name: 'Stalum',
      passives: [
        'Apply Burn on self on turn start. 10% increased damage for each self Burn stack.',
        'Base Attack applies 2 Burn.',
        'While in Defensive Stance, receive Heal instead of Burn damage.'
      ]
    },
    fr: {
      name: 'Stalum',
      passives: [
        'Apply Burn on self on turn start. 10% increased damage for each self Burn stack.',
        'Base Attack applies 2 Burn.',
        'While in Defensive Stance, receive Heal instead of Burn damage.'
      ]
    }
  },
  {
    id: 'tissenum',
    characterIds: ['maelle'],
    element: 'earth',
    basePower: 3874,
    scaling: { vitality: 'A', agility: 'S' },
    en: {
      name: 'Tissenum',
      passives: [
        'In Defensive Stance, double Break damage.',
        'Gain 9 AP on Breaking an enemy.',
        'Breaking an enemy deals 3 high amount of Earth damage.'
      ]
    },
    es: {
      name: 'Tissenum',
      passives: [
        'In Defensive Stance, double Break damage.',
        'Gain 9 AP on Breaking an enemy.',
        'Breaking an enemy deals 3 high amount of Earth damage.'
      ]
    },
    fr: {
      name: 'Tissenum',
      passives: [
        'In Defensive Stance, double Break damage.',
        'Gain 9 AP on Breaking an enemy.',
        'Breaking an enemy deals 3 high amount of Earth damage.'
      ]
    }
  },
  {
    id: 'veremum',
    characterIds: ['maelle'],
    element: 'physical',
    basePower: 3293,
    scaling: { vitality: 'A', luck: 'S' },
    en: {
      name: 'Veremum',
      passives: [
        'If Stanceless, Base Attack switches to Offensive Stance.',
        'Counterattacks apply Defenceless.',
        '+50% Critical Chance while in Offensive Stance.'
      ]
    },
    es: {
      name: 'Veremum',
      passives: [
        'If Stanceless, Base Attack switches to Offensive Stance.',
        'Counterattacks apply Defenceless.',
        '+50% Critical Chance while in Offensive Stance.'
      ]
    },
    fr: {
      name: 'Veremum',
      passives: [
        'If Stanceless, Base Attack switches to Offensive Stance.',
        'Counterattacks apply Defenceless.',
        '+50% Critical Chance while in Offensive Stance.'
      ]
    }
  },
  {
    id: 'volesterum',
    characterIds: ['maelle'],
    element: 'physical',
    basePower: 3293,
    scaling: { vitality: 'A', agility: 'S' },
    en: {
      name: 'Volesterum',
      passives: [
        '+1 AP on Stance switch.',
        'If Stanceless, Bast Attack switches to Defensive Stance.',
        'Recover 5% Health on Stance switch.'
      ]
    },
    es: {
      name: 'Volesterum',
      passives: [
        '+1 AP on Stance switch.',
        'If Stanceless, Bast Attack switches to Defensive Stance.',
        'Recover 5% Health on Stance switch.'
      ]
    },
    fr: {
      name: 'Volesterum',
      passives: [
        '+1 AP on Stance switch.',
        'If Stanceless, Bast Attack switches to Defensive Stance.',
        'Recover 5% Health on Stance switch.'
      ]
    }
  },
  {
    id: 'yeverum',
    characterIds: ['maelle'],
    element: 'physical',
    basePower: 3358,
    scaling: { defense: 'S', agility: 'A' },
    en: {
      name: 'Yeverum',
      passives: [
        'Applying Shell also applies 1 Shield.',
        'On applying Shields, also give 1 AP.',
        'On switching to Virtuose Stance, double all Shields on allies.'
      ]
    },
    es: {
      name: 'Yeverum',
      passives: [
        'Applying Shell also applies 1 Shield.',
        'On applying Shields, also give 1 AP.',
        'On switching to Virtuose Stance, double all Shields on allies.'
      ]
    },
    fr: {
      name: 'Yeverum',
      passives: [
        'Applying Shell also applies 1 Shield.',
        'On applying Shields, also give 1 AP.',
        'On switching to Virtuose Stance, double all Shields on allies.'
      ]
    }
  },
  {
    id: 'esqium',
    characterIds: ['maelle'],
    element: 'fire',
    basePower: 3680,
    scaling: { defense: 'B', agility: 'A' },
    en: {
      name: 'Esqium',
      passives: [
        'On turn start, consume each AP above 4 to gain 50% more damage per AP consumed.',
        'On Virtuose, all hits apply Burn',
        'Using a Skill that costs less than 4 AP applies Mark to all enemies.'
      ]
    },
    es: {
      name: 'Esqium',
      passives: [
        'On turn start, consume each AP above 4 to gain 50% more damage per AP consumed.',
        'On Virtuose, all hits apply Burn',
        'Using a Skill that costs less than 4 AP applies Mark to all enemies.'
      ]
    },
    fr: {
      name: 'Esqium',
      passives: [
        'On turn start, consume each AP above 4 to gain 50% more damage per AP consumed.',
        'On Virtuose, all hits apply Burn',
        'Using a Skill that costs less than 4 AP applies Mark to all enemies.'
      ]
    }
  },
  {
    id: 'licorum',
    characterIds: ['maelle'],
    element: ' physical',
    basePower: 3551,
    scaling: { agility: 'B', luck: 'A' },
    en: {
      name: 'Licorum',
      passives: [
        'Each successive Skill hit deals 10% more damage.',
        'First hit of a Skill applies Mark.',
        "Second hit of a Skill and following hits don't consume Mark"
      ]
    },
    es: {
      name: 'Licorum',
      passives: [
        'Each successive Skill hit deals 10% more damage.',
        'First hit of a Skill applies Mark.',
        "Second hit of a Skill and following hits don't consume Mark"
      ]
    },
    fr: {
      name: 'Licorum',
      passives: [
        'Each successive Skill hit deals 10% more damage.',
        'First hit of a Skill applies Mark.',
        "Second hit of a Skill and following hits don't consume Mark"
      ]
    }
  }
];

const SCIEL: Weapon[] = [
  {
    id: 'algueron',
    characterIds: ['sciel'],
    element: 'ice',
    basePower: 3228,
    scaling: { vitality: 'S', luck: 'A' },
    en: {
      name: 'Algueron',
      passives: [
        'Free Aim shots can consume 1 Foretell to deal 100% more damage.',
        'Base Attack applies 3 Foretell.',
        'During Twilight, Free Aim shots deal double damage.'
      ]
    },
    es: {
      name: 'Algueron',
      passives: [
        'Free Aim shots can consume 1 Foretell to deal 100% more damage.',
        'Base Attack applies 3 Foretell.',
        'During Twilight, Free Aim shots deal double damage.'
      ]
    },
    fr: {
      name: 'Algueron',
      passives: [
        'Free Aim shots can consume 1 Foretell to deal 100% more damage.',
        'Base Attack applies 3 Foretell.',
        'During Twilight, Free Aim shots deal double damage.'
      ]
    }
  },
  {
    id: 'blizzon',
    characterIds: ['sciel'],
    element: 'ice',
    basePower: 4197,
    scaling: { luck: 'S' },
    en: {
      name: 'Blizzon',
      passives: [
        'While having at least 1 active Moon charge, Moon Skills are always Critical but damage taken is doubled.',
        '25% increased damage per Moon charge.',
        'Base Attack gives 1 Moon charge.'
      ]
    },
    es: {
      name: 'Blizzon',
      passives: [
        'While having at least 1 active Moon charge, Moon Skills are always Critical but damage taken is doubled.',
        '25% increased damage per Moon charge.',
        'Base Attack gives 1 Moon charge.'
      ]
    },
    fr: {
      name: 'Blizzon',
      passives: [
        'While having at least 1 active Moon charge, Moon Skills are always Critical but damage taken is doubled.',
        '25% increased damage per Moon charge.',
        'Base Attack gives 1 Moon charge.'
      ]
    }
  },
  {
    id: 'bourgelon',
    characterIds: ['sciel'],
    element: 'light',
    basePower: 3099,
    scaling: { vitality: 'A', agility: 'S' },
    en: {
      name: 'Bourgelon',
      passives: [
        'Consuming Foretell applies 2 Burn on target per Sun Charge.',
        '100% increased Burn damage in Twilight state.',
        'Sun Skills give one more charge.'
      ]
    },
    es: {
      name: 'Bourgelon',
      passives: [
        'Consuming Foretell applies 2 Burn on target per Sun Charge.',
        '100% increased Burn damage in Twilight state.',
        'Sun Skills give one more charge.'
      ]
    },
    fr: {
      name: 'Bourgelon',
      passives: [
        'Consuming Foretell applies 2 Burn on target per Sun Charge.',
        '100% increased Burn damage in Twilight state.',
        'Sun Skills give one more charge.'
      ]
    }
  },
  {
    id: 'charnon',
    characterIds: ['sciel'],
    element: 'void',
    basePower: 2970,
    scaling: { defense: 'A', luck: 'S' },
    en: {
      name: 'Charnon',
      passives: [
        '100% Critical Chance during Twilight.',
        'Apply 1 Foretell on Critical hit.',
        '20% increased damage for each consecutive turn without taking damage. Can stack up to 5 times.'
      ]
    },
    es: {
      name: 'Charnon',
      passives: [
        '100% Critical Chance during Twilight.',
        'Apply 1 Foretell on Critical hit.',
        '20% increased damage for each consecutive turn without taking damage. Can stack up to 5 times.'
      ]
    },
    fr: {
      name: 'Charnon',
      passives: [
        '100% Critical Chance during Twilight.',
        'Apply 1 Foretell on Critical hit.',
        '20% increased damage for each consecutive turn without taking damage. Can stack up to 5 times.'
      ]
    }
  },
  {
    id: 'chation',
    characterIds: ['sciel'],
    element: 'dark',
    basePower: 3551,
    scaling: { vitality: 'A', luck: 'S' },
    en: {
      name: 'Chation',
      passives: [
        'Sun Skills always apply 10 Foretell, but all damage taken is doubled',
        'Base Attack gives 1 Moon charge and consumes all Foretell to apply Burn.',
        '100% increased Burn damage in Twilight state.'
      ]
    },
    es: {
      name: 'Chation',
      passives: [
        'Sun Skills always apply 10 Foretell, but all damage taken is doubled',
        'Base Attack gives 1 Moon charge and consumes all Foretell to apply Burn.',
        '100% increased Burn damage in Twilight state.'
      ]
    },
    fr: {
      name: 'Chation',
      passives: [
        'Sun Skills always apply 10 Foretell, but all damage taken is doubled',
        'Base Attack gives 1 Moon charge and consumes all Foretell to apply Burn.',
        '100% increased Burn damage in Twilight state.'
      ]
    }
  },
  {
    id: 'corderon',
    characterIds: ['sciel'],
    element: 'dark',
    basePower: 2744,
    scaling: { defense: 'S', luck: 'A' },
    en: {
      name: 'Corderon',
      passives: [
        'Curse self on battle start. Deal 50% more damage while Cursed.',
        'Reset Curse duration when entering Twilight state.',
        'Play again when entering Twilight state.'
      ]
    },
    es: {
      name: 'Corderon',
      passives: [
        'Curse self on battle start. Deal 50% more damage while Cursed.',
        'Reset Curse duration when entering Twilight state.',
        'Play again when entering Twilight state.'
      ]
    },
    fr: {
      name: 'Corderon',
      passives: [
        'Curse self on battle start. Deal 50% more damage while Cursed.',
        'Reset Curse duration when entering Twilight state.',
        'Play again when entering Twilight state.'
      ]
    }
  },
  {
    id: 'direton',
    characterIds: ['sciel'],
    element: 'earth',
    basePower: 4035,
    scaling: { defense: 'A', agility: 'S' },
    en: {
      name: 'Direton',
      passives: [
        '+1 AP per Moon charge on turn start.',
        'Base Attack gives 1 Moon charge.',
        'During Twilight, Base Attack consumes all AP. Base Attack applies 1 Foretell and deals 50% increased damage per AP consumed.'
      ]
    },
    es: {
      name: 'Direton',
      passives: [
        '+1 AP per Moon charge on turn start.',
        'Base Attack gives 1 Moon charge.',
        'During Twilight, Base Attack consumes all AP. Base Attack applies 1 Foretell and deals 50% increased damage per AP consumed.'
      ]
    },
    fr: {
      name: 'Direton',
      passives: [
        '+1 AP per Moon charge on turn start.',
        'Base Attack gives 1 Moon charge.',
        'During Twilight, Base Attack consumes all AP. Base Attack applies 1 Foretell and deals 50% increased damage per AP consumed.'
      ]
    }
  },
  {
    id: 'garganon',
    characterIds: ['sciel'],
    element: 'fire',
    basePower: 3132,
    scaling: { vitality: 'S', defense: 'A' },
    en: {
      name: 'Garganon',
      passives: [
        'While having at least 1 active Sun charge, apply one Burn stack per hit taken.',
        'Counterattacks apply 1 Burn per active Sun charge.',
        'Base attack can consume 1 Sun charge to apply 5 Foretell.'
      ]
    },
    es: {
      name: 'Garganon',
      passives: [
        'While having at least 1 active Sun charge, apply one Burn stack per hit taken.',
        'Counterattacks apply 1 Burn per active Sun charge.',
        'Base attack can consume 1 Sun charge to apply 5 Foretell.'
      ]
    },
    fr: {
      name: 'Garganon',
      passives: [
        'While having at least 1 active Sun charge, apply one Burn stack per hit taken.',
        'Counterattacks apply 1 Burn per active Sun charge.',
        'Base attack can consume 1 Sun charge to apply 5 Foretell.'
      ]
    }
  },
  {
    id: 'gobluson',
    characterIds: ['sciel'],
    element: 'fire',
    basePower: 3358,
    scaling: { defense: 'S', agility: 'A' },
    en: {
      name: 'Gobluson',
      passives: [
        'During Twilight, every time Foretell is applied, it also affects another random enemy.',
        'Apply 1 Burn every 3 Foretell applied with Skills.',
        '20% increased Fire damage with Skills.'
      ]
    },
    es: {
      name: 'Gobluson',
      passives: [
        'During Twilight, every time Foretell is applied, it also affects another random enemy.',
        'Apply 1 Burn every 3 Foretell applied with Skills.',
        '20% increased Fire damage with Skills.'
      ]
    },
    fr: {
      name: 'Gobluson',
      passives: [
        'During Twilight, every time Foretell is applied, it also affects another random enemy.',
        'Apply 1 Burn every 3 Foretell applied with Skills.',
        '20% increased Fire damage with Skills.'
      ]
    }
  },
  {
    id: 'guleson',
    characterIds: ['sciel'],
    element: 'lightning',
    basePower: 3132,
    scaling: { agility: 'A', luck: 'S' },
    en: {
      name: 'Guleson',
      passives: [
        'On Twilight Start, apply Mark to all enemies.',
        "Hitting a Marked enemy during Twilight doesn't remove Mark.",
        'Apply 3 Foretell on applying Mark.'
      ]
    },
    es: {
      name: 'Guleson',
      passives: [
        'On Twilight Start, apply Mark to all enemies.',
        "Hitting a Marked enemy during Twilight doesn't remove Mark.",
        'Apply 3 Foretell on applying Mark.'
      ]
    },
    fr: {
      name: 'Guleson',
      passives: [
        'On Twilight Start, apply Mark to all enemies.',
        "Hitting a Marked enemy during Twilight doesn't remove Mark.",
        'Apply 3 Foretell on applying Mark.'
      ]
    }
  },
  {
    id: 'hevasson',
    characterIds: ['sciel'],
    element: 'physical',
    basePower: 3454,
    scaling: { vitality: 'S', defense: 'A' },
    en: {
      name: 'Hevasson',
      passives: [
        'Free Aim shots can consume a Sun charge to apply 5 Foretell and consume a Moon charge to deal 400% more damage.',
        'Consuming a Sun or Moon charge gives 1 AP.',
        'Baser Attack gives 1 Moon charge.'
      ]
    },
    es: {
      name: 'Hevasson',
      passives: [
        'Free Aim shots can consume a Sun charge to apply 5 Foretell and consume a Moon charge to deal 400% more damage.',
        'Consuming a Sun or Moon charge gives 1 AP.',
        'Baser Attack gives 1 Moon charge.'
      ]
    },
    fr: {
      name: 'Hevasson',
      passives: [
        'Free Aim shots can consume a Sun charge to apply 5 Foretell and consume a Moon charge to deal 400% more damage.',
        'Consuming a Sun or Moon charge gives 1 AP.',
        'Baser Attack gives 1 Moon charge.'
      ]
    }
  },
  {
    id: 'litheson',
    characterIds: ['sciel'],
    element: 'physical',
    basePower: 2809,
    scaling: { agility: 'A', luck: 'S' },
    en: {
      name: 'Litheson',
      passives: [
        'During Moon, all allies have Greater Rush. During Sun, all enemies have Greater Slow.',
        'During Twilight, all allies have Greater Rush and all enemies have Greater Slow.',
        '+3 AP on applying a Buff or Debuff. Once per turn.'
      ]
    },
    es: {
      name: 'Litheson',
      passives: [
        'During Moon, all allies have Greater Rush. During Sun, all enemies have Greater Slow.',
        'During Twilight, all allies have Greater Rush and all enemies have Greater Slow.',
        '+3 AP on applying a Buff or Debuff. Once per turn.'
      ]
    },
    fr: {
      name: 'Litheson',
      passives: [
        'During Moon, all allies have Greater Rush. During Sun, all enemies have Greater Slow.',
        'During Twilight, all allies have Greater Rush and all enemies have Greater Slow.',
        '+3 AP on applying a Buff or Debuff. Once per turn.'
      ]
    }
  },
  {
    id: 'lusteson',
    characterIds: ['sciel'],
    element: 'dark',
    basePower: 3422,
    scaling: { vitality: 'S', agility: 'A' },
    en: {
      name: 'Lusteson',
      passives: [
        'Killing an enemy with Foretell applies its Foretell to another random enemy.',
        'Apply Mark on consuming Foretell.',
        '20% increased Dark damage with Skills.'
      ]
    },
    es: {
      name: 'Lusteson',
      passives: [
        'Killing an enemy with Foretell applies its Foretell to another random enemy.',
        'Apply Mark on consuming Foretell.',
        '20% increased Dark damage with Skills.'
      ]
    },
    fr: {
      name: 'Lusteson',
      passives: [
        'Killing an enemy with Foretell applies its Foretell to another random enemy.',
        'Apply Mark on consuming Foretell.',
        '20% increased Dark damage with Skills.'
      ]
    }
  },
  {
    id: 'martenon',
    characterIds: ['sciel'],
    element: 'earth',
    basePower: 3874,
    scaling: { vitality: 'S', agility: 'A' },
    en: {
      name: 'Martenon',
      passives: [
        'On Twilight Start, deal damage to all enemies based on the amount of charges.',
        'On Twilight Start, apply 2 Foretell per charge to all enemies.',
        'Double Sun and Moon charge generation.'
      ]
    },
    es: {
      name: 'Martenon',
      passives: [
        'On Twilight Start, deal damage to all enemies based on the amount of charges.',
        'On Twilight Start, apply 2 Foretell per charge to all enemies.',
        'Double Sun and Moon charge generation.'
      ]
    },
    fr: {
      name: 'Martenon',
      passives: [
        'On Twilight Start, deal damage to all enemies based on the amount of charges.',
        'On Twilight Start, apply 2 Foretell per charge to all enemies.',
        'Double Sun and Moon charge generation.'
      ]
    }
  },
  {
    id: 'minason',
    characterIds: ['sciel'],
    element: 'physical',
    basePower: 2809,
    scaling: { vitality: 'A', luck: 'S' },
    en: {
      name: 'Minason',
      passives: [
        "Sun skills have increased damage for each Foretell on the target. Moon Skills don't generate Moon charges anymore.",
        'With at least 1 active Sun charge, gain one additional AP per Foretell consumed.',
        'Base attack can consume 1 Sun charge to apply 5 Foretell.'
      ]
    },
    es: {
      name: 'Minason',
      passives: [
        "Sun skills have increased damage for each Foretell on the target. Moon Skills don't generate Moon charges anymore.",
        'With at least 1 active Sun charge, gain one additional AP per Foretell consumed.',
        'Base attack can consume 1 Sun charge to apply 5 Foretell.'
      ]
    },
    fr: {
      name: 'Minason',
      passives: [
        "Sun skills have increased damage for each Foretell on the target. Moon Skills don't generate Moon charges anymore.",
        'With at least 1 active Sun charge, gain one additional AP per Foretell consumed.',
        'Base attack can consume 1 Sun charge to apply 5 Foretell.'
      ]
    }
  },
  {
    id: 'moisson',
    characterIds: ['sciel'],
    element: 'physical',
    basePower: 3325,
    scaling: { agility: 'S', luck: 'A' },
    en: {
      name: 'Moisson',
      passives: [
        'During Twilight, all damage dealt is converted to Dark damage.',
        '20% increased Dark damage with Skills.',
        'Apply Shell during Moon, Powerful during Sun, and Rush during Twilight.'
      ]
    },
    es: {
      name: 'Moisson',
      passives: [
        'During Twilight, all damage dealt is converted to Dark damage.',
        '20% increased Dark damage with Skills.',
        'Apply Shell during Moon, Powerful during Sun, and Rush during Twilight.'
      ]
    },
    fr: {
      name: 'Moisson',
      passives: [
        'During Twilight, all damage dealt is converted to Dark damage.',
        '20% increased Dark damage with Skills.',
        'Apply Shell during Moon, Powerful during Sun, and Rush during Twilight.'
      ]
    }
  },
  {
    id: 'ramasson',
    characterIds: ['sciel'],
    element: 'physical',
    basePower: 3519,
    scaling: { vitality: 'A', luck: 'S' },
    en: {
      name: 'Ramasson',
      passives: [
        "Can consume 1 Moon charge on turn start to recover 20% of each ally's Health.",
        'Base Attack gives 1 Moon charge.',
        'Moon Skills give one more charge.'
      ]
    },
    es: {
      name: 'Ramasson',
      passives: [
        "Can consume 1 Moon charge on turn start to recover 20% of each ally's Health.",
        'Base Attack gives 1 Moon charge.',
        'Moon Skills give one more charge.'
      ]
    },
    fr: {
      name: 'Ramasson',
      passives: [
        "Can consume 1 Moon charge on turn start to recover 20% of each ally's Health.",
        'Base Attack gives 1 Moon charge.',
        'Moon Skills give one more charge.'
      ]
    }
  },
  {
    id: 'rangeson',
    characterIds: ['sciel'],
    element: 'dark',
    basePower: 3132,
    scaling: { defense: 'A', agility: 'S' },
    en: {
      name: 'Rangeson',
      passives: [
        'Recover 5% Health per Foretell applied.',
        'Healing Skills cost 1 less AP.',
        '30% increased Heal efficiency per Moon charge. Base Attack gives 1 Moon charge'
      ]
    },
    es: {
      name: 'Rangeson',
      passives: [
        'Recover 5% Health per Foretell applied.',
        'Healing Skills cost 1 less AP.',
        '30% increased Heal efficiency per Moon charge. Base Attack gives 1 Moon charge'
      ]
    },
    fr: {
      name: 'Rangeson',
      passives: [
        'Recover 5% Health per Foretell applied.',
        'Healing Skills cost 1 less AP.',
        '30% increased Heal efficiency per Moon charge. Base Attack gives 1 Moon charge'
      ]
    }
  },
  {
    id: 'sadon',
    characterIds: ['sciel'],
    element: 'light',
    basePower: 2583,
    scaling: { defense: 'A', agility: 'S' },
    en: {
      name: 'Sadon',
      passives: [
        'On turn start, gain 1 Shield if at least 1 Sun charge is active.',
        'Apply 5 Foretell on enemies that break Shields.',
        '+2 Sun charges on Counterattack.'
      ]
    },
    es: {
      name: 'Sadon',
      passives: [
        'On turn start, gain 1 Shield if at least 1 Sun charge is active.',
        'Apply 5 Foretell on enemies that break Shields.',
        '+2 Sun charges on Counterattack.'
      ]
    },
    fr: {
      name: 'Sadon',
      passives: [
        'On turn start, gain 1 Shield if at least 1 Sun charge is active.',
        'Apply 5 Foretell on enemies that break Shields.',
        '+2 Sun charges on Counterattack.'
      ]
    }
  },
  {
    id: 'scieleson',
    characterIds: ['sciel'],
    element: 'physical',
    basePower: 3454,
    scaling: { agility: 'S', luck: 'A' },
    en: { name: 'Scieleson', passives: ['N/A', 'N/A', 'N/A'] },
    es: { name: 'Scieleson', passives: ['N/A', 'N/A', 'N/A'] },
    fr: { name: 'Scieleson', passives: ['N/A', 'N/A', 'N/A'] }
  },
  {
    id: 'tisseron',
    characterIds: ['sciel'],
    element: 'lightning',
    basePower: 3067,
    scaling: { defense: 'A', agility: 'S' },
    en: {
      name: 'Tisseron',
      passives: [
        'Extend Twilight by one turn on using a Moon Skill. +50% Twilight damage increase on using a Sun Skill.',
        'Twilight duration is increased by l.',
        'Play again when entering Twilight state.'
      ]
    },
    es: {
      name: 'Tisseron',
      passives: [
        'Extend Twilight by one turn on using a Moon Skill. +50% Twilight damage increase on using a Sun Skill.',
        'Twilight duration is increased by l.',
        'Play again when entering Twilight state.'
      ]
    },
    fr: {
      name: 'Tisseron',
      passives: [
        'Extend Twilight by one turn on using a Moon Skill. +50% Twilight damage increase on using a Sun Skill.',
        'Twilight duration is increased by l.',
        'Play again when entering Twilight state.'
      ]
    }
  },
  {
    id: 'esquion',
    characterIds: ['sciel'],
    element: 'physical',
    basePower: 3842,
    scaling: { vitality: 'B', luck: 'A' },
    en: {
      name: 'Esquion',
      passives: [
        "Can't enter Twilight. On turn start, if Moon and Sun charges are balanced, deal 100% more damage and apply double Foretell.",
        'On turn start, remove all Sun and Moon charges. Then, randomly gain 1 Sun or 1 Moon charge.',
        'Base attack adds 1 Sun charge. Using a Tint adds 1 Moon charge.'
      ]
    },
    es: {
      name: 'Esquion',
      passives: [
        "Can't enter Twilight. On turn start, if Moon and Sun charges are balanced, deal 100% more damage and apply double Foretell.",
        'On turn start, remove all Sun and Moon charges. Then, randomly gain 1 Sun or 1 Moon charge.',
        'Base attack adds 1 Sun charge. Using a Tint adds 1 Moon charge.'
      ]
    },
    fr: {
      name: 'Esquion',
      passives: [
        "Can't enter Twilight. On turn start, if Moon and Sun charges are balanced, deal 100% more damage and apply double Foretell.",
        'On turn start, remove all Sun and Moon charges. Then, randomly gain 1 Sun or 1 Moon charge.',
        'Base attack adds 1 Sun charge. Using a Tint adds 1 Moon charge.'
      ]
    }
  }
];

const MONOCO: Weapon[] = [
  {
    id: 'ballaro',
    characterIds: ['monoco'],
    element: 'light',
    basePower: 3067,
    scaling: { defense: 'A', agility: 'S' },
    en: {
      name: 'Ballaro',
      passives: [
        'Reverse Bestial Wheel Order.',
        'Using an Upgraded Skill gives 1 AP to all other allies.',
        'Almighty Mask gives 2 AP to all allies.'
      ]
    },
    es: {
      name: 'Ballaro',
      passives: [
        'Reverse Bestial Wheel Order.',
        'Using an Upgraded Skill gives 1 AP to all other allies.',
        'Almighty Mask gives 2 AP to all allies.'
      ]
    },
    fr: {
      name: 'Ballaro',
      passives: [
        'Reverse Bestial Wheel Order.',
        'Using an Upgraded Skill gives 1 AP to all other allies.',
        'Almighty Mask gives 2 AP to all allies.'
      ]
    }
  },
  {
    id: 'boucharo',
    characterIds: ['monoco'],
    element: 'fire',
    basePower: 3228,
    scaling: { agility: 'A', luck: 'S' },
    en: {
      name: 'Boucharo',
      passives: [
        'Start battle in Agile Mask.',
        'Agile Mask applies Rush for 3 turns.',
        '+50% Critical Chance while in Agile Mask.'
      ]
    },
    es: {
      name: 'Boucharo',
      passives: [
        'Start battle in Agile Mask.',
        'Agile Mask applies Rush for 3 turns.',
        '+50% Critical Chance while in Agile Mask.'
      ]
    },
    fr: {
      name: 'Boucharo',
      passives: [
        'Start battle in Agile Mask.',
        'Agile Mask applies Rush for 3 turns.',
        '+50% Critical Chance while in Agile Mask.'
      ]
    }
  },
  {
    id: 'brumaro',
    characterIds: ['monoco'],
    element: 'physical',
    basePower: 3390,
    scaling: { vitality: 'S', agility: 'A' },
    en: {
      name: 'Brumaro',
      passives: [
        'Replay instantly when in Almighty Mask.',
        '+3 AP when in Almighty Mask.',
        'Revive instantly with full Health if dead while in Almighty Mask. Once per Battle.'
      ]
    },
    es: {
      name: 'Brumaro',
      passives: [
        'Replay instantly when in Almighty Mask.',
        '+3 AP when in Almighty Mask.',
        'Revive instantly with full Health if dead while in Almighty Mask. Once per Battle.'
      ]
    },
    fr: {
      name: 'Brumaro',
      passives: [
        'Replay instantly when in Almighty Mask.',
        '+3 AP when in Almighty Mask.',
        'Revive instantly with full Health if dead while in Almighty Mask. Once per Battle.'
      ]
    }
  },
  {
    id: 'chromaro',
    characterIds: ['monoco'],
    element: 'ice',
    basePower: 3390,
    scaling: { defense: 'A', agility: 'S' },
    en: {
      name: 'Chromaro',
      passives: [
        'Start battle in Caster Mask.',
        'Caster Mask applies Regen for 3 turns.',
        'Skills cost 1 less AP while in Caster Mask.'
      ]
    },
    es: {
      name: 'Chromaro',
      passives: [
        'Start battle in Caster Mask.',
        'Caster Mask applies Regen for 3 turns.',
        'Skills cost 1 less AP while in Caster Mask.'
      ]
    },
    fr: {
      name: 'Chromaro',
      passives: [
        'Start battle in Caster Mask.',
        'Caster Mask applies Regen for 3 turns.',
        'Skills cost 1 less AP while in Caster Mask.'
      ]
    }
  },
  {
    id: 'fragaro',
    characterIds: ['monoco'],
    element: 'lightning',
    basePower: 4197,
    scaling: { defense: 'A', luck: 'S' },
    en: {
      name: 'Fragaro',
      passives: [
        'Free Aim shots spin the Bestial Wheel to a random value.',
        'Free Aim shots deal 100% more damage with all Masks except Almighty.',
        '100% Critical Chance while in Almighty Mask.'
      ]
    },
    es: {
      name: 'Fragaro',
      passives: [
        'Free Aim shots spin the Bestial Wheel to a random value.',
        'Free Aim shots deal 100% more damage with all Masks except Almighty.',
        '100% Critical Chance while in Almighty Mask.'
      ]
    },
    fr: {
      name: 'Fragaro',
      passives: [
        'Free Aim shots spin the Bestial Wheel to a random value.',
        'Free Aim shots deal 100% more damage with all Masks except Almighty.',
        '100% Critical Chance while in Almighty Mask.'
      ]
    }
  },
  {
    id: 'grandaro',
    characterIds: ['monoco'],
    element: 'earth',
    basePower: 3551,
    scaling: { vitality: 'S', defense: 'A' },
    en: {
      name: 'Grandaro',
      passives: ['Start battle in Heavy Mask.', 'Heavy Mask applies Shell for 3 turns.', '+1 AP per hit taken.']
    },
    es: {
      name: 'Grandaro',
      passives: ['Start battle in Heavy Mask.', 'Heavy Mask applies Shell for 3 turns.', '+1 AP per hit taken.']
    },
    fr: {
      name: 'Grandaro',
      passives: ['Start battle in Heavy Mask.', 'Heavy Mask applies Shell for 3 turns.', '+1 AP per hit taken.']
    }
  },
  {
    id: 'joyaro',
    characterIds: ['monoco'],
    element: 'lightning',
    basePower: 3713,
    scaling: { defense: 'A', agility: 'S' },
    en: {
      name: 'Joyaro',
      passives: [
        'Start battle in Almighty Mask.',
        '20% increased damage for each consecutive turn without taking damage. Can stack up to 5 times.',
        'Break damage is doubled while in Almighty Mask.'
      ]
    },
    es: {
      name: 'Joyaro',
      passives: [
        'Start battle in Almighty Mask.',
        '20% increased damage for each consecutive turn without taking damage. Can stack up to 5 times.',
        'Break damage is doubled while in Almighty Mask.'
      ]
    },
    fr: {
      name: 'Joyaro',
      passives: [
        'Start battle in Almighty Mask.',
        '20% increased damage for each consecutive turn without taking damage. Can stack up to 5 times.',
        'Break damage is doubled while in Almighty Mask.'
      ]
    }
  },
  {
    id: 'monocaro',
    characterIds: ['monoco'],
    element: 'physical',
    basePower: 2744,
    scaling: { agility: 'S', luck: 'A' },
    en: {
      name: 'Monocaro',
      passives: [
        'Start battle in Balanced Mask.',
        'Balanced Mask applies Powerful for 3 turns.',
        'Critical hits deal 30% more damage while in Balanced Mask.'
      ]
    },
    es: {
      name: 'Monocaro',
      passives: [
        'Start battle in Balanced Mask.',
        'Balanced Mask applies Powerful for 3 turns.',
        'Critical hits deal 30% more damage while in Balanced Mask.'
      ]
    },
    fr: {
      name: 'Monocaro',
      passives: [
        'Start battle in Balanced Mask.',
        'Balanced Mask applies Powerful for 3 turns.',
        'Critical hits deal 30% more damage while in Balanced Mask.'
      ]
    }
  },
  {
    id: 'nusaro',
    characterIds: ['monoco'],
    element: 'dark',
    basePower: 4197,
    scaling: { vitality: 'A', agility: 'S' },
    en: {
      name: 'Nusaro',
      passives: [
        'Parries increase the Bestial Wheel by 1. Taking damage resets the Bestial Wheel.',
        'Upgraded Skills deal 30% more damage.',
        '+1 AP on Mask change.'
      ]
    },
    es: {
      name: 'Nusaro',
      passives: [
        'Parries increase the Bestial Wheel by 1. Taking damage resets the Bestial Wheel.',
        'Upgraded Skills deal 30% more damage.',
        '+1 AP on Mask change.'
      ]
    },
    fr: {
      name: 'Nusaro',
      passives: [
        'Parries increase the Bestial Wheel by 1. Taking damage resets the Bestial Wheel.',
        'Upgraded Skills deal 30% more damage.',
        '+1 AP on Mask change.'
      ]
    }
  },
  {
    id: 'sidaro',
    characterIds: ['monoco'],
    element: 'dark',
    basePower: 3035,
    scaling: { might: 'A', luck: 'S' },
    en: {
      name: 'Sidaro',
      passives: [
        '30% increased damage per Upgraded Skill used. Resets upon using a non-Upgraded Skill.',
        'Base Attack spins the Bestial Wheel to a random value.',
        'Using an Upgraded Skill gives 1 AP to all other allies.'
      ]
    },
    es: {
      name: 'Sidaro',
      passives: [
        '30% increased damage per Upgraded Skill used. Resets upon using a non-Upgraded Skill.',
        'Base Attack spins the Bestial Wheel to a random value.',
        'Using an Upgraded Skill gives 1 AP to all other allies.'
      ]
    },
    fr: {
      name: 'Sidaro',
      passives: [
        '30% increased damage per Upgraded Skill used. Resets upon using a non-Upgraded Skill.',
        'Base Attack spins the Bestial Wheel to a random value.',
        'Using an Upgraded Skill gives 1 AP to all other allies.'
      ]
    }
  },
  {
    id: 'urnaro',
    characterIds: ['monoco'],
    element: 'earth',
    basePower: 3422,
    scaling: { vitality: 'S', luck: 'A' },
    en: {
      name: 'Urnaro',
      passives: [
        'Switch to Almighty Mask on Breaking an enemy.',
        'Almighty Mask gives 2 AP to all Allies.',
        '50% increased Break damage.'
      ]
    },
    es: {
      name: 'Urnaro',
      passives: [
        'Switch to Almighty Mask on Breaking an enemy.',
        'Almighty Mask gives 2 AP to all Allies.',
        '50% increased Break damage.'
      ]
    },
    fr: {
      name: 'Urnaro',
      passives: [
        'Switch to Almighty Mask on Breaking an enemy.',
        'Almighty Mask gives 2 AP to all Allies.',
        '50% increased Break damage.'
      ]
    }
  },
  {
    id: 'baguettaro',
    characterIds: ['monoco'],
    element: 'fire',
    basePower: 3745,
    scaling: { defense: 'B', luck: 'A' },
    en: {
      name: 'Baguettaro',
      passives: [
        'Critical hits apply Burn.',
        "Almighty Mask gives 50% increased damage (cumulative) and doubles enemies' Burn",
        'Almighty Mask Skills consume up to 100 Burn to deal 2% more damage per Burn consumed.'
      ]
    },
    es: {
      name: 'Baguettaro',
      passives: [
        'Critical hits apply Burn.',
        "Almighty Mask gives 50% increased damage (cumulative) and doubles enemies' Burn",
        'Almighty Mask Skills consume up to 100 Burn to deal 2% more damage per Burn consumed.'
      ]
    },
    fr: {
      name: 'Baguettaro',
      passives: [
        'Critical hits apply Burn.',
        "Almighty Mask gives 50% increased damage (cumulative) and doubles enemies' Burn",
        'Almighty Mask Skills consume up to 100 Burn to deal 2% more damage per Burn consumed.'
      ]
    }
  },
  {
    id: 'esquiaro',
    characterIds: ['monoco'],
    element: ' earth',
    basePower: 3745,
    scaling: { vitality: 'A', defense: 'B' },
    en: {
      name: 'Esquiaro',
      passives: [
        'Base Attack moves the Bestial Wheel to Heavy Mask.',
        'Heavy Mask gives 1 Shield to all allies.',
        'Damage taken are reduced by 50% while in Heavy Mask.'
      ]
    },
    es: {
      name: 'Esquiaro',
      passives: [
        'Base Attack moves the Bestial Wheel to Heavy Mask.',
        'Heavy Mask gives 1 Shield to all allies.',
        'Damage taken are reduced by 50% while in Heavy Mask.'
      ]
    },
    fr: {
      name: 'Esquiaro',
      passives: [
        'Base Attack moves the Bestial Wheel to Heavy Mask.',
        'Heavy Mask gives 1 Shield to all allies.',
        'Damage taken are reduced by 50% while in Heavy Mask.'
      ]
    }
  },
  {
    id: '-cannaro-',
    characterIds: ['monoco'],
    element: 'light',
    basePower: 3648,
    scaling: { agility: 'A', luck: 'B' },
    en: {
      name: ' Cannaro ',
      passives: [
        'Free Aim Shots move the Bestial Wheel 1 step forward.',
        '25% increased damage per Mask change this turn.',
        'Free Aim shoots deal double damage while in Almighty Mask.'
      ]
    },
    es: {
      name: ' Cannaro ',
      passives: [
        'Free Aim Shots move the Bestial Wheel 1 step forward.',
        '25% increased damage per Mask change this turn.',
        'Free Aim shoots deal double damage while in Almighty Mask.'
      ]
    },
    fr: {
      name: ' Cannaro ',
      passives: [
        'Free Aim Shots move the Bestial Wheel 1 step forward.',
        '25% increased damage per Mask change this turn.',
        'Free Aim shoots deal double damage while in Almighty Mask.'
      ]
    }
  }
];

const WEAPONS: Weapon[] = [...GUSTAVE_VERSO, ...LUNE, ...MAELLE, ...SCIEL, ...MONOCO];

export default WEAPONS;
