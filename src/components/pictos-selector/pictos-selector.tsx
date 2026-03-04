import { useBuild } from '@/src/context/build-context';
import { Modal } from '@/src/context/modal-context';
import PICTOS from '@/src/data/pictos';
import { PICTO_CATEGORIES, PICTO_STATS } from '@/src/lib/constants';
import { formatPictoStats } from '@/src/lib/utils';
import { Picto, PictoCategory, PictoStat } from '@/src/types';
import { ArrowDownUp } from 'lucide-react';
import { useLocale, useTranslations } from 'next-intl';
import Image from 'next/image';
import { useState } from 'react';

const PictoOption = ({
  pictoData,
  isEquipped,
  onClick
}: {
  pictoData: Picto;
  isEquipped: boolean;
  onClick: () => void;
}) => {
  const t = useTranslations('Stats');
  const locale = useLocale();

  return (
    <div
      onClick={onClick}
      className={`${isEquipped ? 'bg-taupe-700 hover:bg-taupe-600' : 'hover:bg-taupe-800'} flex h-30 w-72 flex-col justify-around gap-2 border border-taupe-700 px-4 py-2 hover:cursor-pointer`}
    >
      <div className="flex items-center justify-between gap-2">
        <Image
          src={`/pictos/${pictoData.id}.png`}
          alt={`${pictoData[locale].name} Picto`}
          width={28}
          height={28}
        />
        <div className="flex flex-1 flex-col items-center">
          <h2 className="text-center text-base/5 font-semibold">{pictoData[locale].name}</h2>
          <span className="mt-0.5 text-center text-xs">
            {formatPictoStats(pictoData.stats, {
              speed: t('speed'),
              critRate: t('critRate'),
              health: t('health'),
              defense: t('defense')
            })}
          </span>
        </div>
        <span className="w-7 text-center text-lg font-semibold">{pictoData.luminaPoints}</span>
      </div>
      <p className="text-center text-xs">{pictoData[locale].effect}</p>
    </div>
  );
};

const PictosSelector = ({
  selectedSlot,
  isOpen,
  onClose
}: {
  selectedSlot: number;
  isOpen: boolean;
  onClose: () => void;
}) => {
  const tStats = useTranslations('Stats');
  const tPictos = useTranslations('Pictos');
  const locale = useLocale();

  const { build, changePicto } = useBuild();
  const { pictosIds } = build;

  const [filterByName, setFilterByName] = useState('');
  const [filterByStats, setFilterByStats] = useState<PictoStat[]>([]);
  const [filterByCategories, setFilterByCategories] = useState<PictoCategory[]>([]);

  const [sortByLumina, setSortByLumina] = useState<'desc' | 'asc' | null>(null);

  function toggleFilterByStat(newStat: PictoStat) {
    if (!filterByStats.includes(newStat)) {
      setFilterByStats(filterByStats.concat(newStat));
    } else {
      setFilterByStats(filterByStats.filter((stat) => stat !== newStat));
    }
  }

  function toggleFilterByCategories(newCategory: PictoCategory) {
    if (!filterByCategories.includes(newCategory)) {
      setFilterByCategories(filterByCategories.concat(newCategory));
    } else {
      setFilterByCategories(filterByCategories.filter((cat) => cat !== newCategory));
    }
  }

  function handleChange(newPictoId: Picto['id']) {
    changePicto(selectedSlot, newPictoId);
    onClose();
  }

  function toggleSortByLumina() {
    if (!sortByLumina) {
      setSortByLumina('desc');
    } else if (sortByLumina === 'desc') {
      setSortByLumina('asc');
    } else {
      setSortByLumina(null);
    }
  }

  const statsFilter = (pic: Picto) => (!filterByStats.length ? pic : filterByStats.every((stat) => pic.stats[stat]));
  const categoriesFilter = (pic: Picto) =>
    !filterByCategories.length ? pic : pic.categories.some((cat) => filterByCategories.includes(cat));
  const nameFilter = (pic: Picto) => pic[locale].name.toLowerCase().includes(filterByName.toLowerCase());

  const alphabeticallySort = (a: Picto, b: Picto) =>
    a[locale].name.localeCompare(b[locale].name, locale, { sensitivity: 'base' });
  const luminaSort = (a: Picto, b: Picto) =>
    sortByLumina ? (sortByLumina === 'desc' ? b.luminaPoints - a.luminaPoints : a.luminaPoints - b.luminaPoints) : 0;

  const filteredPictos = PICTOS.filter(statsFilter)
    .filter(categoriesFilter)
    .filter(nameFilter)
    .sort(alphabeticallySort)
    .sort(luminaSort);

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      className="flex gap-2 rounded-xs bg-taupe-900 p-4"
    >
      {/* Left column */}
      <section className="3xl:w-73 flex h-fit w-57 flex-col gap-2">
        <div className="flex gap-1">
          <input
            type="text"
            value={filterByName}
            onChange={(e) => setFilterByName(e.target.value)}
            placeholder={tPictos('searchByName')}
            className="h-7 flex-1 border border-taupe-700 px-2 text-sm placeholder:italic"
          />
          <button
            onClick={toggleSortByLumina}
            className="flex w-7 cursor-pointer items-center justify-center border border-taupe-700"
          >
            <ArrowDownUp size={18} />
          </button>
        </div>
        <hr className="border border-taupe-700" />
        <div className="flex flex-wrap gap-1">
          {PICTO_STATS.map((stat) => (
            <button
              key={stat}
              onClick={() => toggleFilterByStat(stat)}
              className={`${filterByStats.includes(stat) ? 'bg-taupe-700 hover:bg-taupe-600' : 'hover:bg-taupe-800'} 3xl:w-36 h-7 w-28 border border-taupe-700 px-2 text-sm hover:cursor-pointer`}
            >
              {tStats(stat)}
            </button>
          ))}
        </div>
        <hr className="border border-taupe-700" />
        <div className="flex flex-wrap gap-1">
          {PICTO_CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => toggleFilterByCategories(cat)}
              className={`${filterByCategories.includes(cat) ? 'bg-taupe-700 hover:bg-taupe-600' : 'hover:bg-taupe-800'} 3xl:w-36 h-7 w-28 border border-taupe-700 px-2 text-sm hover:cursor-pointer`}
            >
              {tPictos(`category.${cat}`)}
            </button>
          ))}
        </div>
      </section>

      {/* Left column */}
      {/* Pictos */}
      <section className="scrollbar-thumb-taupe-600 scrollbar-track-taupe-800 scrollbar-thin flex h-182 w-298 flex-wrap content-start gap-2 overflow-y-scroll">
        {filteredPictos.map((pic) => (
          <PictoOption
            key={pic.id}
            isEquipped={pictosIds.includes(pic.id)}
            pictoData={pic}
            onClick={() => handleChange(pic.id)}
          />
        ))}
      </section>
    </Modal>
  );
};

export default PictosSelector;
