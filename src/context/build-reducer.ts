import { getTemplateData } from '../lib/utils';
import { Build, CharacterData, PictoData, SkillData, WeaponData } from '../types';

type BuildAction =
  | {
      type: 'SET_BASE_BUILD';
      payload: {
        newBaseBuild: Build;
      };
    }
  | {
      type: 'SET_CHARACTER_TEMPLATE';
      payload: {
        characterId: CharacterData['id'];
      };
    }
  | {
      type: 'CHANGE_STAT';
      payload: {
        attributeToChange: string;
        newValue: number;
      };
    }
  | {
      type: 'CHANGE_SKILL';
      payload: {
        slotToChange: number;
        newSkillId: SkillData['id'];
      };
    }
  | {
      type: 'CHANGE_WEAPON';
      payload: {
        newWeaponId: WeaponData['id'];
      };
    }
  | {
      type: 'CHANGE_PICTO';
      payload: {
        slotToChange: number;
        newPictoId: PictoData['id'];
      };
    }
  | {
      type: 'ADD_LUMINA';
      payload: {
        luminaToAdd: PictoData['id'];
      };
    }
  | {
      type: 'REMOVE_LUMINA';
      payload: {
        luminaToRemove: PictoData['id'];
      };
    };

function buildReducer(buildState: Build, action: BuildAction) {
  switch (action.type) {
    case 'SET_BASE_BUILD': {
      const { newBaseBuild } = action.payload;
      return { ...newBaseBuild };
    }

    case 'SET_CHARACTER_TEMPLATE': {
      const { characterId } = action.payload;
      return getTemplateData(characterId);
    }

    case 'CHANGE_STAT': {
      const { attributeToChange: statToChange, newValue } = action.payload;
      return {
        ...buildState,
        attributes: {
          ...buildState.attributes,
          [statToChange]: newValue
        }
      };
    }

    case 'CHANGE_WEAPON': {
      const { newWeaponId } = action.payload;
      return {
        ...buildState,
        weaponId: newWeaponId
      };
    }

    case 'CHANGE_SKILL': {
      const { slotToChange, newSkillId } = action.payload;
      return {
        ...buildState,
        skillIds: buildState.skillIds.with(slotToChange, newSkillId) as [string, string, string, string, string, string]
      };
    }

    case 'CHANGE_PICTO': {
      const { slotToChange, newPictoId } = action.payload;
      return {
        ...buildState,
        pictosIds: buildState.pictosIds.with(slotToChange, newPictoId) as [string, string, string]
      };
    }

    case 'ADD_LUMINA': {
      const { luminaToAdd } = action.payload;
      return {
        ...buildState,
        luminasIds: buildState.luminasIds.concat(luminaToAdd)
      };
    }

    case 'REMOVE_LUMINA': {
      const { luminaToRemove } = action.payload;
      return {
        ...buildState,
        luminasIds: buildState.luminasIds.filter((lumId) => lumId !== luminaToRemove)
      };
    }
  }
}

export default buildReducer;
