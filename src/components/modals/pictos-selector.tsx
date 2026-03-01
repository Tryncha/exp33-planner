import { useBuild } from '@/src/context/build-context';
import { Modal } from '@/src/context/modal-context';
import PICTOS from '@/src/data/pictos';
import { formatPictoStats } from '@/src/lib/utils';
import { Picto } from '@/src/types';
import { useLocale } from 'next-intl';
import Image from 'next/image';

const PictoOption = ({
  pictoData,
  isEquipped,
  onClick
}: {
  pictoData: Picto;
  isEquipped: boolean;
  onClick: () => void;
}) => {
  const locale = useLocale();

  return (
    <div
      onClick={onClick}
      className={`${isEquipped ? 'bg-taupe-700 hover:bg-taupe-600' : 'hover:bg-taupe-800'} flex w-84 items-center justify-between gap-2 border border-taupe-700 px-4 py-2 hover:cursor-pointer`}
    >
      <div className="flex w-8 items-center justify-center">
        <Image
          src={`/pictos/${pictoData.id}.png`}
          alt={`${pictoData[locale].name} Picto`}
          width={54 / 2}
          height={54 / 2}
        />
      </div>
      <div className="flex flex-col items-center">
        <h2 className="text-lg font-semibold">{pictoData[locale].name}</h2>
        <span className="text-xs">{formatPictoStats(pictoData.stats)}</span>
        <p className="mt-2 text-center text-sm">{pictoData[locale].effect}</p>
      </div>
      <span className="text-xl font-bold">{pictoData.luminaPoints}</span>
    </div>
  );
};

const PictosSelector = ({
  selectedSlot,
  isOpen,
  onClose
}: {
  selectedSlot: number;
  isOpen: boolean;
  onClose: () => void;
}) => {
  const { build, changePicto } = useBuild();
  const { pictosIds } = build;

  function handleChange(newPictoId: Picto['id']) {
    changePicto(selectedSlot, newPictoId);
    onClose();
  }

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      className="scrollbar-thumb-taupe-600 scrollbar-track-taupe-800 scrollbar-thin flex h-180 w-348.5 flex-wrap gap-2 overflow-y-auto rounded-xs bg-taupe-900 p-2"
    >
      {PICTOS.map((pic) => (
        <PictoOption
          key={pic.id}
          isEquipped={pictosIds.includes(pic.id)}
          pictoData={pic}
          onClick={() => handleChange(pic.id)}
        />
      ))}
    </Modal>
  );
};

export default PictosSelector;
