import { useContext , useState } from "react";
import { Button } from "react-bootstrap";
import { CartContext } from "../contexts/cartContext";




const ItemCount = ({ stock, onAdd , itemId }) => {
  const [count, setCount] = useState(1);

  const { cartList } = useContext(CartContext);

  const handleIncrement = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  const handleDecrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const handleAddToCart = () => {
    onAdd(count);
  };

  const cartItem = cartList.find(item => item.id === itemId);


  return (
    <div className="itemCount">
      <div className="countControls">
        <Button variant="primary" type="button" onClick={handleDecrement}>
          -
        </Button>
        <span>{count}</span>
        <Button variant="primary" type="button" onClick={handleIncrement}>
          +
        </Button>
        <Button
          variant="primary"
          type="button"
          onClick={handleAddToCart}
          disabled={cartItem && cartItem.quantity >= stock}
        >
          Agregar al carrito
        </Button>
      </div>
    </div>
  );
};
export default ItemCount;
