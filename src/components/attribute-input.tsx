import { MouseEvent, useId, useState } from 'react';
import { useBuild } from '../context/build-context';
import { AttributeId } from '../types';
import { ChevronLeft, ChevronRight, HelpCircle } from 'lucide-react';
import Tooltip from './tooltip';
import { useTranslations } from 'next-intl';

const AttributeInput = ({ label, attributeId }: { label: string; attributeId: AttributeId }) => {
  const t = useTranslations('Attributes');

  const inputId = useId();

  const { build, changeStat } = useBuild();
  const { attributes } = build;

  const [isOutputHovering, setIsOutputHovering] = useState(false);

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
      <div className="flex flex-1 items-center">
        <label
          htmlFor={inputId}
          className="flex-1 font-semibold"
        >
          {label}
        </label>
        <div className="relative hover:cursor-help">
          <Tooltip
            isHovering={isOutputHovering}
            direction="right"
            className="w-64 bg-taupe-700 p-2 text-center text-sm font-semibold"
          >
            {t(`hints.${attributeId}`)}
          </Tooltip>
          <HelpCircle
            size={18}
            strokeWidth={1.5}
            onMouseEnter={() => setIsOutputHovering(true)}
            onMouseLeave={() => setIsOutputHovering(false)}
            className="text-taupe-400"
          />
        </div>
      </div>
      <div className="flex flex-1">
        <button
          onClick={decreaseStat}
          className="hover:cursor-pointer"
        >
          <ChevronLeft />
        </button>
        <div className="relative flex flex-1">
          <output
            id={inputId}
            className="flex-1 border border-taupe-700 text-center font-bold"
          >
            {attrValue}
          </output>
        </div>
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
