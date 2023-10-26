

export default function RegisterForm() {
  return (
    <form className="form" action="">
        <label htmlFor="username">Username</label><br/>
        <input type="text" name='username' placeholder="username"/><br/>
        <label htmlFor="email">Email</label><br/>
        <input type="text" name='email' placeholder="email@email.com"/><br/>
        <label htmlFor="passsword">Password</label><br/>
        <input type="text" name='passsword' placeholder="**********"/><br/>
        <label htmlFor="first-name">First Name</label><br/>
        <input type="text" name='first-name' placeholder="First"/><br/>
        <label htmlFor="last-name">Last Name</label><br/>
        <input type="text" name='last-name' placeholder="Last"/><br/>
        <label htmlFor="role">Role</label><br/>
        <input type="text" name='role' placeholder="Promoter or Dj"/><br/>
        
        <input  className="submitButton" type="submit" value='Register' />
    </form>
  )
}
