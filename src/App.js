import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Checkout } from "./components/Checkout";
import { Cart } from "./components/Cart"
import { CartProvider } from "./contexts/cartContext";
import "./App.css";
import { ItemListContainer } from "./components/ItemListContainer";
import { ItemDetailContainer } from "./components/ItemDetailContainer";
import { NavBar } from "./components/NavBar";

function App() {


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
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/checkout" element={<Checkout greeting="Checkout"/>}/>
      </Routes>
    </BrowserRouter>
    </CartProvider>
  );
}

export default App;
