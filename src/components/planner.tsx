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
import { useState } from 'react';
import { PencilLine } from 'lucide-react';
import { v4 as uuidv4 } from 'uuid';

const Planner = () => {
  const t = useTranslations('Planner');

  const { build, changeName } = useBuild();
  const { vault, addBuild, updateBuild } = useVault();

  const buildExists = vault.map((b) => b.id).includes(build.id);

  function saveBuildAndClose() {
    if (!buildExists) {
      const buildToSave = { ...build };

      buildToSave.id = uuidv4();

      addBuild(buildToSave);
    } else {
      updateBuild(build.id, { ...build });
    }

    location.reload();
  }

  const [isEditingName, setIsEditingName] = useState(false);

  return (
    <section className="flex flex-col gap-2">
      <div className="flex gap-2">
        {isEditingName ? (
          <input
            type="text"
            value={build.buildName}
            onChange={(e) => changeName(e.target.value)}
            className="flex-1 border border-taupe-700 px-2 pb-1 text-2xl font-bold tracking-wide"
          />
        ) : (
          <div
            onClick={() => setIsEditingName(true)}
            className="flex flex-1 items-center border border-taupe-700 hover:cursor-pointer hover:bg-taupe-800"
          >
            <h2 className="px-2 pb-1 text-2xl font-bold tracking-wide">{build.buildName}</h2>
            <PencilLine />
          </div>
        )}
        {!buildExists ? (
          <button
            className="border border-taupe-700 px-2 text-xl font-bold hover:cursor-pointer hover:bg-taupe-800"
            onClick={saveBuildAndClose}
          >
            {t('saveButton')}
          </button>
        ) : (
          <button
            className="border border-taupe-700 px-2 text-xl font-bold hover:cursor-pointer hover:bg-taupe-800"
            onClick={saveBuildAndClose}
          >
            {t('confirm')}
          </button>
        )}
      </div>
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
    </section>
  );
};

export default Planner;
