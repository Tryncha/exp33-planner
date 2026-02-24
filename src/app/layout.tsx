'use client';

import { BuildProvider } from '../context/build-context';
import { ModalProvider } from '../context/modal-context';
import { VaultProvider } from '../context/vault-context';
import './globals.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-taupe-950 text-taupe-100">
        <ModalProvider>
          <VaultProvider>
            <BuildProvider>{children}</BuildProvider>
          </VaultProvider>
        </ModalProvider>
      </body>
    </html>
  );
}
