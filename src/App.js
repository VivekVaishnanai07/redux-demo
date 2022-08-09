import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/header/Header"
import { loadProducts } from "./components/redux/action";
import { store } from "./components/redux/store";
import CartView from "./components/showItems/CartView";
import ProductList from "./components/showItems/itemCards"
import "./App.css"


function App() {
  store.dispatch(loadProducts());
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<ProductList />} exact />
        <Route path='/cartView' element={<CartView />} exact />
      </Routes>
    </BrowserRouter>
  )
}

export default App;