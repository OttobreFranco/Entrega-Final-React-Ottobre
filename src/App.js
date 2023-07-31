import { BrowserRouter, Routes, Route } from "react-router-dom";

import { CartProvider } from "./contexts/cartContext";
import "./App.css";
import { ItemListContainer } from "./components/ItemListContainer";
import { ItemDetailContainer } from "./components/ItemDetailContainer";
import { NavBar } from "./components/NavBar";

import { getFirestore, collection , getDocs } from "firebase/firestore";
import { useEffect } from "react";

function App() {
  // TRAER DOCUMENTO

  // useEffect(() => {

  //   const db = getFirestore();

  //   const refDoc = doc(db, "items" , "sh8NQVGBM2w11U1Ou8ye")

  //   getDoc(refDoc).then((snapshot) => {
  //     console.log({ id: snapshot.id , ...snapshot.data() });
  //   })

  // },[]);

  // TRAER COLLECTION

  useEffect(() => {
    const db = getFirestore();

    const refCollection = collection( db, "items" );


    getDocs(refCollection).then((snapshot) => {
      if(snapshot.size === 0) console.log("no results");
      else
        console.log(
          snapshot.docs.map( (doc) => {
           return { id: doc.id , ...doc.data() };
          })
        );
    });
  }, []);

  return (
    <CartProvider value={[]}>
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer greeting="Productos" />} />
        <Route
          path="/category/:id"
          element={<ItemListContainer greeting="Productos" />}
        />
        <Route
          path="/item/:id"
          element={<ItemDetailContainer greeting="Productos" />}
        />
      </Routes>
    </BrowserRouter>
    </CartProvider>
  );
}

export default App;
