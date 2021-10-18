import React, { createContext, useState } from 'react';
import TodoList from './components/TodoList';
import { object } from './constants/constants';
import { TodoObj } from './interface/model';
import './styles/output.css';
export const TodosContext = createContext<TodoObj[]>([]);

const App: React.FC = () => {
  const [todo, setTodo] = useState<TodoObj>(object);
  const [todos, setTodos] = useState<TodoObj[]>([]);

  return (
    <TodosContext.Provider value={todos}>
      <TodoList setTodos={setTodos} todo={todo} setTodo={setTodo} />
    </TodosContext.Provider>
  );
};

export default App;
