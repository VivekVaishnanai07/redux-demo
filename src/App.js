import React from "react";
import {
  BrowserRouter, Route, Routes
} from "react-router-dom";
import "./App.css";
import { connect } from "react-redux";
import CartView from "./components/cart-view/cart-view";
import ProductView from "./components/product-view/product-view";
import Header from "./components/header/header";

function App({ current }) {
  return (
    <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/" element={<ProductView />} />
          <Route exact path="/cart-view" element={<CartView />} />
        </Routes>
    </BrowserRouter>
  );
}

const mapStateToProps = (state) => {
  return {
    current: state.shop.currentItem,
  };
};

export default connect(mapStateToProps)(App);
