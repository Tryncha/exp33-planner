import { useBuild } from '../context/build-context';
import Weapon from './weapon';
import { useVault } from '../context/vault-context';
import Pictos from './pictos';
import Luminas from './luminas';
import Stats from './stats';
import Skills from './skills';
import CharacterInfo from './character-info';

const Planner = () => {
  const { build } = useBuild();
  const { vault, addBuild, updateBuild } = useVault();

  const buildExists = vault.map((b) => b.id).includes(build.id);

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

  return (
    <section>
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
