import { createContext, useContext, useReducer } from 'react';
import { Build, CharacterData, AttributeId, WeaponData, PictoData, SkillData } from '../types';
import buildReducer from './build-reducer';
import { CHARACTER_TEMPLATES } from '../lib/constants';

interface BuildContextType {
  build: Build;
  setBaseBuild: (newBaseBuild: Build) => void;
  setTemplate: (characterId: CharacterData['id']) => void;
  changeStat: (statToChange: AttributeId, newValue: number) => void;
  changeWeapon: (newWeaponId: WeaponData['id']) => void;
  changeSkil: (slotToChange: number, newSkillId: SkillData['id']) => void;
  changePicto: (slotToChange: number, newPictoId: PictoData['id']) => void;
  addLumina: (luminaToAdd: PictoData['id']) => void;
  removeLumina: (luminaToRemove: PictoData['id']) => void;
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

  function setTemplate(characterId: CharacterData['id']) {
    buildDispatch({ type: 'SET_CHARACTER_TEMPLATE', payload: { characterId } });
  }

  function changeStat(statToChange: AttributeId, newValue: number) {
    buildDispatch({ type: 'CHANGE_STAT', payload: { attributeToChange: statToChange, newValue } });
  }

  function changeWeapon(newWeaponId: WeaponData['id']) {
    buildDispatch({ type: 'CHANGE_WEAPON', payload: { newWeaponId } });
  }

  function changeSkil(slotToChange: number, newSkillId: SkillData['id']) {
    buildDispatch({ type: 'CHANGE_SKILL', payload: { slotToChange, newSkillId } });
  }

  function changePicto(slotToChange: number, newPictoId: PictoData['id']) {
    buildDispatch({ type: 'CHANGE_PICTO', payload: { slotToChange, newPictoId } });
  }

  function addLumina(luminaToAdd: PictoData['id']) {
    buildDispatch({ type: 'ADD_LUMINA', payload: { luminaToAdd } });
  }

  function removeLumina(luminaToRemove: PictoData['id']) {
    buildDispatch({ type: 'REMOVE_LUMINA', payload: { luminaToRemove } });
  }

  const charactersValue = {
    build,
    setBaseBuild,
    setTemplate,
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
