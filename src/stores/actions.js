
import * as types from './actionTypes'
export const onLogin = (payload) => {

    return { type: types.LOGIN, payload }

}
export const onLogout = () => {

    return { type: types.LOGOUT, payload: null }

}