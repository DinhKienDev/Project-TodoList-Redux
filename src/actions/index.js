import * as types from './../constants/ActionTypes';
export const lisAll = () =>{
    return {
        type: types.LIST_ALL,
    }
}
export const addTask = (task) =>{
    return {
        type: types.ADD_TASK,
        task
    }
}
export const toggleFrom = () =>{
    return {
        type: types.TOGGLE_FORM,
    }
}
export const closeFrom = () =>{
    return {
        type: types.CLOSE_FORM,
    }
}
export const openFrom = () =>{
    return {
        type: types.OPEN_FORM,
    }
}

export const updateStatus = (id) =>{
    return {
        type: types.UPDATE_STATUS,
        id // id: id
    }
}
export const deleteTask = (id) =>{
    return {
        type: types.DELETE_TASK,
        id // id: id
    }
}
export const editTask = (task) =>{
    return {
        type: types.EDIT_TASK,
        task // task: task
    }
}
export const filterTask = (filter) =>{
    return {
        type: types.FILTER_TABLE,
        filter // filter: filter -> filterName and filterStatus
    }
}
export const searchTask = (keyword) =>{
    return{
        type: types.SEARCH,
        keyword //keyword:keyword
    }
}
export const sortTask = (sort) =>{
    return{
        type: types.SORT,
        sort //sort:sort
    }
}
