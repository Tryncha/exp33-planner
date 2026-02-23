import Image from 'next/image';
import { Character } from '../types';

const CharacterCard = ({ character }: { character: Character }) => {
  return (
    <div className="flex w-30 items-center justify-center gap-1 rounded-xs border border-taupe-700 p-2 hover:cursor-pointer hover:bg-taupe-900">
      <Image
        src={character.imgData.src}
        alt={character.imgData.alt}
        width={character.imgData.width}
        height={character.imgData.height}
      />
      <div className="flex flex-1 flex-col items-center">
        <h2 className="text-xs font-semibold">{character.name}</h2>
        <span className="text-xs text-taupe-400">Level {character.level}</span>
      </div>
    </div>
  );
};

export default CharacterCard;
