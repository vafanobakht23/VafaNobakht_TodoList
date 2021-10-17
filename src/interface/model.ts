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
export interface addProps {
    setTodos: React.Dispatch<React.SetStateAction<TodoObj[]>>;
    todo: TodoObj;
    setTodo: React.Dispatch<React.SetStateAction<TodoObj>>;
    showAddModal: boolean;
    setShowAddModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface todoProps {
    todo: TodoObj;
    setTodos: React.Dispatch<React.SetStateAction<TodoObj[]>>;
    setTodo: React.Dispatch<React.SetStateAction<TodoObj>>;
}