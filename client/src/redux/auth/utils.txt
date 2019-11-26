// *************************** ADD (1) ITEM TO CART *************************** //
export const addItemToCart = (currentCartItems, cartItemToAdd) => {
  const existingCartItem = currentCartItems.find(currentCartItem => {
    return currentCartItem.id === cartItemToAdd.id
  });

  // If 'existingCartItem' ? new array returned via currentCartItems.map()
  if (existingCartItem) {
    return currentCartItems.map(currentCartItem => (
      currentCartItem.id === cartItemToAdd.id
        ? { ...currentCartItem, quantity: currentCartItem.quantity + 1, product_quantity: currentCartItem.product_quantity - 1}
        : currentCartItem
    ))
  };

  return [...currentCartItems, {...cartItemToAdd, quantity: 1, product_quantity: cartItemToAdd.product_quantity - 1}];

};

// *************************** REMOVE (1) ITEM FROM CART *************************** //
export const removeItemFromCart = (currentCartItems, cartItemToRemove) => {
  const existingCartItem = currentCartItems.find(currentCartItem => {
    return currentCartItem.id === cartItemToRemove.id
  });

  if (existingCartItem.quantity === 1) {
    return currentCartItems.filter(currentCartItem => (
      currentCartItem.id !== cartItemToRemove.id
    ));
  } else {
    return currentCartItems.map(currentCartItem => (
      currentCartItem.id === cartItemToRemove.id
        ? {...currentCartItem, quantity: currentCartItem.quantity - 1, product_quantity: currentCartItem.product_quantity + 1}
        : currentCartItem
    ))
  };
};

// *************************** CLEAR ITEM FROM CART *************************** //
export const clearItemFromCart = (currentCartItems, cartItemToRemove) => {
  const existingCartItem = currentCartItems.find(currentCartItem => {
    return currentCartItem.id === cartItemToRemove.id
  });

  if (existingCartItem.quantity >= 0) {
    return currentCartItems.filter(currentCartItem => (
      currentCartItem.id !== cartItemToRemove.id
    ));
  };
};