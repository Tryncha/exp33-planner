import { SkillData } from '../types';

const GUSTAVE_SKILLS: SkillData[] = [
  {
    id: 'from-fire',
    name: 'From Fire',
    cost: 4,
    characterId: 'gustave',
    description:
      "Deals medium single target damage. 3 hits. Uses weapon's element. Heals  self by 20% if the target Burns"
  },
  {
    id: 'lumiere-assault',
    name: 'Lumiere Assault',
    cost: 3,
    characterId: 'gustave',
    description:
      "Deals low single target damage. 5 hits. Uses weapon's element. Critical Hits  generate 1 Additional Charge ."
  },
  {
    id: 'marking-shot',
    name: 'Marking Shot',
    cost: 2,
    characterId: 'gustave',
    description: 'Deals low single target Lightning damage. 1 hit. Applies Mark'
  },
  {
    id: 'overcharge',
    name: 'Overcharge',
    cost: 4,
    characterId: 'gustave',
    description: 'High Lightning damage based on the amount of Charges . 1 hit. Can Break'
  },
  {
    id: 'powerful',
    name: 'Powerful',
    cost: 3,
    characterId: 'gustave',
    description: 'Applies Powerful  to 1-3 allies, increasing the damage they deal for 3 turns. Gives 0 to 2 Charges'
  },
  {
    id: 'recovery',
    name: 'Recovery',
    cost: 3,
    characterId: 'gustave',
    description: 'Recovers  50% Health and dispels Status Effects. Gives 0-2 Charges'
  },
  {
    id: 'shatter',
    name: 'Shatter',
    cost: 5,
    characterId: 'gustave',
    description:
      'Deals High Lightning damage to all enemies. 1 hit. Can Break . If a target is Broken  by the hit, Overcharge is fully Charged .'
  },
  {
    id: 'strike-storm',
    name: 'Strike Storm',
    cost: 7,
    characterId: 'gustave',
    description:
      "Deals very high single target damage. 6 hits. Uses Weapon's element. Critical Hits  generate 2 additional Charges"
  }
];

