import { MouseEvent, useId } from 'react';
import { useBuild } from '../context/build-context';
import { AttributeId } from '../types';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const AttributeInput = ({ label, attributeId }: { label: string; attributeId: AttributeId }) => {
  const inputId = useId();

  const { build, changeStat } = useBuild();
  const { attributes } = build;

  const totalValues = Object.values(attributes).reduce((acc, sum) => acc + sum, 0);
  const isLimitReached = totalValues >= 99 * 3;

  const attrValue = attributes[attributeId];

  function decreaseStat(event: MouseEvent) {
    const amount = event.shiftKey ? 10 : event.ctrlKey ? 5 : 1;
    changeStat(attributeId, attributes[attributeId] - amount);
  }

  function increaseStat(event: MouseEvent) {
    const amount = event.shiftKey ? 10 : event.ctrlKey ? 5 : 1;
    changeStat(attributeId, attributes[attributeId] + amount);
  }

  return (
    <div className="flex w-64">
      <label
        htmlFor={inputId}
        className="flex-1 font-semibold"
      >
        {label}
      </label>
      <div className="flex flex-1">
        <button
          onClick={decreaseStat}
          className="hover:cursor-pointer"
        >
          <ChevronLeft />
        </button>
        <output
          id={inputId}
          className="flex-1 border border-taupe-700 text-center"
        >
          {attrValue}
        </output>
        <button
          onClick={increaseStat}
          disabled={isLimitReached}
          className="hover:cursor-pointer"
        >
          <ChevronRight />
        </button>
      </div>
    </div>
  );
};

export default AttributeInput;
