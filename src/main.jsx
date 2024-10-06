import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import React, { createContext, useState } from "react";

// Creating a context
export const MyContext = createContext();
const MyProvider = ({ children }) => {
  const [isOpenLogin, setIsOpenLogin] = useState(false);
  const [isOpenSignup, setIsOpenSignup] = useState(false);

  return (
    <MyContext.Provider
      value={{ isOpenLogin, setIsOpenLogin, isOpenSignup, setIsOpenSignup }}
    >
      {children}
    </MyContext.Provider>
  );
};

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <MyProvider>
      <App />
    </MyProvider>
  </StrictMode>
);
