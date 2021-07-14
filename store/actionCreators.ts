import {ADD_TASK, DELETE_TASK, EDIT_TASK, TOGGLE_DONE} from './actionTypes';

export const addTask = (description: string) => ({
  type: ADD_TASK,
  payload: {description},
});

export const deleteTask = (id: number) => ({type: DELETE_TASK, payload: {id}});

export const editTask = (id: number, description: string) => ({
  type: EDIT_TASK,
  payload: {id, description},
});

export const toggleDone = (id: number) => ({type: TOGGLE_DONE, payload: {id}});
