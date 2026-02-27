import { useBuild } from '@/src/context/build-context';
import { Modal } from '@/src/context/modal-context';
import WEAPONS from '@/src/data/weapons';
import { calcWeaponPower } from '@/src/lib/utils';
import { WeaponData } from '@/src/types';
import Image from 'next/image';
import WeaponPassive from '../weapon-passive';

const WeaponOption = ({
  weaponData,
  isEquipped,
  onClick
}: {
  weaponData: WeaponData;
  isEquipped: boolean;
  onClick: () => void;
}) => {
  const { build } = useBuild();
  const { characterId, attributes } = build;

  return (
    <div
      onClick={onClick}
      className={`${isEquipped ? 'bg-taupe-700 hover:bg-taupe-600' : 'hover:bg-taupe-800'} flex w-110 flex-col gap-2 border border-taupe-700 p-2 hover:cursor-pointer`}
    >
      {/* Weapon info */}
      <div className="flex items-center">
        <div className="size-32 hover:cursor-pointer">
          <Image
            src={`/weapons/${weaponData.id}.png`}
            alt={`${weaponData.name}`}
            width={36}
            height={36}
            className="translate-x-12 -rotate-135"
          />
        </div>

        <div className="flex flex-1 flex-col gap-2 p-4">
          <div className="flex items-center justify-between gap-2">
            <h2 className="text-2xl font-semibold">{weaponData.name}</h2>
            <span>Level 33</span>
          </div>
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
      {characterId === 'gustave' ? (
        <div className="flex h-60 items-center justify-center border-t border-taupe-700 text-taupe-500 italic">
          Gustave doesn't have weapon passives
        </div>
      ) : !weaponData.passives ? (
        <div className="flex h-60 items-center justify-center border-t border-taupe-700 text-taupe-500 italic">
          This weapon has not passives
        </div>
      ) : (
        <div className="flex flex-col">
          {weaponData.passives.map((pss, i) => (
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

const WeaponSelector = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  const { build, changeWeapon } = useBuild();
  const { weaponId } = build;

  function handleChange(newWeaponId: WeaponData['id']) {
    changeWeapon(newWeaponId);
    onClose();
  }

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      className="scrollbar-thumb-taupe-600 scrollbar-track-taupe-800 scrollbar-thin flex h-180 w-342 flex-wrap gap-2 overflow-y-auto rounded-xs bg-taupe-900 p-2"
    >
      {WEAPONS.map((wpn) => (
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
