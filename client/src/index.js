import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { TodoListProvider } from "./context/TodoListProvider";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <TodoListProvider>
      <App />
    </TodoListProvider>
  </React.StrictMode>
);
