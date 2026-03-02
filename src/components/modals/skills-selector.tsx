import { useBuild } from '@/src/context/build-context';
import { Modal } from '@/src/context/modal-context';
import SKILLS from '@/src/data/skills';
import { Skill } from '@/src/types';
import Image from 'next/image';
import Diamond from '../diamond';
import { useLocale } from 'next-intl';
import { BreakIcon } from '../icons';

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
      className={`${isEquipped ? 'bg-taupe-700 hover:bg-taupe-600' : 'hover:bg-taupe-800'} flex h-40 w-76 flex-col gap-2 border border-taupe-700 p-2 hover:cursor-pointer`}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Image
            src={`/skills/${skillData.characterId}/${skillData.id}.png`}
            alt={`${skillData[locale].name} Skill`}
            width={48}
            height={48}
          />
          <h2 className="text-lg/6 font-semibold">{skillData[locale].name}</h2>
        </div>
        <div className="flex items-center">
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
      <p className="text-sm">{skillData[locale].description}</p>
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

  const { build, changeSkil } = useBuild();
  const { characterId, skillIds } = build;

  function handleChange(newSkillId: Skill['id']) {
    changeSkil(selectedSlot, newSkillId);
    onClose();
  }

  const alphabeticallySort = (a: Skill, b: Skill) =>
    a[locale].name.localeCompare(b[locale].name, locale, { sensitivity: 'base' });

  const filteredSkills = SKILLS.filter((sk) => sk.characterId === characterId).sort(alphabeticallySort);

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      className="flex gap-2 rounded-xs bg-taupe-900 p-4"
    >
      <div className="flex border border-taupe-700 p-2">
        <div className="scrollbar-thumb-taupe-600 scrollbar-track-taupe-800 scrollbar-thin flex h-160 w-314 flex-wrap content-start gap-2 overflow-y-auto">
          {filteredSkills.map((skill) => (
            <SkillOption
              key={skill.id}
              skillData={skill}
              isEquipped={skillIds.includes(skill.id)}
              onClick={() => handleChange(skill.id)}
            />
          ))}
        </div>
      </div>
    </Modal>
  );
};

export default SkillsSelector;
