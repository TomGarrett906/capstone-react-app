import { BrowserRouter, Routes, Route } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Heading from "./components/Heading";
import UserForm from "./components/forms/UserForm";
import MyGigs from "./pages/MyGigs";
import EditGig from "./pages/EditGig";
import LandingPage from "./pages/LandingPage";
import LoginForm from "./components/forms/LoginForm";
import Account from "./pages/Account";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import FormPage from "./pages/FormPage";
import DeleteForm from "./components/forms/DeleteForm";
import Logout from "./components/Logout";
import DeleteGig from "./pages/DeleteGig";

import AddGig from "./pages/AddGig";

function App() {
  return (
    <Container>
      <BrowserRouter>
      <Heading />

        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/home" element={<Home />} />
          
          <Route path='/user/register' element={<FormPage>
                                            <UserForm edit={false} />
                                          </FormPage>}/>
          <Route path='/user/login' element={<FormPage>
                                          <LoginForm />
                                        </FormPage>}/>

          <Route path='/edit-user' element={<FormPage>
                                            <UserForm edit />
                                          </FormPage>}/>
          <Route path='/delete-user' element={<FormPage>
                                                <DeleteForm />
                                              </FormPage>}/>

          <Route path='/logout' element={<Logout />}/>

          <Route path="/mygigs" element={<MyGigs />} />
          <Route path="/addgig" element={<AddGig edit={false}/>} />
          <Route path="/editgig" element={<EditGig edit={true}/>} />
          <Route path="/deletegig" element={<DeleteGig edit={true}/>} />
          <Route path="/account" element={<Account />} />
          
        </Routes>
      </BrowserRouter>
      <Footer/> 
    </Container>
  );
}

export default App;
