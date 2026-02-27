import { WeaponData } from '../types';

const GUSTAVE_VERSO: WeaponData[] = [
  {
    id: 'abysseram',
    name: 'Abysseram',
    characterIds: ['gustave', 'verso'],
    element: 'physical',
    basePower: 3228,
    scaling: { vitality: 'S', defense: 'A' },
    passives: [
      '50% increased damage on Rank D. No damage increase on other ranks.',
      '50% increased Base Attack damage.',
      'On Rank D, recover 20% Health with Base Attack.'
    ]
  },
  {
    id: 'blodam',
    name: 'Blodam',
    characterIds: ['gustave', 'verso'],
    element: 'light',
    basePower: 3487,
    scaling: { defense: 'A', agility: 'S' },
    passives: [
      'Perfection is now based on current Health. Gain 1 Rank every 20% missing Health.',
      '20% increased Light damage with Skills.',
      '+1 AP on Rank Up.'
    ]
  },
  {
    id: 'chevalam',
    name: 'Chevalam',
    characterIds: ['gustave', 'verso'],
    element: 'physical',
    basePower: 3067,
    scaling: { agility: 'S', luck: 'A' },
    passives: [
      "Start battle at Rank S, but can't be Healed or gain Shields.",
      '20% increased damage for each consecutive turn without taking damage. Can stack up to 5 times.',
      'Apply Rush on Rank S.'
    ]
  },
  {
    id: 'confuso',
    name: 'Confuso',
    characterIds: ['gustave', 'verso'],
    element: 'light',
    basePower: 3067,
    scaling: { agility: 'A', luck: 'S' },
    passives: [
      'Light damage can Burn on Critical hits.',
      'Apply 3 Burn instead of Mark.',
      'Increase Burn damage by 50% per Rank, up to 300% on Rank S.'
    ]
  },
  {
    id: 'contorso',
    name: 'Contorso',
    characterIds: ['gustave', 'verso'],
    element: 'lightning',
    basePower: 2841,
    scaling: { defense: 'A', agility: 'S' },
    passives: [
      'Switch to Rank S on Break. Base Attack can Break.',
      '100% Critical Chance on Rank S.',
      'Triggers a lightning strike on Critical hits.'
    ]
  },
  {
    id: 'corpeso',
    name: 'Corpeso',
    characterIds: ['gustave', 'verso'],
    element: 'fire',
    basePower: 3648,
    scaling: { vitality: 'A', agility: 'S' },
    passives: [
      'Base Attack applies 2 Burn stack per Rank.',
      '+1 AP on Rank Up.',
      'Increase Burn damage by 50% per Rank, up to 300% on Rank S.'
    ]
  },
  {
    id: 'cruleram',
    name: 'Cruleram',
    characterIds: ['gustave', 'verso'],
    element: 'ice',
    basePower: 3454,
    scaling: { defense: 'S', luck: 'A' },
    passives: [
      "Don't lose Rank when taking damage from Powerless enemies.",
      '+1 Perfection on hitting a Powerless enemy.',
      'Apply Powerless on Counterattack.'
    ]
  },
  {
    id: 'cultam',
    name: 'Cultam',
    characterIds: ['gustave', 'verso'],
    element: 'dark',
    basePower: 3132,
    scaling: { defense: 'S', agility: 'A' },
    passives: [
      'No Perfection loss on damage taken. Perfection is instead lost on being Healed.',
      'Gain 2 AP on Counterattack.',
      'Gain 1 Rank on Counterattack.'
    ]
  },
  {
    id: 'danseso',
    name: 'Danseso',
    characterIds: ['gustave', 'verso'],
    element: 'fire',
    basePower: 2970,
    scaling: { agility: 'A', luck: 'S' },
    passives: [
      'Base attack gives 1 Perfection per Burn on target.',
      'While Powerful, 20% chance to Burn on hit.',
      '+1 AP on Rank Up.'
    ]
  },
  {
    id: 'delaram',
    name: 'Delaram',
    characterIds: ['gustave', 'verso'],
    element: 'light',
    basePower: 3390,
    scaling: { vitality: 'A', luck: 'S' },
    passives: [
      'Start battle on Rank B, but 50% Health.',
      'Recover 15% Health on Base Attack.',
      'Apply Powerful on Rank B.'
    ]
  },
  {
    id: 'demonam',
    name: 'Demonam',
    characterIds: ['gustave', 'verso'],
    element: 'light',
    basePower: 2809,
    scaling: { defense: 'A', agility: 'S' },
    passives: [
      'Casting a Light Skill increases damage of next Physical Skill cast by 50% and vice versa.',
      '20% increased Physical damage with Skills.',
      'Dealing Light damage with a Skill recovers 3% Health.'
    ]
  },
  {
    id: 'dreameso',
    name: 'Dreameso',
    characterIds: ['gustave', 'verso'],
    element: 'physical',
    basePower: 3067,
    scaling: { agility: 'S', luck: 'A' },
    passives: ['Gain 1 Rank on Counterattack', '50% increased Counterattack damage.', 'Gain 2 AP on Counterattack.']
  },
  {
    id: 'dualiso',
    name: 'Dualiso',
    characterIds: ['gustave', 'verso'],
    element: 'lightning',
    basePower: 1776,
    scaling: { vitality: 'A', defense: 'S' },
    passives: [
      'Play again after a Base Attack.',
      '50% increased Base Attack damage.',
      'Base Attack gives 4 Perfection.'
    ]
  },
  {
    id: 'gaulteram',
    name: 'Gaulteram',
    characterIds: ['gustave', 'verso'],
    element: 'earth',
    basePower: 3261,
    scaling: { agility: 'S', luck: 'A' },
    passives: [
      'When hit, lose 1 Perfection instead of 1 rank.',
      'Apply Rush on Rank S',
      'Gain 2 Perfection on turn start.'
    ]
  },
  {
    id: 'gesam',
    name: 'Gesam',
    characterIds: ['gustave', 'verso'],
    element: 'physical',
    basePower: 3228,
    scaling: { defense: 'A', luck: 'S' },
    passives: [
      'Convert Light damage Skills to Physical damage.',
      '20% increased Physical damage with Skills.',
      '-1 AP cost for Physical Skills.'
    ]
  },
  {
    id: 'glaceso',
    name: 'Glaceso',
    characterIds: ['gustave', 'verso'],
    element: 'ice',
    basePower: 2873,
    scaling: { defense: 'A', luck: 'S' },
    passives: [
      '+1 Perfection on Critical hit.',
      'Self-Heal by 2% Health on dealing a Critical hit.',
      'Countemttack is always a Critical hit.'
    ]
  },
  {
    id: 'lanceram',
    name: 'Lanceram',
    characterIds: ['gustave', 'verso'],
    element: 'physical',
    basePower: 3713,
    scaling: { vitality: 'S', agility: 'A' },
    passives: [
      "Rank can't be lower than C.",
      'Base Attack gives 4 Perfection.',
      'Parrying gives 2 Perfection instead of 1.'
    ]
  },
  {
    id: 'liteso',
    name: 'Liteso',
    characterIds: ['gustave', 'verso'],
    element: 'physical',
    basePower: 3551,
    scaling: { defense: 'S', agility: 'A' },
    passives: [
      'Base Attack consumes all Shields to deal 100% increased damage per Shield.',
      '+1 Shield on Counterattack.',
      'Base Attack gives 4 Perfection.'
    ]
  },
  {
    id: 'noahram',
    name: 'Noahram',
    characterIds: ['gustave', 'verso'],
    element: 'physical',
    basePower: 2260,
    scaling: { vitality: 'S' },
    passives: ['N/A', 'N/A', 'N/A']
  },
  {
    id: 'nosaram',
    name: 'Nosaram',
    characterIds: ['gustave', 'verso'],
    element: 'physical',
    basePower: 3551,
    scaling: { agility: 'S', luck: 'A' },
    passives: [
      'Double Perfection gained on Free Aim shots.',
      'Free Aim shots break 2 Shields.',
      '50% increased Free Aim damage.'
    ]
  },
  {
    id: 'sakaram',
    name: 'Sakaram',
    characterIds: ['gustave', 'verso'],
    element: 'physical',
    basePower: 2938,
    scaling: { agility: 'S', luck: 'A' },
    passives: [
      "Can't lose Perfection. No damage increase from Rank.",
      '50% increased Base Attack damage.',
      'Base Attack gives 4 Perfection.'
    ]
  },
  {
    id: 'seeram',
    name: 'Seeram',
    characterIds: ['gustave', 'verso'],
    element: 'light',
    basePower: 3713,
    scaling: { vitality: 'C', agility: 'B' },
    passives: [
      "-1 to all Perfection gain but can't reach Rank S.",
      'Base Attack gives 4 Perfection.',
      '20% increased Light damage with Skills.'
    ]
  },
  {
    id: 'simoso',
    name: 'Simoso',
    characterIds: ['gustave', 'verso'],
    element: 'light',
    basePower: 3228,
    scaling: { vitality: 'A', agility: 'S' },
    passives: [
      'An ethereal Sword deals Light damage on any damage dealt with Skills.',
      '20% chance to apply Burn on dealing Light damage.',
      "Can't die if at least Rank A."
    ]
  },
  {
    id: 'sireso',
    name: 'Sireso',
    characterIds: ['gustave', 'verso'],
    element: 'physical',
    basePower: 2583,
    scaling: { vitality: 'A', agility: 'S' },
    passives: [
      'Bonus damage from Perfection applies to all allies at half value. Bonus damage no longer applies to Verso.',
      'Perfection gained is increased by 1 while Powerful',
      'Support Skills cost 1 less AP.'
    ]
  },
  {
    id: 'tireso',
    name: 'Tireso',
    characterIds: ['gustave', 'verso'],
    element: 'earth',
    basePower: 3713,
    scaling: { vitality: 'S', defense: 'A' },
    passives: ['Gain 1 Rank on applying Mark.', 'Mark an enemy on Base Attack.', 'Apply Powerless on Marking an enemy.']
  },
  {
    id: 'verleso',
    name: 'Verleso',
    characterIds: ['gustave', 'verso'],
    element: 'physical',
    basePower: 3454,
    scaling: { vitality: 'S' },
    passives: ['N/A', 'N/A', 'N/A']
  },
  {
    id: 'esquiso',
    name: 'Esquiso',
    characterIds: ['gustave', 'verso'],
    element: 'light',
    basePower: 0,
    scaling: { luck: 'S', agility: 'A' },
    passives: [
      'Gain Aureole on Rank S, but drop to Rank D.',
      '30% increased damage when revived.',
      'Gradient attacks deal 100% more damage.'
    ]
  },
  {
    id: 'sucreso',
    name: 'Sucreso',
    characterIds: ['gustave', 'verso'],
    element: 'earth',
    basePower: 3713,
    scaling: { vitality: 'B', defense: 'A' },
    passives: [
      'Rank D on turn start.',
      'Ranks reduce damage taken by 20% per Rank, instead of increasing damage dealt.',
      '25% increased damage on Rank up. Resets on taking damage'
    ]
  }
];

