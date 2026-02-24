import StatInput from './stat-input';
import { useBuild } from '../context/build-context';
import { useState } from 'react';
import { CharacterData } from '../types';
import WeaponInfo from './weapon-info';
import OptionTemplate from './option-template';
import { useVault } from '../context/vault-context';

const Planner = () => {
  const { build, setTemplate } = useBuild();
  const { vault, addBuild } = useVault();

  const [hasTemplate, setHasTemplate] = useState(false);

  function confirmTemplate(characterId: CharacterData['id']) {
    setTemplate(characterId);
    setHasTemplate(true);
  }

  function saveBuildAndClose() {
    const buildToSave = { ...build };

    const buildCode = String(vault.length).padStart(2, '0');
    buildToSave.id = `${buildToSave.characterId}-${buildCode}`;

    addBuild(buildToSave);
  }

  return !hasTemplate ? (
    <section className="border border-taupe-700 p-2">
      <h2 className="font-semibold">Select a Character</h2>
      <OptionTemplate
        characterId="gustave"
        onClick={() => confirmTemplate('gustave')}
      />
    </section>
  ) : (
    <section>
      <button onClick={() => setHasTemplate(false)}>Return</button>
      <div className="flex flex-col gap-1">
        <StatInput
          statId="vitality"
          value={build.stats.vitality}
        />
        <StatInput
          statId="might"
          value={build.stats.might}
        />
        <StatInput
          statId="agility"
          value={build.stats.agility}
        />
        <StatInput
          statId="defense"
          value={build.stats.defense}
        />
        <StatInput
          statId="luck"
          value={build.stats.luck}
        />
      </div>
      <WeaponInfo
        weaponId={build.weaponId}
        stats={build.stats}
      />
      <div>
        <button
          className="border px-2"
          onClick={saveBuildAndClose}
        >
          Save Build
        </button>
      </div>
    </section>
  );
};

export default Planner;
