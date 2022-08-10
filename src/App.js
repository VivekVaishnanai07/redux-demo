import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import CartView from "./components/cart-view/cart-view";
import Header from "./components/header/header";
import ProductsView from "./components/products-view/products-view";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<ProductsView />} exact />
        <Route path='/cart-view' element={<CartView />} exact />
      </Routes>
    </BrowserRouter>
  )
}

export default App;