const LUNE_SKILLS: SkillData[] = [
  {
    id: 'crippling-tsunami',
    name: 'Crippling Tsunami',
    cost: 5,
    characterId: 'lune',
    description:
      'Deals medium Ice damage to all enemies. 1 hit. Applies Slow  for 3 turns. Consumes    for greatly increased damage.'
  },
  {
    id: 'crustal-crush',
    name: 'Crustal Crush',
    cost: 7,
    characterId: 'lune',
    description: 'Deals High single target Earth and Break damage . 5 hits. Consumes  : Increased Damage.'
  },
  {
    id: 'earth-rising',
    name: 'Earth Rising',
    cost: 3,
    characterId: 'lune',
    description: 'Deals low Earth damage to all enemies. 1 hit. Consumes  for increased damage.'
  },
  {
    id: 'electrify',
    name: 'Electrify',
    cost: 1,
    characterId: 'lune',
    description:
      'Deals low single target Lightning damage. 3 hits. Critical Hits  trigger an additional hit. Consumes   to generate one Light Stain'
  },
  {
    id: 'elemental-genesis',
    name: 'Elemental Genesis',
    cost: 4,
    characterId: 'lune',
    description:
      'Deals extreme damage to all enemies. 8 hits. Each hit deals damage in a random element. Can only be cast with'
  },
  {
    id: 'elemental-trick',
    name: 'Elemental Trick',
    cost: 3,
    characterId: 'lune',
    description:
      'Deals low single target Ice, Fire, Lightning, and Earth damage. 4 hits. Critical Hits  generate the corresponding Stain.'
  },
  {
    id: 'fire-rage',
    name: 'Fire Rage',
    cost: 5,
    characterId: 'lune',
    description:
      'Deals increasingly high Fire damage to all enemies every turn until Lune receives damage. Stuns self if interrupted. Consumes  : Increased Damage'
  },
  {
    id: 'healing-light',
    name: 'Healing Light',
    cost: 3,
    characterId: 'lune',
    description: 'Heals  the targeted Ally and dispels Status Effects. Consumes : Costs 0 AP'
  },
  {
    id: 'hell',
    name: 'Hell',
    cost: 9,
    characterId: 'lune',
    description:
      'Deals very high Fire damage that applies 5 Burn  per hit to all enemies. 2 hits. Deals self-damage if failed. Consumes   : Greatly increased damage.'
  },
  {
    id: 'ice-lance',
    name: 'Ice Lance',
    cost: 4,
    characterId: 'lune',
    description:
      'Deals medium single target Ice damage that Slows  the target. 1 Hit. Consumes  to deal increased damage.'
  },
  {
    id: 'immolation',
    name: 'Immolation',
    cost: 2,
    characterId: 'lune',
    description:
      'Deals low single target Fire damage and 3 Burn . 1 hit. Applies 2 more Burns  if the target is Marked . Consumes  for increased damage.'
  },
  {
    id: 'lightning-dance',
    name: 'Lightning Dance',
    cost: 7,
    characterId: 'lune',
    description:
      'Deals very high single target Lightning damage. 6 hits. Critical Hits  trigger an additional hit. Consumes   : Greatly increased damage.'
  },
  {
    id: 'mayhem',
    name: 'Mayhem',
    cost: 3,
    characterId: 'lune',
    description: 'Consumes all Stains to deal high elemental damage to the target. Can Break  if 4 Stains are consumed.'
  },
  {
    id: 'rebirth',
    name: 'Rebirth',
    cost: 5,
    characterId: 'lune',
    description: 'Revives an ally with 30-70% Health and 2 additional AP. Consumes : Costs 0 AP.'
  },
  {
    id: 'revitalization',
    name: 'Revitalization',
    cost: 5,
    characterId: 'lune',
    description:
      'Heals  1-3 allies by 40-60% Health. Consumes  to also apply Regen  that heals on turn start for 3 turns.'
  },
  {
    id: 'rockslide',
    name: 'Rockslide',
    cost: 5,
    characterId: 'lune',
    description: 'Deals medium single target Earth damage. 2 hits. Can Break  Consumes  for greatly increased damage.'
  },
  {
    id: 'storm-caller',
    name: 'Storm Caller',
    cost: 6,
    characterId: 'lune',
    description:
      'All enemies receive medium Lightning damage at the end of their turn, and low Lightning damage when they receive damage. Duration: 3 turns. Consumes   for double thunder strikes on turn end.'
  },
  {
    id: 'terraquake',
    name: 'Terraquake',
    cost: 5,
    characterId: 'lune',
    description:
      'Deals low Earth damage and Break damage  to all enemies every turn. Also increases all Break damage  received by 50%. Duration: 3 turns. Consumes   to increase the Duration to 5 turns.'
  },
  {
    id: 'thermal-transfer',
    name: 'Thermal Transfer',
    cost: 2,
    characterId: 'lune',
    description:
      'Deals low single target Ice damage. 2 hits. Gains 4 AP if target is Burning  Consumes  : Play a second turn.'
  },
  {
    id: 'thunderfall',
    name: 'Thunderfall',
    cost: 5,
    characterId: 'lune',
    description:
      'Deals medium Lightning damage to random enemies. 2-6 hits. Critical Hits  trigger an additional hit. Consumes   for increased damage.'
  },
  {
    id: 'typhoon',
    name: 'Typhoon',
    cost: 8,
    characterId: 'lune',
    description:
      'On turn start, deals high Ice damage to all enemies and Heals  allies. Consumes  : Duration increased from 3 to 5 turns.'
  },
  {
    id: 'wildfire',
    name: 'Wildfire',
    cost: 4,
    characterId: 'lune',
    description: 'Deals medium Fire damage to all enemies. 1 hit. Applies 3 Burn  Consumes  : Increased Damage'
  }
];

