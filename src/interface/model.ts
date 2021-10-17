export interface TodoObj {
  id: string;
  title: string;
  status: string;
  isComplete: boolean;
  date: string;
  time: string;
}

export interface todoProps {
  todo: TodoObj;
  setTodos: React.Dispatch<React.SetStateAction<TodoObj[]>>;
  setTodo: React.Dispatch<React.SetStateAction<TodoObj>>;
  setFilterTodos: React.Dispatch<React.SetStateAction<TodoObj[]>>;
  filterTodos: TodoObj[];
}

export interface addProps {
  setTodos: React.Dispatch<React.SetStateAction<TodoObj[]>>;
  todo: TodoObj;
  setTodo: React.Dispatch<React.SetStateAction<TodoObj>>;
  showAddModal: boolean;
  setShowAddModal: React.Dispatch<React.SetStateAction<boolean>>;
  setIsFilterClick: React.Dispatch<React.SetStateAction<boolean>>;
  setIsTodoClick: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface editProps {
  setTodos: React.Dispatch<React.SetStateAction<TodoObj[]>>;
  todo: TodoObj;
  editHandler: any;
  setTodo: React.Dispatch<React.SetStateAction<TodoObj>>;
  showEditModal: boolean;
  setShowEditModal: React.Dispatch<React.SetStateAction<boolean>>;
  editTodo: TodoObj;
  setEditTodo: React.Dispatch<React.SetStateAction<TodoObj>>;
}

export interface todoListProps {
  setTodos: React.Dispatch<React.SetStateAction<TodoObj[]>>;
  todo: TodoObj;
  setTodo: React.Dispatch<React.SetStateAction<TodoObj>>;
}