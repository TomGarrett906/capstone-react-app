
import Body from "../components/Body"
import GigForm from "../components/forms/GigForm"
import FormPage from "./FormPage"

export default function AddGig() {
  return (
<>
    <Body sidebar={true}>
        <FormPage>
          <GigForm/>
        </FormPage>
    </Body>
</>
  )
}
