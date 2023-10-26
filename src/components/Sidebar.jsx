import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"

const Sidebar = () => {
  return (
   <Navbar sticky="top" className='flex-column sidebar'>
    <Nav.Item>
        <Nav.Link href="/mygigs" className="sideItems">My Gigs</Nav.Link>
    </Nav.Item>
    <Nav.Item>
        <Nav.Link href="/addgigs" className="sideItems">Add Gigs</Nav.Link>
    </Nav.Item>
    <Nav.Item>
        <Nav.Link href="/account" className="sideItems">Account</Nav.Link>
    </Nav.Item>
   </Navbar>

  )
}

export default Sidebar