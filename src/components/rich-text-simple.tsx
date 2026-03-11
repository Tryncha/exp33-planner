// File in development
// An attempt to improve text enrichments...

import { Locale } from 'next-intl';
import { capitalizeWord } from '../lib/utils';
import Image from 'next/image';
import React from 'react';

const RULES = [
  {
    key: 'heal',
    colorClass: 'text-red-500',
    iconSrc: '/ui/icons/heal.png',
    regex: {
      en: /Heal|Heals/,
      es: /Cura/
    }
  }
];

function generateRegex(locale: Locale) {
  return new RegExp(`\\b(${RULES.map((rule) => rule.regex[locale].source).join('|')})\\b`, 'gi');
}

function parseText(text: string, locale: Locale) {
  const nodes = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;

  const COMPLETE_REGEX = generateRegex(locale);

  while ((match = COMPLETE_REGEX.exec(text))) {
    const word = match[0];

    if (match.index > lastIndex) {
      nodes.push(text.slice(lastIndex, match.index));
    }

    const rule = RULES.find((rule) => new RegExp(`^(${rule.regex[locale]})$`, 'i').test(word));

    if (rule) {
      nodes.push(
        <span
          key={match.index}
          style={{ color: rule.colorClass }}
        >
          {rule.iconSrc && (
            <Image
              src={rule.iconSrc}
              alt={`${capitalizeWord(rule.key)} Icon`}
              width={16}
              height={16}
              className="inline-block"
            />
          )}
          {word}
        </span>
      );
    } else {
      nodes.push(word);
    }

    lastIndex = COMPLETE_REGEX.lastIndex;
  }

  if (lastIndex < text.length) {
    nodes.push(text.slice(lastIndex));
  }

  return nodes;
}

const RichText = ({ text, locale }: { text: string; locale: Locale }) => {
  const nodes = parseText(text, locale);

  return (
    <p className="text-xs font-medium">
      {nodes.map((node, i) => (typeof node === 'string' ? <React.Fragment key={i}>{node}</React.Fragment> : node))}
    </p>
  );
};
