import {Task} from './taskReducer';

// action types
export enum ActionTypes {
  ADD_TASK = 'tasks/add',
  DELETE_TASK = 'tasks/delete',
  EDIT_TASK = 'tasks/edit',
  TOGGLE_DONE = 'tasks/toggle',
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
