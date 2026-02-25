import Image from 'next/image';
import { formatPictoStats, getPictoData, getWeaponData } from '../lib/utils';
import { PictoData, PictoStats, AttributeId, WeaponData } from '../types';
import { useModal } from '../context/modal-context';
import { useBuild } from '../context/build-context';

const LuminaInfo = ({ pictoData }: { pictoData: PictoData }) => {
  return (
    <div className="flex flex-1 items-center justify-between gap-2 border-b border-taupe-700 px-4 py-2 last:border-0">
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

const Luminas = () => {
  const { build } = useBuild();
  const { luminasIds } = build;

  const pictosData = luminasIds.map((lumId) => getPictoData(lumId));
  const totalLumina = pictosData.reduce((acc, pic) => acc + pic.luminaPoints, 0);

  const { openModal } = useModal();

  return (
    <div className="flex w-md flex-col border border-taupe-700">
      <div className="flex items-center justify-center">
        <h2 className="py-1 text-center text-xl font-semibold">Luminas ({totalLumina})</h2>
        <Image
          src="/misc/lumina.png"
          alt="Lumina Point"
          width={20}
          height={19}
        />
      </div>
      <hr className="border-taupe-700" />
      <div className="flex h-72 flex-col overflow-y-auto">
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
