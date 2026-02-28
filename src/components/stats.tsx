import { useTranslations } from 'next-intl';
import { useBuild } from '../context/build-context';
import { calcStats, getPictoData, getTemplateData } from '../lib/utils';
import StatOutput from './stat-output';

const Stats = () => {
  const t = useTranslations('Stats');

  const { build } = useBuild();
  const { characterId, attributes, pictosIds } = build;

  const pictosData = pictosIds.map((pId) => getPictoData(pId));

  const baseStats = getTemplateData(characterId).baseStats;
  const stats = calcStats(baseStats, attributes, pictosData);

  return (
    <div className="flex flex-col gap-1 border border-taupe-700 p-2">
      <h2 className="text-center font-semibold">{t('title')}</h2>
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
  );
};

export default Stats;
