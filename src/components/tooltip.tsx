const TOOLTIP_DIRECTIONS = {
  top: 'bottom-full left-1/2 my-2 -translate-x-1/2',
  right: 'top-1/2 left-full mx-2 -translate-y-1/2',
  bottom: 'top-full left-1/2 my-2 -translate-x-1/2',
  left: 'top-1/2 right-full mx-2 -translate-y-1/2'
};

export const Tooltip = ({
  isHovering,
  direction = 'top',
  className,
  children
}: {
  isHovering: boolean;
  direction?: keyof typeof TOOLTIP_DIRECTIONS;
  className?: string;
  children: React.ReactNode;
}) => {
  if (!isHovering) return;

  return <div className={`${TOOLTIP_DIRECTIONS[direction]} ${className} absolute z-20`}>{children}</div>;
};

export default Tooltip;
