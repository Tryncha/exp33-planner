import { Weapon } from '../types';

const GUSTAVE_VERSO_WEAPONS: Weapon[] = [
  {
    id: 'abysseram',
    imgData: { width: 32, height: 32, classRotation: '-rotate-135' },
    characterIds: ['gustave', 'verso'],
    element: 'physical',
    basePower: 3228,
    isDLCWeapon: false,
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
      name: 'Abiseram',
      passives: [
        'Daño +50% en el grado D. El daño no aumenta en los otros grados.',
        'Daño de ataque básico +50%.',
        'En el grado D, los ataques básicos recuperan un 20% de vida.'
      ]
    }
  },
  {
    id: 'blodam',
    imgData: { width: 32, height: 32, classRotation: 'rotate-45' },
    characterIds: ['gustave', 'verso'],
    element: 'light',
    basePower: 3487,
    isDLCWeapon: false,
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
        'La perfección se basa ahora en la vida actual. Obtienes 1 grado por cada 20% de vida faltante.',
        '+20% de daño de luz con habilidades.',
        '+1 PA al subir de grado.'
      ]
    }
  },
  {
    id: 'chevalam',
    imgData: { width: 32, height: 32, classRotation: 'rotate-45' },
    characterIds: ['gustave', 'verso'],
    element: 'physical',
    basePower: 3067,
    isDLCWeapon: false,
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
        'Comienzas el combate en grado S, pero no puedes recibir curación ni escudos.',
        'Daño +20% por cada turno consecutivo sin recibir daño. Se acumula hasta 5 veces.',
        'Aplica prisa al llegar al grado S.'
      ]
    }
  },
  {
    id: 'confuso',
    imgData: { width: 32, height: 32, classRotation: '-rotate-135' },
    characterIds: ['gustave', 'verso'],
    element: 'light',
    basePower: 3067,
    isDLCWeapon: false,
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
        'Los golpes críticos con daño de luz pueden causar quemadura.',
        'Aplica 3 acumulaciones de quemadura en vez de marca.',
        'Daño de quemadura +50% por grado, hasta un 300% en el grado S.'
      ]
    }
  },
  {
    id: 'contorso',
    imgData: { width: 32, height: 32, classRotation: '-rotate-135' },
    characterIds: ['gustave', 'verso'],
    element: 'lightning',
    basePower: 2841,
    isDLCWeapon: false,
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
        'Cambias al grado S al causar una ruptura. Los ataques básicos pueden causar ruptura.',
        'Probabilidad de crítico del 100% al llegar al grado S.',
        'Los golpes críticos desatan un ataque de rayos.'
      ]
    }
  },
  {
    id: 'corpeso',
    imgData: { width: 32, height: 32, classRotation: '-rotate-135' },
    characterIds: ['gustave', 'verso'],
    element: 'fire',
    basePower: 3648,
    isDLCWeapon: false,
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
      name: 'Cadaveso',
      passives: [
        'Los ataques básicos aplican 2 acumulaciones de quemadura por grado.',
        '+1 PA al subir de grado.',
        'Daño de quemadura +50% por grado, hasta 300% en el grado S.'
      ]
    }
  },
  {
    id: 'cruleram',
    imgData: { width: 32, height: 32, classRotation: '-rotate-135' },
    characterIds: ['gustave', 'verso'],
    element: 'ice',
    basePower: 3454,
    isDLCWeapon: false,
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
        'No pierdes grados si recibes daño de enemigos debilitados.',
        '+1 acumulación de perfección al golpear un enemigo debilitado.',
        'Aplicas debilitamiento al contraatacar.'
      ]
    }
  },
  {
    id: 'cultam',
    imgData: { width: 32, height: 32, classRotation: '-rotate-135' },
    characterIds: ['gustave', 'verso'],
    element: 'dark',
    basePower: 3132,
    isDLCWeapon: false,
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
      name: 'Sectam',
      passives: [
        'No se pierde perfección al recibir daño, sino la recibir curación.',
        'Obtienes 2 PA al contraatacar.',
        'Obtienes 1 grado al contraatacar.'
      ]
    }
  },
  {
    id: 'danseso',
    imgData: { width: 32, height: 32, classRotation: 'rotate-45' },
    characterIds: ['gustave', 'verso'],
    element: 'fire',
    basePower: 2970,
    isDLCWeapon: false,
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
        'Los ataques básicos otorgan 1 acumulación de perfección por cada acumulación de quemadura en el objetivo.',
        'Durante fortalecimiento, probabilidad del 20% de causar quemadura al golpear.',
        '+1 PA al subir de grado.'
      ]
    }
  },
  {
    id: 'delaram',
    imgData: { width: 32, height: 32, classRotation: '-rotate-135' },
    characterIds: ['gustave', 'verso'],
    element: 'light',
    basePower: 3390,
    isDLCWeapon: false,
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
        'Empiezas el combate en grado B, pero con el 50% de la vida.',
        'Recuperas un 15% de vida al efectuar un ataque básico.',
        'Aplica fortalecimiento al llegar al grado B.'
      ]
    }
  },
  {
    id: 'demonam',
    imgData: { width: 32, height: 32, classRotation: '-rotate-135' },
    characterIds: ['gustave', 'verso'],
    element: 'light',
    basePower: 2809,
    isDLCWeapon: false,
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
        'Al usar una habilidad de luz, aumenta un 50% el daño de la siguiente habilidad física y viceversa.',
        'Daño físico con habilidades +20%.',
        'Recuperas un 3% de vida al infligir daño de luz con una habilidad.'
      ]
    }
  },
  {
    id: 'dreameso',
    imgData: { width: 32, height: 32, classRotation: '-rotate-135' },
    characterIds: ['gustave', 'verso'],
    element: 'physical',
    basePower: 3067,
    isDLCWeapon: false,
    scaling: { agility: 'S', luck: 'A' },
    en: {
      name: 'Dreameso',
      passives: ['Gain 1 Rank on Counterattack.', '50% increased Counterattack damage.', 'Gain 2 AP on Counterattack.']
    },
    es: {
      name: 'Onireso',
      passives: ['Obtienes 1 grado al contraatacar.', 'Daño de contraataque +50%.', 'Obtienes 2 PA al contraatacar.']
    }
  },
  {
    id: 'dualiso',
    imgData: { width: 32, height: 32, classRotation: '-rotate-135' },
    characterIds: ['gustave', 'verso'],
    element: 'lightning',
    basePower: 1776,
    isDLCWeapon: false,
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
        'Después de efectuar un ataque básico, actúas de nuevo.',
        'Daño de ataque básico +50%.',
        'Los ataques básicos otorgan 4 acumulaciones de perfección.'
      ]
    }
  },
  {
    id: 'gaulteram',
    imgData: { width: 28, height: 28, classRotation: 'rotate-45' },
    characterIds: ['gustave', 'verso'],
    element: 'earth',
    basePower: 3261,
    isDLCWeapon: false,
    scaling: { agility: 'S', luck: 'A' },
    en: {
      name: 'Gaulteram',
      passives: [
        'When hit, lose 1 Perfection instead of 1 rank.',
        'Apply Rush on Rank S.',
        'Gain 2 Perfection on turn start.'
      ]
    },
    es: {
      name: 'Gaulteram',
      passives: [
        'Al recibir un golpe, pierdes 1 acumulación de perfección en vez de 1 grado.',
        'Aplica prisa al llegar al grado S.',
        'Obtienes 2 acumulaciones de perfección al inicio del turno.'
      ]
    }
  },
  {
    id: 'gesam',
    imgData: { width: 28, height: 28, classRotation: 'rotate-45' },
    characterIds: ['gustave', 'verso'],
    element: 'physical',
    basePower: 3228,
    isDLCWeapon: false,
    scaling: { vitality: 'A', agility: 'S' },
    en: {
      name: 'Gesam',
      passives: [
        'Convert Light damage Skills to Physical damage.',
        '20% increased Physical damage with Skills.',
        '-1 AP cost for Physical Skills.'
      ]
    },
    es: {
      name: 'Gesam',
      passives: [
        'Conviertes el daño de luz de las habilidades en daño físico.',
        'Daño físico con habilidades +20%.',
        'Las habilidades físicas consumen 1 PA menos.'
      ]
    }
  },
  {
    id: 'glaceso',
    imgData: { width: 48, height: 48, classRotation: 'rotate-45' },
    characterIds: ['gustave', 'verso'],
    element: 'ice',
    basePower: 2873,
    isDLCWeapon: false,
    scaling: { defense: 'A', luck: 'S' },
    en: {
      name: 'Glaceso',
      passives: [
        '+1 Perfection on Critical hit.',
        'Self-Heal by 2% Health on dealing a Critical hit.',
        'Counterattacks is always a Critical hit.'
      ]
    },
    es: {
      name: 'Hieleso',
      passives: [
        '+1 acumulación de perfección al asestar un golpe crítico.',
        'Recuperas un 2% de vida al asestar un golpe crítico.',
        'Los contraataques siempre asestan golpes críticos.'
      ]
    }
  },
  {
    id: 'lanceram',
    imgData: { width: 32, height: 32, classRotation: '-rotate-135' },
    characterIds: ['gustave', 'verso'],
    element: 'physical',
    basePower: 3713,
    isDLCWeapon: false,
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
        'El grado no puede ser menor que C.',
        'Los ataques básicos otorgan 4 acumulaciones de perfección.',
        'El bloqueo otorga 2 acumuluaciones de perfección en vez de 1.'
      ]
    }
  },
  {
    id: 'liteso',
    imgData: { width: 32, height: 32, classRotation: '-rotate-135' },
    characterIds: ['gustave', 'verso'],
    element: 'physical',
    basePower: 3551,
    isDLCWeapon: false,
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
        'Los ataques básicos consumen todos los escudos para infligir un 100% de daño adicional por escudo.',
        '+1 escudo al contraatacar.',
        'Los ataques básicos otorgan 4 acumulaciones de perfección.'
      ]
    }
  },
  {
    id: 'noahram',
    imgData: { width: 32, height: 32, classRotation: '-rotate-135' },
    characterIds: ['gustave', 'verso'],
    element: 'physical',
    basePower: 2260,
    isDLCWeapon: false,
    scaling: { vitality: 'S' },
    en: { name: 'Noahram' },
    es: { name: 'Noeram' }
  },
  {
    id: 'nosaram',
    imgData: { width: 32, height: 32, classRotation: '-rotate-135' },
    characterIds: ['gustave', 'verso'],
    element: 'physical',
    basePower: 3551,
    isDLCWeapon: false,
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
        'Los disparos con apuntado libre otorgan el doble de perfección.',
        'Los disparos con apuntado libre rompen 2 escudos.',
        'Daño del apuntado libre +50%.'
      ]
    }
  },
  {
    id: 'sakaram',
    imgData: { width: 32, height: 32, classRotation: '-rotate-135' },
    characterIds: ['gustave', 'verso'],
    element: 'physical',
    basePower: 2938,
    isDLCWeapon: false,
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
        'La perfección no se pierde. El grado no aumenta el daño.',
        'Daño de ataque básico +50%.',
        'Los ataques básicos otorgan 4 acumulaciones de perfección.'
      ]
    }
  },
  {
    id: 'seeram',
    imgData: { width: 32, height: 32, classRotation: '-rotate-135' },
    characterIds: ['gustave', 'verso'],
    element: 'light',
    basePower: 3713,
    isDLCWeapon: false,
    scaling: { vitality: 'C', agility: 'B' },
    en: {
      name: 'Seeram',
      passives: [
        "+1 to all Perfection gain but can't reach Rank S.",
        'Base Attack gives 4 Perfection.',
        '20% increased Light damage with Skills.'
      ]
    },
    es: {
      name: 'Seeram',
      passives: [
        '+1 a toda obtención de perfección, pero no puedes llegar al grado S.',
        'Los ataques básicos otorgan 4 acumulaciones de perfección.',
        '+20% de daño de luz con habilidades.'
      ]
    }
  },
  {
    id: 'simoso',
    imgData: { width: 32, height: 32, classRotation: '-rotate-135' },
    characterIds: ['gustave', 'verso'],
    element: 'light',
    basePower: 3228,
    isDLCWeapon: false,
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
        'Una espada etérea inflige daño de luz al infligir cualquier daño con habilidades.',
        'Probabilidad del 20% de aplicar quemadura al infligir daño de luz.',
        'Si llegas al menos al grado A, no puedes morir.'
      ]
    }
  },
  {
    id: 'sireso',
    imgData: { width: 32, height: 32, classRotation: '-rotate-135' },
    characterIds: ['gustave', 'verso'],
    element: 'physical',
    basePower: 2583,
    isDLCWeapon: false,
    scaling: { vitality: 'A', agility: 'S' },
    en: {
      name: 'Sireso',
      passives: [
        'Bonus damage from Perfection applies to all allies at half value. Bonus damage no longer applies to Verso.',
        'Perfection gained is increased by 1 while Powerful.',
        'Support Skills cost 1 less AP.'
      ]
    },
    es: {
      name: 'Sireso',
      passives: [
        'El daño adicional de perfección se aplica a todos los aliados con la mitad del valor. El daño adicional ya no se aplica a Verso.',
        'La perfección obtenida aumenta en 1 bajo el efecto de fortalecimiento.',
        'La habilidades de apoyo consumen 1 PA menos.'
      ]
    }
  },
  {
    id: 'tireso',
    imgData: { width: 32, height: 32, classRotation: 'rotate-45' },
    characterIds: ['gustave', 'verso'],
    element: 'earth',
    basePower: 3713,
    isDLCWeapon: false,
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
        'Obtienes 1 grado al aplicar marca.',
        'Marcas a un enemigo al efectuar un ataque básico.',
        'Aplicas debilitamiento al marcar a un enemigo.'
      ]
    }
  },
  {
    id: 'verleso',
    imgData: { width: 32, height: 32, classRotation: '-rotate-135' },
    characterIds: ['gustave', 'verso'],
    element: 'physical',
    basePower: 3454,
    isDLCWeapon: false,
    scaling: { vitality: 'S' },
    en: { name: 'Verleso' },
    es: { name: 'Verleso' }
  },
  {
    id: 'esquiso',
    imgData: { width: 32, height: 32, classRotation: 'rotate-45' },
    characterIds: ['gustave', 'verso'],
    element: 'light',
    basePower: 3551,
    isDLCWeapon: true,
    scaling: { agility: 'A', luck: 'S' },
    en: {
      name: 'Esquiso',
      passives: [
        'Gain Aureole on Rank S, but drop to Rank D.',
        '30% increased damage when revived.',
        'Gradient attacks deal 100% more damage.'
      ]
    },
    es: {
      name: 'Esquiso',
      passives: [
        'Gain Aureole on Rank S, but drop to Rank D.',
        '30% increased damage when revived.',
        'Gradient attacks deal 100% more damage.'
      ]
    }
  },
  {
    id: 'sucreso',
    imgData: { width: 32, height: 32, classRotation: 'rotate-45' },
    characterIds: ['gustave', 'verso'],
    element: 'earth',
    basePower: 3713,
    isDLCWeapon: true,
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
    }
  }
];

