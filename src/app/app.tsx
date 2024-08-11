"use client";
import NavBar from "@/components/NavBar";
import { store } from "@/redux/store";
import React, { useState } from "react";
import { Toaster } from "react-hot-toast";
import { Provider } from "react-redux";
import Footer from "@/components/Footer";
import Cart from "@/components/Cart";

const App = ({ children }: { children: React.ReactNode }) => {
    const [showCart, setShowCart] = useState(false);
  return (
    <Provider store={store}>
      <NavBar setShowCart={setShowCart} />
      {children}
      <Toaster  position="top-center"  reverseOrder={false} />
      {showCart && <Cart setShowCart={setShowCart} />}
      <Footer />
    </Provider>
  );
};

export default App;
