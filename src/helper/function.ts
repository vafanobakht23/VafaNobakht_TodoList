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

const dateType = (): string => {
  const date = new Date();
  const today = date.toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
  return today;
};

const filterMonth = (todos: TodoObj[]): TodoObj[] => {
  const today = dateType();
  const array = today.split(' ');
  const month = array[1];
  const year = array[2];
  const newMonthArray = todos.filter((todo) =>
    todo.date.split(' ')[1] === month && todo.date.split(' ')[2] === year
      ? todo
      : null,
  );
  return sort(newMonthArray);
};

const filterWeek = (todos: TodoObj[]): TodoObj[] => {
  const newTodoArray = sort(todos);
  const today = dateType();
  const array = today.split(' ');
  const day = array[0];
  const month = array[1];
  const year = array[2];
  const newWeekArray = newTodoArray.filter((todo) =>
    parseInt(todo.date.split(' ')[0]) >= parseInt(day) &&
    parseInt(todo.date.split(' ')[0]) < parseInt(day) + 7 &&
    todo.date.split(' ')[1] === month &&
    todo.date.split(' ')[2] === year
      ? todo
      : null,
  );
  return newWeekArray;
};

const filterToday = (todos: TodoObj[]): TodoObj[] => {
  const today = dateType();
  const array = today.split(' ');
  const day = array[0];
  const month = array[1];
  const year = array[2];
  const newDayArray = todos.filter((todo) =>
    todo.date.split(' ')[0] === day &&
    todo.date.split(' ')[1] === month &&
    todo.date.split(' ')[2] === year
      ? todo
      : null,
  );
  return sort(newDayArray);
};

const sort = (todoArray: TodoObj[]) => {
  todoArray.sort((a, b) => {
    return (
      new Date(a.date + ' ' + a.time).getTime() -
      new Date(b.date + ' ' + b.time).getTime()
    );
  });
  return todoArray;
};
const sortByTitle = (todoArray: TodoObj[], sortType: boolean): TodoObj[] => {
  if (sortType) {
    todoArray.sort((a, b) => {
      return ('' + a.title).localeCompare(b.title);
    });
  } else {
    todoArray.sort((a, b) => {
      return ('' + b.title).localeCompare(a.title);
    });
  }
  return todoArray;
};

export { calculateDate, filterMonth, filterToday, filterWeek, sortByTitle };
