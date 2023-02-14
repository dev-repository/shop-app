import React from 'react';
import Button from '~/components/shared/Common/Button';
import Input from '~/components/shared/Form/Input';
import PasswordInput from '../shared/Form/PasswordInput';
import Logo from '../shared/Layout/Logo';
import { IoClose } from 'react-icons/io5';
import { useApiHookStore } from '~/store/useLayoutStore';

const SignupForm = () => {
  const { closeModal, changeModal } = useApiHookStore();
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
      <form className="flex flex-col justify-center" noValidate>
        <div className="flex flex-col space-y-3.5">
          <Input
            label="Name"
            type="text"
            variant="solid"
            width="w-full"
            error={undefined}
            name="name"
          />
          <Input
            label="Email"
            type="email"
            variant="solid"
            width="w-full"
            error={undefined}
            name="email"
          />
          <PasswordInput name="password" label="Password" error={undefined} />
          <div className="relative">
            <Button
              type="submit"
              loading={false}
              disabled={false}
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
