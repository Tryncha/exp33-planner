import { createContext, useContext, useState } from 'react';
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

  function createBuild(characterId: Character['id']) {
    setVault(vault.concat());
  }

  function addBuild(newBuild: Build) {
    setVault(vault.concat(newBuild));
  }

  function updateBuild(buildId: Build['id'], newBuild: Build) {
    const buildToUpdate = vault.find((b) => b.id === buildId);

    if (!buildToUpdate) {
      throw new Error(`Build with id: ${buildId} not found...`);
    }

    setVault(vault.toSpliced(vault.indexOf(buildToUpdate), 1, newBuild));
  }

  function removeBuild(buildId: Build['id']) {
    setVault(vault.filter((b) => b.id !== buildId));
  }

  const vaultValue = { vault, addBuild, updateBuild, removeBuild };

  return <VaultContext.Provider value={vaultValue}>{children}</VaultContext.Provider>;
};

export default VaultContext;