const LUNE_WEAPONS: Weapon[] = [
  {
    id: 'angerim',
    imgData: { width: 96, height: 96, classRotation: '' },
    characterIds: ['lune'],
    element: 'fire',
    basePower: 3293,
    isDLCWeapon: false,
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
      name: 'Furim',
      passives: [
        'Los ataques básicos aplicas 2 acumulaciones de quemadura por cada borrón de fuego.',
        'Generas un borrón de fuego al inicio de cada turno.',
        'Daño de quemadura +30% por cada borrón de fuego.'
      ]
    }
  },
  {
    id: 'benisim',
    imgData: { width: 96, height: 96, classRotation: '' },
    characterIds: ['lune'],
    element: 'earth',
    basePower: 2744,
    isDLCWeapon: false,
    scaling: { vitality: 'S', defense: 'A' },
    en: {
      name: 'Benisim',
      passives: [
        'Healing Skills cost 1 less AP.',
        'Generate one Stain at the beginning of each turn.',
        'Replay instantly on consuming Stains with a Healing Skill.'
      ]
    },
    es: {
      name: 'Benisim',
      passives: [
        'Las habilidades curativas consumen 1 PA menos.',
        'Generas un borrón de tierra al inicio de cada turno.',
        'Si consumes borrones con una habilidad curativa, actúas de nuevo al instante.'
      ]
    }
  },
  {
    id: 'betelim',
    imgData: { width: 96, height: 96, classRotation: '' },
    characterIds: ['lune'],
    element: 'earth',
    basePower: 3228,
    isDLCWeapon: false,
    scaling: { vitality: 'A', agility: 'S' },
    en: {
      name: 'Betelim',
      passives: [
        'Using a Skill that consumes Stains increases damage by 20%. Can stack up to 5 times. Resets on using a Skill without consuming Stains.',
        'On turn start, if no Stains, 2 random Stains are generated.',
        '+1 AP when Stains are consumed.'
      ]
    },
    es: {
      name: 'Betelim',
      passives: [
        '+20% de daño al usar una habilidad que consume borrones. Se acumula hasta 5 veces. Se restablece al usar una habilidad sin consumir borrones.',
        'Al inicio del turno, si no tienes borrones, se generan 2 al azar.',
        '+1 PA al consumir borrones.'
      ]
    }
  },
  {
    id: 'braselim',
    imgData: { width: 96, height: 96, classRotation: '' },
    characterIds: ['lune'],
    element: 'fire',
    basePower: 3390,
    isDLCWeapon: false,
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
        'Probabilidad de crítico +30% por cada borrón de hielo.',
        '+5% de una carga de gradiente al asestar un golpe crítico.',
        'Daño de fuego con habilidades +20%.'
      ]
    }
  },
  {
    id: 'chapelim',
    imgData: { width: 96, height: 96, classRotation: '' },
    characterIds: ['lune'],
    element: 'earth',
    basePower: 3164,
    isDLCWeapon: false,
    scaling: { defense: 'A', agility: 'S' },
    en: {
      name: 'Chapelim',
      passives: [
        '30% increased Break damage per Stain.',
        'Gain 9 AP on Breaking an enemy.',
        'Generate one Stain at the beginning of each turn.'
      ]
    },
    es: {
      name: 'Chapelim',
      passives: [
        'Daño de ruptura +30% por cada borrón de tiera.',
        'Obtienes 9 PA al causarle ruptura a un enemigo.',
        'Generas un borrón de tierra al inicio de cada turno.'
      ]
    }
  },
  {
    id: 'choralim',
    imgData: { width: 96, height: 96, classRotation: '' },
    characterIds: ['lune'],
    element: 'fire',
    basePower: 3551,
    isDLCWeapon: false,
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
        'Probabilidad de crítico del 100% si hay 4 borrones activos a la vez.',
        'Daño +20% por cada turno consecutivo sin recibir daño. Se acumula hasta 5 veces.',
        'Los golpes críticos aplican quemadura.'
      ]
    }
  },
  {
    id: 'colim',
    imgData: { width: 96, height: 96, classRotation: '' },
    characterIds: ['lune'],
    element: 'light',
    basePower: 2583,
    isDLCWeapon: false,
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
        'Probabilidad del 50% de generar un borrón de luz al consumir borrones.',
        '+1 PA al consumir un borrón de luz.',
        'Daño de habilidades +20% por cada borrón de luz activo.'
      ]
    }
  },
  {
    id: 'coralim',
    imgData: { width: 96, height: 96, classRotation: '' },
    characterIds: ['lune'],
    element: 'ice',
    basePower: 2744,
    isDLCWeapon: false,
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
        'Las habilidades de hielo consumen 1 PA menos.',
        'Daño de hielo con habilidades +20%.',
        'Empiezas el combate con un borrón de tierra.'
      ]
    }
  },
  {
    id: 'deminerim',
    imgData: { width: 96, height: 96, classRotation: '' },
    characterIds: ['lune'],
    element: 'lightning',
    basePower: 2744,
    isDLCWeapon: false,
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
        'Las habilidades de rayo consumen 1 PA menos.',
        'Daño de rayo con habilidades +20%.',
        'Empiezas el combate con un borrón de fuego.'
      ]
    }
  },
  {
    id: 'elerim',
    imgData: { width: 96, height: 96, classRotation: '' },
    characterIds: ['lune'],
    element: 'earth',
    basePower: 3551,
    isDLCWeapon: false,
    scaling: { vitality: 'S', defense: 'A' },
    en: {
      name: 'Elerim',
      passives: [
        'Consuming an Stain applies 1 Shield to self.',
        '20% increased damage with Skills.',
        'Base Attack generates an Stain.'
      ]
    },
    es: {
      name: 'Elerim',
      passives: [
        'Te aplicas 1 escudo al consumir un borrón de tierra.',
        'Daño de tierra con habilidades +20%.',
        'Los ataques básicos generan un borrón de tierra.'
      ]
    }
  },
  {
    id: 'kralim',
    imgData: { width: 96, height: 96, classRotation: '' },
    characterIds: ['lune'],
    element: 'lightning',
    basePower: 3390,
    isDLCWeapon: false,
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
        'Al lanzar una habilidad, +20% de daño de habilidad de todos los demás elementos. Se restablece al lanzar una habilidad de un elemento anterior.',
        'Al inicio del turno, si no tienes borrones, se generan 2 al azar.',
        '+1 PA al consumir borrones.'
      ]
    }
  },
  {
    id: 'lighterim',
    imgData: { width: 96, height: 96, classRotation: '' },
    characterIds: ['lune'],
    element: 'fire',
    basePower: 2744,
    isDLCWeapon: false,
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
      name: 'Lucerim',
      passives: [
        'Las habilidades de fuego consumen 1 PA menos.',
        'Daño de fuego con habilidades +20%.',
        'Empiezas el combate con un borrón de hielo.'
      ]
    }
  },
  {
    id: 'lithelim',
    imgData: { width: 96, height: 96, classRotation: '' },
    characterIds: ['lune'],
    element: 'void',
    basePower: 3099,
    isDLCWeapon: false,
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
        'Probabilidad del 50% de generar un borrón de luz u oscuridad al consumir borrones. Daño con habilidades +50% por cada borrón de oscuridad activo.',
        '+1 PA al consumir un borrón de luz.',
        'Los ataques básicos pueden consumir un borrón de oscuridad para infligir un 200% más de daño.'
      ]
    }
  },
  {
    id: 'lunerim',
    imgData: { width: 96, height: 96, classRotation: '' },
    characterIds: ['lune'],
    element: 'fire',
    basePower: 2421,
    isDLCWeapon: false,
    scaling: { vitality: 'A', luck: 'S' },
    en: { name: 'Lunerim' },
    es: { name: 'Lunerim' }
  },
  {
    id: 'painerim',
    imgData: { width: 96, height: 96, classRotation: '' },
    characterIds: ['lune'],
    element: 'earth',
    basePower: 2744,
    isDLCWeapon: false,
    scaling: { vitality: 'A', luck: 'S' },
    en: {
      name: 'Painerim',
      passives: [
        'Earth Skills cost 1 less AP.',
        '20% increased damage with Skills.',
        'Start battle with 1 Lightning Stain.'
      ]
    },
    es: {
      name: 'Dolorim',
      passives: [
        'Las habilidades de tierra consumen 1 PA menos.',
        'Daño de tierra con habilidades +20%.',
        'Empiezas el combate con un borrón de rayo.'
      ]
    }
  },
  {
    id: 'potierim',
    imgData: { width: 96, height: 96, classRotation: '' },
    characterIds: ['lune'],
    element: 'ice',
    basePower: 2906,
    isDLCWeapon: false,
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
        'Las habilidades curativas generan un borrón de luz adicional.',
        'Aplica lentitud a un enemigo al azar al consumir un borrón de luz.',
        'Los ataques básicos generan un borrón de luz.'
      ]
    }
  },
  {
    id: 'redalim',
    imgData: { width: 96, height: 96, classRotation: '' },
    characterIds: ['lune'],
    element: 'ice',
    basePower: 2583,
    isDLCWeapon: false,
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
        'Las habilidades curativas generan un borrón de luz adicional.',
        'Generas un borrón de hielo al inicio de cada turno.',
        'Si consumes borrones con una habildiad curativa, actúas de nuevo al instante.'
      ]
    }
  },
  {
    id: 'saperim',
    imgData: { width: 96, height: 96, classRotation: '' },
    characterIds: ['lune'],
    element: 'lightning',
    basePower: 3067,
    isDLCWeapon: false,
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
      name: 'Retoñim',
      passives: [
        'Al usar un ataque de gradiente, generas un borrón de luz adicional.',
        'Cuando se genera un borrón de fuego, se genera también uno de rayo. Una vez por turno.',
        'Daño de ataques de gradiente y contraataques de gradiente +50%.'
      ]
    }
  },
  {
    id: 'scaverim',
    imgData: { width: 96, height: 96, classRotation: '' },
    characterIds: ['lune'],
    element: 'dark',
    basePower: 4197,
    isDLCWeapon: false,
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
      name: 'Carroñim',
      passives: [
        'Probabilidad del 50% de generar un borrón de oscuridad al consumir borrones.\nDaño con habilidades +50% por cada borrón de oscuridad activo.',
        'Los ataques básicos pueden consumir un borrón de oscuridad para infligir un 200% más de daño.',
        'Con 4 borrones de oscuridad activos, cualquier habilidad puede consumirlos para infligir un 300% más de daño.'
      ]
    }
  },
  {
    id: 'snowim',
    imgData: { width: 96, height: 96, classRotation: '' },
    characterIds: ['lune'],
    element: 'ice',
    basePower: 3874,
    isDLCWeapon: false,
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
      name: 'Nievim',
      passives: [
        'Sufres congelación si tu vida cae por debajo del 30%.\nDurante congelación, se anulará la siguiente instancia de daño.',
        'Al inicio del turno, si sufres congelación, esta se anula y recuperas un 60% de vida.',
        'Si sufres congelación, reciben 2 borrones de hielo y 3 PA.'
      ]
    }
  },
  {
    id: 'trebuchim',
    imgData: { width: 96, height: 96, classRotation: '' },
    characterIds: ['lune'],
    element: 'lightning',
    basePower: 3067,
    isDLCWeapon: false,
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
      name: 'Trabuchim',
      passives: [
        'Generas un borrón al azar al disparar con apuntado libre.',
        '+1 PA al consumir borrones.',
        'Los ataques básicos generan 2 borrones al azar.'
      ]
    }
  },
  {
    id: 'troubadim',
    imgData: { width: 96, height: 96, classRotation: '' },
    characterIds: ['lune'],
    element: 'physical',
    basePower: 3067,
    isDLCWeapon: false,
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
      name: 'Trovadim',
      passives: [
        'Los disparos con apuntado libre dañan a otro objetivo al azar.',
        'Daño del apuntado libre +50%.',
        'Generas un borrón al azar al disparar con apuntado libre.'
      ]
    }
  },
  {
    id: 'bonbim',
    imgData: { width: 96, height: 96, classRotation: '' },
    characterIds: ['lune'],
    element: 'lightning',
    basePower: 3810,
    isDLCWeapon: true,
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
    }
  },
  {
    id: 'cleim',
    imgData: { width: 96, height: 96, classRotation: '' },
    characterIds: ['lune'],
    element: 'light',
    basePower: 3551,
    isDLCWeapon: true,
    scaling: { agility: 'A', luck: 'S' },
    en: {
      name: 'Cleim',
      passives: [
        "Damage can't be reduced, blocked, or absorbed by Elemental Affinities.",
        'An ethereal Sword deals Light damage on any damage dealt with Skills.',
        'Starting a turn with 1, 1 Fire, 1 Ice, and 1 Lightning Stain doubles damage dealt this turn'
      ]
    },
    es: {
      name: 'Cleim',
      passives: [
        "Damage can't be reduced, blocked, or absorbed by Elemental Affinities.",
        'An ethereal Sword deals Light damage on any damage dealt with Skills.',
        'Starting a turn with 1, 1 Fire, 1 Ice, and 1 Lightning Stain doubles damage dealt this turn'
      ]
    }
  },
  {
    id: 'esquim',
    imgData: { width: 96, height: 96, classRotation: '' },
    characterIds: ['lune'],
    element: 'dark',
    basePower: 3616,
    isDLCWeapon: true,
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
    }
  }
];

