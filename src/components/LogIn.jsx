import { useEffect, navigate } from "react";

import Container from "react-bootstrap/Container";
import Stack from "react-bootstrap/Stack";
import Heading from "./components/Heading";

import Users from "./components/Users";
import Gigs from "./components/Gigs";

import LogInForm from "./forms/LoginForm";



export default function LogIn() {
  useEffect(()=>{
    if(localStorage.getItem('token') ){
      navigate('/user/login')
    }})
    
  return (
    <Container>
      <Heading />
      <Stack direction="horizontal">
        
     
        <div>
          <LogInForm />
        <Users />
        <Gigs />
        </div>
      </Stack>
      
    </Container>
  );
}