const MAELLE_SKILLS: SkillData[] = [
  {
    id: 'breaking-rules',
    name: 'Breaking Rules',
    cost: 3,
    characterId: 'maelle',
    description:
      "Deals low single target Physical damage. 2 hits. Destroys all target's Shields  Gains 1 AP  per Shield destroyed. If target us Defenceless , play a second turn."
  },
  {
    id: 'burning-canvas',
    name: 'Burning Canvas',
    cost: 5,
    characterId: 'maelle',
    description:
      'Change Stance: Offensive Deals high single target Void damage. 5 hits. Applies 1 Burn  per hit. Damage increased for each Burn  on the targe'
  },
  {
    id: 'combustion',
    name: 'Combustion',
    cost: 4,
    characterId: 'maelle',
    description: 'Deals medium single target Physical Damage. 2 Hits. Consumes up to 10 Burn  for increased damage.'
  },
  {
    id: 'degagement',
    name: 'Degagement',
    cost: 2,
    characterId: 'maelle',
    description: 'Deals low single target Fire damage. 1 hit. Target becomes weak to Fire damage for 2 turns.'
  },
  {
    id: 'egide',
    name: 'Egide',
    cost: 3,
    characterId: 'maelle',
    description:
      'Protects allies by taking damage in their place, for 2 turns. Duration is extended by 1 on gaining Shell'
  },
  {
    id: "fencer's-flurry",
    name: "Fencer's Flurry",
    cost: 4,
    characterId: 'maelle',
    description: "Deals medium damage to all enemies. 1 hit. Uses weapon's element. Applies Defenceless  for 1 turn."
  },
  {
    id: 'fleuret-fury',
    name: 'Fleuret Fury',
    cost: 6,
    characterId: 'maelle',
    description:
      'Deals high single target Physical damage. 3 hits. If in Virtuose Stance, stay in Virtuose Stance Can Break'
  },
  {
    id: 'guard-down',
    name: 'Guard Down',
    cost: 3,
    characterId: 'maelle',
    description: 'Change Stance: Offensive Applies Defenceless  to all enemies for 3 turns.'
  },
  {
    id: 'guard-up',
    name: 'Guard Up',
    cost: 3,
    characterId: 'maelle',
    description: 'Applies Shell , reducing damage taken, to up to 3 allies for 3 turns.'
  },
  {
    id: "gustave's-homage",
    name: "Gustave's Homage",
    cost: 8,
    characterId: 'maelle',
    description:
      "Deals high single target Lightning damage. 8 hits. Increased damage to Marked  targets, Doesn't remove Mark."
  },
  {
    id: 'last-chance',
    name: 'Last Chance',
    cost: 1,
    characterId: 'maelle',
    description: 'Reduces self-Health to 1 but refills all AP  Switches to Virtuose Stance'
  },
  {
    id: 'mezzo-forte',
    name: 'Mezzo Forte',
    cost: 1,
    characterId: 'maelle',
    description: 'Reapplies current stance and gives 2-4 AP'
  },
  {
    id: 'momentum-strike',
    name: 'Momentum Strike',
    cost: 7,
    characterId: 'maelle',
    description:
      "Deals high single target damage. 1 hit. Uses weapon's element. Increased damage to Marked  targets. Virtuose Stance : Costs 4 AP"
  },
  {
    id: 'offensive-switch',
    name: 'Offensive Switch',
    cost: 1,
    characterId: 'maelle',
    description: "Deals low single target damage and applies Defenceless  for 3 turns. 1 hit. Uses weapon's element."
  },
  {
    id: 'payback',
    name: 'Payback',
    cost: 9,
    characterId: 'maelle',
    description:
      'Deals very high single target Physical damage. 1 hit. Reduced AP  cost for each attack parried since last turn. Can Break'
  },
  {
    id: 'percee',
    name: 'Percee',
    cost: 5,
    characterId: 'maelle',
    description:
      'Deals medium single target Physical damage. 1 hit. Increased damage to Marked  targets. Virtuose Stance : Costs 2 AP'
  },
  {
    id: 'phantom-strike',
    name: 'Phantom Strike',
    cost: 7,
    characterId: 'maelle',
    description:
      'Change Stance: Defensive Deals very high Void damage to all enemies. 4 hits. Also gives +35% of a Gradient Charge.'
  },
  {
    id: 'pyrolyse',
    name: 'Pyrolyse',
    cost: 9,
    characterId: 'maelle',
    description:
      'Deals extreme single target Fire damage. 3 hits. Applies 5 Burn  per hit. Offensive Stance: Applies 2 more Burn  per hit.'
  },
  {
    id: 'rain-of-fire',
    name: 'Rain of Fire',
    cost: 5,
    characterId: 'maelle',
    description:
      'Deals medium single target Fire damage. 2 hits. Applies 3 Burn  per hit. Defensive Stance: applies 2 more Burn  per hit.'
  },
  {
    id: 'revenge',
    name: 'Revenge',
    cost: 5,
    characterId: 'maelle',
    description:
      'Deals high single target Fire damage. 1 hit. Damage increased for each hit received since the previous turn. Can Break'
  },
  {
    id: 'spark',
    name: 'Spark',
    cost: 3,
    characterId: 'maelle',
    description: 'Deals low single target Fire damage. 1 hit. Applies 3 Burn  Offensive Stance: Applies 2 more Burn'
  },
  {
    id: 'stendhal',
    name: 'Stendhal',
    cost: 8,
    characterId: 'maelle',
    description:
      'Change Stance: Stanceless Deals extreme single target Void damage. 1 hit. Removes self-Shields  and self applies Defenceless'
  },
  {
    id: 'swift-stride',
    name: 'Swift Stride',
    cost: 3,
    characterId: 'maelle',
    description:
      'Deals low single target Physical damage. 1 hit. Switches to Virtuose Stance  if target is Burning  Regains 0 to 2 AP'
  },
  {
    id: 'sword-ballet',
    name: 'Sword Ballet',
    cost: 9,
    characterId: 'maelle',
    description: "Deals extreme single target damage. 5 hits. Uses weapon's element. Critical Hitsdeal double damage."
  }
];

