import {ActionTypes} from './actionTypes';

export const addTask = (description: string) => ({
  type: ActionTypes.ADD_TASK,
  payload: {description},
});

export const deleteTask = (id: number) => ({
  type: ActionTypes.DELETE_TASK,
  payload: {id},
});

export const editTask = (id: number, description: string) => ({
  type: ActionTypes.EDIT_TASK,
  payload: {id, description},
});

export const toggleDone = (id: number) => ({
  type: ActionTypes.TOGGLE_DONE,
  payload: {id},
});
