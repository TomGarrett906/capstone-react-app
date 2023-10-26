import { useEffect, navigate } from "react";

import Container from "react-bootstrap/Container";
import Stack from "react-bootstrap/Stack";
import Heading from "./components/Heading";

import Users from "./components/Users";
import Gigs from "./components/Gigs";
import RegisterForm from './forms/UserForm';



export default function Register() {
  useEffect(()=>{
    if(localStorage.getItem('token') ){
      navigate('/')
    }})
  return (
    <Container>
      <Heading />
      <Stack direction="horizontal">
        
     
        <div>
          <RegisterForm />
        <Users />
        <Gigs />
        </div>
      </Stack>
      
    </Container>
  );
}


