import Body from "react-bootstrap/Body";
import Users from "./components/Users";
import Gigs from "./components/Gigs";
import Sidebar from "./components/Sidebar";


export default function Dashboard() {
    return (
        <Body sidebar={true}>
        
        <Sidebar />
       
        <Users />
        <Gigs />
        
      </Body>

    )
  }
  
  