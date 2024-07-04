import React, { useState} from 'react';


const TodoItem = ({ index, todo, removeTodo, completeTodo, updateTodo }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);


  const handleDelete = () => removeTodo(index);
  const handleComplete = () => completeTodo(index);
  const handleUpdate = () => {
    updateTodo(index, editText);
    setIsEditing(false);
  };
  const handleEditChange = (e) => setEditText(e.target.value);

  const completedStyle = { textDecoration: todo.completed ? 'line-through' : 'none', };

  return (
    <li style={completedStyle}>
      {isEditing ? (
        <input type="text" value={editText} onChange={handleEditChange} />
      ) : (
        <span onClick={handleComplete}>{todo.text}</span>
      )}
      <button onClick={handleDelete}>Delete</button>
      {isEditing ? (
        <button onClick={handleUpdate}>Update</button>
      ) : (
        <button onClick={() => setIsEditing(true)}>Edit</button>
      )}
    </li>
  );
};

export default TodoItem;
