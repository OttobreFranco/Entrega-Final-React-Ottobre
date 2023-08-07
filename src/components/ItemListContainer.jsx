import { useState , useEffect } from "react";
import Container from "react-bootstrap/Container";

import { ItemList } from '../components/ItemList'

import {
  getFirestore,
  getDocs,
  collection,
} from "firebase/firestore";

export const ItemListContainer = (props) => {
  

  const [products, setProducts] = useState([]);


  useEffect(() => {
    const db = getFirestore();

    const itemsCollection = collection( db, "items" );

    getDocs(itemsCollection).then((snapshot) => {
        setProducts(snapshot.docs.map( (doc) => ( { id : doc.id, ...doc.data() })));
    });
  }, []);

    return (
    <Container className="mt-4">
      <h1>{props.greeting}</h1>
      {products.length === 0 ? (
      <div>Loading...</div>
      ) : (
      
     <ItemList products={products}/>
        
      )}
    </Container>
  );
};
