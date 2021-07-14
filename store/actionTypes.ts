import {Task} from './taskReducer';

// action types
export enum ActionTypes {
  ADD_TASK,
  DELETE_TASK,
  EDIT_TASK,
  TOGGLE_DONE,
}

export interface AddTaskAction {
  type: ActionTypes.ADD_TASK;
  payload: Pick<Task, 'description'>;
}

interface DeleteTaskAction {
  type: ActionTypes.DELETE_TASK;
  payload: Pick<Task, 'id'>;
}

interface EditTaskAction {
  type: ActionTypes.EDIT_TASK;
  payload: Omit<Task, 'done'>;
}

interface ToggleDoneAction {
  type: ActionTypes.TOGGLE_DONE;
  payload: Pick<Task, 'id'>;
}

export type TaskActions =
  | AddTaskAction
  | EditTaskAction
  | DeleteTaskAction
  | ToggleDoneAction;
