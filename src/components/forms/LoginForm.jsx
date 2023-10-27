import { useRef, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import  UserContext from '../../context/UserProvider';


export default function LoginForm() {
  const navigate = useNavigate();
  const { setUser } = useContext(UserContext);
  
  const usernameField = useRef(null);
  const password_hashField = useRef(null);

  useEffect(() => {
    if (localStorage.getItem('token')) {
      navigate('/user/login');
    }
  }, [navigate]);
  
  function handleLoginData(e) {
    e.preventDefault();
    const loginInfo = {
      password_hash: password_hashField.current.value
    };
    if (usernameField.current.value) {
      loginInfo.username = usernameField.current.value;
    } else {
      window.alert('Please include Username or Email');
      return;
    }
    clearForm();
    loginUser(loginInfo);
    navigate('/home');
  }

  async function loginUser(loginInfo) {
    const res = await fetch('http://127.0.0.1:5000/user/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(loginInfo)
    });
    if (res.ok) {
      const data = await res.json();
      const accessToken = data.access_token;
      setUser({
        token: accessToken, 
        username: loginInfo.username ? loginInfo.username : ''
      });
      localStorage.setItem('token', accessToken);
    } else {
      window.alert('Failed Login');
    }
  }

  function clearForm() {
    usernameField.current.value = '';
    password_hashField.current.value = '';
  }

  return (
    <form onSubmit={handleLoginData}>
      <label htmlFor="username">Username</label><br/>
      <input type="text" name="username" ref={usernameField}/><br/>
      <label htmlFor="password_hash">Password</label><br/>
      <input type="password" name="password_hash" ref={password_hashField} required/><br/>
      <input type="submit" value="login" />
    </form>
  );
}
