import { GustaveSkill, LuneSkill, MaelleSkill, MonocoSkill, ScielSkill, Skill, VersoSkill } from '../types';

const GUSTAVE_SKILLS: GustaveSkill[] = [
  {
    id: 'from-fire',
    cost: 4,
    characterId: 'gustave',
    canBreak: false,
    en: {
      name: 'From Fire',
      description:
        "Deals medium single target damage. 3 hits. Uses weapon's element.\n<right-icon:heal>Heals</right-icon> self by 20% if the target <right-icon:burn>Burns</right-icon>."
    },
    es: {
      name: 'Desde el fuego',
      description:
        'Inflige daño moderado a un objetivo. 3 golpes. Usa el elemento del arma.\n<right-icon:heal>Cura</right-icon> un 20% de vida si el objetivo sufre <right-icon:burn>quemadura</right-icon>.'
    }
  },
  {
    id: 'lumiere-assault',
    cost: 3,
    characterId: 'gustave',
    canBreak: false,
    en: {
      name: 'Lumière Assault',
      description:
        "Deals low single target damage. 5 hits. Uses weapon's element.\n<right-icon:crit>Critical Hits</right-icon> generate 1 Additional <right-icon:gustave-charge>Charge</right-icon>."
    },
    es: {
      name: 'Asalto de Lumière',
      description:
        'Inflige daño leve a un objetivo. 5 golpes. Usa el elemento del arma.\nLos <right-icon:crit>golpes críticos</right-icon> generan 1 <right-icon:gustave-charge>carga</right-icon> adicional.'
    }
  },
  {
    id: 'marking-shot',
    cost: 2,
    characterId: 'gustave',
    canBreak: false,
    en: {
      name: 'Marking Shot',
      description:
        'Deals low single target <color:lightning>Lightning</color> damage. 1 hit.\nApplies <right-icon:mark>Mark</right-icon>.'
    },
    es: {
      name: 'Disparo marcador',
      description:
        'Inflige daño de <color:lightning>rayo</color> leve a un objetivo. 1 golpe.\nAplica <right-icon:mark>marca</right-icon>.'
    }
  },
  {
    id: 'overcharge',
    cost: 4,
    characterId: 'gustave',
    canBreak: true,
    en: {
      name: 'Overcharge',
      description:
        'High <color:lightning>Lightning</color> damage based on the amount of <right-icon:gustave-charge>Charges</right-icon>. 1 hit.\nCan <right-icon:break>Break</right-icon>.'
    },
    es: {
      name: 'Sobrecarga',
      description:
        'Inflige mucho daño de <color:lightning>rayo</color> a un solo objetivo en función de la cantidad de <right-icon:gustave-charge>cargas</right-icon>. 1 golpe.\nPuede causar <right-icon:break>ruptura</right-icon>. Restablece las cargas.'
    }
  },
  {
    id: 'powerful',
    cost: 3,
    characterId: 'gustave',
    canBreak: false,
    en: {
      name: 'Powerful',
      description:
        'Applies <right-icon:powerful>Powerful</right-icon> to 1-3 allies, increasing the damage they deal for 3 turns.\nGives 0 to 2 <right-icon:gustave-charge>Charges</right-icon>.'
    },
    es: {
      name: 'Fortalecimiento',
      description:
        'Aplica <right-icon:powerful>fortalecimiento</right-icon> a entre 1 y 3 aliados, lo que aumenta el daño que inflinguen durante 3 turnos.\nOtorga de 0 a 2 <right-icon:gustave-charge>cargas</right-icon>.'
    }
  },
  {
    id: 'recovery',
    cost: 3,
    characterId: 'gustave',
    canBreak: false,
    en: {
      name: 'Recovery',
      description:
        'Recovers 50% <right-icon:heal>Health</right-icon> and dispels Status Effects.\nGives 0-2 <right-icon:gustave-charge>Charges</right-icon>.'
    },
    es: {
      name: 'Recuperación',
      description:
        'Recupera un 50% de <right-icon:heal>vida</right-icon> y disipa las alteraciones e estado.\nOtorga de 0 a 2 <right-icon:gustave-charge>cargas</right-icon>.'
    }
  },
  {
    id: 'shatter',
    cost: 5,
    characterId: 'gustave',
    canBreak: true,
    en: {
      name: 'Shatter',
      description:
        'Deals High <color:lightning>Lightning</color> damage to all enemies. 1 hit.\nCan <right-icon:break>Break</right-icon>.\nIf a target is Broken by the hit, Overcharge is fully Charged.'
    },
    es: {
      name: 'Destrozo',
      description:
        'Inflige mucho daño de <color:lightning>rayo</color> a todos los enemigos. 1 golpe.\nPuede causar <right-icon:break>ruptura</right-icon>.\nSi le causa ruptura a un objetivo, Sobrecarga se carga por completo.'
    }
  },
  {
    id: 'strike-storm',
    cost: 7,
    characterId: 'gustave',
    canBreak: false,
    en: {
      name: 'Strike Storm',
      description:
        "Deals very high single target damage. 6 hits. Uses Weapon's element.\n<right-icon:crit>Critical Hits</right-icon> generate 2 additional <right-icon:gustave-charge>Charges</right-icon>."
    },
    es: {
      name: 'Tormenta de ataques',
      description:
        'Inflige muchísimo daño a un objetivo. 6 golpes. Usa el elemento del arma.\nLos <right-icon:crit>golpes críticos</right-icon> generan 2 <right-icon:gustave-charge>cargas</right-icon> adicionales.'
    }
  }
];

