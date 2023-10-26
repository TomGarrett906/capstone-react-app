export const LoggedUser = {
    token: "",
    username: ""
  };
  
  export const User = {
    id: undefined,
    username: "",
    password: "",
    email: "",
    first_name: undefined,
    last_name: undefined,
    role: ""
  };
  
  export const Gig = {
    id: "",
    gig_name: "",
    description: "",
    location: "",
    date: new Date(),
    pay: 0,
    user_id: 0,
  };