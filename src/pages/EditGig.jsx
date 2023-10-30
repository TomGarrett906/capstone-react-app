import Body from "../components/Body"
import EditGigForm from "../components/forms/EditGigForm"


export default function EditGigs() {

  const handleSubmit = async (gig_id, updatedGig) => {
    try {

      await fetch(`http://127.0.0.1:5000/gig/${gig_id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(updatedGig)
      });

    } catch (error) {

      console.error('Error updating gig:', error);
    }
  };

  return (
    <Body sidebar={true}>
      <EditGigForm onSubmit={handleSubmit} />
    </Body>
  );
}
