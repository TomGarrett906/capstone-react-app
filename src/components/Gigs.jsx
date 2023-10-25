import { useState } from "react";

export default function Gigs() {
    const [getGig, setGig] = useState("");


    const gigs = [
      "Club Z",
      "City Park Amphitheater",
      "Urban Arena",
      "Sunset Park",
      "Rave Warehouse",
      "Café Serenade",
    ];
  
    return (
        <>
      
        <button
          className="button"
          onClick={() => {
            const gigIndex = Math.floor(Math.random() * gigs.length);
            setGig(gigs[gigIndex]);
          }}
        >
          Get Gig
        </button>
  
        <p>Gig: {getGig}</p>
      </>
    );
  }
  

 

  