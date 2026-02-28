import { use } from 'react';
import { Locale, useTranslations } from 'next-intl';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import Placeholder from '@/src/components/page-placeholder';

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Metadata' });

  return {
    title: t('title')
  };
}

const HomePage = ({ params }: { params: Promise<{ locale: Locale }> }) => {
  const { locale } = use(params);
  setRequestLocale(locale);
  const t = useTranslations('HomePage');

  return (
    <main className="p-4">
      {/* <h1 className="text-center text-2xl">{t('title')}</h1> */}
      <Placeholder />
    </main>
  );
};

export default HomePage;
