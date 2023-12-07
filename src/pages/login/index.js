import React, { useState, useEffect } from 'react';
import { login } from '../../services/auth';
import { useDispatch } from 'react-redux';
import { onLogin } from '../../stores/actions';
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [credentials, setCredentials] = useState({
    username: '',
    password: '',
    rememberMe: false,
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const storedCredentials = localStorage.getItem('rememberedCredentials');
    if (storedCredentials) {
      setCredentials(JSON.parse(storedCredentials));
    }
  }, []);

  const handleChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.type === 'checkbox' ? e.target.checked : e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await login(credentials);
      // Handle authentication success
      dispatch(onLogin(response.username)); // Pass user data to parent component or update global state

      if (credentials.rememberMe) {
        localStorage.setItem('rememberedCredentials', JSON.stringify(credentials));
      } else {
        localStorage.removeItem('rememberedCredentials');
      }
      navigate('/')
    } catch (error) {
      // Handle authentication failure
      console.error('Login failed:', error);
    }
  };

  return (


    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input type="text" name="username" value={credentials.username} onChange={handleChange} />
        </label>
        <br />
        <label>
          Password:
          <input type="password" name="password" value={credentials.password} onChange={handleChange} />
        </label>
        <br />
        <label>
          Remember Me:
          <input
            type="checkbox"
            name="rememberMe"
            checked={credentials.rememberMe}
            onChange={handleChange}
          />
        </label>
        <br />
        <button type="submit">Login</button>
      </form>
    </div>

  );
};

export default Login;
