export interface TodoObj {
    id: string;
    title: string;
    status: string;
    isComplete: boolean;
    date: string;
    time: string;
  }
  export interface todoListProps {
    setTodos: React.Dispatch<React.SetStateAction<TodoObj[]>>;
    todo: TodoObj;
    setTodo: React.Dispatch<React.SetStateAction<TodoObj>>;
  }
  