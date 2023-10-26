

export default function UserInfo() {
  const user = {
    username: "t.garrett",
    email: "tom-garrett@email.com",
    first_name: "Tom",
    last_name: "Garrett",
    role: "Promoter",
  };

  return (
    <div className="userInfo">
      <h5>Account Information</h5>
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
            <td className="userRow">{user.username}</td>
            <td className="userRow">{user.email}</td>
            <td className="userRow">{user.first_name}</td>
            <td className="userRow">{user.last_name}</td>
            <td className="userRow">{user.role}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
