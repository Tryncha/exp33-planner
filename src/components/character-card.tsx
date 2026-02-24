import Image from 'next/image';
import { CharacterData } from '../types';
import { CHARACTERS_DATA } from '../lib/constants';

const CharacterCard = ({ characterId }: { characterId: CharacterData['id'] }) => {
  const characterData = CHARACTERS_DATA.find((c) => c.id === characterId);

  if (!characterData) {
    throw new Error(`Character with id: ${characterId} not found...`);
  }

  return (
    <div className="flex w-30 items-center justify-center gap-1 rounded-xs border border-taupe-700 p-2 hover:cursor-pointer hover:bg-taupe-900">
      <Image
        src={characterData.imgData.src}
        alt={characterData.imgData.alt}
        width={characterData.imgData.width}
        height={characterData.imgData.height}
      />
      <div className="flex flex-1 flex-col items-center">
        <h2 className="text-xs font-semibold">{characterData.name}</h2>
        <span className="text-xs text-taupe-400">Level {characterData.level}</span>
      </div>
    </div>
  );
};

export default CharacterCard;
