// Internalization Provider
import { hasLocale, NextIntlClientProvider } from 'next-intl';

// App Providers
import Providers from '../../components/providers';

import { routing } from '@/src/i18n/routing';
import { notFound } from 'next/navigation';
import '../globals.css';

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

  return (
    <html lang="en">
      <body className="bg-taupe-950 text-taupe-100">
        <NextIntlClientProvider>
          <Providers>{children}</Providers>
        </NextIntlClientProvider>
      </body>
    </html>
  );
};

export default RootLocaleLayout;
