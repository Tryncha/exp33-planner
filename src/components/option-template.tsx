import Image from 'next/image';
import { CharacterData } from '../types';
import { getTemplateData } from '../lib/utils';

const OptionTemplate = ({ characterId, onClick }: { characterId: CharacterData['id']; onClick: () => void }) => {
  const templateData = getTemplateData(characterId);

  return (
    <div
      onClick={onClick}
      className="flex size-32 flex-col items-center justify-center gap-1 rounded-xs border border-taupe-700 hover:cursor-pointer hover:bg-taupe-800"
    >
      <Image
        src={templateData.imgData.src}
        alt={templateData.imgData.alt}
        width={80}
        height={80}
      />
      <h2 className="text-sm font-semibold">{templateData.characterName}</h2>
    </div>
  );
};

export default OptionTemplate;
