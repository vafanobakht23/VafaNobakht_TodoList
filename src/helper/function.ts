import { TodoObj } from '../interface/model';

const calculateDate = (todo: TodoObj): string => {
    const date = new Date(todo.date);
    const today = date.toLocaleDateString('en-GB', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
    });
    return today;
};


export { calculateDate }