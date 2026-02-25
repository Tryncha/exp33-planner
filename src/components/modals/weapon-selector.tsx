import { Modal } from '@/src/context/modal-context';
import WEAPONS from '@/src/data/weapons';
import Image from 'next/image';

const WeaponSelector = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      className="flex flex-col gap-2 rounded-xs bg-taupe-900 p-2"
    >
      {WEAPONS.map((wpn) => (
        <div
          key={wpn.id}
          className="border border-taupe-700"
        >
          <Image
            src={wpn.imgData.src}
            alt={wpn.imgData.alt}
            width={wpn.imgData.width}
            height={wpn.imgData.height}
          />
          <h2>{wpn.name}</h2>
        </div>
      ))}
    </Modal>
  );
};

export default WeaponSelector;
