import Image from 'next/image';
import { useBuild } from '../context/build-context';
import { getSkillData } from '../lib/utils';
import { SkillData } from '../types';
import SkillsSelector from './modals/skills-selector';
import { MouseEvent, useState } from 'react';
import { useModal } from '../context/modal-context';
import { X } from 'lucide-react';

const EmptySkillSlot = ({ onClick }: { onClick: () => void }) => {
  return (
    <div
      onClick={onClick}
      className="flex h-18 items-center justify-center border border-taupe-700 text-taupe-500 italic hover:cursor-pointer"
    >
      Select a skill
    </div>
  );
};

const SkillSlot = ({
  skillData,
  onClick,
  removeSkill
}: {
  skillData: SkillData;
  onClick: () => void;
  removeSkill: (e: MouseEvent<HTMLButtonElement>) => void;
}) => {
  return (
    <div
      onClick={onClick}
      className="relative flex h-18 items-center gap-2 border border-taupe-700 p-2 hover:cursor-pointer hover:bg-taupe-900"
    >
      <Image
        src={skillData.imgData.src}
        alt={skillData.imgData.alt}
        width={skillData.imgData.width}
        height={skillData.imgData.height}
      />
      <div className="flex flex-1 flex-col">
        <span className="text-center font-semibold">{skillData.name}</span>
        <span className="text-center text-xs">Cost: {skillData.cost}</span>
      </div>
      <button
        onClick={removeSkill}
        className="absolute top-2 right-2 rounded-xs text-red-300 transition-colors hover:cursor-pointer hover:bg-red-950 active:bg-red-800"
      >
        <X strokeWidth={3} />
      </button>
    </div>
  );
};

const Skills = () => {
  const { build, changeSkil } = useBuild();
  const { skillIds } = build;

  const { openModal, isModalOpen, closeAll } = useModal();
  const [selectedSlot, setSelectedSlot] = useState(0);

  const skillsData = skillIds.map((skId) => getSkillData(skId));

  function openModalAndSetSlot(indexSlot: number) {
    openModal('skills');
    setSelectedSlot(indexSlot);
  }

  function removeSkill(e: MouseEvent<HTMLButtonElement>, indexSlot: number) {
    e.stopPropagation();
    changeSkil(indexSlot, '');
  }

  return (
    <div className="flex w-md flex-col gap-2 border border-taupe-700 p-2">
      <SkillsSelector
        selectedSlot={selectedSlot}
        isOpen={isModalOpen.skills}
        onClose={closeAll}
      />
      <h2 className="text-center font-semibold">Skills</h2>
      <div className="grid grid-cols-2 grid-rows-2 gap-2">
        {skillsData.map((skill, indexSlot) =>
          !skill ? (
            <EmptySkillSlot
              key={`skill-${indexSlot}`}
              onClick={() => openModalAndSetSlot(indexSlot)}
            />
          ) : (
            <SkillSlot
              key={`skill-${indexSlot}`}
              skillData={skill}
              onClick={() => openModalAndSetSlot(indexSlot)}
              removeSkill={(e) => removeSkill(e, indexSlot)}
            />
          )
        )}
      </div>
    </div>
  );
};

export default Skills;