const LUNE_SKILLS: LuneSkill[] = [
  {
    id: 'crippling-tsunami',
    cost: 5,
    characterId: 'lune',
    canBreak: false,
    stains: ['ice', 'light'],
    en: {
      name: 'Crippling Tsunami',
      description:
        'Deals medium <color:ice>Ice</color> damage to all enemies. 1 hit. Applies <right-icon:slow>Slow</right-icon> for 3 turns.\nConsumes <icon:earth-stain /><icon:lightning-stain /><icon:fire-stain /> for greatly increased damage.'
    },
    es: {
      name: 'Tsunami Incapacitante',
      description:
        'Inflige daño de <color:ice>hielo</color> moderado a todos los enemigos. 1 golpe. Aplica <right-icon:slow>lentitud</right-icon> durante 3 turnos.\nConsume <icon:earth-stain /><icon:lightning-stain /><icon:fire-stain /> para infligir mucho más daño.'
    }
  },
  {
    id: 'crustal-crush',
    cost: 7,
    characterId: 'lune',
    canBreak: false,
    stains: ['earth', 'light'],
    en: {
      name: 'Crustal Crush',
      description:
        'Deals high single target <color:earth>Earth</color> and <right-icon:break>break damage</right-icon>. 5 hits.\nConsumes <icon:lightning-stain /><icon:lightning-stain />: Increased damage.'
    },
    es: {
      name: 'Corteza Aplastante',
      description:
        'Inflige mucho daño de <color:earth>tierra</color> y de <right-icon:break>ruptura</right-icon> a un enemigo. 5 golpes.\nConsume <icon:lightning-stain /><icon:lightning-stain />: Aumenta el daño.'
    }
  },
  {
    id: 'earth-rising',
    cost: 3,
    characterId: 'lune',
    canBreak: false,
    stains: ['earth'],
    en: {
      name: 'Earth Rising',
      description:
        'Deals low <color:earth>Earth</color> damage to all enemies. 1 hit.\nConsumes <icon:lightning-stain /> for increased damage.'
    },
    es: {
      name: 'Alzamiento Terrestre',
      description:
        'Inflige daño de <color:earth>tierra</color> leve a todos los enemigos. 1 golpe.\nConsume <icon:lightning-stain /> para infligir más daño.'
    }
  },
  {
    id: 'electrify',
    cost: 1,
    characterId: 'lune',
    canBreak: false,
    stains: ['lightning', 'lightning'],
    en: {
      name: 'Electrify',
      description:
        'Deals low single target <color:lightning>Lightning</color> damage. 3 hits. <right-icon:crit>Critical Hits</right-icon> trigger an additional hit.\nConsumes <icon:fire-stain /> to generate one Light Stain <icon:light-stain />.'
    },
    es: {
      name: 'Electrocución',
      description:
        'Inflige daño de <color:lightning>rayo</color> leve a un objetivo. 3 golpes. Los <right-icon:crit>golpes críticos</right-icon> propinan un golpe adicional.\nConsume <icon:fire-stain /> para generar un borrón de luz <icon:light-stain />.'
    }
  },
  {
    id: 'elemental-genesis',
    cost: 4,
    characterId: 'lune',
    canBreak: false,
    stains: [],
    en: {
      name: 'Elemental Genesis',
      description:
        'Deals extreme damage to all enemies. 8 hits. Each hit deals damage in a random element.\nCan only be cast with <icon:lightning-stain /><icon:earth-stain /><icon:fire-stain /><icon:ice-stain />.'
    },
    es: {
      name: 'Génesis Elemental',
      description:
        'Inflige daño extremo a todos los enemigos. 8 golpes. Cada golpe inflige daño de un elemento al azar.\nSolo se puede lanzar con <icon:lightning-stain /><icon:earth-stain /><icon:fire-stain /><icon:ice-stain />.'
    }
  },
  {
    id: 'elemental-trick',
    cost: 3,
    characterId: 'lune',
    canBreak: false,
    stains: [],
    en: {
      name: 'Elemental Trick',
      description:
        'Deals low single target <color:ice>Ice</color>, <color:fire>Fire</color>, <color:lightning>Lightning</color>, and <color:earth>Earth</color> damage. 4 hits.\n<right-icon:crit>Critical Hits</right-icon> generate the corresponding Stain.'
    },
    es: {
      name: 'Truco Elemental',
      description:
        'Inflige daño de <color:ice>hielo</color>, <color:fire>fuego</color>, <color:lightning>rayo</color> y <color:earth>tierra</color> leve a un objetivo. 4 golpes.\nLos <right-icon:crit>golpes críticos</right-icon> generan el borrón correspondiente.'
    }
  },
  {
    id: 'fire-rage',
    cost: 5,
    characterId: 'lune',
    canBreak: false,
    stains: ['fire', 'light'],
    en: {
      name: 'Fire Rage',
      description:
        'Deals increasingly high <color:fire>Fire</color> damage to all enemies every turn until Lune receives damage. Stuns self if interrupted.\nConsumes <icon:ice-stain /><icon:ice-stain />: Increased Damage.'
    },
    es: {
      name: 'Furia Ígnea',
      description:
        'Inflige daño de <color:fire>fuego</color> creciente cada turno a todos los enemigos hasta que Lune sufra daño. Si se interrumpe, aturde a Lune.\nConsume <icon:ice-stain /><icon:ice-stain />: Aumenta el daño.'
    }
  },
  {
    id: 'healing-light',
    cost: 3,
    characterId: 'lune',
    canBreak: false,
    stains: ['light'],
    en: {
      name: 'Healing Light',
      description:
        '<right-icon:heal>Heals</right-icon> the targeted Ally and dispels Status Effects.\nConsumes <icon:earth-stain /><icon:earth-stain />: Costs 0 <color:ap>AP</color>.'
    },
    es: {
      name: 'Luz Curativa',
      description:
        '<right-icon:heal>Cura</right-icon> al aliado seleccionado entre un 30% y un 50% de la vida y disipa las alteraciones de estado.\nConsume <icon:earth-stain /><icon:earth-stain />: Consume 0 <color:ap>PA</color>.'
    }
  },
  {
    id: 'hell',
    cost: 9,
    characterId: 'lune',
    canBreak: false,
    stains: ['fire', 'light'],
    en: {
      name: 'Hell',
      description:
        'Deals very high <color:fire>Fire</color> damage that applies 5 <right-icon:burn>Burn</right-icon> per hit to all enemies. 2 hits. Deals self-damage if failed.\nConsumes <icon:ice-stain /><icon:earth-stain /><icon:lightning-stain />: Greatly increased damage.'
    },
    es: {
      name: 'Infierno',
      description:
        'Inflige muchísimo daño de <color:fire>fuego</color> y aplica 5 acumulaciones de <right-icon:burn>quemadura</right-icon> por golpe a todos los enemigos. 2 golpes. Si falla, Lune se daña a sí misma.\nConsume <icon:ice-stain /><icon:earth-stain /><icon:lightning-stain />: Aumenta mucho el daño.'
    }
  },
  {
    id: 'ice-lance',
    cost: 4,
    characterId: 'lune',
    canBreak: false,
    stains: ['ice', 'light'],
    en: {
      name: 'Ice Lance',
      description:
        'Deals medium single target <color:ice>Ice</color> damage that <right-icon:slow>Slow</right-icon> the target. 1 Hit.\nConsumes <icon:earth-stain /> to deal increased damage.'
    },
    es: {
      name: 'Lanza de Hielo',
      description:
        'Inflige daño de <color:ice>hielo</color> moderado a un objetivo y le causa <right-icon:slow>lentitud</right-icon> 1 golpe.\nConsume <icon:earth-stain /> para infligir más daño.'
    }
  },
  {
    id: 'immolation',
    cost: 2,
    characterId: 'lune',
    canBreak: false,
    stains: ['fire'],
    en: {
      name: 'Immolation',
      description:
        'Deals low single target <color:fire>Fire</color> damage and 3 <right-icon:heal>Heals</right-icon>. 1 hit. Applies 2 more <right-icon:burn>Burns</right-icon> if the target is <right-icon:mark>Marked</right-icon>.\nConsumes <icon:ice-stain /> for increased damage.'
    },
    es: {
      name: 'Inmolación',
      description:
        'Inflige daño de <color:fire>fuego</color> leve y 3 acumulaciones de <right-icon:burn>quemadura</right-icon> a un objetivo. 1 golpe. Aplica 2 acumulaciones más de <right-icon:burn>quemadura</right-icon> si el objetivo está <right-icon:mark>marcado</right-icon>.\nConsume <icon:ice-stain /> para infligir más daño.'
    }
  },
  {
    id: 'lightning-dance',
    cost: 7,
    characterId: 'lune',
    canBreak: false,
    stains: ['lightning', 'light'],
    en: {
      name: 'Lightning Dance',
      description:
        'Deals very high single target <color:lightning>Lightning</color> damage. 6 hits. <right-icon:crit>Critical Hits</right-icon> trigger an additional hit.\nConsumes <icon:earth-stain /><icon:ice-stain /><icon:fire-stain />: Greatly increased damage.'
    },
    es: {
      name: 'Danza del Relámpago',
      description:
        'Inflige muchísimo daño de <color:lightning>rayo</color> a un objetivo. 6 golpes. Los <right-icon:crit>golpes críticos</right-icon> propinan un golpe adicional.\nConsume <icon:earth-stain /><icon:ice-stain /><icon:fire-stain />: Aumenta mucho el daño.'
    }
  },
  {
    id: 'mayhem',
    cost: 3,
    characterId: 'lune',
    canBreak: true,
    stains: [],
    en: {
      name: 'Mayhem',
      description:
        'Consumes all Stains to deal high elemental damage to the target. Can <right-icon:break>Break</right-icon> if 4 Stains are consumed.'
    },
    es: {
      name: 'Caos',
      description:
        'Consume todos los borrones para inflingirle mucho daño elemental al objetivo. Si se consume 4 borrones, puede causar <right-icon:break>ruptura</right-icon>.'
    }
  },
  {
    id: 'rebirth',
    cost: 5,
    characterId: 'lune',
    canBreak: false,
    stains: ['light'],
    en: {
      name: 'Rebirth',
      description:
        'Revives an ally with 30-70% Health and 2 additional <color:ap>AP</color>.\nConsumes <icon:lightning-stain /><icon:lightning-stain /><icon:lightning-stain />: Costs 0 <color:ap>AP</color>.'
    },
    es: {
      name: 'Renacer',
      description:
        'Revive a un aliado con un 30% al 70% de vida y 2 <color:ap>PA</color> adicionales.\nConsume <icon:lightning-stain /><icon:lightning-stain /><icon:lightning-stain />: Consume 0 <color:ap>PA</color>.'
    }
  },
  {
    id: 'revitalization',
    cost: 5,
    characterId: 'lune',
    canBreak: false,
    stains: ['light'],
    en: {
      name: 'Revitalization',
      description:
        '<right-icon:heal>Heals</right-icon> 1-3 allies by 40-60% Health.\nConsumes <icon:fire-stain /><icon:fire-stain /><icon:fire-stain /> to also apply <right-icon:regen>Regen</right-icon> that heals on turn start for 3 turns.'
    },
    es: {
      name: 'Revitalización',
      description:
        '<right-icon:heal>Cura</right-icon> de 1 a 3 aliados entre un 40% y un 60% de vida.\nConsume <icon:fire-stain /><icon:fire-stain /><icon:fire-stain /> para aplicar también <right-icon:regen>regeneración</right-icon>, que cura al inicia del turno.'
    }
  },
  {
    id: 'rockslide',
    cost: 5,
    characterId: 'lune',
    canBreak: true,
    stains: ['earth', 'light'],
    en: {
      name: 'Rockslide',
      description:
        'Deals medium single target <color:earth>Earth</color> damage. 2 hits. <right-icon:break>Can Break</right-icon>.\nConsumes <icon:lightning-stain /><icon:ice-stain /><icon:fire-stain /> for greatly increased damage.'
    },
    es: {
      name: 'Alud',
      description:
        'Inflige daño de <color:earth>tierra</color> moderado a un objetivo. 2 golpes. Puede causar <right-icon:break>ruptura</right-icon>.\nConsume <icon:lightning-stain /><icon:ice-stain /><icon:fire-stain /> para infligir mucho más daño.'
    }
  },
  {
    id: 'storm-caller',
    cost: 6,
    characterId: 'lune',
    canBreak: false,
    stains: ['lightning', 'light'],
    en: {
      name: 'Storm Caller',
      description:
        'All enemies receive medium <color:lightning>Lightning</color> damage at the end of their turn, and low <color:lightning>Lightning</color> damage when they receive damage. Duration: 3 turns.\nConsumes <icon:fire-stain /><icon:fire-stain /> for double thunder strikes on turn end.'
    },
    es: {
      name: 'Invocación de Tormentas',
      description:
        'Todos los enemigos reciben daño de <color:lightning>rayo</color> moerado al final de su turno, y daño de <color:lightning>rayo</color> leve cuando reciben daño. Duración: 3 turnos.\nConsume <icon:fire-stain /><icon:fire-stain /> para desatar ataques de trueno dobles al finalizar el turno.'
    }
  },
  {
    id: 'terraquake',
    cost: 5,
    characterId: 'lune',
    canBreak: false,
    stains: ['earth', 'light'],
    en: {
      name: 'Terraquake',
      description:
        'Deals low <color:earth>Earth</color> damage and <right-icon:break>break damage</right-icon> to all enemies every turn. Also increases all <right-icon:break>break damage</right-icon> received by 50%. Duration: 3 turns.\nConsumes <icon:lightning-stain /><icon:lightning-stain /> to increase the Duration to 5 turns.'
    },
    es: {
      name: 'Terremoto',
      description:
        'Inflige daño de <color:earth>tierra</color> y de <right-icon:break>ruptura</right-icon> leve a todos los enemigos cada turno. Además, aumenta todo el daño de <right-icon:break>ruptura</right-icon> recibido un 50%. Duración: 3 turnos.\nConsume <icon:lightning-stain /><icon:lightning-stain /> para aumentar la duración a 5 turnos.'
    }
  },
  {
    id: 'thermal-transfer',
    cost: 2,
    characterId: 'lune',
    canBreak: false,
    stains: ['ice'],
    en: {
      name: 'Thermal Transfer',
      description:
        'Deals low single target <color:ice>Ice</color> damage. 2 hits. Gains 4 <color:ap>AP</color> if target is <right-icon:burn>Burning</right-icon>.\nConsumes <icon:earth-stain /><icon:earth-stain />: Play a second turn.'
    },
    es: {
      name: 'Transferencia Térmica',
      description:
        'Inflige daño de <color:ice>hielo</color> leve a un objetivo. 2 golpes. Obtiene 4 <color:ap>PA</color> si el objetivo sufre <right-icon:burn>quemadura</right-icon>.\nConsume <icon:earth-stain /><icon:earth-stain />: Actúa una segunda vez.'
    }
  },
  {
    id: 'thunderfall',
    cost: 5,
    characterId: 'lune',
    canBreak: false,
    stains: ['lightning', 'light'],
    en: {
      name: 'Thunderfall',
      description:
        'Deals medium <color:lightning>Lightning</color> damage to random enemies. 2-6 hits. <right-icon:crit>Critical Hits</right-icon> trigger an additional hit.\nConsumes <icon:fire-stain /> for increased damage.'
    },
    es: {
      name: 'Tempestad',
      description:
        'Inflige daño de <color:lightning>rayo</color> moderado a enemigos al azar. 2 a 6 golpes. Los <right-icon:crit>golpes críticos</right-icon> propinan un golpe adicional.\nConsume <icon:fire-stain /> para infligir más daño.'
    }
  },
  {
    id: 'typhoon',
    cost: 8,
    characterId: 'lune',
    canBreak: false,
    stains: ['ice', 'light'],
    en: {
      name: 'Typhoon',
      description:
        'On turn start, deals high <color:ice>Ice</color> damage to all enemies and <right-icon:heal>Heals</right-icon> allies.\nConsumes <icon:earth-stain /><icon:earth-stain />: Duration increased from 3 to 5 turns.'
    },
    es: {
      name: 'Tifón',
      description:
        'Al inicio del turno, inflige mucho daño de <color:ice>hielo</color> a todos los enemigos y <right-icon:heal>cura</right-icon> a los aliados.\nConsume <icon:earth-stain /><icon:earth-stain />: Aumenta la duración de 3 a 5 turnos.'
    }
  },
  {
    id: 'wildfire',
    cost: 4,
    characterId: 'lune',
    canBreak: false,
    stains: ['fire', 'light'],
    en: {
      name: 'Wildfire',
      description:
        'Deals medium <color:fire>Fire</color> damage to all enemies. 1 hit. Applies 3 <right-icon:heal>Heals</right-icon>.\nConsumes <icon:ice-stain /><icon:ice-stain />: Increased Damage'
    },
    es: {
      name: 'Fuego Indómito',
      description:
        'Inflige daño de <color:fire>fuego</color> moderado a todos los enemigos. 1 golpe. Aplica 3 acumulaciones de <right-icon:burn>quemadura</right-icon>.\nConsume <icon:ice-stain /><icon:ice-stain />: Aumenta el daño.'
    }
  }
];

