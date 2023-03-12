import React, { useCallback, useState } from 'react';
import Button from '~/components/shared/Common/Button';
import Input from '~/components/shared/Form/Input';
import PasswordInput from '../shared/Form/PasswordInput';
import Logo from '../shared/Layout/Logo';
import { IoClose } from 'react-icons/io5';

import { useApiHookStore } from '~/store/useLayoutStore';
import { useForm } from 'react-hook-form';
import { signIn } from 'next-auth/react';

import type { SigninData } from '~/libs/validation/auth';
import type { SubmitHandler } from 'react-hook-form';

const LoginForm = () => {
  const { closeModal, changeModal } = useApiHookStore();

  const [loading, setLoading] = useState(false);
  const { register, handleSubmit, formState } = useForm<SigninData>();

  const onSubmit: SubmitHandler<SigninData> = useCallback(
    async (input) => {
      try {
        setLoading(true);
        const resp = await signIn('credentials', {
          ...input,
          redirect: false,
        });

        if (resp) {
          if (!resp.error && resp?.ok) {
            closeModal();
          }
        }
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    },
    [closeModal],
  );

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
      <form
        className="flex flex-col justify-center"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex flex-col space-y-3.5">
          <Input
            label="Email"
            type="email"
            variant="solid"
            width="w-full"
            error={formState.errors?.email?.message}
            {...register('email')}
          />
          <PasswordInput
            label="Password"
            error={formState.errors?.password?.message}
            {...register('password')}
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
              loading={loading}
              disabled={loading}
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
          onClick={() => changeModal('SIGNUP')}
          className="text-sm sm:text-base text-heading underline font-bold hover:no-underline focus:outline-none"
        >
          Register
        </button>
      </div>
    </div>
  );
};

export default LoginForm;
