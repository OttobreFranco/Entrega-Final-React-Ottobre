import { useContext , useState } from 'react'
import ItemCount from './ItemCount';
import { CartContext } from "../contexts/cartContext"


export const ItemDetail = ({ car }) => {

const [showItemCount, setShowItemCount] = useState(true)
const [selectedQuantity, setSelectedQuantity] = useState(0)

const { addToCart } = useContext(CartContext)

const handleAddToCart = (count) => {
  setSelectedQuantity(count)

  setShowItemCount(false)
  
  addToCart(car,count)
}

const handleFinishPurchase = () => {
  window.location.href= "/cart";
}

  return (
    <>
    <div>{car.title}</div>
    <div>{car.categoryId}</div>
    <div>Precio: {car.price}</div>
    <div>Stock: {car.stock}</div>
    <img src={car.imageUrl} alt={car.title}/>
    {showItemCount ? (
      <ItemCount stock={car.stock} onAdd={handleAddToCart} />
    ) : (
      <>
      <p>Cantidad: {selectedQuantity}</p>
      <button onClick={handleFinishPurchase}> Realizar compra</button>
      </>
    )}
    </>
    
  );
};
