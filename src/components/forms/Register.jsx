

export default function Register() {
  return (
    <form action="">
        <label htmlFor="username">Username</label><br/>
        <input type="text" name='username'/>
        <label htmlFor="email">Email</label><br/>
        <input type="text" name='email'/>
        <label htmlFor="passsword">Password</label><br/>
        <input type="text" name='passsword'/>
        <label htmlFor="first-name">First Name</label><br/>
        <input type="text" name='first-name'/>
        <label htmlFor="last-name">Last Name</label><br/>
        <input type="text" name='last-name'/>
        <label htmlFor="role">Promoter or Dj</label><br/>
        <input type="text" name='role'/>
        
        <input type="submit" value='Register' />
    </form>
  )
}
