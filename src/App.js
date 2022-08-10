import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/header/header"
import { loadProducts } from "./components/redux/action";
import store from "./components/redux/store";
import CartView from "./components/cart-view/cart-view";
import ProductsView from "./components/products-view/products-view"
import "./App.css"

function App() {
  store.dispatch(loadProducts());
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