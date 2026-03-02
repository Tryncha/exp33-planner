import { useBuild } from '@/src/context/build-context';
import { Modal } from '@/src/context/modal-context';
import WEAPONS from '@/src/data/weapons';
import { calcWeaponPower } from '@/src/lib/utils';
import { AttributeId, Attributes, Weapon } from '@/src/types';
import { useLocale, useTranslations } from 'next-intl';
import Image from 'next/image';
import { ElementIcon } from '../icons';
import WeaponPassive from '../weapon-passive';
import { useState } from 'react';
import { ATTRIBUTES, ELEMENTS } from '@/src/lib/constants';

const WeaponOption = ({
  weaponData,
  isEquipped,
  onClick
}: {
  weaponData: Weapon;
  isEquipped: boolean;
  onClick: () => void;
}) => {
  const t = useTranslations();
  const locale = useLocale();

  const { build } = useBuild();
  const { characterId, attributes } = build;

  return (
    <div
      onClick={onClick}
      className={`${isEquipped ? 'bg-taupe-700 hover:bg-taupe-600' : 'hover:bg-taupe-800'} ${characterId === 'gustave' ? 'h-32' : 'h-86.5'} flex w-md flex-col border border-taupe-700 hover:cursor-pointer`}
    >
      {/* Weapon Info */}
      <div className="flex items-center p-2">
        {/* Image */}
        <div className="flex size-28 items-center justify-center">
          <Image
            src={`/weapons/${characterId}/${weaponData.id}.png`}
            alt={weaponData[locale].name}
            width={weaponData.imgData.width}
            height={weaponData.imgData.height}
            className={weaponData.imgData.classRotation}
          />
        </div>

        {/* Stats */}
        <section className="flex flex-1 flex-col gap-2 px-4">
          <h2 className="text-2xl font-bold tracking-wide">{weaponData[locale].name}</h2>
          <div className="flex gap-6">
            <div className="flex flex-1 flex-col items-center">
              <span className="text-sm font-semibold text-taupe-400">{t('WeaponInfo.power')}</span>
              <span className="text-xl font-bold">
                {calcWeaponPower(weaponData.basePower, weaponData.scaling, attributes)}
              </span>
            </div>
            <div className="flex flex-1 flex-col items-center gap-1">
              <span className="text-sm font-semibold text-taupe-400">{t('WeaponInfo.element')}</span>
              <ElementIcon element={weaponData.element} />
            </div>
            {Object.entries(weaponData.scaling).map(([key, value]) => (
              <div
                key={key}
                className="flex flex-1 flex-col items-center"
              >
                <span className="text-sm font-semibold text-taupe-400 capitalize">{t(`Attributes.${key}`)}</span>
                <span className="text-xl font-bold">{value}</span>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Passives */}
      {characterId !== 'gustave' &&
        (!weaponData[locale].passives ? (
          <div className="flex h-60 items-center justify-center border-t border-taupe-700 text-taupe-500 italic">
            {t('WeaponInfo.notPassives')}
          </div>
        ) : (
          <div className="flex flex-1 flex-col">
            {weaponData[locale].passives.map((pss, i) => (
              <WeaponPassive
                key={`${weaponData.id}-passive-${i}`}
                size="sm"
                level={[4, 10, 20][i]}
                passive={pss}
              />
            ))}
          </div>
        ))}
    </div>
  );
};

const WeaponSelector = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  const t = useTranslations();
  const locale = useLocale();

  const { build, changeWeapon } = useBuild();
  const { characterId, weaponId } = build;

  const [filterByName, setFilterByName] = useState('');
  const [filterByAttributes, setFilterByAttributes] = useState<AttributeId[]>([]);
  const [filterByElement, setFilterByElement] = useState('');

  function handleChange(newWeaponId: Weapon['id']) {
    changeWeapon(newWeaponId);
    onClose();
  }

  function toggleFilterByElement(newElement: string) {
    if (filterByElement === newElement) {
      setFilterByElement('');
    } else {
      setFilterByElement(newElement);
    }
  }

  function toggleFilterByAttribute(newAttribute: AttributeId) {
    if (!filterByAttributes.includes(newAttribute)) {
      setFilterByAttributes(filterByAttributes.concat(newAttribute));
    } else {
      setFilterByAttributes(filterByAttributes.filter((attr) => attr !== newAttribute));
    }
  }

  const characterFilter = (wpn: Weapon) => wpn.characterIds.includes(characterId);
  const attrsFilter = (wpn: Weapon) =>
    !filterByAttributes.length ? wpn : filterByAttributes.every((attr) => wpn.scaling[attr]);
  const elementFilter = (wpn: Weapon) => (!filterByElement ? wpn : wpn.element === filterByElement);
  const nameFilter = (wpn: Weapon) => wpn[locale].name.toLowerCase().includes(filterByName.toLowerCase());

  const filteredWeapons = WEAPONS.filter(characterFilter).filter(attrsFilter).filter(elementFilter).filter(nameFilter);

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      className="flex flex-col gap-2 rounded-xs bg-taupe-900 p-4"
    >
      {/* Filters */}
      <section className="flex justify-between gap-4">
        <input
          type="text"
          value={filterByName}
          onChange={(e) => setFilterByName(e.target.value)}
          placeholder={t('Pictos.searchByName')}
          className="flex-1 border border-taupe-700 px-2 text-sm placeholder:italic"
        />

        <div className="flex justify-between gap-1">
          {ELEMENTS.map((elem) => (
            <button
              key={elem}
              onClick={() => toggleFilterByElement(elem)}
              className={`${filterByElement === elem ? 'bg-taupe-700 hover:bg-taupe-600' : 'hover:bg-taupe-800'} border border-taupe-700 px-2 py-1 text-sm hover:cursor-pointer`}
            >
              <ElementIcon
                element={elem}
                size={18}
              />
            </button>
          ))}
        </div>

        <div className="flex justify-between gap-1">
          {ATTRIBUTES.filter((attr) => attr !== 'might').map((attr) => (
            <button
              key={attr}
              onClick={() => toggleFilterByAttribute(attr)}
              className={`${filterByAttributes.includes(attr) ? 'bg-taupe-700 hover:bg-taupe-600' : 'hover:bg-taupe-800'} w-32 border border-taupe-700 px-2 text-sm hover:cursor-pointer`}
            >
              {t(`Attributes.${attr}`)}
            </button>
          ))}
        </div>
      </section>

      {/* Weapons */}
      <section className="scrollbar-thumb-taupe-600 scrollbar-track-taupe-800 scrollbar-thin flex h-175 w-344 flex-wrap content-start gap-2 overflow-y-auto">
        {filteredWeapons.map((wpn) => (
          <WeaponOption
            key={wpn.id}
            weaponData={wpn}
            isEquipped={weaponId === wpn.id}
            onClick={() => handleChange(wpn.id)}
          />
        ))}
      </section>
    </Modal>
  );
};

export default WeaponSelector;
