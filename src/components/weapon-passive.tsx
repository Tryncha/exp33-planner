import { useTranslations } from 'next-intl';

const WeaponPassive = ({ size = 'base', level, passive }: { size?: 'sm' | 'base'; level: number; passive: string }) => {
  const t = useTranslations('WeaponPassive');

  switch (size) {
    case 'sm':
      return (
        <div className="flex h-18 border-t border-taupe-700">
          <div className="flex w-20 items-center justify-center border-r border-taupe-700">
            <span className="text-lg font-semibold text-taupe-400">
              {t('abbrLevel')}. {level}
            </span>
          </div>
          <div className="flex flex-1 items-center px-2">
            <p className="text-sm">{passive}</p>
          </div>
        </div>
      );

    case 'base':
      return (
        <div className="flex h-20 border-t border-taupe-700">
          <div className="flex w-20 items-center justify-center border-r border-taupe-700">
            <span className="text-lg font-semibold text-taupe-400">
              {t('abbrLevel')}. {level}
            </span>
          </div>
          <div className="flex flex-1 items-center px-4">
            <p className="text-sm">{passive}</p>
          </div>
        </div>
      );
  }
};

export default WeaponPassive;
