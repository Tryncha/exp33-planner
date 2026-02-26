import Image from 'next/image';
import { useBuild } from '../context/build-context';
import { calcLevel, getTemplateData } from '../lib/utils';
import { Attributes } from '../types';

const CharacterInfo = () => {
  const { build } = useBuild();
  const { characterId, attributes } = build;

  const characterData = getTemplateData(characterId);

  return (
    <div className="flex flex-col items-center justify-center border border-taupe-700 p-4">
      <Image
        src={characterData.imgData.src}
        alt={characterData.imgData.alt}
        width={characterData.imgData.width * 4}
        height={characterData.imgData.height * 4}
      />
      <h2 className="mt-2 text-xs font-semibold uppercase">{characterData.name}</h2>
      <span className="text-xl font-bold tracking-wider">Level {calcLevel(attributes)}</span>
    </div>
  );
};

export default CharacterInfo;
