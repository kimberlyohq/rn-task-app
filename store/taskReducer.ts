import {
  ADD_TASK,
  DELETE_TASK,
  EDIT_TASK,
  GET_TASKS,
  TaskActions,
  TOGGLE_DONE,
} from './actionTypes';

export type Task = {
  id: number;
  description: string;
  done: boolean;
};

export interface TaskState {
  tasks: Task[];
}

const initialState = {
  tasks: [],
};

export const TaskReducer = (
  state: TaskState = initialState,
  action: TaskActions,
) => {
  switch (action.type) {
    case ADD_TASK: {
      const {description} = action.payload;
      const newTask = {
        id: Math.random(),
        description,
        done: false,
      };
      return {...state, tasks: [newTask, ...state.tasks]};
    }
    case DELETE_TASK: {
      const {id} = action.payload;
      const updatedTasks = state.tasks.filter(task => task.id !== id);
      return {
        ...state,
        tasks: updatedTasks,
      };
    }
    case EDIT_TASK: {
      const {id, description} = action.payload;

      const updatedTasks = state.tasks.map(task => {
        if (task.id !== id) {
          return task;
        }

        const updatedTask = {...task, description};
        return updatedTask;
      });

      return {
        ...state,
        tasks: updatedTasks,
      };
    }
    case TOGGLE_DONE: {
      const {id} = action.payload;

      const updatedTasks = state.tasks.map(task => {
        if (task.id !== id) {
          return task;
        }

        const updatedTask = {...task, done: !task.done};
        return updatedTask;
      });

      return {
        ...state,
        tasks: updatedTasks,
      };
    }
    case GET_TASKS: {
      return {...state};
    }
    default: {
      return state;
    }
  }
};