const MAELLE_SKILLS: MaelleSkill[] = [
  {
    id: 'breaking-rules',
    cost: 3,
    characterId: 'maelle',
    canBreak: false,
    nextPosture: 'offensive',
    en: {
      name: 'Breaking Rules',
      description:
        "Deals low single target <color:physical>Physical</color> damage. 2 hits.\nDestroys all target's <right-icon:shield>Shields</right-icon> Gains 1 <color:ap>AP</color> per <right-icon:shield>Shield</right-icon> destroyed.\nIf target is <right-icon:defenceless>Defenceless</right-icon>, play a second turn."
    },
    es: {
      name: 'Ruptura de Reglas',
      description:
        'Inflige daño <color:physical>físico</color> leve a un objetivo. 2 golpes.\nDestruye todos los <right-icon:shield>escudos</right-icon> del objetivo. Otorga 1 <color:ap>PA</color> por <right-icon:shield>escudo</right-icon> destruído.\nSi el objetivo sufre <right-icon:defenceless>fragilidad</right-icon>, actúa una segunda vez.'
    }
  },
  {
    id: 'burning-canvas',
    cost: 5,
    characterId: 'maelle',
    canBreak: false,
    nextPosture: 'offensive',
    en: {
      name: 'Burning Canvas',
      description:
        'Deals high single target <color:void>Void</color> damage. 5 hits.\nApplies 1 <right-icon:burn>Burn</right-icon> per hit. Damage increased for each <right-icon:burn>Burn</right-icon> on the target.'
    },
    es: {
      name: 'Lienzo Ardiente',
      description:
        'Inflige mucho daño de <color:void>vacío</color> a un objetivo. 5 golpes.\nAplica 1 acumulación de <right-icon:burn>quemadura</right-icon> por golpe. Inflige más daño por cada <right-icon:burn>quemadura</right-icon> en el objetivo.'
    }
  },
  {
    id: 'combustion',
    cost: 4,
    characterId: 'maelle',
    canBreak: false,
    nextPosture: 'offensive',
    en: {
      name: 'Combustion',
      description:
        'Deals medium single target <color:physical>Physical</color> Damage. 2 Hits.\nConsumes up to 10 <right-icon:burn>Burn</right-icon> for increased damage.'
    },
    es: {
      name: 'Combustión',
      description:
        'Inflige daño <color:physical>físico</color> moderado a un objetivo. 2 golpes.\nConsume hasta 10 acumulaciones de <right-icon:burn>quemadura</right-icon> para infligir más daño.'
    }
  },
  {
    id: 'degagement',
    cost: 2,
    characterId: 'maelle',
    canBreak: false,
    nextPosture: 'offensive',
    en: {
      name: 'Degagement',
      description:
        'Deals low single target <color:fire>Fire</color> damage. 1 hit.\nTarget becomes weak to <color:fire>Fire</color> damage for 2 turns.'
    },
    es: {
      name: 'Desenganche',
      description:
        'Inflige daño de <color:fire>fuego</color> leve a un objetivo. 1 golpe.\nEl objetivo se vuelve débil contra el daño de <color:fire>fuego</color> durante 2 turnos.'
    }
  },
  {
    id: 'egide',
    cost: 3,
    characterId: 'maelle',
    canBreak: false,
    nextPosture: 'defensive',
    en: {
      name: 'Egide',
      description:
        'Protects allies by taking damage in their place, for 2 turns.\nDuration is extended by 1 on gaining <right-icon:shell>Shell</right-icon>.'
    },
    es: {
      name: 'Égida',
      description:
        'Durante 2 turnos, recibe el daño de los aliados para protegerlos.\nLa duración se extiende en 1 al obtener <right-icon:shell>coraza</right-icon>.'
    }
  },
  {
    id: 'fencers-flurry',
    cost: 4,
    characterId: 'maelle',
    canBreak: false,
    nextPosture: 'offensive',
    en: {
      name: "Fencer's Flurry",
      description:
        "Deals medium damage to all enemies. 1 hit.\nUses weapon's element.\nApplies <right-icon:defenceless>Defenceless</right-icon> for 1 turn."
    },
    es: {
      name: 'Ráfaga de Esgrimista',
      description:
        'Inflige daño moderado a todos los enemigos. 1 golpe.\nUsa el elemento del arma.\nAplica <right-icon:defenceless>fragilidad</right-icon> durante 1 turno.'
    }
  },
  {
    id: 'fleuret-fury',
    cost: 6,
    characterId: 'maelle',
    canBreak: false,
    en: {
      name: 'Fleuret Fury',
      description:
        'Deals high single target <color:physical>Physical</color> damage. 3 hits.\nIf in  <right-icon:virtuose-stance>Virtuose Stance</right-icon>, stay in <right-icon:virtuose-stance>Virtuose Stance</right-icon>.\nCan <right-icon:break>Break</right-icon>.'
    },
    es: {
      name: 'Furia de Floretes',
      description:
        'Inflige mucho daño <color:physical>físico</color> a un objetivo. 3 golpes.\nSi está en <right-icon:virtuose-stance>postura virtuosa</right-icon>, permanece en <right-icon:virtuose-stance>postura virtuosa</right-icon>.\nPuede causar <right-icon:break>ruptura</right-icon>.'
    }
  },
  {
    id: 'guard-down',
    cost: 3,
    characterId: 'maelle',
    canBreak: false,
    nextPosture: 'offensive',
    en: {
      name: 'Guard Down',
      description: 'Applies <right-icon:defenceless>Defenceless</right-icon> to all enemies for 3 turns.'
    },
    es: {
      name: 'Guardia Baja',
      description: 'Aplica <right-icon:defenceless>fragilidad</right-icon> a todos los enemigos durante 3 turnos.'
    }
  },
  {
    id: 'guard-up',
    cost: 3,
    characterId: 'maelle',
    canBreak: false,
    nextPosture: 'offensive',
    en: {
      name: 'Guard Up',
      description: 'Applies <right-icon:shell>Shell</right-icon>, reducing damage taken, to up to 3 allies for 3 turns.'
    },
    es: {
      name: 'Guardia Alta',
      description:
        'Durante 3 turnos, aplica <right-icon:shell>coraza</right-icon> a un máximo de 3 aliados para reducir el daño que reciben.'
    }
  },
  {
    id: 'gustaves-homage',
    cost: 8,
    characterId: 'maelle',
    canBreak: false,
    nextPosture: 'virtuose',
    en: {
      name: "Gustave's Homage",
      description:
        "Deals high single target <color:lightning>Lightning</color> damage. 8 hits.\nIncreased damage to <right-icon:mark>Marked</right-icon> targets.\nDoesn't remove <right-icon:mark>Mark</right-icon>."
    },
    es: {
      name: 'Homenaje a Gustave',
      description:
        'Inflige mucho daño de <color:lightning>rayo</color> a un objetivo. 8 golpes.\nMayor daño contra objetivos <right-icon:mark>marcados</right-icon>.\nNo elimina la <right-icon:mark>marca</right-icon>.'
    }
  },
  {
    id: 'last-chance',
    cost: 1,
    characterId: 'maelle',
    canBreak: false,
    nextPosture: 'virtuose',
    en: {
      name: 'Last Chance',
      description:
        'Reduces self-Health to 1 but refills all <color:ap>AP</color>.\nSwitches to <right-icon:virtuose-stance>Virtuose Stance</right-icon>.'
    },
    es: {
      name: 'Última Oportunidad',
      description:
        'Reduce la vida propia a 1, pero restaura todos los <color:ap>PA</color>.\nCambia a <right-icon:virtuose-stance>postura virtuosa</right-icon>.'
    }
  },
  {
    id: 'mezzo-forte',
    cost: 1,
    characterId: 'maelle',
    canBreak: false,
    en: {
      name: 'Mezzo Forte',
      description: 'Reapplies current stance and gives 2-4 <color:ap>AP</color>.'
    },
    es: {
      name: 'Mezzoforte',
      description: 'Vuelve a aplicar la postura actual y otorga de 2 a 4 <color:ap>PA</color>.'
    }
  },
  {
    id: 'momentum-strike',
    cost: 7,
    characterId: 'maelle',
    canBreak: false,
    nextPosture: 'defensive',
    en: {
      name: 'Momentum Strike',
      description:
        "Deals high single target damage. 1 hit.\nUses weapon's element.\nIncreased damage to <right-icon:mark>Marked</right-icon> targets.\n<right-icon:virtuose-stance>Virtuose Stance</right-icon>: Costs 4 <color:ap>AP</color>."
    },
    es: {
      name: 'Ataque con Impulso',
      description:
        'Inflige mucho daño a un objetivo. 1 golpe.\nUsa el elemento del arma.\nMayor daño contra objetivos <right-icon:mark>marcados</right-icon>.\n<right-icon:virtuose-stance>Postura virtuosa</right-icon>: Consume 4 <color:ap>PA</color>.'
    }
  },
  {
    id: 'offensive-switch',
    cost: 1,
    characterId: 'maelle',
    canBreak: false,
    nextPosture: 'offensive',
    en: {
      name: 'Offensive Switch',
      description:
        "Deals low single target damage and applies <right-icon:defenceless>Defenceless</right-icon> for 3 turns. 1 hit.\nUses weapon's element."
    },
    es: {
      name: 'Cambio Ofensivo',
      description:
        'Inflige daño leve a un objetivo y aplica <right-icon:defenceless>fragilidad</right-icon> durante 3 turnos. 1 golpe.\nUsa el elemento del arma.'
    }
  },
  {
    id: 'payback',
    cost: 9,
    characterId: 'maelle',
    canBreak: false,
    nextPosture: 'defensive',
    en: {
      name: 'Payback',
      description:
        'Deals very high single target <color:physical>Physical</color> damage. 1 hit.\nReduced <color:ap>AP</color> cost for each attack parried since last turn.\nCan <right-icon:break>Break</right-icon>.'
    },
    es: {
      name: 'Revancha',
      description:
        'Inflige muchísimo daño <color:physical>físico</color> a un objetivo. 1 golpe.\nConsume menos <color:ap>PA</color> por cada ataque bloqueado desde el último turno.\nPuede causar <right-icon:break>ruptura</right-icon>.'
    }
  },
  {
    id: 'percee',
    cost: 5,
    characterId: 'maelle',
    canBreak: false,
    nextPosture: 'defensive',
    en: {
      name: 'Percee',
      description:
        'Deals medium single target <color:physical>Physical</color> damage. 1 hit.\nIncreased damage to <right-icon:mark>Marked</right-icon> targets.\n<right-icon:virtuose-stance>Virtuose Stance</right-icon>: Costs 2 <color:ap>AP</color>.'
    },
    es: {
      name: 'Percée',
      description:
        'Inflige daño <color:physical>físico</color> moderado a un objetivo. 1 golpe.\nMayor daño contra objetivos <right-icon:mark>marcados</right-icon>.\n<right-icon:virtuose-stance>Postura virtuosa</right-icon>: Consume 2 <color:ap>PA</color>.'
    }
  },
  {
    id: 'phantom-strike',
    cost: 7,
    characterId: 'maelle',
    canBreak: false,
    nextPosture: 'defensive',
    en: {
      name: 'Phantom Strike',
      description:
        'Deals very high <color:void>Void</color> damage to all enemies. 4 hits.\nAlso gives +35% of a Gradient Charge.'
    },
    es: {
      name: 'Ataque Fantasma',
      description:
        'Inflige muchísimo daño de <color:void>vacío</color> a todos los enemigos. 4 golpes.\nTambién otorga un 35% de una carga de gradiente.'
    }
  },
  {
    id: 'pyrolyse',
    cost: 9,
    characterId: 'maelle',
    canBreak: false,
    nextPosture: 'defensive',
    en: {
      name: 'Pyrolyse',
      description:
        'Deals extreme single target <color:fire>Fire</color> damage. 3 hits.\nApplies 5 <right-icon:burn>Burn</right-icon> per hit.\n<right-icon:offensive-stance>Offensive Stance</right-icon>: Applies 2 more <right-icon:burn>Burn</right-icon> per hit.'
    },
    es: {
      name: 'Pirólisis',
      description:
        'Inflige daño de fuego extremo a un objetivo. 3 golpes.\nAplica 5 acumulaciones de <right-icon:burn>quemadura</right-icon> por golpe.\n<right-icon:offensive-stance>Postura ofensive</right-icon>: Aplica 2 acumulaciones más de <right-icon:burn>quemadura</right-icon> por golpe.'
    }
  },
  {
    id: 'rain-of-fire',
    cost: 5,
    characterId: 'maelle',
    canBreak: false,
    nextPosture: 'offensive',
    en: {
      name: 'Rain of Fire',
      description:
        'Deals medium single target <color:fire>Fire</color> damage. 2 hits.\nApplies 3 <right-icon:burn>Burn</right-icon> per hit.\n<right-icon:defensive-stance>Defensive Stance</right-icon>: applies 2 more <right-icon:burn>Burn</right-icon> per hit.'
    },
    es: {
      name: 'Lluvia de Fuego',
      description:
        'Inflige daño de <color:fire>fuego</color> moderado a un objetivo. 2 golpes.\nAplica 3 acumulaciones de <right-icon:burn>quemadura</right-icon> por golpe.\n<right-icon:defensive-stance>Postura defensiva</right-icon>: Aplica 2 acumulaciones de <right-icon:burn>quemadura</right-icon> más por golpe.'
    }
  },
  {
    id: 'revenge',
    cost: 5,
    characterId: 'maelle',
    canBreak: false,
    nextPosture: 'defensive',
    en: {
      name: 'Revenge',
      description:
        'Deals high single target <color:fire>Fire</color> damage. 1 hit.\nDamage increased for each hit received since the previous turn.\nCan <right-icon:break>Break</right-icon>.'
    },
    es: {
      name: 'Venganza',
      description:
        'Inflige mucho daño de <color:fire>fuego</color> a un objetivo. 1 golpe.\nAumenta el daño por cada golpe recibido desde el turno anterior.\nPuede causar <right-icon:break>ruptura</right-icon>.'
    }
  },
  {
    id: 'spark',
    cost: 3,
    characterId: 'maelle',
    canBreak: false,
    nextPosture: 'defensive',
    en: {
      name: 'Spark',
      description:
        'Deals low single target <color:fire>Fire</color> damage. 1 hit.\nApplies 3 <right-icon:burn>Burn</right-icon>.\n<right-icon:offensive-stance>Offensive Stance</right-icon>: Applies 2 more <right-icon:burn>Burn</right-icon>.'
    },
    es: {
      name: 'Chispa',
      description:
        'Inflige daño de <color:fire>fuego</color> leve a un objetivo. 1 golpe.\nAplica 3 acumulaciones de <right-icon:burn>quemadura</right-icon>.\n<right-icon:offensive-stance>Postura ofensiva</right-icon>: Aplica 2 acumulaciones más de <right-icon:burn>quemadura</right-icon>.'
    }
  },
  {
    id: 'stendhal',
    cost: 8,
    characterId: 'maelle',
    canBreak: false,
    nextPosture: 'stanceless',
    en: {
      name: 'Stendhal',
      description:
        'Deals extreme single target <color:void>Void</color> damage. 1 hit.\nRemoves <right-icon:shield>self-Shields</right-icon> and self applies <right-icon:defenceless>Defenceless</right-icon>.'
    },
    es: {
      name: 'Stendhal',
      description:
        'Inflige daño de <color:void>vacío</color> extremo a un objetivo. 1 golpe.\nElimina los <right-icon:shield>escudos propios</right-icon> y se aplica <right-icon:defenceless>fragilidad</right-icon>.'
    }
  },
  {
    id: 'swift-stride',
    cost: 3,
    characterId: 'maelle',
    canBreak: false,
    nextPosture: 'virtuose',
    en: {
      name: 'Swift Stride',
      description:
        'Deals low single target <color:physical>Physical</color> damage. 1 hit.\nSwitches to <right-icon:virtuose-stance>Virtuose Stance</right-icon> if target is <right-icon:burn>Burning</right-icon>.\nRegains 0 to 2 <color:ap>AP</color>.'
    },
    es: {
      name: 'Zancada Rauda',
      description:
        'Inflige daño <color:physical>físico</color> leve a un objetivo. 1 golpe.\nCambia a <right-icon:virtuose-stance>postura virtuosa</right-icon> si el objetivo sufre <right-icon:burn>quemadura</right-icon>.\nRecupera de 0 a 2 <color:ap>PA</color>.'
    }
  },
  {
    id: 'sword-ballet',
    cost: 9,
    characterId: 'maelle',
    canBreak: false,
    nextPosture: 'defensive',
    en: {
      name: 'Sword Ballet',
      description:
        "Deals extreme single target damage. 5 hits.\nUses weapon's element.\n<right-icon:crit>Critical Hits</right-icon> deal double damage."
    },
    es: {
      name: 'Ballet de Espadas',
      description:
        'Inflige daño extremo a un objetivo. 5 golpes.\nUsa el elemento del arma.\nLos <right-icon:crit>golpes críticos</right-icon> infligen daño doble.'
    }
  }
];

