import React, { useContext, useState } from "react";
import "./addtodo.css";
import { TodoContext } from "../context/TodoListProvider";
export default function AddTodo() {
  const [item, setItem] = useState("");
  const [time, seTtime] = useState("");
  const [todo, setTodo] = useContext(TodoContext);
  console.log(todo);
  const submitTodo = (e) => {
    e.preventDefault();
    if (!item || !time) {
    } else {
      setTodo([...todo, { item: item, time: time, id: Math.random() * 1000 }]);
    }
  };
  return (
    <div className="add_todo">
      <p>Add Todo</p>
      <form onSubmit={submitTodo}>
        <input
          onChange={(e) => seTtime(e.target.value)}
          type="date"
          value={time}
          placeholder="Default date"
        />
        <input
          value={item}
          onChange={(e) => setItem(e.target.value)}
          type="text"
          placeholder="Add item"
        />
        <button>Add Todo</button>
      </form>
    </div>
  );
}
