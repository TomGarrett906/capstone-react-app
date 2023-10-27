import { useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function UserForm({ edit }) {
  const navigate = useNavigate();
  const usernameField = useRef(null);
  const password_hashField = useRef(null);
  const emailField = useRef(null);
  const first_nameField = useRef(null);
  const last_nameField = useRef(null);
  const roleField = useRef(null); 

  useEffect(() => {
    if (!edit && localStorage.getItem('token')) {
      navigate('/user/register');
    }
  }, []);

  async function handleRegisterData(e) {
    e.preventDefault();

    const user = {
      username: usernameField.current.value,
      email: emailField.current.value,
      password_hash: password_hashField.current.value,
    };
    if (first_nameField.current.value) {
      user.first_name = first_nameField.current.value;
    }
    if (last_nameField.current.value) {
      user.last_name = last_nameField.current.value;
    }
    if (roleField.current.value) {
      user.role = roleField.current.value; 
    }
    clearFormData();
    await registerUser(user);
  }

  async function registerUser(user) {
    const endpoint = edit ? 'user' : 'register';
    try {
      console.log(endpoint)
      const res = await fetch(`http://127.0.0.1:5000/user/${endpoint}`, {
        method: edit ? 'PUT' : 'POST',
        
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
        body: JSON.stringify(user),
      });
      console.log(JSON.stringify(user))

      if (!res.ok) {
        window.alert('Register Failed');
        return;
      }

      const data = await res.json();
      console.log(data);
      navigate('/login');
    } catch (error) {
      console.error('Network request error:', error);
      window.alert('Network request failed');
    }
  }

  function clearFormData() {
    usernameField.current.value = '';
    emailField.current.value = '';
    password_hashField.current.value = '';
    first_nameField.current.value = '';
    last_nameField.current.value = '';
    roleField.current.value = '';
  }

  return (
    <form className='form' onSubmit={handleRegisterData}>
      <label htmlFor="username">Username</label>
      <br />
      <input type="text" name="username" ref={usernameField} required />
      <br />
      <label htmlFor="email">Email</label>
      <br />
      <input type="text" name="email" ref={emailField} required />
      <br />
      <label htmlFor="first-name">First Name</label>
      <br />
      <input type="text" name="first-name" ref={first_nameField} />
      <br />
      <label htmlFor="last-name">Last Name</label>
      <br />
      <input type="text" name="last-name" ref={last_nameField} />
      <br />
      <label htmlFor="role">Role (Promoter or Dj)</label>
      <br />
      <input type="text" name="role" ref={roleField} /> 
      <br />
      <label htmlFor="password_hash">Password</label>
      <br />
      <input type="password" name="password_hash" ref={password_hashField} required />
      <br />
      <input className='submitButton' type="submit" value={edit ? 'Edit' : 'Register'} />
    </form>
  );
}
