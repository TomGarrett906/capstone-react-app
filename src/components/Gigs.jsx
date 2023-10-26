import { useEffect, useState } from "react";
import { Container, Spinner } from "react-bootstrap";

export default function Gigs() {
  const [gigs, setGigs] = useState([]);

  useEffect(() => {
    console.log("in effect");
    getGigs();
  }, []);

  async function getGigs() {
    console.log("in async");
    const res = await fetch("http://127.0.0.1:5000/gig", {
      method: "GET",
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    });

    if (res.ok) {
      const gigsData = await res.json();
      console.log(gigsData);
      setGigs(gigsData);
    } else console.log("bad request");
  }

  return (
    <Container>
      {gigs.length > 0 ? (
        gigs.map((gig) => <p key={gig.id}>{gig.body}</p>)
      ) : (
        <Spinner />
      )}
    </Container>
  );
}
