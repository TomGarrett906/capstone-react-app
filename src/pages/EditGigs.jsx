
import Body from "../components/Body"
import GigCRUD from "../components/GigCRUD"

export default function EditGigs({edit}) {
  return (
    <Body sidebar={true}>
      <GigCRUD edit={edit}/>
    </Body>
  )
}
