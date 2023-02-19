import React, { useCallback, useMemo } from 'react';
import LoginForm from '~/components/auth/LoginForm';
import SignupForm from '~/components/auth/SignupForm';
import Modal from '~/components/shared/Modal/Modal';
import { useStateHookStore, useApiHookStore } from '~/store/useLayoutStore';

const AuthModal = () => {
  const { modal } = useStateHookStore();

  const { closeModal } = useApiHookStore();

  const onClose = useCallback(() => {
    closeModal();
  }, [closeModal]);

  return (
    <Modal open={modal.open} onClose={onClose}>
      {modal.type === 'LOGIN' && <LoginForm />}
      {modal.type === 'SIGNUP' && <SignupForm />}
    </Modal>
  );
};

export default AuthModal;
