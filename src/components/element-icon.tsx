import Image from 'next/image';

const ElementIcon = ({ element }: { element: string }) => {
  return (
    <Image
      src={`/elements/${element}.png`}
      alt={`${element} icon`}
      width={24}
      height={24}
    />
  );
};

export default ElementIcon;
