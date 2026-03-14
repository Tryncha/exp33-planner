import { useTranslations } from 'next-intl';
import { useBuild } from '../context/build-context';
import { calcStats, getCharacterData, getPictoData } from '../lib/utils';
import StatOutput from './stat-output';

const Stats = () => {
  const t = useTranslations('Stats');

  const { build } = useBuild();
  const { characterId, attributes, pictosIds } = build;

  const pictosData = pictosIds.map((pId) => getPictoData(pId));

  const baseStats = getCharacterData(characterId).baseStats;
  const stats = calcStats(baseStats, attributes, pictosData);

  return (
    <section className="flex flex-col border border-taupe-700">
      <h2 className="py-1 text-center font-semibold">{t('title')}</h2>
      <hr className="border-taupe-700" />
      <div className="flex flex-col gap-1 p-2">
        <StatOutput
          label={t('attackPower')}
          value={`${stats.attackPower}`}
        />
        <StatOutput
          label={t('speed')}
          value={`${stats.speed}`}
        />
        <StatOutput
          label={t('critRate')}
          value={`${stats.critRate}%`}
        />
        <StatOutput
          label={t('health')}
          value={`${stats.health}`}
        />
        <StatOutput
          label={t('defense')}
          value={`${stats.defense}`}
        />
      </div>
    </section>
  );
};

export default Stats;
