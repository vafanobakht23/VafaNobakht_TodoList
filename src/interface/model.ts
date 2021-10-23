import React from 'react';
export interface TodoObj {
  id: string;
  title: string;
  status: string;
  isComplete: boolean;
  date: string;
  time: string;
}

export interface TodoProps {
  todo: TodoObj;
  setTodos: React.Dispatch<React.SetStateAction<TodoObj[]>>;
  setTodo: React.Dispatch<React.SetStateAction<TodoObj>>;
  setFilterTodos: React.Dispatch<React.SetStateAction<TodoObj[]>>;
  filterTodos: TodoObj[];
  dateFormat:string;
  setDateFormat:React.Dispatch<React.SetStateAction<string>>;
}

export interface AddProps {
  setTodos: React.Dispatch<React.SetStateAction<TodoObj[]>>;
  todo: TodoObj;
  setTodo: React.Dispatch<React.SetStateAction<TodoObj>>;
  showAddModal: boolean;
  setShowAddModal: React.Dispatch<React.SetStateAction<boolean>>;
  setIsTodoClick: React.Dispatch<React.SetStateAction<boolean>>;
  setIsFilterClick: React.Dispatch<React.SetStateAction<boolean>>;
  setDateFormat:React.Dispatch<React.SetStateAction<string>>;
}

export interface EditProps {
  setTodos: React.Dispatch<React.SetStateAction<TodoObj[]>>;
  todo: TodoObj;
  editHandler: (id: string) => void;
  setTodo: React.Dispatch<React.SetStateAction<TodoObj>>;
  showEditModal: boolean;
  setShowEditModal: React.Dispatch<React.SetStateAction<boolean>>;
  editTodo: TodoObj;
  setEditTodo: React.Dispatch<React.SetStateAction<TodoObj>>;
  dateFormat:string;
  setDateFormat:React.Dispatch<React.SetStateAction<string>>;
}

export interface TodoListProps {
  setTodos: React.Dispatch<React.SetStateAction<TodoObj[]>>;
  todo: TodoObj;
  setTodo: React.Dispatch<React.SetStateAction<TodoObj>>;
}