const MAELLE_WEAPONS: Weapon[] = [
  {
    id: 'barrier-breaker',
    imgData: { width: 32, height: 32, classRotation: '-rotate-135' },
    characterIds: ['maelle'],
    element: 'void',
    basePower: 3616,
    isDLCWeapon: false,
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
      name: 'Rompebarreras',
      passives: [
        'Al golpear enemigos, robas los escudos eliminados.',
        'Cambias a postura virtuosa al romper cualquier escudo.',
        'Si golpeas a un enemigo marcado, rompes todos sus escudos.'
      ]
    }
  },
  {
    id: 'battlum',
    imgData: { width: 32, height: 32, classRotation: '-rotate-135' },
    characterIds: ['maelle'],
    element: 'physical',
    basePower: 3067,
    isDLCWeapon: false,
    scaling: { defense: 'S', luck: 'A' },
    en: {
      name: 'Battlum',
      passives: [
        'Double Gradient generation while in Defensive Stance.',
        'If Stanceless, Base Attack switches to Defensive Stance.',
        '+5% of a Gradient Charge on Parry.'
      ]
    },
    es: {
      name: 'Batallum',
      passives: [
        'En postura defensiva, la generación de gradiente se duplica.',
        'Si no tienes ninguna postura, pasas a postura defensiva al efectuar un ataque básico.',
        '+5% de una carga de gradiente al bloquear.'
      ]
    }
  },
  {
    id: 'brulerum',
    imgData: { width: 32, height: 32, classRotation: '-rotate-135' },
    characterIds: ['maelle'],
    element: 'fire',
    basePower: 2744,
    isDLCWeapon: false,
    scaling: { agility: 'A', luck: 'S' },
    en: {
      name: 'Brulerum',
      passives: ['Critical hits apply Burn.', 'Base Attack applies 2 Burn.', '100% Critical Chance while Stanceless.']
    },
    es: {
      name: 'Brulerum',
      passives: [
        'Los golpes críticos aplican quemadura.',
        'Los ataques básicos aplicas 2 acumulaciones de quemadura.',
        'Probabilidad de crítico del 100% si no tienes ninguna postura.'
      ]
    }
  },
  {
    id: 'chalium',
    imgData: { width: 32, height: 32, classRotation: '-rotate-135' },
    characterIds: ['maelle'],
    element: 'light',
    basePower: 3422,
    isDLCWeapon: false,
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
        'En postura defensiva, obtienes 1 escudo por bloqueo.\nAl inicio del turno, pierdes todos los escudos.',
        '+20% de daño de luz con habilidades.',
        'Daño de contraataque +50% por cada escudo.'
      ]
    }
  },
  {
    id: 'chantenum',
    imgData: { width: 32, height: 32, classRotation: '-rotate-135' },
    characterIds: ['maelle'],
    element: 'fire',
    basePower: 2841,
    isDLCWeapon: false,
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
      name: 'Canticum',
      passives: [
        'Al inicio del turno, si no tienes ninguna postura, cambias a postura ofensiva.',
        'Las habilidades de fuego consumen 1 PA menos.',
        '+1 escudo al pasar a postura ofensiva.'
      ]
    }
  },
  {
    id: 'clierum',
    imgData: { width: 32, height: 32, classRotation: '-rotate-135' },
    characterIds: ['maelle'],
    element: 'lightning',
    basePower: 3196,
    isDLCWeapon: false,
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
        'Los golpes críticos con habilidades otorgan 2 PA. Una vez por turno.',
        'Daño de rayo con habilidades +20%.',
        'Probabilidad de crítico +50% en postura ofensiva.'
      ]
    }
  },
  {
    id: 'coldum',
    imgData: { width: 32, height: 32, classRotation: 'rotate-45' },
    characterIds: ['maelle'],
    element: 'ice',
    basePower: 2583,
    isDLCWeapon: false,
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
      name: 'Frium',
      passives: [
        'Recuperas un 2% de vida al asestar un golpe crítico.',
        'Probabilidad de crítico +50% en postura defensiva.',
        'Si no tienes ninguna postura, pasas a postura defensiva al efectuar un ataque básico.'
      ]
    }
  },
  {
    id: 'duenum',
    imgData: { width: 32, height: 32, classRotation: '-rotate-135' },
    characterIds: ['maelle'],
    element: 'physical',
    basePower: 2421,
    isDLCWeapon: false,
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
        'En postura defensiva, si obtienes PA, los aliados también obtienen 1 PA.',
        'Si no tienes niguna postura, pasas a postura defensiva al efectuar un ataque básico.',
        '+1 PA al cambiar de postura.'
      ]
    }
  },
  {
    id: 'facesum',
    imgData: { width: 32, height: 32, classRotation: '-rotate-135' },
    characterIds: ['maelle'],
    element: 'physical',
    basePower: 3519,
    isDLCWeapon: false,
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
      name: 'Rostrum',
      passives: [
        'En postura ofensiva, aplicas el doble de acumulaciones de quemadura.',
        'Daño de quemadura +50%.',
        'El ataque básico propaga quemadura.'
      ]
    }
  },
  {
    id: 'glaisum',
    imgData: { width: 32, height: 32, classRotation: 'rotate-45' },
    characterIds: ['maelle'],
    element: 'physical',
    basePower: 3713,
    isDLCWeapon: false,
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
        'Al pasar a postura virtuosa, los aliados recuperan un 20% de vida.',
        'Obtienes coraza al salir de postura virtuosa.',
        'Disipas tus alteraciones de estado al pasar a postura virtuosa.'
      ]
    }
  },
  {
    id: 'jarum',
    imgData: { width: 32, height: 32, classRotation: 'rotate-45' },
    characterIds: ['maelle'],
    element: 'physical',
    basePower: 2583,
    isDLCWeapon: false,
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
      name: 'Jarrum',
      passives: [
        'Cambias a postura virtuosa al contraatacar.',
        'Al contraatacar, aplicas 5 acumulaciones de quemadura.',
        'Daño de contraataque +50% por cada escudo.'
      ]
    }
  },
  {
    id: 'lithum',
    imgData: { width: 32, height: 32, classRotation: '-rotate-135' },
    characterIds: ['maelle'],
    element: 'void',
    basePower: 3228,
    isDLCWeapon: false,
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
        'En postura virtuosa, golpear a un enemigo marcado no elimina la marca.',
        'Cambias a postura virtuosa al contraatacar.',
        'Obtienes coraza al salir de postura virtuosa.'
      ]
    }
  },
  {
    id: 'maellum',
    imgData: { width: 32, height: 32, classRotation: '-rotate-135' },
    characterIds: ['maelle'],
    element: 'physical',
    basePower: 3228,
    isDLCWeapon: false,
    scaling: { vitality: 'S' },
    en: { name: 'Maellum' },
    es: { name: 'Maellum' }
  },
  {
    id: 'medalum',
    imgData: { width: 32, height: 32, classRotation: '-rotate-135' },
    characterIds: ['maelle'],
    element: 'physical',
    basePower: 2906,
    isDLCWeapon: false,
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
        'Empiezas es postura virtuosa.',
        'En postura virtuosa, cada acumulación de quemadura se duplica.',
        'En postura virtuosa, el daño de quemadura se duplica.'
      ]
    }
  },
  {
    id: 'melarum',
    imgData: { width: 32, height: 32, classRotation: 'rotate-45' },
    characterIds: ['maelle'],
    element: 'physical',
    basePower: 3584,
    isDLCWeapon: false,
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
        'Al pasar a postura virtuosa, los aliados recuperan un 20% de vida.',
        'Si la vida está sobre el 80%, aplicas coraza.',
        'Si la vida cae por debajo del 50%, cambias a postura virtuosa.'
      ]
    }
  },
  {
    id: 'plenum',
    imgData: { width: 32, height: 32, classRotation: 'rotate-45' },
    characterIds: ['maelle'],
    element: 'ice',
    basePower: 3035,
    isDLCWeapon: false,
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
        'Al inicio del turno, si no tienes ninguna postura, cambias a postura defensiva.',
        'En postura defensiva, el daño de ruptura se duplica.',
        'Las habilidades de apoyo consumen 1 PA menos.'
      ]
    }
  },
  {
    id: 'seashelum',
    imgData: { width: 32, height: 32, classRotation: '-rotate-135' },
    characterIds: ['maelle'],
    element: 'fire',
    basePower: 3003,
    isDLCWeapon: false,
    scaling: { defense: 'A', agility: 'S' },
    en: {
      name: 'Seashelum',
      passives: [
        '+1 Shield on switching to Offensive Stance.',
        'If Stanceless, Base Attack switches to Offensive Stance.',
        '+50% Critical Chance while in Offensive Stance.'
      ]
    },
    es: {
      name: 'Caracolarum',
      passives: [
        '+1 escudo al pasar a postura ofensiva.',
        'Si no tienes ninguna postura, pasas a postura ofensiva al efectuar un ataque básico.',
        'Probabilidad de crítico +50% en postura ofensiva.'
      ]
    }
  },
  {
    id: 'sekarum',
    imgData: { width: 32, height: 32, classRotation: '-rotate-135' },
    characterIds: ['maelle'],
    element: 'physical',
    basePower: 3390,
    isDLCWeapon: false,
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
        'Cambias a postura virtuosa al romper cualquier escudo.',
        'Los disparos con apuntado libre rompen 2 escudos.',
        'En postura virtuosa, todo el daño perfora los escudos.'
      ]
    }
  },
  {
    id: 'stalum',
    imgData: { width: 32, height: 32, classRotation: '-rotate-135' },
    characterIds: ['maelle'],
    element: 'fire',
    basePower: 3228,
    isDLCWeapon: false,
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
        'Recibes quemadura al inicio del turno.\nDaño +10% por cada acumulación propia de quemadura.',
        'Los ataques básicos aplican 2 acumulaciones de quemadura.',
        'En postura defensiva, el daño de quemadura te cura.'
      ]
    }
  },
  {
    id: 'tissenum',
    imgData: { width: 32, height: 32, classRotation: '-rotate-135' },
    characterIds: ['maelle'],
    element: 'earth',
    basePower: 3874,
    isDLCWeapon: false,
    scaling: { vitality: 'A', agility: 'S' },
    en: {
      name: 'Tissenum',
      passives: [
        'In Defensive Stance, double Break damage.',
        'Gain 9 AP on Breaking an enemy.',
        'Breaking an enemy deals 3 high amount of damage.'
      ]
    },
    es: {
      name: 'Tissenum',
      passives: [
        'En postura defensiva, el daño de ruptura se duplica.',
        'Obtienes 9 PA al causarle ruptura a un enemigo.',
        'Al causar ruptura a un enemigo, le infliges mucho daño de tierra.'
      ]
    }
  },
  {
    id: 'veremum',
    imgData: { width: 32, height: 32, classRotation: '-rotate-135' },
    characterIds: ['maelle'],
    element: 'physical',
    basePower: 3293,
    isDLCWeapon: false,
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
        'Si no tienes ninguna postura, pasas a postura ofensiva al efectuar un ataque básico.',
        'Los contraataques aplican fragilidad.',
        'Probabilidad de crítico +50% en postura ofensiva.'
      ]
    }
  },
  {
    id: 'volesterum',
    imgData: { width: 32, height: 32, classRotation: '-rotate-135' },
    characterIds: ['maelle'],
    element: 'physical',
    basePower: 3293,
    isDLCWeapon: false,
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
        '+1 PA al cambiar de postura.',
        'Si no tienes ninguna postura, pasas a postura defensiva al efectuar un ataque básico.',
        'Recuperas un 5% de vida al cambiar de postura.'
      ]
    }
  },
  {
    id: 'yeverum',
    imgData: { width: 32, height: 32, classRotation: '-rotate-135' },
    characterIds: ['maelle'],
    element: 'physical',
    basePower: 3358,
    isDLCWeapon: false,
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
        'Al aplicar coraza, también aplicas 1 escudo.',
        'Al aplicar escudos, otorgas 1 PA.',
        'Al pasar a postura virtuosa, duplicas todos los escudos de los aliados.'
      ]
    }
  },
  {
    id: 'esqium',
    imgData: { width: 32, height: 32, classRotation: 'rotate-45' },
    characterIds: ['maelle'],
    element: 'fire',
    basePower: 3680,
    isDLCWeapon: false,
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
    }
  },
  {
    id: 'licorum',
    imgData: { width: 32, height: 32, classRotation: 'rotate-45' },
    characterIds: ['maelle'],
    element: 'physical',
    basePower: 3551,
    isDLCWeapon: false,
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
    }
  }
];

