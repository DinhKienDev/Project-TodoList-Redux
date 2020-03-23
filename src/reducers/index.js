import { combineReducers } from 'redux';
import tasks from './tasks';
import isDisplayFrom from './isDisplayFrom';

const myReducer = combineReducers({
    tasks,
    isDisplayFrom
});

export default myReducer;