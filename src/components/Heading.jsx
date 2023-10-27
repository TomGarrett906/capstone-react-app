import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import DarkMode from "./DarkMode";
import { NavLink } from "react-router-dom";

export default function Heading() {
  return (
    <>
      <Navbar sticky="top" className="header">
        <Navbar.Brand as={NavLink} to="/home" className="brand">
          Gig_Trakr
        </Navbar.Brand>
        

        
        <Nav.Item>
          <Nav.Link href="/user/login" className="navItems">
            Log In
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/user/register" className="navItems">
            Register
          </Nav.Link>
        </Nav.Item>



        <Nav.Item>
          <Nav.Link href="/" className="about navItems">
            About
          </Nav.Link>
        </Nav.Item>



          <Nav.Item>
            <Nav.Link as={NavLink} to='/delete-user' className="navItems">Delete Profile</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={NavLink} to='/edit-user' className="navItems">Edit Profile</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={NavLink} to='/logout' className="navItems">Logout</Nav.Link>
          </Nav.Item>




        <DarkMode />
     
      </Navbar>
    </>
  );
}
