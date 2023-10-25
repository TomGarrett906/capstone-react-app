import Container from "react-bootstrap/Container";
import Stack from "react-bootstrap/Stack";
import Heading from "./components/Heading";
import Users from "./components/Users";
import Gigs from "./components/Gigs";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <Container>
      <Heading />
      <Stack direction="horizontal">
        
        <Sidebar />
        <div>
        <Users />
        <Gigs />
        </div>
      </Stack>
      {Object.keys(Users).length > 0 && (
        <>
          <h3>Users: </h3>
          {Object.keys(Users).map((user, i) => (
            <p key={i}>{user}</p>
          ))}
        </>
      )}
    </Container>
  );
}

export default App;
