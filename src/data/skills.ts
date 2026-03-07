import { LuneSkill, Skill } from '../types';

const GUSTAVE_SKILLS: Skill[] = [
  {
    id: 'from-fire',
    cost: 4,
    characterId: 'gustave',
    canBreak: false,
    en: {
      name: 'From Fire',
      description:
        "Deals medium single target damage. 3 hits. Uses weapon's element. Heals self by 20% if the target Burns"
    },
    es: {
      name: 'Desde el fuego',
      description:
        'Inflige daño moderado a un objetivo. 3 golpes. Usa el elemento del arma. Cura un 20% de vida si el objetivo sufre quemadura.'
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
        "Deals low single target damage. 5 hits. Uses weapon's element. Critical Hits generate 1 Additional Charge ."
    },
    es: {
      name: 'Asalto de Lumière',
      description:
        'Inflige daño leve a un objetivo. 5 golpes. Usa el elemento del arma. Los golpes críticos generan 1 carga adicional.'
    }
  },
  {
    id: 'marking-shot',
    cost: 2,
    characterId: 'gustave',
    canBreak: false,
    en: {
      name: 'Marking Shot',
      description: 'Deals low single target Lightning damage. 1 hit. Applies Mark'
    },
    es: {
      name: 'Disparo marcador',
      description: 'Inflige daño de rayo leve a un objetivo. 1 golpe. Aplica marca.'
    }
  },
  {
    id: 'overcharge',
    cost: 4,
    characterId: 'gustave',
    canBreak: true,
    en: {
      name: 'Overcharge',
      description: 'High Lightning damage based on the amount of Charges. 1 hit. Can Break'
    },
    es: {
      name: 'Sobrecarga',
      description:
        'Inflige mucho daño de rayo a un solo objetivo en función de la cantidad de cargas. 1 golpe. Puede causar ruptura. Restablece las cargas.'
    }
  },
  {
    id: 'powerful',
    cost: 3,
    characterId: 'gustave',
    canBreak: false,
    en: {
      name: 'Powerful',
      description: 'Applies Powerful to 1-3 allies, increasing the damage they deal for 3 turns. Gives 0 to 2 Charges'
    },
    es: {
      name: 'Fortalecimiento',
      description:
        'Aplica fortalecimiento a entre 1 y 3 aliados, lo que aumenta el daño que infliguen durante 3 turnos. Otorga de 0 a 2 cargas.'
    }
  },
  {
    id: 'recovery',
    cost: 3,
    characterId: 'gustave',
    canBreak: false,
    en: {
      name: 'Recovery',
      description: 'Recovers 50% Health and dispels Status Effects. Gives 0-2 Charges'
    },
    es: {
      name: 'Recuperación',
      description: 'Recupera un 50% de vida y disipa las alteraciones e estado. Otorga de 0 a 2 cargas.'
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
        'Deals High Lightning damage to all enemies. 1 hit. Can Break. If a target is Broken by the hit, Overcharge is fully Charged.'
    },
    es: {
      name: 'Destrozo',
      description:
        'Inflige mucho daño de rayo a todos los enemigos. 1 golpe. Puede causar ruptura. Si le causa ruptura a un objetivo, Sobrecarga se carga por completo.'
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
        "Deals very high single target damage. 6 hits. Uses Weapon's element. Critical Hits generate 2 additional Charges."
    },
    es: {
      name: 'Tormenta de ataques',
      description:
        'Inflige muchísimo daño a un objetivo. 6 golpes. Usa el elemento del arma. Los golpes críticos generan 2 cargas adicionales.'
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
        'Deals medium <span class="text-blue-300 font-semibold">Ice</span> damage to all enemies. 1 hit. Applies <span class="text-red-600 font-semibold">Slow</span> <img src="/ui/status-effect/slow.png" alt="Slow Icon" /> for 3 turns.\nConsumes <img src="/ui/stains/earth.png" alt="Earth Stain Icon" /><img src="/ui/stains/lightning.png" alt="Lightning Stain Icon" /><img src="/ui/stains/fire.png" alt="Fire Stain Icon" /> for greatly increased damage.'
    },
    es: {
      name: 'Tsunami Incapacitante',
      description:
        'Inflige daño de <span class="text-blue-300 font-semibold">hielo</span> moderado a todos los enemigos. 1 golpe. Aplica <span class="text-red-600 font-semibold">lentitud</span> <img src="/ui/status-effect/slow.png" alt="Slow Icon" /> durante 3 turnos.\nConsume <img src="/ui/stains/earth.png" alt="Earth Stain Icon" /><img src="/ui/stains/lightning.png" alt="Lightning Stain Icon" /><img src="/ui/stains/fire.png" alt="Fire Stain Icon" /> para infligir mucho más daño.'
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
        'Deals high single target <span class="text-lime-500 font-semibold">Earth</span> and <span class="text-yellow-600 font-semibold">break damage</span> <img src="/ui/status-effect/break.png" alt="Break Icon" />. 5 hits.\nConsumes <img src="/ui/stains/lightning.png" alt="Lightning Stain Icon" /><img src="/ui/stains/lightning.png" alt="Lightning Stain Icon" />: Increased damage.'
    },
    es: {
      name: 'Corteza Aplastante',
      description:
        'Inflige mucho daño de <span class="text-lime-500 font-semibold">tierra</span> y de <span class="text-yellow-600 font-semibold">ruptura</span> <img src="/ui/status-effect/break.png" alt="Break Icon" /> a un enemigo. 5 golpes.\nConsume <img src="/ui/stains/lightning.png" alt="Lightning Stain Icon" /><img src="/ui/stains/lightning.png" alt="Lightning Stain Icon" />: Aumenta el daño.'
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
        'Deals low <span class="text-lime-500 font-semibold">Earth</span> damage to all enemies. 1 hit.\nConsumes <img src="/ui/stains/lightning.png" alt="Lightning Stain Icon" /> for increased damage.'
    },
    es: {
      name: 'Alzamiento Terrestre',
      description:
        'Inflige daño de <span class="text-lime-500 font-semibold">tierra</span> leve a todos los enemigos. 1 golpe.\nConsume <img src="/ui/stains/lightning.png" alt="Lightning Stain Icon" /> para infligir más daño.'
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
        'Deals low single target <span class="text-yellow-500 font-semibold">Lightning</span> damage. 3 hits. <span class="text-red-600 font-semibold">Critical Hits</span> <img src="/ui/status-effect/crit.png" alt="Critical Hit Icon" /> trigger an additional hit.\nConsumes <img src="/ui/stains/fire.png" alt="Fire Stain Icon" /> to generate one Light Stain <img src="/ui/stains/light.png" alt="Light Stain Icon" />.'
    },
    es: {
      name: 'Electrocución',
      description:
        'Inflige daño de <span class="text-yellow-500 font-semibold">rayo</span> leve a un objetivo. 3 golpes. Los <span class="text-red-600 font-semibold">golpes críticos</span> <img src="/ui/status-effect/crit.png" alt="Critical Hit Icon" /> propinan un golpe adicional.\nConsume <img src="/ui/stains/fire.png" alt="Fire Stain Icon" /> para generar un borrón de luz <img src="/ui/stains/light.png" alt="Light Stain Icon" />.'
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
        'Deals extreme damage to all enemies. 8 hits. Each hit deals damage in a random element.\nCan only be cast with <img src="/ui/stains/lightning.png" alt="Lightning Stain Icon" /><img src="/ui/stains/earth.png" alt="Earth Stain Icon" /><img src="/ui/stains/fire.png" alt="Fire Stain Icon" /><img src="/ui/stains/ice.png" alt="Ice Stain Icon" />.'
    },
    es: {
      name: 'Génesis Elemental',
      description:
        'Inflige daño extremo a todos los enemigos. 8 golpes. Cada golpe inflige daño de un elemento al azar.\nSolo se puede lanzar con <img src="/ui/stains/lightning.png" alt="Lightning Stain Icon" /><img src="/ui/stains/earth.png" alt="Earth Stain Icon" /><img src="/ui/stains/fire.png" alt="Fire Stain Icon" /><img src="/ui/stains/ice.png" alt="Ice Stain Icon" />.'
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
        'Deals low single target <span class="text-blue-300 font-semibold">Ice</span>, <span class="text-red-400 font-semibold">Fire</span>, <span class="text-yellow-500 font-semibold">Lightning</span>, and <span class="text-lime-500 font-semibold">Earth</span> damage. 4 hits.\n<span class="text-red-600 font-semibold">Critical Hits</span> <img src="/ui/status-effect/crit.png" alt="Critical Hit Icon" /> generate the corresponding Stain.'
    },
    es: {
      name: 'Truco Elemental',
      description:
        'Inflige daño de <span class="text-blue-300 font-semibold">hielo</span>, <span class="text-red-400 font-semibold">fuego</span>, <span class="text-yellow-500 font-semibold">rayo</span> y <span class="text-lime-500 font-semibold">tierra</span> leve a un objetivo. 4 golpes.\nLos <span class="text-red-600 font-semibold">golpes críticos</span> <img src="/ui/status-effect/crit.png" alt="Critical Hit Icon" /> generan el borrón correspondiente.'
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
        'Deals increasingly high <span class="text-red-400 font-semibold">Fire</span> damage to all enemies every turn until Lune receives damage. Stuns self if interrupted.\nConsumes <img src="/ui/stains/ice.png" alt="Ice Stain Icon" /><img src="/ui/stains/ice.png" alt="Ice Stain Icon" />: Increased Damage.'
    },
    es: {
      name: 'Furia Ígnea',
      description:
        'Inflige daño de <span class="text-red-400 font-semibold">fuego</span> creciente cada turno a todos los enemigos hasta que Lune sufra daño. Si se interrumpe, aturde a Lune.\nConsume <img src="/ui/stains/ice.png" alt="Ice Stain Icon" /><img src="/ui/stains/ice.png" alt="Ice Stain Icon" />: Aumenta el daño.'
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
        '<span class="text-lime-600 font-semibold">Heals</span> <img src="/ui/status-effect/heal.png" alt="Heal Icon" /> the targeted Ally and dispels Status Effects.\nConsumes <img src="/ui/stains/earth.png" alt="Earth Stain Icon" /><img src="/ui/stains/earth.png" alt="Earth Stain Icon" />: Costs 0 <span class="text-blue-400 font-semibold">AP</span>.'
    },
    es: {
      name: 'Luz Curativa',
      description:
        '<span class="text-lime-600 font-semibold">Cura</span> <img src="/ui/status-effect/heal.png" alt="Heal Icon" /> al aliado seleccionado entre un 30% y un 50% de la vida y disipa las alteraciones de estado.\nConsume <img src="/ui/stains/earth.png" alt="Earth Stain Icon" /><img src="/ui/stains/earth.png" alt="Earth Stain Icon" />: Consume 0 <span class="text-blue-400 font-semibold">PA</span>.'
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
        'Deals very high <span class="text-red-400 font-semibold">Fire</span> damage that applies 5 <span class="text-orange-400 font-semibold">Burn</span> <img src="/ui/status-effect/burn.png" alt="Burn Icon" /> per hit to all enemies. 2 hits. Deals self-damage if failed.\nConsumes <img src="/ui/stains/ice.png" alt="Ice Stain Icon" /><img src="/ui/stains/earth.png" alt="Earth Stain Icon" /><img src="/ui/stains/lightning.png" alt="Lightning Stain Icon" />: Greatly increased damage.'
    },
    es: {
      name: 'Infierno',
      description:
        'Inflige muchísimo daño de <span class="text-red-400 font-semibold">fuego</span> y aplica 5 acumulaciones de <span class="text-orange-400 font-semibold">quemadura</span> <img src="/ui/status-effect/burn.png" alt="Burn Icon" /> por golpe a todos los enemigos. 2 golpes. Si falla, Lune se daña a sí misma.\nConsume <img src="/ui/stains/ice.png" alt="Ice Stain Icon" /><img src="/ui/stains/earth.png" alt="Earth Stain Icon" /><img src="/ui/stains/lightning.png" alt="Lightning Stain Icon" />: Aumenta mucho el daño.'
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
        'Deals medium single target <span class="text-blue-300 font-semibold">Ice</span> damage that <span class="text-red-600 font-semibold">Slows</span> <img src="/ui/status-effect/slow.png" alt="Slow Icon" /> the target. 1 Hit.\nConsumes <img src="/ui/stains/earth.png" alt="Earth Stain Icon" /> to deal increased damage.'
    },
    es: {
      name: 'Lanza de Hielo',
      description:
        'Inflige daño de <span class="text-blue-300 font-semibold">hielo</span> moderado a un objetivo y le causa <span class="text-red-600 font-semibold">lentitud</span> <img src="/ui/status-effect/slow.png" alt="Slow Icon" />. 1 golpe.\nConsume <img src="/ui/stains/earth.png" alt="Earth Stain Icon" /> para infligir más daño.'
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
        'Deals low single target <span class="text-red-400 font-semibold">Fire</span> damage and 3 <span class="text-orange-400 font-semibold">Burn</span> <img src="/ui/status-effect/burn.png" alt="Burn Icon" />. 1 hit. Applies 2 more <span class="text-orange-400 font-semibold">Burns</span> <img src="/ui/status-effect/burn.png" alt="Burn Icon" /> if the target is <span class="text-red-600 font-semibold">Marked</span> <img src="/ui/status-effect/mark.png" alt="Mark Icon" />.\nConsumes <img src="/ui/stains/ice.png" alt="Ice Stain Icon" /> for increased damage.'
    },
    es: {
      name: 'Inmolación',
      description:
        'Inflige daño de <span class="text-red-400 font-semibold">fuego</span> leve y 3 acumulaciones de <span class="text-orange-400 font-semibold">quemadura</span> <img src="/ui/status-effect/burn.png" alt="Burn Icon" /> a un objetivo. 1 golpe. Aplica 2 acumulaciones más de <span class="text-orange-400 font-semibold">quemadura</span> <img src="/ui/status-effect/burn.png" alt="Burn Icon" /> si el objetivo está <span class="text-red-600 font-semibold">marcado</span> <img src="/ui/status-effect/mark.png" alt="Mark Icon" />.\nConsume <img src="/ui/stains/ice.png" alt="Ice Stain Icon" /> para infligir más daño.'
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
        'Deals very high single target <span class="text-yellow-500 font-semibold">Lightning</span> damage. 6 hits. <span class="text-red-600 font-semibold">Critical Hits</span> <img src="/ui/status-effect/crit.png" alt="Critical Hit Icon" /> trigger an additional hit.\nConsumes <img src="/ui/stains/earth.png" alt="Earth Stain Icon" /><img src="/ui/stains/ice.png" alt="Ice Stain Icon" /><img src="/ui/stains/fire.png" alt="Fire Stain Icon" />: Greatly increased damage.'
    },
    es: {
      name: 'Danza del Relámpago',
      description:
        'Inflige muchísimo daño de <span class="text-yellow-500 font-semibold">rayo</span> a un objetivo. 6 golpes. Los <span class="text-red-600 font-semibold">golpes críticos</span> <img src="/ui/status-effect/crit.png" alt="Critical Hit Icon" /> propinan un golpe adicional.\nConsume <img src="/ui/stains/earth.png" alt="Earth Stain Icon" /><img src="/ui/stains/ice.png" alt="Ice Stain Icon" /><img src="/ui/stains/fire.png" alt="Fire Stain Icon" />: Aumenta mucho el daño.'
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
        'Consumes all Stains to deal high elemental damage to the target. Can <span class="text-yellow-600 font-semibold">Break</span> <img src="/ui/status-effect/break.png" alt="Break Icon" /> if 4 Stains are consumed.'
    },
    es: {
      name: 'Caos',
      description:
        'Consume todos los borrones para inflingirle mucho daño elemental al objetivo. Si se consume 4 borrones, puede causar <span class="text-yellow-600 font-semibold">ruptura</span> <img src="/ui/status-effect/break.png" alt="Break Icon" />.'
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
        'Revives an ally with 30-70% Health and 2 additional <span class="text-blue-400 font-semibold">AP</span>.\nConsumes <img src="/ui/stains/lightning.png" alt="Lightning Stain Icon" /><img src="/ui/stains/lightning.png" alt="Lightning Stain Icon" /><img src="/ui/stains/lightning.png" alt="Lightning Stain Icon" />: Costs 0 <span class="text-blue-400 font-semibold">AP</span>.'
    },
    es: {
      name: 'Renacer',
      description:
        'Revive a un aliado con un 30% al 70% de vida y 2 <span class="text-blue-400 font-semibold">PA</span> adicionales.\nConsume <img src="/ui/stains/lightning.png" alt="Lightning Stain Icon" /><img src="/ui/stains/lightning.png" alt="Lightning Stain Icon" /><img src="/ui/stains/lightning.png" alt="Lightning Stain Icon" />: Consume 0 <span class="text-blue-400 font-semibold">PA</span>.'
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
        '<span class="text-lime-600 font-semibold">Heals</span> <img src="/ui/status-effect/heal.png" alt="Heal Icon" /> 1-3 allies by 40-60% Health.\nConsumes <img src="/ui/stains/fire.png" alt="Fire Stain Icon" /><img src="/ui/stains/fire.png" alt="Fire Stain Icon" /><img src="/ui/stains/fire.png" alt="Fire Stain Icon" /> to also apply <span class="text-lime-600 font-semibold">Regen</span> <img src="/ui/status-effect/regen.png" alt="Regen Icon" /> that heals on turn start for 3 turns.'
    },
    es: {
      name: 'Revitalización',
      description:
        '<span class="text-lime-600 font-semibold">Cura</span> <img src="/ui/status-effect/heal.png" alt="Heal Icon" /> de 1 a 3 aliados entre un 40% y un 60% de vida.\nConsume <img src="/ui/stains/fire.png" alt="Fire Stain Icon" /><img src="/ui/stains/fire.png" alt="Fire Stain Icon" /><img src="/ui/stains/fire.png" alt="Fire Stain Icon" /> para aplicar también <span class="text-lime-600 font-semibold">regeneración</span> <img src="/ui/status-effect/regen.png" alt="Regen Icon" />, que cura al inicia del turno.'
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
        'Deals medium single target <span class="text-lime-500 font-semibold">Earth</span> damage. 2 hits. Can <span class="text-yellow-600 font-semibold">Break</span> <img src="/ui/status-effect/break.png" alt="Break Icon" />.\nConsumes <img src="/ui/stains/lightning.png" alt="Lightning Stain Icon" /><img src="/ui/stains/ice.png" alt="Ice Stain Icon" /><img src="/ui/stains/fire.png" alt="Fire Stain Icon" /> for greatly increased damage.'
    },
    es: {
      name: 'Alud',
      description:
        'Inflige daño de <span class="text-lime-500 font-semibold">tierra</span> moderado a un objetivo. 2 golpes. Puede causar <span class="text-yellow-600 font-semibold">ruptura</span> <img src="/ui/status-effect/break.png" alt="Break Icon" />.\nConsume <img src="/ui/stains/lightning.png" alt="Lightning Stain Icon" /><img src="/ui/stains/ice.png" alt="Ice Stain Icon" /><img src="/ui/stains/fire.png" alt="Fire Stain Icon" /> para infligir mucho más daño.'
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
        'All enemies receive medium <span class="text-yellow-500 font-semibold">Lightning</span> damage at the end of their turn, and low <span class="text-yellow-500 font-semibold">Lightning</span> damage when they receive damage. Duration: 3 turns.\nConsumes <img src="/ui/stains/fire.png" alt="Fire Stain Icon" /><img src="/ui/stains/fire.png" alt="Fire Stain Icon" /> for double thunder strikes on turn end.'
    },
    es: {
      name: 'Invocación de Tormentas',
      description:
        'Todos los enemigos reciben daño de <span class="text-yellow-500 font-semibold">rayo</span> moerado al final de su turno, y daño de <span class="text-yellow-500 font-semibold">rayo</span> leve cuando reciben daño. Duración: 3 turnos.\nConsume <img src="/ui/stains/fire.png" alt="Fire Stain Icon" /><img src="/ui/stains/fire.png" alt="Fire Stain Icon" /> para desatar ataques de trueno dobles al finalizar el turno.'
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
        'Deals low <span class="text-lime-500 font-semibold">Earth</span> damage and <span class="text-yellow-600 font-semibold">break damage</span> <img src="/ui/status-effect/break.png" alt="Break Icon" /> to all enemies every turn. Also increases all <span class="text-yellow-600 font-semibold">break damage</span> <img src="/ui/status-effect/break.png" alt="Break Icon" /> received by 50%. Duration: 3 turns.\nConsumes <img src="/ui/stains/lightning.png" alt="Lightning Stain Icon" /><img src="/ui/stains/lightning.png" alt="Lightning Stain Icon" /> to increase the Duration to 5 turns.'
    },
    es: {
      name: 'Terremoto',
      description:
        'Inflige daño de <span class="text-lime-500 font-semibold">tierra</span> y de <span class="text-yellow-600 font-semibold">ruptura</span> <img src="/ui/status-effect/break.png" alt="Break Icon" /> leve a todos los enemigos cada turno. Además, aumenta todo el daño de <span class="text-yellow-600 font-semibold">ruptura</span> <img src="/ui/status-effect/break.png" alt="Break Icon" /> recibido un 50%. Duración: 3 turnos.\nConsume <img src="/ui/stains/lightning.png" alt="Lightning Stain Icon" /><img src="/ui/stains/lightning.png" alt="Lightning Stain Icon" /> para aumentar la duración a 5 turnos.'
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
        'Deals low single target <span class="text-blue-300 font-semibold">Ice</span> damage. 2 hits. Gains 4 <span class="text-blue-400 font-semibold">AP</span> if target is <span class="text-orange-400 font-semibold">Burning</span> <img src="/ui/status-effect/burn.png" alt="Burn Icon" />.\nConsumes <img src="/ui/stains/earth.png" alt="Earth Stain Icon" /><img src="/ui/stains/earth.png" alt="Earth Stain Icon" />: Play a second turn.'
    },
    es: {
      name: 'Transferencia Térmica',
      description:
        'Inflige daño de <span class="text-blue-300 font-semibold">hielo</span> leve a un objetivo. 2 golpes. Obtiene 4 <span class="text-blue-400 font-semibold">PA</span> si el objetivo sufre <span class="text-orange-400 font-semibold">quemadura</span> <img src="/ui/status-effect/burn.png" alt="Burn Icon" />.\nConsume <img src="/ui/stains/earth.png" alt="Earth Stain Icon" /><img src="/ui/stains/earth.png" alt="Earth Stain Icon" />: Actúa una segunda vez.'
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
        'Deals medium <span class="text-yellow-500 font-semibold">Lightning</span> damage to random enemies. 2-6 hits. <span class="text-red-600 font-semibold">Critical Hits</span> <img src="/ui/status-effect/crit.png" alt="Critical Hit Icon" /> trigger an additional hit.\nConsumes <img src="/ui/stains/fire.png" alt="Fire Stain Icon" /> for increased damage.'
    },
    es: {
      name: 'Tempestad',
      description:
        'Inflige daño de <span class="text-yellow-500 font-semibold">rayo</span> moderado a enemigos al azar. 2 a 6 golpes. Los <span class="text-red-600 font-semibold">golpes críticos</span> <img src="/ui/status-effect/crit.png" alt="Critical Hit Icon" /> propinan un golpe adicional.\nConsume <img src="/ui/stains/fire.png" alt="Fire Stain Icon" /> para infligir más daño.'
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
        'On turn start, deals high <span class="text-blue-300 font-semibold">Ice</span> damage to all enemies and <span class="text-lime-600 font-semibold">Heals</span> <img src="/ui/status-effect/heal.png" alt="Heal Icon" /> allies.\nConsumes <img src="/ui/stains/earth.png" alt="Earth Stain Icon" /><img src="/ui/stains/earth.png" alt="Earth Stain Icon" />: Duration increased from 3 to 5 turns.'
    },
    es: {
      name: 'Tifón',
      description:
        'Al inicio del turno, inflige mucho daño de <span class="text-blue-300 font-semibold">hielo</span> a todos los enemigos y <span class="text-lime-600 font-semibold">cura</span> <img src="/ui/status-effect/heal.png" alt="Heal Icon" /> a los aliados.\nConsume <img src="/ui/stains/earth.png" alt="Earth Stain Icon" /><img src="/ui/stains/earth.png" alt="Earth Stain Icon" />: Aumenta la duración de 3 a 5 turnos.'
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
        'Deals medium <span class="text-red-400 font-semibold">Fire</span> damage to all enemies. 1 hit. Applies 3 <span class="text-orange-400 font-semibold">Burn</span> <img src="/ui/status-effect/burn.png" alt="Burn Icon" />.\nConsumes <img src="/ui/stains/ice.png" alt="Ice Stain Icon" /><img src="/ui/stains/ice.png" alt="Ice Stain Icon" />: Increased Damage'
    },
    es: {
      name: 'Fuego Indómito',
      description:
        'Inflige daño de <span class="text-red-400 font-semibold">fuego</span> moderado a todos los enemigos. 1 golpe. Aplica 3 acumulaciones de <span class="text-orange-400 font-semibold">quemadura</span> <img src="/ui/status-effect/burn.png" alt="Burn Icon" />.\nConsume <img src="/ui/stains/ice.png" alt="Ice Stain Icon" /><img src="/ui/stains/ice.png" alt="Ice Stain Icon" />: Aumenta el daño.'
    }
  }
];

