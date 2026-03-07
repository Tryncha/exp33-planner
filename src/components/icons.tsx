import Image from 'next/image';
import { MonocoMask } from '../types';

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
      src={`/ui/status-effect/break.png`}
      alt="Break Icon"
      width={16}
      height={16}
    />
  );
};

export const StainIcon = ({ element }: { element: string }) => {
  return (
    <Image
      src={`/ui/stains/${element}.png`}
      alt={`${element} icon`}
      width={20}
      height={20}
    />
  );
};

export const MonocoMaskIcon = ({ mask }: { mask: MonocoMask }) => {
  return (
    <Image
      src={`/ui/${mask}-mask.png`}
      alt={`${mask} mask icon`}
      width={20}
      height={20}
    />
  );
};
