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
        <input className="Task" type="text" value={editText} onChange={handleEditChange} />
      ) : (
        <span className='Task' onClick={handleComplete}>{todo.text}</span>
      )}
      <button className="RedButton" onClick={handleDelete}>Delete</button>
      {isEditing ? (
        <button className="GreenButton" onClick={handleUpdate}>Update</button>
      ) : (
        <button className="YellowButton" onClick={() => setIsEditing(true)}>Edit</button>
      )}
    </li>
  );
};

export default TodoItem;
