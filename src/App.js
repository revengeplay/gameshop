import React, { useEffect } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Menubar from "./components/Menubar";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { useDispatch } from "react-redux";
import { setUser } from "./redux/features/authSlice";
import AddProduct from "./pages/AddProduct";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import ProductList from "./pages/ProductList";

function App() {
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem("prifile"));
  useEffect(() => {
    dispatch(setUser(user));
  });
  return (
    <BrowserRouter>
      <div className="">
        <Header />
        <Navbar />
        <Menubar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/addproduct" element={<AddProduct />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/products/:category" element={<ProductList />} />
          <Route path="/products" element={<ProductList />} />
        </Routes>
        <ToastContainer />
      </div>
    </BrowserRouter>
  );
}

export default App;
