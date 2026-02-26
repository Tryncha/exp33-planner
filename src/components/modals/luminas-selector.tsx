import { useBuild } from '@/src/context/build-context';
import { Modal } from '@/src/context/modal-context';
import PICTOS from '@/src/data/pictos';
import Image from 'next/image';

const LuminasSelector = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  const { addLumina } = useBuild();

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      className="flex flex-col gap-2 rounded-xs bg-taupe-900 p-2"
    >
      {PICTOS.map((pic) => (
        <div
          key={pic.id}
          onClick={() => addLumina(pic.id)}
          className="border border-taupe-700"
        >
          <div>
            <Image
              src={pic.imgData.src}
              alt={pic.imgData.alt}
              width={pic.imgData.width}
              height={pic.imgData.height}
            />
          </div>
          <h2>{pic.name}</h2>
        </div>
      ))}
    </Modal>
  );
};

export default LuminasSelector;
