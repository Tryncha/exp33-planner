import Image from 'next/image';
import { calcWeaponPower, getWeaponData } from '../lib/utils';
import { useModal } from '../context/modal-context';
import { useBuild } from '../context/build-context';
import WeaponPassive from './weapon-passive';
import WeaponSelector from './modals/weapon-selector';
import { useLocale } from 'next-intl';

const Weapon = () => {
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

      {/* Weapon info */}
      <div className="flex items-center">
        <div
          onClick={() => openModal('weapons')}
          className="size-32 hover:cursor-pointer"
        >
          <Image
            src={`/weapons/${characterId}/${weaponData.id}.png`}
            alt={weaponData[locale].name}
            width={36}
            height={36}
            className="translate-x-12 -rotate-135"
          />
        </div>

        <div className="flex flex-1 flex-col gap-2 p-4">
          <div className="flex items-center justify-between gap-2">
            <h2 className="text-2xl font-semibold">{weaponData[locale].name}</h2>
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

export default Weapon;
