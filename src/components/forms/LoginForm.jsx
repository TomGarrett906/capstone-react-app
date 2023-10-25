export default function LogInForm() {
    return (
      <form className="form" action="">
          <h5>Enter your Username and Password</h5>
          <label htmlFor="username">Username</label><br/>
          <input type="text" placeholder="username" name='username'/><br/>
          <label htmlFor="passsword">Password</label><br/>
          <input type="text" placeholder="**********" name='passsword'/><br/>

          
          <input className="submitButton" type="submit" value='Log In' />
      </form>
    )
  }