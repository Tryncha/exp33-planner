import { createContext, useContext, useReducer, useState } from 'react';
import { Build, CharacterData, AttributeId } from '../types';
import buildReducer from './build-reducer';
import { CHARACTER_TEMPLATES } from '../lib/constants';

interface BuildContextType {
  build: Build;
  setTemplate: (characterId: CharacterData['id']) => void;
  changeStat: (statToChange: AttributeId, newValue: number) => void;
}

const BuildContext = createContext<BuildContextType | undefined>(undefined);

export function useBuild() {
  const buildContext = useContext(BuildContext);

  if (!buildContext) {
    throw new Error('useBuild must be used within a CharacterProvider');
  }

  return buildContext;
}

export const BuildProvider = ({ children }: { children: React.ReactNode }) => {
  const [build, buildDispatch] = useReducer(buildReducer, CHARACTER_TEMPLATES[0]);

  function setTemplate(characterId: CharacterData['id']) {
    buildDispatch({ type: 'SET_CHARACTER_TEMPLATE', payload: { characterId } });
  }

  function changeStat(statToChange: AttributeId, newValue: number) {
    buildDispatch({ type: 'CHANGE_STAT', payload: { attributeToChange: statToChange, newValue } });
  }

  const charactersValue = { build, setTemplate, changeStat };

  return <BuildContext.Provider value={charactersValue}>{children}</BuildContext.Provider>;
};

export default BuildContext;
