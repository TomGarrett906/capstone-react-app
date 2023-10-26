import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import DarkMode from "./DarkMode";
import {  NavLink } from "react-router-dom";




export default function Heading() {
  return (
    <>
      <Navbar sticky="top" className="header">
       
        <Navbar.Brand as={NavLink} to ='/' className="brand">Gig_Trakr</Navbar.Brand>
        <Nav.Item>
        <Nav.Link href='/login' className="navItems">Log In</Nav.Link>
        </Nav.Item>
        <Nav.Item>
        <Nav.Link href='/register' className="navItems">Register</Nav.Link>
        </Nav.Item>
        <Nav.Item>
        <Nav.Link href='/about' className="about navItems">About</Nav.Link>
        </Nav.Item>
        <DarkMode />
      </Navbar>
      
     
      


    </>
  );
}

export function App() {
  return (
    <div>
      {/* ...other components and content */}
      <DarkMode />
    </div>
  );
}