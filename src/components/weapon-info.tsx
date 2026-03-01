import Image from 'next/image';
import { calcWeaponPower, getWeaponData } from '../lib/utils';
import { useModal } from '../context/modal-context';
import { useBuild } from '../context/build-context';
import WeaponPassive from './weapon-passive';
import WeaponSelector from './modals/weapon-selector';
import { useLocale, useTranslations } from 'next-intl';
import ElementIcon from './element-icon';
import ATTRIBUTES from '../data/attributes';

const WeaponInfo = () => {
  const t = useTranslations('WeaponInfo');
  const locale = useLocale();

  const { build } = useBuild();
  const { characterId, weaponId, attributes } = build;

  const { openModal, closeAll, isModalOpen } = useModal();

  const weaponData = getWeaponData(weaponId);

  return (
    <div className="flex w-md flex-col border border-taupe-700">
      <WeaponSelector
        isOpen={isModalOpen.weapons}
        onClose={closeAll}
      />

      {/* Weapon Info */}
      <section className="flex items-center p-2">
        {/* Weapon Image */}
        <div
          onClick={() => openModal('weapons')}
          className="flex size-28 items-center justify-center hover:cursor-pointer"
        >
          <Image
            src={`/weapons/${characterId}/${weaponData.id}.png`}
            alt={weaponData[locale].name}
            width={weaponData.imgData.width}
            height={weaponData.imgData.height}
            className={weaponData.imgData.classRotation}
          />
        </div>

        {/* Weapon Stats */}
        <section className="flex flex-1 flex-col gap-2 px-4">
          <h2 className="text-2xl font-bold tracking-wide">{weaponData[locale].name}</h2>
          <div className="flex gap-6">
            <div className="flex flex-1 flex-col items-center">
              <span className="text-sm font-semibold text-taupe-400">{t('power')}</span>
              <span className="text-xl font-bold">
                {calcWeaponPower(weaponData.basePower, weaponData.scaling, attributes)}
              </span>
            </div>
            <div className="flex flex-1 flex-col items-center gap-1">
              <span className="text-sm font-semibold text-taupe-400">{t('element')}</span>
              <ElementIcon element={weaponData.element} />
            </div>
            {Object.entries(weaponData.scaling).map(([key, value]) => (
              <div
                key={key}
                className="flex flex-1 flex-col items-center"
              >
                <span className="text-sm font-semibold text-taupe-400 capitalize">
                  {ATTRIBUTES[key as keyof typeof ATTRIBUTES][locale].name}
                </span>
                <span className="text-xl font-bold">{value}</span>
              </div>
            ))}
          </div>
        </section>
      </section>

      {/* Passives */}
      {characterId === 'gustave' ? (
        <div className="flex h-60 items-center justify-center border-t border-taupe-700 text-taupe-500 italic">
          Gustave doesn't have weapon passives
        </div>
      ) : !weaponData[locale].passives ? (
        <div className="flex h-60 items-center justify-center border-t border-taupe-700 text-taupe-500 italic">
          This weapon has not passives
        </div>
      ) : (
        <div className="flex flex-col">
          {weaponData[locale].passives.map((pss, i) => (
            <WeaponPassive
              key={`weapon-passive-${i}`}
              level={[4, 10, 20][i]}
              passive={pss}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default WeaponInfo;
