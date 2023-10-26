

export default function MyGigs() {
  

  const gigs = [
    {
      name: "Club Z",
      description: "A night of electronic music",
      date: "2023-11-15",
      location: "123 Main St, City",
      dj: "DJ X",
      promoter: "Promo Events Inc",
    },
    {
      name: "City Park Amphitheater",
      description: "Live music under the stars",
      date: "2023-11-20",
      location: "456 Park Ave, Town",
      dj: "DJ Y",
      promoter: "Music Magic Productions",
    },
    {
      name: "Sunset Park",
      description: "Chill-out and enjoy the sunset",
      date: "2023-11-25",
      location: "789 Sunset Blvd, Beach",
      dj: "DJ Z",
      promoter: "Sunset Vibes Ent.",
    },
    {
      name: "Rave Warehouse",
      description: "An all-night rave party",
      date: "2023-11-30",
      location: "101 Warehouse Dr, Warehouse District",
      dj: "DJ R",
      promoter: "Rave Nation Events",
    },
    {
      name: "Café Serenade",
      description: "Acoustic melodies and coffee",
      date: "2023-12-05",
      location: "222 Serenade Ln, Caféville",
      dj: "DJ C",
      promoter: "Serenade Music Co.",
    },
  ];

  return (
    <div>
      <h5>My Gigs</h5>
      <table className="gigTable">
        <thead>
          <tr>
            <th className="gigTableItems">Gig Name</th>
            <th className="gigTableItems">Description</th>
            <th className="gigTableItems">Date</th>
            <th className="gigTableItems">Location</th>
            <th className="gigTableItems">DJ</th>
            <th className="gigTableItems">Promoter</th>
          </tr>
        </thead>
        <tbody>
          {gigs.map((gig, index) => (
            <tr key={index}>
              <td>{gig.name}</td>
              <td>{gig.description}</td>
              <td>{gig.date}</td>
              <td>{gig.location}</td>
              <td>{gig.dj}</td>
              <td>{gig.promoter}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
