import { createContext , useState } from 'react'

export const CartContext = createContext([])

export const CartProvider = ({ children }) => {

const [cartList,setCartList] = useState([])

console.log(cartList)

const addToCart =(item,quantity) =>{
    if(isInCart(cartList.id)){
        setCartList(cartList.map(product => {
            return product.id === item.id?{...product,quantity:product.quantity + quantity} : product
        }));
    } else {
        setCartList( [...cartList, {...item,quantity}] );
    }
}

const removeList = ( () => {
    setCartList([]);
})

const deleteItem = (itemId) => {
    setCartList ((prevList) => prevList.filter((cartItem) => cartItem.id !== itemId))
}

const isInCart = (id) =>
cartList.find((product) => product.id === id)? true:false;

return(
<CartContext.Provider value={{cartList,addToCart,removeList,deleteItem,isInCart}}>{children}</CartContext.Provider>
)

}
