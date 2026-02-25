import Image from 'next/image';
import { formatPictoStats, getPictoData, getWeaponData } from '../lib/utils';
import { PictoData, PictoStats, AttributeId, WeaponData } from '../types';
import { useModal } from '../context/modal-context';
import { useBuild } from '../context/build-context';

const PictoInfo = ({ pictoData }: { pictoData: PictoData }) => {
  return (
    <div className="flex flex-1 items-center justify-between gap-2 border-b border-taupe-700 px-4 py-2 last:border-0">
      <Image
        src={pictoData.imgData.src}
        alt={pictoData.imgData.alt}
        width={pictoData.imgData.width}
        height={pictoData.imgData.height}
      />
      <div className="flex flex-col items-center">
        <h2 className="text-xl font-semibold">{pictoData.name}</h2>
        <span className="text-xs">{formatPictoStats(pictoData.stats)}</span>
        <p className="mt-2 text-sm">{pictoData.effect}</p>
      </div>
      <div className="flex items-center">
        <span className="text-2xl font-bold">{pictoData.luminaPoints}</span>
        <Image
          src="/misc/lumina.png"
          alt="Lumina Point"
          width={20}
          height={19}
        />
      </div>
    </div>
  );
};

const Pictos = () => {
  const { build } = useBuild();
  const { pictosIds } = build;

  const pictosData = pictosIds.map((pId) => getPictoData(pId));

  const { openModal } = useModal();

  return (
    <div className="flex w-md flex-col border border-taupe-700">
      {pictosData.map((pic) => (
        <PictoInfo
          key={pic.id}
          pictoData={pic}
        />
      ))}
    </div>
  );
};

export default Pictos;