const LUNE: WeaponData[] = [
  {
    id: 'angerim',
    name: 'Angerim',
    characterIds: ['lune'],
    element: 'fire',
    basePower: 3293,
    scaling: { defense: 'A', luck: 'S' },
    passives: [
      'Base Attack applies 2 Burn per Fire Stain.',
      'Generate one Fire Stain at the beginning of each turn.',
      '30% increased Burn damage per Fire Stain.'
    ]
  },
  {
    id: 'benisim',
    name: 'Benisim',
    characterIds: ['lune'],
    element: 'earth',
    basePower: 2744,
    scaling: { vitality: 'S', defense: 'A' },
    passives: [
      'Healing Skills cost 1 less AP.',
      'Generate one Earth Stain at the beginning of each turn.',
      'Replay instantly on consuming Stains with a Healing Skill.'
    ]
  },
  {
    id: 'betelim',
    name: 'Betelim',
    characterIds: ['lune'],
    element: 'earth',
    basePower: 3228,
    scaling: { vitality: 'A', agility: 'S' },
    passives: [
      'Using a Skill that consumes Stains increases damage by 20%. Can stack up to 5 times. Resets on using a Skill without consuming Stains.',
      'On turn start, if no Stains, 2 random Stains are generated.',
      '+l AP when Stains are consumed.'
    ]
  },
  {
    id: 'braselim',
    name: 'Braselim',
    characterIds: ['lune'],
    element: 'fire',
    basePower: 3390,
    scaling: { vitality: 'A', luck: 'S' },
    passives: [
      '30% increased Critical Chance per Ice Stain.',
      '+5% of a Gradient Charge on Critical hit.',
      '20% increased Fire damage with Skills.'
    ]
  },
  {
    id: 'chapelim',
    name: 'Chapelim',
    characterIds: ['lune'],
    element: 'earth',
    basePower: 3164,
    scaling: { defense: 'A', agility: 'S' },
    passives: [
      '30% increased Break damage per Earth Stain.',
      'Gain 9 AP on Breaking an enemy.',
      'Generate one Earth Stain at the beginning of each turn.'
    ]
  },
  {
    id: 'choralim',
    name: 'Choralim',
    characterIds: ['lune'],
    element: 'fire',
    basePower: 3551,
    scaling: { defense: 'S', agility: 'A' },
    passives: [
      '100% Critical Chance when 4 Stans are simultaneously active.',
      '20% increased damage for each consecutive turn without taking damage. Can stack up to 5 times.',
      'Critical hits apply Burn.'
    ]
  },
  {
    id: 'colim',
    name: 'Colim',
    characterIds: ['lune'],
    element: 'light',
    basePower: 2583,
    scaling: { defense: 'S', agility: 'A' },
    passives: [
      '50% chance to generate a Light Stain when consuming Stains.',
      '+1 AP on consuming a Light Stain.',
      '20% increased damage with Skills per active Light Stain.'
    ]
  },
  {
    id: 'coralim',
    name: 'Coralim',
    characterIds: ['lune'],
    element: 'ice',
    basePower: 2744,
    scaling: { vitality: 'A', defense: 'S' },
    passives: [
      'Ice Skills cost 1 less AP.',
      '20% increased Ice damage with Skills.',
      'Start battle with 1 Earth Stain.'
    ]
  },
  {
    id: 'deminerim',
    name: 'Deminerim',
    characterIds: ['lune'],
    element: 'lightning',
    basePower: 2744,
    scaling: { agility: 'A', luck: 'S' },
    passives: [
      'Lightning Skills cost 1 less AP.',
      '20% increased Lightning damage with Skills.',
      'Start battle with 1 Fire Stain.'
    ]
  },
  {
    id: 'elerim',
    name: 'Elerim',
    characterIds: ['lune'],
    element: 'earth',
    basePower: 3551,
    scaling: { vitality: 'S', defense: 'A' },
    passives: [
      'Consuming an Earth Stain applies 1 Shield to self.',
      '20% increased Earth damage with Skills.',
      'Base Attack generates an Earth Stain.'
    ]
  },
  {
    id: 'kralim',
    name: 'Kralim',
    characterIds: ['lune'],
    element: 'lightning',
    basePower: 3390,
    scaling: { vitality: 'A', agility: 'S' },
    passives: [
      'Casting a Skill increases the Skill damage of all other elements by 20%.Resets when casting a Skill of a previous element.',
      'On turn start, if no Stains, 2 random Stains are generated.',
      '+1 AP when Stains are consumed.'
    ]
  },
  {
    id: 'lighterim',
    name: 'Lighterim',
    characterIds: ['lune'],
    element: 'fire',
    basePower: 2744,
    scaling: { defense: 'A', agility: 'S' },
    passives: [
      'Fire Skills cost 1 less AP.',
      '20% increased Fire damage with Skills.',
      'Start battle with 1 Ice Stain.'
    ]
  },
  {
    id: 'lithelim',
    name: 'Lithelim',
    characterIds: ['lune'],
    element: 'void',
    basePower: 3099,
    scaling: { vitality: 'S' },
    passives: [
      '5% chance to generate a Dark Stain when consuming Stains.Deal 50% more damage with Skills per active Dark Stain.',
      '+1 AP on consuming a Light Stain.',
      'Base Attacks can consume one Dark Stain to deal 200% more damage.'
    ]
  },
  {
    id: 'lunerim',
    name: 'Lunerim',
    characterIds: ['lune'],
    element: 'fire',
    basePower: 2421,
    scaling: { vitality: 'A', luck: 'S' },
    passives: [' N/A', ' N/A', ' N/A']
  },
  {
    id: 'painerim',
    name: 'Painerim',
    characterIds: ['lune'],
    element: 'earth',
    basePower: 2744,
    scaling: { vitality: 'A', luck: 'S' },
    passives: [
      'Earth Skills cost 1 less AP.',
      '20% increased Earth damage with Skills.',
      'Start battle with 1 Lightning Stain.'
    ]
  },
  {
    id: 'potierim',
    name: 'Potierim',
    characterIds: ['lune'],
    element: 'ice',
    basePower: 2906,
    scaling: { defense: 'A', agility: 'S' },
    passives: [
      'Healing Skills generate one additional 1 Light stain.',
      'Consuming a Light Stain applies Slow to a random enemy.',
      'Base Attack generates a Light Stain.'
    ]
  },
  {
    id: 'redalim',
    name: 'Redalim',
    characterIds: ['lune'],
    element: 'ice',
    basePower: 2583,
    scaling: { defense: 'S', agility: 'A' },
    passives: [
      'Healing Skills generate one additional Light stain.',
      'Generate one Ice Stain at the beginning of each turn.',
      'Replay instantly on consuming Stains with a Healing Skill.'
    ]
  },
  {
    id: 'saperim',
    name: 'Saperim',
    characterIds: ['lune'],
    element: 'lightning',
    basePower: 3067,
    scaling: { defense: 'S', luck: 'A' },
    passives: [
      'Using a Gradient Attack generates 1 additional Light Stain.',
      'When a Fire Stain is generated, a Lightning Stain is also generated. Once per turn.',
      'Gradient Attacks and Gradient Counters deal 50% more damage.'
    ]
  },
  {
    id: 'scaverim',
    name: 'Scaverim',
    characterIds: ['lune'],
    element: 'dark',
    basePower: 4197,
    scaling: { vitality: 'S', agility: 'A' },
    passives: [
      '50% chance to generate a Dark Stain when consuming Stains. Deal 50% more damage with Skills per active Dark Stain.',
      'Base Attacks can consume one Dark Stain to deal 200% more damage.',
      'With 4 active Dark Stains, any Skill can consume them to deal 300% more damage.'
    ]
  },
  {
    id: 'snowim',
    name: 'Snowim',
    characterIds: ['lune'],
    element: 'ice',
    basePower: 3874,
    scaling: { vitality: 'A', agility: 'S' },
    passives: [
      'Freeze self when falling below 30% health. Prevent the next instance of damage while Frozen.',
      'On turn start, if Frozen, remove Freeze and recover 60% Health.',
      'Gain 2 Ice Stains and 3 AP when Frozen.'
    ]
  },
  {
    id: 'trebuchim',
    name: 'Trebuchim',
    characterIds: ['lune'],
    element: 'lightning',
    basePower: 3067,
    scaling: { vitality: 'S', luck: 'A' },
    passives: [
      'Generate a random Stain on Free Aim shot.',
      '+1 AP when Stains are consumed.',
      'Base Attack generates 2 random Stains.'
    ]
  },
  {
    id: 'troubadim',
    name: 'Troubadim',
    characterIds: ['lune'],
    element: 'physical',
    basePower: 3067,
    scaling: { vitality: 'A', defense: 'S' },
    passives: [
      'Free Aim Shots deal damage to an additional random target.',
      '50% increased Free Aim damage.',
      'Generate a random Stain on Free Aim shot.'
    ]
  },
  {
    id: 'bonbim',
    name: 'Bonbim',
    characterIds: ['lune'],
    element: 'lightning',
    basePower: 3810,
    scaling: { vitality: 'S', defense: 'A' },
    passives: [
      '+5% Critical chance per Burn on the target.',
      'Critical hits apply Burn.',
      'Lightning Skills consume up to 100 Burn to deal 2% more damage per Burn consumed.'
    ]
  },
  {
    id: 'cleim',
    name: 'Cleim',
    characterIds: ['lune'],
    element: 'light',
    basePower: 3551,
    scaling: { agility: 'A', luck: 'S' },
    passives: [
      "Damage can't be reduced, blocked, or absorbed by Elemental Affinities.",
      'An ethereal Sword deals Light damage on any damage dealt with Skills.',
      'Starting a turn with 1 Earth, 1 Fire, 1 Ice, and 1 Lightning Stain doubles damage dealt this turn'
    ]
  },
  {
    id: 'esquim',
    name: 'Esquim',
    characterIds: ['lune'],
    element: 'dark',
    basePower: 3616,
    scaling: { defense: 'B', agility: 'A' },
    passives: [
      "Using a Skill that doesn't consume Stains increases damage by 20%. Resets on using a Skill that consumes Stains",
      'Base attack changes all current Stains into Dark Stains.',
      'With 4 active Dark Stains, any Skill can consume them to deal 300% more damage.'
    ]
  }
];

