import React, { memo, useContext, useState } from 'react';
import { TodosContext } from '../App';
import { calculateDate } from '../helper/function';
import { AddProps } from '../interface/model';
import { object, status } from '../constants/constants';

const AddModal: React.FC<AddProps> = ({
  setTodos,
  todo,
  setTodo,
  showAddModal,
  setShowAddModal,
  setIsFilterClick,
  setIsTodoClick,
  setDateFormat,
}) => {
  const todos = useContext(TodosContext);
  const changeHandler = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setTodo({ ...todo, [e.target.name]: e.target.value });
  };

  const addHandler = () => {
    setDateFormat(todo.date);
    const date = calculateDate(todo);
    if (todo.title && todo.date && todo.time) {
      setTodos([
        ...todos,
        {
          id: Date.now().toLocaleString(),
          title: todo.title,
          status: status.progress,
          isComplete: false,
          date: date,
          time: todo.time,
        },
      ]);
      setTodo(object);
      setShowAddModal(!showAddModal);
      setIsFilterClick(false);
      setIsTodoClick(true);
    } else {
      alert('Please Enter all fields');
    }
  };
  const [isCloseModal, setIisCloseModal] = useState(false);

  const closeHandler = () => {
    setIisCloseModal(true);
    setShowAddModal(!showAddModal);
    setTodo(object);
  };
  return (
    <div className="fixed w-full h-full top-0 left-0 justify-center items-center flex overflow-x-auto overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
      {!isCloseModal ? (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-700 bg-opacity-80">
          <div className="max-w-4xl px-6 bg-white pt-2 pb-8 rounded">
            <div>
              <h1 className="text-left text-blue-700 font-bold font-sans">
                Add Task
              </h1>
              <hr className="w-full" />
            </div>
            <div className="max-w-3xl px-6 bg-white pt-2 pb-8 rounded">
              <input
                type="text"
                name="title"
                value={todo.title}
                onChange={changeHandler}
                placeholder="Enter Task"
                className="w-[92%] border border-2 border-gray-600 h-9 rounded mt-6 ml-4"
              />
              <input
                type="date"
                name="date"
                value={todo.date}
                onChange={changeHandler}
                className=" w-[92%] border border-2 border-gray-600 h-9 rounded mt-6 ml-4"
              />
              <input
                type="time"
                name="time"
                value={todo.time}
                onChange={changeHandler}
                className="w-[92%] border border-2 border-gray-600 h-9 rounded mt-6 ml-4"
              />
              <button
                className="bg-green-400  w-[91.2%] sm:w-[44.2%]  rounded border h-9 mt-7 border-green-600 object-fill ml-5 hover:bg-green-600 transition-all duration-500"
                onClick={addHandler}
              >
                Add Task
              </button>
              <button
                className="bg-red-400 rounded w-[91.2%] sm:w-[44.2%] border h-9 mt-7 border-red-600 object-fill ml-5 hover:bg-red-600 transition-all duration-500"
                onClick={closeHandler}
              >
                close
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default memo(AddModal);
