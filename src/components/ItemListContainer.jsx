import { useState , useEffect } from "react";
import Container from "react-bootstrap/Container";
import { useParams } from 'react-router-dom'

import { ItemList } from '../components/ItemList'

import {
  getFirestore,
  getDocs,
  collection,
} from "firebase/firestore";

export const ItemListContainer = (props) => {
  
    const { id } = useParams()

  const [products, setProducts] = useState([]);

  // useEffect(() => {
  //   const db = getFirestore();

  //   const refCollection = collection( db, "items" );

  //   getDocs(refCollection).then((snapshot) => {
  //     if(snapshot.size === 0) console.log("no results");
  //     else
         
  //           setProducts(  snapshot.docs.map( (doc) => {
  //             {id: doc.id , ...doc.data()} ));
  //           })
    
  // }, []);
  // useEffect(() => {
  //   const db = getFirestore();
  //   const refCollection = collection(db, "items");
  
  //   getDocs(refCollection).then((snapshot) => {
  //     if (snapshot.size === 0) {
  //       console.log("no results");
  //     } else {
  //       console.log(
  //         snapshot.docs.map( (doc) => {
  //          return { id: doc.id , ...doc.data() };
  //         })
  //       );
  //       setProducts(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
  //     }
  //   });
  // }, []);

//el que mas cerca está

  useEffect(() => {
    const db = getFirestore();

    const itemsCollection = collection( db, "items" );

    getDocs(itemsCollection).then((snapshot) => {
        setProducts(snapshot.docs.map( (doc) => ( { id : doc.id, ...doc.data() })));
    });
  }, []);


  // useEffect(() => {
  //   const db = getFirestore();

  //   console.log(db);

  //   const itemsCollection = collection( db, "items" );

  //   getDocs(itemsCollection).then(response => {
  //     const productsAdapted = response.docs.map( doc => {
  //       const data = doc.data();
  //       return { id: doc.id, ...data() }
  //     })  
  //     setProducts(productsAdapted);
  //   });
  // }, []);


  console.log(products);

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
