import React from 'react'
import { NavLink } from 'react-router-dom';
import SignIn from './signIn';
const NavBar = () => {
  return (
    <div>
      <ul>
        <li><NavLink to="/dynamicForm">Dynamic Form</NavLink></li>
        <li><NavLink to="/">Table List</NavLink></li>
        <li><NavLink to="/form">Form </NavLink></li>
        <li><SignIn /></li>

      </ul>
    </div>
  )
}
export default NavBar