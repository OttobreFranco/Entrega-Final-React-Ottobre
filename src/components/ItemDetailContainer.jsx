import { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";

//import data from "../data/products.json";
import { ItemDetail } from "../components/ItemDetail";
import { useParams } from "react-router-dom";

import { getFirestore, doc, getDoc } from "firebase/firestore";

export const ItemDetailContainer = (props) => {
  const { id } = useParams();

  const [product, setProduct] = useState([]);


  useEffect(() => {
    const db = getFirestore();

    const itemsDoc = doc( db, "items" , id );

    getDoc(itemsDoc).then((snapshot) => {
      if ( snapshot.exists() ) {
        setProduct( { id : snapshot.id, ...snapshot.data() });
      }
    });
  }, [id]);

  return (
    <Container className="mt-4">
      <h1>Detalle</h1>
      {product === undefined ? (
        <div>Loading...</div>
      ) : (
        <ItemDetail car={product} />
      )}
    </Container>
  );
};
