import { useBuild } from '@/src/context/build-context';
import { Modal } from '@/src/context/modal-context';
import PICTOS from '@/src/data/pictos';
import { PICTO_CATEGORIES } from '@/src/lib/constants';
import { Picto, PictoCategory } from '@/src/types';
import { ArrowDownUp } from 'lucide-react';
import { useLocale, useTranslations } from 'next-intl';
import { useState } from 'react';

const LuminaOption = ({
  pictoData,
  isEquipped,
  onClick
}: {
  pictoData: Picto;
  isEquipped: boolean;
  onClick: () => void;
}) => {
  const locale = useLocale();

  return (
    <div
      onClick={onClick}
      className={`${isEquipped ? 'bg-taupe-700 hover:bg-taupe-600' : 'hover:bg-taupe-800'} flex h-20 w-84 flex-col justify-center gap-1 border border-taupe-700 px-4 py-2 hover:cursor-pointer`}
    >
      <div className="flex items-center justify-between">
        <h2 className="font-semibold">{pictoData[locale].name}</h2>
        <span className="font-bold">{pictoData.luminaPoints}</span>
      </div>
      <p className="text-xs">{pictoData[locale].effect}</p>
    </div>
  );
};

const LuminasSelector = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  const t = useTranslations();
  const locale = useLocale();

  const { build, addLumina, removeLumina } = useBuild();
  const { luminasIds } = build;

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
      className="flex gap-2 rounded-xs bg-taupe-900 p-2"
    >
      {/* Left column */}
      <section className="3xl:w-73 flex h-fit w-61 flex-col gap-2">
        <div className="flex gap-1">
          <input
            type="text"
            value={filterByName}
            onChange={(e) => setFilterByName(e.target.value)}
            placeholder={t('Pictos.searchByName')}
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
          {PICTO_CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => toggleFilterByCategories(cat)}
              className={`${filterByCategories.includes(cat) ? 'bg-taupe-700 hover:bg-taupe-600' : 'hover:bg-taupe-800'} 3xl:w-36 h-7 w-30 border border-taupe-700 px-2 text-sm hover:cursor-pointer`}
            >
              {t(`Pictos.category.${cat}`)}
            </button>
          ))}
        </div>
      </section>

      {/* Left column */}
      {/* Pictos */}
      <section className="scrollbar-thumb-taupe-600 scrollbar-track-taupe-800 scrollbar-thin flex h-180 w-260 flex-wrap content-start gap-2 overflow-y-auto">
        {filteredPictos.map((pic) => (
          <LuminaOption
            key={pic.id}
            isEquipped={luminasIds.includes(pic.id)}
            pictoData={pic}
            onClick={() => (!luminasIds.includes(pic.id) ? addLumina(pic.id) : removeLumina(pic.id))}
          />
        ))}
      </section>
    </Modal>
  );
};

export default LuminasSelector;
