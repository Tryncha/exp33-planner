import { useBuild } from '@/src/context/build-context';
import { Modal } from '@/src/context/modal-context';
import SKILLS from '@/src/data/skills';
import { SkillData } from '@/src/types';
import Image from 'next/image';
import Diamond from '../diamond';

const SkillOption = ({
  skillData,
  isEquipped,
  onClick
}: {
  skillData: SkillData;
  isEquipped: boolean;
  onClick: () => void;
}) => {
  return (
    <div
      onClick={onClick}
      className={`${isEquipped ? 'bg-taupe-700 hover:bg-taupe-600' : 'hover:bg-taupe-800'} flex w-76 flex-col gap-2 border border-taupe-700 p-2 hover:cursor-pointer`}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Image
            src={skillData.imgData.src}
            alt={skillData.imgData.alt}
            width={skillData.imgData.width}
            height={skillData.imgData.height}
          />
          <h2 className="text-lg font-semibold">{skillData.name}</h2>
        </div>
        <Diamond className="mx-2 flex size-6 rotate-45 items-center justify-center border border-blue-300 bg-blue-950 font-semibold text-blue-300">
          {skillData.cost}
        </Diamond>
      </div>
      <p className="text-sm">{skillData.description}</p>
    </div>
  );
};

const SkillsSelector = ({
  selectedSlot,
  isOpen,
  onClose
}: {
  selectedSlot: number;
  isOpen: boolean;
  onClose: () => void;
}) => {
  const { build, changeSkil } = useBuild();
  const { skillIds } = build;

  function handleChange(newSkillId: SkillData['id']) {
    changeSkil(selectedSlot, newSkillId);
    onClose();
  }

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      className="flex w-236 flex-wrap gap-2 rounded-xs bg-taupe-900 p-2"
    >
      {SKILLS.map((skill) => (
        <SkillOption
          key={skill.id}
          skillData={skill}
          isEquipped={skillIds.includes(skill.id)}
          onClick={() => handleChange(skill.id)}
        />
      ))}
    </Modal>
  );
};

export default SkillsSelector;
