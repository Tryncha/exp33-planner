import { useId } from 'react';

const StatOutput = ({ label, value }: { label: string; value: string }) => {
  const outputId = useId();

  return (
    <div className="flex w-64 gap-2">
      <label
        htmlFor={outputId}
        className="flex-1 font-semibold"
      >
        {label}
      </label>
      <output
        id={outputId}
        className="flex-1 border border-taupe-700 text-center font-bold"
      >
        {value}
      </output>
    </div>
  );
};

export default StatOutput;
