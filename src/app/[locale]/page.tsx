import { use } from 'react';
import { useTranslations } from 'next-intl';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import Placeholder from '@/src/components/page-placeholder';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Metadata' });

  return {
    title: t('title')
  };
}

const HomePage = ({ params }: { params: Promise<{ locale: string }> }) => {
  const { locale } = use(params);
  setRequestLocale(locale);
  const t = useTranslations('HomePage');

  return (
    <main className="p-4">
      <h1>{t('title')}</h1>
      <Placeholder />
    </main>
  );
};

export default HomePage;