const SCIEL_WEAPONS: Weapon[] = [
  {
    id: 'algueron',
    imgData: { width: 120, height: 120, classRotation: '-rotate-135' },
    characterIds: ['sciel'],
    element: 'ice',
    basePower: 3228,
    isDLCWeapon: false,
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
      name: 'Algaron',
      passives: [
        'Los disparos con apuntado libre pueden consumir 1 acumulación de augurio para infligir un 100% más de daño.',
        'Los ataques básicos aplicas 3 acumulación de augurio.',
        'Durante Crepúsculo, los disparos con apuntado libre infligen daño doble.'
      ]
    }
  },
  {
    id: 'blizzon',
    imgData: { width: 56, height: 56, classRotation: '-rotate-135' },
    characterIds: ['sciel'],
    element: 'ice',
    basePower: 4197,
    isDLCWeapon: false,
    scaling: { defense: 'A', luck: 'S' },
    en: {
      name: 'Blizzon',
      passives: [
        'While having at least 1 active Moon charge, Moon Skills are always Critical but damage taken is doubled.',
        '25% increased damage per Moon charge.',
        'Base Attack gives 1 Moon charge.'
      ]
    },
    es: {
      name: 'Tempeson',
      passives: [
        'Si tienes al menos 1 carga de Luna activa, las habilidades de Luna siempre asestan golpes críticos, pero el daño recibido se duplica.',
        'Daño +25% por cada carga de Luna.',
        'Los ataques básicos otorgan 1 carga de Luna.'
      ]
    }
  },
  {
    id: 'bourgelon',
    imgData: { width: 120, height: 120, classRotation: '-rotate-135' },
    characterIds: ['sciel'],
    element: 'light',
    basePower: 3099,
    isDLCWeapon: false,
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
        'Al consumir augurio, aplica al objetivo 2 acumulaciones de quemadura por carga de Sol.',
        'Daño de quemadura +100% en estado de Crepúsculo.',
        'Las habilidades de Sol otorgan una carga más.'
      ]
    }
  },
  {
    id: 'charnon',
    imgData: { width: 100, height: 100, classRotation: '-rotate-135' },
    characterIds: ['sciel'],
    element: 'void',
    basePower: 2970,
    isDLCWeapon: false,
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
        'Probabilidad de crítico del 100% durante Crepúsculo.',
        'Al asestar un golpe crítico, aplicas 1 acumulación de augurio.',
        'Daño +20% por cada turno consecutivo sin recibir daño. Se acumula hasta 5 veces.'
      ]
    }
  },
  {
    id: 'chation',
    imgData: { width: 108, height: 108, classRotation: '-rotate-135' },
    characterIds: ['sciel'],
    element: 'dark',
    basePower: 3551,
    isDLCWeapon: false,
    scaling: { vitality: 'A', luck: 'S' },
    en: {
      name: 'Chation',
      passives: [
        'Sun Skills always apply 10 Foretell, but all damage taken is doubled.',
        'Base Attack gives 1 Moon charge and consumes all Foretell to apply Burn.',
        '100% increased Burn damage in Twilight state.'
      ]
    },
    es: {
      name: 'Chation',
      passives: [
        'Las habilidades de Sol siempre aplicas 10 acumulaciones de augurio, pero el daño recibido se duplica.',
        'Los ataques básicos otorgan 1 carga de Luna y consumen todo el augurio para aplicar quemadura.',
        'Daño de quemadura +100% en estado de Crepúsculo.'
      ]
    }
  },
  {
    id: 'corderon',
    imgData: { width: 44, height: 44, classRotation: '-rotate-135' },
    characterIds: ['sciel'],
    element: 'dark',
    basePower: 2744,
    isDLCWeapon: false,
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
        'Te maldices al inicio del combate.\nDaño +50% durante el efecto de la maldición.',
        'Al entrar en estado de Crepúsculo, se restablece la duración de la maldición.',
        'Al entrar en estado de Crepúsculo, vuelves a actuar.'
      ]
    }
  },
  {
    id: 'direton',
    imgData: { width: 120, height: 120, classRotation: '-rotate-135' },
    characterIds: ['sciel'],
    element: 'earth',
    basePower: 4035,
    isDLCWeapon: false,
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
        '+1 PA por carga de Luna al inicio del turno.',
        'Los ataques básicos otorgan 1 carga de Luna.',
        'Durante Crepúsculo, el ataque básico consume todos los PA.\nEl ataque básico aplica 1 acumulación de augurio e inflige un 50% más de daño por PA consumido.'
      ]
    }
  },
  {
    id: 'garganon',
    imgData: { width: 44, height: 44, classRotation: '-rotate-135' },
    characterIds: ['sciel'],
    element: 'fire',
    basePower: 3132,
    isDLCWeapon: false,
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
        'Si tienes al menos 1 carga de Sol activa, aplicas 1 acumulación de quemadura por golpe recibido.',
        'Los contraataques aplican 1 acumulación de quemadura por carga de Sol activa.',
        'El ataque básico puede consumir 1 carga de Sol para aplicar 5 acumulaciones de augurio.'
      ]
    }
  },
  {
    id: 'gobluson',
    imgData: { width: 72, height: 72, classRotation: '-rotate-135' },
    characterIds: ['sciel'],
    element: 'fire',
    basePower: 3358,
    isDLCWeapon: false,
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
        'Durante Crepúsculo, cada vez que se aplica augurio, también afecta a otro enemigo al azar.',
        'Aplicas 1 acumulación de quemadura por cada 3 acumulaciones de augurio aplicadas con habilidades.',
        'Daño de fuego con habilidades +20%.'
      ]
    }
  },
  {
    id: 'guleson',
    imgData: { width: 40, height: 40, classRotation: '-rotate-135' },
    characterIds: ['sciel'],
    element: 'lightning',
    basePower: 3132,
    isDLCWeapon: false,
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
        'Al inicio de Crepúsculo, aplica marca a todos los enemigos.',
        'Si golpeas a un enemigo marcado durante crepúsculo, la marca no se elimina.',
        'Aplica 3 acumulaciones de augurio al aplicar marca.'
      ]
    }
  },
  {
    id: 'hevasson',
    imgData: { width: 104, height: 104, classRotation: '-rotate-135' },
    characterIds: ['sciel'],
    element: 'physical',
    basePower: 3454,
    isDLCWeapon: false,
    scaling: { vitality: 'S', defense: 'A' },
    en: {
      name: 'Hevasson',
      passives: [
        'Free Aim shots can consume a Sun charge to apply 5 Foretell and consume a Moon charge to deal 400% more damage.',
        'Consuming a Sun or Moon charge gives 1 AP.',
        'Base Attack gives 1 Moon charge.'
      ]
    },
    es: {
      name: 'Hevasson',
      passives: [
        'Los disparos con apuntado libre pueden consumir una carga de Sol para aplicar 5 acumulaciones de augurio y consumir una carga de Luna para infligir un 400% más de daño.',
        'Otorga 1 PA al consumir una carga de Sol o de Luna.',
        'Los ataques básicos otorgan 1 carga de Luna.'
      ]
    }
  },
  {
    id: 'litheson',
    imgData: { width: 120, height: 120, classRotation: '-rotate-135' },
    characterIds: ['sciel'],
    element: 'physical',
    basePower: 2809,
    isDLCWeapon: false,
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
        'Durante Luna, todos los aliados obtienen prisa mayor.\nDurante Sol, todos los enemigos obtienen lentitud mayor.',
        'Durante Crepúsculo, todos los aliados obtienen prisa mayor y todos los enemigos obtienen lentitud mayor.',
        '+3 PA al aplicar un potenciador o un atenuador. Una vez por turno.'
      ]
    }
  },
  {
    id: 'lusteson',
    imgData: { width: 76, height: 76, classRotation: '-rotate-135' },
    characterIds: ['sciel'],
    element: 'dark',
    basePower: 3422,
    isDLCWeapon: false,
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
        'Tras matar a un enemigo con augurio, se aplica su augurio a otro enemigo al azar.',
        'Al consumir augurio, aplicas marca.',
        'Daño de oscuridad con habilidades +20%.'
      ]
    }
  },
  {
    id: 'martenon',
    imgData: { width: 120, height: 120, classRotation: '-rotate-135' },
    characterIds: ['sciel'],
    element: 'earth',
    basePower: 3874,
    isDLCWeapon: false,
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
        'Al inicio de Crepúsculo, daña a todos los enemigos en función de la cantidad de cargas.',
        'Al inicio de Crepúsculo, aplicas 2 acumulaciones de augurio por carga a todos los enemigos.',
        'La generación de cargas de Sol y Luna se duplica.'
      ]
    }
  },
  {
    id: 'minason',
    imgData: { width: 76, height: 76, classRotation: '-rotate-135' },
    characterIds: ['sciel'],
    element: 'physical',
    basePower: 2809,
    isDLCWeapon: false,
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
        'Aumentas el daño de las habilidades de Sol por cada acumulación de augurio en el objetivo.\nLas habilidades de Luna ya no generan cargas de Luna.',
        'Si tienes al menos una carga de Sol activa, obtienes 1 PA adicional por acumulación de augurio consumida.',
        'El ataque básico puede consumir 1 carga de Sol para aplicar 5 acumulaciones de augurio.'
      ]
    }
  },
  {
    id: 'moisson',
    imgData: { width: 96, height: 96, classRotation: '-rotate-135' },
    characterIds: ['sciel'],
    element: 'physical',
    basePower: 3325,
    isDLCWeapon: false,
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
        'Durante Crepúsculo, todo el daño infligido se convierte en daño de oscuridad.',
        'Daño de oscuridad con habilidades +20%.',
        'Aplica coraza durante Luna, fortalecimiento durante Sol y prisa durante Crepúsculo.'
      ]
    }
  },
  {
    id: 'ramasson',
    imgData: { width: 96, height: 96, classRotation: '-rotate-135' },
    characterIds: ['sciel'],
    element: 'physical',
    basePower: 3519,
    isDLCWeapon: false,
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
        'Al inicio del turno, se puede consumir 1 carga de Luna para recuperar un 20% de la vida de cada aliado.',
        'Los ataques básicos otorgan 1 carga de Luna.',
        'Las habilidades de Luna otorgan una carga más.'
      ]
    }
  },
  {
    id: 'rangeson',
    imgData: { width: 8, height: 8, classRotation: '-rotate-135' },
    characterIds: ['sciel'],
    element: 'dark',
    basePower: 3132,
    isDLCWeapon: false,
    scaling: { defense: 'A', agility: 'S' },
    en: {
      name: 'Rangeson',
      passives: [
        'Recover 5% Health per Foretell applied.',
        'Healing Skills cost 1 less AP.',
        '30% increased Heal efficiency per Moon charge. Base Attack gives 1 Moon charge.'
      ]
    },
    es: {
      name: 'Montarson',
      passives: [
        'Recuperas un 5% de la vida por cada augurio aplicado.',
        'Las habilidades curativas consumen 1 PA menos.',
        '+30% de eficiencia curativa por carga de Luna.\nLos ataques básicos otorgan 1 carga de Luna.'
      ]
    }
  },
  {
    id: 'sadon',
    imgData: { width: 108, height: 108, classRotation: '-rotate-135' },
    characterIds: ['sciel'],
    element: 'light',
    basePower: 2583,
    isDLCWeapon: false,
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
      name: 'Pesaron',
      passives: [
        'Al inicio del turno, obtienes 1 escudo si hay al menos 1 carga de Sol activa.',
        'Aplicas 5 acumulaciones de augurio a los enemigos que rompen escudos.',
        '+2 cargas de Sol al contraatacar.'
      ]
    }
  },
  {
    id: 'scieleson',
    imgData: { width: 96, height: 96, classRotation: '-rotate-135' },
    characterIds: ['sciel'],
    element: 'physical',
    basePower: 3454,
    isDLCWeapon: false,
    scaling: { agility: 'S', luck: 'A' },
    en: { name: 'Scieleson' },
    es: { name: 'Scieleson' }
  },
  {
    id: 'tisseron',
    imgData: { width: 96, height: 96, classRotation: '-rotate-135' },
    characterIds: ['sciel'],
    element: 'lightning',
    basePower: 3067,
    isDLCWeapon: false,
    scaling: { defense: 'A', agility: 'S' },
    en: {
      name: 'Tisseron',
      passives: [
        'Extend Twilight by one turn on using a Moon Skill. +50% Twilight damage increase on using a Sun Skill.',
        'Twilight duration is increased by 1.',
        'Play again when entering Twilight state.'
      ]
    },
    es: {
      name: 'Tisseron',
      passives: [
        'Al usar una habilidad de Luna, Crepúsculo se extiene un turno. Daño de Crepúsculo +50% al usar una habilidad de Sol.',
        'Duración de Crepúsculo +1 turno.',
        'Al entrar en estado de Crepúsculo, vuelves a actuar.'
      ]
    }
  },
  {
    id: 'duollison',
    imgData: { width: 96, height: 96, classRotation: '-rotate-135' },
    characterIds: ['sciel'],
    element: 'physical',
    basePower: 3680,
    isDLCWeapon: true,
    scaling: { agility: 'S', luck: 'A' },
    en: {
      name: 'Duollison',
      passives: [
        'Each successive base attack hit on the same turn deals 100% more damage.',
        'Free Aim shots apply 1 Foretell.\nBase attack consumes all Foretell to deal 50% more damage per Foretell consumed.',
        'During Twilight, any Foretell consumed is not removed.'
      ]
    },
    es: {
      name: 'Duollison',
      passives: [
        'Each successive base attack hit on the same turn deals 100% more damage.',
        'Free Aim shots apply 1 Foretell.\nBase attack consumes all Foretell to deal 50% more damage per Foretell consumed.',
        'During Twilight, any Foretell consumed is not removed.'
      ]
    }
  },
  {
    id: 'esquion',
    imgData: { width: 96, height: 96, classRotation: '-rotate-135' },
    characterIds: ['sciel'],
    element: 'physical',
    basePower: 3842,
    isDLCWeapon: true,
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
    }
  },
  {
    id: 'sucetton',
    imgData: { width: 96, height: 96, classRotation: '-rotate-135' },
    characterIds: ['sciel'],
    element: 'fire',
    basePower: 3842,
    isDLCWeapon: true,
    scaling: { agility: 'B', luck: 'A' },
    en: {
      name: 'Sucetton',
      passives: [
        'Every fourth hit with a Skill generates 1 Sun charge and applies 5 Foretell.',
        '+20% increased damage per Sun charge.',
        'Sun Skills cost 1 less AP.'
      ]
    },
    es: {
      name: 'Sucetton',
      passives: [
        'Every fourth hit with a Skill generates 1 Sun charge and applies 5 Foretell.',
        '+20% increased damage per Sun charge.',
        'Sun Skills cost 1 less AP.'
      ]
    }
  }
];

