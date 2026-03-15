// Internalization Provider
import { hasLocale, Locale, NextIntlClientProvider } from 'next-intl';

// App Providers
import Providers from '../../components/providers';

import Header from '@/src/components/header';
import Vault from '@/src/components/vault';
import { routing } from '@/src/i18n/routing';
import { notFound } from 'next/navigation';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { sourceSans3 } from '@/src/lib/fonts';
import '../globals.css';

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale: locale as Locale, namespace: 'Metadata' });

  return {
    title: t('title')
  };
}

const RootLocaleLayout = async ({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) => {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale as Locale);

  return (
    <html lang={locale}>
      <body
        className={`${sourceSans3.className} bg-taupe-950 text-taupe-100`}
        // // Dotted grid background
        // // Using CSS `style` attribute for simplicity instead Tailwind
        // style={{
        //   // taupe-700 = #473c39
        //   backgroundImage: 'radial-gradient(circle, #473c39 1px, rgba(0, 0, 0, 0) 1px)',
        //   // Space between dots: x-axis, y-axis
        //   backgroundSize: '50px 50px'
        // }}
      >
        <NextIntlClientProvider>
          <Providers>
            <Header />
            {children}
            <hr className="mx-4 border-taupe-700" />
            <Vault />
          </Providers>
        </NextIntlClientProvider>
      </body>
    </html>
  );
};

export default RootLocaleLayout;
