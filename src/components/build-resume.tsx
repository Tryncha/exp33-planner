import Image from 'next/image';
import { Build } from '../types';
import { calcLevel, getCharacterData } from '../lib/utils';
import { useBuild } from '../context/build-context';
import { useVault } from '../context/vault-context';
import { useTranslations } from 'next-intl';

const BuildResume = ({ buildResume, openPlanner }: { buildResume: Build; openPlanner: () => void }) => {
  const t = useTranslations('BuildResume');

  const { setBaseBuild } = useBuild();
  const { removeBuild } = useVault();

  const characterData = getCharacterData(buildResume.characterId);

  function editBuild() {
    setBaseBuild(buildResume);
    openPlanner();
  }

  return (
    <div className="flex flex-col gap-2">
      <div
        onClick={editBuild}
        className="flex items-center gap-4 border border-taupe-700 p-4 hover:cursor-pointer hover:bg-taupe-900"
      >
        <Image
          src={characterData.imgData.src}
          alt={characterData.imgData.alt}
          width={80}
          height={80}
          loading="eager"
        />
        <div className="flex flex-1 items-center justify-center gap-4">
          <div className="flex flex-col items-center justify-center">
            {/* <span className="text-xs">{buildResume.id}</span> */}
            <h2 className="font-semibold">{buildResume.buildName}</h2>
            <span className="text-xs capitalize">
              {buildResume.characterId}, {t('level')} {calcLevel(buildResume.attributes)}
            </span>
          </div>
        </div>
      </div>
      <div className="flex gap-2">
        <button
          onClick={() => removeBuild(buildResume.id)}
          className="flex-1 border border-taupe-700 px-2 text-xs hover:cursor-pointer hover:bg-taupe-900"
        >
          {t('deleteButton')}
        </button>
      </div>
    </div>
  );
};

export default BuildResume;
