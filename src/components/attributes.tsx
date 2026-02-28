import { useTranslations } from 'next-intl';
import AttributeInput from './attribute-input';

const Attributes = () => {
  const t = useTranslations('Attributes');

  return (
    <div className="flex flex-col gap-1 border border-taupe-700 p-2">
      <h2 className="text-center font-semibold">{t('title')}</h2>
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
    </div>
  );
};

export default Attributes;
