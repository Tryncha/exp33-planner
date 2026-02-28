import { useBuild } from '@/src/context/build-context';
import { Modal } from '@/src/context/modal-context';
import WEAPONS from '@/src/data/weapons';
import { calcWeaponPower } from '@/src/lib/utils';
import { Weapon } from '@/src/types';
import { useLocale } from 'next-intl';
import Image from 'next/image';

const WeaponOption = ({
  weaponData,
  isEquipped,
  onClick
}: {
  weaponData: Weapon;
  isEquipped: boolean;
  onClick: () => void;
}) => {
  const locale = useLocale();

  const { build } = useBuild();
  const { characterId, attributes } = build;

  return (
    <div
      onClick={onClick}
      className={`${isEquipped ? 'bg-taupe-700 hover:bg-taupe-600' : 'hover:bg-taupe-800'} flex w-110 flex-col border border-taupe-700 hover:cursor-pointer`}
    >
      {/* Weapon Info */}
      <div className="flex items-center p-2">
        {/* Image */}
        <div className="size-28">
          <Image
            src={`/weapons/${characterId}/${weaponData.id}.png`}
            alt={weaponData[locale].name}
            width={32}
            height={32}
            className="translate-x-12 -rotate-135"
          />
        </div>

        {/* Stats */}
        <div className="flex flex-1 flex-col gap-2 px-2">
          <h2 className="text-2xl font-semibold">{weaponData[locale].name}</h2>
          <div className="flex justify-between">
            <div className="flex flex-1 flex-col items-center">
              <span className="text-sm text-taupe-400">Power</span>
              <span className="text-xl">{calcWeaponPower(weaponData.basePower, weaponData.scaling, attributes)}</span>
            </div>
            <div className="flex flex-1 flex-col items-center">
              <span className="text-sm text-taupe-400">Element</span>
              <span className="text-xl">{weaponData.element}</span>
            </div>
            <div className="flex flex-1">
              {Object.entries(weaponData.scaling).map(([key, value]) => (
                <div
                  key={key}
                  className="flex flex-1 flex-col items-center px-2"
                >
                  <span className="text-sm text-taupe-400 capitalize">{key}</span>
                  <span className="text-xl">{value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Passives */}
      {characterId !== 'gustave' &&
        (!weaponData[locale].passives ? (
          <div className="flex h-60 items-center justify-center border-t border-taupe-700 text-taupe-500 italic">
            This weapon has not passives
          </div>
        ) : (
          <div className="flex flex-col">
            {weaponData[locale].passives.map((pss, i) => (
              <p
                key={`${weaponData.id}-passive-${i}`}
                className=""
              >
                <strong className="text-sm font-semibold text-taupe-500">Level {[4, 10, 20][i]}: </strong>
                <span className="text-sm">{pss}</span>
              </p>
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
      className="scrollbar-thumb-taupe-600 scrollbar-track-taupe-800 scrollbar-thin flex h-180 w-342 flex-wrap gap-2 overflow-y-auto rounded-xs bg-taupe-900 p-2"
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
