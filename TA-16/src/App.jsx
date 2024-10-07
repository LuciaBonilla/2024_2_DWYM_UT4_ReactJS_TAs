import './App.css'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'

function Home() {
  return (
    <>
      <h1>¡Bienvenido!</h1>
      <h2>Home</h2>
    </>
  );
}

function About() {
  return (
    <>
      <h1>Sobre nosotros</h1>
      <h2>About</h2>
    </>
  );
}

function Contact() {
  return (
    <>
      <h1>Contacto</h1>
      <h2>Contact</h2>
    </>
  );
}

function App() {
  return (
    <Router>
      {/* Navegación */}
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>

      {/* Definición de rutas */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  )
}

export default App