const SCIEL_SKILLS: ScielSkill[] = [
  {
    id: 'all-set',
    cost: 6,
    characterId: 'sciel',
    canBreak: false,
    charge: 'sun',
    en: {
      name: 'All Set',
      description:
        'Applies <right-icon:shell>Shell</right-icon>, <right-icon:powerful>Powerful</right-icon>, and <right-icon:rush>Rush</right-icon> to all allies.'
    },
    es: {
      name: 'Todo Listo',
      description:
        'Aplica <right-icon:shell>coraza</right-icon>, <right-icon:powerful>fortalecimiento</right-icon> y <right-icon:rush>prisa</right-icon> a todos los aliados.'
    }
  },
  {
    id: 'bad-omen',
    cost: 3,
    characterId: 'sciel',
    canBreak: false,
    charge: 'sun',
    en: {
      name: 'Bad Omen',
      description:
        'Deals low <color:dark>Dark</color> damage to all enemies. 2 hits.\nApplies 2 <right-icon:foretell>Foretell</right-icon> per hit.'
    },
    es: {
      name: 'Mal Presagio',
      description:
        'Inflige daño de <color:dark>oscuridad</color> leve a todos los enemigos. 2 golpes.\nAplica 2 acumulaciones de <right-icon:foretell>augurio</right-icon> por golpe.'
    }
  },
  {
    id: 'card-weaver',
    cost: 3,
    characterId: 'sciel',
    canBreak: false,
    charge: 'sun',
    en: {
      name: 'Card Weaver',
      description:
        "Deals low single target <color:physical>Physical</color> damage. 1 hit.\nPropagates target's <right-icon:foretell>Foretell</right-icon> to all enemies.\nPlays a second turn."
    },
    es: {
      name: 'Tejedora de Cartas',
      description:
        'Inflige daño <color:physical>físico</color> leve a un objetivo. 1 golpe.\nPropaga el <right-icon:foretell>augurio</right-icon> del objetivo a todos los enemigos.\nActúa una segunda vez.'
    }
  },
  {
    id: 'dark-cleansing',
    cost: 0,
    characterId: 'sciel',
    canBreak: false,
    charge: 'moon',
    en: {
      name: 'Dark Cleansing',
      description: "Cleanses an ally of their Status Effects and propogates the target's buff to all allies."
    },
    es: {
      name: 'Purificación Oscura',
      description:
        'Disipa las alteraciones de estado de un aliado y propaga los potenciadores del objetivo a todos los aliados.'
    }
  },
  {
    id: 'dark-wave',
    cost: 6,
    characterId: 'sciel',
    canBreak: false,
    charge: 'moon',
    en: {
      name: 'Dark Wave',
      description:
        'Deals high <color:dark>Dark</color> damage to all enemies. 3 hits.\nConsumes all <right-icon:foretell>Foretell</right-icon> to deal additional damage.'
    },
    es: {
      name: 'Oleada Oscura',
      description:
        'Inflige mucho daño de <color:dark>oscuridad</color> a todos los enemigos. 3 golpes.\nConsume todas las acumulaciones de <right-icon:foretell>augurio</right-icon> para infligir más daño.'
    }
  },
  {
    id: 'delaying-slash',
    cost: 5,
    characterId: 'sciel',
    canBreak: false,
    charge: 'moon',
    en: {
      name: 'Delaying Slash',
      description:
        "Deals medium single targe damage. 2 hits.\nUses weapon's element.\nConsumes <right-icon:foretell>Foretell</right-icon> to increase damage and delay target's turn."
    },
    es: {
      name: 'Corte Retardante',
      description:
        'Inflige daño moderado a un objetivo. 2 golpes.\nUsa el elemento del arma.\nConsume <right-icon:foretell>augurio</right-icon> para aumentar el daño y retrasar el turno del objetivo.'
    }
  },
  {
    id: 'final-path',
    cost: 9,
    characterId: 'sciel',
    canBreak: true,
    charge: 'sun',
    en: {
      name: 'Final Path',
      description:
        'Deal extreme single target <color:dark>Dark</color> damage and applies 10 <right-icon:foretell>Foretell</right-icon> 1 hit.\nCan <right-icon:break>Break</right-icon>.'
    },
    es: {
      name: 'Senda Final',
      description:
        'Inflige daño de <color:dark>oscuridad</color> extremo a un objetivo y le aplica 10 acumulaciones de <right-icon:foretell>augurio</right-icon>. 1 golpe.\nPuede causar <right-icon:break>ruptura</right-icon>.'
    }
  },
  {
    id: 'firing-shadow',
    cost: 3,
    characterId: 'sciel',
    canBreak: false,
    charge: 'moon',
    en: {
      name: 'Firing Shadow',
      description:
        'Deals low <color:dark>Dark</color> damage to all enemies. 3 hits.\nConsumes 1 <right-icon:foretell>Foretell</right-icon> per hit for increased damage.'
    },
    es: {
      name: 'Sombra Ardiente',
      description:
        'Inflige daño de <color:dark>oscuridad</color> leve a todos los enemigos. 3 golpes.\nConsume 1 acumulación de <right-icon:foretell>augurio</right-icon> por golpe para infligir más daño.'
    }
  },
  {
    id: 'focused-foretell',
    cost: 2,
    characterId: 'sciel',
    canBreak: false,
    charge: 'sun',
    en: {
      name: 'Focused Foretell',
      description:
        'Deals medium single target <color:physical>Physical</color> damage. 1 hit.\nApplies 2 <right-icon:foretell>Foretell</right-icon>.\nApplies 3 additional Foretell if target has 0 <right-icon:foretell>Foretell</right-icon>.'
    },
    es: {
      name: 'Augurio Enfocado',
      description:
        'Inflige daño <color:physical>físico</color> moderado a un objetivo. 1 golpe.\nAplica 2 acumulaciones de <right-icon:foretell>augurio</right-icon>.\nAplica 3 acumulaciones más de <right-icon:foretell>augurio</right-icon> si el objetivo no tiene acumulaciones de <right-icon:foretell>augurio</right-icon>.'
    }
  },
  {
    id: 'fortunes-fury',
    cost: 5,
    characterId: 'sciel',
    canBreak: false,
    charge: 'sun',
    en: {
      name: "Fortune's Fury",
      description: 'Targeted ally deals double damage for 1 turn.'
    },
    es: {
      name: 'Furia de la Fortuna',
      description: 'El aliado seleccionado inflige daño doble durante 1 turno.'
    }
  },
  {
    id: 'grim-harvest',
    cost: 5,
    characterId: 'sciel',
    canBreak: false,
    charge: 'moon',
    en: {
      name: 'Grim Harvest',
      description:
        'Deals medium single target <color:dark>Dark</color> damage. 1 hit.\n<right-icon:heal>Heals</right-icon> all allies by 30% Health.\nConsumes <right-icon:foretell>Foretell</right-icon> to increase <right-icon:heal>Heal</right-icon> by 5% per <right-icon:foretell>Foretell</right-icon>'
    },
    es: {
      name: 'Cosecha Nefasta',
      description:
        'Inflige daño de <color:dark>oscuridad</color> moderado a un objetivo. 1 golpe.\n<right-icon:heal>Cura</right-icon> a todos los aliados un 30% de vida.\nConsume <right-icon:foretell>augurio</right-icon> para aumentar la <right-icon:heal>curación</right-icon> un 5% por acumulación de <right-icon:foretell>augurio</right-icon>.'
    }
  },
  {
    id: 'harvest',
    cost: 3,
    characterId: 'sciel',
    canBreak: false,
    charge: 'moon',
    en: {
      name: 'Harvest',
      description:
        "Deals medium single target damage. 1 hit.\nUses weapon's element.\n<right-icon:heal>Heals</right-icon> self by 40% Health.\nConsumes all <right-icon:foretell>Foretell</right-icon> to increase <right-icon:heal>Heal</right-icon> by 5% per <right-icon:foretell>Foretell</right-icon>."
    },
    es: {
      name: 'Cosecha',
      description:
        'Inflige daño moderado a un objetivo. 1 golpe.\nUsa el elemento del arma.\n<right-icon:heal>Cura</right-icon> a Sciel un 40% de vida.\nConsume todo el <right-icon:foretell>augurio</right-icon> para aumentar la <right-icon:heal>curación</right-icon> un 5% por cada acumulación de <right-icon:foretell>augurio</right-icon>.'
    }
  },
  {
    id: 'intervention',
    cost: 5,
    characterId: 'sciel',
    canBreak: false,
    charge: 'moon',
    en: {
      name: 'Intervention',
      description: 'Targeted ally plays immediately and gains 4 <color:ap>AP</color>.'
    },
    es: {
      name: 'Intervención',
      description: 'El aliado seleccionado actúa de inmediato y obtiene 4 <color:ap>PA</color>.'
    }
  },
  {
    id: 'marking-card',
    cost: 3,
    characterId: 'sciel',
    canBreak: false,
    charge: 'sun',
    en: {
      name: 'Marking Card',
      description:
        'Deals medium single target <color:dark>Dark</color> damge. 2 hits.\nApplies <right-icon:mark>Mark</right-icon> to the target.\nApplies 3 <right-icon:foretell>Foretell</right-icon>.'
    },
    es: {
      name: 'Carta de Marca',
      description:
        'Inflige daño de <color:dark>oscuridad</color> moderado a un objetivo. 2 golpes.\nLe aplica <right-icon:mark>marca</right-icon> al objetivo.\nAplica 3 acumulaciones de <right-icon:foretell>augurio</right-icon>.'
    }
  },
  {
    id: 'our-sacrifice',
    cost: 4,
    characterId: 'sciel',
    canBreak: false,
    charge: 'moon',
    en: {
      name: 'Our Sacrifice',
      description:
        "Deals extreme <color:dark>Dark</color> damage to all enemies. 1 hit.\nAbsorbs allies' Health and enemies' <right-icon:foretell>Foretell</right-icon> to deal increased damage."
    },
    es: {
      name: 'Nuestro Sacrificio',
      description:
        'Inflige daño de <color:dark>oscuridad</color> extremo a todos los enemigos. 1 golpe.\nAbsorbe la vida de los aliados y el <right-icon:foretell>augurio</right-icon> de los enemigos para infligir más daño.'
    }
  },
  {
    id: 'phantom-blade',
    cost: 5,
    characterId: 'sciel',
    canBreak: true,
    charge: 'moon',
    en: {
      name: 'Phantom Blade',
      description:
        'Deals high single target <color:dark>Dark</color> damage. 1 hit.\nConsumes all <right-icon:foretell>Foretell</right-icon> to deal additional damage.\nCan <right-icon:break>Break</right-icon>.'
    },
    es: {
      name: 'Espada Fantasma',
      description:
        'Inflige mucho daño de <color:dark>oscuridad</color> a un objetivo. 1 golpe.\nConsume todas las acumulaciones de <right-icon:foretell>augurio</right-icon> para infligir más daño.\nPuede causar <right-icon:break>ruptura</right-icon>.'
    }
  },
  {
    id: 'plentiful-harvest',
    cost: 4,
    characterId: 'sciel',
    canBreak: false,
    charge: 'moon',
    en: {
      name: 'Plentiful Harvest',
      description:
        'Deals medium single target <color:physical>Physical</color> damage. 2 hits.\nConsumes all <right-icon:foretell>Foretell</right-icon> on a target and gives 1 <color:ap>AP</color> to a party member for each <right-icon:foretell>Foretell</right-icon> consumed.'
    },
    es: {
      name: 'Cosecha Abundante',
      description:
        'Inflige daño <color:physical>físico</color> moderado a un objetivo. 2 golpes.\nConsume todas las acumulaciones de <right-icon:foretell>augurio</right-icon> de un objetivo y otorga 1 <color:ap>PA</color> al grupo por cada acumulación de <right-icon:foretell>augurio</right-icon> consumida.'
    }
  },
  {
    id: 'rush',
    cost: 3,
    characterId: 'sciel',
    canBreak: false,
    charge: 'sun',
    en: {
      name: 'Rush',
      description: 'Applies <right-icon:rush>Rush</right-icon> to 1-3 allies, increasing their speed for 3 turns.'
    },
    es: {
      name: 'Prisa',
      description:
        'Aplica <right-icon:rush>prisa</right-icon> a entre 1 y 3 aliados, que aumenta su velocidad durante 3 turnos.'
    }
  },
  {
    id: 'sealed-fate',
    cost: 4,
    characterId: 'sciel',
    canBreak: false,
    charge: 'moon',
    en: {
      name: 'Sealed Fate',
      description: `Deals high single target damage. 5-7 hits.\nUses weapon's element.\nEach hit can consume 1 <right-icon:foretell>Foretell</right-icon> to deal 200% more damage.\n<right-icon:crit>Critical Hits</right-icon> don't remove the <right-icon:foretell>Foretell</right-icon> but still gets the damage increase.`
    },
    es: {
      name: 'Destino Sellado',
      description:
        'Inflige mucho daño a un objetivo. 5 a 7 golpes.\nUsa el elemento del arma.\nCada golpe puede consumir 1 acumulación de <right-icon:foretell>augurio</right-icon> para infligir un 200% más de daño.\nLos <right-icon:crit>golpes críticos</right-icon> no consumen <right-icon:foretell>augurio</right-icon>, pero sí otorgan el aumento de daño.'
    }
  },
  {
    id: 'searing-bond',
    cost: 4,
    characterId: 'sciel',
    canBreak: false,
    charge: 'sun',
    en: {
      name: 'Searing Bond',
      description:
        'Deals medium single target <color:dark>Dark</color> damage. 1 hit.\nApplies 5 <right-icon:foretell>Foretell</right-icon>.\nAlso deals damage and applies <right-icon:foretell>Foretell</right-icon> to every other <right-icon:burn>Burning</right-icon> enemies.'
    },
    es: {
      name: 'Vínculo Abrasador',
      description:
        'Inflige daño de <color:dark>oscuridad</color> moderado a un objetivo. 1 golpe.\nAplica 5 acumulaciones de <right-icon:foretell>augurio</right-icon>.\nAdemás, inflige daño y aplica <right-icon:foretell>augurio</right-icon> a los demás enemigos que sufran <right-icon:burn>quemadura</right-icon>.'
    }
  },
  {
    id: 'spectral-sweep',
    cost: 7,
    characterId: 'sciel',
    canBreak: false,
    charge: 'sun',
    en: {
      name: 'Spectral Sweep',
      description: `Deals medium single target damage. 2 to 6 hits.\nUses weapon's element. Applies 1 <right-icon:foretell>Foretell</right-icon> per hit.\n<right-icon:crit>Critical Hits</right-icon> apply an additional <right-icon:foretell>Foretell</right-icon>.`
    },
    es: {
      name: 'Barrido Espectral',
      description:
        'Inflige daño moderado a un objetivo. 2 a 6 golpes.\nAplica 1 acumulación de <right-icon:foretell>augurio</right-icon> por golpe.\nLos <right-icon:crit>golpes críticos</right-icon> aplican una acumulación adicional de <right-icon:foretell>augurio</right-icon>.'
    }
  },
  {
    id: 'twilight-dance',
    cost: 9,
    characterId: 'sciel',
    canBreak: false,
    charge: 'moon',
    en: {
      name: 'Twilight Dance',
      description:
        'Deals extreme single target <color:dark>Dark</color> damage. 4 hits.\nDuring <right-icon:twilight>Twilight</right-icon>, extends <right-icon:twilight>Twilight</right-icon> duration by 1 turn.\nConsumes all <right-icon:foretell>Foretell</right-icon> to deal additional damage.'
    },
    es: {
      name: 'Danza Crepuscular',
      description:
        'Inflige daño de <color:dark>oscuridad</color> extremo a un objetivo. 4 golpes.\nDurante <right-icon:twilight>Crepúsculo</right-icon>, extiende la duración de <right-icon:twilight>Crepúsculo</right-icon> en 1 turno.\nConsume todas las acumulaciones de <right-icon:foretell>augurio</right-icon> para infligir más daño.'
    }
  },
  {
    id: 'twilight-slash',
    cost: 2,
    characterId: 'sciel',
    canBreak: false,
    charge: 'moon',
    en: {
      name: 'Twilight Slash',
      description:
        'Deals low single target <color:dark>Dark</color> damage. 1 hit.\nConsumes all <right-icon:foretell>Foretell</right-icon> to deal additional damage.'
    },
    es: {
      name: 'Corte Crepuscular',
      description:
        'Inflige daño de <color:dark>oscuridad</color> leve a un objetivo. 1 golpe.\nConsume todas las acumulaciones de <right-icon:foretell>augurio</right-icon> para infligir más daño.'
    }
  }
];

