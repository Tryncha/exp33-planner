'use client';

import { BuildProvider } from '../context/build-context';
import { ModalProvider } from '../context/modal-context';
import { VaultProvider } from '../context/vault-context';

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <VaultProvider>
      <BuildProvider>
        <ModalProvider>{children}</ModalProvider>
      </BuildProvider>
    </VaultProvider>
  );
};

export default Providers;