const MAELLE: WeaponData[] = [
  {
    id: 'barrier-breaker',
    name: 'Barrier Breaker',
    characterIds: ['maelle'],
    element: 'void',
    basePower: 3616,
    scaling: { defense: 'S', agility: 'A' },
    passives: [
      'Lvl. 4:\xa0Steal Shields removed by hitting enemies.',
      'Lvl. 10:\xa0Switch to Virtuose Stance on breaking any Shield.',
      'Lvl: 20:\xa0Hitting a Marked enemy breaks all its Shields.'
    ]
  },
  {
    id: 'battlum',
    name: 'Battlum',
    characterIds: ['maelle'],
    element: 'physical',
    basePower: 3067,
    scaling: { defense: 'S', luck: 'A' },
    passives: [
      'Lvl. 4:\xa0Double Gradient generation while in Defensive Stance.',
      'Lvl. 10:\xa0lf Stanceless, Base Attack switches to Defensive Stance.',
      'Lvl: 20:\xa0+5% of a Gradient Charge on Parry.'
    ]
  },
  {
    id: 'brulerum',
    name: 'Brulerum',
    characterIds: ['maelle'],
    element: 'fire',
    basePower: 2744,
    scaling: { agility: 'A', luck: 'S' },
    passives: [
      'Lvl. 4:\xa0Critical hits apply Burn.',
      'Lvl. 10:\xa0Base Attack applies 2 Burn.',
      'Lvl: 20:\xa0100% Critical Chance while Stanceless.'
    ]
  },
  {
    id: 'chalium',
    name: 'Chalium',
    characterIds: ['maelle'],
    element: 'light',
    basePower: 3422,
    scaling: { vitality: 'A', agility: 'S' },
    passives: [
      'Lvl. 4:\xa0On Defensive Stance, gain 1 Shield per Parry. Lose all Shields on turn start.',
      'Lvl. 10:\xa020% increased Light damage with Skills.',
      'Lvl: 20:\xa050% increased Counter damage per Shield.'
    ]
  },
  {
    id: 'chantenum',
    name: 'Chantenum',
    characterIds: ['maelle'],
    element: 'fire',
    basePower: 2841,
    scaling: { agility: 'A', luck: 'S' },
    passives: [
      'Lvl. 4:\xa0On turn start, if Stanceless, switch to Offensive Stance.',
      'Lvl. 10:\xa0Fire Skills cost 1 less AP.',
      'Lvl: 20:\xa0+1 Shield on switching to Offensive Stance.'
    ]
  },
  {
    id: 'clierum',
    name: 'Clierum',
    characterIds: ['maelle'],
    element: 'lightning',
    basePower: 3196,
    scaling: { defense: 'A', agility: 'S' },
    passives: [
      'Lvl. 4:\xa0Critical hits with Skills give 2 AP. Once per turn.',
      'Lvl. 10:\xa020% increased Lightning damage with Skills.',
      'Lvl: 20:\xa0+50% Critical Chance while in Offensive Stance.'
    ]
  },
  {
    id: 'coldum',
    name: 'Coldum',
    characterIds: ['maelle'],
    element: 'ice',
    basePower: 2583,
    scaling: { vitality: 'S', defense: 'A' },
    passives: [
      'Lvl. 4:\xa0Self-Heal by 2% Health on dealing a Critical hit.',
      'Lvl. 10:\xa0+50% Critical Chance while in Defensive Stance.',
      'Lvl: 20:\xa0If Stanceless, Base Attack switches to Defensive Stance.'
    ]
  },
  {
    id: 'duenum',
    name: 'Duenum',
    characterIds: ['maelle'],
    element: 'physical',
    basePower: 2421,
    scaling: { defense: 'S', agility: 'A' },
    passives: [
      'Lvl. 4:\xa0In Defensive Stance, gaining AP also gives 1 AP to allies.',
      'Lvl. 10:\xa0If Stanceless, Base Attack switches to Defensive Stance.',
      'Lvl: 20:\xa0+1 AP on Stance switch.'
    ]
  },
  {
    id: 'facesum',
    name: 'Facesum',
    characterIds: ['maelle'],
    element: 'physical',
    basePower: 3519,
    scaling: { vitality: 'A', luck: 'S' },
    passives: [
      'Lvl. 4:\xa0In Offensive Stance, double the amount of Burn applied.',
      'Lvl. 10:\xa050% increased Burn damage.',
      'Lvl: 20:\xa0Base Attack propagates Burn.'
    ]
  },
  {
    id: 'glaisum',
    name: 'Glaisum',
    characterIds: ['maelle'],
    element: 'physical',
    basePower: 3713,
    scaling: { defense: 'S', agility: 'A' },
    passives: [
      'Lvl. 4:\xa0Allies recover 20% Health on switching to Virtuose Stance.',
      'Lvl. 10:\xa0Gain Shell when switching out of Virtuose Stance.',
      'Lvl: 20:\xa0Cleanse self Status Effects when switching to Virtuose Stance.'
    ]
  },
  {
    id: 'jarum',
    name: 'Jarum',
    characterIds: ['maelle'],
    element: 'physical',
    basePower: 2583,
    scaling: { defense: 'S', luck: 'A' },
    passives: [
      'Lvl. 4:\xa0Switch to Virtuose Stance on Counterattack.',
      'Lvl. 10:\xa0Apply 5 Burn on Counterattack.',
      'Lvl: 20:\xa050% increased Counter damage per Shield.'
    ]
  },
  {
    id: 'lithum',
    name: 'Lithum',
    characterIds: ['maelle'],
    element: 'void',
    basePower: 3228,
    scaling: { agility: 'A', luck: 'S' },
    passives: [
      "Lvl. 4:\xa0In Virtuose Stance, hitting a Marked enemy doesn't remove Mark.",
      'Lvl. 10:\xa0Switch to Virtuose Stance on Counterattack.',
      'Lvl: 20:\xa0Gain Shell when switching out of Virtuose Stance.'
    ]
  },
  {
    id: 'maellum',
    name: 'Maellum',
    characterIds: ['maelle'],
    element: 'physical',
    basePower: 3228,
    scaling: { vitality: 'S' },
    passives: ['Lvl. 4:\xa0N/A', 'Lvl. 10:\xa0N/A', 'Lvl: 20: N/A']
  },
  {
    id: 'medalum',
    name: 'Medalum',
    characterIds: ['maelle'],
    element: 'physical',
    basePower: 2906,
    scaling: { defense: 'S', agility: 'A' },
    passives: [
      'Lvl. 4:\xa0Start in Virtuose Stance.',
      'Lvl. 10:\xa0In Virtuose Stance, every Burn applied is doubled.',
      'Lvl: 20:\xa0In Virtuose Stance, Burn deals double damage.'
    ]
  },
  {
    id: 'melarum',
    name: 'Melarum',
    characterIds: ['maelle'],
    element: 'physical',
    basePower: 3584,
    scaling: { vitality: 'S', luck: 'A' },
    passives: [
      'Lvl. 4:\xa0Allies recover 20% Health on switching to Virtuose Stance.',
      'Lvl. 10:\xa0Applies Shell when Health is above 80%.',
      'Lvl: 20:\xa0Switch to Virtuose Stance when Health falls below 50%.'
    ]
  },
  {
    id: 'plenum',
    name: 'Plenum',
    characterIds: ['maelle'],
    element: 'ice',
    basePower: 3035,
    scaling: { defense: 'A', luck: 'S' },
    passives: [
      'Lvl. 4:\xa0On turn start, if Stanceless, switch to Defensive Stance.',
      'Lvl. 10:\xa0In Defensive Stance, double Break damage.',
      'Lvl: 20:\xa0Support Skills cost 1 less AP.'
    ]
  },
  {
    id: 'seashelum',
    name: 'Seashelum',
    characterIds: ['maelle'],
    element: 'fire',
    basePower: 3003,
    scaling: { defense: 'A', agility: 'S' },
    passives: [
      'Lvl. 4:\xa0+1 Shield on switching to Offesnive Stance.',
      'Lvl. 10: If Stanceless, Base Attack switches to Offensive Stance.',
      'Lvl: 20:\xa0+50% Critical Chance while in Offensive Stance.'
    ]
  },
  {
    id: 'sekarum',
    name: 'Sekarum',
    characterIds: ['maelle'],
    element: 'physical',
    basePower: 3390,
    scaling: { vitality: 'S', agility: 'A' },
    passives: [
      'Lvl. 4:\xa0Switch to Virtuose Stance on breaking any Shield.',
      'Lvl. 10:\xa0Free Aim shots break 2 shields.',
      'Lvl: 20:\xa0In Virtuose Stance, all damage pierce Shields.'
    ]
  },
  {
    id: 'stalum',
    name: 'Stalum',
    characterIds: ['maelle'],
    element: 'fire',
    basePower: 3228,
    scaling: { defense: 'S', luck: 'A' },
    passives: [
      'Lvl. 4:\xa0Apply Burn on self on turn start. 10% increased damage for each self Burn stack.',
      'Lvl. 10:\xa0Base Attack applies 2 Burn.',
      'Lvl: 20:\xa0While in Defensive Stance, receive Heal instead of Burn\xa0damage.'
    ]
  },
  {
    id: 'tissenum',
    name: 'Tissenum',
    characterIds: ['maelle'],
    element: 'earth',
    basePower: 3874,
    scaling: { vitality: 'A', agility: 'S' },
    passives: [
      'Lvl. 4:\xa0In Defensive Stance, double Break damage.',
      'Lvl. 10:\xa0Gain 9 AP on Breaking an enemy.',
      'Lvl: 20:\xa0Breaking an enemy deals 3 high amount of Earth damage.'
    ]
  },
  {
    id: 'veremum',
    name: 'Veremum',
    characterIds: ['maelle'],
    element: 'physical',
    basePower: 3293,
    scaling: { vitality: 'A', luck: 'S' },
    passives: [
      'Lvl. 4:\xa0If Stanceless, Base Attack switches to Offensive Stance.',
      'Lvl. 10:\xa0Counterattacks apply Defenceless.',
      'Lvl: 20:\xa0+50% Critical Chance while in Offensive Stance.'
    ]
  },
  {
    id: 'volesterum',
    name: 'Volesterum',
    characterIds: ['maelle'],
    element: 'physical',
    basePower: 3293,
    scaling: { vitality: 'A', agility: 'S' },
    passives: [
      'Lvl. 4:\xa0+1 AP on Stance switch.',
      'Lvl. 10:\xa0If Stanceless, Bast Attack switches to Defensive Stance.',
      'Lvl: 20:\xa0Recover 5% Health on Stance switch.'
    ]
  },
  {
    id: 'yeverum',
    name: 'Yeverum',
    characterIds: ['maelle'],
    element: 'physical',
    basePower: 3358,
    scaling: { defense: 'S', agility: 'A' },
    passives: [
      'Lvl. 4:\xa0Applying Shell also applies 1 Shield.',
      'Lvl. 10:\xa0On applying Shields, also give 1 AP.',
      'Lvl: 20:\xa0On switching to Virtuose Stance, double all Shields on allies.'
    ]
  },
  {
    id: 'esqium',
    name: 'Esqium',
    characterIds: ['maelle'],
    element: 'fire',
    basePower: 3680,
    scaling: { defense: 'B', agility: 'A' },
    passives: [
      'Lvl. 4: On turn start, consume each AP above 4 to gain 50% more damage per AP consumed.',
      'Lvl. 10: On Virtuose, all hits apply Burn',
      'Lvl: 20: Using a Skill that costs less than 4 AP applies Mark to all enemies.'
    ]
  },
  {
    id: 'licorum',
    name: 'Licorum',
    characterIds: ['maelle'],
    element: '\xa0physical',
    basePower: 3551,
    scaling: { agility: 'B', luck: 'A' },
    passives: [
      'Lvl. 4: Each successive Skill hit deals 10% more damage.',
      'Lvl. 10: First hit of a Skill applies Mark.',
      "Lvl: 20: Second hit of a Skill and following hits don't consume Mark"
    ]
  }
];

