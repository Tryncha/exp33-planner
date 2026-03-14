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
import Diamond from './diamond';
import { redirect } from '../i18n/navigation';

const BuildResume = ({ buildResume }: { buildResume: Build }) => {
  const t = useTranslations();
  const locale = useLocale();

  const { setBaseBuild } = useBuild();
  const { removeBuild } = useVault();

  const { characterId, weaponId, skillIds, pictosIds, luminasIds } = buildResume;

  const characterData = getCharacterData(characterId);
  const weaponData = getWeaponData(weaponId);
  const skillsData = skillIds.map((skId) => getSkillData(skId));
  const pictosData = pictosIds.map((pId) => getPictoData(pId));
  const luminasData = luminasIds.map((lumId) => getLuminaData(lumId));

  function editBuild() {
    setBaseBuild(buildResume);
    redirect({ href: '/planner', locale: locale });
  }

  return (
    <div className="flex flex-col border border-taupe-700">
      <div
        onClick={editBuild}
        className="flex flex-col items-center hover:cursor-pointer hover:bg-taupe-900"
      >
        {/* Title & Character Image */}
        <div className="flex items-center gap-2 p-2">
          <Image
            src={characterData.imgData.src}
            alt={characterData.imgData.alt}
            width={48}
            height={48}
            loading="eager"
          />
          <div className="flex flex-col items-center">
            <h2 className="font-semibold">{buildResume.buildName}</h2>
            <span className="text-xs capitalize">
              {buildResume.characterId}, {t('BuildResume.level')} {calcLevel(buildResume.attributes)}
            </span>
          </div>
        </div>

        {/* Build Info */}
        <div className="flex items-center gap-8 border-t border-taupe-700 p-2">
          {/* Weapon Info */}
          <div className="flex flex-col items-center gap-1">
            <div className="flex size-20 items-center justify-center">
              <Image
                src={`/weapons/${characterData.id}/${weaponData.id}.png`}
                alt={weaponData[locale].name}
                width={weaponData.imgData.width * 0.75}
                height={weaponData.imgData.height * 0.75}
                className={weaponData.imgData.classRotation}
                loading="eager"
              />
            </div>
            <span className="text-sm/2 font-semibold">{weaponData[locale].name}</span>
            <span className="text-xs">Luminas ({calcTotalLumina(luminasData)})</span>
          </div>

          {/* Skills Info */}
          <div className="grid grid-cols-2 gap-1">
            {skillsData.map((sk, i) =>
              sk ? (
                <Image
                  key={`resume-${buildResume.id}-skill-${i}`}
                  src={`/skills/${characterData.id}/${sk.id}.png`}
                  alt={weaponData[locale].name}
                  width={36}
                  height={36}
                  loading="eager"
                />
              ) : (
                <div
                  key={`resume-${buildResume.id}-skill-${i}`}
                  className="relative top-1.5 left-1.5 size-6 rotate-45 border border-taupe-700 bg-taupe-950"
                />
              )
            )}
          </div>

          {/* Pictos & Lumina Info */}
          <div className="flex flex-col items-center justify-center gap-4">
            {pictosData.map((pic, i) =>
              pic ? (
                <div
                  key={`resume-${buildResume.id}-picto-${i}`}
                  className="relative flex items-center"
                >
                  <Diamond className="absolute flex size-6 items-center justify-center border border-taupe-700 bg-taupe-900">
                    <Image
                      src={`/pictos/${pic.id}.png`}
                      alt={weaponData[locale].name}
                      width={18}
                      height={18}
                      loading="eager"
                    />
                  </Diamond>
                  <span className="ml-2 flex h-6 w-40 flex-1 items-center justify-center border border-taupe-700 pr-2 pl-4 text-xs">
                    {pic ? pic[locale].name : ''}
                  </span>
                </div>
              ) : (
                <div key={`resume-${buildResume.id}-picto-${i}`}>
                  <Diamond className="absolute size-6 border border-taupe-700 bg-taupe-950" />
                  <span className="ml-2 flex h-6 w-40 flex-1 items-center justify-center border border-taupe-700 text-xs">
                    -
                  </span>
                </div>
              )
            )}
          </div>
        </div>
      </div>

      <button
        onClick={() => removeBuild(buildResume.id)}
        className="border-t border-taupe-700 py-1 text-xs hover:cursor-pointer hover:bg-red-950"
      >
        {t('BuildResume.deleteButton')}
      </button>
    </div>
  );
};

export default BuildResume;
