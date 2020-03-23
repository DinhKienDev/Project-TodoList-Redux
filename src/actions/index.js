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
