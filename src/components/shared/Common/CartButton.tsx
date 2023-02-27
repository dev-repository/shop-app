import React from 'react';
import CartIcon from '~/components/shared/Icon/CartIcon';

const CartButton = () => {
  return (
    <button
      className="flex items-center justify-center flex-shrink-0 h-auto relative focus:outline-none transform"
      aria-label="cart-button"
    >
      <CartIcon />
      {/* <span className="cart-counter-badge flex items-center justify-center bg-heading text-white absolute -top-2.5 xl:-top-3 -end-2.5 xl:-end-3 rounded-full font-bold"></span> */}
    </button>
  );
};

export default CartButton;
