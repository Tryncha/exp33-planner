import AttributeInput from './attribute-input';
import { useBuild } from '../context/build-context';
import { useState } from 'react';
import { CharacterData } from '../types';
import Weapon from './weapon';
import OptionTemplate from './option-template';
import { useVault } from '../context/vault-context';
import Pictos from './pictos';
import Luminas from './luminas';
import Stats from './stats';
import Skills from './skills';
import CharacterInfo from './character-info';

const Planner = () => {
  const { build, setTemplate } = useBuild();
  const { vault, addBuild, updateBuild } = useVault();

  const [hasTemplate, setHasTemplate] = useState(false);

  const buildExists = vault.map((b) => b.id).includes(build.id);

  function confirmTemplate(characterId: CharacterData['id']) {
    setTemplate(characterId);
    setHasTemplate(true);
  }

  function saveBuildAndClose() {
    if (!buildExists) {
      const buildToSave = { ...build };

      const buildCode = String(vault.length).padStart(2, '0');
      buildToSave.id = `${buildToSave.characterId}-${buildCode}`;

      addBuild(buildToSave);
    } else {
      updateBuild(build.id, { ...build });
    }
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
      <div className="flex gap-2">
        <div className="flex flex-col gap-2">
          <CharacterInfo />
          <Stats />
        </div>
        <div className="flex w-md flex-col gap-2">
          <Weapon />
          <Skills />
        </div>
        <Pictos />
        <Luminas />
      </div>
      <div>
        {!buildExists ? (
          <button
            className="border px-2"
            onClick={saveBuildAndClose}
          >
            Save Build
          </button>
        ) : (
          <button
            className="border px-2"
            onClick={saveBuildAndClose}
          >
            Confirm changes
          </button>
        )}
      </div>
    </section>
  );
};

export default Planner;
