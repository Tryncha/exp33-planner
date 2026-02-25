import { ChangeEvent, useId } from 'react';
import { useBuild } from '../context/build-context';
import { AttributeId } from '../types';

const AttributeInput = ({ attributeId }: { attributeId: AttributeId }) => {
  const inputId = useId();

  const { build, changeStat } = useBuild();
  const { attributes } = build;

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    let newValue = Number(event.target.value);

    if (newValue < 0) {
      newValue = 0;
    }

    if (newValue > 99) {
      newValue = 99;
    }

    changeStat(attributeId, newValue);
  }

  return (
    <div className="flex w-64">
      <label
        htmlFor={inputId}
        className="flex-1 font-semibold capitalize"
      >
        {attributeId}
      </label>
      <input
        id={inputId}
        type="number"
        min={0}
        max={99}
        value={attributes[attributeId]}
        onChange={handleChange}
        className="flex-1 border border-taupe-700 text-center"
      />
    </div>
  );
};

export default AttributeInput;
