import Image from 'next/image';
import { Build } from '../types';
import { getTemplateData } from '../lib/utils';

const BuildResume = ({ build }: { build: Build }) => {
  const characterData = getTemplateData(build.characterId);

  return (
    <div className="flex gap-2 border border-taupe-700 p-4">
      <Image
        src={characterData.imgData.src}
        alt={characterData.imgData.alt}
        width={80}
        height={80}
      />
      <div className="flex gap-4">
        <div className="flex flex-col items-center">
          <span className="text-xs">{build.id}</span>
          <h2 className="font-semibold">{build.name}</h2>
          <span className="text-xs capitalize">
            {build.characterId}, Level {build.level}
          </span>
        </div>
        <div className="flex flex-col">
          <span className="text-xs">Pictos: {build.pictosIds.length}</span>
          <span className="text-xs">Luminas: {build.luminasIds.length}</span>
        </div>
      </div>
    </div>
  );
};

export default BuildResume;
