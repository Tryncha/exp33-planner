'use client';

import Attributes from '@/src/components/attributes';
import CharacterInfo from '@/src/components/character-info';
import Luminas from '@/src/components/luminas';
import Pictos from '@/src/components/pictos';
import Skills from '@/src/components/skills';
import Stats from '@/src/components/stats';
import WeaponInfo from '@/src/components/weapon-info';
import { useBuild } from '@/src/context/build-context';
import { useVault } from '@/src/context/vault-context';
import { Link, redirect } from '@/src/i18n/navigation';
import { ArrowLeft, PencilLine } from 'lucide-react';
import { useLocale, useTranslations } from 'next-intl';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const PlannerHeader = () => {
  const { build, changeName } = useBuild();

  const [isEditingName, setIsEditingName] = useState(false);

  return (
    <div className="flex items-center gap-2">
      <Link
        href="/selector"
        className="rounded-xs p-2 hover:cursor-pointer hover:bg-taupe-800"
      >
        <ArrowLeft />
      </Link>
      {isEditingName ? (
        <>
          <input
            type="text"
            value={build.buildName}
            onChange={(e) => changeName(e.target.value)}
            className="flex-1 border-b border-taupe-700 bg-taupe-800 px-2 py-1 text-2xl font-bold tracking-wide"
          />
          <button
            onClick={() => setIsEditingName(false)}
            className="border border-taupe-700 px-2 text-xl font-bold hover:cursor-pointer hover:bg-taupe-800"
          >
            Confirm
          </button>
        </>
      ) : (
        <div
          onClick={() => setIsEditingName(true)}
          className="flex flex-1 items-center border-b border-taupe-700 px-2 py-1 hover:cursor-pointer hover:bg-taupe-800"
        >
          <h2 className="text-2xl font-bold tracking-wide">{build.buildName}</h2>
          <PencilLine
            size={18}
            className="mx-2 text-taupe-400"
          />
        </div>
      )}
    </div>
  );
};

const PlannerPage = () => {
  const t = useTranslations();
  const locale = useLocale();

  const { build } = useBuild();
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

    redirect({ href: '/', locale: locale });
  }

  return (
    <section className="flex flex-col gap-2 p-4">
      <PlannerHeader />
      <section className="flex gap-2">
        {/* General info */}
        <section className="flex flex-col gap-2">
          <CharacterInfo />
          <Attributes />
          <Stats />
        </section>

        {/* Editor */}
        <section className="flex flex-1 gap-2">
          <div className="flex flex-2 flex-col gap-2">
            <div className="flex gap-2">
              <WeaponInfo />
              <Pictos />
            </div>
            <Skills />
          </div>
          <Luminas />
        </section>
      </section>

      {/* Controls */}
      {!buildExists ? (
        <button
          className="border border-taupe-700 px-2 py-1 text-xl font-bold hover:cursor-pointer hover:bg-taupe-800"
          onClick={saveBuildAndClose}
        >
          {t('Planner.saveButton')}
        </button>
      ) : (
        <button
          className="border border-taupe-700 px-2 py-1 text-xl font-bold hover:cursor-pointer hover:bg-taupe-800"
          onClick={saveBuildAndClose}
        >
          {t('Planner.confirm')}
        </button>
      )}
    </section>
  );
};

export default PlannerPage;
