import { useBuild } from '@/src/context/build-context';
import { Modal } from '@/src/context/modal-context';
import WEAPONS from '@/src/data/weapons';
import { WeaponData } from '@/src/types';
import Image from 'next/image';

const WeaponSelector = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  const { changeWeapon } = useBuild();

  function handleChange(newWeaponId: WeaponData['id']) {
    changeWeapon(newWeaponId);
    onClose();
  }

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
          <div onClick={() => handleChange(wpn.id)}>
            <Image
              src={wpn.imgData.src}
              alt={wpn.imgData.alt}
              width={wpn.imgData.width}
              height={wpn.imgData.height}
            />
          </div>
          <h2>{wpn.name}</h2>
        </div>
      ))}
    </Modal>
  );
};

export default WeaponSelector;
