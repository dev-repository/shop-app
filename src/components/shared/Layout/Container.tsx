import React from 'react';
import cn from 'classnames';

type ReactTag = keyof JSX.IntrinsicElements | React.JSXElementConstructor<any>;

interface ContainerProps {
  className?: cn.ArgumentArray | cn.Argument;
  children?: React.ReactNode;
  el?: ReactTag;
  clean?: boolean;
}

const Container: React.FC<ContainerProps> = ({
  children,
  className,
  el = 'div',
  clean,
}) => {
  const Component = el;

  return (
    <Component
      className={cn(className, {
        'mx-auto max-w-[1920px] px-4 md:px-8 2xl:px-16': !clean,
      })}
    >
      {children}
    </Component>
  );
};

export default Container;
