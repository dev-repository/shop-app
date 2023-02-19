import React from 'react';
import cn from 'classnames';

interface DividerProps {
  className?: string;
}

const Divider: React.FC<DividerProps> = ({
  className = 'mb-12 lg:mb-14 xl:mb-16 pb-0.5 lg:pb-1 xl:pb-0',
}) => {
  return (
    <div
      className={cn(className, { 'border-t border-gray-300': className })}
    ></div>
  );
};

export default Divider;
