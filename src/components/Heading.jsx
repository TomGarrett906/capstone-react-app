import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
// import Container from "react-bootstrap/esm/Container";


export default function Heading() {
  return (
    <>
      <Navbar sticky="top" className="header">
        {/* <Container> */}
        <Navbar.Brand href='/' className="brand">Gig_Trakr</Navbar.Brand>
        <Nav.Item>
        <Nav.Link href='/login'>Login</Nav.Link>
        </Nav.Item>
        <Nav.Item>
        <Nav.Link href='/register'>Register</Nav.Link>
        </Nav.Item>
        
      </Navbar>
      



    </>
  );
}
