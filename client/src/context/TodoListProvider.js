import React, { createContext, useState } from "react";

export const TodoContext = createContext();

export const TodoListProvider = (props) => {
  const [todo, setTodo] = useState([]);

  return (
    <TodoContext.Provider value={[todo, setTodo]}>
      {props.children}
    </TodoContext.Provider>
  );
};
