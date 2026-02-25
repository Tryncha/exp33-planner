import { useId } from 'react';
import { useBuild } from '../context/build-context';

const StatOutput = ({ label, value }: { label: string; value: string }) => {
  const outputId = useId();

  const { build, changeStat } = useBuild();
  const { attributes } = build;

  return (
    <div className="flex w-64">
      <label
        htmlFor={outputId}
        className="flex-1 font-semibold capitalize"
      >
        {label}
      </label>
      <output
        id={outputId}
        className="flex-1 border border-taupe-700 text-center"
      >
        {value}
      </output>
    </div>
  );
};

export default StatOutput;
