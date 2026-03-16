import { LuneSkill, MaelleSkill, MonocoSkill, ScielSkill, Skill, VersoSkill } from '../types';

const LUNE_GRADIENT_SKILLS: LuneSkill[] = [
  {
    id: 'tremor',
    cost: 1,
    characterId: 'lune',
    canBreak: false,
    stains: ['light'],
    en: {
      name: 'Tremor',
      description:
        "Deals high <color:earth>Earth</color> damage to all enemies. 1 hit.\nRemoves all enemies' <right-icon:shield>Shields</right-icon>."
    },
    es: {
      name: 'Temblor',
      description:
        'Inflige mucho daño de <color:earth>tierra</color> a todos los enemigos. 1 golpe.\nElimina los <right-icon:shield>escudos</right-icon> de todos los enemigos.'
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
      description: 'Cleanses all Status Effect and <right-icon:heal>Heal</right-icon> all allies.'
    },
    es: {
      name: 'Árbol de la Vida',
      description: 'Disipa todas las alteraciones de estado y <right-icon:heal>cura</right-icon> a todos los aliados.'
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
        'Deals extreme damage to all enemies. 1 hit.\nElement depends on which Stains Lune has the most.\nCan <right-icon:break>Break</right-icon>.'
    },
    es: {
      name: 'Ruptura Celeste',
      description:
        'Inflige daño extremo a todos los enemigos. 1 golpe.\nEl elemento depende del tipo de borrón más abundante de Lune.\nPuede causar <right-icon:break>ruptura</right-icon>.'
    }
  }
];

const MAELLE_GRADIENT_SKILLS: MaelleSkill[] = [
  {
    id: 'virtuose-strike',
    cost: 1,
    characterId: 'maelle',
    canBreak: false,
    nextPosture: 'virtuose',
    en: {
      name: 'Virtuose Strike',
      description: 'Deals high single target <color:physical>Physical</color> damage. 5 hits.'
    },
    es: {
      name: 'Ataque Virtuoso',
      description: 'Inflige mucho daño <color:physical>físico</color> a un objetivo. 5 golpes.'
    }
  },
  {
    id: 'phoenix-flame',
    cost: 2,
    characterId: 'maelle',
    canBreak: false,
    nextPosture: 'offensive',
    en: {
      name: 'Phoenix Flame',
      description:
        'Applies 10 <right-icon:burn>Burn</right-icon> to all enemies and revives all allies with 50 to 70% Health.'
    },
    es: {
      name: 'Llama del Fénix',
      description:
        'Aplica 10 acumulaciones de <right-icon:burn>quemadura</right-icon> a todos los enemigos y revive a todos los aliados con un 50% al 70% de vida.'
    }
  },
  {
    id: 'gommage',
    cost: 3,
    characterId: 'maelle',
    canBreak: false,
    nextPosture: 'virtuose',
    en: {
      name: 'Gommage',
      description: 'Kills weak targets.\nOtherwise deals extreme <color:void>Void</color> damage. 1 hit.'
    },
    es: {
      name: 'Gommage',
      description:
        'Mata a los enemigos débiles.\nDe lo contrario, inflige daño de <color:void>vacío</color> extremo. 1 golpe.'
    }
  }
];

const SCIEL_GRADIENT_SKILLS: ScielSkill[] = [
  {
    id: 'shadow-bringer',
    cost: 1,
    characterId: 'sciel',
    canBreak: false,
    charge: 'sun',
    en: {
      name: 'Shadow Bringer',
      description:
        'Deals high single target <color:dark>Dark</color> damage to random enemies. 10 hits.\nApplies 1 <right-icon:foretell>Foretell</right-icon> per hit.'
    },
    es: {
      name: 'Emisaria de las Sombras',
      description:
        'Inflige mucho daño de <color:dark>oscuridad</color> a enemigos al azar. 10 golpes.\nAplica 1 acumulación de <right-icon:foretell>augurio</right-icon> por golpe.'
    }
  },
  {
    id: 'doom',
    cost: 2,
    characterId: 'sciel',
    canBreak: true,
    charge: 'moon',
    en: {
      name: 'Doom',
      description:
        'Deals very high single target <color:dark>Dark</color> damage. 3 hits.\nApplies <right-icon:powerless>Powerless</right-icon>, <right-icon:defenceless>Defenceless</right-icon>, and <right-icon:slow>Slow</right-icon> for 3 turns.\nCan <right-icon:break>Break</right-icon>.'
    },
    es: {
      name: 'Condena',
      description:
        'Inflige mucho daño de <color:dark>oscuridad</color> a un objetivo. 3 golpes.\nAplica <right-icon:powerless>debilitamiento</right-icon>, <right-icon:defenceless>fragilidad</right-icon> y <right-icon:slow>lentitud</right-icon> durante 3 turnos.\nPuede causar <right-icon:break>ruptura</right-icon>.'
    }
  },
  {
    id: 'end-slice',
    cost: 3,
    characterId: 'sciel',
    canBreak: false,
    charge: 'moon',
    en: {
      name: 'End Slice',
      description:
        'Deals extreme single target <color:physical>Physical</color> damage. 1 hit.\nDamage is increased for each <right-icon:foretell>Foretell</right-icon> consumed since the beginning of the battle.'
    },
    es: {
      name: 'Tajadura Final',
      description:
        'Inflige daño <color:physical>físico</color> extremo a un objetivo. 1 golpe.\nEl daño aumenta por cada acumulación de <right-icon:foretell>augurio</right-icon> consumida desde el inicio del combate.'
    }
  }
];

