import cn from 'classnames';
import React, { InputHTMLAttributes } from 'react';

export interface Props extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  inputClassName?: string;
  label?: string;
  name: string;
  error?: string;
  type?: string;
  shadow?: boolean;
  variant?: 'normal' | 'solid' | 'outline';
}
const classes = {
  root: 'py-2 px-4 md:px-5 w-full appearance-none transition duration-150 ease-in-out border text-input text-xs lg:text-sm font-body rounded-md placeholder-body min-h-12 transition duration-200 ease-in-out',
  normal:
    'bg-gray-100 border-gray-300 focus:shadow focus:bg-white focus:border-primary',
  solid:
    'bg-white border-gray-300 focus:outline-none focus:border-heading h-11 md:h-12',
  outline: 'border-gray-300 focus:border-primary',
  shadow: 'focus:shadow',
};
const Input: React.ForwardRefRenderFunction<HTMLInputElement, Props> = (
  {
    className = 'block',
    label,
    name,
    error,
    variant = 'normal',
    shadow = false,
    type = 'text',
    inputClassName,
    ...rest
  },
  ref,
) => {
  const rootClassName = cn(
    classes.root,
    {
      [classes.normal]: variant === 'normal',
      [classes.solid]: variant === 'solid',
      [classes.outline]: variant === 'outline',
    },
    {
      [classes.shadow]: shadow,
    },
    inputClassName,
  );
  return (
    <div className={className}>
      {label && (
        <label
          htmlFor={name}
          className="block text-gray-600 font-semibold text-sm leading-none mb-3 cursor-pointer"
        >
          {label}
        </label>
      )}
      <input
        id={name}
        name={name}
        type={type}
        ref={ref}
        className={rootClassName}
        autoComplete="off"
        spellCheck="false"
        aria-invalid={error ? 'true' : 'false'}
        {...rest}
      />
      {error && <p className="my-2 text-xs text-red-500">{error}</p>}
    </div>
  );
};

export default React.forwardRef(Input);
