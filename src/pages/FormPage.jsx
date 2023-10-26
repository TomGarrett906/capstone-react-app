
import Body from "../components/Body";

export default function FormPage(props) {
  return (
    <Body sidebar={false}>
      {props.children}
    </Body>
  );
}