import { useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function UserForm({ edit }) {
  const navigate = useNavigate();
  const usernameField = useRef(null);
  const passwordField = useRef(null);
  const emailField = useRef(null);
  const fNameField = useRef(null);
  const lNameField = useRef(null);
  const roleField = useRef(null); // Added roleField

  useEffect(() => {
    if (!edit && localStorage.getItem('token')) {
      navigate('/');
    }
  }, [edit, navigate]);

  async function handleRegisterData(e) {
    e.preventDefault();

    const users = {
      username: usernameField.current.value,
      password: passwordField.current.value,
      email: emailField.current.value,
    };
    if (fNameField.current.value) {
      users.first_name = fNameField.current.value;
    }
    if (lNameField.current.value) {
      users.last_name = lNameField.current.value;
    }
    if (roleField.current.value) {
      users.role = roleField.current.value; // Add role to the users object
    }
    clearFormData();
    await registerUser(users, edit);
  }

  async function registerUser(users, isEdit) {
    const endpoint = isEdit ? 'user' : 'register';
    const res = await fetch(`http://127.0.0.1:5000/${endpoint}`, {
      method: isEdit ? 'PUT' : 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
      body: JSON.stringify(users),
    });
    const data = await res.json();
    console.log(data);
    if (!res.ok) {
      window.alert('Register Failed');
    } else navigate('/login');
  }

  function clearFormData() {
    usernameField.current.value = '';
    emailField.current.value = '';
    passwordField.current.value = '';
    fNameField.current.value = '';
    lNameField.current.value = '';
    roleField.current.value = ''; // Clear the roleField as well
  }

  return (
    <form onSubmit={handleRegisterData}>
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
      <input type="text" name="first-name" ref={fNameField} />
      <br />
      <label htmlFor="last-name">Last Name</label>
      <br />
      <input type="text" name="last-name" ref={lNameField} />
      <br />
      <label htmlFor="role">Role (Promoter or Dj)</label>
      <br />
      <input type="text" name="role" ref={roleField} /> {/* Add role input field */}
      <br />
      <label htmlFor="password">Password</label>
      <br />
      <input type="password" name="password" ref={passwordField} required />
      <br />
      <input type="submit" value={edit ? 'Edit' : 'Register'} />
    </form>
  );
}
