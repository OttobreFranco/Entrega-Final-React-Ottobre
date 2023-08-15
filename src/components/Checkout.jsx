import { getFirestore, collection, addDoc } from "firebase/firestore";
import { useContext, useState } from "react";
import { CartContext } from "../contexts/cartContext";
import { Button, Container, Form } from "react-bootstrap";
import Table from "react-bootstrap/Table";

export const Checkout = () => {
  const [formValues, setFormValues] = useState({
    name: "",
    phone: "",
    email: "",
  });

  const { cartList, deleteItem, removeList , total} = useContext(CartContext);

  const sendOrder = () => {
    const order = {
      buyer: formValues,
      items: cartList,
      total: total(),
    };

    const db = getFirestore();
    const orderCollection = collection(db, "orders");

    addDoc(orderCollection, order).then((response) => {
      if (response.id) {
        removeList();
        alert("Su orden: " + response.id + " ha sido completada!");
      }
    });
  };

  const handleChange = (ev) => {
    setFormValues((prev) => ({
      ...prev,
      [ev.target.name]: ev.target.value,
    }));
  };


  return (
    <Container className="mt-4">
      <h1>Lista de productos</h1>
      {!cartList.length ? (
        <mark>No hay productos</mark>
      ) : (
        <>
          <Table striped bordered hover variant="dark">
            <thead>
              <tr>
                <th>Nombre</th>
                <th></th>
                <th>Precio</th>
                <th>Cantidad</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {cartList.map((producto) => (
                <tr producto={producto.id} key={producto.id}>
                  <td>{producto.title}</td>
                  <td>
                    <img src={producto.imageUrl} alt={producto.title} />
                  </td>
                  <td>{producto.price}</td>
                  <td>{producto.quantity}</td>
                  <td>
                    <Button onClick={() => deleteItem(producto.id)}>
                      Eliminar
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr>
                <td>Total</td>
                <td></td>
                <td></td>
                <td>{total()}</td>
                <td></td>
              </tr>
            </tfoot>
          </Table>
          <h2>Ingresar los datos del usuario</h2>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Nombre</Form.Label>
              <Form.Control
                onChange={handleChange}
                value={formValues.name}
                type="text"
                name="name"
              />
            </Form.Group>
            <Form.Group
              className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                onChange={handleChange}
                value={formValues.email}
                type="email"
                name="email"
              />
            </Form.Group>
            <Form.Group
              className="mb-3">
              <Form.Label>Tel</Form.Label>
              <Form.Control
                onChange={handleChange}
                value={formValues.phone}
                type="text"
                name="phone"
              />
            </Form.Group>
            <Button 
            variant="primary"
            type="button"
            onClick={sendOrder}
            >
                Submit
            </Button>
          </Form>
        </>
      )}
    </Container>
  );
};
