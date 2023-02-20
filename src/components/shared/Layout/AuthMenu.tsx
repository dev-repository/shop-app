import React from 'react';
import Link from 'next/link';

interface AuthMenuProps {
  href: string;
  className?: string;
  btnProps: React.ButtonHTMLAttributes<any>;
  isAuthorized: boolean;
  children: React.ReactNode;
}

const AuthMenu: React.FC<AuthMenuProps> = ({
  isAuthorized,
  href,
  className,
  btnProps,
  children,
}) => {
  return isAuthorized ? (
    <Link href={href} className={className}>
      {children}
    </Link>
  ) : (
    <button {...btnProps} />
  );
};

export default AuthMenu;
