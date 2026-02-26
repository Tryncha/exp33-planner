'use client';

import Planner from '../components/planner';
import { useState } from 'react';
import { useVault } from '../context/vault-context';
import BuildResume from '../components/build-resume';
import { useBuild } from '../context/build-context';
import { CharacterData } from '../types';
import { getTemplateData } from '../lib/utils';
import BaseSelector from '../components/base-selector';

const HomePage = () => {
  const { setBaseBuild } = useBuild();

  const [showBaseSelector, setShowBaseSelector] = useState(false);
  const [showPlanner, setShowPlanner] = useState(false);
  const { vault } = useVault();

  function openPlanner() {
    setShowBaseSelector(false);
    setShowPlanner(true);
  }

  function selectBaseBuild(characterId: CharacterData['id']) {
    const baseCharacter = getTemplateData(characterId);
    setBaseBuild(baseCharacter);
    openPlanner();
  }

  return (
    <main className="p-4">
      <button
        onClick={() => setShowBaseSelector(true)}
        className="border border-taupe-700 bg-taupe-900 px-2 hover:cursor-pointer"
      >
        Add Build
      </button>

      {showBaseSelector && <BaseSelector selectBaseBuild={selectBaseBuild} />}
      {showPlanner && <Planner />}

      <hr className="my-4 border border-taupe-700" />
      <section>
        <h2>Saved builds</h2>
        {vault.length === 0 ? (
          <div className="text-xs">Empty vault</div>
        ) : (
          <div className="flex gap-2">
            {vault.map((bld) => (
              <BuildResume
                key={bld.id}
                buildResume={bld}
                openPlanner={openPlanner}
              />
            ))}
          </div>
        )}
      </section>
    </main>
  );
};

export default HomePage;
