import { createContext, useContext, useEffect, useState } from 'react';
import { Build } from '../types';

interface VaultContextType {
  vault: Build[];
  addBuild: (newBuild: Build) => void;
  updateBuild: (buildId: Build['id'], newBuild: Build) => void;
  removeBuild: (buildId: Build['id']) => void;
}

const VaultContext = createContext<VaultContextType | undefined>(undefined);

export function useVault() {
  const vaultContext = useContext(VaultContext);

  if (!vaultContext) {
    throw new Error('useVault must be used within a VaultProvider');
  }

  return vaultContext;
}

export const VaultProvider = ({ children }: { children: React.ReactNode }) => {
  const [vault, setVault] = useState<Build[]>([]);

  useEffect(() => {
    try {
      const savedVault = localStorage.getItem('vault');
      if (savedVault) setVault(JSON.parse(savedVault));
    } catch {}
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem('vault', JSON.stringify(vault));
    } catch {}
  }, [vault]);

  function addBuild(newBuild: Build) {
    setVault(vault.concat(newBuild));
  }

  function updateBuild(buildId: Build['id'], newBuild: Build) {
    const buildToUpdate = vault.find((bld) => bld.id === buildId);

    if (!buildToUpdate) {
      throw new Error(`Build with id: ${buildId} not found...`);
    }

    setVault(vault.with(vault.indexOf(buildToUpdate), newBuild));
  }

  function removeBuild(buildId: Build['id']) {
    setVault(vault.filter((bld) => bld.id !== buildId));
  }

  return (
    <VaultContext.Provider value={{ vault, addBuild, updateBuild, removeBuild }}>{children}</VaultContext.Provider>
  );
};

export default VaultContext;
