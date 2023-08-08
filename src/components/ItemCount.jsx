import { useState } from "react";
import { Button } from "react-bootstrap";

const ItemCount = ({ stock, onAdd }) => {
  const [count, setCount] = useState(1);

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
          disabled={stock === 0}
        >
          Agregar al carrito
        </Button>
      </div>
    </div>
  );
};
export default ItemCount;
