import { Character } from '../types';

type CharacterAction = {
  type: 'CHANGE_STAT';
  payload: {
    statToChange: string;
    newValue: number;
  };
};

function characterReducer(characterState: Character, action: CharacterAction) {
  switch (action.type) {
    case 'CHANGE_STAT': {
      const { statToChange, newValue } = action.payload;

      return {
        ...characterState,
        stats: {
          ...characterState.stats,
          [statToChange]: newValue
        }
      };
    }
  }
}

export default characterReducer;
