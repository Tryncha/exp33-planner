import { ChangeEvent, useId } from 'react';
import { useCharacters } from '../context/character-context';
import { Character, Stat } from '../types';

const StatInput = ({ stat, character }: { stat: Stat; character: Character }) => {
  const inputId = useId();

  const { changeStat } = useCharacters();

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    const newValue = Number(event.target.value);
    changeStat(stat, newValue, character.id);
  }

  return (
    <div className="flex">
      <label
        htmlFor={inputId}
        className="capitalize"
      >
        {stat}
      </label>
      <input
        id={inputId}
        type="number"
        value={character.stats[stat]}
        onChange={handleChange}
        className="border border-taupe-700 text-center"
      />
    </div>
  );
};

export default StatInput;
