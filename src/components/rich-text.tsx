import Image from 'next/image';
import { capitalizeWord } from '../lib/utils';

// https://regex101.com/

// Regex designed for detecting tokens like:

// <name:value1-value2>text</name> || <name:value1-value2/>
const TAG_REGEX_1 = /<(\w+)(?::([\w-]+))?>(.*?)<\/\1>|<(\w+):([\w-]+)\/>/g;

// <name1-name2:value>text</name1-name2> || <name1-name2:value/>
const TAG_REGEX_2 = /<([\w-]+)(?::(\w+))?>(.*?)<\/\1>|<([\w-]+):(\w+)\/>/g;

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
      // tokens like: <name:value/>
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

const ICON_COLORS = {
  heal: 'text-lime-600',
  burn: 'text-orange-600'
};

const TextIcon = ({ icon }: { icon: string }) => {
  return (
    <Image
      src={`/ui/status-effect/${icon}.png`}
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
    <p className="text-sm">
      {nodes.map((node, i) => {
        if (node.type === 'text') {
          return <span key={i}>{node.value}</span>;
        }

        if (node.type === 'textIcon' && node.value === 'heal') {
          return (
            <span
              key={i}
              className="font-semibold text-lime-600"
            >
              {node.children} <TextIcon icon="heal" />
            </span>
          );
        }

        if (node.type === 'textIcon' && node.value === 'burn') {
          return (
            <span
              key={i}
              className="font-semibold text-orange-600"
            >
              {node.children} <TextIcon icon="burn" />
            </span>
          );
        }

        if (node.type === 'icon') {
          return <TextIcon icon={node.value} />;
        }

        return null;
      })}
    </p>
  );
};

export default RichText;
