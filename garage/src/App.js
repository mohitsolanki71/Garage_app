import "./App.css";
import { Navbar } from "./components/navbar";
import { Cart } from "./components/cart";
import { CheckOut } from "./components/checkout";
import { Home } from "./components/home";
import { ShopDetail } from "./components/shopDetail";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/shop/:id" element={<ShopDetail />}>
          {" "}
        </Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/checkout" element={<CheckOut />}></Route>
      </Routes>
    </div>
  );
}

export default App;
