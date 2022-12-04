import "./styles.css";
import React from "react";
import UserContextFun from "./UserContext";
import Home from "./Home";
export default function App() {
  return (
    <UserContextFun>
      <Home />
    </UserContextFun>
  );
}
