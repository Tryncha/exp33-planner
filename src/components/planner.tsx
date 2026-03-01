import { useBuild } from '../context/build-context';
import WeaponInfo from './weapon-info';
import { useVault } from '../context/vault-context';
import Pictos from './pictos';
import Luminas from './luminas';
import Stats from './stats';
import Skills from './skills';
import CharacterInfo from './character-info';
import { useTranslations } from 'next-intl';
import Attributes from './attributes';

const Planner = () => {
  const t = useTranslations('Planner');

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

    location.reload();
  }

  return (
    <section>
      <div className="flex gap-2">
        <div className="flex flex-col gap-2">
          <CharacterInfo />
          <Attributes />
          <Stats />
        </div>
        <div className="flex w-md flex-col gap-2">
          <WeaponInfo />
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
            {t('saveButton')}
          </button>
        ) : (
          <button
            className="border px-2"
            onClick={saveBuildAndClose}
          >
            {t('confirm')}
          </button>
        )}
      </div>
    </section>
  );
};

export default Planner;
