'use client';

import { useState } from 'react';
import { useBuild } from '../context/build-context';
import { getTemplateData } from '../lib/utils';
import { CharacterData } from '../types';
import Planner from './planner';
import BaseSelector from './base-selector';
import Vault from './vault';
import { useTranslations } from 'next-intl';

const Placeholder = () => {
  const t = useTranslations();

  const { setBaseBuild } = useBuild();

  const [showButton, setShowButton] = useState(true);
  const [showBaseSelector, setShowBaseSelector] = useState(false);
  const [showPlanner, setShowPlanner] = useState(false);

  function openSelector() {
    setShowButton(false);
    setShowBaseSelector(true);
  }

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
    <section className="flex flex-col gap-2">
      {showButton && (
        <button
          onClick={openSelector}
          className="border border-taupe-700 bg-taupe-900 px-2 py-1 text-sm hover:cursor-pointer"
        >
          {t('addBuildButton')}
        </button>
      )}
      {showBaseSelector && <BaseSelector selectBaseBuild={selectBaseBuild} />}
      {showPlanner && <Planner />}

      <Vault openPlanner={openPlanner} />
    </section>
  );
};

export default Placeholder;
