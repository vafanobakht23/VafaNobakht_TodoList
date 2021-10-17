import React, { useContext, useState } from 'react';
import { TodosContext } from '../App';
import { todoListProps } from '../interface/model';
import AddModal from './AddModal';
import Todo from './Todo';

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
            <div className="flex justify-between mb-24 ">
                <div className="space-x-1 mt-16 ">
                    <button
                        className="hover:bg-gray-300 transition-all duration-500 focus:text-blue-800 focus:font-bold focus:bg-gray-200 rounded border border-solid text-center w-28"
                        onClick={todoHandler}
                    >
                        To Do
                    </button>
                    <button
                        className="hover:bg-gray-300 transition-all duration-500 focus:text-blue-800 focus:font-bold focus:bg-gray-200 rounded border-1 border border-solid text-center w-28"
                        onClick={doneTaskHandler}
                    >
                        Done Tasks
                    </button>
                </div>

                <button
                    className="flex bg-blue-500 h-10 text-center py-2 px-5 rounded w-32 hover:bg-blue-600 transition-all duration-700 mt-14 mr-12"
                    onClick={() => setIsShowAddModal(!isShowAddModal)}
                >
                    <span className="py-1">
                        <AiOutlinePlus />
                    </span>
                    Add Task
                </button>
            </div>
            <div className="flex justify-end mr-12">
                <button
                    name="month"
                    onClick={monthHandler}
                    className="hover:bg-gray-300 transition-all duration-500 focus:text-blue-800 focus:font-bold focus:bg-gray-200 rounded border border-solid text-center w-20"
                >
                    Month
                </button>
                <button
                    name="week"
                    onClick={weekHandler}
                    className="hover:bg-gray-300 transition-all duration-500 focus:text-blue-800 focus:font-bold focus:bg-gray-200 rounded border border-solid text-center w-20"
                >
                    Week
                </button>
                <button
                    name="day"
                    onClick={dayHandler}
                    className="hover:bg-gray-300 transition-all duration-500 focus:text-blue-800 focus:font-bold focus:bg-gray-200 rounded border border-solid text-center w-20"
                >
                    Day
                </button>
            </div>
            <div
                className="overflow-x-hidden bg-white rounded-lg shadow overflow-y-auto relative mt-10"
                style={{ height: '405px' }}
            >
                <table className="border-collapse table-auto w-full whitespace-no-wrap bg-white table-striped relative">
                    <thead className="sm:visible sm:relative bg-gray-100">
                        <tr className="text-left">
                            <th className="bg-gray-100 w-[25px] sticky top-0 border-b border-gray-200 py-2 pr-36"></th>
                            <th className="bg-gray-100 min-w-[40px] w-[22%] sticky top-0 border-b border-gray-200 py-2 text-gray-400 font-bold  text-md">
                                Task
                            </th>
                            <th className="bg-gray-100 sticky  w-[22%] top-0 border-b border-gray-200 py-2 text-gray-400 font-bold text-md">
                                Status
                            </th>
                            <th className="bg-gray-100 w-[22%] sticky top-0 border-b border-gray-200 py-2 text-gray-400 font-bold text-md">
                                Date
                            </th>
                            <th className="bg-gray-100 w-[18%] sticky top-0 border-b border-gray-200 py-2 text-gray-400 font-bold text-md">
                                Time
                            </th>
                            <th className="bg-gray-100  sticky top-0 border-b border-gray-200 py-2"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {todos.map(item => {
                            <tr key={item.id}>
                                <Todo todo={item}
                                    setTodos={setTodos}
                                    setTodo={setTodo} />
                            </tr>
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default TodoList;