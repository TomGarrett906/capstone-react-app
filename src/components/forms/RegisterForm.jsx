

export default function RegisterForm() {
  return (
    <form className="form" action="">
        <label htmlFor="username">Username</label><br/>
        <input type="text" name='username'/><br/>
        <label htmlFor="email">Email</label><br/>
        <input type="text" name='email'/><br/>
        <label htmlFor="passsword">Password</label><br/>
        <input type="text" name='passsword'/><br/>
        <label htmlFor="first-name">First Name</label><br/>
        <input type="text" name='first-name'/><br/>
        <label htmlFor="last-name">Last Name</label><br/>
        <input type="text" name='last-name'/><br/>
        <label htmlFor="role">Role</label><br/>
        <input type="text" name='role'/><br/>
        
        <input  className="submitButton" type="submit" value='Register' />
    </form>
  )
}
