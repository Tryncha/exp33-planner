import { useVault } from '../context/vault-context';
import BuildResume from './build-resume';

const Vault = ({ openPlanner }: { openPlanner: () => void }) => {
  const { vault } = useVault();

  return (
    <section>
      <h2>Saved builds</h2>
      {vault.length === 0 ? (
        <div className="text-xs">Empty vault</div>
      ) : (
        <div className="flex gap-2">
          {vault.map((bld) => (
            <BuildResume
              key={bld.id}
              buildResume={bld}
              openPlanner={openPlanner}
            />
          ))}
        </div>
      )}
    </section>
  );
};

export default Vault;
