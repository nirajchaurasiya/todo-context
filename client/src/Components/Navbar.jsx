import React, { useContext } from "react";
import "./navbar.css";
import { TodoContext } from "../context/TodoListProvider";
export default function Navbar() {
  const [todo] = useContext(TodoContext);
  return (
    <div className="navbar">
      <p>Home</p>
      <p>Total Todo:{todo.length}</p>
    </div>
  );
}
