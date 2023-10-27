import { useRef, useEffect } from "react";

export default function EditGigForm({ gigData, onSubmit }) {
  const gigNameField = useRef(null);
  const descriptionField = useRef(null);
  const dateField = useRef(null);
  const locationField = useRef(null);
  const payField = useRef(null);
  const promoterIdField = useRef(null);
  const djIdField = useRef(null);

  useEffect(() => {
    if (gigData) {
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
      gig_name: gigNameField.current.value,
      description: descriptionField.current.value,
      date: dateField.current.value,
      location: locationField.current.value,
      pay: parseFloat(payField.current.value),
      promoter_id: parseInt(promoterIdField.current.value),
      dj_id: parseInt(djIdField.current.value),
    };

    onSubmit(updatedGig);

    // Clear the form after submission
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
      <input type="text" name="gig_name" ref={gigNameField} placeholder="Gig Name" required />
      <input type="text" name="description" ref={descriptionField} placeholder="Description" required />
      <input type="date" name="date" ref={dateField} placeholder="Date" required />
      <input type="text" name="location" ref={locationField} placeholder="Location" required />
      <input type="number" name="pay" ref={payField} placeholder="Pay" required />
      <input type="number" name="promoter_id" ref={promoterIdField} placeholder="Promoter ID" required />
      <input type="number" name="dj_id" ref={djIdField} placeholder="DJ ID" required />

      <input type="submit" value="Edit Gig" />
    </form>
  );
}
