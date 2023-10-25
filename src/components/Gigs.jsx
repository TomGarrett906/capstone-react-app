export default function Gigs() {
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
        <h3>Gigs:</h3>
        {gigs.map((gig, i) => {
          return <p key={i}>{gig}</p>;
        })}
      </>
    );
  }
  