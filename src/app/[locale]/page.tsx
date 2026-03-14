import { use } from 'react';
import { Locale } from 'next-intl';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import LandingPage from '@/src/components/landing-page';
import Header from '@/src/components/header';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale: locale as Locale, namespace: 'Metadata' });

  return {
    title: t('title')
  };
}

const HomePage = ({ params }: { params: Promise<{ locale: string }> }) => {
  const { locale } = use(params);
  setRequestLocale(locale as Locale);

  return (
    <>
      <Header />
      <LandingPage />;
    </>
  );
};

export default HomePage;
