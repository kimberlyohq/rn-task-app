import {createStore} from 'redux';
import {TaskReducer} from './taskReducer';

export const store = createStore(TaskReducer);