const SCIEL: WeaponData[] = [
  {
    id: 'algueron',
    name: 'Algueron',
    characterIds: ['sciel'],
    element: 'ice',
    basePower: 3228,
    scaling: { vitality: 'S', luck: 'A' },
    passives: [
      'Lvl. 4:\xa0Free Aim shots can consume 1 Foretell to deal 100% more damage.',
      'Lvl. 10:\xa0Base Attack applies 3 Foretell.',
      'Lvl: 20:\xa0During Twilight, Free Aim shots deal double damage.'
    ]
  },
  {
    id: 'blizzon',
    name: 'Blizzon',
    characterIds: ['sciel'],
    element: 'ice',
    basePower: 4197,
    scaling: { luck: 'S' },
    passives: [
      'Lvl. 4:\xa0While having at least 1 active Moon charge, Moon Skills are always Critical but damage taken is doubled.',
      'Lvl. 10:\xa025% increased damage per Moon charge.',
      'Lvl: 20:\xa0Base Attack gives 1 Moon charge.'
    ]
  },
  {
    id: 'bourgelon',
    name: 'Bourgelon',
    characterIds: ['sciel'],
    element: 'light',
    basePower: 3099,
    scaling: { vitality: 'A', agility: 'S' },
    passives: [
      'Lvl. 4:\xa0Consuming Foretell applies 2 Burn on target per Sun Charge.',
      'Lvl. 10:\xa0100% increased Burn damage in Twilight state.',
      'Lvl: 20:\xa0Sun Skills give one more charge.'
    ]
  },
  {
    id: 'charnon',
    name: 'Charnon',
    characterIds: ['sciel'],
    element: 'void',
    basePower: 2970,
    scaling: { defense: 'A', luck: 'S' },
    passives: [
      'Lvl. 4:\xa0100% Critical Chance during Twilight.',
      'Lvl. 10:\xa0Apply 1 Foretell on Critical hit.',
      'Lvl: 20:\xa020% increased damage for each consecutive turn without taking damage. Can stack up to 5 times.'
    ]
  },
  {
    id: 'chation',
    name: 'Chation',
    characterIds: ['sciel'],
    element: 'dark',
    basePower: 3551,
    scaling: { vitality: 'A', luck: 'S' },
    passives: [
      'Lvl. 4:\xa0Sun Skills always apply 10 Foretell, but all damage taken is doubled',
      'Lvl. 10:\xa0Base Attack gives 1 Moon charge and consumes all Foretell to apply Burn.',
      'Lvl: 20:\xa0100% increased Burn damage in Twilight state.'
    ]
  },
  {
    id: 'corderon',
    name: 'Corderon',
    characterIds: ['sciel'],
    element: 'dark',
    basePower: 2744,
    scaling: { defense: 'S', luck: 'A' },
    passives: [
      'Lvl. 4:\xa0Curse self on battle start. Deal 50% more damage while Cursed.',
      'Lvl. 10:\xa0Reset Curse duration when entering Twilight state.',
      'Lvl: 20: Play again when entering Twilight state.'
    ]
  },
  {
    id: 'direton',
    name: 'Direton',
    characterIds: ['sciel'],
    element: 'earth',
    basePower: 4035,
    scaling: { defense: 'A', agility: 'S' },
    passives: [
      'Lvl. 4:\xa0+1 AP per Moon charge on turn start.',
      'Lvl. 10:\xa0Base Attack gives 1 Moon charge.',
      'Lvl: 20:\xa0During Twilight, Base Attack consumes all AP. Base Attack applies 1 Foretell and deals 50% increased damage per AP consumed.'
    ]
  },
  {
    id: 'garganon',
    name: 'Garganon',
    characterIds: ['sciel'],
    element: 'fire',
    basePower: 3132,
    scaling: { vitality: 'S', defense: 'A' },
    passives: [
      'Lvl. 4:\xa0While having at least 1 active Sun charge, apply one Burn stack per hit taken.',
      'Lvl. 10:\xa0Counterattacks apply 1 Burn per active Sun charge.',
      'Lvl: 20:\xa0Base attack can consume 1 Sun charge to apply 5 Foretell.'
    ]
  },
  {
    id: 'gobluson',
    name: 'Gobluson',
    characterIds: ['sciel'],
    element: 'fire',
    basePower: 3358,
    scaling: { defense: 'S', agility: 'A' },
    passives: [
      'Lvl. 4:\xa0During Twilight, every time Foretell is applied, it also affects another random enemy.',
      'Lvl. 10:\xa0Apply 1 Burn every 3 Foretell applied with Skills.',
      'Lvl: 20:\xa020% increased Fire damage with Skills.'
    ]
  },
  {
    id: 'guleson',
    name: 'Guleson',
    characterIds: ['sciel'],
    element: 'lightning',
    basePower: 3132,
    scaling: { agility: 'A', luck: 'S' },
    passives: [
      'Lvl. 4: On Twilight Start, apply Mark to all enemies.',
      "Lvl. 10: Hitting a Marked enemy during Twilight doesn't remove Mark.",
      'Lvl: 20: Apply 3 Foretell on applying Mark.'
    ]
  },
  {
    id: 'hevasson',
    name: 'Hevasson',
    characterIds: ['sciel'],
    element: 'physical',
    basePower: 3454,
    scaling: { vitality: 'S', defense: 'A' },
    passives: [
      'Lvl. 4: Free Aim shots can consume a Sun charge to apply 5 Foretell and consume a Moon charge to deal 400% more damage.',
      'Lvl. 10: Consuming a Sun or Moon charge gives 1 AP.',
      'Lvl: 20: Baser Attack gives 1 Moon charge.'
    ]
  },
  {
    id: 'litheson',
    name: 'Litheson',
    characterIds: ['sciel'],
    element: 'physical',
    basePower: 2809,
    scaling: { agility: 'A', luck: 'S' },
    passives: [
      'Lvl. 4:\xa0During Moon, all allies have Greater Rush.\xa0During Sun, all enemies have Greater Slow.',
      'Lvl. 10:\xa0During Twilight, all allies have Greater Rush\xa0and all enemies have Greater Slow.',
      'Lvl: 20:\xa0+3 AP on applying a Buff or Debuff. Once per turn.'
    ]
  },
  {
    id: 'lusteson',
    name: 'Lusteson',
    characterIds: ['sciel'],
    element: 'dark',
    basePower: 3422,
    scaling: { vitality: 'S', agility: 'A' },
    passives: [
      'Lvl. 4:\xa0Killing an enemy with Foretell applies its Foretell to another random enemy.',
      'Lvl. 10:\xa0Apply Mark on consuming Foretell.',
      'Lvl: 20:\xa020% increased Dark damage with Skills.'
    ]
  },
  {
    id: 'martenon',
    name: 'Martenon',
    characterIds: ['sciel'],
    element: 'earth',
    basePower: 3874,
    scaling: { vitality: 'S', agility: 'A' },
    passives: [
      'Lvl. 4: On Twilight Start, deal damage to all enemies based on the amount of charges.',
      'Lvl. 10:\xa0On Twilight Start, apply 2 Foretell per charge to all enemies.',
      'Lvl: 20:\xa0Double Sun and Moon charge generation.'
    ]
  },
  {
    id: 'minason',
    name: 'Minason',
    characterIds: ['sciel'],
    element: 'physical',
    basePower: 2809,
    scaling: { vitality: 'A', luck: 'S' },
    passives: [
      "Lvl. 4:\xa0Sun skills have increased damage for each Foretell on the target.\xa0Moon Skills don't generate Moon charges anymore.",
      'Lvl. 10:\xa0With at least 1 active Sun charge, gain one additional AP per Foretell consumed.',
      'Lvl: 20:\xa0Base attack can consume 1 Sun charge to apply 5 Foretell.'
    ]
  },
  {
    id: 'moisson',
    name: 'Moisson',
    characterIds: ['sciel'],
    element: 'physical',
    basePower: 3325,
    scaling: { agility: 'S', luck: 'A' },
    passives: [
      'Lvl. 4:\xa0During Twilight, all damage dealt is converted to Dark damage.',
      'Lvl. 10:\xa020% increased Dark damage with Skills.',
      'Lvl: 20:\xa0Apply Shell during Moon, Powerful during Sun, and Rush during Twilight.'
    ]
  },
  {
    id: 'ramasson',
    name: 'Ramasson',
    characterIds: ['sciel'],
    element: 'physical',
    basePower: 3519,
    scaling: { vitality: 'A', luck: 'S' },
    passives: [
      "Lvl. 4:\xa0Can consume 1 Moon charge on turn start to recover 20% of each ally's Health.",
      'Lvl. 10:\xa0Base Attack gives 1 Moon charge.',
      'Lvl: 20:\xa0Moon Skills give one more charge.'
    ]
  },
  {
    id: 'rangeson',
    name: 'Rangeson',
    characterIds: ['sciel'],
    element: 'dark',
    basePower: 3132,
    scaling: { defense: 'A', agility: 'S' },
    passives: [
      'Lvl. 4:\xa0Recover 5% Health per Foretell applied.',
      'Lvl. 10:\xa0Healing Skills cost 1 less AP.',
      'Lvl: 20:\xa030% increased Heal efficiency per Moon charge. Base Attack gives 1 Moon charge'
    ]
  },
  {
    id: 'sadon',
    name: 'Sadon',
    characterIds: ['sciel'],
    element: 'light',
    basePower: 2583,
    scaling: { defense: 'A', agility: 'S' },
    passives: [
      'Lvl. 4:\xa0On turn start, gain 1 Shield if at least 1 Sun charge is active.',
      'Lvl. 10:\xa0Apply 5 Foretell on enemies that break Shields.',
      'Lvl: 20:\xa0+2 Sun charges on Counterattack.'
    ]
  },
  {
    id: 'scieleson',
    name: 'Scieleson',
    characterIds: ['sciel'],
    element: 'physical',
    basePower: 3454,
    scaling: { agility: 'S', luck: 'A' },
    passives: ['Lvl. 4:\xa0N/A', 'Lvl. 10:\xa0N/A', 'Lvl: 20: N/A']
  },
  {
    id: 'tisseron',
    name: 'Tisseron',
    characterIds: ['sciel'],
    element: 'lightning',
    basePower: 3067,
    scaling: { defense: 'A', agility: 'S' },
    passives: [
      'Lvl. 4:\xa0Extend Twilight by one turn on using a Moon Skill. +50% Twilight damage increase on using a Sun Skill.',
      'Lvl. 10:\xa0Twilight duration is increased by l.',
      'Lvl: 20:\xa0Play again when entering Twilight state.'
    ]
  },
  {
    id: 'esquion',
    name: 'Esquion',
    characterIds: ['sciel'],
    element: 'physical',
    basePower: 3842,
    scaling: { vitality: 'B', luck: 'A' },
    passives: [
      "Lvl. 4: Can't enter Twilight. On turn start, if Moon and Sun charges are balanced, deal 100% more damage and apply double Foretell.",
      'Lvl. 10: On turn start, remove all Sun and Moon charges. Then, randomly gain 1 Sun or 1 Moon charge.',
      'Lvl: 20: Base attack adds 1 Sun charge. Using a Tint adds 1 Moon charge.'
    ]
  }
];

