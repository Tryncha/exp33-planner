import { getTemplateData } from '../lib/utils';
import { Build, CharacterData } from '../types';

type BuildAction =
  | {
      type: 'SET_CHARACTER_TEMPLATE';
      payload: {
        characterId: CharacterData['id'];
      };
    }
  | {
      type: 'CHANGE_STAT';
      payload: {
        statToChange: string;
        newValue: number;
      };
    };

function buildReducer(buildState: Build, action: BuildAction) {
  switch (action.type) {
    case 'SET_CHARACTER_TEMPLATE': {
      const { characterId } = action.payload;
      return getTemplateData(characterId);
    }

    case 'CHANGE_STAT': {
      const { statToChange, newValue } = action.payload;

      return {
        ...buildState,
        stats: {
          ...buildState.stats,
          [statToChange]: newValue
        }
      };
    }
  }
}

export default buildReducer;
