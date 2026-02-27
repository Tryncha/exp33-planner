import Image from 'next/image';
import { Build } from '../types';
import { calcLevel, getCharacterData } from '../lib/utils';
import { useBuild } from '../context/build-context';
import { useVault } from '../context/vault-context';

const BuildResume = ({ buildResume, openPlanner }: { buildResume: Build; openPlanner: () => void }) => {
  const { setBaseBuild } = useBuild();
  const { removeBuild } = useVault();

  const characterData = getCharacterData(buildResume.characterId);

  function editBuild() {
    setBaseBuild(buildResume);
    openPlanner();
  }

  return (
    <div className="flex items-center gap-4 border border-taupe-700 p-4">
      <Image
        src={characterData.imgData.src}
        alt={characterData.imgData.alt}
        width={80}
        height={80}
        loading="eager"
      />
      <div className="flex gap-4">
        <div className="flex flex-col items-center justify-center">
          <span className="text-xs">{buildResume.id}</span>
          <h2 className="font-semibold">{buildResume.buildName}</h2>
          <span className="text-xs capitalize">
            {buildResume.characterId}, Level {calcLevel(buildResume.attributes)}
          </span>
        </div>
        <div className="flex flex-col items-center justify-center">
          <span className="text-xs">Pictos: {buildResume.pictosIds.length}</span>
          <span className="text-xs">Luminas: {buildResume.luminasIds.length}</span>
        </div>
      </div>
      <button onClick={editBuild}>Edit</button>
      <button onClick={() => removeBuild(buildResume.id)}>Remove</button>
    </div>
  );
};

export default BuildResume;
