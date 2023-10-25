import { BrowserRouter, Routes, Route } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Heading from "./components/Heading";
import RegisterForm from "./components/forms/RegisterForm";
import MyGigs from "./pages/MyGigs";
import EditGigs from "./pages/EditGigs";
import LandingPage from "./pages/LandingPage";
import LogInForm from "./components/forms/LoginForm";
import Account from "./pages/Account";
import Home from "./pages/Home";

function App() {
  return (
    <Container>
      <BrowserRouter>
        <Heading />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/home" element={<Home />} />
          <Route path="/register" element={<RegisterForm />} />
          <Route path="/login" element={<LogInForm />} />
          <Route path="/mygigs" element={<MyGigs />} />
          <Route path="/editgigs" element={<EditGigs />} />
          <Route path="/account" element={<Account />} />
        </Routes>
     
      </BrowserRouter>
    </Container>
  );
}

export default App;
