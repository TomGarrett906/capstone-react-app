import Stack from "react-bootstrap/Stack"
import Sidebar from "./Sidebar"


export default function Body({ children, sidebar }) {
  return (
    <Stack direction="horizontal">
    {sidebar && <Sidebar />}
    { children }
  </Stack>
  )
}

