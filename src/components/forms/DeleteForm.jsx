import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

export default function DeleteForm() {
  const navigate = useNavigate();

  const usernameField = useRef(null);
  const passwordField = useRef(null);

  async function handleDeleteData(e) {
    e.preventDefault();
    const userId = userId
    const url = `http://127.0.0.1:5000/gig/${userId}`;

    const res = await fetch(url, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
      body: JSON.stringify({
        username: usernameField.current.value,
        password: passwordField.current.value,
      }),
    });

    if (res.ok) {
      navigate('/logout');
    } else {
      window.alert('Delete Failed');
    }
  }

  return (
    <form className='form' onSubmit={handleDeleteData}>
      <label htmlFor="username">Username</label><br />
      <input type="text" name="username" ref={usernameField} required /><br />
      <label htmlFor="password">Password</label><br />
      <input type="password" name="password" ref={passwordField} required /><br />
      <input className='submitButton' type="submit" value="Delete" />
    </form>
  );
}
