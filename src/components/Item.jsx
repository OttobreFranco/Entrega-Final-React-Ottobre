import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from 'react-router-dom';



export const Item = ({ car }) => (

      <Card 
      style={{ width: "18rem" }}
      key={car.id}
      className="float-start">
        <Card.Img variant="top" src={car.imageUrl} />
        <Card.Body>
          <Card.Title>{car.title}</Card.Title>
          <Card.Text>
            Categoría : {car.categoryId}
          </Card.Text>
          <Link to={`/item/${car.id}`}>
          <Button variant="primary">Ver detalle</Button>
          </Link>
        </Card.Body>
      </Card>
  )

