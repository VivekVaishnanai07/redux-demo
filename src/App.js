import React from "react";
import {
  BrowserRouter, Route, Routes
} from "react-router-dom";
import "./App.css";
import CartView from "./components/cart-view/cart-view";
import ProductView from "./components/product-view/product-view";
import Header from "./components/header/header";
import UserList from "./components/user-list/user-list";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path="/" element={<ProductView />} />
        <Route exact path="/cart-view" element={<CartView />} />
        <Route exact path="/user-list" element={<UserList />} />
      </Routes>
    </BrowserRouter>
  );
}



export default App;