const MONOCO_WEAPONS: Weapon[] = [
  {
    id: 'ballaro',
    imgData: { width: 54, height: 54, classRotation: 'rotate-45' },
    characterIds: ['monoco'],
    element: 'light',
    basePower: 3067,
    isDLCWeapon: false,
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
      name: 'Bailaro',
      passives: [
        'Invierte el orden de la rueda bestial.',
        'Tras usar una habilidad mejorada, los aliados reciben 1 PA.',
        'Máscara omnipotente otorga 2 PA a todos los aliados.'
      ]
    }
  },
  {
    id: 'boucharo',
    imgData: { width: 54, height: 54, classRotation: 'rotate-45' },
    characterIds: ['monoco'],
    element: 'fire',
    basePower: 3228,
    isDLCWeapon: false,
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
        'Inicias el combate con Máscara ágil.',
        'Máscara ágil aplica prisa durante 3 turnos.',
        'Porbabilidad de crítico +50% al usar Máscara ágil.'
      ]
    }
  },
  {
    id: 'brumaro',
    imgData: { width: 54, height: 54, classRotation: 'rotate-45' },
    characterIds: ['monoco'],
    element: 'physical',
    basePower: 3390,
    isDLCWeapon: false,
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
    }
  },
  {
    id: 'chromaro',
    imgData: { width: 54, height: 54, classRotation: 'rotate-45' },
    characterIds: ['monoco'],
    element: 'ice',
    basePower: 3390,
    isDLCWeapon: false,
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
      name: 'Cromaro',
      passives: [
        'Inicias el combato con máscara conjuradora.',
        'Máscara conjuradora aplica regeneración durante 3 turnos.',
        'Las habilidades consumen 1 PA menos al usar Máscara conjuradora.'
      ]
    }
  },
  {
    id: 'fragaro',
    imgData: { width: 54, height: 54, classRotation: 'rotate-45' },
    characterIds: ['monoco'],
    element: 'lightning',
    basePower: 4197,
    isDLCWeapon: false,
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
        'Los disparos con apuntado libre giran la rueda bestial a un valor al azar.',
        'Daño de disparos con apuntado libre +100% con todas las máscaras, excepto Máscara omnipotente.',
        'Probabilidad de crítico del 100% al usar Máscara omnipotente.'
      ]
    }
  },
  {
    id: 'grandaro',
    imgData: { width: 54, height: 54, classRotation: 'rotate-45' },
    characterIds: ['monoco'],
    element: 'earth',
    basePower: 3551,
    isDLCWeapon: false,
    scaling: { vitality: 'S', defense: 'A' },
    en: {
      name: 'Grandaro',
      passives: ['Start battle in Heavy Mask.', 'Heavy Mask applies Shell for 3 turns.', '+1 AP per hit taken.']
    },
    es: {
      name: 'Grandaro',
      passives: [
        'Inicias el combate con Máscara pesada.',
        'Máscara pesada aplica coraza durante 3 turnos.',
        '+1 PA por golpe recibido.'
      ]
    }
  },
  {
    id: 'joyaro',
    imgData: { width: 54, height: 54, classRotation: 'rotate-45' },
    characterIds: ['monoco'],
    element: 'lightning',
    basePower: 3713,
    isDLCWeapon: false,
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
      name: 'Dicharo',
      passives: [
        'Inicias el combate con Máscara omnipotente.',
        'Daño +20% por cada turno consecutivo sin recibir daño. Se acumula hasta 5 veces.',
        'El daño de ruptura se duplica al usar Máscara omnipotente.'
      ]
    }
  },
  {
    id: 'monocaro',
    imgData: { width: 54, height: 54, classRotation: 'rotate-45' },
    characterIds: ['monoco'],
    element: 'physical',
    basePower: 2744,
    isDLCWeapon: false,
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
        'Inicias el combate con Máscara equilibrada.',
        'Máscara equilibrada aplica fortalecimiento durante 3 turnos.',
        'Daño de golpes críticos +30% al usar Máscara equilibrada.'
      ]
    }
  },
  {
    id: 'nusaro',
    imgData: { width: 54, height: 54, classRotation: 'rotate-45' },
    characterIds: ['monoco'],
    element: 'dark',
    basePower: 4197,
    isDLCWeapon: false,
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
        'Los bloqueos aumentan la rueda bestial en 1. Si recibes daño, la rueda bestial se restablece.',
        'Daño de habilidades mejorada +30%.',
        '+1 PA al cambiar de máscara.'
      ]
    }
  },
  {
    id: 'sidaro',
    imgData: { width: 54, height: 54, classRotation: 'rotate-45' },
    characterIds: ['monoco'],
    element: 'dark',
    basePower: 3035,
    isDLCWeapon: false,
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
    }
  },
  {
    id: 'urnaro',
    imgData: { width: 54, height: 54, classRotation: 'rotate-45' },
    characterIds: ['monoco'],
    element: 'earth',
    basePower: 3422,
    isDLCWeapon: false,
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
        'Cambias a Máscara omnipotente al causar ruptura a un enemigo.',
        'Máscara omnipotente otorga 2 PA a todos los aliados.',
        'Daño de ruptura +50%.'
      ]
    }
  },
  {
    id: 'baguettaro',
    imgData: { width: 54, height: 54, classRotation: 'rotate-45' },
    characterIds: ['monoco'],
    element: 'fire',
    basePower: 3745,
    isDLCWeapon: false,
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
    }
  },
  {
    id: 'esquiaro',
    imgData: { width: 54, height: 54, classRotation: 'rotate-45' },
    characterIds: ['monoco'],
    element: 'earth',
    basePower: 3745,
    isDLCWeapon: false,
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
    }
  },
  {
    id: 'cannaro',
    imgData: { width: 54, height: 54, classRotation: 'rotate-45' },
    characterIds: ['monoco'],
    element: 'light',
    basePower: 3648,
    isDLCWeapon: false,
    scaling: { agility: 'A', luck: 'B' },
    en: {
      name: 'Cannaro',
      passives: [
        'Free Aim Shots move the Bestial Wheel 1 step forward.',
        '25% increased damage per Mask change this turn.',
        'Free Aim shoots deal double damage while in Almighty Mask.'
      ]
    },
    es: {
      name: 'Cannaro',
      passives: [
        'Free Aim Shots move the Bestial Wheel 1 step forward.',
        '25% increased damage per Mask change this turn.',
        'Free Aim shoots deal double damage while in Almighty Mask.'
      ]
    }
  }
];

const WEAPONS: Weapon[] = [
  ...GUSTAVE_VERSO_WEAPONS,
  ...LUNE_WEAPONS,
  ...MAELLE_WEAPONS,
  ...SCIEL_WEAPONS,
  ...MONOCO_WEAPONS
];

export default WEAPONS;
