import { useBuild } from '@/src/context/build-context';
import { Modal } from '@/src/context/modal-context';
import SKILLS from '@/src/data/skills';
import { SkillData } from '@/src/types';
import Image from 'next/image';

const SkillsSelector = ({
  selectedSlot,
  isOpen,
  onClose
}: {
  selectedSlot: number;
  isOpen: boolean;
  onClose: () => void;
}) => {
  const { changeSkil } = useBuild();

  function handleChange(newSkillId: SkillData['id']) {
    changeSkil(selectedSlot, newSkillId);
    onClose();
  }

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      className="flex flex-col gap-2 rounded-xs bg-taupe-900 p-2"
    >
      {SKILLS.map((pic) => (
        <div
          key={pic.id}
          onClick={() => handleChange(pic.id)}
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

export default SkillsSelector;
