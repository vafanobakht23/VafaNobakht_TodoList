import React, { memo, useState } from 'react';
import { editProps } from '../interface/model';

const EditModal: React.FC<editProps> = ({
  todo,
  editHandler,
  showEditModal,
  setShowEditModal,
  editTodo,
  setEditTodo,
}) => {
  const [isCloseModal, setIsCloseModal] = useState(false);
  const changeHandler = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    setEditTodo({ ...editTodo, [e.target.name]: e.target.value });
  };

  const SubmitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    editHandler(todo.id);
    setShowEditModal(!showEditModal);
  };
  const closeHandler = () => {
    setIsCloseModal(true);
    setShowEditModal(!showEditModal);
  };

  return (
    <div className=" fixed w-full h-full top-0 left-0 justify-center items-center flex overflow-x-auto overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
      {!isCloseModal ? (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-700 bg-opacity-80">
          <div className="max-w-4xl px-6 bg-white pt-2 pb-8 rounded">
            <div>
              <h1 className="text-left text-blue-700 font-bold font-sans">
                Edit Task
              </h1>
              <hr className="w-full" />
            </div>
            <div className="max-w-3xl px-6 bg-white pt-2 pb-8 rounded">
              <form onSubmit={SubmitHandler}>
                <input
                  type="text"
                  name="title"
                  value={editTodo.title}
                  onChange={changeHandler}
                  placeholder="Edit Task"
                  className="w-[92%] border border-2 border-gray-600 h-9 rounded mt-6 ml-4"
                />
                <select
                  name="status"
                  defaultValue={editTodo.status}
                  onBlur={changeHandler}
                  className=" w-[92%] border border-2 border-gray-600 h-9 rounded mt-6 ml-4"
                >
                  <option>Progress</option>
                  <option>Paused</option>
                  <option>Done</option>
                </select>
                <input
                  type="date"
                  name="date"
                  value={editTodo.date}
                  onChange={changeHandler}
                  className=" w-[92%] border border-2 border-gray-600 h-9 rounded mt-6 ml-4"
                />
                <input
                  type="time"
                  name="time"
                  value={editTodo.time}
                  onChange={changeHandler}
                  className="w-[92%] border border-2 border-gray-600 h-9 rounded mt-6 ml-4"
                />

                <button
                  type="submit"
                  className="bg-green-400  w-[91.2%] sm:w-[44.2%]  rounded border h-8 mt-7 border-green-600 object-fill ml-5 hover:bg-green-600 transition-all duration-500"
                >
                  Edit
                </button>
                <button
                  type="button"
                  className="bg-red-400 rounded w-[91.2%] sm:w-[44.2%] border h-8 mt-7 border-red-600 object-fill ml-5 hover:bg-red-600 transition-all duration-500"
                  onClick={closeHandler}
                >
                  Close
                </button>
              </form>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default memo(EditModal);
