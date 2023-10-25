import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"

const Sidebar = () => {
  return (
   <Navbar sticky="top" className='flex-column sidebar'>
    <Nav.Item>
        <Nav.Link href="/account">Dashboard</Nav.Link>
    </Nav.Item>
    <Nav.Item>
        <Nav.Link href="/gigs">Account</Nav.Link>
    </Nav.Item>
    <Nav.Item>
        <Nav.Link href="/payment">Payment</Nav.Link>
    </Nav.Item>
   </Navbar>

  )
}

export default Sidebar