const VERSO_SKILLS: VersoSkill[] = [
  {
    id: 'ascending-assault',
    cost: 5,
    characterId: 'verso',
    canBreak: false,
    buffedRank: 'S',
    en: {
      name: 'Ascending Assault',
      description:
        "Deals low single target damage. 1 hit.\nUses weapon's element.\nIncrease damage at each cast.\n<icon:s-rank />: Costs 2 <color:ap>AP</color>."
    },
    es: {
      name: 'Asalto Ascendente',
      description:
        'Inflige daño leve a un objetivo. 1 golpe.\nUsa el elemento del arma.\nAumenta el daño con cada lanzamiento.\n<icon:s-rank />: Consume 2 <color:ap>PA</color>.'
    }
  },
  {
    id: 'assault-zero',
    cost: 3,
    characterId: 'verso',
    canBreak: false,
    buffedRank: 'B',
    en: {
      name: 'Assault Zero',
      description:
        "Deals low single target damage. 5 hits.\nUses weapon's element.\n<right-icon:crit>Critical Hits</right-icon> generate 1 additional <right-icon:perfection>Perfection</right-icon>.\n<icon:b-rank />: Increased damage."
    },
    es: {
      name: 'Asalto Cero',
      description:
        'Inflige daño leve a un objetivo. 5 golpes.\nUsa el elemento del arma.\nLos <right-icon:crit>golpes críticos</right-icon> generan 1 de <right-icon:perfection>perfección</right-icon> adicional.\n<icon:b-rank />: Aumenta el daño.'
    }
  },
  {
    id: 'berserk-slash',
    cost: 4,
    characterId: 'verso',
    canBreak: false,
    buffedRank: 'C',
    en: {
      name: 'Berserk Slash',
      description:
        'Deals medium single target <color:physical>Physical</color> damage. 3 hits.\nDamage is increased for each health Verso is missing.\n<icon:c-rank />: Increased damage'
    },
    es: {
      name: 'Corte Frenético',
      description:
        'Inflige daño <color:physical>físico</color> moderado a un objetivo. 3 golpes.\nEl daño aumenta en función de la vida que le falte a Verso.\n<icon:c-rank />: Aumenta el daño.'
    }
  },
  {
    id: 'blitz',
    cost: 3,
    characterId: 'verso',
    canBreak: false,
    buffedRank: 'B',
    en: {
      name: 'Blitz',
      description:
        'Deals low single target <color:physical>Physical</color> damage. 1 hit.\nPlays a second time. Kills non-boss enemies with less than 10% health.\n<icon:b-rank />: Increased damage.'
    },
    es: {
      name: 'Relámpago',
      description:
        'Inflige daño <color:physical>físico</color> leve a un objetivo. 1 golpe.\nActúa una segunda vez. Mata a los enemigos que no sean jefes y que tengan menos del 10% de vida.\n<icon:b-rank />: Aumenta el daño.'
    }
  },
  {
    id: 'burden',
    cost: 1,
    characterId: 'verso',
    canBreak: false,
    en: {
      name: 'Burden',
      description: 'Removes all Status Effects from all allies and applies them to Verso.\nGains 1 Rank.'
    },
    es: {
      name: 'Lastre',
      description: 'Disipa las alteraciones de estado de todos los aliados y se las aplica a Verso.\nObtiene 1 grado.'
    }
  },
  {
    id: 'defiant-strike',
    cost: 3,
    characterId: 'verso',
    canBreak: false,
    buffedRank: 'B',
    en: {
      name: 'Defiant Strike',
      description:
        'Deals high single target <color:physical>Physical</color> damage that applies <right-icon:mark>Mark</right-icon>. 2 hits.\nCosts 30% of current Health.\n<icon:b-rank />: Increased damage.'
    },
    es: {
      name: 'Ataque Desafiante',
      description:
        'Inflige mucho daño <color:physical>físico</color> a un objetivo y le aplica <right-icon:mark>marca</right-icon>. 2 golpes.\nConsume el 30% de la vida actual.\n<icon:b-rank />: Aumenta el daño.'
    }
  },
  {
    id: 'end-bringer',
    cost: 9,
    characterId: 'verso',
    canBreak: false,
    buffedRank: 'A',
    en: {
      name: 'End Bringer',
      description:
        'Deals extreme single target <color:physical>Physical</color> damage. 6 hits.\nIncreased damage if the target is <right-icon:stun>Stunned</right-icon>.\n<icon:a-rank />: Can reapply <right-icon:stun>Stun</right-icon>.'
    },
    es: {
      name: 'Heraldo del Fin',
      description:
        'Inflige daño físico extremo a un objetivo. 6 golpes.\nAumenta el daño si el objetivo está <right-icon:stun>aturdido</right-icon>.\n<icon:a-rank />: Puede volver a aplicar <right-icon:stun>aturdimiento</right-icon>.'
    }
  },
  {
    id: 'follow-up',
    cost: 5,
    characterId: 'verso',
    canBreak: false,
    buffedRank: 'S',
    en: {
      name: 'Follow Up',
      description:
        'Deals medium single target <color:light>Light</color> damage. 1 hit.\nDamage increased for each Free Aim shot this turn, up to 10 times.\n<icon:s-rank />: Costs 2 <color:ap>AP</color>.'
    },
    es: {
      name: 'Mira Letal',
      description:
        'Inflige daño de <color:light>luz</color> moderado a un objetivo. 1 golpe.\nEl daño aumenta por cada disparo con apuntado libre efectuado en este turno, hasta un máximo de 10 veces.\n<icon:s-rank />: Consume 2 <color:ap>PA</color>.'
    }
  },
  {
    id: 'from-fire',
    cost: 4,
    characterId: 'verso',
    canBreak: false,
    buffedRank: 'B',
    en: {
      name: 'From Fire',
      description:
        "Deals medium single target damage. 3 hits.\nUses weapon's element.\n<right-icon:heal>Heals</right-icon> self by 20% Health if the target <right-icon:burn>Burns</right-icon>.\n<icon:b-rank />: Increased damage."
    },
    es: {
      name: 'Desde el Fuego',
      description:
        'Inflige daño moderado a un objetivo. 3 golpes.\nUsa el elemento del arma.\n<right-icon:heal>Cura</right-icon> un 20% de vida si el objetivo sufre <right-icon:burn>quemadura</right-icon>.\n<icon:b-rank />: Aumenta el daño.'
    }
  },
  {
    id: 'leadership',
    cost: 3,
    characterId: 'verso',
    canBreak: false,
    buffedRank: 'C',
    en: {
      name: 'Leadership',
      description:
        'Reduces current Rank.\nGives 2-4 <color:ap>AP</color> to other allies.\n<icon:c-rank />: +1 more <color:ap>AP</color> to other allies.'
    },
    es: {
      name: 'Liderazgo',
      description:
        'Reduce el grado actual.\nOtorga de 2 a 4 <color:ap>PA</color> a otros aliados.\n<icon:c-rank />: +1 <color:ap>PA</color> más a otros aliados.'
    }
  },
  {
    id: 'light-holder',
    cost: 4,
    characterId: 'verso',
    canBreak: false,
    buffedRank: 'A',
    en: {
      name: 'Light Holder',
      description:
        'Medium single target <color:light>Light</color> damage. 5 hits.\nAt completion, gains 1 Rank.\n<icon:a-rank />: +2 <color:ap>AP</color>.'
    },
    es: {
      name: 'Portaluz',
      description:
        'Inflige daño de <color:light>luz</color> moderado a un objetivo. 5 golpes.\nTras completarse, otorga 1 grado.\n<icon:a-rank />: +2 <color:ap>PA</color>.'
    }
  },
  {
    id: 'marking-shot',
    cost: 2,
    characterId: 'verso',
    canBreak: false,
    buffedRank: 'C',
    en: {
      name: 'Marking Shot',
      description:
        "Deals low single target damage. 1 hit.\nUses weapon's element.\nApplies <right-icon:mark>Mark</right-icon>.\n<icon:c-rank />: Increased damage."
    },
    es: {
      name: 'Disparo Marcador',
      description:
        'Inflige daño leve a un objetivo. 1 golpe.\nUsa el elemento del arma.\nAplica <right-icon:mark>marca</right-icon>.\n<icon:c-rank />: Aumenta el daño.'
    }
  },
  {
    id: 'overload',
    cost: 6,
    characterId: 'verso',
    canBreak: false,
    en: {
      name: 'Overload',
      description: 'Increases Rank to <icon:a-rank /> and refills all <color:ap>AP</color> but sets self-Health to 1.'
    },
    es: {
      name: 'Sobrecarga',
      description:
        'Aumenta el grado a <icon:a-rank /> y restablece todos los <color:ap>PA</color>, pero deja la vida propia en 1.'
    }
  },
  {
    id: 'paradigm-shift',
    cost: 1,
    characterId: 'verso',
    canBreak: false,
    buffedRank: 'C',
    en: {
      name: 'Paradigm Shift',
      description:
        'Deals low <color:physical>Physical</color> single target damage and gives 1-3 <color:ap>AP</color> back. 3 hits.\n<icon:c-rank />: +1 <color:ap>AP</color>.'
    },
    es: {
      name: 'Cambio de Paradigma',
      description:
        'Inflige daño <color:physical>físico</color> leve a un objetivo y devuelve de 1 a 3 <color:ap>PA</color>. 3 golpes.\n<icon:c-rank />: +1 <color:ap>PA</color>.'
    }
  },
  {
    id: 'perfect-break',
    cost: 7,
    characterId: 'verso',
    canBreak: true,
    buffedRank: 'B',
    en: {
      name: 'Perfect Break',
      description:
        'Deals very high single target <color:light>Light</color> damage. 1 hit.\nCan <right-icon:break>Break</right-icon>.\n Rank <icon:s-rank /> on <right-icon:break>Break</right-icon>.\n<icon:b-rank />: Costs 5 <color:ap>AP</color>'
    },
    es: {
      name: 'Ruptura Perfecta',
      description:
        'Inflige muchísimo daño de <color:light>luz</color> a un objetivo. 1 golpe.\nPuede causar <right-icon:break>ruptura</right-icon>.\nGrado <icon:s-rank /> en caso de <right-icon:break>ruptura</right-icon>.\n<icon:b-rank />: Consume 5 <color:ap>PA</color>.'
    }
  },
  {
    id: 'perfect-recovery',
    cost: 3,
    characterId: 'verso',
    canBreak: false,
    buffedRank: 'C',
    en: {
      name: 'Perfect Recovery',
      description:
        '<right-icon:heal>Recovers</right-icon> 50% Health and dispels Status Effects.\nGives 0-2 <right-icon:perfection>Perfection</right-icon>.\n<icon:c-rank />: Increased heal to 100% Health.'
    },
    es: {
      name: 'Recuperación Perfecta',
      description:
        '<right-icon:heal>Recupera</right-icon> un 50% de vida y disipa las alteraciones de estado.\nOtorga de 0 a 2 acumulaciones de <right-icon:perfection>perfección</right-icon>.\n<icon:c-rank />: Aumenta la curación al 100% de la vida.'
    }
  },
  {
    id: 'phantom-stars',
    cost: 9,
    characterId: 'verso',
    canBreak: true,
    buffedRank: 'S',
    en: {
      name: 'Phantom Stars',
      description:
        'Deals extreme <color:light>Light</color> damage to all enemies. 5 hits.\nCan <right-icon:break>Break</right-icon>.\n<icon:s-rank />: Costs 5 <color:ap>AP</color>.'
    },
    es: {
      name: 'Estrellas Fantasma',
      description:
        'Inflige daño de <color:light>luz</color> extremo a todos los enemigos. 5 golpes.\nPuede causar <right-icon:break>ruptura</right-icon>.\n<icon:s-rank />: Consume 5 <color:ap>PA</color>.'
    }
  },
  {
    id: 'powerful',
    cost: 3,
    characterId: 'verso',
    canBreak: false,
    buffedRank: 'A',
    en: {
      name: 'Powerful',
      description:
        'Applies <right-icon:powerful>Powerful</right-icon> to 1-3 Allies, increasing damage they deal for 3 turns.\nGives 0-2 <right-icon:perfection>Perfection</right-icon>.\n<icon:a-rank />: Duration increased to 5 turns.'
    },
    es: {
      name: 'Fortalecimiento',
      description:
        'Aplica <right-icon:powerful>fortalecimiento</right-icon> a entre 1 y 3 aliados, lo que aumenta el daño que infligen durante 3 turnos.\nOtorga de 0 a 2 acumulaciones de <right-icon:perfection>perfección</right-icon>.\n<icon:a-rank />: La duración aumenta a 5 turnos.'
    }
  },
  {
    id: 'purification',
    cost: 5,
    characterId: 'verso',
    canBreak: false,
    buffedRank: 'B',
    en: {
      name: 'Purification',
      description:
        'Deals single target medium <color:light>Light</color> damage. 2 hits.\nDispels self Status Effects.\n<icon:b-rank />: Increased damage.'
    },
    es: {
      name: 'Purificación',
      description:
        'Inflige daño de <color:light>luz</color> moderado a un objetivo. 2 golpes.\nDisipa las alteraciones de estado propias.\n<icon:b-rank />: Aumenta el daño.'
    }
  },
  {
    id: 'quick-strike',
    cost: 2,
    characterId: 'verso',
    canBreak: false,
    buffedRank: 'D',
    en: {
      name: 'Quick Strike',
      description:
        'Deals low single target <color:physical>Physical</color> damage. 1 hit.\n<icon:d-rank />: Gives more <right-icon:perfection>Perfection</right-icon>.'
    },
    es: {
      name: 'Ataque Rápido',
      description:
        'Inflige daño <color:physical>físico</color> leve a un objetivo. 1 golpe.\n<icon:d-rank />: Otorga más <right-icon:perfection>perfección</right-icon>.'
    }
  },
  {
    id: 'radiant-slash',
    cost: 2,
    characterId: 'verso',
    canBreak: true,
    buffedRank: 'C',
    en: {
      name: 'Radiant Slash',
      description:
        'Deals low <color:light>Light</color> damage to all enemies. 1 hit.\nCan <right-icon:break>Break</right-icon>.\n<icon:c-rank />: Increased damage.'
    },
    es: {
      name: 'Corte Radiante',
      description:
        'Inflige daño de <color:light>luz</color> leve a todos los enemigos. 1 golpe.\nPuede causar <right-icon:break>ruptura</right-icon>.\n<icon:c-rank />: Aumenta el daño.'
    }
  },
  {
    id: 'speed-burst',
    cost: 6,
    characterId: 'verso',
    canBreak: false,
    buffedRank: 'C',
    en: {
      name: 'Speed Burst',
      description:
        'Deals high single target <color:light>Light</color> damage. 5 hits.\nDamage increased by Speed difference with the target.\n<icon:c-rank />: Increased damage'
    },
    es: {
      name: 'Acelerón',
      description:
        'Inflige mucho daño de <color:light>luz</color> a un objetivo. 5 golpes.\nEl daño aumenta según la diferencia de velocidad con el objetivo.\n<icon:c-rank />: Aumenta el daño.'
    }
  },
  {
    id: 'steeled-strike',
    cost: 9,
    characterId: 'verso',
    canBreak: false,
    buffedRank: 'S',
    en: {
      name: 'Steeled Strike',
      description:
        'After 1 turn, deals extreme single target <color:physical>Physical</color> damage. 13 hits.\nInterrupted if any damage taken.\n<icon:s-rank />: Increased damage.'
    },
    es: {
      name: 'Ataque de Acero',
      description:
        'Después de 1 turno, inflige daño <color:physical>físico</color> extremo a un objetivo. 13 golpes.\nSe interrumpe al recibir daño.\n<icon:s-rank />: Aumenta el daño.'
    }
  },
  {
    id: 'strike-storm',
    cost: 7,
    characterId: 'verso',
    canBreak: false,
    buffedRank: 'C',
    en: {
      name: 'Strike Storm',
      description:
        "Deals very high single target damage. 5 hits.\nUses weapon's element.\n<right-icon:crit>Critical Hits</right-icon> generate 2 additional <right-icon:perfection>Perfection</right-icon>.\n<icon:c-rank />: Increased damage"
    },
    es: {
      name: 'Tormenta de Ataques',
      description:
        'Inflige muchísimo daño a un objetivo. 5 golpes.\nUsa el elemento del arma.\nLos <right-icon:crit>golpes críticos</right-icon> generan 2 de <right-icon:perfection>perfección</right-icon> adicional.\n<icon:c-rank />: Aumenta el daño.'
    }
  }
];

