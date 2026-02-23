import { createContext, useContext, useReducer } from 'react';
import characterReducer from './character-reducer';
import { Character, Stat } from '../types';
import CHARACTERS_BASE from '../lib/constants';

interface CharactersContextType {
  gustave: Character;
  lune: Character;
  changeStat: (statToChange: Stat, newValue: number, characterToChange: Character['id']) => void;
}

const CharactersContext = createContext<CharactersContextType | undefined>(undefined);

export function useCharacters() {
  const charactersContext = useContext(CharactersContext);

  if (!charactersContext) {
    throw new Error('useCharacters must be used within a CharactersProvider');
  }

  return charactersContext;
}

export const CharactersProvider = ({ children }: { children: React.ReactNode }) => {
  const [gustave, gustaveDispatch] = useReducer(characterReducer, CHARACTERS_BASE.GUSTAVE);
  const [lune, luneDispatch] = useReducer(characterReducer, CHARACTERS_BASE.LUNE);

  const characterDispatchs = {
    gustave: gustaveDispatch,
    lune: luneDispatch
  } as const;

  function changeStat(statToChange: Stat, newValue: number, characterToChange: Character['id']) {
    characterDispatchs[characterToChange]({ type: 'CHANGE_STAT', payload: { statToChange, newValue } });
  }

  const charactersValue = { gustave, lune, changeStat };

  return <CharactersContext.Provider value={charactersValue}>{children}</CharactersContext.Provider>;
};

export default CharactersContext;
