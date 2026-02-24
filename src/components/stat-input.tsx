import { ChangeEvent, useId } from 'react';
import { useBuild } from '../context/build-context';
import { Stat } from '../types';

const StatInput = ({ statId, value }: { statId: Stat; value: number }) => {
  const inputId = useId();

  const { changeStat } = useBuild();

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    const newValue = Number(event.target.value);
    changeStat(statId, newValue);
  }

  return (
    <div className="flex">
      <label
        htmlFor={inputId}
        className="capitalize"
      >
        {statId}
      </label>
      <input
        id={inputId}
        type="number"
        value={value}
        onChange={handleChange}
        className="border border-taupe-700 text-center"
      />
    </div>
  );
};

export default StatInput;