const MONOCO_SKILLS: MonocoSkill[] = [
  {
    id: 'abbest-wind',
    cost: 2,
    characterId: 'monoco',
    canBreak: false,
    buffedMask: 'agile',
    movedPositions: 2,
    en: {
      name: 'Abbest Wind',
      description:
        'Deals low single target <color:physical>Physical</color> damage. 1 hit. Plays a second turn.\n<left-icon:agile-mask>Agile Mask</left-icon>: Costs 0 <color:ap>AP</color>.'
    },
    es: {
      name: 'Viento de Abbest',
      description:
        'Inflige daño <color:physical>físico</color> leve a un objetivo. 1 golpe. Actúa una segunda vez.\n<left-icon:agile-mask>Máscara ágil</left-icon>: No consume <color:ap>PA</color>.'
    }
  },
  {
    id: 'aberration-light',
    cost: 7,
    characterId: 'monoco',
    canBreak: false,
    buffedMask: 'agile',
    movedPositions: 4,
    en: {
      name: 'Aberration Light',
      description:
        'Deals high <color:light>Light</color> damage to all enemies. 2 hits. Applies 4 <color:burn>Burn</color> per hit.\n<left-icon:agile-mask>Agile Mask</left-icon>: Applies 2 more <color:burn>Burn</color> per hit.'
    },
    es: {
      name: 'Luz de Aberración',
      description:
        'Inflige mucho daño de <color:light>luz</color> a todos los enemigos. 2 golpes. Aplica 4 acumulaciones de <color:burn>quemadura</color> por golpe.\n<left-icon:agile-mask>Máscara ágil</left-icon>: Aplica 2 acumulaciones más de <color:burn>quemadura</color> por golpe.'
    }
  },
  {
    id: 'ballet-charm',
    cost: 2,
    characterId: 'monoco',
    canBreak: false,
    buffedMask: 'caster',
    movedPositions: 3,
    en: {
      name: 'Ballet Charm',
      description:
        'Deals low single target <color:light>Light</color> damage. 1 hit. Applies <right-icon:powerless>Powerless</right-icon> to the taret for 3 turns.\n<left-icon:caster-mask>Caster Mask</left-icon>: Increased damage.'
    },
    es: {
      name: 'Encanto de Bailarina',
      description:
        'Inflige daño de <color:light>luz</color> leve a un objetivo. 1 golpe. Le aplica <right-icon:powerless>debilitamiento</right-icon> al objetivo durante 3 turnos.\n<left-icon:caster-mask>Máscara conjuradora</left-icon>: Aumenta el daño.'
    }
  },
  {
    id: 'benisseur-mortar',
    cost: 5,
    characterId: 'monoco',
    canBreak: false,
    buffedMask: 'caster',
    movedPositions: 6,
    en: {
      name: 'Benisseur Mortar',
      description:
        'Deals medium single target <color:ice>Ice</color> damage. 3 hits. Change to Almight Mask <left-icon:almighty-mask>Almighty Mask</left-icon> if target is <right-icon:mark>Marked</right-icon>.\n<left-icon:caster-mask>Caster Mask</left-icon>: Increased damage.'
    },
    es: {
      name: 'Mortero de Bénisseur',
      description:
        'Inflige daño de <color:ice>hielo</color> moderado a un objetivo. 3 golpes. Cambia a Máscara omnipotente <left-icon:almighty-mask>Almighty Mask</left-icon> si el objetivo está <right-icon:mark>marcado</right-icon>.\n<left-icon:caster-mask>Máscara conjuradora</left-icon>: Aumenta el daño.'
    }
  },
  {
    id: 'boucheclier-fortify',
    cost: 3,
    characterId: 'monoco',
    canBreak: false,
    buffedMask: 'heavy',
    movedPositions: 5,
    en: {
      name: 'Boucheclier Fortify',
      description:
        'Applies <right-icon:shell>Shell</right-icon> to 1-3 Allies for 3 turns.\n<left-icon:heavy-mask>Heavy Mask</left-icon>: Also applies 1 <right-icon:shield>Shield</right-icon>.'
    },
    es: {
      name: 'Forificación de Boucheclier',
      description:
        'Les aplica <right-icon:shell>coraza</right-icon> a entre 1 y 3 aliados durante 3 turnos.\n<left-icon:heavy-mask>Máscara pesada</left-icon>: También aplica 1 <right-icon:shield>escudo</right-icon>.'
    }
  },
  {
    id: 'braseleur-smash',
    cost: 4,
    characterId: 'monoco',
    canBreak: false,
    buffedMask: 'balanced',
    movedPositions: 2,
    en: {
      name: 'Braseleur Smash',
      description:
        'Deals medium single target <color:fire>Fire</color> damage and applies 3 <color:burn>Burn</color>. 2 hits.\n<left-icon:balanced-mask>Balanced Mask</left-icon>: Increased damage.'
    },
    es: {
      name: 'Golpe de Braseleur',
      description:
        'Inflige daño de <color:fire>fuego</color> moderado a un objetivo y le aplica 3 acumulaciones de <color:burn>quemadura</color>. 2 golpes.\n<left-icon:balanced-mask>Máscara equilibrada</left-icon>: Aumenta el daño.'
    }
  },
  {
    id: 'bruler-bash',
    cost: 4,
    characterId: 'monoco',
    canBreak: true,
    buffedMask: 'caster',
    movedPositions: 4,
    en: {
      name: 'Bruler Bash',
      description:
        'Deals medium single target <color:physical>Physical</color> damage. 3 hits. Can <right-icon:break>Break</right-icon>.\n<left-icon:caster-mask>Caster Mask</left-icon>: Increased damage.'
    },
    es: {
      name: 'Embate de Bruler',
      description:
        'Inflige daño <color:physical>físico</color> moderado a un objetivo. 3 golpes. Puede causar <right-icon:break>ruptura</right-icon>.\n<left-icon:caster-mask>Máscara conjuradora</left-icon>: Aumenta el daño.'
    }
  },
  {
    id: 'chalier-combo',
    cost: 7,
    characterId: 'monoco',
    canBreak: false,
    buffedMask: 'balanced',
    movedPositions: 3,
    en: {
      name: 'Chalier Combo',
      description:
        'Deals high single target <color:physical>Physical</color> damage. 6 hits. Interrupted if failed.\n<left-icon:balanced-mask>Balanced Mask</left-icon>: Increased damage.'
    },
    es: {
      name: 'Combo de Chalier',
      description:
        'Inflige mucho daño <color:physical>físico</color> a un objetivo. 6 golpes. Se interrumpe si falla.\n<left-icon:balanced-mask>Máscara equilibrada</left-icon>: Aumenta el daño.'
    }
  },
  {
    id: 'chapelier-slash',
    cost: 7,
    characterId: 'monoco',
    canBreak: false,
    buffedMask: 'agile',
    movedPositions: 4,
    en: {
      name: 'Chapelier Slash',
      description:
        'Deals high <color:physical>Physical</color> damage to all enemies. 3 hits. Applies <right-icon:mark>Mark</right-icon>.\n<left-icon:agile-mask>Agile Mask</left-icon>: Increased damage.'
    },
    es: {
      name: 'Corte de Chapelier',
      description:
        'Inflige mucho daño <color:physical>físico</color> a todos los enemigos. 3 golpes. Aplica <right-icon:mark>marca</right-icon>.\n<left-icon:agile-mask>Máscara ágil</left-icon>: Aumenta el daño.'
    }
  },
  {
    id: 'chevaliere-ice',
    cost: 6,
    characterId: 'monoco',
    canBreak: false,
    buffedMask: 'balanced',
    movedPositions: 2,
    en: {
      name: 'Chevaliere Ice',
      description:
        'Deals high <color:ice>Ice</color> damage to all enemies. 3 hits. Applies <right-icon:slow>Slow</right-icon> to the targets for 3 turns.\n<left-icon:balanced-mask>Balanced Mask</left-icon>: Increased damage.'
    },
    es: {
      name: 'Hielo de Chevalière',
      description:
        'Inflige mucho daño de <color:ice>hielo</color> a todos los enemigos. 3 golpes. Les aplica <right-icon:slow>lentitud</right-icon> a los objetivos durante 3 turnos.\n<left-icon:balanced-mask>Máscara equilibrada</left-icon>: Aumenta el daño.'
    }
  },
  {
    id: 'chevaliere-piercing',
    cost: 3,
    characterId: 'monoco',
    canBreak: false,
    buffedMask: 'agile',
    movedPositions: 3,
    en: {
      name: 'Chevaliere Piercing',
      description:
        'Deals single target <color:physical>Physical</color> damage through <right-icon:shield>Shields</right-icon>. 6 hits. Damage increased for each <right-icon:shield>Shield</right-icon> on the target.\n<left-icon:agile-mask>Agile Mask</left-icon>: Increased damage.'
    },
    es: {
      name: 'Perforación de Chevalière',
      description:
        'Inflige daño <color:physical>físico</color> a un objetivo a través de los <right-icon:shield>escudos</right-icon>. 6 golpes. Inflige más daño por cada <right-icon:shield>escudo</right-icon> del objetivo.\n<left-icon:agile-mask>Máscara ágil</left-icon>: Aumenta el daño.'
    }
  },
  {
    id: 'chevaliere-thrusts',
    cost: 7,
    characterId: 'monoco',
    canBreak: false,
    buffedMask: 'heavy',
    movedPositions: 3,
    en: {
      name: 'Chevaliere Thrusts',
      description:
        'Deals high <color:physical>Physical</color> damage to all enemis. 3 hits. <right-icon:crit>Critical Hits</right-icon> deal double damage.\n<left-icon:heavy-mask>Heavy Mask</left-icon>: Increased damage.'
    },
    es: {
      name: 'Acometidas de Chevalière',
      description:
        'Inflige mucho daño <color:physical>físico</color> a todos los enemigos. Los <right-icon:crit>golpes críticos</right-icon> infligen daño doble.\n<left-icon:heavy-mask>Máscara pesada</left-icon>: Aumenta el daño.'
    }
  },
  {
    id: 'clair-enfeeble',
    cost: 5,
    characterId: 'monoco',
    canBreak: false,
    buffedMask: 'balanced',
    movedPositions: 3,
    en: {
      name: 'Clair Enfeeble',
      description:
        'Deals medium <color:light>Light</color> damage to all enemies. 1 hit. Applies <right-icon:powerless>Powerless</right-icon> for 3 turns.\n<left-icon:balanced-mask>Balanced Mask</left-icon>: Increased damage.'
    },
    es: {
      name: 'Debilitamiento de Clair',
      description:
        'Inflige daño de <color:light>luz</color> moderado a todos los enemigos. 1 golpe. Aplica <right-icon:powerless>debilitamiento</right-icon> durantes 3 turnos.\n<left-icon:balanced-mask>Máscara equilibrada</left-icon>: Aumenta el daño.'
    }
  },
  {
    id: 'contorsionniste-blast',
    cost: 6,
    characterId: 'monoco',
    canBreak: false,
    buffedMask: 'balanced',
    movedPositions: 2,
    en: {
      name: 'Contorsionniste Blast',
      description:
        'Deals medium <color:physical>Physical</color> damage to all enemies. 1 hit. <right-icon:heal>Heals</right-icon> all allies by 10% Health for each enemy hit.\n<left-icon:balanced-mask>Balanced Mask</left-icon>: Increased damage.'
    },
    es: {
      name: 'Ataque de Contorsionista',
      description:
        'Inflige daño <color:physical>físico</color> moderado a todos los enemigos. 1 golpe. <right-icon:heal>Cura</right-icon> a todos los aliados un 10% de vida por cada enemigo impactado.\n<left-icon:balanced-mask>Máscara equilibrada</left-icon>: Aumenta el daño.'
    }
  },
  {
    id: 'creation-void',
    cost: 9,
    characterId: 'monoco',
    canBreak: false,
    buffedMask: 'caster',
    movedPositions: 4,
    en: {
      name: 'Creation Void',
      description:
        'Deals extreme <color:void>Void</color> damage to random targets. 3 hits. More damage if the same target is hit multiple times.\n<left-icon:caster-mask>Caster Mask</left-icon>: Increased damage.'
    },
    es: {
      name: 'Vacío de Creación',
      description:
        'Inflige daño de <color:void>vacío</color> extremo a objetivos al azar. 3 golpes. Inflige más daño si golpea al mismo objetivo varias veces.\n<left-icon:caster-mask>Máscara conjuradora</left-icon>: Aumenta el daño.'
    }
  },
  {
    id: 'cruler-barrier',
    cost: 4,
    characterId: 'monoco',
    canBreak: false,
    buffedMask: 'heavy',
    movedPositions: 4,
    en: {
      name: 'Cruler Barrier',
      description:
        'Applies 1-2 <right-icon:shield>Shields</right-icon> to the target.\n<left-icon:heavy-mask>Heavy Mask</left-icon>: Gives 2 <color:ap>AP</color> to the target.'
    },
    es: {
      name: 'Barrera de Cruler',
      description:
        'Le aplica de 1 a 2 <right-icon:shield>escudos</right-icon> al objetivo.\n<left-icon:heavy-mask>Máscara pesada</left-icon>: Le otorga 2 <color:ap>PA</color> al objetivo.'
    }
  },
  {
    id: 'cultist-blood',
    cost: 3,
    characterId: 'monoco',
    movedPositions: 5,
    buffedMask: 'heavy',
    canBreak: false,
    en: {
      name: 'Cultist Blood',
      description:
        'Deals medium <color:dark>Dark</color> damage to all enemies. 3 hits. Sacrifices 90% Health to increase damage.\n<left-icon:heavy-mask>Heavy Mask</left-icon>: Increased damage.'
    },
    es: {
      name: 'Sangre de Sectaria',
      description:
        'Inflige daño de <color:dark>oscuridad</color> moderado a todos los enemigos. 3 golpes. Sacrifica el 90% de la vida para infligir más daño.\n<left-icon:heavy-mask>Máscara pesada</left-icon>: Aumenta el daño.'
    }
  },
  {
    id: 'cultist-slashes',
    cost: 5,
    characterId: 'monoco',
    canBreak: false,
    buffedMask: 'agile',
    movedPositions: 3,
    en: {
      name: 'Cultist Slashes',
      description:
        'Deals medium single target <color:dark>Dark</color> damage. 3 hits. Deals more damage the less Health Monoco has.\n<left-icon:agile-mask>Agile Mask</left-icon>: Increased Damage.'
    },
    es: {
      name: 'Cortes de Sectario',
      description:
        'Inflige daño de <color:dark>oscuridad</color> moderado a un objetivo. 3 golpes. Inflige más daño cuanta menos vida tenga Monoco.\n<left-icon:agile-mask>Máscara ágil</left-icon>: Aumenta el daño.'
    }
  },
  {
    id: 'danseuse-waltz',
    cost: 8,
    characterId: 'monoco',
    canBreak: false,
    buffedMask: 'balanced',
    movedPositions: 3,
    en: {
      name: 'Danseuse Waltz',
      description:
        'Deals high single target <color:fire>Fire</color> damage. 3 hits. Deals more damage against <color:burn>Burning</color> targets.\n<left-icon:balanced-mask>Balanced Mask</left-icon>: Increased damage.'
    },
    es: {
      name: 'Vals de Danseuse',
      description:
        'Inflige mucho daño de <color:fire>fuego</color> a un objetivo. 3 golpes. Inflige más daño contra objetivos que sufren <color:burn>quemadura</color>.\n<left-icon:balanced-mask>Máscara equilibrada</left-icon>: Aumenta el daño.'
    }
  },
  {
    id: 'demineur-thunder',
    cost: 2,
    characterId: 'monoco',
    canBreak: false,
    buffedMask: 'caster',
    movedPositions: 5,
    en: {
      name: 'Demineur Thunder',
      description:
        'Deals low single target <color:lightning>Lightning</color> damage. 1 hit. Deals extra <right-icon:break>Break</right-icon> Damage.\n<left-icon:caster-mask>Caster Mask</left-icon>: Increased <right-icon:break>Break</right-icon> Damage.'
    },
    es: {
      name: 'Trueno de Démineur',
      description:
        'Inflige daño de <color:lightning>rayo</color> leve a un objetivo. 1 golpe. Inflige daño de <right-icon:break>ruptura</right-icon> adicional.\n<left-icon:caster-mask>Máscara conjuradora</left-icon>: Aumenta el daño de <right-icon:break>ruptura</right-icon>.'
    }
  },
  {
    id: 'duallist-storm',
    cost: 8,
    characterId: 'monoco',
    canBreak: true,
    buffedMask: 'almighty',
    movedPositions: 1,
    en: {
      name: 'Duallist Storm',
      description:
        'Deals extreme single target <color:physical>Physical</color> damage. 4 hits. Can <right-icon:break>Break</right-icon>.\n<left-icon:almighty-mask>Almighty Mask</left-icon>: Increased damage.'
    },
    es: {
      name: 'Tormenta de Dualista',
      description:
        'Inflige daño <color:physical>físico</color> extremo a un objetivo. 4 golpes. Puede causar <right-icon:break>ruptura</right-icon>.\n<left-icon:almighty-mask>Máscara omnipotente</left-icon>: Aumenta el daño.'
    }
  },
  {
    id: 'echassier-stabs',
    cost: 4,
    characterId: 'monoco',
    canBreak: false,
    buffedMask: 'agile',
    movedPositions: 4,
    en: {
      name: 'Echassier Stabs',
      description:
        'Deals medium single target <color:physical>Physical</color> damage. 2 hits. Second hit applies <right-icon:mark>Mark</right-icon> to the target.\n<left-icon:agile-mask>Agile Mask</left-icon>: Increased damage.'
    },
    es: {
      name: 'Puñaladas de Échassier',
      description:
        'Inflige daño <color:physical>físico</color> moderado a un objetivo. 2 golpes. El segundo golpe le aplica <right-icon:mark>marca</right-icon> al objetivo.\n<left-icon:agile-mask>Máscara ágil</left-icon>: Aumenta el daño.'
    }
  },
  {
    id: 'eveque-spear',
    cost: 6,
    characterId: 'monoco',
    canBreak: false,
    buffedMask: 'heavy',
    movedPositions: 5,
    en: {
      name: 'Eveque Spear',
      description:
        'Deals high single target <color:earth>Earth</color> damage and applies <right-icon:powerless>Powerless</right-icon> for 3 turns. 1 hit.\n<left-icon:heavy-mask>Heavy Mask</left-icon>: Increased damage.'
    },
    es: {
      name: 'Lanza de Évèque',
      description:
        'Inflige mucho daño de <color:earth>tierra</color> a un objetivo y le aplica <right-icon:powerless>debilitamiento</right-icon> durante 3 turnos. 1 golpe.\n<left-icon:heavy-mask>Máscara pesada</left-icon>: Aumenta el daño.'
    }
  },
  {
    id: 'gault-fury',
    cost: 3,
    characterId: 'monoco',
    canBreak: false,
    buffedMask: 'balanced',
    movedPositions: 2,
    en: {
      name: 'Gault Fury',
      description:
        'Deals low single target <color:physical>Physical</color> damage. 4 hits. Applies <right-icon:mark>Mark</right-icon>.\n<left-icon:balanced-mask>Balanced Mask</left-icon>: Increased damage.'
    },
    es: {
      name: 'Furia de Gault',
      description:
        'Inflige daño <color:physical>físico</color> leve a un objetivo. 4 golpes. Aplica <right-icon:mark>marca</right-icon>.\n<left-icon:balanced-mask>Máscara equilibrada</left-icon>: Aumenta el daño.'
    }
  },
  {
    id: 'glaise-earthquakes',
    cost: 4,
    characterId: 'monoco',
    canBreak: false,
    buffedMask: 'heavy',
    movedPositions: 6,
    en: {
      name: 'Glaise <color:earth>Earth</color>quakes',
      description:
        'Deals medium <color:earth>Earth</color> damage to all enemies. 3 hits. Applies <right-icon:powerful>Powerful</right-icon> to self.\n<left-icon:heavy-mask>Heavy Mask</left-icon>: applies <right-icon:powerful>Powerful</right-icon> to all allies.'
    },
    es: {
      name: 'Terremotos de Glaise',
      description:
        'Inflige daño de <color:earth>tierra</color> moderado a todos los enemigos. 3 golpes. Le aplica <right-icon:powerful>fortalecimiento</right-icon> a Monoco.\n<left-icon:heavy-mask>Máscara pesada</left-icon>: Les aplica <right-icon:powerful>fortalecimiento</right-icon> a todos los aliados.'
    }
  },
  {
    id: 'grosse-tete-whack',
    cost: 6,
    characterId: 'monoco',
    canBreak: false,
    buffedMask: 'heavy',
    movedPositions: 4,
    en: {
      name: 'Grosse Tete Whack',
      description:
        'Deals high single target <color:physical>Physical</color> damage. 5 hits. Applies <right-icon:defenceless>Defenceless</right-icon> for 3 turns.\n<left-icon:heavy-mask>Heavy Mask</left-icon>: Increased damage.'
    },
    es: {
      name: 'Porrazo de Grosse Tète',
      description:
        'Inflige muchod año <color:physical>físico</color> a un objetivo. 5 golpes. Aplica <right-icon:defenceless>fragilidad</right-icon> durante 3 turnos.\n<left-icon:heavy-mask>Máscara pesada</left-icon>: Aumenta el daño.'
    }
  },
  {
    id: 'hexga-crush',
    cost: 5,
    characterId: 'monoco',
    canBreak: false,
    buffedMask: 'heavy',
    movedPositions: 6,
    en: {
      name: 'Hexga Crush',
      description:
        'Deals medium single target <color:earth>Earth</color> damage. 2 hits. Applies <right-icon:defenceless>Defenceless</right-icon> to the target for 3 turns.\n<left-icon:heavy-mask>Heavy Mask</left-icon>: Increased damage.'
    },
    es: {
      name: 'Aplastamiento de Hexga',
      description:
        'Inflige daño de <color:earth>tierra</color> moderado a un objetivo. 2 golpes. Le aplica <right-icon:defenceless>fragilidad</right-icon> al objetivo durante 3 turnos.\n<left-icon:heavy-mask>Máscara pesada</left-icon>: Aumenta la duración de <right-icon:defenceless>fragilidad</right-icon> a 5 turnos.'
    }
  },
  {
    id: 'jar-lampstorm',
    cost: 5,
    characterId: 'monoco',
    canBreak: false,
    buffedMask: 'heavy',
    movedPositions: 6,
    en: {
      name: 'Jar Lampstorm',
      description:
        'Deals medium <color:physical>Physical</color> damage to all enemies. 4 hits.\n<left-icon:heavy-mask>Heavy Mask</left-icon>: Increased damage.'
    },
    es: {
      name: 'Tormenta de Faroles de Jarrón',
      description:
        'Inflige daño <color:physical>físico</color> moderado a todos los enemigos. 4 golpes.\n<left-icon:heavy-mask>Máscara pesada</left-icon>: Aumenta el daño.'
    }
  },
  {
    id: 'lampmaster-light',
    cost: 5,
    characterId: 'monoco',
    canBreak: false,
    buffedMask: 'almighty',
    movedPositions: 1,
    en: {
      name: 'Lampmaster Light',
      description:
        'Deals high <color:light>Light</color> damage to all enemies. 1 hit. Increased damage at each cast.\n<left-icon:almighty-mask>Almighty Mask</left-icon>: Increased damage.'
    },
    es: {
      name: 'Luz del Señor de los Faroles',
      description:
        'Inflige mucho daño de <color:light>luz</color> a todos los enemigos. 1 golpe. Inflige más daño con cada lanzamiento.\n<left-icon:almighty-mask>Máscara omnipotente</left-icon>: Aumenta el daño.'
    }
  },
  {
    id: 'lancelier-impale',
    cost: 2,
    characterId: 'monoco',
    canBreak: false,
    buffedMask: 'agile',
    movedPositions: 4,
    en: {
      name: 'Lancelier Impale',
      description:
        'Deals low single target <color:ice>Ice</color> damage. 1 hit. <right-icon:slow>Slows</right-icon> the target for 3 turns.\n<left-icon:agile-mask>Agile Mask</left-icon>: Increased damage.'
    },
    es: {
      name: 'Empalamiento de Lancelier',
      description:
        'Inflige daño de <color:ice>hielo</color> leve a un objetivo. 1 golpes. Le aplica <right-icon:slow>lentitud</right-icon> al objetivo durante 3 turnos.\n<left-icon:agile-mask>Máscara ágil</left-icon>: Aumenta el daño.'
    }
  },
  {
    id: 'luster-slices',
    cost: 3,
    characterId: 'monoco',
    canBreak: false,
    buffedMask: 'agile',
    movedPositions: 3,
    en: {
      name: 'Luster Slices',
      description:
        'Deals low single target <color:physical>Physical</color> damage. 3 hits. Applies <right-icon:rush>Rush</right-icon> to self for 3 turns.\n<left-icon:agile-mask>Agile Mask</left-icon>: Increased damage.'
    },
    es: {
      name: 'Tajaduras de Luster',
      description:
        'Inflige daño <color:physical>físico</color> leve a un objetivo. 3 golpes. Le aplica <right-icon:rush>prisa</right-icon> a Monoco durante 3 turnos.\n<left-icon:agile-mask>Máscara ágil</left-icon>: Aumenta el daño.'
    }
  },
  {
    id: 'moissonneuse-vendange',
    cost: 5,
    characterId: 'monoco',
    canBreak: true,
    buffedMask: 'balanced',
    movedPositions: 2,
    en: {
      name: 'Moissonneuse Vendange',
      description:
        'Deals High single target <color:physical>Physical</color> damage. 3 hits. Can <right-icon:break>Break</right-icon>.\n<left-icon:balanced-mask>Balanced Mask</left-icon>: Increased damage.'
    },
    es: {
      name: 'Vendimia de Moissonneuse',
      description:
        'Inflige mucho daño <color:physical>físico</color> a un objetivo. Puede causar <right-icon:break>ruptura</right-icon>.\n<left-icon:balanced-mask>Máscara equilibrada</left-icon>: Aumenta el daño.'
    }
  },
  {
    id: 'obscur-sword',
    cost: 6,
    characterId: 'monoco',
    canBreak: false,
    buffedMask: 'heavy',
    movedPositions: 3,
    en: {
      name: 'Obscur Sword',
      description:
        'Deals high single target <color:dark>Dark</color> damage. 5 hits. Deals more damage against <right-icon:powerless>Powerless</right-icon> targets.\n<left-icon:heavy-mask>Heavy Mask</left-icon>: Increased damage.'
    },
    es: {
      name: 'Espada de Obscur',
      description:
        'Inflige mucho daño de <color:dark>oscuridad</color> a un objetivo. 5 golpes. Inflige más daño contra objetivos debilitados.\n<left-icon:heavy-mask>Máscara pesada</left-icon>: Aumenta el daño.'
    }
  },
  {
    id: 'orphelin-cheers',
    cost: 3,
    characterId: 'monoco',
    canBreak: false,
    buffedMask: 'caster',
    movedPositions: 3,
    en: {
      name: 'Orphelin Cheers',
      description:
        'Applies <right-icon:powerful>Powerful</right-icon> to 1-3 Allies.\n<left-icon:caster-mask>Caster Mask</left-icon>: Also gives 3 <color:ap>AP</color> to targets.'
    },
    es: {
      name: 'Vítores de Orphelin',
      description:
        'Les aplica <right-icon:powerful>fortalecimiento</right-icon> a entre 1 y 3 aliados.\n<left-icon:caster-mask>Máscara conjuradora</left-icon>: También les otorga 3 <color:ap>PA</color> a los objetivos.'
    }
  },
  {
    id: 'pelerin-heal',
    cost: 5,
    characterId: 'monoco',
    canBreak: false,
    buffedMask: 'caster',
    movedPositions: 3,
    en: {
      name: 'Pelerin Heal',
      description:
        'Applies <right-icon:regen>Regen</right-icon> to all allies.\n<left-icon:caster-mask>Caster Mask</left-icon>: also <right-icon:heal>Heals</right-icon> 40% Health.'
    },
    es: {
      name: '<right-icon:heal>Cura</right-icon>ción de Pèlerin',
      description:
        'Les aplica <right-icon:regen>regeneración</right-icon> a todos los aliados.\n<left-icon:caster-mask>Máscara conjuradora</left-icon>: También cura un 40% de la vida.'
    }
  },
  {
    id: 'portier-crash',
    cost: 8,
    characterId: 'monoco',
    canBreak: true,
    buffedMask: 'heavy',
    movedPositions: 5,
    en: {
      name: 'Portier Crash',
      description:
        'Deals high <color:physical>Physical</color> damage to all enemies. 1 hit. Can <right-icon:break>Break</right-icon>.\n<left-icon:heavy-mask>Heavy Mask</left-icon>: Increased damage.'
    },
    es: {
      name: 'Choque de Portier',
      description:
        'Inflige mucho daño <color:physical>físico</color> a todos los enemigos. 1 golpe. Puede causar <right-icon:break>ruptura</right-icon>.\n<left-icon:heavy-mask>Máscara pesada</left-icon>: Aumenta el daño.'
    }
  },
  {
    id: 'potier-energy',
    cost: 4,
    characterId: 'monoco',
    canBreak: false,
    buffedMask: 'caster',
    movedPositions: 6,
    en: {
      name: 'Potier Energy',
      description:
        'Gives 1-3 <color:ap>AP</color> to all allies.\n<left-icon:caster-mask>Caster Mask</left-icon>: Gives 1 additional <color:ap>AP</color>'
    },
    es: {
      name: 'Energía de Potier',
      description:
        'Les otorga de 1 a 3 <color:ap>PA</color> a todos los aliados.\n<left-icon:caster-mask>Máscara conjuradora</left-icon>: Otorga 1 <color:ap>PA</color> adicional.'
    }
  },
  {
    id: 'ramasseur-bonk',
    cost: 2,
    characterId: 'monoco',
    canBreak: true,
    buffedMask: 'agile',
    movedPositions: 4,
    en: {
      name: 'Ramasseur Bonk',
      description:
        "Deals low single target <color:dark>Dark</color> damage. 1 hit. Can <right-icon:break>Break</right-icon>.\n<left-icon:agile-mask>Agile Mask</left-icon>: fills 20% of the target's Break Bar."
    },
    es: {
      name: 'Coscorrón de Ramasseur',
      description:
        'Inflige daño de <color:dark>oscuridad</color> leve a un objetivo. 1 golpe. Puede causar <right-icon:break>ruptura</right-icon>.\n<left-icon:agile-mask>Máscara ágil</left-icon>: Carga un 20% de la barra de <right-icon:break>ruptura</right-icon> del objetivo.'
    }
  },
  {
    id: 'rocher-hammering',
    cost: 3,
    characterId: 'monoco',
    canBreak: true,
    buffedMask: 'heavy',
    movedPositions: 3,
    en: {
      name: 'Rocher Hammering',
      description:
        'Deals medium single target <color:physical>Physical</color> damage. 4 hits. Can <right-icon:break>Break</right-icon>.\n<left-icon:heavy-mask>Heavy Mask</left-icon>: Increased damage.'
    },
    es: {
      name: 'Martillazos de Rocher',
      description:
        'Inflige daño <color:physical>físico</color> moderado a un objetivo. 4 golpes. Puede causar <right-icon:break>ruptura</right-icon>.\n<left-icon:heavy-mask>Máscara pesada</left-icon>: Aumenta el daño.'
    }
  },
  {
    id: 'sakapatate-estoc',
    cost: 3,
    characterId: 'monoco',
    canBreak: false,
    buffedMask: 'balanced',
    movedPositions: 3,
    en: {
      name: 'Sakapatate Estoc',
      description:
        'Deals low single target <color:lightning>Lightning</color> damage. 1 hit. Deals more damage if the target is <right-icon:stun>Stunned</right-icon>.\n<left-icon:balanced-mask>Balanced Mask</left-icon>: Increased damage.'
    },
    es: {
      name: 'Estocada de Sakapatate',
      description:
        'Inflige daño de <color:lightning>rayo</color> leve a un objetivo. 1 golpe. Inflige más daño si el objetivo está <right-icon:stun>aturdido</right-icon>.\n<left-icon:balanced-mask>Máscara equilibrada</left-icon>: Aumenta el daño.'
    }
  },
  {
    id: 'sakapatate-explosion',
    cost: 4,
    characterId: 'monoco',
    canBreak: false,
    buffedMask: 'caster',
    movedPositions: 6,
    en: {
      name: 'Sakapatate Explosion',
      description:
        'Deals medium <color:lightning>Lightning</color> damage to random enemies. 3 hits. <right-icon:crit>Critical Hits</right-icon> trigger an additional hit.\n<left-icon:caster-mask>Caster Mask</left-icon>: Increased damage.'
    },
    es: {
      name: 'Exposión de Sakapatate',
      description:
        'Inflige daño de <color:lightning>rayo</color> moderado a enemigos al azar. 3 golpes. Los <right-icon:crit>golpes críticos</right-icon> propinan un golpe adicional.\n<left-icon:caster-mask>Máscara conjuradora</left-icon>: Aumenta el daño.'
    }
  },
  {
    id: 'sakapatate-fire',
    cost: 9,
    characterId: 'monoco',
    canBreak: false,
    buffedMask: 'almighty',
    movedPositions: 1,
    en: {
      name: 'Sakapatate Fire',
      description:
        'Deals extreme <color:fire>Fire</color> to all enemies. 3 hits. Apply 3 <color:burn>Burn</color> per hit.\n<left-icon:almighty-mask>Almighty Mask</left-icon>: Increased damage.'
    },
    es: {
      name: 'Fuego de Sakapatate',
      description:
        'Inflige daño de <color:fire>fuego</color> extremo a todos los enemigos. 3 golpes. Aplica 3 acumulaciones de <color:burn>quemadura</color> por golpe.\n<left-icon:almighty-mask>Máscara omnipotente</left-icon>: Aumenta el daño.'
    }
  },
  {
    id: 'sakapatate-slam',
    cost: 7,
    characterId: 'monoco',
    canBreak: false,
    buffedMask: 'heavy',
    movedPositions: 5,
    en: {
      name: 'Sakapatate Slam',
      description:
        'Deals high <color:physical>Physical</color> damage to all enemies. 1 hit. Increased damage to <right-icon:mark>Marked</right-icon> targets.\n<left-icon:heavy-mask>Heavy Mask</left-icon>: Increased damage.'
    },
    es: {
      name: 'Azote de Sakapatate',
      description:
        'Inflige mucho daño <color:physical>físico</color> a todos los enemigos. 1 golpe. Inflige más daño contra enemigos <right-icon:mark>marcado</right-icon>s.\n<left-icon:heavy-mask>Máscara pesada</left-icon>: Aumenta el daño.'
    }
  },
  {
    id: 'sapling-absorption',
    cost: 6,
    characterId: 'monoco',
    canBreak: false,
    buffedMask: 'caster',
    movedPositions: 5,
    en: {
      name: 'Sapling Absorption',
      description:
        'Deals high <color:dark>Dark</color> damage. 3 hits. <right-icon:heal>Recovers</right-icon> 5% Health on hit.\n<left-icon:caster-mask>Caster Mask</left-icon>: Increased damage and double <right-icon:heal>Heal</right-icon>.'
    },
    es: {
      name: 'Absorción de Retoño',
      description:
        'Inflige mucho daño de <color:dark>oscuridad</color>. 3 golpes. <right-icon:heal>Recupera</right-icon> un 5% de vida al impactar.\n<left-icon:caster-mask>Máscara conjuradora</left-icon>: Aumenta el daño y duplica la <right-icon:heal>curación</right-icon>.'
    }
  },
  {
    id: 'stalact-punches',
    cost: 4,
    characterId: 'monoco',
    canBreak: false,
    buffedMask: 'heavy',
    movedPositions: 4,
    en: {
      name: 'Stalact Punches',
      description:
        'Deals medium single target <color:ice>Ice</color> damage. 4 hits. High <right-icon:break>Break</right-icon> damage.\n<left-icon:heavy-mask>Heavy Mask</left-icon>: Increased damage.'
    },
    es: {
      name: 'Puñetazos de Stalact',
      description:
        'Inflige daño de <color:ice>hielo</color> moderado a un objetivo. 4 golpes. Inflige mucho daño de <right-icon:break>ruptura</right-icon>.\n<left-icon:heavy-mask>Máscara pesada</left-icon>: Aumenta el daño.'
    }
  },
  {
    id: 'troubadour-trumpet',
    cost: 3,
    characterId: 'monoco',
    canBreak: false,
    buffedMask: 'caster',
    movedPositions: 4,
    en: {
      name: 'Troubadour Trumpet',
      description:
        'Applies a random buff to 1 to 3 allies.\n<left-icon:caster-mask>Caster Mask</left-icon>: applies a second random buff.'
    },
    es: {
      name: 'Trompeta de Trovador',
      description:
        'Les aplica un potenciador al azar a entre 1 y 3 aliados.\n<left-icon:caster-mask>Máscara conjuradora</left-icon>: Aplica un segundo potenciador al azar.'
    }
  }
];

const SKILLS: Skill[] = [
  ...GUSTAVE_SKILLS,
  ...LUNE_SKILLS,
  ...MAELLE_SKILLS,
  ...SCIEL_SKILLS,
  ...VERSO_SKILLS,
  ...MONOCO_SKILLS
];

export default SKILLS;
