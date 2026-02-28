import { Skill } from '../types';

const GUSTAVE_SKILLS: Skill[] = [
  {
    id: 'from-fire',
    cost: 4,
    characterId: 'gustave',
    en: {
      name: 'From Fire',
      description:
        "Deals medium single target damage. 3 hits. Uses weapon's element. Heals  self by 20% if the target Burns"
    },
    es: {
      name: 'From Fire',
      description:
        "Deals medium single target damage. 3 hits. Uses weapon's element. Heals  self by 20% if the target Burns"
    }
  },
  {
    id: 'lumiere-assault',
    cost: 3,
    characterId: 'gustave',
    en: {
      name: 'Lumiere Assault',
      description:
        "Deals low single target damage. 5 hits. Uses weapon's element. Critical Hits  generate 1 Additional Charge ."
    },
    es: {
      name: 'Lumiere Assault',
      description:
        "Deals low single target damage. 5 hits. Uses weapon's element. Critical Hits  generate 1 Additional Charge ."
    }
  },
  {
    id: 'marking-shot',
    cost: 2,
    characterId: 'gustave',
    en: {
      name: 'Marking Shot',
      description: 'Deals low single target Lightning damage. 1 hit. Applies Mark'
    },
    es: {
      name: 'Marking Shot',
      description: 'Deals low single target Lightning damage. 1 hit. Applies Mark'
    }
  },
  {
    id: 'overcharge',
    cost: 4,
    characterId: 'gustave',
    en: {
      name: 'Overcharge',
      description: 'High Lightning damage based on the amount of Charges . 1 hit. Can Break'
    },
    es: {
      name: 'Overcharge',
      description: 'High Lightning damage based on the amount of Charges . 1 hit. Can Break'
    }
  },
  {
    id: 'powerful',
    cost: 3,
    characterId: 'gustave',
    en: {
      name: 'Powerful',
      description: 'Applies Powerful  to 1-3 allies, increasing the damage they deal for 3 turns. Gives 0 to 2 Charges'
    },
    es: {
      name: 'Powerful',
      description: 'Applies Powerful  to 1-3 allies, increasing the damage they deal for 3 turns. Gives 0 to 2 Charges'
    }
  },
  {
    id: 'recovery',
    cost: 3,
    characterId: 'gustave',
    en: {
      name: 'Recovery',
      description: 'Recovers  50% Health and dispels Status Effects. Gives 0-2 Charges'
    },
    es: {
      name: 'Recovery',
      description: 'Recovers  50% Health and dispels Status Effects. Gives 0-2 Charges'
    }
  },
  {
    id: 'shatter',
    cost: 5,
    characterId: 'gustave',
    en: {
      name: 'Shatter',
      description:
        'Deals High Lightning damage to all enemies. 1 hit. Can Break . If a target is Broken  by the hit, Overcharge is fully Charged .'
    },
    es: {
      name: 'Shatter',
      description:
        'Deals High Lightning damage to all enemies. 1 hit. Can Break . If a target is Broken  by the hit, Overcharge is fully Charged .'
    }
  },
  {
    id: 'strike-storm',
    cost: 7,
    characterId: 'gustave',
    en: {
      name: 'Strike Storm',
      description:
        "Deals very high single target damage. 6 hits. Uses Weapon's element. Critical Hits  generate 2 additional Charges"
    },
    es: {
      name: 'Strike Storm',
      description:
        "Deals very high single target damage. 6 hits. Uses Weapon's element. Critical Hits  generate 2 additional Charges"
    }
  }
];