const VERSO_GRADIENT_SKILLS: VersoSkill[] = [
  {
    id: 'sabotage',
    cost: 1,
    characterId: 'verso',
    canBreak: false,
    en: {
      name: 'Sabotage',
      description:
        'Deals medium <color:physical>Physical</color> damage to all enemies. 1 hit.\nApplies <right-icon:mark>Mark</right-icon>.'
    },
    es: {
      name: 'Sabotaje',
      description:
        'Inflige daño <color:physical>físico</color> moderado a todos los enemigos. 1 golpe.\nAplica <right-icon:mark>marca</right-icon>.'
    }
  },
  {
    id: 'striker',
    cost: 2,
    characterId: 'verso',
    canBreak: true,
    en: {
      name: 'Striker',
      description:
        'Deals high single target <color:physical>Physical</color> damage. 1 hit.\nCan <right-icon:break>Break</right-icon>.'
    },
    es: {
      name: 'Asaltante',
      description:
        'Inflige mucho daño <color:physical>físico</color> a un objetivo. 1 golpe.\nPuede causar <right-icon:break>ruptura</right-icon>.'
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
        'Deals extreme <color:physical>Physical</color> damage. 8 hits.\nGain 1 additional <right-icon:perfection>Perfection</right-icon> per hit.\nApplies Aureole to Verso, reviving him if he dies.'
    },
    es: {
      name: 'Ojos de Ángel',
      description:
        'Inflige daño <color:physical>físico</color> extremo. 8 golpes.\nOtorga 1 acumulación de <right-icon:perfection>perfección</right-icon> adicional por golpe.\nLe aplica Aureola a Verso, que le permite revivir si muere.'
    }
  }
];

const MONOCO_GRADIENT_SKILLS: MonocoSkill[] = [
  {
    id: 'mighty-strike',
    cost: 1,
    characterId: 'monoco',
    canBreak: false,
    en: {
      name: 'Mighty Strike',
      description:
        "Deals high single target damage. 2 hits.\nUses weapon's element.\nDeals double damage if the target is <right-icon:stun>Stunned</right-icon>.\nGoes to <left-icon:almighty-mask>Almighty Mask</left-icon>."
    },
    es: {
      name: 'Golpe Potente',
      description:
        'Inflige mucho daño a un objetivo. 2 golpes.\nUsa el elemento del arma.\nInflige daño doble si el objetivo está <right-icon:stun>aturdido</right-icon>.\nCambia a <left-icon:almighty-mask>Máscara omnipotente</left-icon>.'
    }
  },
  {
    id: 'sanctuary',
    cost: 2,
    characterId: 'monoco',
    canBreak: false,
    en: {
      name: 'Sanctuary',
      description:
        'Gives 2 <right-icon:shield>Shields</right-icon> and applies <right-icon:regen>Regen</right-icon> to all allies for 3 turns.'
    },
    es: {
      name: 'Santuario',
      description:
        'Otorga 2 <right-icon:shield>escudos</right-icon> y aplica <right-icon:regen>regeneración</right-icon> a todos los aliados durante 3 turnos.'
    }
  },
  {
    id: 'break-point',
    cost: 3,
    characterId: 'monoco',
    canBreak: true,
    en: {
      name: 'Break Point',
      description:
        "Deals extreme single target damage. 1 hit.\nUses weapon's element.\nFills the target's Break Bar and <right-icon:break>Breaks</right-icon> it."
    },
    es: {
      name: 'Punto de Ruptura',
      description:
        'Inflige daño extremo a un objetivo. 1 golpe.\nUsa el elemento del arma.\nLlena la barra de ruptura del objetivo y la <right-icon:break>rompe</right-icon>.'
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
