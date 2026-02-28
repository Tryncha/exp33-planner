import { useTranslations } from 'next-intl';
import { useVault } from '../context/vault-context';
import BuildResume from './build-resume';

const Vault = ({ openPlanner }: { openPlanner: () => void }) => {
  const t = useTranslations('Vault');

  const { vault } = useVault();

  return (
    <section className="border border-taupe-700 p-2">
      <h2>{t('savedBuilds')}</h2>
      {vault.length === 0 ? (
        <div className="text-xs">{t('empty')}</div>
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
