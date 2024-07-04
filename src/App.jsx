import React from 'react';
import TodoList from './TodoList';
import { TodoProvider } from './TodoContext';

const App = () => {
  return (
    <TodoProvider>
      <div className="App">
        <h2>Todo List</h2>
        <TodoList />
      </div>
    </TodoProvider>
  );
};

export default App;
