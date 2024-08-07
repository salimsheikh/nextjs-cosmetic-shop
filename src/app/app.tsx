"use client";
import NavBar from "@/components/NavBar";
import { store } from "@/redux/store";
import React, { useState } from "react";
import { Provider } from "react-redux";

const App = ({ children }: { children: React.ReactNode }) => {
    const [showCart, setShowCart] = useState(false);
  return (
    <Provider store={store}>
      <NavBar setShowCart={setShowCart} />
      {children}
    </Provider>
  );
};

export default App;
