'use client';

import { useState } from 'react';
import { useBuild } from '../context/build-context';
import { getTemplateData } from '../lib/utils';
import { CharacterData } from '../types';
import Planner from './planner';
import BaseSelector from './base-selector';
import Vault from './vault';

const Placeholder = () => {
  const { setBaseBuild } = useBuild();

  const [showBaseSelector, setShowBaseSelector] = useState(false);
  const [showPlanner, setShowPlanner] = useState(false);

  function openPlanner() {
    setShowBaseSelector(false);
    setShowPlanner(true);
  }

  function selectBaseBuild(characterId: CharacterData['id']) {
    const baseBuild = getTemplateData(characterId);
    setBaseBuild(baseBuild);
    openPlanner();
  }

  return (
    <>
      <button
        onClick={() => setShowBaseSelector(true)}
        className="border border-taupe-700 bg-taupe-900 px-2 hover:cursor-pointer"
      >
        Add Build
      </button>

      {showBaseSelector && <BaseSelector selectBaseBuild={selectBaseBuild} />}
      {showPlanner && <Planner />}

      <hr className="my-4 border border-taupe-700" />
      <Vault openPlanner={openPlanner} />
    </>
  );
};

export default Placeholder;
