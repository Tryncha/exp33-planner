import Image from 'next/image';
import { useBuild } from '../context/build-context';
import { calcLevel, getCharacterData } from '../lib/utils';
import { useTranslations } from 'next-intl';

const CharacterInfo = () => {
  const t = useTranslations('CharacterInfo');

  const { build } = useBuild();
  const { characterId, attributes } = build;

  const charData = getCharacterData(characterId);

  return (
    <div className="flex flex-col items-center justify-center border border-taupe-700 p-4">
      <Image
        src={charData.imgData.src}
        alt={charData.imgData.alt}
        width={charData.imgData.width * 4}
        height={charData.imgData.height * 4}
      />
      <h2 className="mt-2 text-xs font-semibold uppercase">{charData.name}</h2>
      <span className="text-xl font-bold tracking-wider">
        {t('level')} {calcLevel(attributes)}
      </span>
    </div>
  );
};

export default CharacterInfo;
