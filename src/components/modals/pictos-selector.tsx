import { useBuild } from '@/src/context/build-context';
import { Modal } from '@/src/context/modal-context';
import PICTOS from '@/src/data/pictos';
import { PICTO_CATEGORIES } from '@/src/lib/constants';
import { formatPictoStats } from '@/src/lib/utils';
import { Picto, PictoCategory } from '@/src/types';
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
      className={`${isEquipped ? 'bg-taupe-700 hover:bg-taupe-600' : 'hover:bg-taupe-800'} flex h-30 w-72 flex-col gap-2 border border-taupe-700 px-4 py-2 hover:cursor-pointer`}
    >
      <div className="flex items-center justify-between gap-2">
        <Image
          src={`/pictos/${pictoData.id}.png`}
          alt={`${pictoData[locale].name} Picto`}
          width={32}
          height={32}
        />
        <div className="flex flex-1 flex-col items-center">
          <h2 className="font-semibold">{pictoData[locale].name}</h2>
          <span className="text-xs">
            {formatPictoStats(pictoData.stats, {
              speed: t('speed'),
              critRate: t('critRate'),
              health: t('health'),
              defense: t('defense')
            })}
          </span>
        </div>
        <span className="text-lg font-semibold">{pictoData.luminaPoints}</span>
      </div>
      <span className="flex flex-1 items-center justify-center text-xs">{pictoData[locale].effect}</span>
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
  const t = useTranslations('Pictos');
  const locale = useLocale();

  const { build, changePicto } = useBuild();
  const { pictosIds } = build;

  const [filterByName, setFilterByName] = useState('');
  const [filterByCategories, setFilterByCategories] = useState<PictoCategory[]>([]);

  const [sortByLumina, setSortByLumina] = useState<'desc' | 'asc' | null>(null);

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

  const categoriesFilter = (pic: Picto) =>
    !filterByCategories.length ? pic : pic.categories.some((cat) => filterByCategories.includes(cat));
  const nameFilter = (pic: Picto) => pic[locale].name.toLowerCase().includes(filterByName.toLowerCase());

  const alphabeticallySort = (a: Picto, b: Picto) =>
    a[locale].name.localeCompare(b[locale].name, locale, { sensitivity: 'base' });
  const luminaSort = (a: Picto, b: Picto) =>
    sortByLumina ? (sortByLumina === 'desc' ? b.luminaPoints - a.luminaPoints : a.luminaPoints - b.luminaPoints) : 0;

  const filteredPictos = PICTOS.filter(categoriesFilter).filter(nameFilter).sort(alphabeticallySort).sort(luminaSort);

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      className="flex h-190 gap-2 rounded-xs bg-taupe-900 p-4"
    >
      {/* Right column */}
      <section className="flex flex-col justify-between">
        {PICTO_CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => toggleFilterByCategories(cat)}
            className={`${filterByCategories.includes(cat) ? 'bg-taupe-700 hover:bg-taupe-600' : 'hover:bg-taupe-800'} w-42 border border-taupe-700 px-2 text-sm hover:cursor-pointer`}
          >
            {t(`category.${cat}`)}
          </button>
        ))}
      </section>

      {/* Left column */}
      <section className="flex flex-col gap-2">
        <div className="flex gap-2">
          <input
            type="text"
            value={filterByName}
            onChange={(e) => setFilterByName(e.target.value)}
            placeholder={t('searchByName')}
            className="flex-1 border border-taupe-700 px-2 text-sm placeholder:italic"
          />
          <button
            onClick={toggleSortByLumina}
            className="flex w-6 cursor-pointer items-center justify-center border border-taupe-700"
          >
            <ArrowDownUp size={18} />
          </button>
        </div>

        {/* Pictos */}
        <section className="scrollbar-thumb-taupe-600 scrollbar-track-taupe-800 scrollbar-thin flex h-190 w-301 flex-wrap content-start gap-2 overflow-y-scroll border border-taupe-700 p-2">
          {filteredPictos.map((pic) => (
            <PictoOption
              key={pic.id}
              isEquipped={pictosIds.includes(pic.id)}
              pictoData={pic}
              onClick={() => handleChange(pic.id)}
            />
          ))}
        </section>
      </section>
    </Modal>
  );
};

export default PictosSelector;
