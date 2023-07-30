import { useEffect , useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";

import {
  getFirestore,
  getDocs,
  collection,
  query,
  where,
} from "firebase/firestore";

import { useParams } from 'react-router-dom'


import { CartWidget } from "../components/CartWidget";
import data from "../data/products.json";


// const categories = data.map(product => product.category);
// const unique = new Set(categories)


export const NavBar = () => {

  const [products, setProducts] = useState([]);

  // useEffect(() => {

 
  //   const db = getFirestore();
    
  //   const q = query(
  //     collection(db, "items"),
  //     where("category", "===" , "Auto")
  //   );

  //   getDocs(q).then((snapshot) => {
  //     if  (snapshot.size === 0) {
  //       console.log("No Results");
  //     }
  //     setProducts(snapshot.docs.map(( doc ) => ( { id: doc.id , ...doc.data() } )));
  //   })
  // },[]);

  const unique = [ "Camion" , "Auto" ];
 

  return (
  <Navbar bg="dark" variant="dark">
    <Container>
      <NavLink to="/">Mi Negocio</NavLink>
      <Nav className="me-auto">
        {/* {[...unique].map(item => (
          <NavLink 
          key={item} 
          className="nav-link" 
          to={`/category/${item}`}
          >
            {item}
          </NavLink>
        ))} */}
         {[...unique].map(item => (
          <NavLink 
          key={item} 
          className="nav-link" 
          to={`/category/${item}`}
          >
            {item}
          </NavLink>
        ))}
      </Nav>
      <CartWidget />
    </Container>
  </Navbar>
  );
}
