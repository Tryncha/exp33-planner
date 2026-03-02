import Image from 'next/image';

export const ElementIcon = ({ element }: { element: string }) => {
  return (
    <Image
      src={`/elements/${element}.png`}
      alt={`${element} icon`}
      width={24}
      height={24}
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
