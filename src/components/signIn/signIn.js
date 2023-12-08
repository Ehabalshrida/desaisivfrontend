import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { onLogout } from '../../stores/actions';
import { useNavigate } from "react-router-dom";
import {getLocalStorageKey,removeLocalStorageKey}from '../../helpers/storage'
import './signIn.scss'
const SignIn = () => {
  const { username } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handlelogout = () => {
    dispatch(onLogout())
    removeLocalStorageKey('user')
    navigate("/")
  }
const user=getLocalStorageKey('user')
const userNameFromLocalStorage=getLocalStorageKey('username')
  return (
    <div>
      {user ?
        <div>
          <h2>Welcome, {username?username:userNameFromLocalStorage}!</h2>
          <button onClick={handlelogout}>Logout</button>
        </div>
        :

        <div>

          <button onClick={() => navigate("/login")}>Login </button>


        </div>
      }
    </div>
  )
}
export default SignIn