const SCIEL_SKILLS: SkillData[] = [
  {
    id: 'all-set',
    name: 'All Set',
    cost: 6,
    characterId: 'sciel',
    description: 'Applies Shell , Powerful , and Rush  to all allies.'
  },
  {
    id: 'bad-omen',
    name: 'Bad Omen',
    cost: 3,
    characterId: 'sciel',
    description: 'Deals low Dark damage to all enemies. 2 hits. Applies 2 Foretell  per hit.'
  },
  {
    id: 'card-weaver',
    name: 'Card Weaver',
    cost: 3,
    characterId: 'sciel',
    description:
      "Deals low single target Physical damage. 1 hit. Propagates target's Foretell  to all enemies. Plays a second turn."
  },
  {
    id: 'dark-cleansing',
    name: 'Dark Cleansing',
    cost: 0,
    characterId: 'sciel',
    description: "Cleanses an ally of their Status Effects and propogates the target's buff to all allies."
  },
  {
    id: 'dark-wave',
    name: 'Dark Wave',
    cost: 6,
    characterId: 'sciel',
    description: 'Deals high Dark damage to all enemies. 3 hits. Consumes all Foretell  to deal additional damage.'
  },
  {
    id: 'delaying-slash',
    name: 'Delaying Slash',
    cost: 5,
    characterId: 'sciel',
    description:
      "Deals medium single targe damage. 2 hits. Uses weapon's element. Consumes Foretell  to increase damage and delay target's turn."
  },
  {
    id: 'final-path',
    name: 'Final Path',
    cost: 9,
    characterId: 'sciel',
    description: 'Deal extreme single target Dark damage and applies 10 Foretell  1 hit. Can Break'
  },
  {
    id: 'firing-shadow',
    name: 'Firing Shadow',
    cost: 3,
    characterId: 'sciel',
    description: 'Deals low Dark damage to all enemies. 3 hits. Consumes 1 Foretell  per hit for increased damage.'
  },
  {
    id: 'focused-foretell',
    name: 'Focused Foretell',
    cost: 2,
    characterId: 'sciel',
    description:
      'Deals medium single target Physical damage. 1 hit. Applies 2 Foretell  Applies 3 additional Foretell  if target has 0 Foretell'
  },
  {
    id: "fortune's-fury",
    name: "Fortune's Fury",
    cost: 5,
    characterId: 'sciel',
    description: 'Targeted ally deals double damage for 1 turn.'
  },
  {
    id: 'grim-harvest',
    name: 'Grim Harvest',
    cost: 5,
    characterId: 'sciel',
    description:
      'Deals medium single target Dark damage. 1 hit. Heals  all allies by 30% Health. Consumes Foretell  to increase Heal  by 5% per Foretell'
  },
  {
    id: 'harvest',
    name: 'Harvest',
    cost: 3,
    characterId: 'sciel',
    description:
      "Deals medium single target damage. 1 hit. Uses weapon's element.  Heals  self by 40% Health. Consumes all Foretell  to increase Heal  by 5% per Foretell"
  },
  {
    id: 'intervention',
    name: 'Intervention',
    cost: 5,
    characterId: 'sciel',
    description: 'Targeted ally plays immediately and gains 4 AP'
  },
  {
    id: 'marking-card',
    name: 'Marking Card',
    cost: 3,
    characterId: 'sciel',
    description: 'Deals medium single target Dark damge. 2 hits. Applies Mark  to the target. Applies 3 Foretell'
  },
  {
    id: 'our-sacrifice',
    name: 'Our Sacrifice',
    cost: 4,
    characterId: 'sciel',
    description:
      "Deals extreme Dark damage to all enemies. 1 hit. Absorbs allies' Health and enemies'  Foretell  to deal increased damage."
  },
  {
    id: 'phantom-blade',
    name: 'Phantom Blade',
    cost: 5,
    characterId: 'sciel',
    description:
      'Deals high single target Dark damage. 1 hit. Consumes all Foretell  to deal additional damage. Can Break'
  },
  {
    id: 'plentiful-harvest',
    name: 'Plentiful Harvest',
    cost: 4,
    characterId: 'sciel',
    description:
      'Deals medium single target Physical damage. 2 hits. Consumes all Foretell  on a target and gives 1 AP  to a party member for each Foretell  consumed.'
  },
  {
    id: 'rush',
    name: 'Rush',
    cost: 3,
    characterId: 'sciel',
    description: 'Applies Rush  to 1-3 allies, increasing their speed for 3 turns.'
  },
  {
    id: 'sealed-fate',
    name: 'Sealed Fate',
    cost: 4,
    characterId: 'sciel',
    description:
      "Deals high single target damage. 5-7 hits. Uses weapon's element. Each hit can consume 1 Foretell  to deal 200% more damage. Critical Hitsdon't remove the Foretell  but still gets the damage increase."
  },
  {
    id: 'searing-bond',
    name: 'Searing Bond',
    cost: 4,
    characterId: 'sciel',
    description:
      'Deals medium single target Dark damage. 1 hit. Applies 5 Foretell  Also deals damage and applies Foretell  to every other Burning  enemies.'
  },
  {
    id: 'spectral-sweep',
    name: 'Spectral Sweep',
    cost: 7,
    characterId: 'sciel',
    description:
      "Deals medium single target damage. 2 to 6 hits. Uses weapon's element. Applies 1 Foretell  per hit. Critical Hits apply an additional Foretell"
  },
  {
    id: 'twilight-dance',
    name: 'Twilight Dance',
    cost: 9,
    characterId: 'sciel',
    description:
      'Deals extreme single target Dark damage. 4 hits. During Twilight , extends Twilight  duration by 1 turn. Consumes all Foretell  to deal additional damage.'
  },
  {
    id: 'twilight-slash',
    name: 'Twilight Slash',
    cost: 2,
    characterId: 'sciel',
    description: 'Deals low single target Dark damage. 1 hit. Consumes all Foretell  to deal additional damage.'
  }
];

