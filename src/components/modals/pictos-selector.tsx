import { useBuild } from '@/src/context/build-context';
import { Modal } from '@/src/context/modal-context';
import PICTOS from '@/src/data/pictos';
import { PictoData } from '@/src/types';
import Image from 'next/image';

const PictoOption = ({
  pictoData,
  isEquipped,
  onClick
}: {
  pictoData: PictoData;
  isEquipped: boolean;
  onClick: () => void;
}) => {
  return (
    <div
      onClick={onClick}
      className={`${isEquipped ? 'bg-taupe-700 hover:bg-taupe-600' : 'hover:bg-taupe-800'} flex w-76 flex-col gap-2 border border-taupe-700 p-2 hover:cursor-pointer`}
    >
      <div>
        <Image
          src={`/pictos/${pictoData.id}.png`}
          alt={`${pictoData.name} Picto`}
          width={54}
          height={54}
        />
      </div>
      <h2>{pictoData.name}</h2>
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

  function handleChange(newPictoId: PictoData['id']) {
    changePicto(selectedSlot, newPictoId);
    onClose();
  }

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      className="scrollbar-thumb-taupe-600 scrollbar-track-taupe-800 scrollbar-thin flex h-180 w-238.5 flex-wrap gap-2 overflow-y-auto rounded-xs bg-taupe-900 p-2"
    >
      {PICTOS.map((pic) => (
        <PictoOption
          isEquipped={pictosIds.includes(pic.id)}
          pictoData={pic}
          onClick={() => handleChange(pic.id)}
        />
      ))}
    </Modal>
  );
};

export default PictosSelector;
