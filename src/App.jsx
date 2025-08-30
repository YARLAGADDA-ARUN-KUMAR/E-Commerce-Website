import { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Cart } from "./pages/Cart";
import { Whislist } from "./pages/Whislist";
import { AuthLogin } from "./pages/AuthLogin";

function App() {
  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/wishlist" element={<Whislist />} />
          <Route path="/auth/login" element={<AuthLogin />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
