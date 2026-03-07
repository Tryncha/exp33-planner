import { useTranslations } from 'next-intl';
import { BreakIcon, ElementIcon, MonocoMaskIcon, StainIcon } from '../icons';
import { CharacterId, LuneStain, MonocoMask, SkillFiltersType } from '../../types';
import { Dispatch, SetStateAction } from 'react';
import { ELEMENTS, STAINS, MONOCO_MASKS } from '../../lib/constants';

const SkillFilters = ({
  character,
  filters,
  setFilters
}: {
  character: CharacterId;
  filters: SkillFiltersType;
  setFilters: Dispatch<SetStateAction<SkillFiltersType>>;
}) => {
  const t = useTranslations();

  function toggleFilterByElement(newElement: LuneStain) {
    if (filters.byLuneElement === newElement) {
      setFilters({ ...filters, byLuneElement: '' });
    } else {
      setFilters({ ...filters, byLuneElement: newElement });
    }
  }

  function toggleFilterByMask(newMask: MonocoMask) {
    if (filters.byMask === newMask) {
      setFilters({ ...filters, byMask: '' });
    } else {
      setFilters({ ...filters, byMask: newMask });
    }
  }

  return (
    <section className="flex justify-between gap-2">
      <input
        type="text"
        value={filters.byName}
        onChange={(e) => setFilters({ ...filters, byName: e.target.value })}
        placeholder={t('Pictos.searchByName')}
        className="flex-1 border border-taupe-700 px-2 text-sm placeholder:italic"
      />

      {/* Lune filters */}
      {character === 'lune' && (
        <div className="flex justify-between gap-1">
          {STAINS.filter((stn) => stn !== 'light').map((elem) => (
            <button
              key={elem}
              onClick={() => toggleFilterByElement(elem)}
              className={`${filters.byLuneElement === elem ? 'bg-taupe-700 hover:bg-taupe-600' : 'hover:bg-taupe-800'} border border-taupe-700 px-2 py-1 text-sm hover:cursor-pointer`}
            >
              <StainIcon element={elem} />
            </button>
          ))}
        </div>
      )}

      {/* Monoco filters */}
      {character === 'monoco' && (
        <div className="flex justify-between gap-1">
          {MONOCO_MASKS.map((mask) => (
            <button
              key={mask}
              onClick={() => toggleFilterByMask(mask)}
              className={`${filters.byMask === mask ? 'bg-taupe-700 hover:bg-taupe-600' : 'hover:bg-taupe-800'} border border-taupe-700 px-2 py-1 text-sm hover:cursor-pointer`}
            >
              <MonocoMaskIcon mask={mask} />
            </button>
          ))}
        </div>
      )}

      <div className="flex justify-between gap-1">
        <button
          onClick={() => setFilters({ ...filters, canBreak: !filters.canBreak })}
          className={`${filters.canBreak ? 'bg-taupe-700 hover:bg-taupe-600' : 'hover:bg-taupe-800'} border border-taupe-700 px-2 py-1 text-sm hover:cursor-pointer`}
        >
          <BreakIcon />
        </button>
      </div>
    </section>
  );
};

export default SkillFilters;
