import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink, Link } from "react-router-dom";
import { CartWidget } from "../components/CartWidget";
import { getFirestore, collection, getDocs } from "firebase/firestore";

export const NavBar = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const db = getFirestore();
    const itemsCollection = collection(db, "items");

    getDocs(itemsCollection).then((snapshot) => {
      const uniqueCategories = [...new Set(snapshot.docs.map((doc) => doc.data().categoryId))];
      setCategories(uniqueCategories);
    });
  }, []);

  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <NavLink to="/">Mi Negocio</NavLink>
        <Nav className="me-auto">
          {categories.map((item) => (
            <Link
              key={item}
              className="nav-link"
              to={`/category/${item}`}
            >
              {item}
            </Link>
          ))}
        </Nav>
        <CartWidget />
      </Container>
    </Navbar>
  );
};
