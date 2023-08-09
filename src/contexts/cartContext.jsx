import { createContext, useState } from "react";

export const CartContext = createContext({
  cartList: [],
});

export const CartProvider = ({ children }) => {
  const [cartList, setCartList] = useState([]);

  const addToCart = (item, quantity) => {
    const{ stock , ...rest } = item

    const isInCart = cartList.some((item) => item.id === rest.id);

    if (!isInCart) setCartList(prev => [...prev, { ...rest, quantity },]);

    else {
      const actualizarItems = cartList.map(item => {
        if (item.id === rest.id)
          return {
            ...item,
            quantity: item.quantity + quantity,
          }
          else return item
    })
    setCartList(actualizarItems)
    }
  };


  const removeList = () => {
    setCartList([]);
  };


  const deleteItem = (itemId) => {
    setCartList(prevList => prevList.filter(cartItem => cartItem.id !== itemId));
  };
  

  const totalQuantity = cartList.length;

  const total = () =>
    cartList.reduce(
      (acumulador, valorActual) =>
        acumulador + valorActual.quantity * valorActual.price,
      0
    );

  return (
    <CartContext.Provider
      value={{
        cartList,
        addToCart,
        removeList,
        deleteItem,
        totalQuantity,
        total,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
