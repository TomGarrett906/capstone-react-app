import { useState } from "react";

export default function Users() {
  const [getUser, setUser] = useState("");

  const users = ["Ethan","Olivia","Lenny","Emma","Noah","Ava","Isabella","Sophia","Mia","Charlotte","James","Benjamin","Lucas","Alexander","Henry","Samuel","David","Joseph","David","Michael"];

  return (
    <>
      
      <button
        className="button"
        onClick={() => {
          const userIndex = Math.floor(Math.random() * users.length);
          setUser(users[userIndex]);
        }}
      >
        Get User
      </button>

      <p>User: {getUser}</p>
    </>
  );
}