const LUNE_SKILLS: Skill[] = [
  {
    id: 'crippling-tsunami',
    cost: 5,
    characterId: 'lune',
    stains: ['ice', 'light'],
    en: {
      name: 'Crippling Tsunami',
      description:
        'Deals medium Ice damage to all enemies. 1 hit. Applies Slow for 3 turns. Consumes {Earth}, {Lightning}, {Fire} for greatly increased damage.'
    },
    es: {
      name: 'Tsunami Incapacitante',
      description:
        'Inflige daño de hielo moderado a todos los enemigos. 1 golpe. Aplica lentitud durante 3 turnos. Consume {Tierra}, {Rayo}, {Fuego} para infligir mucho más daño.'
    }
  },
  {
    id: 'crustal-crush',
    cost: 7,
    characterId: 'lune',
    stains: ['earth', 'light'],
    en: {
      name: 'Crustal Crush',
      description: 'Deals high single target Earth and break damage. 5 hits. Consumes {Lightning x2}: Increased damage.'
    },
    es: {
      name: 'Corteza Aplastante',
      description:
        'Inflige mucho daño de tierra y de ruptura a un enemigo. 5 golpes. Consume {Rayo x2}: Aumenta el daño.'
    }
  },
  {
    id: 'earth-rising',
    cost: 3,
    characterId: 'lune',
    stains: ['earth'],
    en: {
      name: 'Earth Rising',
      description: 'Deals low Earth damage to all enemies. 1 hit. Consumes {Lightning} for increased damage.'
    },
    es: {
      name: 'Alzamiento Terrestre',
      description: 'Inflige daño de tierra leve a todos los enemigos. 1 golpe. Consume {Rayo} para infligir más daño.'
    }
  },
  {
    id: 'electrify',
    cost: 1,
    characterId: 'lune',
    stains: ['lightning', 'lightning'],
    en: {
      name: 'Electrify',
      description:
        'Deals low single target Lightning damage. 3 hits. Critical Hits trigger an additional hit. Consumes {Fire} to generate one Light Stain.'
    },
    es: {
      name: 'Electrocución',
      description:
        'Inflige daño de rayo leve a un objetivo. 3 golpes. Los golpes críticos propinan un golpe adicional. Consume {Fuego} para generar un borrón de luz.'
    }
  },
  {
    id: 'elemental-genesis',
    cost: 4,
    characterId: 'lune',
    stains: [],
    en: {
      name: 'Elemental Genesis',
      description:
        'Deals extreme damage to all enemies. 8 hits. Each hit deals damage in a random element. Can only be cast with {Lightning}, {Earth}, {Fire}, {Ice}.'
    },
    es: {
      name: 'Génesis Elemental',
      description:
        'Inflige daño extremo a todos los enemigos. 8 golpes. Cada golpe inflige daño de un elemento al azar. Solo se puede lanzar con {Rayo}, {Tierra}, {Fuego}, {Hielo}.'
    }
  },
  {
    id: 'elemental-trick',
    cost: 3,
    characterId: 'lune',
    stains: [],
    en: {
      name: 'Elemental Trick',
      description:
        'Deals low single target Ice, Fire, Lightning, and Earth damage. 4 hits. Critical Hits generate the corresponding Stain.'
    },
    es: {
      name: 'Truco Elemental',
      description:
        'Inflige daño de hielo, fuego, rayo y tierra leve a un objetivo. 4 golpes. Los golpes críticos generan el borrón correspondiente.'
    }
  },
  {
    id: 'fire-rage',
    cost: 5,
    characterId: 'lune',
    stains: ['fire', 'light'],
    en: {
      name: 'Fire Rage',
      description:
        'Deals increasingly high Fire damage to all enemies every turn until Lune receives damage. Stuns self if interrupted. Consumes {Ice x2}: Increased Damage.'
    },
    es: {
      name: 'Furia Ígnea',
      description:
        'Inflige daño de fuego creciente cada turno a todos los enemigos hasta que Lune sufra daño. Si se interrumpe, aturde a Lune. Consume {Hielo x2}: Aumenta el daño.'
    }
  },
  {
    id: 'healing-light',
    cost: 3,
    characterId: 'lune',
    stains: ['light'],
    en: {
      name: 'Healing Light',
      description: 'Heals the targeted Ally and dispels Status Effects. Consumes {Earth x2}: Costs 0 AP.'
    },
    es: {
      name: 'Luz Curativa',
      description:
        'Cura al aliado seleccionado entre un 30% y un 50% de la vida y disipa las alteraciones de estado. Consume {Tierra x2}: Consume 0 PA.'
    }
  },
  {
    id: 'hell',
    cost: 9,
    characterId: 'lune',
    stains: ['fire', 'light'],
    en: {
      name: 'Hell',
      description:
        'Deals very high Fire damage that applies 5 Burn per hit to all enemies. 2 hits. Deals self-damage if failed. Consumes {Ice}, {Earth}, {Lightning}: Greatly increased damage.'
    },
    es: {
      name: 'Infierno',
      description:
        'Inflige muchísimo daño de fuego y aplica 5 acumulaciones de quemadura por golpe a todos los enemigos. 2 golpes. Si falla, Lune se daña a sí misma. Consume {Hielo}, {Tierra}, {Rayo}: Aumenta mucho el daño.'
    }
  },
  {
    id: 'ice-lance',
    cost: 4,
    characterId: 'lune',
    stains: ['ice', 'light'],
    en: {
      name: 'Ice Lance',
      description:
        'Deals medium single target Ice damage that Slows  the target. 1 Hit. Consumes {Earth} to deal increased damage.'
    },
    es: {
      name: 'Lanza de Hielo',
      description:
        'Inflige daño de hielo moderado a un objetivo y le causa lentitud. 1 golpe. Consume {Tierra} para infligir más daño.'
    }
  },
  {
    id: 'immolation',
    cost: 2,
    characterId: 'lune',
    stains: ['fire'],
    en: {
      name: 'Immolation',
      description:
        'Deals low single target Fire damage and 3 Burn. 1 hit. Applies 2 more Burns if the target is Marked . Consumes {Ice} for increased damage.'
    },
    es: {
      name: 'Inmolación',
      description:
        'Inflige daño de fuego leve y 3 acumulaciones de quemadura a un objetivo. 1 golpe. Aplica 2 acumulaciones más de quemadura si el objetivo está marcado. Consume {Hielo} para infligir más daño.'
    }
  },
  {
    id: 'lightning-dance',
    cost: 7,
    characterId: 'lune',
    stains: ['lightning', 'light'],
    en: {
      name: 'Lightning Dance',
      description:
        'Deals very high single target Lightning damage. 6 hits. Critical Hits trigger an additional hit. Consumes {Earth}, {Ice}, {Fire}: Greatly increased damage.'
    },
    es: {
      name: 'Danza del Relámpago',
      description:
        'Inflige muchísimo daño de rayo a un objetivo. 6 golpes. Los golpes críticos propinan un golpe adicional. Consume {Tierra}, {Hielo}, {Fire}: Aumenta mucho el daño.'
    }
  },
  {
    id: 'mayhem',
    cost: 3,
    characterId: 'lune',
    stains: [],
    en: {
      name: 'Mayhem',
      description:
        'Consumes all Stains to deal high elemental damage to the target. Can Break if 4 Stains are consumed.'
    },
    es: {
      name: 'Caos',
      description:
        'Consume todos los borrones para inflingirle mucho daño elemental al objetivo. Si se consume 4 borrones, puede causar ruptura.'
    }
  },
  {
    id: 'rebirth',
    cost: 5,
    characterId: 'lune',
    stains: ['light'],
    en: {
      name: 'Rebirth',
      description: 'Revives an ally with 30-70% Health and 2 additional AP. Consumes {Lightning x3}: Costs 0 AP.'
    },
    es: {
      name: 'Renacer',
      description: 'Revive a un aliado con un 30% al 70% de vida y 2 PA adicionales. Consume {Rayo x3}: Consume 0 PA.'
    }
  },
  {
    id: 'revitalization',
    cost: 5,
    characterId: 'lune',
    stains: ['light'],
    en: {
      name: 'Revitalization',
      description:
        'Heals 1-3 allies by 40-60% Health. Consumes {Fire x3} to also apply Regen that heals on turn start for 3 turns.'
    },
    es: {
      name: 'Revitalización',
      description:
        'Cura de 1 a 3 aliados entre un 40% y un 60% de vida. Consume {Fuego x3} para aplicar también regeneración, que cura al inicia del turno.'
    }
  },
  {
    id: 'rockslide',
    cost: 5,
    characterId: 'lune',
    stains: ['earth', 'light'],
    en: {
      name: 'Rockslide',
      description:
        'Deals medium single target Earth damage. 2 hits. Can Break Consumes {Lightning}, {Ice}, {Fuego} for greatly increased damage.'
    },
    es: {
      name: 'Alud',
      description:
        'Inflige daño de tierra moderado a un objetivo. 2 golpes. Puede causar ruptura. Consume {Rayo}, {Hielo}, {Fuego} para infligir mucho más daño.'
    }
  },
  {
    id: 'storm-caller',
    cost: 6,
    characterId: 'lune',
    stains: ['lightning', 'light'],
    en: {
      name: 'Storm Caller',
      description:
        'All enemies receive medium Lightning damage at the end of their turn, and low Lightning damage when they receive damage. Duration: 3 turns. Consumes {Fire x2} for double thunder strikes on turn end.'
    },
    es: {
      name: 'Invocación de Tormentas',
      description:
        'Todos los enemigos reciben daño de rayo moerado al final de su turno, y daño de rayo leve cuando reciben daño. Duración: 3 turnos. Consume {Fuego x2} para desatar ataques de trueno dobles al finalizar el turno.'
    }
  },
  {
    id: 'terraquake',
    cost: 5,
    characterId: 'lune',
    stains: ['earth', 'light'],
    en: {
      name: 'Terraquake',
      description:
        'Deals low Earth damage and Break damage to all enemies every turn. Also increases all Break damage received by 50%. Duration: 3 turns. Consumes {Lightning x2} to increase the Duration to 5 turns.'
    },
    es: {
      name: 'Terremoto',
      description:
        'Inflige daño de tierra y de ruptura leve a todos los enemigos cada turno. Además, aumenta todo el daño de ruptura recibido un 50%. Duración: 3 turnos. Consume {Rayo x2} para aumentar la duración a 5 turnos.'
    }
  },
  {
    id: 'thermal-transfer',
    cost: 2,
    characterId: 'lune',
    stains: ['ice'],
    en: {
      name: 'Thermal Transfer',
      description:
        'Deals low single target Ice damage. 2 hits. Gains 4 AP if target is Burning. Consumes {Earth x2}: Play a second turn.'
    },
    es: {
      name: 'Transferencia Térmica',
      description:
        'Inflige daño de hielo leve a un objetivo. 2 golpes. Obtiene 4 PA si el objetivo sufre quemadura. Consume {Tierra x2}: Actúa una segunda vez.'
    }
  },
  {
    id: 'thunderfall',
    cost: 5,
    characterId: 'lune',
    stains: ['lightning', 'light'],
    en: {
      name: 'Thunderfall',
      description:
        'Deals medium Lightning damage to random enemies. 2-6 hits. Critical Hits trigger an additional hit. Consumes {Fire} for increased damage.'
    },
    es: {
      name: 'Tempestad',
      description:
        'Inflige daño de rayo moderado a enemigos al azar. 2 a 6 golpes. Los golpes críticos propinan un golpe adicional. Consume {Fuego} para infligir más daño.'
    }
  },
  {
    id: 'typhoon',
    cost: 8,
    characterId: 'lune',
    stains: ['ice', 'light'],
    en: {
      name: 'Typhoon',
      description:
        'On turn start, deals high Ice damage to all enemies and Heals allies. Consumes {Earth x2}: Duration increased from 3 to 5 turns.'
    },
    es: {
      name: 'Tifón',
      description:
        'Al inicio del turno, inflige mucho daño de hielo a todos los enemigos y cura a los aliados. Consume {Tierra x2}: Aumenta la duración de 3 a 5 turnos.'
    }
  },
  {
    id: 'wildfire',
    cost: 4,
    characterId: 'lune',
    stains: ['fire', 'light'],
    en: {
      name: 'Wildfire',
      description: 'Deals medium Fire damage to all enemies. 1 hit. Applies 3 Burn Consumes {Ice x2}: Increased Damage'
    },
    es: {
      name: 'Fuego Indómito',
      description:
        'Inflige daño de fuego moderado a todos los enemigos. 1 golpe. Aplica 3 acumulaciones de quemadura. Consume {Hielo x2}: Aumenta el daño.'
    }
  }
];

