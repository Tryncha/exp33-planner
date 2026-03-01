import { useBuild } from '@/src/context/build-context';
import { Modal } from '@/src/context/modal-context';
import PICTOS from '@/src/data/pictos';
import { formatPictoStats } from '@/src/lib/utils';
import { Picto } from '@/src/types';
import Image from 'next/image';

const LuminaOption = ({
  pictoData,
  isEquipped,
  onClick
}: {
  pictoData: Picto;
  isEquipped: boolean;
  onClick: () => void;
}) => {
  return (
    <div
      onClick={onClick}
      className={`${isEquipped ? 'bg-taupe-700 hover:bg-taupe-600' : 'hover:bg-taupe-800'} flex w-84 flex-col gap-1 border border-taupe-700 px-4 py-2 hover:cursor-pointer`}
    >
      <div className="flex items-center justify-between">
        <h2 className="font-semibold">{pictoData.name}</h2>
        <span className="font-bold">{pictoData.luminaPoints}</span>
      </div>
      <p className="text-xs">{pictoData.effect}</p>
    </div>
  );
};

const LuminasSelector = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  const { build, addLumina } = useBuild();
  const { luminasIds } = build;

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      className="scrollbar-thumb-taupe-600 scrollbar-track-taupe-800 scrollbar-thin flex h-180 w-348.5 flex-wrap gap-2 overflow-y-auto rounded-xs bg-taupe-900 p-2"
    >
      {PICTOS.map((pic) => (
        <LuminaOption
          key={pic.id}
          isEquipped={luminasIds.includes(pic.id)}
          pictoData={pic}
          onClick={() => addLumina(pic.id)}
        />
      ))}
    </Modal>
  );
};

export default LuminasSelector;
