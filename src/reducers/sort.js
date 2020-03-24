import * as types from './../constants/ActionTypes'

var initialStore = {
    by: 'name',
    value: 1 //1 thang, -1 giam
};
var myReducer = (state = initialStore, action) => {
    switch (action.type) {
        case types.SORT:
            return {
                by: action.sort.by,
                value: action.sort.value
            };
        default:
            return state;
    }
}
export default myReducer;