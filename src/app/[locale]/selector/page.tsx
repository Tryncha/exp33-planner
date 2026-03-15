'use client';

import OptionTemplate from '@/src/components/option-template';
import { useBuild } from '@/src/context/build-context';
import { redirect } from '@/src/i18n/navigation';
import { getTemplateData } from '@/src/lib/utils';
import { CharacterData, CharacterId } from '@/src/types';
import { useLocale, useTranslations } from 'next-intl';

const SelectorPage = () => {
  const t = useTranslations();
  const locale = useLocale();

  const { setBaseBuild } = useBuild();

  function selectBaseBuild(characterId: CharacterData['id']) {
    const baseBuild = getTemplateData(characterId);
    setBaseBuild(baseBuild);
    redirect({ href: '/planner', locale: locale });
  }

  return (
    <main className="relative flex h-155 flex-col items-center justify-center gap-1 p-2">
      <h2 className="font-semibold">{t('BaseSelector.selectCharacter')}</h2>
      <div className="flex gap-2">
        {(['gustave', 'lune', 'maelle', 'sciel', 'verso', 'monoco'] as CharacterId[]).map((char) => (
          <OptionTemplate
            key={`select-${char}`}
            characterId={char}
            onClick={() => selectBaseBuild(char)}
          />
        ))}
      </div>
    </main>
  );
};

export default SelectorPage;
