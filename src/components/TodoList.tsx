import React, { memo, useContext, useEffect, useState } from 'react';
import { TodoListProps } from '../interface/model';
import Todo from './Todo';
import { AiOutlinePlus } from 'react-icons/ai';
import { TodosContext } from '../App';
import AddModal from './AddModal';
import {
  filterMonth,
  filterToday,
  filterWeek,
  sortByTitle,
} from '../helper/function';
import { time } from '../constants/constants';

const TodoList: React.FC<TodoListProps> = ({ setTodos, todo, setTodo }) => {
  const [isShowAddModal, setIsShowAddModal] = useState<boolean>(false);
  const [isFilterClick, setIsFilterClick] = useState<boolean>(false);
  const [isTodoClick, setIsTodoClick] = useState<boolean>(true);
  const [isDoneClick, setIsDoneClick] = useState<boolean>(false);

  const todos = useContext(TodosContext);
  const [activeTodo, setActiveTodo] = useState(todos);
  const [filterTodos, setFilterTodos] = useState(todos);
  const [isIncreaseSort, setIsIncreaseSort] = useState(true);
  const [dateFormat, setDateFormat] = useState<string>('');
  const todoHandler = () => {
    setIsTodoClick(true);
    setIsFilterClick(false);
    setIsDoneClick(false);
  };
  const doneTaskHandler = () => {
    setIsTodoClick(false);
    setIsDoneClick(true);
    setIsFilterClick(false);
  };
  useEffect(() => {
    setActiveTodo(
      sortByTitle(
        todos.filter((item) => (item.isComplete !== isTodoClick ? item : null)),
        isIncreaseSort,
      ),
    );
  }, [todos, isTodoClick, isIncreaseSort]);

  const timeHanlder = (input: string) => {
    if (input === time.day) {
      setFilterTodos(filterToday(todos));
    } else if (input === time.week) {
      setFilterTodos(filterWeek(todos));
    } else {
      setFilterTodos(filterMonth(todos));
    }
    setIsFilterClick(true);
    setIsTodoClick(false);
    setIsDoneClick(false);
  };

  return (
    <div>
      {isShowAddModal && (
        <AddModal
          todo={todo}
          setTodo={setTodo}
          setTodos={setTodos}
          showAddModal={isShowAddModal}
          setShowAddModal={setIsShowAddModal}
          setIsFilterClick={setIsFilterClick}
          setIsTodoClick={setIsTodoClick}
          setDateFormat={setDateFormat}
        />
      )}
      <div className="flex justify-between mb-24 ">
        <div className="space-x-1 mt-16 ">
          <button
            className={
              isTodoClick
                ? 'text-center font-bold transition-all duration-100 focus:bg-gray-200 focus:text-blue-800 rounded border w-28'
                : 'transition-all duration-100 focus:text-blue-800 focus:font-bold focus:bg-gray-200 rounded border text-center text-black w-28'
            }
            onClick={todoHandler}
          >
            To Do
          </button>
          <button
            className={
              isDoneClick
                ? 'text-center font-bold transition-all duration-100 focus:text-blue-800 focus:bg-gray-200 rounded border w-28'
                : 'transition-all duration-100 focus:text-blue-800 focus:font-bold focus:bg-gray-200 rounded border text-center text-black w-28'
            }
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
          onClick={() => timeHanlder(time.month)}
          className="hover:bg-gray-300 transition-all duration-100 focus:text-blue-800 focus:font-bold focus:bg-gray-200 rounded border border-solid text-center w-20"
        >
          Month
        </button>
        <button
          name="week"
          onClick={() => timeHanlder(time.week)}
          className="hover:bg-gray-300 transition-all duration-100 focus:text-blue-800 focus:font-bold focus:bg-gray-200 rounded border border-solid text-center w-20"
        >
          Week
        </button>
        <button
          name="day"
          onClick={() => timeHanlder(time.day)}
          className="hover:bg-gray-300 transition-all duration-100 focus:text-blue-800 focus:font-bold focus:bg-gray-200 rounded border border-solid text-center w-20"
        >
          Day
        </button>
      </div>
      <div
        className="overflow-x-hidden bg-white rounded-lg shadow overflow-y-hidden relative mt-10"
        style={{ height: '405px' }}
      >
        <table className="border-collapse table-auto w-full whitespace-no-wrap bg-white table-striped relative ">
          <thead className="sm:visible sm:relative bg-gray-100 ">
            <tr className="text-left">
              <th className="bg-gray-100 w-[25px] sticky top-0 border-b border-gray-200 py-2 pr-36"></th>
              <th
                className="cursor-pointer bg-gray-100 min-w-[40px] w-[22%] sticky top-0 border-b border-gray-200 py-2 text-gray-400 font-bold text-md"
                onClick={() => setIsIncreaseSort(!isIncreaseSort)}
              >
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
            {!isFilterClick
              ? activeTodo.map((item) => (
                  <tr
                    key={item.id}
                    className="bg-white shadow-lg sm:shadow-none sm:mb-0 cursor-pointer hover:bg-gray-100 border-l-2 border-r-2 hover:border-gray-600"
                  >
                    <Todo
                      todo={item}
                      setTodos={setTodos}
                      setTodo={setTodo}
                      filterTodos={filterTodos}
                      setFilterTodos={setFilterTodos}
                      dateFormat={dateFormat}
                      setDateFormat={setDateFormat}
                    />
                  </tr>
                ))
              : filterTodos.map((item) => (
                  <tr
                    key={item.id}
                    className="bg-white shadow-lg sm:shadow-none sm:mb-0 cursor-pointer hover:bg-gray-100 border-l-2 border-r-2 hover:border-gray-600"
                  >
                    <Todo
                      todo={item}
                      setTodos={setTodos}
                      setTodo={setTodo}
                      filterTodos={filterTodos}
                      setFilterTodos={setFilterTodos}
                      dateFormat={dateFormat}
                      setDateFormat={setDateFormat}
                    />
                  </tr>
                ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default memo(TodoList);
