import Providers from '../components/providers';
import './globals.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-taupe-950 text-taupe-100">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
