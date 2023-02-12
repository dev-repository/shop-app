import cn from 'classnames';
import React, { InputHTMLAttributes, useState } from 'react';
import EyeOffIcon from '~/components/shared/Icon/EyeOffIcon';
import EyeIcon from '~/components/shared/Icon/EyeIcon';

export interface Props extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  inputClassName?: string;
  label: string;
  name: string;
  shadow?: boolean;
  error: string | undefined;
}
const classes = {
  root: 'py-2 px-4 md:px-5 w-full appearance-none transition duration-150 ease-in-out border border-gray-500 text-input text-xs lg:text-sm font-body rounded-md placeholder-gray-600  transition duration-200 ease-in-out bg-white border border-gray-100 focus:outline-none focus:border-heading h-11 md:h-12',
};
const PasswordInput: React.ForwardRefRenderFunction<HTMLInputElement, Props> = (
  {
    className = 'block',
    inputClassName,
    label,
    name,
    error,
    shadow = false,
    ...rest
  },
  ref,
) => {
  const [show, setShow] = useState(false);

  const rootClassName = cn(classes.root, inputClassName);

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
      <div className="relative">
        <input
          id={name}
          name={name}
          type={show ? 'text' : 'password'}
          ref={ref}
          className={rootClassName}
          autoComplete="off"
          autoCapitalize="off"
          spellCheck="false"
          {...rest}
        />
        <label
          htmlFor={name}
          role="presentation"
          className="absolute end-4 top-5 -mt-2 text-gray-500 cursor-pointer"
          onClick={() => setShow((prev) => !prev)}
        >
          {show ? (
            <EyeOffIcon className="w-6 h-6" />
          ) : (
            <EyeIcon className="w-6 h-6" />
          )}
        </label>
      </div>
      {error && <p className="my-2 text-xs text-red-500">{error}</p>}
    </div>
  );
};

export default React.forwardRef(PasswordInput);
