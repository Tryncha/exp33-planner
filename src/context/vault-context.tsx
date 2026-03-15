import { createContext, useContext, useEffect, useState } from 'react';
import { Build, Team } from '../types';

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
  const [builds, setBuilds] = useState<Build[]>([]);
  const [teams, setTeams] = useState<Team[]>([]);

  useEffect(() => {
    try {
      console.log('Searching builds in localStorage...');
      const savedVault = localStorage.getItem('vault');
      if (savedVault) {
        console.log('Build were found! Retrieving from localStorage...');
        setBuilds(JSON.parse(savedVault));
        console.log('Builds retrieved!');
      } else {
        console.log('No builds found in localStorage :(');
        console.log('Try creating a new one!');
      }
    } catch {
      console.log('There was an error searching for builds in localStorage...');
    }
  }, []);

  useEffect(() => {
    try {
      console.log('Saving builds in localStorage...');
      localStorage.setItem('vault', JSON.stringify(builds));
      console.log('Build saved!');
    } catch {
      console.log('There was an error saving builds in localStorage...');
    }
  }, [builds]);

  function addBuild(newBuild: Build) {
    setBuilds(builds.concat(newBuild));
  }

  function updateBuild(buildId: Build['id'], newBuild: Build) {
    const buildToUpdate = builds.find((bld) => bld.id === buildId);

    if (!buildToUpdate) {
      throw new Error(`Build with id: ${buildId} not found...`);
    }

    setBuilds(builds.with(builds.indexOf(buildToUpdate), newBuild));
  }

  function removeBuild(buildId: Build['id']) {
    setBuilds(builds.filter((bld) => bld.id !== buildId));
  }

  function addBuildToTeam(buildId: Build['id'], teamId: Team['id']) {
    const buildToAdd = builds.find((bld) => bld.id === buildId);

    if (!buildToAdd) {
      throw new Error(`Build with id: ${buildId} not found...`);
    }

    const teamToUpdate = teams.find((team) => team.id === teamId);

    if (!teamToUpdate) {
      throw new Error(`Team with id: ${teamId} not found...`);
    }

    setTeams(
      teams.with(teams.indexOf(teamToUpdate), {
        ...teamToUpdate,
        builds: teamToUpdate.builds.concat(buildToAdd) as [Build, Build, Build]
      })
    );
  }

  return (
    <VaultContext.Provider value={{ vault: builds, addBuild, updateBuild, removeBuild }}>
      {children}
    </VaultContext.Provider>
  );
};

export default VaultContext;
