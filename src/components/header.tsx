import { useTranslations } from 'next-intl';
import { Link } from '../i18n/navigation';
import LanguageSelector from './language-selector';

const Header = () => {
  const t = useTranslations();

  return (
    <header className="w-full px-4 pt-2">
      <div className="flex items-center justify-between">
        <Link
          href="/"
          className="text-lg font-semibold text-taupe-400 uppercase hover:text-taupe-300"
        >
          Clair Obscur: Expedition 33 · {t('planner')}
        </Link>
        <LanguageSelector />
      </div>
    </header>
  );
};

export default Header;
