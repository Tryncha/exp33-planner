import Image from 'next/image';
import { getLuminaData } from '../lib/utils';
import { PictoData } from '../types';
import { useModal } from '../context/modal-context';
import { useBuild } from '../context/build-context';
import { Plus, X } from 'lucide-react';
import LuminasSelector from './modals/luminas-selector';

const LuminaInfo = ({ pictoData }: { pictoData: PictoData }) => {
  const { removeLumina } = useBuild();

  return (
    <div className="flex h-16 items-center justify-between gap-2 border-b border-taupe-700 px-4 py-2">
      <Image
        src={pictoData.imgData.src}
        alt={pictoData.imgData.alt}
        width={pictoData.imgData.width / 2}
        height={pictoData.imgData.height / 2}
      />
      <div className="flex flex-col items-center">
        <h2 className="font-semibold">{pictoData.name}</h2>
        <p className="text-xs">{pictoData.effect}</p>
      </div>
      <span className="text-2xl font-bold">{pictoData.luminaPoints}</span>
      <button onClick={() => removeLumina(pictoData.id)}>
        <X />
      </button>
    </div>
  );
};

const Luminas = () => {
  const { build } = useBuild();
  const { luminasIds } = build;

  const pictosData = luminasIds.map((lumId) => getLuminaData(lumId));
  const totalLumina = pictosData.reduce((acc, pic) => acc + pic.luminaPoints, 0);

  const { isModalOpen, openModal, closeAll } = useModal();

  return (
    <div className="flex w-md flex-col border border-taupe-700">
      <LuminasSelector
        isOpen={isModalOpen.luminas}
        onClose={closeAll}
      />
      <div className="flex justify-between border-b border-taupe-700">
        <h2 className="flex-1 py-1 text-center text-xl font-semibold">Luminas ({totalLumina})</h2>
        <button
          onClick={() => openModal('luminas')}
          className="border-l border-taupe-700 px-2 hover:cursor-pointer hover:bg-taupe-900"
        >
          <Plus strokeWidth={3} />
        </button>
      </div>
      <div className="scrollbar-thumb-taupe-600 scrollbar-track-taupe-800 scrollbar-thin flex h-156 flex-col overflow-y-auto">
        {pictosData.map((pic) => (
          <LuminaInfo
            key={pic.id}
            pictoData={pic}
          />
        ))}
      </div>
    </div>
  );
};

export default Luminas;
