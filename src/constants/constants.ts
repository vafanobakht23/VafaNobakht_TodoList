import { TodoObj } from '../interface/model';

const object: TodoObj = {
  id: '',
  title: '',
  status: '',
  isComplete: false,
  date: '',
  time: '',
};

const status = {
  done: 'Done',
  progress: 'Progress',
  pause: 'Paused',
};
const time = {
  day: 'day',
  week: 'week',
  month: 'month',
};

export { status, object, time };
