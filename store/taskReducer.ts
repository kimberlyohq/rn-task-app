import {ActionTypes, TaskActions} from './actionTypes';

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
    case ActionTypes.ADD_TASK: {
      const {description} = action.payload;
      const newTask = {
        id: Math.random(),
        description,
        done: false,
      };
      return {...state, tasks: [newTask, ...state.tasks]};
    }
    case ActionTypes.DELETE_TASK: {
      const {id} = action.payload;
      const updatedTasks = state.tasks.filter(task => task.id !== id);
      return {
        ...state,
        tasks: updatedTasks,
      };
    }
    case ActionTypes.EDIT_TASK: {
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
    case ActionTypes.TOGGLE_DONE: {
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
    default: {
      return state;
    }
  }
};