const MAELLE_SKILLS: Skill[] = [
  {
    id: 'breaking-rules',
    cost: 3,
    characterId: 'maelle',
    en: {
      name: 'Breaking Rules',
      description:
        "Deals low single target Physical damage. 2 hits. Destroys all target's Shields  Gains 1 AP  per Shield destroyed. If target us Defenceless , play a second turn."
    },
    es: {
      name: 'Breaking Rules',
      description:
        "Deals low single target Physical damage. 2 hits. Destroys all target's Shields  Gains 1 AP  per Shield destroyed. If target us Defenceless , play a second turn."
    }
  },
  {
    id: 'burning-canvas',
    cost: 5,
    characterId: 'maelle',
    en: {
      name: 'Burning Canvas',
      description:
        'Change Stance: Offensive Deals high single target Void damage. 5 hits. Applies 1 Burn  per hit. Damage increased for each Burn  on the targe'
    },
    es: {
      name: 'Burning Canvas',
      description:
        'Change Stance: Offensive Deals high single target Void damage. 5 hits. Applies 1 Burn  per hit. Damage increased for each Burn  on the targe'
    }
  },
  {
    id: 'combustion',
    cost: 4,
    characterId: 'maelle',
    en: {
      name: 'Combustion',
      description: 'Deals medium single target Physical Damage. 2 Hits. Consumes up to 10 Burn  for increased damage.'
    },
    es: {
      name: 'Combustion',
      description: 'Deals medium single target Physical Damage. 2 Hits. Consumes up to 10 Burn  for increased damage.'
    }
  },
  {
    id: 'degagement',
    cost: 2,
    characterId: 'maelle',
    en: {
      name: 'Degagement',
      description: 'Deals low single target Fire damage. 1 hit. Target becomes weak to Fire damage for 2 turns.'
    },
    es: {
      name: 'Degagement',
      description: 'Deals low single target Fire damage. 1 hit. Target becomes weak to Fire damage for 2 turns.'
    }
  },
  {
    id: 'egide',
    cost: 3,
    characterId: 'maelle',
    en: {
      name: 'Egide',
      description:
        'Protects allies by taking damage in their place, for 2 turns. Duration is extended by 1 on gaining Shell'
    },
    es: {
      name: 'Egide',
      description:
        'Protects allies by taking damage in their place, for 2 turns. Duration is extended by 1 on gaining Shell'
    }
  },
  {
    id: "fencer's-flurry",
    cost: 4,
    characterId: 'maelle',
    en: {
      name: "Fencer's Flurry",
      description: "Deals medium damage to all enemies. 1 hit. Uses weapon's element. Applies Defenceless  for 1 turn."
    },
    es: {
      name: "Fencer's Flurry",
      description: "Deals medium damage to all enemies. 1 hit. Uses weapon's element. Applies Defenceless  for 1 turn."
    }
  },
  {
    id: 'fleuret-fury',
    cost: 6,
    characterId: 'maelle',
    en: {
      name: 'Fleuret Fury',
      description:
        'Deals high single target Physical damage. 3 hits. If in Virtuose Stance, stay in Virtuose Stance Can Break'
    },
    es: {
      name: 'Fleuret Fury',
      description:
        'Deals high single target Physical damage. 3 hits. If in Virtuose Stance, stay in Virtuose Stance Can Break'
    }
  },
  {
    id: 'guard-down',
    cost: 3,
    characterId: 'maelle',
    en: {
      name: 'Guard Down',
      description: 'Change Stance: Offensive Applies Defenceless  to all enemies for 3 turns.'
    },
    es: { name: 'Guard Down', description: 'Change Stance: Offensive Applies Defenceless  to all enemies for 3 turns.' }
  },
  {
    id: 'guard-up',
    cost: 3,
    characterId: 'maelle',
    en: { name: 'Guard Up', description: 'Applies Shell , reducing damage taken, to up to 3 allies for 3 turns.' },
    es: { name: 'Guard Up', description: 'Applies Shell , reducing damage taken, to up to 3 allies for 3 turns.' }
  },
  {
    id: "gustave's-homage",
    cost: 8,
    characterId: 'maelle',
    en: {
      name: "Gustave's Homage",
      description:
        "Deals high single target Lightning damage. 8 hits. Increased damage to Marked  targets, Doesn't remove Mark."
    },
    es: {
      name: "Gustave's Homage",
      description:
        "Deals high single target Lightning damage. 8 hits. Increased damage to Marked  targets, Doesn't remove Mark."
    }
  },
  {
    id: 'last-chance',
    cost: 1,
    characterId: 'maelle',
    en: {
      name: 'Last Chance',
      description: 'Reduces self-Health to 1 but refills all AP  Switches to Virtuose Stance'
    },
    es: { name: 'Last Chance', description: 'Reduces self-Health to 1 but refills all AP  Switches to Virtuose Stance' }
  },
  {
    id: 'mezzo-forte',
    cost: 1,
    characterId: 'maelle',
    en: { name: 'Mezzo Forte', description: 'Reapplies current stance and gives 2-4 AP' },
    es: { name: 'Mezzo Forte', description: 'Reapplies current stance and gives 2-4 AP' }
  },
  {
    id: 'momentum-strike',
    cost: 7,
    characterId: 'maelle',
    en: {
      name: 'Momentum Strike',
      description:
        "Deals high single target damage. 1 hit. Uses weapon's element. Increased damage to Marked  targets. Virtuose Stance : Costs 4 AP"
    },
    es: {
      name: 'Momentum Strike',
      description:
        "Deals high single target damage. 1 hit. Uses weapon's element. Increased damage to Marked  targets. Virtuose Stance : Costs 4 AP"
    }
  },
  {
    id: 'offensive-switch',
    cost: 1,
    characterId: 'maelle',
    en: {
      name: 'Offensive Switch',
      description: "Deals low single target damage and applies Defenceless  for 3 turns. 1 hit. Uses weapon's element."
    },
    es: {
      name: 'Offensive Switch',
      description: "Deals low single target damage and applies Defenceless  for 3 turns. 1 hit. Uses weapon's element."
    }
  },
  {
    id: 'payback',
    cost: 9,
    characterId: 'maelle',
    en: {
      name: 'Payback',
      description:
        'Deals very high single target Physical damage. 1 hit. Reduced AP  cost for each attack parried since last turn. Can Break'
    },
    es: {
      name: 'Payback',
      description:
        'Deals very high single target Physical damage. 1 hit. Reduced AP  cost for each attack parried since last turn. Can Break'
    }
  },
  {
    id: 'percee',
    cost: 5,
    characterId: 'maelle',
    en: {
      name: 'Percee',
      description:
        'Deals medium single target Physical damage. 1 hit. Increased damage to Marked  targets. Virtuose Stance : Costs 2 AP'
    },
    es: {
      name: 'Percee',
      description:
        'Deals medium single target Physical damage. 1 hit. Increased damage to Marked  targets. Virtuose Stance : Costs 2 AP'
    }
  },
  {
    id: 'phantom-strike',
    cost: 7,
    characterId: 'maelle',
    en: {
      name: 'Phantom Strike',
      description:
        'Change Stance: Defensive Deals very high Void damage to all enemies. 4 hits. Also gives +35% of a Gradient Charge.'
    },
    es: {
      name: 'Phantom Strike',
      description:
        'Change Stance: Defensive Deals very high Void damage to all enemies. 4 hits. Also gives +35% of a Gradient Charge.'
    }
  },
  {
    id: 'pyrolyse',
    cost: 9,
    characterId: 'maelle',
    en: {
      name: 'Pyrolyse',
      description:
        'Deals extreme single target Fire damage. 3 hits. Applies 5 Burn  per hit. Offensive Stance: Applies 2 more Burn  per hit.'
    },
    es: {
      name: 'Pyrolyse',
      description:
        'Deals extreme single target Fire damage. 3 hits. Applies 5 Burn  per hit. Offensive Stance: Applies 2 more Burn  per hit.'
    }
  },
  {
    id: 'rain-of-fire',
    cost: 5,
    characterId: 'maelle',
    en: {
      name: 'Rain of Fire',
      description:
        'Deals medium single target Fire damage. 2 hits. Applies 3 Burn  per hit. Defensive Stance: applies 2 more Burn  per hit.'
    },
    es: {
      name: 'Rain of Fire',
      description:
        'Deals medium single target Fire damage. 2 hits. Applies 3 Burn  per hit. Defensive Stance: applies 2 more Burn  per hit.'
    }
  },
  {
    id: 'revenge',
    cost: 5,
    characterId: 'maelle',
    en: {
      name: 'Revenge',
      description:
        'Deals high single target Fire damage. 1 hit. Damage increased for each hit received since the previous turn. Can Break'
    },
    es: {
      name: 'Revenge',
      description:
        'Deals high single target Fire damage. 1 hit. Damage increased for each hit received since the previous turn. Can Break'
    }
  },
  {
    id: 'spark',
    cost: 3,
    characterId: 'maelle',
    en: {
      name: 'Spark',
      description: 'Deals low single target Fire damage. 1 hit. Applies 3 Burn  Offensive Stance: Applies 2 more Burn'
    },
    es: {
      name: 'Spark',
      description: 'Deals low single target Fire damage. 1 hit. Applies 3 Burn  Offensive Stance: Applies 2 more Burn'
    }
  },
  {
    id: 'stendhal',
    cost: 8,
    characterId: 'maelle',
    en: {
      name: 'Stendhal',
      description:
        'Change Stance: Stanceless Deals extreme single target Void damage. 1 hit. Removes self-Shields  and self applies Defenceless'
    },
    es: {
      name: 'Stendhal',
      description:
        'Change Stance: Stanceless Deals extreme single target Void damage. 1 hit. Removes self-Shields  and self applies Defenceless'
    }
  },
  {
    id: 'swift-stride',
    cost: 3,
    characterId: 'maelle',
    en: {
      name: 'Swift Stride',
      description:
        'Deals low single target Physical damage. 1 hit. Switches to Virtuose Stance  if target is Burning  Regains 0 to 2 AP'
    },
    es: {
      name: 'Swift Stride',
      description:
        'Deals low single target Physical damage. 1 hit. Switches to Virtuose Stance  if target is Burning  Regains 0 to 2 AP'
    }
  },
  {
    id: 'sword-ballet',
    cost: 9,
    characterId: 'maelle',
    en: {
      name: 'Sword Ballet',
      description: "Deals extreme single target damage. 5 hits. Uses weapon's element. Critical Hitsdeal double damage."
    },
    es: {
      name: 'Sword Ballet',
      description: "Deals extreme single target damage. 5 hits. Uses weapon's element. Critical Hitsdeal double damage."
    }
  }
];

