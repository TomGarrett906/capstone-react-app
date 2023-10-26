import { useState, useEffect } from 'react';

export default function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);

  async function getUsers() {
    const res = await fetch('http://127.0.0.1:5000/user');
    if (res.ok) {
      const data = await res.json();
      setUsers(data);
    } else window.alert('Bad Request');
  }

  function followUser() {}

  return (
    <div>
      <h3>Users: </h3>
      {users.length > 0 && (
        <div>
          {users.map((user) => (
            <div key={user.id}>
              {user.username} <small>{user.email} </small>
              {localStorage.getItem('token') && (
                <button onClick={followUser}>Follow</button>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