const VERSO_SKILLS: SkillData[] = [
  {
    id: 'ascending-assault',
    name: 'Ascending Assault',
    cost: 5,
    characterId: 'verso',
    description:
      "Deals low single target damage. 1 hit. Uses weapon's element. Increase damage at each cast. : Costs 2 AP"
  },
  {
    id: 'assault-zero',
    name: 'Assault Zero',
    cost: 3,
    characterId: 'verso',
    description: 'Critical Hits generate 1 additional Perfection  : Increased damage.'
  },
  {
    id: 'berserk-slash',
    name: 'Berserk Slash',
    cost: 4,
    characterId: 'verso',
    description:
      'Deals medium single target Physical damage. 3 hits. Damage is increased for each health Verso is missing. : Increased damage'
  },
  {
    id: 'blitz',
    name: 'Blitz',
    cost: 3,
    characterId: 'verso',
    description:
      'Deals low single target Physical damage. 1 hit. Plays a second time. Kills non-boss enemies with less than 10% health. : Increased damage.'
  },
  {
    id: 'burden',
    name: 'Burden',
    cost: 1,
    characterId: 'verso',
    description: 'Removes all Status Effects from all allies and applies them to Verso. Gains 1 Rank.'
  },
  {
    id: 'defiant-strike',
    name: 'Defiant Strike',
    cost: 3,
    characterId: 'verso',
    description:
      'Deals high single target Physical damage that applies Mark  2 hits. Costs 30% of current Health. : Increased damage.'
  },
  {
    id: 'end-bringer',
    name: 'End Bringer',
    cost: 9,
    characterId: 'verso',
    description:
      'Deals extreme single target Physical damage. 6 hits. Increased damage if the target is Stunned  : Can reapply Stun'
  },
  {
    id: 'follow-up',
    name: 'Follow Up',
    cost: 5,
    characterId: 'verso',
    description:
      'Deals medium single target Light damage. 1 hit. Damage increased for each Free Aim shot this turn, up to 10 times. : Costs 2 AP'
  },
  {
    id: 'from-fire',
    name: 'From Fire',
    cost: 4,
    characterId: 'verso',
    description:
      "Deals medium single target damage. 3 hits. Uses weapon's element. Heals  self by 20% Health if the target Burns  : Increased damage."
  },
  {
    id: 'leadership',
    name: 'Leadership',
    cost: 3,
    characterId: 'verso',
    description: 'Reduces current Rank. Gives 2-4 AP  to other allies. : +1 more AP  to other allies'
  },
  {
    id: 'light-holder',
    name: 'Light Holder',
    cost: 4,
    characterId: 'verso',
    description: 'Medium single target Light damage. 5 hits. At completion, gains 1 Rank. : +2 AP'
  },
  {
    id: 'marking-shot',
    name: 'Marking Shot',
    cost: 2,
    characterId: 'verso',
    description: "Deals low single target damage. 1 hit. Uses weapon's element. Applies Mark  : Increased damage"
  },
  {
    id: 'overload',
    name: 'Overload',
    cost: 6,
    characterId: 'verso',
    description: 'Increases Rank to  and refills all AP  but sets self-Health to 1.'
  },
  {
    id: 'paradigm-shift',
    name: 'Paradigm Shift',
    cost: 1,
    characterId: 'verso',
    description: 'Deals low Physical single target damage and gives 1-3 AP  back. 3 hits. :  +1 AP'
  },
  {
    id: 'perfect-break',
    name: 'Perfect Break',
    cost: 7,
    characterId: 'verso',
    description: 'Deals very high single target Light damage. 1 hit.  Can Break  Rank  on Break  : Costs 5 AP'
  },
  {
    id: 'perfect-recovery',
    name: 'Perfect Recovery',
    cost: 3,
    characterId: 'verso',
    description:
      'Recovers  50% Health and dispels Status Effects. Gives 0-2 Perfection  : Increased heal to 100% Health.'
  },
  {
    id: 'phantom-stars',
    name: 'Phantom Stars',
    cost: 9,
    characterId: 'verso',
    description: 'Deals extreme Light damage to all enemies. 5 hits. Can Break  : Costs 5 AP'
  },
  {
    id: 'powerful',
    name: 'Powerful',
    cost: 3,
    characterId: 'verso',
    description:
      'Applies Powerful  to 1-3 Allies, increasing damage they deal for 3 turns. Gives 0-2 Perfection  : Duration increased to 5 turns.'
  },
  {
    id: 'purification',
    name: 'Purification',
    cost: 5,
    characterId: 'verso',
    description: 'Deals single target medium Light damage. 2 hits. Dispels self Status Effects. : Increased damage.'
  },
  {
    id: 'quick-strike',
    name: 'Quick Strike',
    cost: 2,
    characterId: 'verso',
    description: 'Deals low single target Physical damage. 1 hit. : Gives more Perfection'
  },
  {
    id: 'radiant-slash',
    name: 'Radiant Slash',
    cost: 2,
    characterId: 'verso',
    description: 'Deals low Light damage to all enemies. 1 hit. Can Break  : Increased damage.'
  },
  {
    id: 'speed-burst',
    name: 'Speed Burst',
    cost: 6,
    characterId: 'verso',
    description:
      'Deals high single target Light damage. 5 hits. Damage increased by Speed difference with the target. : Increased damage'
  },
  {
    id: 'steeled-strike',
    name: 'Steeled Strike',
    cost: 9,
    characterId: 'verso',
    description:
      'After 1 turn, deals extreme single target Physical damage. 13 hits. Interrupted if any damage taken. : Increased damage.'
  },
  {
    id: 'strike-storm',
    name: 'Strike Storm',
    cost: 7,
    characterId: 'verso',
    description:
      "Deals very high single target damage. 5 hits. Uses weapon's element. Critical Hits generate 2 additional Perfection  : Increased damage"
  }
];

