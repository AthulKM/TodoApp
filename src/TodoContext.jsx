import React, { createContext, useState } from 'react';

const TodoContext = createContext({
  todos: [],
  addTodo: () => {},
  removeTodo: () => {},
  completeTodo: () => {},
  updateTodo: () => {},
});

export const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);

  const addTodo = (text) => {
    setTodos((prevTodos) => [...prevTodos, { text, completed: false }]);
  };

  const removeTodo = (index) => {
    setTodos((prevTodos) => prevTodos.filter((_, i) => i !== index));
  };

  const completeTodo = (index) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo, i) => (i === index ? { ...todo, completed: !todo.completed } : todo))
    );
  };

  const updateTodo = (index, newText) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo, i) => (i === index ? { ...todo, text: newText } : todo))
    );
  };

  const value = { todos, addTodo, removeTodo, completeTodo, updateTodo };

  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
};

export default TodoContext;
