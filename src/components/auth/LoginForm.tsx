import React from 'react';
import Button from '~/components/shared/Common/Button';
import Input from '../shared/Form/input';
import PasswordInput from '../shared/Form/PasswordInput';
import Logo from '../shared/Layout/Logo';
import { IoClose } from 'react-icons/io5';
import { useApiHookStore } from '~/store/useLayoutStore';

const LoginForm = () => {
  const { closeModal } = useApiHookStore();
  return (
    <div className="overflow-hidden bg-white mx-auto rounded-lg w-full sm:w-96 md:w-450px border border-gray-300 py-5 px-5 sm:px-8">
      <button
        aria-label="Close panel"
        type="button"
        className="flex w-full justify-end"
        onClick={closeModal}
      >
        <IoClose className="text-xl" />
      </button>
      <div className="text-center mb-6 pt-2.5">
        <div>
          <Logo />
        </div>
        <p className="text-sm md:text-base text-body mt-2 mb-8 sm:mb-10">
          Login with your email & password
        </p>
      </div>
      <form className="flex flex-col justify-center" noValidate>
        <div className="flex flex-col space-y-3.5">
          <Input
            label="Email"
            type="email"
            variant="solid"
            width="w-full"
            error={undefined}
            // error={errors.email?.message}
          />
          <PasswordInput
            label="Password"
            error={undefined}
            // error={errors.password?.message}
          />
          <div className="flex items-center justify-center">
            <div className="flex items-center flex-shrink-0">
              <label className="switch relative inline-block w-10 cursor-pointer">
                <input
                  id="remember"
                  type="checkbox"
                  className="opacity-0 w-0 h-0"
                />
                <span className="bg-gray-500 absolute inset-0 transition-all duration-300 ease-in slider round"></span>
              </label>
              <label
                htmlFor="remember"
                className="flex-shrink-0 text-sm text-heading ps-3 cursor-pointer"
              >
                Remember me
              </label>
            </div>
            <div className="flex ms-auto">
              <button
                type="button"
                className="text-end text-sm text-heading ps-3 underline hover:no-underline focus:outline-none"
              >
                Forgot password?
              </button>
            </div>
          </div>
          <div className="relative">
            <Button
              type="submit"
              loading={false}
              disabled={false}
              className="h-11 md:h-12 w-full mt-1.5"
            >
              Login
            </Button>
          </div>
        </div>
      </form>

      <div className="text-sm sm:text-base text-body text-center mt-5 mb-1">
        {"Don't have any account?"}{' '}
        <button
          type="button"
          className="text-sm sm:text-base text-heading underline font-bold hover:no-underline focus:outline-none"
        >
          Register
        </button>
      </div>
    </div>
  );
};

export default LoginForm;
