'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { ebGaramond } from '../lib/fonts';
import { Link } from '../i18n/navigation';

const LandingPage = () => {
  const t = useTranslations();

  return (
    <main className="relative flex h-155 flex-col items-center justify-center">
      {/* Lumiere background image */}
      <div className="absolute inset-0 -z-10 bg-[url(/lumiere-bg.jpg)] mask-y-from-80% mask-y-to-95% bg-cover bg-center opacity-30" />

      <Image
        src="/game-logo.png"
        alt="Clair Obscur: Expedition 33 Logo"
        width={500}
        height={500}
      />
      <h2 className={`${ebGaramond.className} text-5xl font-semibold tracking-wider uppercase blur-[0.25px]`}>
        {t('planner')}
      </h2>
      <div className="my-8 w-md text-center text-sm">
        <p className="whitespace-pre-line">{t('appDescription')}</p>
      </div>
      <div className="flex flex-col gap-2">
        <Link
          href="/selector"
          className="rounded-xs border border-taupe-700 bg-taupe-950 px-2 py-1 text-center font-semibold uppercase transition-colors hover:cursor-pointer hover:bg-taupe-800"
        >
          {t('addBuildButton')}
        </Link>
        <span className="text-center text-xs">{t('loadFromVault')}</span>
      </div>
    </main>
  );
};

export default LandingPage;
