import React, { useCallback } from 'react';

// components
import Button from '~/components/shared/Common/Button';
import Input from '~/components/shared/Form/Input';
import PasswordInput from '~/components/shared/Form/PasswordInput';
import Logo from '~/components/shared/Layout/Logo';
import { IoClose } from 'react-icons/io5';

// trpc
import { trpc } from '~/utils/trpc';

// hooks
import { useApiHookStore } from '~/store/useLayoutStore';
import { useForm } from 'react-hook-form';

// types
import type { SubmitHandler } from 'react-hook-form';
import type { SignupData } from '~/libs/validation/auth';

const SignupForm = () => {
  const mutation = trpc.auth.signup.useMutation();

  const { closeModal, changeModal } = useApiHookStore();

  const { register, handleSubmit, formState } = useForm<SignupData>();

  const onSubmit: SubmitHandler<SignupData> = useCallback(
    (input) => mutation.mutate(input),
    [mutation],
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
          By signing up, you agree to our terms & policy
        </p>
      </div>
      <form
        className="flex flex-col justify-center"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex flex-col space-y-3.5">
          <Input
            label="Name"
            type="text"
            variant="solid"
            width="w-full"
            error={formState.errors?.username?.message}
            {...register('username')}
          />
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
          <PasswordInput
            label="passwordConfirm"
            error={formState.errors?.passwordConfirm?.message}
            {...register('passwordConfirm')}
          />
          <div className="relative">
            <Button
              type="submit"
              loading={mutation.isLoading}
              className="h-11 md:h-12 w-full mt-1.5"
            >
              Register
            </Button>
          </div>
        </div>
      </form>

      <div className="text-sm sm:text-base text-body text-center mt-5 mb-1">
        {'Already have an account?'}{' '}
        <button
          type="button"
          onClick={() => changeModal('LOGIN')}
          className="text-sm sm:text-base text-heading underline font-bold hover:no-underline focus:outline-none"
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default SignupForm;
