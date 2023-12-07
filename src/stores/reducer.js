import * as types from './actionTypes'

let initialState = {
    username: null,

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
                username: null,
            };

        default:
            return state;
    }
};
export default userReducer;
