import { createContext , useState } from 'react'

export const CartContext = createContext({
    cartList: []
})

export const CartProvider = ({ children }) => {

const [cartList,setCartList] = useState([])


const addToCart =(item,quantity) => {
    if(isInCart(cartList.id)){
        setCartList(cartList.map(product => {
            return product.id === item.id?{...product,quantity:product.quantity + quantity} : product
        }));
    } else {
        setCartList( [...cartList, {...item,quantity}] );
    }
    console.log(cartList)
}

const removeList = ( () => {
    setCartList([]);
})

const deleteItem = (itemId) => {
    setCartList ((prevList) => prevList.filter((cartItem) => cartItem.id !== itemId))
}

const isInCart = (id) =>
cartList.find((product) => product.id === id)? true:false;


const totalQuantity = cartList.length;

console.log(cartList)

return(
<CartContext.Provider value={{cartList,addToCart,removeList,deleteItem,totalQuantity}}>{children}</CartContext.Provider>
)

}
