import { Link, NavLink, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';

function App() {

  return (
    <>
      <h2>Navbar</h2>

      <ul>
        <li><NavLink to="/home">Home</NavLink></li>
        <li><NavLink to="/contact" replace>Contact</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
      </ul>

      <main>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
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