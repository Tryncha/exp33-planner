import Image from 'next/image';
import { Build } from '../types';
import {
  calcLevel,
  calcTotalLumina,
  getCharacterData,
  getLuminaData,
  getPictoData,
  getSkillData,
  getWeaponData
} from '../lib/utils';
import { useBuild } from '../context/build-context';
import { useVault } from '../context/vault-context';
import { useLocale, useTranslations } from 'next-intl';

const BuildResume = ({ buildResume, openPlanner }: { buildResume: Build; openPlanner: () => void }) => {
  const t = useTranslations('BuildResume');
  const locale = useLocale();

  const { setBaseBuild } = useBuild();
  const { removeBuild } = useVault();

  const characterData = getCharacterData(buildResume.characterId);
  const weaponData = getWeaponData(buildResume.weaponId);
  const skillsData = buildResume.skillIds.map((skId) => getSkillData(skId));
  const pictosData = buildResume.pictosIds.map((pId) => getPictoData(pId));
  const luminasData = buildResume.luminasIds.map((lumId) => getLuminaData(lumId));

  function editBuild() {
    setBaseBuild(buildResume);
    openPlanner();
  }

  return (
    <div className="flex flex-col border border-taupe-700">
      <div
        onClick={editBuild}
        className="flex items-center gap-4 p-4 hover:cursor-pointer hover:bg-taupe-900"
      >
        <div className="flex flex-col items-center">
          <Image
            src={characterData.imgData.src}
            alt={characterData.imgData.alt}
            width={80}
            height={80}
            loading="eager"
          />
          <span className="mt-1 text-xs capitalize">
            {buildResume.characterId}, {t('level')} {calcLevel(buildResume.attributes)}
          </span>
        </div>
        <div className="flex flex-1 flex-col justify-center gap-2">
          <h2 className="text-center text-base/5 font-semibold">{buildResume.buildName}</h2>
          <div className="flex justify-between gap-1">
            <div className="flex size-16 items-center justify-center">
              <Image
                src={`/weapons/${characterData.id}/${weaponData.id}.png`}
                alt={weaponData[locale].name}
                width={weaponData.imgData.width * 0.65}
                height={weaponData.imgData.height * 0.65}
                className={weaponData.imgData.classRotation}
                loading="eager"
              />
            </div>
            <div className="grid grid-cols-2">
              {skillsData.map((sk, i) => (
                <span
                  key={`resume-${buildResume.id}-skill-${i}`}
                  className="flex items-center justify-center text-xs"
                >
                  {sk ? sk[locale].name : '-'}
                </span>
              ))}
            </div>
            <div className="flex flex-col">
              {pictosData.map((pic, i) => (
                <span
                  key={`resume-${buildResume.id}-picto-${i}`}
                  className="text-xs"
                >
                  {pic ? pic[locale].name : ''}
                </span>
              ))}
              <span className="text-xs font-semibold">Luminas ({calcTotalLumina(luminasData)})</span>
            </div>
          </div>
        </div>
      </div>
      <button
        onClick={() => removeBuild(buildResume.id)}
        className="border-t border-taupe-700 py-1 text-xs hover:cursor-pointer hover:bg-red-950"
      >
        {t('deleteButton')}
      </button>
    </div>
  );
};

export default BuildResume;
