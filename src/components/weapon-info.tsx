import Image from 'next/image';
import { calcWeaponPower, getWeaponData } from '../lib/utils';
import { Stat, Weapon } from '../types';

const WeaponInfo = ({ weaponId, stats }: { weaponId: Weapon['id']; stats: Record<Stat, number> }) => {
  const weaponData = getWeaponData(weaponId);

  return (
    <div className="flex w-md flex-col border border-taupe-700">
      {/* Weapon info */}
      <div className="flex items-center">
        <div className="size-32">
          <Image
            src={weaponData.imgData.src}
            alt={weaponData.imgData.alt}
            width={weaponData.imgData.width}
            height={weaponData.imgData.height}
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
              <span className="text-xl">{calcWeaponPower(weaponData.basePower, weaponData.scaling, stats)}</span>
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
      <div className="flex flex-col">
        <div className="flex items-center border-t border-taupe-700">
          <h2 className="w-20 px-2 text-center text-xl">Level 4</h2>
          <p>{weaponData.passives[0]}</p>
        </div>
        <div className="flex items-center border-t border-taupe-700">
          <h2 className="w-20 px-2 text-center text-xl">Level 10</h2>
          <p>{weaponData.passives[1]}</p>
        </div>
        <div className="flex items-center border-t border-taupe-700">
          <h2 className="w-20 px-2 text-center text-xl">Level 20</h2>
          <p>{weaponData.passives[2]}</p>
        </div>
      </div>
    </div>
  );
};

export default WeaponInfo;
