import { useTranslations } from 'next-intl';
import { BreakIcon, ChargeIcon, ElementIcon, MonocoMaskIcon, StainIcon } from '../icons';
import { CharacterId, LuneStain, MonocoMask, ScielCharge, SkillFiltersType } from '../../types';
import { Dispatch, SetStateAction } from 'react';
import { ELEMENTS, LUNE_STAINS, MONOCO_MASKS, SCIEL_CHARGES } from '../../lib/constants';

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

  function toggleFilterByStain(newStain: LuneStain) {
    if (filters.byLuneStain === newStain) {
      setFilters({ ...filters, byLuneStain: '' });
    } else {
      setFilters({ ...filters, byLuneStain: newStain });
    }
  }

  function toggleFilterByCharge(newCharge: ScielCharge) {
    if (filters.byScielCharge === newCharge) {
      setFilters({ ...filters, byScielCharge: '' });
    } else {
      setFilters({ ...filters, byScielCharge: newCharge });
    }
  }

  function toggleFilterByMask(newMask: MonocoMask) {
    if (filters.byMonocoMask === newMask) {
      setFilters({ ...filters, byMonocoMask: '' });
    } else {
      setFilters({ ...filters, byMonocoMask: newMask });
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
          {LUNE_STAINS.filter((stn) => stn !== 'light').map((stn) => (
            <button
              key={stn}
              onClick={() => toggleFilterByStain(stn)}
              className={`${filters.byLuneStain === stn ? 'bg-taupe-700 hover:bg-taupe-600' : 'hover:bg-taupe-800'} border border-taupe-700 px-2 py-1 text-sm hover:cursor-pointer`}
            >
              <StainIcon stain={stn} />
            </button>
          ))}
        </div>
      )}

      {/* Sciel filters */}
      {character === 'sciel' && (
        <div className="flex justify-between gap-1">
          {SCIEL_CHARGES.map((chr) => (
            <button
              key={chr}
              onClick={() => toggleFilterByCharge(chr)}
              className={`${filters.byScielCharge === chr ? 'bg-taupe-700 hover:bg-taupe-600' : 'hover:bg-taupe-800'} border border-taupe-700 px-2 py-1 text-sm hover:cursor-pointer`}
            >
              <ChargeIcon charge={chr} />
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
              className={`${filters.byMonocoMask === mask ? 'bg-taupe-700 hover:bg-taupe-600' : 'hover:bg-taupe-800'} border border-taupe-700 px-2 py-1 text-sm hover:cursor-pointer`}
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
