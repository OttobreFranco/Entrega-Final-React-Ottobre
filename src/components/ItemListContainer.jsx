import { useState , useEffect } from "react";
import Container from "react-bootstrap/Container";
import { useParams } from "react-router-dom";

import { ItemList } from '../components/ItemList'

import {
  getFirestore,
  getDocs,
  collection,
} from "firebase/firestore";


export const ItemListContainer = (props) => {
  
  const { category } = useParams();


  const [products, setProducts] = useState([]);

  useEffect(() => {
    const db = getFirestore();
    const itemsCollection = collection(db, "items");
  
    getDocs(itemsCollection).then((snapshot) => {
      const allProducts = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      
      if (category) {
        const filteredProducts = allProducts.filter(
          (product) => product.categoryId === category
        );

        setProducts(filteredProducts);
      } else {
        setProducts(allProducts);
      }
    });
  }, [category]);


  return (
    <Container className="mt-4">
      <h1>{props.greeting}</h1>
      {products.length === 0 ? (
        <div>Loading...</div>
      ) : (
        <ItemList products={products} />
      )}
    </Container>
  );
};
