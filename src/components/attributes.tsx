import { useTranslations } from 'next-intl';
import AttributeInput from './attribute-input';

const Attributes = () => {
  const t = useTranslations('Attributes');

  return (
    <section className="flex flex-col border border-taupe-700">
      <h2 className="py-1 text-center font-semibold">{t('title')}</h2>
      <hr className="border-taupe-700" />
      <div className="flex flex-col gap-1 p-2">
        <AttributeInput
          label={t('vitality')}
          attributeId="vitality"
        />
        <AttributeInput
          label={t('might')}
          attributeId="might"
        />
        <AttributeInput
          label={t('agility')}
          attributeId="agility"
        />
        <AttributeInput
          label={t('defense')}
          attributeId="defense"
        />
        <AttributeInput
          label={t('luck')}
          attributeId="luck"
        />
        <span className="mt-0.5 text-center text-xs tracking-wide">
          {t.rich('amountHint', { strong: (chunks) => <strong>{chunks}</strong> })}
        </span>
      </div>
    </section>
  );
};

export default Attributes;
