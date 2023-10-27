import{ useEffect, useState } from "react";

export default function DeleteGig() {
  const [gigs, setGigs] = useState([]);
  const [gigToDelete, setGigToDelete] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);

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

  async function handleDelete() {
    try {
      const response = await fetch(`http://127.0.0.1:5000/gig/${gigToDelete}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });

      if (response.ok) {
        setSuccess(true);
        setMessage("Gig deleted successfully.");
        // You can also update the list of gigs if needed.
      } else {
        setSuccess(false);
        setMessage("Invalid User");
      }

      // Clear the selected gig to delete.
      setGigToDelete("");
    } catch (error) {
      console.error("Network request error:", error);
    }
  }

  return (
    <div className="form">
      <h4>Delete Gig</h4>
      <select value={gigToDelete} onChange={(e) => setGigToDelete(e.target.value)}>
        <option value="">Select a Gig to Delete</option>
        {gigs.map((gig) => (
          <option key={gig.gig_id} value={gig.gig_id}>
            {gig.gig_name}
          </option>
        ))}
      </select>
      <button className='submitButton' onClick={handleDelete}>Delete Gig</button>
      {message && (
        <p className={success ? "success" : "error"}>{message}</p>
      )}
    </div>
  );
}
