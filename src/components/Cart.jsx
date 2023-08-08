import React, { useContext } from "react";
import { CartContext } from "../contexts/cartContext";
import { Item } from "./Item";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

export const Cart = () => {
  const { cartList, removeList, totalQuantity, deleteItem, total } =
    useContext(CartContext);

  if (totalQuantity === 0) {
    return (
      <div>
        <h1>No hay items en el carrito</h1>
        <Link to="/" className="Option">
          Productos
        </Link>
      </div>
    );
  } else {
    return (
      <div>
        {cartList.map((car) => (
          <div key={car.id}> 
            <Item car={car} />
            <Button onClick={() => deleteItem(car.id)} className="Button">
              Quitar {car.title}
            </Button>
          </div>
        ))}
        <h3>Total: ${total()}</h3>
        <Button onClick={() => removeList()} className="Button">
          Limpiar carrito
        </Button>

        <Link to="/checkout" className="Option">
          <Button variant="secondary">Checkout</Button>
        </Link>
      </div>
    );
  }
};