const MONOCO_SKILLS: SkillData[] = [
  {
    id: 'abbest-wind',
    name: 'Abbest Wind',
    cost: 2,
    characterId: 'monoco',
    description: 'Deals low single target Physical damage. 1 hit. Plays a second turn.  Agile Mask: Costs 0 AP'
  },
  {
    id: 'aberration-light',
    name: 'Aberration Light',
    cost: 7,
    characterId: 'monoco',
    description:
      'Deals high Light damage to all enemies. 2 hits. Applies 4 Burn  per hit.  Agile Mask: Applies 2 more Burn  per hit.'
  },
  {
    id: 'ballet-charm',
    name: 'Ballet Charm',
    cost: 2,
    characterId: 'monoco',
    description:
      'Deals low single target Light damage. 1 hit. Applies Powerless  to the taret for 3 turns.  Caster Mask: Increased damage.'
  },
  {
    id: 'benisseur-mortar',
    name: 'Benisseur Mortar',
    cost: 5,
    characterId: 'monoco',
    description:
      'Deals medium single target Ice damage. 3 hits. Change to  Almighty Mask if target is Marked   Caster Mask: Increased damage.'
  },
  {
    id: 'braseleur-smash',
    name: 'Braseleur Smash',
    cost: 4,
    characterId: 'monoco',
    description:
      'Deals medium finslge target Fire damage and applies 3 Burn . 2 hits.  Balanced Mask: Increased damage.'
  },
  {
    id: 'boucheclier-fortify',
    name: 'Boucheclier Fortify',
    cost: 3,
    characterId: 'monoco',
    description: 'Applies Shell  to 1-3 Allies for 3 turns.  Heavy Mask: Also applies 1 Shield'
  },
  {
    id: 'bruler-bash',
    name: 'Bruler Bash',
    cost: 4,
    characterId: 'monoco',
    description: 'Deals medium single target Physical damage. 3 hits. Can Break   Caster Mask: Increased damage.'
  },
  {
    id: 'chalier-combo',
    name: 'Chalier Combo',
    cost: 7,
    characterId: 'monoco',
    description:
      'Deals high single target Physical damage. 6 hits. Interrupted if failed.  Balanced Mask: Increased damage.'
  },
  {
    id: 'chapelier-slash',
    name: 'Chapelier Slash',
    cost: 7,
    characterId: 'monoco',
    description: 'Deals high Physical damage to all enemies. 3 hits. Applies Mark   Agile Mask: Increased damage.'
  },
  {
    id: 'chevaliere-ice',
    name: 'Chevaliere Ice',
    cost: 6,
    characterId: 'monoco',
    description:
      'Deals high Ice damage to all enemies. 3 hits. Applies Slow  to the targets for 3 turns.  Balanced Mask: Increased damage.'
  },
  {
    id: 'chevaliere-piercing',
    name: 'Chevaliere Piercing',
    cost: 3,
    characterId: 'monoco',
    description:
      'Deals single target Physical damage through Shields . 6 hits. Damage increased for each Shield  on the target.  Agile Mask: Increased damage.'
  },
  {
    id: 'chevaliere-thrusts',
    name: 'Chevaliere Thrusts',
    cost: 7,
    characterId: 'monoco',
    description:
      'Deals high Physical damage to all enemis. 3 hits. Critical Hits deal double damage.  Heavy Mask: Increased damage.'
  },
  {
    id: 'clair-enfeeble',
    name: 'Clair Enfeeble',
    cost: 5,
    characterId: 'monoco',
    description:
      'Deals medium Light damage to all enemies. 1 hit. Applies Powerless  for 3 turns.  Balanced Mask: Increased damage.'
  },
  {
    id: 'contorsionniste-blast',
    name: 'Contorsionniste Blast',
    cost: 6,
    characterId: 'monoco',
    description:
      'Deals medium Physical damage to all enemies. 1 hit. Heals  all allies by 10% Health for each enemy hit.  Balanced Mask: Increased damage.'
  },
  {
    id: 'creation-void',
    name: 'Creation Void',
    cost: 9,
    characterId: 'monoco',
    description:
      'Deals extreme Void damage to random targets. 3 hits. More damage if the same target is hit multiple times.  Caster Mask: Increased damage'
  },
  {
    id: 'cruler-barrier',
    name: 'Cruler Barrier',
    cost: 4,
    characterId: 'monoco',
    description: 'Applies 1-2 Shields  to the target.  Heavy Mask: Gives 2 AP  to the target.'
  },
  {
    id: 'cultist-blood',
    name: 'Cultist Blood',
    cost: 3,
    characterId: 'monoco',
    description:
      'Deals medium Dark damage to all enemies. 3 hits. Sacrifices 90% Health to increase damage.  Heavy Mask: Increased damage.'
  },
  {
    id: 'cultist-slashes',
    name: 'Cultist Slashes',
    cost: 5,
    characterId: 'monoco',
    description:
      'Deals medium single target Dark damage. 3 hits. Deals more damage the less Health Monoco has.  Agile Mask: Increased Damage.'
  },
  {
    id: 'danseuse-waltz',
    name: 'Danseuse Waltz',
    cost: 8,
    characterId: 'monoco',
    description:
      'Deals high single target Fire damage. 3 hits. Deals more damage against Burning  targets.  Balanced Mask: Increased damage.'
  },
  {
    id: 'demineur-thunder',
    name: 'Demineur Thunder',
    cost: 2,
    characterId: 'monoco',
    description:
      'Deals low single target Lightning damage. 1 hit. Deals extra Break Damage   Caster Mask: Increased Break damage.'
  },
  {
    id: 'duallist-storm',
    name: 'Duallist Storm',
    cost: 8,
    characterId: 'monoco',
    description: 'Deals extreme single target Physical damage. 4 hits. Can Break   Almighty Mask: Increased damage.'
  },
  {
    id: 'echassier-stabs',
    name: 'Echassier Stabs',
    cost: 4,
    characterId: 'monoco',
    description:
      'Deals medium single target Physical damage. 2 hits. Second hit applies Mark  to the target.  Agile Mask: Increased damage.'
  },
  {
    id: 'eveque-spear',
    name: 'Eveque Spear',
    cost: 6,
    characterId: 'monoco',
    description:
      'Deals high single target Earth damage and applies Powerless  for 3 turns. 1 hit.  Heavy Mask: Increased damage.'
  },
  {
    id: 'gault-fury',
    name: 'Gault Fury',
    cost: 3,
    characterId: 'monoco',
    description: 'Deals low single target Physical damage. 4 hits. Applies Mark   Balanced Mask: Increased damage.'
  },
  {
    id: 'glaise-earthquakes',
    name: 'Glaise Earthquakes',
    cost: 4,
    characterId: 'monoco',
    description:
      'Deals medium Earth damage to all enemies. 3 hits. Applies Powerful  to self.  Heavy Mask: applies Powerful  to all allies.'
  },
  {
    id: 'grosse-tete-whack',
    name: 'Grosse Tete Whack',
    cost: 6,
    characterId: 'monoco',
    description:
      'Deals high single target Physical damage. 5 hits. Applies Defenceless  for 3 turns.  Heavy Mask: Increased damage.'
  },
  {
    id: 'hexga-crush',
    name: 'Hexga Crush',
    cost: 5,
    characterId: 'monoco',
    description:
      'Deals medium single target Earth damage. 2 hits. Applies Defenceless  to the target for 3 turns.  Heavy Mask: Increased damage.'
  },
  {
    id: 'jar-lampstorm',
    name: 'Jar Lampstorm',
    cost: 5,
    characterId: 'monoco',
    description: 'Deals medium Physical damage to all enemies. 4 hits.  Heavy Mask: Increased damage.'
  },
  {
    id: 'lampmaster-light',
    name: 'Lampmaster Light',
    cost: 5,
    characterId: 'monoco',
    description:
      'Deals high Light damage to all enemies. 1 hit. Increased damage at each cast.  Almighty Mask: Increased damage.'
  },
  {
    id: 'lancelier-impale',
    name: 'Lancelier Impale',
    cost: 2,
    characterId: 'monoco',
    description:
      'Deals low single target Ice damage. 1 hit. Slows  the target for 3 turns.  Agile Mask: Increased damage.'
  },
  {
    id: 'luster-slices',
    name: 'Luster Slices',
    cost: 3,
    characterId: 'monoco',
    description:
      'Deals low single target Physical damage. 3 hits. Applies Rush  to self for 3 turns.  Agile Mask: Increased damage.'
  },
  {
    id: 'moissonneuse-vendange',
    name: 'Moissonneuse Vendange',
    cost: 5,
    characterId: 'monoco',
    description: 'Deals High single target Physical damage. 3 hits. Can Break   Balanced Mask: Increased damage.'
  },
  {
    id: 'obscur-sword',
    name: 'Obscur Sword',
    cost: 6,
    characterId: 'monoco',
    description:
      'Deals high single target Dark damage. 5 hits. Deals more damage against Powerless  targets.  Heavy Mask: Increased damage.'
  },
  {
    id: 'orphelin-cheers',
    name: 'Orphelin Cheers',
    cost: 3,
    characterId: 'monoco',
    description: 'Applies Powerful  to 1-3 Allies.  Caster Mask: Also gives 3 AP  to targets.'
  },
  {
    id: 'pelerin-heal',
    name: 'Pelerin Heal',
    cost: 5,
    characterId: 'monoco',
    description: 'Applies Regen  to all allies.  Caster Mask: also Heals  40% Health.'
  },
  {
    id: 'portier-crash',
    name: 'Portier Crash',
    cost: 8,
    characterId: 'monoco',
    description: 'Deals high Physical damage to all enemies. 1 hit. Can Break   Heavy Mask: Increased damage.'
  },
  {
    id: 'potier-energy',
    name: 'Potier Energy',
    cost: 4,
    characterId: 'monoco',
    description: 'Gives 1-3 AP  to all allies.  Caster Mask: Gives 1 additional AP'
  },
  {
    id: 'ramasseur-bonk',
    name: 'Ramasseur Bonk',
    cost: 2,
    characterId: 'monoco',
    description:
      "Deals low single target Dark damage. 1 hit. Can Break   Agile Mask: fills 20% of the target's Break Bar."
  },
  {
    id: 'rocher-hammering',
    name: 'Rocher Hammering',
    cost: 3,
    characterId: 'monoco',
    description: 'Deals medium single target Physical damage. 4 hits. Can Break   Heavy Mask: Increased damage.'
  },
  {
    id: 'sakapatate-estoc',
    name: 'Sakapatate Estoc',
    cost: 3,
    characterId: 'monoco',
    description:
      'Deals low single target Lightning damage. 1 hit. Deals more damage if the target is Stunned   Balanced Mask: Increased damage.'
  },
  {
    id: 'sakapatate-explosion',
    name: 'Sakapatate Explosion',
    cost: 4,
    characterId: 'monoco',
    description:
      'Deals medium Lightning damage to random enemies. 3 hits. Critical Hits trigger an additional hit.  Caster Mask: Increased damage.'
  },
  {
    id: 'sakapatate-fire',
    name: 'Sakapatate Fire',
    cost: 9,
    characterId: 'monoco',
    description: 'Deals extreme Fire to all enemies. 3 hits. Apply 3 Burn  per hit.  Almighty Mask: Increased damage.'
  },
  {
    id: 'sakapatate-slam',
    name: 'Sakapatate Slam',
    cost: 7,
    characterId: 'monoco',
    description:
      'Deals high Physical damage to all enemies. 1 hit. Increased damage to Marked  targets.  Heavy Mask: Increased damage.'
  },
  {
    id: 'sapling-absorption',
    name: 'Sapling Absorption',
    cost: 6,
    characterId: 'monoco',
    description:
      'Deals high Dark damage. 3 hits. Recovers  5% Health on hit.  Caster Mask: Increased damage and double Heal'
  },
  {
    id: 'stalact-punches',
    name: 'Stalact Punches',
    cost: 4,
    characterId: 'monoco',
    description: 'Deals medium single target Ice damage. 4 hits. High Break damage   Heavy Mask: Increased damage.'
  },
  {
    id: 'troubadour-trumpet',
    name: 'Troubadour Trumpet',
    cost: 3,
    characterId: 'monoco',
    description: 'Applies a random buff to 1 to 3 allies.  Caster Mask: applies a second random buff.'
  }
];

const SKILLS = [
  ...GUSTAVE_SKILLS,
  ...LUNE_SKILLS,
  ...MAELLE_SKILLS,
  ...SCIEL_SKILLS,
  ...VERSO_SKILLS,
  ...MONOCO_SKILLS
];

export default SKILLS;
