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

export { status, object };
