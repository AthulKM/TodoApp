import React, { useContext, useState } from 'react';
import TodoItem from './TodoItem';
import TodoContext from './TodoContext'; 
const TodoList = () => {
  const { todos, addTodo, removeTodo, completeTodo, updateTodo } = useContext(TodoContext);
  const [newTodo, setNewTodo] = useState("");

  const handleAddTodo = () => {
    if (newTodo.trim() !== '') {
      addTodo(newTodo);
      setNewTodo('');
    }
  };
  return (
    <div>
      <input type="text" placeholder="Add a Todo" value={newTodo }
      onChange={(e) => setNewTodo(e.target.value)} />
      <button onClick={handleAddTodo}>Add</button>
      {todos.length > 0 ? (
        <ul>
          {todos.map((todo, index) => (
            <TodoItem
              key={index}
              index={index}
              todo={todo}
              removeTodo={removeTodo}
              completeTodo={completeTodo}
              updateTodo={updateTodo}
            />
          ))}
        </ul>
      ) : (
        <p>No tasks yet!</p>
      )}
    </div>
  );
};

export default TodoList;
