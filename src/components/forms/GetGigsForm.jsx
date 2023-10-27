import { useEffect, useState } from "react";

export default function GetGigs() {
  const [gigs, setGigs] = useState([]);

  useEffect(() => {
    async function fetchGigs() {
      try {
        const response = await fetch("http://127.0.0.1:5000/gig"); // Replace with your API endpoint
        if (response.ok) {
          const data = await response.json();
          setGigs(data);
        } else {
          console.error("Failed to fetch gigs");
        }
      } catch (error) {
        console.error("Network request error:", error);
      }
    }

    fetchGigs();
  }, []);

  return (
    <div>
      <h4>My Gigs</h4>
      <table>
        <thead>
          <tr>
            <th>Gig ID</th>
            <th>Gig Name</th>
            <th>Description</th>
            <th>Date</th>
            <th>Location</th>
            <th>Pay</th>
          </tr>
        </thead>
        <tbody>
          {gigs.map((gig, index) => (
            <tr key={index}>
              <td>{gig.gig_id}</td>
              <td>{gig.gig_name}</td>
              <td>{gig.description}</td>
              <td>{gig.date}</td>
              <td>{gig.location}</td>
              <td>${gig.pay}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
