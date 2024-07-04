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
    <>
      <div className="InputAndButton ta-center">
        <input type="text" placeholder="Add a Todo" value={newTodo}
          
      onChange={(e) => setNewTodo(e.target.value)} />
      <button className="AddButton" onClick={handleAddTodo}>Add</button>
      
      </div>
      <div className="ListDisplay ta-center">
        {todos.length > 0 ? (
          <ul type="none">
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
    </>
    
  );
};

export default TodoList;
