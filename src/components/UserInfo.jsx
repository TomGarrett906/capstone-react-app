import { useContext } from 'react';
import UserContext from '../context/UserProvider';

export default function UserInfoTable() {
  const { user } = useContext(UserContext);

  return (
    <div>
      <h2>Account Information</h2>
      <table>
        <thead>
          <tr>
            <th>Username</th>
            <th>Email</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Role</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{user.username}</td>
            <td>{user.email}</td>
            <td>{user.firstName}</td>
            <td>{user.lastName}</td>
            <td>{user.role}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
