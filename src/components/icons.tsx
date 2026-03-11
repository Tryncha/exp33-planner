import Image from 'next/image';
import { LuneStain, MonocoMask, ScielCharge } from '../types';

export const ElementIcon = ({ element, size = 24 }: { element: string; size?: number }) => {
  return (
    <Image
      src={`/elements/${element}.png`}
      alt={`${element} icon`}
      width={size}
      height={size}
    />
  );
};

export const BreakIcon = () => {
  return (
    <Image
      src={`/icons/break.png`}
      alt="Break Icon"
      width={16}
      height={16}
    />
  );
};

export const StainIcon = ({ stain }: { stain: LuneStain }) => {
  return (
    <Image
      src={`/icons/${stain}-stain.png`}
      alt={`${stain} icon`}
      width={20}
      height={20}
    />
  );
};

export const ChargeIcon = ({ charge }: { charge: ScielCharge }) => {
  return (
    <Image
      src={`/icons/${charge}-charge.png`}
      alt={`${charge} icon`}
      width={16}
      height={16}
    />
  );
};

export const MonocoMaskIcon = ({ mask }: { mask: MonocoMask }) => {
  return (
    <Image
      src={`/icons/${mask}-mask.png`}
      alt={`${mask} mask icon`}
      width={20}
      height={20}
    />
  );
};
