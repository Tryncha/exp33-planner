'use client';

import { useLocale } from 'next-intl';
import { Link, usePathname } from '../i18n/navigation';

const LanguageSelector = () => {
  const locale = useLocale();
  const pathname = usePathname();

  return (
    <div className="flex items-center justify-center gap-2">
      <Link
        href={pathname}
        locale="en"
        className={`${locale === 'en' ? 'font-bold' : 'hover:underline'} text-taupe-400`}
      >
        English
      </Link>
      <Link
        href={pathname}
        locale="es"
        className={`${locale === 'es' ? 'font-bold' : 'hover:underline'} text-taupe-400`}
      >
        Español
      </Link>
    </div>
  );
};

export default LanguageSelector;
