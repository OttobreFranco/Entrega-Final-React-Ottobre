import { useContext } from 'react'
import { CartContext } from '../contexts/cartContext'
import { Item } from './Item'
import { Link } from 'react-router-dom'

export const Cart = () => {
    const {cartList, removeList , totalQuantity , deleteItem } = useContext(CartContext)

    // console.log(cartList)

    if(totalQuantity === 0) {
        return (
            <div>
                <h1>No hay items en el carrito</h1>
                <Link to="/" className="Option">Productos</Link>
            </div>
        )
    } else {

    

    return (
        <div>
            {cartList.map(car => <><Item car={car} key={car.id}/> <button onClick={()=> deleteItem(car.id)} className="Button"> Quitar {car.title} </button></>)}
            {/* <h3>Total: ${total}</h3> */}
            <button onClick={() => removeList()} className="Button">Limpiar carrito</button>
            <Link to="/checkout" className="Option">Checkout</Link>
        </div>
    )
}
}