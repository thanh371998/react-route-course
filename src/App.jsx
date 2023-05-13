import { Link, NavLink, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import ContactDetail from './pages/ContactDetail';

function App() {

  return (
    <>
      <h2>Navbar</h2>

      <ul>
        <li>
          <NavLink 
            to="/home" 
            className={value => {
              return value.isActive ? "selected" : ""
            }}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/about" 
            className={value => {
              return value.isActive ? "selected" : ""
            }}
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/contact" 
            className={value => {
              return value.isActive ? "selected" : ""
            }}
          >
            Contact
          </NavLink>
        </li>
      </ul>

      <main>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />}>
            <Route path=":id" element={<ContactDetail />} />
            <Route path="news" element={<div>contact new</div>} />
          </Route>
          {/* <Route path="/contact/:id" element={<ContactDetail />} />
          <Route path="/contact/news" element={<div>contact new</div>} /> */}
        </Routes>
      </main>


    </>
  )
}

export default App


/*
history stack

home -> contact ->

*/