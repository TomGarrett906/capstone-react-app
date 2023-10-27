import { useState, useEffect } from "react";

export default function GigCRUD({edit}) {
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [location, setLocation] = useState("");
  const [dj, setDJ] = useState("");
  const [promoter, setPromoter] = useState("");
  // const [editMode, setEditMode] = useState(false);
  const [editGig, setEditGig] = useState(null);
  const [gigs, setGigs] = useState([]); // State to store the list of gigs

  useEffect(() => {
    // Fetch the list of gigs when the component mounts
    async function fetchGigs() {
      try {
        const response = await fetch("http://127.0.0.1:5000/gig");
        if (response.ok) {
          const data = await response.json();
          setGigs(data);
        } else {
          console.error("Failed to fetch gigs");
        }
      } catch (error) {
        console.error("Error:", error);
      }
    }

    fetchGigs();
  }, []); // The empty dependency array ensures this effect runs only once

  // Function to handle gig creation (POST request)
  const addGig = async () => {
    const newGig = {
      name: "New Gig", // You can set a default name or leave it empty
      description,
      date,
      location,
      dj,
      promoter,
    };

    // Perform a POST request to add the new gig
    try {
      const response = await fetch("http://127.0.0.1:5000/gig", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newGig),
      });

      if (response.ok) {
        // Handle success
        console.log("Gig Add successfully!");
        // Refresh the list of gigs after creating
        const updatedGigs = [...gigs, newGig];
        setGigs(updatedGigs);
      } else {
        // Handle error
        console.error("Failed to Add gig");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  // Function to handle editing a gig
  const editGigHandler = (gig) => {
    setEditGig(gig);
    // setEditMode(true);
  };

  // Function to update a gig (PUT request)
  const updateGig = async () => {
    // Perform a PUT request to update the gig
    try {
      const response = await fetch(`http://127.0.0.1:5000/${editGig.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(editGig),
      });

      if (response.ok) {
        // Handle success
        console.log("Gig updated successfully!");
        // setEditMode(false); // Exit edit mode
        setEditGig(null); // Clear the edited gig
      } else {
        // Handle error
        console.error("Failed to update gig");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  // Function to delete a gig (DELETE request)
  const deleteGig = async (gigId) => {
    // Perform a DELETE request to delete the gig
    try {
      const response = await fetch(`http://127.0.0.1:5000/gig/${gigId}`, {
        method: "DELETE",
      });

      if (response.ok) {
        // Handle success
        console.log("Gig deleted successfully!");
        // Refresh the list of gigs after deleting
        const updatedGigs = gigs.filter((gig) => gig.id !== gigId);
        setGigs(updatedGigs);
      } else {
        // Handle error
        console.error("Failed to delete gig");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

function addOrEdit() {
  if(!edit){ 
      addGig()
  } else {
      editGig()
  }
}

  return (
    <div>
      <h1>Create New Gig</h1>
      <label>Name of Gig: </label>
      <br />
      <form onSubmit={addOrEdit}>
      <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
      <br />
      <label>Description: </label>
      <br />
      <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
      <br />
      <label>Date: </label>
      <br />
      <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
      <br />
      <label>Location: </label>
      <br />
      <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} />
      <br />
      <label>Promoter: </label>
      <br />
      <input type="text" value={promoter} onChange={(e) => setPromoter(e.target.value)} />
      <br />
      <label>DJ: </label>
      <br />
      <input type="text" value={dj} onChange={(e) => setDJ(e.target.value)} />
      <br />
      {edit && (
        <div>
          {/* Input fields to edit gig details */}
          <button onClick={updateGig}>Update Gig</button>
        </div>
      )}
      {!edit && (
        <div>
          <button onClick={addGig}>Create Gig</button>
        </div>
      )}
      </form>
      <h1>Gig List</h1>
      {gigs.map((gig) => (
  <div key={gig.id}>
    <p>Name: {gig.name}</p>
    <p>Description: {gig.description}</p>
    {/* Display other gig details here */}
    {edit && editGig?.id === gig.id ? (
      <div>
        {/* Input fields to edit gig details */}
        <button onClick={updateGig}>Update Gig</button>
      </div>
    ) : (
      <div>
        <button onClick={() => editGigHandler(gig)}>Edit Gig</button>
        <button onClick={() => deleteGig(gig.id)}>Delete Gig</button>
      </div>
    )}
  </div>
))}

    </div>
  );
}
