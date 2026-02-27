const WeaponPassive = ({ level, passive }: { level: number; passive: string }) => {
  return (
    <div className="flex h-20 items-center gap-4 border-t border-taupe-700 px-4 py-2">
      <h2 className="w-12 text-center text-xl font-semibold">Level {level}</h2>
      <p className="text-sm">{passive}</p>
    </div>
  );
};

export default WeaponPassive;