const SCIEL_SKILLS: Skill[] = [
  {
    id: 'all-set',
    cost: 6,
    characterId: 'sciel',
    en: { name: 'All Set', description: 'Applies Shell , Powerful , and Rush  to all allies.' },
    es: { name: 'All Set', description: 'Applies Shell , Powerful , and Rush  to all allies.' }
  },
  {
    id: 'bad-omen',
    cost: 3,
    characterId: 'sciel',
    en: { name: 'Bad Omen', description: 'Deals low Dark damage to all enemies. 2 hits. Applies 2 Foretell  per hit.' },
    es: { name: 'Bad Omen', description: 'Deals low Dark damage to all enemies. 2 hits. Applies 2 Foretell  per hit.' }
  },
  {
    id: 'card-weaver',
    cost: 3,
    characterId: 'sciel',
    en: {
      name: 'Card Weaver',
      description:
        "Deals low single target Physical damage. 1 hit. Propagates target's Foretell  to all enemies. Plays a second turn."
    },
    es: {
      name: 'Card Weaver',
      description:
        "Deals low single target Physical damage. 1 hit. Propagates target's Foretell  to all enemies. Plays a second turn."
    }
  },
  {
    id: 'dark-cleansing',
    cost: 0,
    characterId: 'sciel',
    en: {
      name: 'Dark Cleansing',
      description: "Cleanses an ally of their Status Effects and propogates the target's buff to all allies."
    },
    es: {
      name: 'Dark Cleansing',
      description: "Cleanses an ally of their Status Effects and propogates the target's buff to all allies."
    }
  },
  {
    id: 'dark-wave',
    cost: 6,
    characterId: 'sciel',
    en: {
      name: 'Dark Wave',
      description: 'Deals high Dark damage to all enemies. 3 hits. Consumes all Foretell  to deal additional damage.'
    },
    es: {
      name: 'Dark Wave',
      description: 'Deals high Dark damage to all enemies. 3 hits. Consumes all Foretell  to deal additional damage.'
    }
  },
  {
    id: 'delaying-slash',
    cost: 5,
    characterId: 'sciel',
    en: {
      name: 'Delaying Slash',
      description:
        "Deals medium single targe damage. 2 hits. Uses weapon's element. Consumes Foretell  to increase damage and delay target's turn."
    },
    es: {
      name: 'Delaying Slash',
      description:
        "Deals medium single targe damage. 2 hits. Uses weapon's element. Consumes Foretell  to increase damage and delay target's turn."
    }
  },
  {
    id: 'final-path',
    cost: 9,
    characterId: 'sciel',
    en: {
      name: 'Final Path',
      description: 'Deal extreme single target Dark damage and applies 10 Foretell  1 hit. Can Break'
    },
    es: {
      name: 'Final Path',
      description: 'Deal extreme single target Dark damage and applies 10 Foretell  1 hit. Can Break'
    }
  },
  {
    id: 'firing-shadow',
    cost: 3,
    characterId: 'sciel',
    en: {
      name: 'Firing Shadow',
      description: 'Deals low Dark damage to all enemies. 3 hits. Consumes 1 Foretell  per hit for increased damage.'
    },
    es: {
      name: 'Firing Shadow',
      description: 'Deals low Dark damage to all enemies. 3 hits. Consumes 1 Foretell  per hit for increased damage.'
    }
  },
  {
    id: 'focused-foretell',
    cost: 2,
    characterId: 'sciel',
    en: {
      name: 'Focused Foretell',
      description:
        'Deals medium single target Physical damage. 1 hit. Applies 2 Foretell  Applies 3 additional Foretell  if target has 0 Foretell'
    },
    es: {
      name: 'Focused Foretell',
      description:
        'Deals medium single target Physical damage. 1 hit. Applies 2 Foretell  Applies 3 additional Foretell  if target has 0 Foretell'
    }
  },
  {
    id: "fortune's-fury",
    cost: 5,
    characterId: 'sciel',
    en: { name: "Fortune's Fury", description: 'Targeted ally deals double damage for 1 turn.' },
    es: { name: "Fortune's Fury", description: 'Targeted ally deals double damage for 1 turn.' }
  },
  {
    id: 'grim-harvest',
    cost: 5,
    characterId: 'sciel',
    en: {
      name: 'Grim Harvest',
      description:
        'Deals medium single target Dark damage. 1 hit. Heals  all allies by 30% Health. Consumes Foretell  to increase Heal  by 5% per Foretell'
    },
    es: {
      name: 'Grim Harvest',
      description:
        'Deals medium single target Dark damage. 1 hit. Heals  all allies by 30% Health. Consumes Foretell  to increase Heal  by 5% per Foretell'
    }
  },
  {
    id: 'harvest',
    cost: 3,
    characterId: 'sciel',
    en: {
      name: 'Harvest',
      description:
        "Deals medium single target damage. 1 hit. Uses weapon's element.  Heals  self by 40% Health. Consumes all Foretell  to increase Heal  by 5% per Foretell"
    },
    es: {
      name: 'Harvest',
      description:
        "Deals medium single target damage. 1 hit. Uses weapon's element.  Heals  self by 40% Health. Consumes all Foretell  to increase Heal  by 5% per Foretell"
    }
  },
  {
    id: 'intervention',
    cost: 5,
    characterId: 'sciel',
    en: { name: 'Intervention', description: 'Targeted ally plays immediately and gains 4 AP' },
    es: { name: 'Intervention', description: 'Targeted ally plays immediately and gains 4 AP' }
  },
  {
    id: 'marking-card',
    cost: 3,
    characterId: 'sciel',
    en: {
      name: 'Marking Card',
      description: 'Deals medium single target Dark damge. 2 hits. Applies Mark  to the target. Applies 3 Foretell'
    },
    es: {
      name: 'Marking Card',
      description: 'Deals medium single target Dark damge. 2 hits. Applies Mark  to the target. Applies 3 Foretell'
    }
  },
  {
    id: 'our-sacrifice',
    cost: 4,
    characterId: 'sciel',
    en: {
      name: 'Our Sacrifice',
      description:
        "Deals extreme Dark damage to all enemies. 1 hit. Absorbs allies' Health and enemies'  Foretell  to deal increased damage."
    },
    es: {
      name: 'Our Sacrifice',
      description:
        "Deals extreme Dark damage to all enemies. 1 hit. Absorbs allies' Health and enemies'  Foretell  to deal increased damage."
    }
  },
  {
    id: 'phantom-blade',
    cost: 5,
    characterId: 'sciel',
    en: {
      name: 'Phantom Blade',
      description:
        'Deals high single target Dark damage. 1 hit. Consumes all Foretell  to deal additional damage. Can Break'
    },
    es: {
      name: 'Phantom Blade',
      description:
        'Deals high single target Dark damage. 1 hit. Consumes all Foretell  to deal additional damage. Can Break'
    }
  },
  {
    id: 'plentiful-harvest',
    cost: 4,
    characterId: 'sciel',
    en: {
      name: 'Plentiful Harvest',
      description:
        'Deals medium single target Physical damage. 2 hits. Consumes all Foretell  on a target and gives 1 AP  to a party member for each Foretell  consumed.'
    },
    es: {
      name: 'Plentiful Harvest',
      description:
        'Deals medium single target Physical damage. 2 hits. Consumes all Foretell  on a target and gives 1 AP  to a party member for each Foretell  consumed.'
    }
  },
  {
    id: 'rush',
    cost: 3,
    characterId: 'sciel',
    en: { name: 'Rush', description: 'Applies Rush  to 1-3 allies, increasing their speed for 3 turns.' },
    es: { name: 'Rush', description: 'Applies Rush  to 1-3 allies, increasing their speed for 3 turns.' }
  },
  {
    id: 'sealed-fate',
    cost: 4,
    characterId: 'sciel',
    en: {
      name: 'Sealed Fate',
      description:
        "Deals high single target damage. 5-7 hits. Uses weapon's element. Each hit can consume 1 Foretell  to deal 200% more damage. Critical Hitsdon't remove the Foretell  but still gets the damage increase."
    },
    es: {
      name: 'Sealed Fate',
      description:
        "Deals high single target damage. 5-7 hits. Uses weapon's element. Each hit can consume 1 Foretell  to deal 200% more damage. Critical Hitsdon't remove the Foretell  but still gets the damage increase."
    }
  },
  {
    id: 'searing-bond',
    cost: 4,
    characterId: 'sciel',
    en: {
      name: 'Searing Bond',
      description:
        'Deals medium single target Dark damage. 1 hit. Applies 5 Foretell  Also deals damage and applies Foretell  to every other Burning  enemies.'
    },
    es: {
      name: 'Searing Bond',
      description:
        'Deals medium single target Dark damage. 1 hit. Applies 5 Foretell  Also deals damage and applies Foretell  to every other Burning  enemies.'
    }
  },
  {
    id: 'spectral-sweep',
    cost: 7,
    characterId: 'sciel',
    en: {
      name: 'Spectral Sweep',
      description:
        "Deals medium single target damage. 2 to 6 hits. Uses weapon's element. Applies 1 Foretell  per hit. Critical Hits apply an additional Foretell"
    },
    es: {
      name: 'Spectral Sweep',
      description:
        "Deals medium single target damage. 2 to 6 hits. Uses weapon's element. Applies 1 Foretell  per hit. Critical Hits apply an additional Foretell"
    }
  },
  {
    id: 'twilight-dance',
    cost: 9,
    characterId: 'sciel',
    en: {
      name: 'Twilight Dance',
      description:
        'Deals extreme single target Dark damage. 4 hits. During Twilight , extends Twilight  duration by 1 turn. Consumes all Foretell  to deal additional damage.'
    },
    es: {
      name: 'Twilight Dance',
      description:
        'Deals extreme single target Dark damage. 4 hits. During Twilight , extends Twilight  duration by 1 turn. Consumes all Foretell  to deal additional damage.'
    }
  },
  {
    id: 'twilight-slash',
    cost: 2,
    characterId: 'sciel',
    en: {
      name: 'Twilight Slash',
      description: 'Deals low single target Dark damage. 1 hit. Consumes all Foretell  to deal additional damage.'
    },
    es: {
      name: 'Twilight Slash',
      description: 'Deals low single target Dark damage. 1 hit. Consumes all Foretell  to deal additional damage.'
    }
  }
];

