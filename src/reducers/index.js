import { combineReducers } from 'redux';
import tasks from './tasks';
import isDisplayFrom from './isDisplayFrom';
import itemEditting from './itemEditting';
import filterTable from './filterTable';
import search from './search';
import sort from './sort'

const myReducer = combineReducers({
    tasks,
    isDisplayFrom,
    itemEditting,
    filterTable,
    search,
    sort

});

export default myReducer;