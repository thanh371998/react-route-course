import { useParams } from "react-router-dom"

function ContactDetail() {
  const params = useParams();

  console.log('params: ', params)

  return (
    <div>ContactDetail</div>
  )
}

export default ContactDetail