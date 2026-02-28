import Image from 'next/image';
import { useBuild } from '../context/build-context';
import { getSkillData } from '../lib/utils';
import { Skill } from '../types';
import SkillsSelector from './modals/skills-selector';
import { MouseEvent, useState } from 'react';
import { useModal } from '../context/modal-context';
import { X } from 'lucide-react';
import { useLocale, useTranslations } from 'next-intl';

const EmptySkillSlot = ({ onClick }: { onClick: () => void }) => {
  const t = useTranslations('Skills');

  return (
    <div
      onClick={onClick}
      className="flex h-18 items-center justify-center border border-taupe-700 text-sm text-taupe-500 italic hover:cursor-pointer"
    >
      {t('selectSkill')}
    </div>
  );
};

const SkillSlot = ({
  skillData,
  onClick,
  removeSkill
}: {
  skillData: Skill;
  onClick: () => void;
  removeSkill: (e: MouseEvent<HTMLButtonElement>) => void;
}) => {
  const locale = useLocale();
  const t = useTranslations('Skills');

  return (
    <div
      onClick={onClick}
      className="relative flex h-18 items-center gap-2 border border-taupe-700 p-2 hover:cursor-pointer hover:bg-taupe-900"
    >
      <Image
        src={`/skills/${skillData.characterId}/${skillData.id}.png`}
        alt={skillData[locale].name}
        width={48}
        height={48}
      />
      <div className="flex flex-1 flex-col">
        <span className="text-center font-semibold">{skillData[locale].name}</span>
        <span className="text-center text-xs">
          {t('cost')}: {skillData.cost}
        </span>
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
  const t = useTranslations('Skills');

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
      <h2 className="text-center font-semibold">{t('title')}</h2>
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
