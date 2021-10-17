import React, { useContext, useState } from 'react';
import { TodosContext } from '../App';
import { todoListProps } from '../interface/model';
import AddModal from './AddModal';

const TodoList: React.FC<todoListProps> = ({ setTodos, todo, setTodo }) => {
    const [isShowAddModal, setIsShowAddModal] = useState<boolean>(false);
    const todos = useContext(TodosContext);

    return (
        <div>
            {isShowAddModal && (
                <AddModal
                    todo={todo}
                    setTodo={setTodo}
                    setTodos={setTodos}
                    showAddModal={isShowAddModal}
                    setShowAddModal={setIsShowAddModal}
                />
            )}
        </div>
    );
};

export default TodoList;