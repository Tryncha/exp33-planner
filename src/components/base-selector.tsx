import { CharacterData } from '../types';
import OptionTemplate from './option-template';

const BaseSelector = ({ selectBaseBuild }: { selectBaseBuild: (characterId: CharacterData['id']) => void }) => {
  return (
    <section className="border border-taupe-700 p-2">
      <h2 className="font-semibold">Select a Character</h2>
      <OptionTemplate
        characterId="gustave"
        onClick={() => selectBaseBuild('gustave')}
      />
      <OptionTemplate
        characterId="lune"
        onClick={() => selectBaseBuild('lune')}
      />
    </section>
  );
};

export default BaseSelector;
