import Image from 'next/image';
import { capitalizeWord } from '../lib/utils';

// More information about how RegExp works
// https://regex101.com/

// Regex designed for detecting tokens like:

// <name:value1-value2>text</name> || <name:value1-value2/>
const TAG_REGEX_1 = /<(\w+)(?::([\w-]+))?>(.*?)<\/\1>|<(\w+):([\w-]+)\/>/g;

// <name1-name2:value1-value2>text</name1-name2> || <name1-name2:value1-value2 />
const TAG_REGEX_2 = /<([\w-]+)(?::([\w-]+))?>(.*?)<\/\1>|<([\w-]+):([\w-]+) \/>/g;

export function parseRichText(textToEnrich: string) {
  const nodes = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;

  while ((match = TAG_REGEX_2.exec(textToEnrich))) {
    if (match.index > lastIndex) {
      nodes.push({
        type: 'text',
        value: textToEnrich.slice(lastIndex, match.index)
      });
    }

    if (match[1]) {
      // tokens like: <name:value>text</name:value>
      nodes.push({
        type: match[1],
        value: match[2],
        children: match[3]
      });
    } else {
      // tokens like: <name:value />
      nodes.push({
        type: match[4],
        value: match[5]
      });
    }

    lastIndex = TAG_REGEX_2.lastIndex;
  }

  if (lastIndex < textToEnrich.length) {
    nodes.push({
      type: 'text',
      value: textToEnrich.slice(lastIndex)
    });
  }

  return nodes;
}

const TEXT_COLORS = {
  // Elements
  'physical': 'text-taupe-400',
  'light': 'text-white',
  'dark': 'text-purple-400',
  'void': 'text-amber-500',
  'fire': 'text-red-400',
  'ice': 'text-blue-300',
  'earth': 'text-lime-500',
  'lightning': 'text-yellow-400',

  // Status Effects
  'heal': 'text-lime-600',
  'regen': 'text-lime-600',
  'burn': 'text-orange-500',
  'crit': 'text-red-500',
  'mark': 'text-red-700',

  // Buffs
  'rush': 'text-lime-500',
  'powerful': 'text-lime-500',
  'shell': 'text-lime-500',

  // Debuffs
  'slow': 'text-red-600',
  'powerless': 'text-red-600',
  'defenceless': 'text-red-600',

  // Misc
  'break': 'text-amber-500',
  'stun': 'text-amber-600',
  'ap': 'text-blue-400',
  'shield': 'text-gray-300',

  // Character's Unique
  // Gustave
  'gustave-charge': 'text-cyan-500',

  // Maelle
  'stanceless': 'text-red-500',
  'offensive-stance': 'text-red-500',
  'defensive-stance': 'text-blue-400',
  'virtuose-stance': 'text-fuchsia-600',

  // Sciel
  'foretell': 'text-taupe-400',
  'twilight': 'text-fuchsia-400',

  // Verso
  'perfection': 'text-gray-300',

  // Monoco
  'caster-mask': 'text-blue-300',
  'agile-mask': 'text-fuchsia-300',
  'balanced-mask': 'text-red-400',
  'heavy-mask': 'text-lime-300',
  'almighty-mask': 'text-yellow-300'
};

const TextIcon = ({ icon }: { icon: string }) => {
  return (
    <Image
      src={`/icons/${icon}.png`}
      alt={`${capitalizeWord(icon)} Icon`}
      width={16}
      height={16}
      className="inline-block"
    />
  );
};

const RichText = ({ textToEnrich }: { textToEnrich: string }) => {
  const nodes = parseRichText(textToEnrich);

  return (
    <p className="text-sm font-medium whitespace-pre-line">
      {nodes.map((node, i) => {
        if (node.type === 'text') {
          return <span key={i}>{node.value}</span>;
        }

        // tokens like: <color:value>text</color>
        if (node.type === 'color') {
          const nodeValue = node.value as keyof typeof TEXT_COLORS;
          return (
            <span
              key={i}
              className={TEXT_COLORS[nodeValue]}
            >
              {node.children}
            </span>
          );
        }

        // tokens like: <left-icon:value>text</left-icon>
        if (node.type === 'left-icon') {
          const nodeValue = node.value as keyof typeof TEXT_COLORS;
          return (
            <span
              key={i}
              className={TEXT_COLORS[nodeValue]}
            >
              <TextIcon icon={nodeValue} /> {node.children}
            </span>
          );
        }

        // tokens like: <right-icon:value>text</right-icon>
        if (node.type === 'right-icon') {
          const nodeValue = node.value as keyof typeof TEXT_COLORS;
          return (
            <span
              key={i}
              className={TEXT_COLORS[nodeValue]}
            >
              {node.children} <TextIcon icon={nodeValue} />
            </span>
          );
        }

        // tokens like: <icon:value />
        if (node.type === 'icon') {
          return (
            <TextIcon
              key={i}
              icon={node.value}
            />
          );
        }

        return null;
      })}
    </p>
  );
};

export default RichText;
