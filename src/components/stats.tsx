import { useBuild } from '../context/build-context';
import { calcStats, getPictoData, getTemplateData } from '../lib/utils';
import AttributeInput from './attribute-input';
import StatOutput from './stat-output';

const Stats = () => {
  const { build } = useBuild();
  const { characterId, attributes, pictosIds } = build;

  const pictosData = pictosIds.map((pId) => getPictoData(pId));

  const baseStats = getTemplateData(characterId).baseStats;
  const stats = calcStats(baseStats, attributes, pictosData);

  return (
    <div className="border border-taupe-700">
      <div className="flex flex-col gap-1 p-2">
        <h2 className="text-center font-semibold">Attributes</h2>
        <AttributeInput attributeId="vitality" />
        <AttributeInput attributeId="might" />
        <AttributeInput attributeId="agility" />
        <AttributeInput attributeId="defense" />
        <AttributeInput attributeId="luck" />
      </div>
      <hr className="border border-taupe-700" />
      <div className="flex flex-col gap-1 p-2">
        <h2 className="text-center font-semibold">Stats</h2>
        <StatOutput
          label="Attack Power"
          value={`${stats.attackPower}`}
        />
        <StatOutput
          label="Speed"
          value={`${stats.speed}`}
        />
        <StatOutput
          label="Critical Rate"
          value={`${stats.critRate}%`}
        />
        <StatOutput
          label="Health"
          value={`${stats.health}`}
        />
        <StatOutput
          label="Defense"
          value={`${stats.defense}`}
        />
      </div>
    </div>
  );
};

export default Stats;
