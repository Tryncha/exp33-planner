import { swapElements } from '../lib/utils';
import { Build, Picto, Skill, Weapon } from '../types';

type BuildAction =
  | {
      type: 'SET_BASE_BUILD';
      payload: {
        newBaseBuild: Build;
      };
    }
  | {
      type: 'CHANGE_NAME';
      payload: {
        newName: string;
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
        newSkillId: Skill['id'];
      };
    }
  | {
      type: 'CHANGE_WEAPON';
      payload: {
        newWeaponId: Weapon['id'];
      };
    }
  | {
      type: 'CHANGE_PICTO';
      payload: {
        slotToChange: number;
        newPictoId: Picto['id'];
      };
    }
  | {
      type: 'REMOVE_PICTO';
      payload: {
        slotToRemove: number;
      };
    }
  | {
      type: 'ADD_LUMINA';
      payload: {
        luminaToAdd: Picto['id'];
      };
    }
  | {
      type: 'REMOVE_LUMINA';
      payload: {
        luminaToRemove: Picto['id'];
      };
    };

function buildReducer(buildState: Build, action: BuildAction) {
  switch (action.type) {
    case 'SET_BASE_BUILD': {
      const { newBaseBuild } = action.payload;
      return { ...newBaseBuild };
    }

    case 'CHANGE_NAME': {
      const { newName } = action.payload;
      return {
        ...buildState,
        buildName: newName
      };
    }

    case 'CHANGE_STAT': {
      const { attributeToChange, newValue } = action.payload;

      let validatedValue = newValue;

      if (validatedValue < 0) validatedValue = 0;
      if (validatedValue > 99) validatedValue = 99;

      return {
        ...buildState,
        attributes: {
          ...buildState.attributes,
          [attributeToChange]: validatedValue
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

      if (newSkillId && buildState.skillIds.includes(newSkillId) && buildState.skillIds[slotToChange] !== newSkillId) {
        const newSkillIds = [...buildState.skillIds];
        const skillIndex = buildState.skillIds.indexOf(newSkillId);

        swapElements(newSkillIds, skillIndex, slotToChange);

        return {
          ...buildState,
          skillIds: newSkillIds as [string, string, string, string, string, string]
        };
      }

      return {
        ...buildState,
        skillIds: buildState.skillIds.with(slotToChange, newSkillId) as [string, string, string, string, string, string]
      };
    }

    case 'CHANGE_PICTO': {
      const { slotToChange, newPictoId } = action.payload;

      // Picto is already equipped and it's in a different slot,
      // then swap equipped Pictos
      if (buildState.pictosIds.includes(newPictoId) && buildState.pictosIds[slotToChange] !== newPictoId) {
        const newPictosIds = [...buildState.pictosIds];
        const pictoIndex = buildState.pictosIds.indexOf(newPictoId);

        swapElements(newPictosIds, pictoIndex, slotToChange);

        return {
          ...buildState,
          pictosIds: newPictosIds as [string, string, string]
        };
      }

      // If Lumina effect is already equipped
      // then remove Lumina and equip Picto
      if (buildState.luminasIds.includes(newPictoId)) {
        return {
          ...buildState,
          pictosIds: buildState.pictosIds.with(slotToChange, newPictoId) as [string, string, string],
          luminasIds: buildState.luminasIds.filter((lumId) => lumId !== newPictoId)
        };
      }

      return {
        ...buildState,
        pictosIds: buildState.pictosIds.with(slotToChange, newPictoId) as [string, string, string]
      };
    }

    case 'REMOVE_PICTO': {
      const { slotToRemove } = action.payload;
      return {
        ...buildState,
        pictosIds: buildState.pictosIds.with(slotToRemove, '') as [string, string, string]
      };
    }

    case 'ADD_LUMINA': {
      const { luminaToAdd } = action.payload;

      if (buildState.luminasIds.includes(luminaToAdd)) return buildState;

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
