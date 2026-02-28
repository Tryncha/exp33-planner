import { useTranslations } from 'next-intl';
import { CharacterData, CharacterId } from '../types';
import OptionTemplate from './option-template';

const BaseSelector = ({ selectBaseBuild }: { selectBaseBuild: (characterId: CharacterData['id']) => void }) => {
  const t = useTranslations('BaseSelector');

  return (
    <section className="flex flex-col gap-1 border border-taupe-700 p-2">
      <h2 className="font-semibold">{t('selectCharacter')}</h2>
      <div className="flex gap-2">
        {(['gustave', 'lune', 'maelle', 'sciel', 'verso', 'monoco'] as CharacterId[]).map((char) => (
          <OptionTemplate
            key={`select-${char}`}
            characterId={char}
            onClick={() => selectBaseBuild(char)}
          />
        ))}
      </div>
    </section>
  );
};

export default BaseSelector;
