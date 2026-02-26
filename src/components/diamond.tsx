const Diamond = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  return (
    <div className={`${className} rotate-45`}>
      <div className="-rotate-45">{children}</div>
    </div>
  );
};

export default Diamond;
