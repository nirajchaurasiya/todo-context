import React, { useContext } from "react";
import { TodoContext } from "../context/TodoListProvider";

export default function TodoList() {
  const [todo, setTodo] = useContext(TodoContext);
  const handleEdit = (itemId, text) => {
    const updatedText = prompt("Edit your task", text);
    console.log(updatedText);
    if (updatedText) {
      const getTodo = todo.filter((e) => e.id === itemId);
      getTodo[0].item = updatedText;
      setTodo([...todo]);
    }
  };
  const handleDelete = (itemId) => {
    setTodo(todo.filter((e) => e.id !== itemId));
  };
  return (
    <div className="todos">
      <p>All Todos</p>
      <br />
      <table className="todo-table">
        <thead>
          <tr>
            <th>Time</th>
            <th>Task</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {todo.length > 0 ? (
            todo.map((e, index) => (
              <tr key={index}>
                <td>{e.time}</td>
                <td>{e.item}</td>
                <td>
                  <button onClick={() => handleDelete(e.id)}>Delete</button>
                  <button onClick={() => handleEdit(e.id, e.item)}>Edit</button>
                </td>
              </tr>
            ))
          ) : (
            <tr className="notodofound">
              <td>No Todo Found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
