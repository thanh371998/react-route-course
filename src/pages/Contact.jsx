import { Outlet, Link } from "react-router-dom"

function Contact() {
  return (
   <>
      <div>Contact</div>

      <ul>
        <li>
          <Link to="13">Contact Detail</Link>
        </li>
        <li>
          <Link to="news">Contact News</Link>
        </li>
      </ul>


      <Outlet />
   </>
  )
}

export default Contact