import './App.css'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'

import ProductStore from './ProductStore.jsx';

function Home() {
  return (
    <h1>¡Bienvenidos!</h1>
  )
}

function App() {
  return (
    <Router>
      {/* Búsqueda del producto */}
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/product">Lista de productos</Link></li>
        </ul>
      </nav>

      {/* Definición de rutas */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<ProductStore />} />
        <Route path="/product/:id" element={<ProductStore />} />
      </Routes>
    </Router>
  );
}

export default App