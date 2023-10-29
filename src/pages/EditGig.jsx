// EditGig.jsx

import Body from "../components/Body"
import EditGigForm from "../components/forms/EditGigForm"

// Import any necessary functions or hooks for making API calls

export default function EditGigs() {
  // Define a function to handle the gig update
  const handleSubmit = async (gig_id, updatedGig) => {
    try {
      // Make a PUT request to update the gig data using gig_id
      // Example using fetch:
      await fetch(`http://127.0.0.1:5000/gig/${gig_id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(updatedGig)
      });

      // Handle success or any other necessary actions after the update
    } catch (error) {
      // Handle errors
      console.error('Error updating gig:', error);
    }
  };

  return (
    <Body sidebar={true}>
      {/* Pass the handleSubmit function as onSubmit prop to EditGigForm */}
      <EditGigForm onSubmit={handleSubmit} />
    </Body>
  );
}