const VERSO_SKILLS: Skill[] = [
  {
    id: 'ascending-assault',
    cost: 5,
    characterId: 'verso',
    en: {
      name: 'Ascending Assault',
      description:
        "Deals low single target damage. 1 hit. Uses weapon's element. Increase damage at each cast. : Costs 2 AP"
    },
    es: {
      name: 'Ascending Assault',
      description:
        "Deals low single target damage. 1 hit. Uses weapon's element. Increase damage at each cast. : Costs 2 AP"
    }
  },
  {
    id: 'assault-zero',
    cost: 3,
    characterId: 'verso',
    en: { name: 'Assault Zero', description: 'Critical Hits generate 1 additional Perfection  : Increased damage.' },
    es: { name: 'Assault Zero', description: 'Critical Hits generate 1 additional Perfection  : Increased damage.' }
  },
  {
    id: 'berserk-slash',
    cost: 4,
    characterId: 'verso',
    en: {
      name: 'Berserk Slash',
      description:
        'Deals medium single target Physical damage. 3 hits. Damage is increased for each health Verso is missing. : Increased damage'
    },
    es: {
      name: 'Berserk Slash',
      description:
        'Deals medium single target Physical damage. 3 hits. Damage is increased for each health Verso is missing. : Increased damage'
    }
  },
  {
    id: 'blitz',
    cost: 3,
    characterId: 'verso',
    en: {
      name: 'Blitz',
      description:
        'Deals low single target Physical damage. 1 hit. Plays a second time. Kills non-boss enemies with less than 10% health. : Increased damage.'
    },
    es: {
      name: 'Blitz',
      description:
        'Deals low single target Physical damage. 1 hit. Plays a second time. Kills non-boss enemies with less than 10% health. : Increased damage.'
    }
  },
  {
    id: 'burden',
    cost: 1,
    characterId: 'verso',
    en: {
      name: 'Burden',
      description: 'Removes all Status Effects from all allies and applies them to Verso. Gains 1 Rank.'
    },
    es: {
      name: 'Burden',
      description: 'Removes all Status Effects from all allies and applies them to Verso. Gains 1 Rank.'
    }
  },
  {
    id: 'defiant-strike',
    cost: 3,
    characterId: 'verso',
    en: {
      name: 'Defiant Strike',
      description:
        'Deals high single target Physical damage that applies Mark  2 hits. Costs 30% of current Health. : Increased damage.'
    },
    es: {
      name: 'Defiant Strike',
      description:
        'Deals high single target Physical damage that applies Mark  2 hits. Costs 30% of current Health. : Increased damage.'
    }
  },
  {
    id: 'end-bringer',
    cost: 9,
    characterId: 'verso',
    en: {
      name: 'End Bringer',
      description:
        'Deals extreme single target Physical damage. 6 hits. Increased damage if the target is Stunned  : Can reapply Stun'
    },
    es: {
      name: 'End Bringer',
      description:
        'Deals extreme single target Physical damage. 6 hits. Increased damage if the target is Stunned  : Can reapply Stun'
    }
  },
  {
    id: 'follow-up',
    cost: 5,
    characterId: 'verso',
    en: {
      name: 'Follow Up',
      description:
        'Deals medium single target Light damage. 1 hit. Damage increased for each Free Aim shot this turn, up to 10 times. : Costs 2 AP'
    },
    es: {
      name: 'Follow Up',
      description:
        'Deals medium single target Light damage. 1 hit. Damage increased for each Free Aim shot this turn, up to 10 times. : Costs 2 AP'
    }
  },
  {
    id: 'from-fire',
    cost: 4,
    characterId: 'verso',
    en: {
      name: 'From Fire',
      description:
        "Deals medium single target damage. 3 hits. Uses weapon's element. Heals  self by 20% Health if the target Burns  : Increased damage."
    },
    es: {
      name: 'From Fire',
      description:
        "Deals medium single target damage. 3 hits. Uses weapon's element. Heals  self by 20% Health if the target Burns  : Increased damage."
    }
  },
  {
    id: 'leadership',
    cost: 3,
    characterId: 'verso',
    en: {
      name: 'Leadership',
      description: 'Reduces current Rank. Gives 2-4 AP  to other allies. : +1 more AP  to other allies'
    },
    es: {
      name: 'Leadership',
      description: 'Reduces current Rank. Gives 2-4 AP  to other allies. : +1 more AP  to other allies'
    }
  },
  {
    id: 'light-holder',
    cost: 4,
    characterId: 'verso',
    en: {
      name: 'Light Holder',
      description: 'Medium single target Light damage. 5 hits. At completion, gains 1 Rank. : +2 AP'
    },
    es: {
      name: 'Light Holder',
      description: 'Medium single target Light damage. 5 hits. At completion, gains 1 Rank. : +2 AP'
    }
  },
  {
    id: 'marking-shot',
    cost: 2,
    characterId: 'verso',
    en: {
      name: 'Marking Shot',
      description: "Deals low single target damage. 1 hit. Uses weapon's element. Applies Mark  : Increased damage"
    },
    es: {
      name: 'Marking Shot',
      description: "Deals low single target damage. 1 hit. Uses weapon's element. Applies Mark  : Increased damage"
    }
  },
  {
    id: 'overload',
    cost: 6,
    characterId: 'verso',
    en: { name: 'Overload', description: 'Increases Rank to  and refills all AP  but sets self-Health to 1.' },
    es: { name: 'Overload', description: 'Increases Rank to  and refills all AP  but sets self-Health to 1.' }
  },
  {
    id: 'paradigm-shift',
    cost: 1,
    characterId: 'verso',
    en: {
      name: 'Paradigm Shift',
      description: 'Deals low Physical single target damage and gives 1-3 AP  back. 3 hits. :  +1 AP'
    },
    es: {
      name: 'Paradigm Shift',
      description: 'Deals low Physical single target damage and gives 1-3 AP  back. 3 hits. :  +1 AP'
    }
  },
  {
    id: 'perfect-break',
    cost: 7,
    characterId: 'verso',
    en: {
      name: 'Perfect Break',
      description: 'Deals very high single target Light damage. 1 hit.  Can Break  Rank  on Break  : Costs 5 AP'
    },
    es: {
      name: 'Perfect Break',
      description: 'Deals very high single target Light damage. 1 hit.  Can Break  Rank  on Break  : Costs 5 AP'
    }
  },
  {
    id: 'perfect-recovery',
    cost: 3,
    characterId: 'verso',
    en: {
      name: 'Perfect Recovery',
      description:
        'Recovers  50% Health and dispels Status Effects. Gives 0-2 Perfection  : Increased heal to 100% Health.'
    },
    es: {
      name: 'Perfect Recovery',
      description:
        'Recovers  50% Health and dispels Status Effects. Gives 0-2 Perfection  : Increased heal to 100% Health.'
    }
  },
  {
    id: 'phantom-stars',
    cost: 9,
    characterId: 'verso',
    en: {
      name: 'Phantom Stars',
      description: 'Deals extreme Light damage to all enemies. 5 hits. Can Break  : Costs 5 AP'
    },
    es: {
      name: 'Phantom Stars',
      description: 'Deals extreme Light damage to all enemies. 5 hits. Can Break  : Costs 5 AP'
    }
  },
  {
    id: 'powerful',
    cost: 3,
    characterId: 'verso',
    en: {
      name: 'Powerful',
      description:
        'Applies Powerful  to 1-3 Allies, increasing damage they deal for 3 turns. Gives 0-2 Perfection  : Duration increased to 5 turns.'
    },
    es: {
      name: 'Powerful',
      description:
        'Applies Powerful  to 1-3 Allies, increasing damage they deal for 3 turns. Gives 0-2 Perfection  : Duration increased to 5 turns.'
    }
  },
  {
    id: 'purification',
    cost: 5,
    characterId: 'verso',
    en: {
      name: 'Purification',
      description: 'Deals single target medium Light damage. 2 hits. Dispels self Status Effects. : Increased damage.'
    },
    es: {
      name: 'Purification',
      description: 'Deals single target medium Light damage. 2 hits. Dispels self Status Effects. : Increased damage.'
    }
  },
  {
    id: 'quick-strike',
    cost: 2,
    characterId: 'verso',
    en: {
      name: 'Quick Strike',
      description: 'Deals low single target Physical damage. 1 hit. : Gives more Perfection'
    },
    es: { name: 'Quick Strike', description: 'Deals low single target Physical damage. 1 hit. : Gives more Perfection' }
  },
  {
    id: 'radiant-slash',
    cost: 2,
    characterId: 'verso',
    en: {
      name: 'Radiant Slash',
      description: 'Deals low Light damage to all enemies. 1 hit. Can Break  : Increased damage.'
    },
    es: {
      name: 'Radiant Slash',
      description: 'Deals low Light damage to all enemies. 1 hit. Can Break  : Increased damage.'
    }
  },
  {
    id: 'speed-burst',
    cost: 6,
    characterId: 'verso',
    en: {
      name: 'Speed Burst',
      description:
        'Deals high single target Light damage. 5 hits. Damage increased by Speed difference with the target. : Increased damage'
    },
    es: {
      name: 'Speed Burst',
      description:
        'Deals high single target Light damage. 5 hits. Damage increased by Speed difference with the target. : Increased damage'
    }
  },
  {
    id: 'steeled-strike',
    cost: 9,
    characterId: 'verso',
    en: {
      name: 'Steeled Strike',
      description:
        'After 1 turn, deals extreme single target Physical damage. 13 hits. Interrupted if any damage taken. : Increased damage.'
    },
    es: {
      name: 'Steeled Strike',
      description:
        'After 1 turn, deals extreme single target Physical damage. 13 hits. Interrupted if any damage taken. : Increased damage.'
    }
  },
  {
    id: 'strike-storm',
    cost: 7,
    characterId: 'verso',
    en: {
      name: 'Strike Storm',
      description:
        "Deals very high single target damage. 5 hits. Uses weapon's element. Critical Hits generate 2 additional Perfection  : Increased damage"
    },
    es: {
      name: 'Strike Storm',
      description:
        "Deals very high single target damage. 5 hits. Uses weapon's element. Critical Hits generate 2 additional Perfection  : Increased damage"
    }
  }
];

