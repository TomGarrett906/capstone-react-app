// EditGigForm.jsx

import { useRef, useEffect } from "react";

export default function EditGigForm({ gigData, onSubmit }) {
  const gigIdField = useRef(null); // Adding the gig_id field
  const gigNameField = useRef(null);
  const descriptionField = useRef(null);
  const dateField = useRef(null);
  const locationField = useRef(null);
  const payField = useRef(null);
  const promoterIdField = useRef(null);
  const djIdField = useRef(null);

  useEffect(() => {
    if (gigData) {
      gigIdField.current.value = gigData.gig_id; // Set the gig_id value
      gigNameField.current.value = gigData.gig_name;
      descriptionField.current.value = gigData.description;
      dateField.current.value = gigData.date;
      locationField.current.value = gigData.location;
      payField.current.value = gigData.pay;
      promoterIdField.current.value = gigData.promoter_id;
      djIdField.current.value = gigData.dj_id;
    }
  }, [gigData]);

  async function editGig(e) {
    e.preventDefault();
    const updatedGig = {
      gig_id: gigIdField.current.value, // Include the gig_id in the updated data
      gig_name: gigNameField.current.value,
      description: descriptionField.current.value,
      date: dateField.current.value,
      location: locationField.current.value,
      pay: parseFloat(payField.current.value),
      promoter_id: parseInt(promoterIdField.current.value),
      dj_id: parseInt(djIdField.current.value),
    };

    if (typeof onSubmit === 'function') {
      onSubmit(gigIdField.current.value, updatedGig); // Passing gig_id and updated data to onSubmit
    }

    // Clear the form after submission
    gigIdField.current.value = "";
    gigNameField.current.value = "";
    descriptionField.current.value = "";
    dateField.current.value = "";
    locationField.current.value = "";
    payField.current.value = "";
    promoterIdField.current.value = "";
    djIdField.current.value = "";
  }

  return (
    <form className="form" onSubmit={editGig}>
      <h4>Edit Gig</h4>
      <input type="text" name="gig_id" ref={gigIdField} placeholder="Gig ID" required />
      <input type="text" name="gig_name" ref={gigNameField} placeholder="Gig Name" required />
      <input type="text" name="description" ref={descriptionField} placeholder="Description" required />
      <input type="date" name="date" ref={dateField} placeholder="Date" required />
      <input type="text" name="location" ref={locationField} placeholder="Location" required />
      <input type="number" name="pay" ref={payField} placeholder="Pay" required />
      <input type="number" name="promoter_id" ref={promoterIdField} placeholder="Promoter ID" required />
      <input type="number" name="dj_id" ref={djIdField} placeholder="DJ ID" required />

      <input className='submitButton' type="submit" value="Edit Gig" />
    </form>
  );
}
