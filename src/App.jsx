import React from 'react';
import TodoList from './TodoList';
import { TodoProvider } from './TodoContext';
import Container from 'react-bootstrap/Container';
import './App.css'

const App = () => {
  return (
    <TodoProvider>
      <Container>
        <div className="App">
          <div className="MainHeading">
            <h2 className="ta-center">Todo List</h2>
          </div>
          <div className="TheList">
            <TodoList />
          </div>
        
        </div>
      </Container>
      
    </TodoProvider>
  );
};

export default App;
