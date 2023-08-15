import cart from "../assets/shopping-cart.png"
import { useContext } from 'react'
import { CartContext } from '../contexts/cartContext'
import { Link } from 'react-router-dom'

const styles = {
    img: {
        height: "2rem",
        width: "auto",
    },
    span: {
        color: "white",
        paddingLeft: 10,
    },
}

export const CartWidget = () => {
    const { totalQuantity } = useContext(CartContext)

    return (
        <Link to ="/cart" className="CartWidget">
            <img style={styles.img} className="CartImg" src={cart} alt="cart-widget" />
            <span style={styles.span}>{ totalQuantity() }</span> 
        </Link>
        
    )
}