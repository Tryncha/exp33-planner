'use client';

import WEAPONS from '../data/weapons';
import WeaponInfo from '../components/weapon-info';
import CharacterCard from '../components/character-card';
import { useCharacters } from '../context/character-context';
import StatInput from '../components/stat-input';

const HomePage = () => {
  const { gustave, lune } = useCharacters();

  const gustaveWeaponData = WEAPONS.find((w) => w.id === gustave.weaponId);

  return (
    <main className="p-4">
      <div className="flex gap-2">
        <CharacterCard character={gustave} />
        <CharacterCard character={lune} />
      </div>

      {/* Stats */}
      <div className="flex flex-col gap-1">
        <StatInput
          stat="vitality"
          character={gustave}
        />
        <StatInput
          stat="might"
          character={gustave}
        />
        <StatInput
          stat="agility"
          character={gustave}
        />
        <StatInput
          stat="defense"
          character={gustave}
        />
        <StatInput
          stat="luck"
          character={gustave}
        />
      </div>

      {/* Weapon */}
      {/* {!gustaveWeaponData ? (
        <div>Empty</div>
      ) : (
        <WeaponInfo
          weaponData={gustaveWeaponData}
          stats={gustave.stats}
        />
      )} */}

      <WeaponInfo
        weaponData={WEAPONS[0]}
        stats={gustave.stats}
      />
      <WeaponInfo
        weaponData={WEAPONS[1]}
        stats={gustave.stats}
      />
      <WeaponInfo
        weaponData={WEAPONS[2]}
        stats={gustave.stats}
      />
    </main>
  );
};

export default HomePage;
