import * as types from './../constants/ActionTypes'

var initialStore = '';
var myReducer = (state = initialStore, action) => {
    switch (action.type) {
        case types.SEARCH:
            return action.keyword;
        default:
            return state;
    }
}
export default myReducer;