const MONOCO: WeaponData[] = [
  {
    id: 'ballaro',
    name: 'Ballaro',
    characterIds: ['monoco'],
    element: 'light',
    basePower: 3067,
    scaling: { defense: 'A', agility: 'S' },
    passives: [
      'Lvl. 4:\xa0Reverse Bestial Wheel Order.',
      'Lvl. 10:\xa0Using an Upgraded Skill gives 1 AP to all other allies.',
      'Lvl: 20:\xa0Almighty Mask gives 2 AP to all allies.'
    ]
  },
  {
    id: 'boucharo',
    name: 'Boucharo',
    characterIds: ['monoco'],
    element: 'fire',
    basePower: 3228,
    scaling: { agility: 'A', luck: 'S' },
    passives: [
      'Lvl. 4:\xa0Start battle in Agile Mask.',
      'Lvl. 10:\xa0Agile Mask applies Rush for 3 turns.',
      'Lvl: 20:\xa0+50% Critical Chance while in Agile Mask.'
    ]
  },
  {
    id: 'brumaro',
    name: 'Brumaro',
    characterIds: ['monoco'],
    element: 'physical',
    basePower: 3390,
    scaling: { vitality: 'S', agility: 'A' },
    passives: [
      'Lvl. 4:\xa0Replay instantly when in Almighty Mask.',
      'Lvl. 10:\xa0+3 AP when in Almighty Mask.',
      'Lvl: 20:\xa0Revive instantly with full Health if dead while in Almighty Mask. Once per Battle.'
    ]
  },
  {
    id: 'chromaro',
    name: 'Chromaro',
    characterIds: ['monoco'],
    element: 'ice',
    basePower: 3390,
    scaling: { defense: 'A', agility: 'S' },
    passives: [
      'Lvl. 4:\xa0Start battle in Caster Mask.',
      'Lvl. 10:\xa0Caster Mask applies Regen for 3 turns.',
      'Lvl: 20:\xa0Skills cost 1 less AP while in Caster Mask.'
    ]
  },
  {
    id: 'fragaro',
    name: 'Fragaro',
    characterIds: ['monoco'],
    element: 'lightning',
    basePower: 4197,
    scaling: { defense: 'A', luck: 'S' },
    passives: [
      'Lvl. 4: Free Aim shots spin the Bestial Wheel to a random value.',
      'Lvl. 10:\xa0Free Aim shots deal 100% more damage with all Masks except Almighty.',
      'Lvl: 20:\xa0100% Critical Chance while in Almighty Mask.'
    ]
  },
  {
    id: 'grandaro',
    name: 'Grandaro',
    characterIds: ['monoco'],
    element: 'earth',
    basePower: 3551,
    scaling: { vitality: 'S', defense: 'A' },
    passives: [
      'Lvl. 4:\xa0Start battle in Heavy Mask.',
      'Lvl. 10:\xa0Heavy Mask applies Shell for 3 turns.',
      'Lvl: 20:\xa0+1 AP per hit taken.'
    ]
  },
  {
    id: 'joyaro',
    name: 'Joyaro',
    characterIds: ['monoco'],
    element: 'lightning',
    basePower: 3713,
    scaling: { defense: 'A', agility: 'S' },
    passives: [
      'Lvl. 4:\xa0Start battle in Almighty Mask.',
      'Lvl. 10:\xa020% increased damage for each consecutive turn without taking damage. Can stack up to 5 times.',
      'Lvl: 20:\xa0Break damage is doubled while in Almighty Mask.'
    ]
  },
  {
    id: 'monocaro',
    name: 'Monocaro',
    characterIds: ['monoco'],
    element: 'physical',
    basePower: 2744,
    scaling: { agility: 'S', luck: 'A' },
    passives: [
      'Lvl. 4:\xa0Start battle in Balanced Mask.',
      'Lvl. 10:\xa0Balanced Mask applies Powerful for 3 turns.',
      'Lvl: 20:\xa0Critical hits deal 30% more damage while in Balanced Mask.'
    ]
  },
  {
    id: 'nusaro',
    name: 'Nusaro',
    characterIds: ['monoco'],
    element: 'dark',
    basePower: 4197,
    scaling: { vitality: 'A', agility: 'S' },
    passives: [
      'Lvl. 4:\xa0Parries increase the Bestial Wheel by 1. Taking damage resets the Bestial Wheel.',
      'Lvl. 10:\xa0Upgraded Skills deal 30% more damage.',
      'Lvl: 20:\xa0+1 AP on Mask change.'
    ]
  },
  {
    id: 'sidaro',
    name: 'Sidaro',
    characterIds: ['monoco'],
    element: 'dark',
    basePower: 3035,
    scaling: { might: 'A', luck: 'S' },
    passives: [
      'Lvl. 4:\xa030% increased damage per Upgraded Skill used. Resets upon using a non-Upgraded Skill.',
      'Lvl. 10:\xa0Base Attack spins the Bestial Wheel to a random value.',
      'Lvl: 20:\xa0Using an Upgraded Skill gives 1 AP to all other allies.'
    ]
  },
  {
    id: 'urnaro',
    name: 'Urnaro',
    characterIds: ['monoco'],
    element: 'earth',
    basePower: 3422,
    scaling: { vitality: 'S', luck: 'A' },
    passives: [
      'Lvl. 4: Switch to Almighty Mask on Breaking an enemy.',
      'Lvl. 10: Almighty Mask gives 2 AP to all Allies.',
      'Lvl: 20: 50% increased Break damage.'
    ]
  },
  {
    id: 'baguettaro',
    name: 'Baguettaro',
    characterIds: ['monoco'],
    element: 'fire',
    basePower: 3745,
    scaling: { defense: 'B', luck: 'A' },
    passives: [
      'Lvl. 4: Critical hits apply Burn.',
      "Lvl. 10: Almighty Mask gives 50% increased damage (cumulative) and doubles enemies' Burn",
      'Lvl: 20: Almighty Mask Skills consume up to 100 Burn to deal 2% more damage per Burn consumed.'
    ]
  },
  {
    id: 'esquiaro',
    name: 'Esquiaro',
    characterIds: ['monoco'],
    element: '\xa0earth',
    basePower: 3745,
    scaling: { vitality: 'A', defense: 'B' },
    passives: [
      'Lvl. 4: Base Attack moves the Bestial Wheel to Heavy Mask.',
      'Lvl. 10: Heavy Mask gives 1 Shield to all allies.',
      'Lvl: 20: Damage taken are reduced by 50% while in Heavy Mask.'
    ]
  },
  {
    id: '-cannaro-',
    name: ' Cannaro ',
    characterIds: ['monoco'],
    element: 'light',
    basePower: 3648,
    scaling: { agility: 'A', luck: 'B' },
    passives: [
      'Lvl. 4: Free Aim Shots move the Bestial Wheel 1 step forward.',
      'Lvl. 10: 25% increased damage per Mask change this turn.',
      'Lvl: 20: Free Aim shoots deal double damage while in Almighty Mask.'
    ]
  }
];

const WEAPONS: WeaponData[] = [...GUSTAVE_VERSO, ...LUNE, ...MAELLE, ...SCIEL, ...MONOCO];

export default WEAPONS;
