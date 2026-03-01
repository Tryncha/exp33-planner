import Image from 'next/image';
import { formatPictoStats, getPictoData } from '../lib/utils';
import { Picto } from '../types';
import { useModal } from '../context/modal-context';
import { useBuild } from '../context/build-context';
import PictosSelector from './modals/pictos-selector';
import { MouseEvent, useState } from 'react';
import { X } from 'lucide-react';
import { useTranslations } from 'next-intl';

const EmptyPictoSlot = ({ onClick }: { onClick: () => void }) => {
  const t = useTranslations('Pictos');

  return (
    <div
      onClick={onClick}
      className="flex flex-1 items-center justify-center rounded-xs border-b border-taupe-700 px-4 py-2 text-sm text-taupe-500 italic last:border-0 hover:cursor-pointer"
    >
      {t('selectPicto')}
    </div>
  );
};

const PictoSlot = ({
  pictoData,
  onClick,
  removePicto
}: {
  pictoData: Picto;
  onClick: () => void;
  removePicto: (e: MouseEvent<HTMLButtonElement>) => void;
}) => {
  return (
    <div
      onClick={onClick}
      className="relative flex flex-1 items-center justify-between gap-2 rounded-xs border-b border-taupe-700 px-4 py-2 last:border-0 hover:cursor-pointer hover:bg-taupe-900"
    >
      <Image
        src={`/pictos/${pictoData.id}.png`}
        alt={`${pictoData.name} Picto`}
        width={54}
        height={54}
      />
      <div className="flex flex-col items-center">
        <h2 className="text-xl font-semibold">{pictoData.name}</h2>
        <span className="text-xs">{formatPictoStats(pictoData.stats)}</span>
        <p className="mt-2 text-center text-sm">{pictoData.effect}</p>
      </div>
      <span className="text-2xl font-bold">{pictoData.luminaPoints}</span>
      <button
        onClick={removePicto}
        className="absolute top-2 right-2 rounded-xs text-red-300 transition-colors hover:cursor-pointer hover:bg-red-950 active:bg-red-800"
      >
        <X strokeWidth={3} />
      </button>
    </div>
  );
};

const Pictos = () => {
  const { build, changePicto } = useBuild();
  const { pictosIds } = build;

  const { openModal, isModalOpen, closeAll } = useModal();
  const [selectedSlot, setSelectedSlot] = useState(0);

  const pictosData = pictosIds.map((pId) => getPictoData(pId));

  function openModalAndSetSlot(indexSlot: number) {
    openModal('pictos');
    setSelectedSlot(indexSlot);
  }

  function removePicto(e: MouseEvent<HTMLButtonElement>, indexSlot: number) {
    e.stopPropagation();
    changePicto(indexSlot, '');
  }

  return (
    <div className="flex w-md flex-col rounded-xs border border-taupe-700">
      <PictosSelector
        selectedSlot={selectedSlot}
        isOpen={isModalOpen.pictos}
        onClose={closeAll}
      />
      <h2 className="border-b border-taupe-700 py-1 text-center text-xl font-semibold">Pictos</h2>
      {pictosData.map((pic, indexSlot) =>
        !pic ? (
          <EmptyPictoSlot
            key={`empty-picto-${indexSlot}`}
            onClick={() => openModalAndSetSlot(indexSlot)}
          />
        ) : (
          <PictoSlot
            key={`picto-${indexSlot}`}
            pictoData={pic}
            onClick={() => openModalAndSetSlot(indexSlot)}
            removePicto={(e) => removePicto(e, indexSlot)}
          />
        )
      )}
    </div>
  );
};

export default Pictos;
