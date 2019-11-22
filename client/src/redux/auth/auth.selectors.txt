import { createSelector } from 'reselect';

const selectCart = (state) => {
  return state.auth.user
};

export const selectCartItems = createSelector(
  [selectCart],
  (user) => user.cart,
);

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  (cart) =>
    cart.reduce((accumalatedQuantity, cartItem) => accumalatedQuantity + cartItem.quantity, 0)
);

export const selectCartTotal = createSelector(
  [selectCartItems],
  (cart) => 
    cart.reduce((accumalatedQuantity, cartItem) => accumalatedQuantity + (cartItem.quantity * cartItem.product_price), 0)
);