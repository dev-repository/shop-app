import React from 'react';
import AuthModal from '~/components/shared/Modal/AuthModal';

export interface ClientProps {
  children: React.ReactNode;
}

export default function Client({ children }: ClientProps) {
  return (
    <>
      {children}
      <AuthModal />
    </>
  );
}
