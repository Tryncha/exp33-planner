'use client';

import { useTranslations } from 'next-intl';
import { useVault } from '../context/vault-context';
import BuildResume from './build-resume';

const Vault = () => {
  const t = useTranslations('Vault');

  const { vault } = useVault();

  return (
    <section className="p-4">
      {vault.length === 0 ? (
        <div className="text-xs">{t('empty')}</div>
      ) : (
        <div className="grid grid-cols-3 gap-2">
          {vault.map((bld) => (
            <BuildResume
              key={bld.id}
              buildResume={bld}
            />
          ))}
        </div>
      )}
    </section>
  );
};

export default Vault;
