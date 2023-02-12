import React, { useCallback, useMemo } from 'react';
import LoginForm from '~/components/auth/LoginForm';
import Modal from '~/components/shared/Modal/Modal';
import { useStateHookStore, useApiHookStore } from '~/store/useLayoutStore';

const AuthModal = () => {
  const { modal } = useStateHookStore();

  const { closeModal } = useApiHookStore();

  const open = useMemo(() => {
    // return modal.open && modal.type === 'AUTH';
    return true;
  }, [modal]);

  const onClose = useCallback(() => {
    closeModal();
  }, [closeModal]);

  return (
    <Modal open={open} onClose={onClose}>
      <LoginForm />
    </Modal>
  );
};

export default AuthModal;
