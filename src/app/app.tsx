"use client";
import NavBar from "@/components/NavBar";
import { store } from "@/redux/store";
import React, { useState } from "react";
import { Toaster } from "react-hot-toast";
import { Provider } from "react-redux";

const App = ({ children }: { children: React.ReactNode }) => {
    const [showCart, setShowCart] = useState(false);
  return (
    <Provider store={store}>
      <NavBar setShowCart={setShowCart} />
      {children}
      <Toaster  position="top-center"  reverseOrder={false} />
    </Provider>
  );
};

export default App;
