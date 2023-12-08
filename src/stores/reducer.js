import * as types from './actionTypes'
import {getLocalStorageKey} from '../helpers/storage'
let initialState = {
    username: getLocalStorageKey('username')||null,

};

let userReducer = (state = initialState, action) => {
    switch (action.type) {

        case types.LOGIN:

            return {
                ...state,
                username: action.payload,

            };
        case types.LOGOUT:
            return {
                ...state,
                username: action.payload,
            };

        default:
            return state;
    }
};
export default userReducer;
