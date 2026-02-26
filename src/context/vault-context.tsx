import { createContext, useContext, useEffect, useState } from 'react';
import { Build, Character } from '../types';

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

  function createBuild(characterId: Character['id']) {
    setVault(vault.concat());
  }

  function addBuild(newBuild: Build) {
    const newVault = vault.concat(newBuild);
    setVault(newVault);

    try {
      localStorage.setItem('vault', JSON.stringify(newVault));
    } catch {}
  }

  function updateBuild(buildId: Build['id'], newBuild: Build) {
    const buildToUpdate = vault.find((b) => b.id === buildId);

    if (!buildToUpdate) {
      throw new Error(`Build with id: ${buildId} not found...`);
    }

    const newVault = vault.toSpliced(vault.indexOf(buildToUpdate), 1, newBuild);
    setVault(newVault);

    try {
      localStorage.setItem('vault', JSON.stringify(newVault));
    } catch {}
  }

  function removeBuild(buildId: Build['id']) {
    setVault(vault.filter((b) => b.id !== buildId));
  }

  const vaultValue = { vault, addBuild, updateBuild, removeBuild };

  console.log(vault);

  return <VaultContext.Provider value={vaultValue}>{children}</VaultContext.Provider>;
};

export default VaultContext;
