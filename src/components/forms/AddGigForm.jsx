import { useRef } from "react";

export default function AddGigForm() {
  const gigNameField = useRef(null);
  const descriptionField = useRef(null);
  const dateField = useRef(null);
  const locationField = useRef(null);
  const payField = useRef(null);
  const promoterIdField = useRef(null);
  const djIdField = useRef(null);

  async function makeGig(e) {
    e.preventDefault();
    const res = await fetch('http://127.0.0.1:5000/gig/', {
      method: "POST",
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        gig_name: gigNameField.current.value,
        description: descriptionField.current.value,
        date: dateField.current.value,
        location: locationField.current.value,
        pay: parseFloat(payField.current.value),
        promoter_id: parseInt(promoterIdField.current.value),
        dj_id: parseInt(djIdField.current.value)
      })
    });
    if (res.ok) {
      const data = await res.json();
      console.log(data);
    } else {
      console.log('Bad request');
    }
  }

  return (
    <form className="form" onSubmit={makeGig}>
      <h4>Add Gig</h4>
      <input type="text" name="gig_name" ref={gigNameField} placeholder="Gig Name" required />
      <input type="text" name="description" ref={descriptionField} placeholder="Description" required />
      <input type="date" name="date" ref={dateField} placeholder="Date" required />
      <input type="text" name="location" ref={locationField} placeholder="Location" required />
      <input type="number" name="pay" ref={payField} placeholder="Pay" required />
      <input type="number" name="promoter_id" ref={promoterIdField} placeholder="Promoter ID" required />
      <input type="number" name="dj_id" ref={djIdField} placeholder="DJ ID" required />
      <input type="submit" value="Add Gig" />
    </form>
  );
}
