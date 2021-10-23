import React, { memo, useContext, useState } from 'react';
import { AiFillEdit } from 'react-icons/ai';
import { IoMdClose } from 'react-icons/io';
import { TodoObj, TodoProps } from '../interface/model';
import EditModal from './EditModal';
import { TodosContext } from '../App';
import { calculateDate } from '../helper/function';
import { object, status } from '../constants/constants';

const Todo: React.FC<TodoProps> = ({
  todo,
  setTodos,
  setTodo,
  filterTodos,
  setFilterTodos,
}) => {
  const todos = useContext(TodosContext);
  const [isShowEditModal, setIsShowEditModal] = useState<boolean>(false);
  const [editTodo, setEditTodo] = useState<TodoObj>(todo);
  const deleteHandler = (id: string) => {
    setTodos(todos.filter((item) => item.id !== id));
    setFilterTodos(filterTodos.filter((item) => item.id !== id));
    setTodo(object);
  };
  const changeHandler = (todoInput: TodoObj) => {
    const newTodos = changeTodosStatus(todoInput, todos);
    const newFilterTodos = changeTodosStatus(todoInput, filterTodos);
    setTodos(newTodos);
    setFilterTodos(newFilterTodos);
  };

  const changeTodosStatus = (todoInput: TodoObj, todosInput: TodoObj[]) => {
    const newTodos = todosInput.map((item) => {
      if (item === todoInput && item.isComplete) {
        return {
          ...item,
          status: status.progress,
          isComplete: !item.isComplete,
        };
      } else if (item === todoInput && !item.isComplete) {
        return {
          ...item,
          status: status.done,
          isComplete: !item.isComplete,
        };
      }
      return item;
    });
    return newTodos;
  };

  const editHandler = (id: string) => {
    updateTodos(todos, setTodos, id);
    updateTodos(filterTodos, setFilterTodos, id);
  };
  const updateTodos = (
    todosInput: TodoObj[],
    setTodosInput: React.Dispatch<React.SetStateAction<TodoObj[]>>,
    id: string,
  ) => {
    const date = calculateDate(editTodo);
    setTodosInput(
      todosInput.map((item) =>
        item.id === id
          ? editTodo.title && editTodo.status === status.done
            ? {
                ...editTodo,
                date: date,
                status: editTodo.status,
                isComplete: true,
              }
            : {
                ...editTodo,
                date: date,
                status: editTodo.status,
                isComplete: false,
              }
          : item,
      ),
    );
  };
  return (
    <>
      <td className="px-6 w-[20px] pt-8 sm:pt-0 pb-2 text-left relative border-t border-l sm:border-l-0 border-gray-400 sm:flex-1">
        <input
          type="checkbox"
          onChange={() => changeHandler(todo)}
          name="status"
          checked={todo.isComplete}
        />
      </td>
      <td className=" pt-8 sm:pt-0  pb-2 text-left relative border-t border-l sm:border-l-0 border-gray-400 sm:flex-1">
        <p className="text-gray-700  py-3 flex items-center">{todo.title}</p>
      </td>
      <td className="pt-8 sm:pt-0 pb-2 text-left relative  border-t border-l sm:border-l-0 border-gray-400 sm:flex-1">
        <span
          className={
            todo.status === status.progress
              ? 'rounded-xl bg-yellow-400 py-1.5 px-2'
              : todo.status === status.pause
              ? 'rounded-xl bg-blue-400 py-1.5 px-2'
              : todo.status === status.done
              ? 'rounded-xl bg-green-400 py-1.5 px-2'
              : ''
          }
        >
          {todo.status}
        </span>
      </td>
      <td className="pt-8 sm:pt-0 pb-2 text-left relative border-t border-l sm:border-l-0 border-gray-400 sm:flex-1">
        <p className="text-gray-700  py-3 flex items-center">{todo.date}</p>
      </td>
      <td className=" pt-8 sm:pt-0 pb-2 text-left relative border-t border-l sm:border-l-0 border-gray-400 sm:flex-1">
        <p className="text-gray-700  py-3 flex items-center">{todo.time}</p>
      </td>
      <td className="flex py-4 px-2">
        <button
          className="px-2"
          onClick={() => setIsShowEditModal(!isShowEditModal)}
        >
          <AiFillEdit size={'20px'} />
        </button>
        <button className="px-2" onClick={() => deleteHandler(todo.id)}>
          <IoMdClose size={'20px'} />
        </button>
      </td>
      <td>
        {isShowEditModal && (
          <EditModal
            todo={todo}
            setTodos={setTodos}
            editHandler={editHandler}
            setTodo={setTodo}
            showEditModal={isShowEditModal}
            setShowEditModal={setIsShowEditModal}
            editTodo={editTodo}
            setEditTodo={setEditTodo}
          />
        )}
      </td>
    </>
  );
};
export default memo(Todo);
