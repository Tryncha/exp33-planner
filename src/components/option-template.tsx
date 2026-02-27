import Image from 'next/image';
import { CharacterData } from '../types';
import { getCharacterData } from '../lib/utils';

const OptionTemplate = ({ characterId, onClick }: { characterId: CharacterData['id']; onClick: () => void }) => {
  const characterData = getCharacterData(characterId);

  return (
    <div
      onClick={onClick}
      className="flex size-32 flex-col items-center justify-center gap-1 rounded-xs border border-taupe-700 hover:cursor-pointer hover:bg-taupe-800"
    >
      <Image
        src={characterData.imgData.src}
        alt={characterData.imgData.alt}
        width={80}
        height={80}
      />
      <h2 className="text-sm font-semibold">{characterData.name}</h2>
    </div>
  );
};

export default OptionTemplate;
