import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { onLogout } from '../stores/actions';
import { useNavigate } from "react-router-dom";
const SignIn = () => {
  const { username } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handlelogout = () => {
    dispatch(onLogout())
    navigate("/")
  }

  return (
    <div>
      {username ?
        <div>
          <h2>Welcome, {username}!</h2>
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