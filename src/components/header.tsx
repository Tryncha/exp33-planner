import { useTranslations } from 'next-intl';
import LanguageSelector from './language-selector';

const Header = () => {
  const t = useTranslations();

  return (
    <header className="w-full px-4 pt-2">
      <div className="flex justify-between">
        <div className="flex flex-col">
          <h1 className="text-lg font-semibold text-taupe-400 uppercase">
            Clair Obscur: Expedition 33 · {t('planner')}
          </h1>
        </div>
        <LanguageSelector />
      </div>
    </header>
  );
};

export default Header;
