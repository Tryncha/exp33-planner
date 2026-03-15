'use client';

import { useLocale } from 'next-intl';
import { Link } from '../i18n/navigation';

const LanguageSelector = () => {
  const locale = useLocale();

  return (
    <div className="flex items-center justify-center gap-2">
      <Link
        href="/"
        locale="en"
        className={`${locale === 'en' ? 'font-bold' : 'hover:underline'} text-taupe-400`}
      >
        English
      </Link>
      <Link
        href="/"
        locale="es"
        className={`${locale === 'es' ? 'font-bold' : 'hover:underline'} text-taupe-400`}
      >
        Español
      </Link>
    </div>
  );
};

// Alternative using a function to change locale

// const LanguageSelector = () => {
//   const router = useRouter();
//   const locale = useLocale();
//   const pathname = usePathname();

//   function changeLocale(newLocale: Locale) {
//     const newPathname = pathname.replace(`/${locale}`, `/${newLocale}`);
//     router.replace(newPathname);
//   }

//   return (
//     <div className="flex items-center justify-center gap-2">
//       <button
//         onClick={() => changeLocale('en')}
//         className={`${locale === 'en' ? 'font-bold' : 'hover:underline'} text-taupe-400`}
//       >
//         English
//       </button>
//       <button
//         onClick={() => changeLocale('es')}
//         className={`${locale === 'es' ? 'font-bold' : 'hover:underline'} text-taupe-400`}
//       >
//         Español
//       </button>
//     </div>
//   );
// };

export default LanguageSelector;
