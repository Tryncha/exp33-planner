'use client';

import { Locale, useLocale } from 'next-intl';
import { usePathname, useRouter } from 'next/navigation';

const LanguageSelector = () => {
  const router = useRouter();
  const locale = useLocale();
  const pathname = usePathname();

  function changeLocale(newLocale: Locale) {
    const newPathname = pathname.replace(`/${locale}`, `/${newLocale}`);
    router.replace(newPathname);
  }

  return (
    <div className="flex items-center justify-center gap-2">
      <button
        onClick={() => changeLocale('en')}
        className={`${locale === 'en' ? 'font-bold' : 'hover:underline'} text-taupe-400`}
      >
        English
      </button>
      <button
        onClick={() => changeLocale('es')}
        className={`${locale === 'es' ? 'font-bold' : 'hover:underline'} text-taupe-400`}
      >
        Español
      </button>
    </div>
  );
};

export default LanguageSelector;
