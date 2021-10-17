import React, { memo, useState } from 'react';
import { status } from '../constants/constants';
import { AiFillEdit } from 'react-icons/ai';
import { IoMdClose } from 'react-icons/io';
import { todoProps } from '../interface/model';

const Todo: React.FC<todoProps> = ({
    todo,
    setTodos,
    setTodo }) => {
    const [isShowEditModal, setIsShowEditModal] = useState<boolean>(false);
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
                {isClickedDate ? (
                    <input
                        type="date"
                        value={todo.date}
                        onChange={() => dateHandler}
                        name="date"
                        className="text-gray-700  py-3 flex items-center"
                    />
                ) : (
                    <p className="text-gray-700  py-3 flex items-center">{todo.date}</p>
                )}
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
        </>
    );
};

export default memo(Todo);