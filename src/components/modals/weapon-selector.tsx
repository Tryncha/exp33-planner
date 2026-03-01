import { useBuild } from '@/src/context/build-context';
import { Modal } from '@/src/context/modal-context';
import WEAPONS from '@/src/data/weapons';
import { calcWeaponPower } from '@/src/lib/utils';
import { Weapon } from '@/src/types';
import { useLocale, useTranslations } from 'next-intl';
import Image from 'next/image';
import ElementIcon from '../element-icon';
import ATTRIBUTES from '@/src/data/attributes';
import WeaponPassive from '../weapon-passive';

const WeaponOption = ({
  weaponData,
  isEquipped,
  onClick
}: {
  weaponData: Weapon;
  isEquipped: boolean;
  onClick: () => void;
}) => {
  const t = useTranslations('WeaponInfo');
  const locale = useLocale();

  const { build } = useBuild();
  const { characterId, attributes } = build;

  return (
    <div
      onClick={onClick}
      className={`${isEquipped ? 'bg-taupe-700 hover:bg-taupe-600' : 'hover:bg-taupe-800'} flex w-113.5 flex-col border border-taupe-700 hover:cursor-pointer`}
    >
      {/* Weapon Info */}
      <div className="flex items-center p-2">
        {/* Image */}
        <div className="flex size-28 items-center justify-center">
          <Image
            src={`/weapons/${characterId}/${weaponData.id}.png`}
            alt={weaponData[locale].name}
            width={weaponData.imgData.width}
            height={weaponData.imgData.height}
            className={weaponData.imgData.classRotation}
          />
        </div>

        {/* Stats */}
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
      </div>

      {/* Passives */}
      {characterId !== 'gustave' &&
        (!weaponData[locale].passives ? (
          <div className="flex h-60 items-center justify-center border-t border-taupe-700 text-taupe-500 italic">
            This weapon has not passives
          </div>
        ) : (
          <div className="flex flex-1 flex-col">
            {weaponData[locale].passives.map((pss, i) => (
              <WeaponPassive
                key={`${weaponData.id}-passive-${i}`}
                size="sm"
                level={[4, 10, 20][i]}
                passive={pss}
              />
            ))}
          </div>
        ))}
    </div>
  );
};

const WeaponSelector = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  const { build, changeWeapon } = useBuild();
  const { characterId, weaponId } = build;

  function handleChange(newWeaponId: Weapon['id']) {
    changeWeapon(newWeaponId);
    onClose();
  }

  const filteredWeapons = WEAPONS.filter((wpn) => wpn.characterIds.includes(characterId));

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      className="scrollbar-thumb-taupe-600 scrollbar-track-taupe-800 scrollbar-thin flex h-192 w-356 flex-wrap gap-2 overflow-y-auto rounded-xs bg-taupe-900 p-4"
    >
      {filteredWeapons.map((wpn) => (
        <WeaponOption
          key={wpn.id}
          weaponData={wpn}
          isEquipped={weaponId === wpn.id}
          onClick={() => handleChange(wpn.id)}
        />
      ))}
    </Modal>
  );
};

export default WeaponSelector;
