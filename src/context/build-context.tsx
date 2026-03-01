import { createContext, useContext, useReducer } from 'react';
import { Build, CharacterData, AttributeId, Weapon, Picto, Skill } from '../types';
import buildReducer from './build-reducer';
import { CHARACTER_TEMPLATES } from '../lib/constants';

interface BuildContextType {
  build: Build;
  setBaseBuild: (newBaseBuild: Build) => void;
  changeStat: (statToChange: AttributeId, newValue: number) => void;
  changeWeapon: (newWeaponId: Weapon['id']) => void;
  changeSkil: (slotToChange: number, newSkillId: Skill['id']) => void;
  changePicto: (slotToChange: number, newPictoId: Picto['id']) => void;
  addLumina: (luminaToAdd: Picto['id']) => void;
  removeLumina: (luminaToRemove: Picto['id']) => void;
}

const BuildContext = createContext<BuildContextType | undefined>(undefined);

export function useBuild() {
  const buildContext = useContext(BuildContext);

  if (!buildContext) {
    throw new Error('useBuild must be used within a BuildProvider');
  }

  return buildContext;
}

export const BuildProvider = ({ children }: { children: React.ReactNode }) => {
  const [build, buildDispatch] = useReducer(buildReducer, CHARACTER_TEMPLATES[0]);

  function setBaseBuild(newBaseBuild: Build) {
    buildDispatch({ type: 'SET_BASE_BUILD', payload: { newBaseBuild } });
  }

  function changeStat(statToChange: AttributeId, newValue: number) {
    buildDispatch({ type: 'CHANGE_STAT', payload: { attributeToChange: statToChange, newValue } });
  }

  function changeWeapon(newWeaponId: Weapon['id']) {
    buildDispatch({ type: 'CHANGE_WEAPON', payload: { newWeaponId } });
  }

  function changeSkil(slotToChange: number, newSkillId: Skill['id']) {
    buildDispatch({ type: 'CHANGE_SKILL', payload: { slotToChange, newSkillId } });
  }

  function changePicto(slotToChange: number, newPictoId: Picto['id']) {
    buildDispatch({ type: 'CHANGE_PICTO', payload: { slotToChange, newPictoId } });
  }

  function addLumina(luminaToAdd: Picto['id']) {
    buildDispatch({ type: 'ADD_LUMINA', payload: { luminaToAdd } });
  }

  function removeLumina(luminaToRemove: Picto['id']) {
    buildDispatch({ type: 'REMOVE_LUMINA', payload: { luminaToRemove } });
  }

  const charactersValue = {
    build,
    setBaseBuild,
    changeStat,
    changeWeapon,
    changeSkil,
    changePicto,
    addLumina,
    removeLumina
  };

  return <BuildContext.Provider value={charactersValue}>{children}</BuildContext.Provider>;
};

export default BuildContext;
