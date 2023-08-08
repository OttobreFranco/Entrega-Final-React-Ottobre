import { createContext , useState } from 'react'

export const CartContext = createContext({
    cartList: []
})

export const CartProvider = ({ children }) => {

const [cartList,setCartList] = useState([])

const addToCart = (item, quantity) => {
    if (isInCart(item.id)) {
      setCartList((prevCartList) => {
        return prevCartList.map((product) =>
          product.id === item.id
            ? { ...product, quantity: product.quantity + quantity }
            : product
        );
      });
    } else {
      setCartList([...cartList, { ...item, quantity }]);
    }
  };
  

const removeList = ( () => {
    setCartList([]);
})

const deleteItem = (itemId) => {
    setCartList ((prevList) => prevList.filter((cartItem) => cartItem.id !== itemId))
}

const isInCart = (id) =>
cartList.find((product) => product.id === id)? true:false;


const totalQuantity = cartList.length;

const total = () =>
cartList.reduce(
  (acumulador, valorActual) =>
    acumulador + valorActual.quantity * valorActual.price,
  0
);


return(
<CartContext.Provider value={{cartList,addToCart,removeList,deleteItem,totalQuantity,total}}>{children}</CartContext.Provider>
)

}
