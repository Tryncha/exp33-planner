'use client';

import { CharactersProvider } from '../context/character-context';
import './globals.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-taupe-950 text-taupe-100">
        <CharactersProvider>{children}</CharactersProvider>
      </body>
    </html>
  );
}
