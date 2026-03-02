import Image from 'next/image';

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
      src={`/ui/break-status-effect.png`}
      alt={`Break icon`}
      width={16}
      height={16}
    />
  );
};