const MAELLE_SKILLS: Skill[] = [
  {
    id: 'breaking-rules',
    cost: 3,
    characterId: 'maelle',
    canBreak: false,
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
    canBreak: false,
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
    canBreak: false,
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
    canBreak: false,
    en: {
      name: 'Degagement',
      description:
        'Deals low single target <span class="text-red-400 font-semibold">Fire</span> damage. 1 hit. Target becomes weak to <span class="text-red-400 font-semibold">Fire</span> damage for 2 turns.'
    },
    es: {
      name: 'Degagement',
      description:
        'Deals low single target <span class="text-red-400 font-semibold">Fire</span> damage. 1 hit. Target becomes weak to <span class="text-red-400 font-semibold">Fire</span> damage for 2 turns.'
    }
  },
  {
    id: 'egide',
    cost: 3,
    characterId: 'maelle',
    canBreak: false,
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
    id: 'fencers-flurry',
    cost: 4,
    characterId: 'maelle',
    canBreak: false,
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
    canBreak: false,
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
    canBreak: false,
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
    canBreak: false,
    en: { name: 'Guard Up', description: 'Applies Shell , reducing damage taken, to up to 3 allies for 3 turns.' },
    es: { name: 'Guard Up', description: 'Applies Shell , reducing damage taken, to up to 3 allies for 3 turns.' }
  },
  {
    id: 'gustaves-homage',
    cost: 8,
    characterId: 'maelle',
    canBreak: false,
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
    canBreak: false,
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
    canBreak: false,
    en: { name: 'Mezzo Forte', description: 'Reapplies current stance and gives 2-4 AP' },
    es: { name: 'Mezzo Forte', description: 'Reapplies current stance and gives 2-4 AP' }
  },
  {
    id: 'momentum-strike',
    cost: 7,
    characterId: 'maelle',
    canBreak: false,
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
    canBreak: false,
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
    canBreak: false,
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
    canBreak: false,
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
    canBreak: false,
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
    canBreak: false,
    en: {
      name: 'Pyrolyse',
      description:
        'Deals extreme single target <span class="text-red-400 font-semibold">Fire</span> damage. 3 hits. Applies 5 Burn  per hit. Offensive Stance: Applies 2 more Burn  per hit.'
    },
    es: {
      name: 'Pyrolyse',
      description:
        'Deals extreme single target <span class="text-red-400 font-semibold">Fire</span> damage. 3 hits. Applies 5 Burn  per hit. Offensive Stance: Applies 2 more Burn  per hit.'
    }
  },
  {
    id: 'rain-of-fire',
    cost: 5,
    characterId: 'maelle',
    canBreak: false,
    en: {
      name: 'Rain of Fire',
      description:
        'Deals medium single target <span class="text-red-400 font-semibold">Fire</span> damage. 2 hits. Applies 3 Burn  per hit. Defensive Stance: applies 2 more Burn  per hit.'
    },
    es: {
      name: 'Rain of Fire',
      description:
        'Deals medium single target <span class="text-red-400 font-semibold">Fire</span> damage. 2 hits. Applies 3 Burn  per hit. Defensive Stance: applies 2 more Burn  per hit.'
    }
  },
  {
    id: 'revenge',
    cost: 5,
    characterId: 'maelle',
    canBreak: false,
    en: {
      name: 'Revenge',
      description:
        'Deals high single target <span class="text-red-400 font-semibold">Fire</span> damage. 1 hit. Damage increased for each hit received since the previous turn. Can Break'
    },
    es: {
      name: 'Revenge',
      description:
        'Deals high single target <span class="text-red-400 font-semibold">Fire</span> damage. 1 hit. Damage increased for each hit received since the previous turn. Can Break'
    }
  },
  {
    id: 'spark',
    cost: 3,
    characterId: 'maelle',
    canBreak: false,
    en: {
      name: 'Spark',
      description:
        'Deals low single target <span class="text-red-400 font-semibold">Fire</span> damage. 1 hit. Applies 3 Burn  Offensive Stance: Applies 2 more Burn'
    },
    es: {
      name: 'Spark',
      description:
        'Deals low single target <span class="text-red-400 font-semibold">Fire</span> damage. 1 hit. Applies 3 Burn  Offensive Stance: Applies 2 more Burn'
    }
  },
  {
    id: 'stendhal',
    cost: 8,
    characterId: 'maelle',
    canBreak: false,
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
    canBreak: false,
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
    canBreak: false,
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
    canBreak: false,
    en: { name: 'All Set', description: 'Applies Shell , Powerful , and Rush  to all allies.' },
    es: { name: 'All Set', description: 'Applies Shell , Powerful , and Rush  to all allies.' }
  },
  {
    id: 'bad-omen',
    cost: 3,
    characterId: 'sciel',
    canBreak: false,
    en: { name: 'Bad Omen', description: 'Deals low Dark damage to all enemies. 2 hits. Applies 2 Foretell  per hit.' },
    es: { name: 'Bad Omen', description: 'Deals low Dark damage to all enemies. 2 hits. Applies 2 Foretell  per hit.' }
  },
  {
    id: 'card-weaver',
    cost: 3,
    characterId: 'sciel',
    canBreak: false,
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
    canBreak: false,
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
    canBreak: false,
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
    canBreak: false,
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
    canBreak: false,
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
    canBreak: false,
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
    canBreak: false,
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
    id: 'fortunes-fury',
    cost: 5,
    characterId: 'sciel',
    canBreak: false,
    en: { name: "Fortune's Fury", description: 'Targeted ally deals double damage for 1 turn.' },
    es: { name: "Fortune's Fury", description: 'Targeted ally deals double damage for 1 turn.' }
  },
  {
    id: 'grim-harvest',
    cost: 5,
    characterId: 'sciel',
    canBreak: false,
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
    canBreak: false,
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
    canBreak: false,
    en: { name: 'Intervention', description: 'Targeted ally plays immediately and gains 4 AP' },
    es: { name: 'Intervention', description: 'Targeted ally plays immediately and gains 4 AP' }
  },
  {
    id: 'marking-card',
    cost: 3,
    characterId: 'sciel',
    canBreak: false,
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
    canBreak: false,
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
    canBreak: false,
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
    canBreak: false,
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
    canBreak: false,
    en: { name: 'Rush', description: 'Applies Rush  to 1-3 allies, increasing their speed for 3 turns.' },
    es: { name: 'Rush', description: 'Applies Rush  to 1-3 allies, increasing their speed for 3 turns.' }
  },
  {
    id: 'sealed-fate',
    cost: 4,
    characterId: 'sciel',
    canBreak: false,
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
    canBreak: false,
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
    canBreak: false,
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
    canBreak: false,
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
    canBreak: false,
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
    canBreak: false,
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
    canBreak: false,
    en: { name: 'Assault Zero', description: 'Critical Hits generate 1 additional Perfection  : Increased damage.' },
    es: { name: 'Assault Zero', description: 'Critical Hits generate 1 additional Perfection  : Increased damage.' }
  },
  {
    id: 'berserk-slash',
    cost: 4,
    characterId: 'verso',
    canBreak: false,
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
    canBreak: false,
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
    canBreak: false,
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
    canBreak: false,
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
    canBreak: false,
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
    canBreak: false,
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
    canBreak: false,
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
    canBreak: false,
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
    canBreak: false,
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
    canBreak: false,
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
    canBreak: false,
    en: { name: 'Overload', description: 'Increases Rank to  and refills all AP  but sets self-Health to 1.' },
    es: { name: 'Overload', description: 'Increases Rank to  and refills all AP  but sets self-Health to 1.' }
  },
  {
    id: 'paradigm-shift',
    cost: 1,
    characterId: 'verso',
    canBreak: false,
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
    canBreak: false,
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
    canBreak: false,
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
    canBreak: false,
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
    canBreak: false,
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
    canBreak: false,
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
    canBreak: false,
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
    canBreak: false,
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
    canBreak: false,
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
    canBreak: false,
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
    canBreak: false,
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
    canBreak: false,
    buffedMask: 'agile',
    roulettePositions: 2,
    en: {
      name: 'Abbest Wind',
      description: 'Deals low single target Physical damage. 1 hit. Plays a second turn. Agile Mask: Costs 0 AP'
    },
    es: {
      name: 'Viento de Abbest',
      description:
        'Inflige daño físico leve a un objetivo. 1 golpe. Actúa una segunda vez. Máscara ágil: No consume PA.'
    }
  },
  {
    id: 'aberration-light',
    cost: 7,
    characterId: 'monoco',
    canBreak: false,
    buffedMask: 'agile',
    roulettePositions: 4,
    en: {
      name: 'Aberration Light',
      description:
        'Deals high Light damage to all enemies. 2 hits. Applies 4 Burn per hit. Agile Mask: Applies 2 more Burn per hit.'
    },
    es: {
      name: 'Luz de Aberración',
      description:
        'Inflige mucho daño de luz a todos los enemigos. 2 golpes. Aplica 4 acumulaciones ed quemadura por golpe. Máscara ágil: Aplica 2 acumulaciones más de quemadura por golpe.'
    }
  },
  {
    id: 'ballet-charm',
    cost: 2,
    characterId: 'monoco',
    canBreak: false,
    buffedMask: 'caster',
    roulettePositions: 3,
    en: {
      name: 'Ballet Charm',
      description:
        'Deals low single target Light damage. 1 hit. Applies Powerless to the taret for 3 turns. Caster Mask: Increased damage.'
    },
    es: {
      name: 'Encanto de Bailarina',
      description:
        'Inflige daño de luz leve a un objetivo. 1 golpe. Le aplica debilitamiento al objetivo durante 3 turnos. Máscara conjuradora: Aumenta el daño.'
    }
  },
  {
    id: 'benisseur-mortar',
    cost: 5,
    characterId: 'monoco',
    canBreak: false,
    buffedMask: 'caster',
    roulettePositions: 6,
    en: {
      name: 'Benisseur Mortar',
      description:
        'Deals medium single target <span class="text-blue-300 font-semibold">Ice</span> damage. 3 hits. Change to Almighty Mask if target is Marked. Caster Mask: Increased damage.'
    },
    es: {
      name: 'Mortero de Bénisseur',
      description:
        'Inflige daño de <span class="text-blue-300 font-semibold">hielo</span> moderado a un objetivo. 3 golpes. Cambia a Máscara omnipotente si el objetivo está marcado. Máscara conjuradora: Aumenta el daño.'
    }
  },
  {
    id: 'braseleur-smash',
    cost: 4,
    characterId: 'monoco',
    canBreak: false,
    buffedMask: 'balanced',
    roulettePositions: 2,
    en: {
      name: 'Braseleur Smash',
      description:
        'Deals medium single target <span class="text-red-400 font-semibold">Fire</span> damage and applies 3 Burn. 2 hits. Balanced Mask: Increased damage.'
    },
    es: {
      name: 'Golpe de Braseleur',
      description:
        'Inflige daño de <span class="text-red-400 font-semibold">fuego</span> moderado a un objetivo y le aplica 3 acumulaciones de quemadura. 2 golpes. Máscara equilibrada: Aumenta el daño.'
    }
  },
  {
    id: 'boucheclier-fortify',
    cost: 3,
    characterId: 'monoco',
    canBreak: false,
    buffedMask: 'heavy',
    roulettePositions: 5,
    en: {
      name: 'Boucheclier Fortify',
      description: 'Applies Shell to 1-3 Allies for 3 turns. Heavy Mask: Also applies 1 Shield.'
    },
    es: {
      name: 'Forificación de Boucheclier',
      description: 'Les aplica coraza a entre 1 y 3 aliados durante 3 turnos. Máscara pesada: También aplica 1 escudo.'
    }
  },
  {
    id: 'bruler-bash',
    cost: 4,
    characterId: 'monoco',
    canBreak: true,
    buffedMask: 'caster',
    roulettePositions: 4,
    en: {
      name: 'Bruler Bash',
      description: 'Deals medium single target Physical damage. 3 hits. Can Break. Caster Mask: Increased damage.'
    },
    es: {
      name: 'Embate de Bruler',
      description:
        'Inflige daño físico moderado a un objetivo. 3 golpes. Puede causar ruptura. Máscara conjuradora: Aumenta el daño.'
    }
  },
  {
    id: 'chalier-combo',
    cost: 7,
    characterId: 'monoco',
    canBreak: false,
    buffedMask: 'balanced',
    roulettePositions: 3,
    en: {
      name: 'Chalier Combo',
      description:
        'Deals high single target Physical damage. 6 hits. Interrupted if failed. Balanced Mask: Increased damage.'
    },
    es: {
      name: 'Combo de Chalier',
      description:
        'Inflige mucho daño físico a un objetivo. 6 golpes. Se interrumpe si falla. Máscara equilibrada: Aumenta el daño.'
    }
  },
  {
    id: 'chapelier-slash',
    cost: 7,
    characterId: 'monoco',
    canBreak: false,
    buffedMask: 'agile',
    roulettePositions: 4,
    en: {
      name: 'Chapelier Slash',
      description: 'Deals high Physical damage to all enemies. 3 hits. Applies Mark. Agile Mask: Increased damage.'
    },
    es: {
      name: 'Corte de Chapelier',
      description:
        'Inflige mucho daño físico a todos los enemigos. 3 golpes. Aplica marca. Máscara ágil: Aumenta el daño.'
    }
  },
  {
    id: 'chevaliere-ice',
    cost: 6,
    characterId: 'monoco',
    canBreak: false,
    buffedMask: 'balanced',
    roulettePositions: 2,
    en: {
      name: 'Chevaliere Ice',
      description:
        'Deals high <span class="text-blue-300 font-semibold">Ice</span> damage to all enemies. 3 hits. Applies Slow to the targets for 3 turns. Balanced Mask: Increased damage.'
    },
    es: {
      name: 'Hielo de Chevalière',
      description:
        'Inflige mucho daño de <span class="text-blue-300 font-semibold">hielo</span> a todos los enemigos. 3 golpes. Les aplica lentitud a los objetivos durante 3 turnos. Máscara equilibrada: Aumenta el daño.'
    }
  },
  {
    id: 'chevaliere-piercing',
    cost: 3,
    characterId: 'monoco',
    canBreak: false,
    buffedMask: 'agile',
    roulettePositions: 3,
    en: {
      name: 'Chevaliere Piercing',
      description:
        'Deals single target Physical damage through Shields. 6 hits. Damage increased for each Shield on the target. Agile Mask: Increased damage.'
    },
    es: {
      name: 'Perforación de Chevalière',
      description:
        'Inflige daño físico a un objetivo a través de los escudos. 6 golpes. Inflige más daño por cada escudo del objetivo. Máscara ágil: Aumenta el daño.'
    }
  },
  {
    id: 'chevaliere-thrusts',
    cost: 7,
    characterId: 'monoco',
    canBreak: false,
    buffedMask: 'heavy',
    roulettePositions: 3,
    en: {
      name: 'Chevaliere Thrusts',
      description:
        'Deals high Physical damage to all enemis. 3 hits. Critical Hits deal double damage. Heavy Mask: Increased damage.'
    },
    es: {
      name: 'Acometidas de Chevalière',
      description:
        'Inflige mucho daño físico a todos los enemigos. Los golpes críticos infligen daño doble. Máscara pesada: Aumenta el daño.'
    }
  },
  {
    id: 'clair-enfeeble',
    cost: 5,
    characterId: 'monoco',
    canBreak: false,
    buffedMask: 'balanced',
    roulettePositions: 3,
    en: {
      name: 'Clair Enfeeble',
      description:
        'Deals medium Light damage to all enemies. 1 hit. Applies Powerless for 3 turns. Balanced Mask: Increased damage.'
    },
    es: {
      name: 'Debilitamiento de Clair',
      description:
        'Inflige daño de luz moderado a todos los enemigos. 1 golpe. Aplica debilitamiento durantes 3 turnos. Máscara equilibrada: Aumenta el daño.'
    }
  },
  {
    id: 'contorsionniste-blast',
    cost: 6,
    characterId: 'monoco',
    canBreak: false,
    buffedMask: 'balanced',
    roulettePositions: 2,
    en: {
      name: 'Contorsionniste Blast',
      description:
        'Deals medium Physical damage to all enemies. 1 hit. Heals all allies by 10% Health for each enemy hit. Balanced Mask: Increased damage.'
    },
    es: {
      name: 'Ataque de Contorsionista',
      description:
        'Inflige daño físico moderado a todos los enemigos. 1 golpe. Cura a todos los aliados un 10% de vida por cada enemigo impactado. Máscara equilibrada: Aumenta el daño.'
    }
  },
  {
    id: 'creation-void',
    cost: 9,
    characterId: 'monoco',
    canBreak: false,
    buffedMask: 'caster',
    roulettePositions: 4,
    en: {
      name: 'Creation Void',
      description:
        'Deals extreme Void damage to random targets. 3 hits. More damage if the same target is hit multiple times. Caster Mask: Increased damage'
    },
    es: {
      name: 'Vacío de Creación',
      description:
        'Inflige daño de vacío extremo a objetivos al azar. 3 golpes. Inflige más daño si golpea al mismo objetivo varias veces. Máscara conjuradora: Aumenta el daño.'
    }
  },
  {
    id: 'cruler-barrier',
    cost: 4,
    characterId: 'monoco',
    canBreak: false,
    buffedMask: 'heavy',
    roulettePositions: 4,
    en: {
      name: 'Cruler Barrier',
      description: 'Applies 1-2 Shields to the target. Heavy Mask: Gives 2 AP to the target.'
    },
    es: {
      name: 'Barrera de Cruler',
      description: 'Le aplica de 1 a 2 escudos al objetivo. Máscara pesada: Le otorga 2 PA al objetivo.'
    }
  },
  {
    id: 'cultist-blood',
    cost: 3,
    characterId: 'monoco',
    roulettePositions: 5,
    buffedMask: 'heavy',
    canBreak: false,
    en: {
      name: 'Cultist Blood',
      description:
        'Deals medium Dark damage to all enemies. 3 hits. Sacrifices 90% Health to increase damage. Heavy Mask: Increased damage.'
    },
    es: {
      name: 'Sangre de Sectaria',
      description:
        'Inflige daño de oscuridad moderado a todos los enemigos. 3 golpes. Sacrifica el 90% de la vida para infligir más daño. Máscara pesada: Aumenta el daño.'
    }
  },
  {
    id: 'cultist-slashes',
    cost: 5,
    characterId: 'monoco',
    canBreak: false,
    buffedMask: 'agile',
    roulettePositions: 3,
    en: {
      name: 'Cultist Slashes',
      description:
        'Deals medium single target Dark damage. 3 hits. Deals more damage the less Health Monoco has. Agile Mask: Increased Damage.'
    },
    es: {
      name: 'Cortes de Sectario',
      description:
        'Inflige daño de oscuridad moderado a un objetivo. 3 golpes. Inflige más daño cuanta menos vida tenga Monoco. Máscara ágil: Aumenta el daño.'
    }
  },
  {
    id: 'danseuse-waltz',
    cost: 8,
    characterId: 'monoco',
    canBreak: false,
    buffedMask: 'balanced',
    roulettePositions: 3,
    en: {
      name: 'Danseuse Waltz',
      description:
        'Deals high single target <span class="text-red-400 font-semibold">Fire</span> damage. 3 hits. Deals more damage against Burning targets. Balanced Mask: Increased damage.'
    },
    es: {
      name: 'Vals de Danseuse',
      description:
        'Inflige mucho daño de <span class="text-red-400 font-semibold">fuego</span> a un objetivo. 3 golpes. Inflige más daño contra objetivos que sufren quemadura. Máscara equilibrada: Aumenta el daño.'
    }
  },
  {
    id: 'demineur-thunder',
    cost: 2,
    characterId: 'monoco',
    canBreak: false,
    buffedMask: 'caster',
    roulettePositions: 5,
    en: {
      name: 'Demineur Thunder',
      description:
        'Deals low single target Lightning damage. 1 hit. Deals extra Break Damage. Caster Mask: Increased Break damage.'
    },
    es: {
      name: 'Trueno de Démineur',
      description:
        'Inflige daño de rayo leve a un objetivo. 1 golpe. Inflige daño de ruptura adicional. Máscara conjuradora: Aumenta el daño de ruptura.'
    }
  },
  {
    id: 'duallist-storm',
    cost: 8,
    characterId: 'monoco',
    canBreak: true,
    buffedMask: 'almighty',
    roulettePositions: 1,
    en: {
      name: 'Duallist Storm',
      description: 'Deals extreme single target Physical damage. 4 hits. Can Break. Almighty Mask: Increased damage.'
    },
    es: {
      name: 'Tormenta de Dualista',
      description:
        'Inflige daño físico extremo a un objetivo. 4 golpes. Puede causar ruptura. Máscara omnipotente: Aumenta el daño.'
    }
  },
  {
    id: 'echassier-stabs',
    cost: 4,
    characterId: 'monoco',
    canBreak: false,
    buffedMask: 'agile',
    roulettePositions: 4,
    en: {
      name: 'Echassier Stabs',
      description:
        'Deals medium single target Physical damage. 2 hits. Second hit applies Mark to the target. Agile Mask: Increased damage.'
    },
    es: {
      name: 'Puñaladas de Échassier',
      description:
        'Inflige daño físico moderado a un objetivo. 2 golpes. El segundo golpe le aplica marca al objetivo. Máscara ágil: Aumenta el daño.'
    }
  },
  {
    id: 'eveque-spear',
    cost: 6,
    characterId: 'monoco',
    canBreak: false,
    buffedMask: 'heavy',
    roulettePositions: 5,
    en: {
      name: 'Eveque Spear',
      description:
        'Deals high single target Earth damage and applies Powerless for 3 turns. 1 hit. Heavy Mask: Increased damage.'
    },
    es: {
      name: 'Lanza de Évèque',
      description:
        'Inflige mucho daño de tierra a un objetivo y le aplica debilitamiento durante 3 turnos. 1 golpe. Máscara pesada: Aumenta el daño.'
    }
  },
  {
    id: 'gault-fury',
    cost: 3,
    characterId: 'monoco',
    canBreak: false,
    buffedMask: 'balanced',
    roulettePositions: 2,
    en: {
      name: 'Gault Fury',
      description: 'Deals low single target Physical damage. 4 hits. Applies Mark. Balanced Mask: Increased damage.'
    },
    es: {
      name: 'Furia de Gault',
      description:
        'Inflige daño físico leve a un objetivo. 4 golpes. Aplica marca. Máscara equilibrada: Aumenta el daño.'
    }
  },
  {
    id: 'glaise-earthquakes',
    cost: 4,
    characterId: 'monoco',
    canBreak: false,
    buffedMask: 'heavy',
    roulettePositions: 6,
    en: {
      name: 'Glaise Earthquakes',
      description:
        'Deals medium Earth damage to all enemies. 3 hits. Applies Powerful to self. Heavy Mask: applies Powerful  to all allies.'
    },
    es: {
      name: 'Terremotos de Glaise',
      description:
        'Inflige daño de tierra moderado a todos los enemigos. 3 golpes. Le aplica fortalecimiento a Monoco. Máscara pesada: Les aplica fortalecimiento a todos los aliados.'
    }
  },
  {
    id: 'grosse-tete-whack',
    cost: 6,
    characterId: 'monoco',
    canBreak: false,
    buffedMask: 'heavy',
    roulettePositions: 4,
    en: {
      name: 'Grosse Tete Whack',
      description:
        'Deals high single target Physical damage. 5 hits. Applies Defenceless for 3 turns. Heavy Mask: Increased damage.'
    },
    es: {
      name: 'Porrazo de Grosse Tète',
      description:
        'Inflige muchod año físico a un objetivo. 5 golpes. Aplica fragilidad durante 3 turnos. Máscara pesada: Aumenta el daño.'
    }
  },
  {
    id: 'hexga-crush',
    cost: 5,
    characterId: 'monoco',
    canBreak: false,
    buffedMask: 'heavy',
    roulettePositions: 6,
    en: {
      name: 'Hexga Crush',
      description:
        'Deals medium single target Earth damage. 2 hits. Applies Defenceless to the target for 3 turns. Heavy Mask: Increased damage.'
    },
    es: {
      name: 'Aplastamiento de Hexga',
      description:
        'Inflige daño de tierra moderado a un objetivo. 2 golpes. Le aplica fragilidad al objetivo durante 3 turnos. Máscara pesada: Aumenta la duración de fragilidad a 5 turnos.'
    }
  },
  {
    id: 'jar-lampstorm',
    cost: 5,
    characterId: 'monoco',
    canBreak: false,
    buffedMask: 'heavy',
    roulettePositions: 6,
    en: {
      name: 'Jar Lampstorm',
      description: 'Deals medium Physical damage to all enemies. 4 hits. Heavy Mask: Increased damage.'
    },
    es: {
      name: 'Tormenta de Faroles de Jarrón',
      description: 'Inflige daño físico moderado a todos los enemigos. 4 golpes. Máscara pesada: Aumenta el daño.'
    }
  },
  {
    id: 'lampmaster-light',
    cost: 5,
    characterId: 'monoco',
    canBreak: false,
    buffedMask: 'almighty',
    roulettePositions: 1,
    en: {
      name: 'Lampmaster Light',
      description:
        'Deals high Light damage to all enemies. 1 hit. Increased damage at each cast. Almighty Mask: Increased damage.'
    },
    es: {
      name: 'Luz del Señor de los Faroles',
      description:
        'Inflige mucho daño de luz a todos los enemigos. 1 golpe. Inflige más daño con cada lanzamiento. Máscara omnipotente: Aumenta el daño.'
    }
  },
  {
    id: 'lancelier-impale',
    cost: 2,
    characterId: 'monoco',
    canBreak: false,
    buffedMask: 'agile',
    roulettePositions: 4,
    en: {
      name: 'Lancelier Impale',
      description:
        'Deals low single target <span class="text-blue-300 font-semibold">Ice</span> damage. 1 hit. Slows  the target for 3 turns. Agile Mask: Increased damage.'
    },
    es: {
      name: 'Empalamiento de Lancelier',
      description:
        'Inflige daño de <span class="text-blue-300 font-semibold">hielo</span> leve a un objetivo. 1 golpes. Le aplica lentitud al objetivo durante 3 turnos. Máscara ágil: Aumenta el daño.'
    }
  },
  {
    id: 'luster-slices',
    cost: 3,
    characterId: 'monoco',
    canBreak: false,
    buffedMask: 'agile',
    roulettePositions: 3,
    en: {
      name: 'Luster Slices',
      description:
        'Deals low single target Physical damage. 3 hits. Applies Rush to self for 3 turns. Agile Mask: Increased damage.'
    },
    es: {
      name: 'Tajaduras de Luster',
      description:
        'Inflige daño físico leve a un objetivo. 3 golpes. Le aplica prisa a Monoco durante 3 turnos. Máscara ágil: Aumenta el daño.'
    }
  },
  {
    id: 'moissonneuse-vendange',
    cost: 5,
    characterId: 'monoco',
    canBreak: true,
    buffedMask: 'balanced',
    roulettePositions: 2,
    en: {
      name: 'Moissonneuse Vendange',
      description: 'Deals High single target Physical damage. 3 hits. Can Break. Balanced Mask: Increased damage.'
    },
    es: {
      name: 'Vendimia de Moissonneuse',
      description:
        'Inflige mucho daño físico a un objetivo. Puede causar ruptura. Máscara equilibrada: Aumenta el daño.'
    }
  },
  {
    id: 'obscur-sword',
    cost: 6,
    characterId: 'monoco',
    canBreak: false,
    buffedMask: 'heavy',
    roulettePositions: 3,
    en: {
      name: 'Obscur Sword',
      description:
        'Deals high single target Dark damage. 5 hits. Deals more damage against Powerless targets. Heavy Mask: Increased damage.'
    },
    es: {
      name: 'Espada de Obscur',
      description:
        'Inflige mucho daño de oscuridad a un objetivo. 5 golpes. Inflige más daño contra objetivos debilitados. Máscara pesada: Aumenta el daño.'
    }
  },
  {
    id: 'orphelin-cheers',
    cost: 3,
    characterId: 'monoco',
    canBreak: false,
    buffedMask: 'caster',
    roulettePositions: 3,
    en: {
      name: 'Orphelin Cheers',
      description: 'Applies Powerful to 1-3 Allies. Caster Mask: Also gives 3 AP to targets.'
    },
    es: {
      name: 'Vítores de Orphelin',
      description:
        'Les aplica fortalecimiento a entre 1 y 3 aliados. Máscara conjuradora: También les otorga 3 PA a los objetivos.'
    }
  },
  {
    id: 'pelerin-heal',
    cost: 5,
    characterId: 'monoco',
    canBreak: false,
    buffedMask: 'caster',
    roulettePositions: 3,
    en: {
      name: 'Pelerin Heal',
      description: 'Applies Regen to all allies. Caster Mask: also Heals 40% Health.'
    },
    es: {
      name: 'Curación de Pèlerin',
      description: 'Les aplica regeneración a todos los aliados. Máscara conjuradora: También cura un 40% de la vida.'
    }
  },
  {
    id: 'portier-crash',
    cost: 8,
    characterId: 'monoco',
    canBreak: true,
    buffedMask: 'heavy',
    roulettePositions: 5,
    en: {
      name: 'Portier Crash',
      description: 'Deals high Physical damage to all enemies. 1 hit. Can Break. Heavy Mask: Increased damage.'
    },
    es: {
      name: 'Choque de Portier',
      description:
        'Inflige mucho daño físico a todos los enemigos. 1 golpe. Puede causar ruptura. Máscara pesada: Aumenta el daño.'
    }
  },
  {
    id: 'potier-energy',
    cost: 4,
    characterId: 'monoco',
    canBreak: false,
    buffedMask: 'caster',
    roulettePositions: 6,
    en: {
      name: 'Potier Energy',
      description: 'Gives 1-3 AP to all allies. Caster Mask: Gives 1 additional AP'
    },
    es: {
      name: 'Energía de Potier',
      description: 'Les otorga de 1 a 3 PA a todos los aliados. Máscara conjuradora: Otorga 1 PA adicional.'
    }
  },
  {
    id: 'ramasseur-bonk',
    cost: 2,
    characterId: 'monoco',
    canBreak: true,
    buffedMask: 'agile',
    roulettePositions: 4,
    en: {
      name: 'Ramasseur Bonk',
      description:
        "Deals low single target Dark damage. 1 hit. Can Break. Agile Mask: fills 20% of the target's Break Bar."
    },
    es: {
      name: 'Coscorrón de Ramasseur',
      description:
        'Inflige daño de oscuridad leve a un objetivo. 1 golpe. Puede causar ruptura. Máscara ágil: Carga un 20% de la barra de ruptura del objetivo.'
    }
  },
  {
    id: 'rocher-hammering',
    cost: 3,
    characterId: 'monoco',
    canBreak: true,
    buffedMask: 'heavy',
    roulettePositions: 3,
    en: {
      name: 'Rocher Hammering',
      description: 'Deals medium single target Physical damage. 4 hits. Can Break. Heavy Mask: Increased damage.'
    },
    es: {
      name: 'Martillazos de Rocher',
      description:
        'Inflige daño físico moderado a un objetivo. 4 golpes. Puede causar ruptura. Máscara pesada: Aumenta el daño.'
    }
  },
  {
    id: 'sakapatate-estoc',
    cost: 3,
    characterId: 'monoco',
    canBreak: false,
    buffedMask: 'balanced',
    roulettePositions: 3,
    en: {
      name: 'Sakapatate Estoc',
      description:
        'Deals low single target Lightning damage. 1 hit. Deals more damage if the target is Stunned. Balanced Mask: Increased damage.'
    },
    es: {
      name: 'Estocada de Sakapatate',
      description:
        'Inflige daño de rayo leve a un objetivo. 1 golpe. Inflige más daño si el objetivo está aturdido. Máscara equilibrada: Aumenta el daño.'
    }
  },
  {
    id: 'sakapatate-explosion',
    cost: 4,
    characterId: 'monoco',
    canBreak: false,
    buffedMask: 'caster',
    roulettePositions: 6,
    en: {
      name: 'Sakapatate Explosion',
      description:
        'Deals medium Lightning damage to random enemies. 3 hits. Critical Hits trigger an additional hit. Caster Mask: Increased damage.'
    },
    es: {
      name: 'Exposión de Sakapatate',
      description:
        'Inflige daño de rayo moderado a enemigos al azar. 3 golpes. Los golpes críticos propinan un golpe adicional. Máscara conjuradora: Aumenta el daño.'
    }
  },
  {
    id: 'sakapatate-fire',
    cost: 9,
    characterId: 'monoco',
    canBreak: false,
    buffedMask: 'almighty',
    roulettePositions: 1,
    en: {
      name: 'Sakapatate Fire',
      description: 'Deals extreme Fire to all enemies. 3 hits. Apply 3 Burn per hit. Almighty Mask: Increased damage.'
    },
    es: {
      name: 'Fuego de Sakapatate',
      description:
        'Inflige daño de <span class="text-red-400 font-semibold">fuego</span> extremo a todos los enemigos. 3 golpes. Aplica 3 acumulaciones de quemadura por golpe. Máscara omnipotente: Aumenta el daño.'
    }
  },
  {
    id: 'sakapatate-slam',
    cost: 7,
    characterId: 'monoco',
    canBreak: false,
    buffedMask: 'heavy',
    roulettePositions: 5,
    en: {
      name: 'Sakapatate Slam',
      description:
        'Deals high Physical damage to all enemies. 1 hit. Increased damage to Marked targets. Heavy Mask: Increased damage.'
    },
    es: {
      name: 'Azote de Sakapatate',
      description:
        'Inflige mucho daño físico a todos los enemigos. 1 golpe. Inflige más daño contra enemigos marcados. Máscara pesada: Aumenta el daño.'
    }
  },
  {
    id: 'sapling-absorption',
    cost: 6,
    characterId: 'monoco',
    canBreak: false,
    buffedMask: 'caster',
    roulettePositions: 5,
    en: {
      name: 'Sapling Absorption',
      description:
        'Deals high Dark damage. 3 hits. Recovers 5% Health on hit. Caster Mask: Increased damage and double Heal.'
    },
    es: {
      name: 'Absorción de Retoño',
      description:
        'Inflige mucho daño de oscuridad. 3 golpes. Recupera un 5% de vida al impactar. Máscara conjuradora: Aumenta el daño y duplica la curación.'
    }
  },
  {
    id: 'stalact-punches',
    cost: 4,
    characterId: 'monoco',
    canBreak: false,
    buffedMask: 'heavy',
    roulettePositions: 4,
    en: {
      name: 'Stalact Punches',
      description:
        'Deals medium single target <span class="text-blue-300 font-semibold">Ice</span> damage. 4 hits. High Break damage. Heavy Mask: Increased damage.'
    },
    es: {
      name: 'Puñetazos de Stalact',
      description:
        'Inflige daño de <span class="text-blue-300 font-semibold">hielo</span> moderado a un objetivo. 4 golpes. Inflige mucho daño de ruptura. Máscara pesada: Aumenta el daño.'
    }
  },
  {
    id: 'troubadour-trumpet',
    cost: 3,
    characterId: 'monoco',
    canBreak: false,
    buffedMask: 'caster',
    roulettePositions: 4,
    en: {
      name: 'Troubadour Trumpet',
      description: 'Applies a random buff to 1 to 3 allies. Caster Mask: applies a second random buff.'
    },
    es: {
      name: 'Trompeta de Trovador',
      description:
        'Les aplica un potenciador al azar a entre 1 y 3 aliados. Máscara conjuradora: Aplica un segundo potenciador al azar.'
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
