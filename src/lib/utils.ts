type ScalingTier = 'S' | 'A' | 'B' | 'C' | 'D';

const MAX_STAT = 99;
const SCALING_VALUES = {
  S: 0.9936, // S scaling: ~0.9936
  A: 0.6324, // A scaling: ~0.6324
  B: 0.3617, // B scaling: ~(0.361 - 0.362) or ~0.3617
  C: 0.1764, // C scaling: ~(0.1764 - 0.1803)
  D: 0.0882 // D scaling: ~0.0882
} as const;

export function calcWeaponPower(
  basePower: number,
  scaling: { vitality?: string; might?: string; agility?: string; defense?: string; luck?: string },
  stats: { vitality: number; might: number; agility: number; defense: number; luck: number }
) {
  const bonusValues = { vitality: 0, might: 0, agility: 0, defense: 0, luck: 0 };

  for (const stat of ['vitality', 'might', 'agility', 'defense', 'luck'] as const) {
    if (!scaling[stat]) {
      bonusValues[stat] = 0;
    } else {
      bonusValues[stat] = (SCALING_VALUES[scaling[stat] as ScalingTier] / MAX_STAT) * stats[stat];
    }
  }

  // Might scaling
  const mightBonus = (0.5 / MAX_STAT) * stats.might;

  const totalPower =
    basePower *
    (1 +
      mightBonus +
      bonusValues.vitality +
      bonusValues.might +
      bonusValues.agility +
      bonusValues.defense +
      bonusValues.luck);

  return Math.round(totalPower);
}
