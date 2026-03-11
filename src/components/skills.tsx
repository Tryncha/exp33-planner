import Image from 'next/image';
import { useBuild } from '../context/build-context';
import { getSkillData } from '../lib/utils';
import { Skill } from '../types';
import SkillsSelector from './skills-selector/skills-selector';
import { MouseEvent, useState } from 'react';
import { useModal } from '../context/modal-context';
import { X } from 'lucide-react';
import { useLocale, useTranslations } from 'next-intl';
import Diamond from './diamond';
import GRADIENT_SKILLS from '../data/gradient-skills';
import Tooltip from './tooltip';
import RichText from './rich-text';

const EmptySkillSlot = ({ onClick }: { onClick: () => void }) => {
  const t = useTranslations('Skills');

  return (
    <div
      onClick={onClick}
      className="relative flex h-18 items-center gap-2 p-2 hover:cursor-pointer hover:bg-taupe-900"
    >
      <Diamond className="absolute left-3.5 size-9 border border-taupe-700 bg-taupe-900" />
      <div className="mr-2 ml-6 flex flex-1 justify-between border border-taupe-700 p-1">
        <span className="pl-7 text-center text-sm/5 text-taupe-400">{t('selectSkill')}</span>
      </div>
    </div>
  );

  return (
    <div
      onClick={onClick}
      className="flex h-18 items-center justify-center border border-taupe-700 text-sm text-taupe-500 hover:cursor-pointer hover:bg-taupe-900"
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
  const [isHovering, setIsHovering] = useState(false);

  return (
    <div
      onClick={onClick}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      className="relative flex h-18 items-center gap-4 px-2 hover:cursor-pointer hover:bg-taupe-900"
    >
      <Tooltip
        isHovering={isHovering}
        className="w-md border border-taupe-700 bg-taupe-800 p-2"
      >
        <RichText textToEnrich={skillData[locale].description} />
      </Tooltip>

      <Image
        src={`/skills/${skillData.characterId}/${skillData.id}.png`}
        alt={skillData[locale].name}
        width={48}
        height={48}
        className="absolute"
      />
      <div className="relative mr-2 ml-6 flex flex-1 items-center justify-between border border-taupe-700 p-1">
        <span className="pr-4 pl-6 text-center text-sm/5 font-semibold">{skillData[locale].name}</span>
        <Diamond className="absolute -right-2.5 flex size-5 rotate-45 items-center justify-center border border-blue-300 bg-blue-950 text-sm font-semibold text-blue-300">
          {skillData.cost}
        </Diamond>
      </div>
      <button
        onClick={removeSkill}
        className="rounded-xs text-red-300 transition-colors hover:cursor-pointer hover:bg-red-950 active:bg-red-800"
      >
        <X
          strokeWidth={3}
          size={20}
        />
      </button>
    </div>
  );
};

const GradientSkill = ({ gradientSkillData }: { gradientSkillData: Skill }) => {
  const locale = useLocale();
  const [isHovering, setIsHovering] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      className="relative flex h-18 items-center gap-4 px-2 hover:bg-taupe-900"
    >
      <Tooltip
        isHovering={isHovering}
        className="w-md border border-taupe-700 bg-taupe-800 p-2"
      >
        <RichText textToEnrich={gradientSkillData[locale].description} />
      </Tooltip>
      <Image
        src={`/gradient-skills/${gradientSkillData.characterId}/${gradientSkillData.id}.png`}
        alt={gradientSkillData[locale].name}
        width={48}
        height={48}
        className="absolute"
      />
      <div className="relative mr-2 ml-6 flex flex-1 items-center justify-between border border-taupe-700 p-1">
        <span className="pr-4 pl-6 text-center text-sm/5 font-semibold">{gradientSkillData[locale].name}</span>
        <Diamond className="absolute -right-2.5 flex size-5 rotate-45 items-center justify-center border border-gray-300 bg-gray-950 text-sm font-semibold text-gray-300">
          {gradientSkillData.cost}
        </Diamond>
      </div>
    </div>
  );
};

const Skills = () => {
  const { build, changeSkill } = useBuild();
  const { characterId, skillIds } = build;

  const { openModal, isModalOpen, closeAll } = useModal();
  const [selectedSlot, setSelectedSlot] = useState(0);

  const skillsData = skillIds.map((skId) => getSkillData(skId));
  const gradientSkillsData = GRADIENT_SKILLS.filter((grSk) => grSk.characterId === characterId);

  function openModalAndSetSlot(indexSlot: number) {
    openModal('skills');
    setSelectedSlot(indexSlot);
  }

  function removeSkill(e: MouseEvent<HTMLButtonElement>, indexSlot: number) {
    e.stopPropagation();
    changeSkill(indexSlot, '');
  }

  return (
    <div className="flex gap-2 border border-taupe-700 p-2">
      <SkillsSelector
        selectedSlot={selectedSlot}
        isOpen={isModalOpen.skills}
        onClose={closeAll}
      />

      {/* Basic Skills */}
      <div className="grid flex-1 grid-cols-2 grid-rows-2">
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

      {/* Gradient Skills */}
      {characterId !== 'gustave' && (
        <div className="flex w-56 flex-col justify-between border-l border-taupe-700 pl-2">
          {gradientSkillsData.map((grSk) => (
            <GradientSkill
              key={grSk.id}
              gradientSkillData={grSk}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Skills;
