import { useBuild } from '@/src/context/build-context';
import { Modal } from '@/src/context/modal-context';
import SKILLS from '@/src/data/skills';
import { LuneSkill, MonocoSkill, ScielSkill, Skill, SkillFiltersType } from '@/src/types';
import Image from 'next/image';
import Diamond from '../diamond';
import { useLocale } from 'next-intl';
import { BreakIcon, ChargeIcon, ElementIcon, StainIcon } from '../icons';
import { useState } from 'react';
import SkillFilters from './skill-filters';
import ParsedDescription from '../parsed-description';
import RichText from '../rich-text';

const SkillOption = ({
  skillData,
  isEquipped,
  onClick
}: {
  skillData: Skill;
  isEquipped: boolean;
  onClick: () => void;
}) => {
  const locale = useLocale();

  return (
    <div
      onClick={onClick}
      className={`${isEquipped ? 'bg-taupe-700 hover:bg-taupe-600' : 'hover:bg-taupe-800'} flex h-48 w-104 flex-col gap-2 border border-taupe-700 p-2 hover:cursor-pointer`}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Image
            src={`/skills/${skillData.characterId}/${skillData.id}.png`}
            alt={`${skillData[locale].name} Skill`}
            width={48}
            height={48}
          />
          <h2 className="font-semibold">{skillData[locale].name}</h2>
        </div>
        <div className="flex items-center gap-1">
          {skillData.characterId === 'lune' && skillData.stains.length > 0 && (
            <div className="flex items-center gap-1">
              <span className="text-xl"> + </span>
              {skillData.stains.map((stn, i) => (
                <StainIcon
                  key={`${skillData.id}-stain-${i}`}
                  stain={stn}
                />
              ))}
            </div>
          )}

          {skillData.characterId === 'sciel' && (
            <Diamond className="mx-1 border border-taupe-500 p-0.5">
              <ChargeIcon charge={skillData.charge} />
            </Diamond>
          )}

          {skillData.canBreak && (
            <Diamond className="mx-2 flex size-4 rotate-45 items-center justify-center border border-taupe-300 font-semibold">
              <BreakIcon />
            </Diamond>
          )}
          <Diamond className="mx-2 flex size-6 rotate-45 items-center justify-center border border-blue-300 bg-blue-950 font-semibold text-blue-300">
            {skillData.cost}
          </Diamond>
        </div>
      </div>
      <ParsedDescription description={skillData[locale].description} />
      <RichText textToEnrich={skillData[locale].description} />
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
  const locale = useLocale();

  const { build, changeSkill } = useBuild();
  const { characterId, skillIds } = build;

  const [filters, setFilters] = useState<SkillFiltersType>({
    byName: '',
    canBreak: false,
    byLuneStain: '',
    byScielCharge: '',
    byMonocoMask: ''
  });

  function handleChange(newSkillId: Skill['id']) {
    changeSkill(selectedSlot, newSkillId);
    onClose();
  }

  const filteredSkills = SKILLS
    // Filter by Character Skills
    .filter((sk: Skill) => sk.characterId === characterId)
    // Filter by Name
    .filter((sk: Skill) => sk[locale].name.toLowerCase().includes(filters.byName.toLowerCase()))
    // Filter by Can Break
    .filter((sk: Skill) => (!filters.canBreak ? sk : sk.canBreak))

    // Lune
    // filter by Stain
    .filter((sk: Skill) => (!filters.byLuneStain ? sk : (sk as LuneSkill).stains.includes(filters.byLuneStain)))

    // Sciel
    // filter by Charge
    .filter((sk: Skill) => (!filters.byScielCharge ? sk : (sk as ScielSkill).charge === filters.byScielCharge))

    // Monoco
    // filter by Mask
    // Al revés no funciona...
    .filter((sk: Skill) => (!filters.byMonocoMask ? sk : filters.byMonocoMask === (sk as MonocoSkill).buffedMask))

    // Sort alphabetically
    .sort((a: Skill, b: Skill) => a[locale].name.localeCompare(b[locale].name, locale, { sensitivity: 'base' }));

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      className="flex flex-col gap-2 rounded-xs bg-taupe-900 p-4"
    >
      {/* Filters */}
      <SkillFilters
        character={characterId}
        filters={filters}
        setFilters={setFilters}
      />

      {/* Skills */}
      <section className="scrollbar-thumb-taupe-600 scrollbar-track-taupe-800 scrollbar-thin flex h-160 w-7xl flex-wrap content-start gap-2 overflow-y-scroll">
        {filteredSkills.map((skill) => (
          <SkillOption
            key={skill.id}
            skillData={skill}
            isEquipped={skillIds.includes(skill.id)}
            onClick={() => handleChange(skill.id)}
          />
        ))}
      </section>
    </Modal>
  );
};

export default SkillsSelector;
