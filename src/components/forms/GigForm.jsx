import { useRef } from "react";

export default function GigForm() {
  const gigField = useRef(null);

  async function makeGig(e) {
    e.preventDefault();
    const res = await fetch('http://127.0.0.1:5000/gig/', {
      method: "POST",
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        body: gigField.current.value
      })
    });
    if (res.ok) {
      const data = res.json();
      console.log(data);
    } else {
      console.log('bad request');
    }
  }

  return (
    <form onSubmit={makeGig}>
      <input type="text" name='gig' ref={gigField} placeholder="What's the gig?" required />
      <input type="submit" value='Gig' />
    </form>
  );
}
