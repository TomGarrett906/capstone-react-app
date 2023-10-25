import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"

const Sidebar = () => {
  return (
   <Navbar sticky="top" className='flex-column sidebar'>
    <Nav.Item>
        <Nav.Link href="/mygigs">My Gigs</Nav.Link>
    </Nav.Item>
    <Nav.Item>
        <Nav.Link href="/editgigs">Edit Gigs</Nav.Link>
    </Nav.Item>
    <Nav.Item>
        <Nav.Link href="/account">Account</Nav.Link>
    </Nav.Item>
   </Navbar>

  )
}

export default Sidebar