const MONOCO_SKILLS: Skill[] = [
  {
    id: 'abbest-wind',
    cost: 2,
    characterId: 'monoco',
    en: {
      name: 'Abbest Wind',
      description: 'Deals low single target Physical damage. 1 hit. Plays a second turn.  Agile Mask: Costs 0 AP'
    },
    es: {
      name: 'Abbest Wind',
      description: 'Deals low single target Physical damage. 1 hit. Plays a second turn.  Agile Mask: Costs 0 AP'
    }
  },
  {
    id: 'aberration-light',
    cost: 7,
    characterId: 'monoco',
    en: {
      name: 'Aberration Light',
      description:
        'Deals high Light damage to all enemies. 2 hits. Applies 4 Burn  per hit.  Agile Mask: Applies 2 more Burn  per hit.'
    },
    es: {
      name: 'Aberration Light',
      description:
        'Deals high Light damage to all enemies. 2 hits. Applies 4 Burn  per hit.  Agile Mask: Applies 2 more Burn  per hit.'
    }
  },
  {
    id: 'ballet-charm',
    cost: 2,
    characterId: 'monoco',
    en: {
      name: 'Ballet Charm',
      description:
        'Deals low single target Light damage. 1 hit. Applies Powerless  to the taret for 3 turns.  Caster Mask: Increased damage.'
    },
    es: {
      name: 'Ballet Charm',
      description:
        'Deals low single target Light damage. 1 hit. Applies Powerless  to the taret for 3 turns.  Caster Mask: Increased damage.'
    }
  },
  {
    id: 'benisseur-mortar',
    cost: 5,
    characterId: 'monoco',
    en: {
      name: 'Benisseur Mortar',
      description:
        'Deals medium single target Ice damage. 3 hits. Change to  Almighty Mask if target is Marked   Caster Mask: Increased damage.'
    },
    es: {
      name: 'Benisseur Mortar',
      description:
        'Deals medium single target Ice damage. 3 hits. Change to  Almighty Mask if target is Marked   Caster Mask: Increased damage.'
    }
  },
  {
    id: 'braseleur-smash',
    cost: 4,
    characterId: 'monoco',
    en: {
      name: 'Braseleur Smash',
      description:
        'Deals medium finslge target Fire damage and applies 3 Burn . 2 hits.  Balanced Mask: Increased damage.'
    },
    es: {
      name: 'Braseleur Smash',
      description:
        'Deals medium finslge target Fire damage and applies 3 Burn . 2 hits.  Balanced Mask: Increased damage.'
    }
  },
  {
    id: 'boucheclier-fortify',
    cost: 3,
    characterId: 'monoco',
    en: {
      name: 'Boucheclier Fortify',
      description: 'Applies Shell  to 1-3 Allies for 3 turns.  Heavy Mask: Also applies 1 Shield'
    },
    es: {
      name: 'Boucheclier Fortify',
      description: 'Applies Shell  to 1-3 Allies for 3 turns.  Heavy Mask: Also applies 1 Shield'
    }
  },
  {
    id: 'bruler-bash',
    cost: 4,
    characterId: 'monoco',
    en: {
      name: 'Bruler Bash',
      description: 'Deals medium single target Physical damage. 3 hits. Can Break   Caster Mask: Increased damage.'
    },
    es: {
      name: 'Bruler Bash',
      description: 'Deals medium single target Physical damage. 3 hits. Can Break   Caster Mask: Increased damage.'
    }
  },
  {
    id: 'chalier-combo',
    cost: 7,
    characterId: 'monoco',
    en: {
      name: 'Chalier Combo',
      description:
        'Deals high single target Physical damage. 6 hits. Interrupted if failed.  Balanced Mask: Increased damage.'
    },
    es: {
      name: 'Chalier Combo',
      description:
        'Deals high single target Physical damage. 6 hits. Interrupted if failed.  Balanced Mask: Increased damage.'
    }
  },
  {
    id: 'chapelier-slash',
    cost: 7,
    characterId: 'monoco',
    en: {
      name: 'Chapelier Slash',
      description: 'Deals high Physical damage to all enemies. 3 hits. Applies Mark   Agile Mask: Increased damage.'
    },
    es: {
      name: 'Chapelier Slash',
      description: 'Deals high Physical damage to all enemies. 3 hits. Applies Mark   Agile Mask: Increased damage.'
    }
  },
  {
    id: 'chevaliere-ice',
    cost: 6,
    characterId: 'monoco',
    en: {
      name: 'Chevaliere Ice',
      description:
        'Deals high Ice damage to all enemies. 3 hits. Applies Slow  to the targets for 3 turns.  Balanced Mask: Increased damage.'
    },
    es: {
      name: 'Chevaliere Ice',
      description:
        'Deals high Ice damage to all enemies. 3 hits. Applies Slow  to the targets for 3 turns.  Balanced Mask: Increased damage.'
    }
  },
  {
    id: 'chevaliere-piercing',
    cost: 3,
    characterId: 'monoco',
    en: {
      name: 'Chevaliere Piercing',
      description:
        'Deals single target Physical damage through Shields . 6 hits. Damage increased for each Shield  on the target.  Agile Mask: Increased damage.'
    },
    es: {
      name: 'Chevaliere Piercing',
      description:
        'Deals single target Physical damage through Shields . 6 hits. Damage increased for each Shield  on the target.  Agile Mask: Increased damage.'
    }
  },
  {
    id: 'chevaliere-thrusts',
    cost: 7,
    characterId: 'monoco',
    en: {
      name: 'Chevaliere Thrusts',
      description:
        'Deals high Physical damage to all enemis. 3 hits. Critical Hits deal double damage.  Heavy Mask: Increased damage.'
    },
    es: {
      name: 'Chevaliere Thrusts',
      description:
        'Deals high Physical damage to all enemis. 3 hits. Critical Hits deal double damage.  Heavy Mask: Increased damage.'
    }
  },
  {
    id: 'clair-enfeeble',
    cost: 5,
    characterId: 'monoco',
    en: {
      name: 'Clair Enfeeble',
      description:
        'Deals medium Light damage to all enemies. 1 hit. Applies Powerless  for 3 turns.  Balanced Mask: Increased damage.'
    },
    es: {
      name: 'Clair Enfeeble',
      description:
        'Deals medium Light damage to all enemies. 1 hit. Applies Powerless  for 3 turns.  Balanced Mask: Increased damage.'
    }
  },
  {
    id: 'contorsionniste-blast',
    cost: 6,
    characterId: 'monoco',
    en: {
      name: 'Contorsionniste Blast',
      description:
        'Deals medium Physical damage to all enemies. 1 hit. Heals  all allies by 10% Health for each enemy hit.  Balanced Mask: Increased damage.'
    },
    es: {
      name: 'Contorsionniste Blast',
      description:
        'Deals medium Physical damage to all enemies. 1 hit. Heals  all allies by 10% Health for each enemy hit.  Balanced Mask: Increased damage.'
    }
  },
  {
    id: 'creation-void',
    cost: 9,
    characterId: 'monoco',
    en: {
      name: 'Creation Void',
      description:
        'Deals extreme Void damage to random targets. 3 hits. More damage if the same target is hit multiple times.  Caster Mask: Increased damage'
    },
    es: {
      name: 'Creation Void',
      description:
        'Deals extreme Void damage to random targets. 3 hits. More damage if the same target is hit multiple times.  Caster Mask: Increased damage'
    }
  },
  {
    id: 'cruler-barrier',
    cost: 4,
    characterId: 'monoco',
    en: {
      name: 'Cruler Barrier',
      description: 'Applies 1-2 Shields  to the target.  Heavy Mask: Gives 2 AP  to the target.'
    },
    es: {
      name: 'Cruler Barrier',
      description: 'Applies 1-2 Shields  to the target.  Heavy Mask: Gives 2 AP  to the target.'
    }
  },
  {
    id: 'cultist-blood',
    cost: 3,
    characterId: 'monoco',
    en: {
      name: 'Cultist Blood',
      description:
        'Deals medium Dark damage to all enemies. 3 hits. Sacrifices 90% Health to increase damage.  Heavy Mask: Increased damage.'
    },
    es: {
      name: 'Cultist Blood',
      description:
        'Deals medium Dark damage to all enemies. 3 hits. Sacrifices 90% Health to increase damage.  Heavy Mask: Increased damage.'
    }
  },
  {
    id: 'cultist-slashes',
    cost: 5,
    characterId: 'monoco',
    en: {
      name: 'Cultist Slashes',
      description:
        'Deals medium single target Dark damage. 3 hits. Deals more damage the less Health Monoco has.  Agile Mask: Increased Damage.'
    },
    es: {
      name: 'Cultist Slashes',
      description:
        'Deals medium single target Dark damage. 3 hits. Deals more damage the less Health Monoco has.  Agile Mask: Increased Damage.'
    }
  },
  {
    id: 'danseuse-waltz',
    cost: 8,
    characterId: 'monoco',
    en: {
      name: 'Danseuse Waltz',
      description:
        'Deals high single target Fire damage. 3 hits. Deals more damage against Burning  targets.  Balanced Mask: Increased damage.'
    },
    es: {
      name: 'Danseuse Waltz',
      description:
        'Deals high single target Fire damage. 3 hits. Deals more damage against Burning  targets.  Balanced Mask: Increased damage.'
    }
  },
  {
    id: 'demineur-thunder',
    cost: 2,
    characterId: 'monoco',
    en: {
      name: 'Demineur Thunder',
      description:
        'Deals low single target Lightning damage. 1 hit. Deals extra Break Damage   Caster Mask: Increased Break damage.'
    },
    es: {
      name: 'Demineur Thunder',
      description:
        'Deals low single target Lightning damage. 1 hit. Deals extra Break Damage   Caster Mask: Increased Break damage.'
    }
  },
  {
    id: 'duallist-storm',
    cost: 8,
    characterId: 'monoco',
    en: {
      name: 'Duallist Storm',
      description: 'Deals extreme single target Physical damage. 4 hits. Can Break   Almighty Mask: Increased damage.'
    },
    es: {
      name: 'Duallist Storm',
      description: 'Deals extreme single target Physical damage. 4 hits. Can Break   Almighty Mask: Increased damage.'
    }
  },
  {
    id: 'echassier-stabs',
    cost: 4,
    characterId: 'monoco',
    en: {
      name: 'Echassier Stabs',
      description:
        'Deals medium single target Physical damage. 2 hits. Second hit applies Mark  to the target.  Agile Mask: Increased damage.'
    },
    es: {
      name: 'Echassier Stabs',
      description:
        'Deals medium single target Physical damage. 2 hits. Second hit applies Mark  to the target.  Agile Mask: Increased damage.'
    }
  },
  {
    id: 'eveque-spear',
    cost: 6,
    characterId: 'monoco',
    en: {
      name: 'Eveque Spear',
      description:
        'Deals high single target Earth damage and applies Powerless  for 3 turns. 1 hit.  Heavy Mask: Increased damage.'
    },
    es: {
      name: 'Eveque Spear',
      description:
        'Deals high single target Earth damage and applies Powerless  for 3 turns. 1 hit.  Heavy Mask: Increased damage.'
    }
  },
  {
    id: 'gault-fury',
    cost: 3,
    characterId: 'monoco',
    en: {
      name: 'Gault Fury',
      description: 'Deals low single target Physical damage. 4 hits. Applies Mark   Balanced Mask: Increased damage.'
    },
    es: {
      name: 'Gault Fury',
      description: 'Deals low single target Physical damage. 4 hits. Applies Mark   Balanced Mask: Increased damage.'
    }
  },
  {
    id: 'glaise-earthquakes',
    cost: 4,
    characterId: 'monoco',
    en: {
      name: 'Glaise Earthquakes',
      description:
        'Deals medium Earth damage to all enemies. 3 hits. Applies Powerful  to self.  Heavy Mask: applies Powerful  to all allies.'
    },
    es: {
      name: 'Glaise Earthquakes',
      description:
        'Deals medium Earth damage to all enemies. 3 hits. Applies Powerful  to self.  Heavy Mask: applies Powerful  to all allies.'
    }
  },
  {
    id: 'grosse-tete-whack',
    cost: 6,
    characterId: 'monoco',
    en: {
      name: 'Grosse Tete Whack',
      description:
        'Deals high single target Physical damage. 5 hits. Applies Defenceless  for 3 turns.  Heavy Mask: Increased damage.'
    },
    es: {
      name: 'Grosse Tete Whack',
      description:
        'Deals high single target Physical damage. 5 hits. Applies Defenceless  for 3 turns.  Heavy Mask: Increased damage.'
    }
  },
  {
    id: 'hexga-crush',
    cost: 5,
    characterId: 'monoco',
    en: {
      name: 'Hexga Crush',
      description:
        'Deals medium single target Earth damage. 2 hits. Applies Defenceless  to the target for 3 turns.  Heavy Mask: Increased damage.'
    },
    es: {
      name: 'Hexga Crush',
      description:
        'Deals medium single target Earth damage. 2 hits. Applies Defenceless  to the target for 3 turns.  Heavy Mask: Increased damage.'
    }
  },
  {
    id: 'jar-lampstorm',
    cost: 5,
    characterId: 'monoco',
    en: {
      name: 'Jar Lampstorm',
      description: 'Deals medium Physical damage to all enemies. 4 hits.  Heavy Mask: Increased damage.'
    },
    es: {
      name: 'Jar Lampstorm',
      description: 'Deals medium Physical damage to all enemies. 4 hits.  Heavy Mask: Increased damage.'
    }
  },
  {
    id: 'lampmaster-light',
    cost: 5,
    characterId: 'monoco',
    en: {
      name: 'Lampmaster Light',
      description:
        'Deals high Light damage to all enemies. 1 hit. Increased damage at each cast.  Almighty Mask: Increased damage.'
    },
    es: {
      name: 'Lampmaster Light',
      description:
        'Deals high Light damage to all enemies. 1 hit. Increased damage at each cast.  Almighty Mask: Increased damage.'
    }
  },
  {
    id: 'lancelier-impale',
    cost: 2,
    characterId: 'monoco',
    en: {
      name: 'Lancelier Impale',
      description:
        'Deals low single target Ice damage. 1 hit. Slows  the target for 3 turns.  Agile Mask: Increased damage.'
    },
    es: {
      name: 'Lancelier Impale',
      description:
        'Deals low single target Ice damage. 1 hit. Slows  the target for 3 turns.  Agile Mask: Increased damage.'
    }
  },
  {
    id: 'luster-slices',
    cost: 3,
    characterId: 'monoco',
    en: {
      name: 'Luster Slices',
      description:
        'Deals low single target Physical damage. 3 hits. Applies Rush  to self for 3 turns.  Agile Mask: Increased damage.'
    },
    es: {
      name: 'Luster Slices',
      description:
        'Deals low single target Physical damage. 3 hits. Applies Rush  to self for 3 turns.  Agile Mask: Increased damage.'
    }
  },
  {
    id: 'moissonneuse-vendange',
    cost: 5,
    characterId: 'monoco',
    en: {
      name: 'Moissonneuse Vendange',
      description: 'Deals High single target Physical damage. 3 hits. Can Break   Balanced Mask: Increased damage.'
    },
    es: {
      name: 'Moissonneuse Vendange',
      description: 'Deals High single target Physical damage. 3 hits. Can Break   Balanced Mask: Increased damage.'
    }
  },
  {
    id: 'obscur-sword',
    cost: 6,
    characterId: 'monoco',
    en: {
      name: 'Obscur Sword',
      description:
        'Deals high single target Dark damage. 5 hits. Deals more damage against Powerless  targets.  Heavy Mask: Increased damage.'
    },
    es: {
      name: 'Obscur Sword',
      description:
        'Deals high single target Dark damage. 5 hits. Deals more damage against Powerless  targets.  Heavy Mask: Increased damage.'
    }
  },
  {
    id: 'orphelin-cheers',
    cost: 3,
    characterId: 'monoco',
    en: {
      name: 'Orphelin Cheers',
      description: 'Applies Powerful  to 1-3 Allies.  Caster Mask: Also gives 3 AP  to targets.'
    },
    es: {
      name: 'Orphelin Cheers',
      description: 'Applies Powerful  to 1-3 Allies.  Caster Mask: Also gives 3 AP  to targets.'
    }
  },
  {
    id: 'pelerin-heal',
    cost: 5,
    characterId: 'monoco',
    en: { name: 'Pelerin Heal', description: 'Applies Regen  to all allies.  Caster Mask: also Heals  40% Health.' },
    es: { name: 'Pelerin Heal', description: 'Applies Regen  to all allies.  Caster Mask: also Heals  40% Health.' }
  },
  {
    id: 'portier-crash',
    cost: 8,
    characterId: 'monoco',
    en: {
      name: 'Portier Crash',
      description: 'Deals high Physical damage to all enemies. 1 hit. Can Break   Heavy Mask: Increased damage.'
    },
    es: {
      name: 'Portier Crash',
      description: 'Deals high Physical damage to all enemies. 1 hit. Can Break   Heavy Mask: Increased damage.'
    }
  },
  {
    id: 'potier-energy',
    cost: 4,
    characterId: 'monoco',
    en: { name: 'Potier Energy', description: 'Gives 1-3 AP  to all allies.  Caster Mask: Gives 1 additional AP' },
    es: { name: 'Potier Energy', description: 'Gives 1-3 AP  to all allies.  Caster Mask: Gives 1 additional AP' }
  },
  {
    id: 'ramasseur-bonk',
    cost: 2,
    characterId: 'monoco',
    en: {
      name: 'Ramasseur Bonk',
      description:
        "Deals low single target Dark damage. 1 hit. Can Break   Agile Mask: fills 20% of the target's Break Bar."
    },
    es: {
      name: 'Ramasseur Bonk',
      description:
        "Deals low single target Dark damage. 1 hit. Can Break   Agile Mask: fills 20% of the target's Break Bar."
    }
  },
  {
    id: 'rocher-hammering',
    cost: 3,
    characterId: 'monoco',
    en: {
      name: 'Rocher Hammering',
      description: 'Deals medium single target Physical damage. 4 hits. Can Break   Heavy Mask: Increased damage.'
    },
    es: {
      name: 'Rocher Hammering',
      description: 'Deals medium single target Physical damage. 4 hits. Can Break   Heavy Mask: Increased damage.'
    }
  },
  {
    id: 'sakapatate-estoc',
    cost: 3,
    characterId: 'monoco',
    en: {
      name: 'Sakapatate Estoc',
      description:
        'Deals low single target Lightning damage. 1 hit. Deals more damage if the target is Stunned   Balanced Mask: Increased damage.'
    },
    es: {
      name: 'Sakapatate Estoc',
      description:
        'Deals low single target Lightning damage. 1 hit. Deals more damage if the target is Stunned   Balanced Mask: Increased damage.'
    }
  },
  {
    id: 'sakapatate-explosion',
    cost: 4,
    characterId: 'monoco',
    en: {
      name: 'Sakapatate Explosion',
      description:
        'Deals medium Lightning damage to random enemies. 3 hits. Critical Hits trigger an additional hit.  Caster Mask: Increased damage.'
    },
    es: {
      name: 'Sakapatate Explosion',
      description:
        'Deals medium Lightning damage to random enemies. 3 hits. Critical Hits trigger an additional hit.  Caster Mask: Increased damage.'
    }
  },
  {
    id: 'sakapatate-fire',
    cost: 9,
    characterId: 'monoco',
    en: {
      name: 'Sakapatate Fire',
      description: 'Deals extreme Fire to all enemies. 3 hits. Apply 3 Burn  per hit.  Almighty Mask: Increased damage.'
    },
    es: {
      name: 'Sakapatate Fire',
      description: 'Deals extreme Fire to all enemies. 3 hits. Apply 3 Burn  per hit.  Almighty Mask: Increased damage.'
    }
  },
  {
    id: 'sakapatate-slam',
    cost: 7,
    characterId: 'monoco',
    en: {
      name: 'Sakapatate Slam',
      description:
        'Deals high Physical damage to all enemies. 1 hit. Increased damage to Marked  targets.  Heavy Mask: Increased damage.'
    },
    es: {
      name: 'Sakapatate Slam',
      description:
        'Deals high Physical damage to all enemies. 1 hit. Increased damage to Marked  targets.  Heavy Mask: Increased damage.'
    }
  },
  {
    id: 'sapling-absorption',
    cost: 6,
    characterId: 'monoco',
    en: {
      name: 'Sapling Absorption',
      description:
        'Deals high Dark damage. 3 hits. Recovers  5% Health on hit.  Caster Mask: Increased damage and double Heal'
    },
    es: {
      name: 'Sapling Absorption',
      description:
        'Deals high Dark damage. 3 hits. Recovers  5% Health on hit.  Caster Mask: Increased damage and double Heal'
    }
  },
  {
    id: 'stalact-punches',
    cost: 4,
    characterId: 'monoco',
    en: {
      name: 'Stalact Punches',
      description: 'Deals medium single target Ice damage. 4 hits. High Break damage   Heavy Mask: Increased damage.'
    },
    es: {
      name: 'Stalact Punches',
      description: 'Deals medium single target Ice damage. 4 hits. High Break damage   Heavy Mask: Increased damage.'
    }
  },
  {
    id: 'troubadour-trumpet',
    cost: 3,
    characterId: 'monoco',
    en: {
      name: 'Troubadour Trumpet',
      description: 'Applies a random buff to 1 to 3 allies.  Caster Mask: applies a second random buff.'
    },
    es: {
      name: 'Troubadour Trumpet',
      description: 'Applies a random buff to 1 to 3 allies.  Caster Mask: applies a second random buff.'
    }
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
