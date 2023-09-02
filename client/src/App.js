import React from "react";
import TodoList from "./TodoList/TodoList";
import AddTodo from "./TodoList/AddTodo";
import Navbar from "./Components/Navbar";
export default function App() {
  return (
    <div className="container">
      <Navbar />
      <AddTodo />
      <TodoList />
    </div>
  );
}
