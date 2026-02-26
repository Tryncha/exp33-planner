import { useBuild } from '@/src/context/build-context';
import { Modal } from '@/src/context/modal-context';
import PICTOS from '@/src/data/pictos';
import { PictoData } from '@/src/types';
import Image from 'next/image';

const LuminaOption = ({
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
      className={`${isEquipped && 'bg-taupe-700'} border border-taupe-700`}
    >
      <div>
        <Image
          src={pictoData.imgData.src}
          alt={pictoData.imgData.alt}
          width={pictoData.imgData.width}
          height={pictoData.imgData.height}
        />
      </div>
      <h2>{pictoData.name}</h2>
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
      className="flex flex-col gap-2 rounded-xs bg-taupe-900 p-2"
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
