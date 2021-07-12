import {Task} from './taskReducer';

export const ADD_TASK = 'ADD_TASK';
export const DELETE_TASK = 'DELETE_TASK';
export const EDIT_TASK = 'EDIT_TASK';
export const TOGGLE_DONE = 'TOGGLE_DONE';
export const GET_TASKS = 'GET_TASKS';

export interface AddTaskAction {
  type: typeof ADD_TASK;
  payload: Task;
}

interface DeleteTaskAction {
  type: typeof DELETE_TASK;
  payload: Task;
}

interface EditTaskAction {
  type: typeof EDIT_TASK;
  payload: {id: number; description: string};
}

interface ToggleDoneAction {
  type: typeof TOGGLE_DONE;
  payload: {id: number};
}

interface GetTaskAction {
  type: typeof GET_TASKS;
}

export type TaskActions =
  | AddTaskAction
  | EditTaskAction
  | DeleteTaskAction
  | ToggleDoneAction
  | GetTaskAction;
