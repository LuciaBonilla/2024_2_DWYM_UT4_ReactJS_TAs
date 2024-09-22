import "../styles/App.css";
import "./CardTA1.jsx";
import CardTA1 from "./CardTA1.jsx";
import CardTA2 from "./CardTA2.jsx";
import Input from "./Input.jsx";

function App() {
  return (
    <div className="app">
      {/* Mostrando info con props. */}
      <CardTA1
        title="Proyecto Backend"
        description="Desarrollar una API RESTful utilizando Node.js y Express."
        assignedTo="Ana Martínez"
        startDate="2024-09-05"
        endDate="2024-09-15"
      />

      <CardTA1
        title="Diseño UI/UX"
        description="Crear los wireframes y el diseño visual para una aplicación móvil."
        assignedTo="Carlos Rodríguez"
        startDate="2024-09-10"
        endDate="2024-09-20"
      />

      <CardTA1
        title="Base de Datos"
        description="Optimizar consultas y estructura de base de datos MySQL."
        assignedTo="María Gómez"
        startDate="2024-09-12"
        endDate="2024-09-22"
      />

      {/* Mostrando info con prop children. */}
      <CardTA2>
        <h2>Proyecto ReactJS</h2>
        <p><strong>Descripción:</strong> Desarrollar una aplicación web usando React.</p>
        <p><strong>Asignada a:</strong> Juan Pérez</p>
        <p><strong>Fecha de inicio:</strong> 2024-09-01</p>
        <p><strong>Fecha de fin:</strong> 2024-09-10</p>
      </CardTA2>

      <CardTA2>
        <h2>Proyecto NodeJS</h2>
        <p><strong>Descripción:</strong> Desarrollar una API REST usando NodeJS.</p>
        <p><strong>Asignada a:</strong> María Gómez</p>
        <p><strong>Fecha de inicio:</strong> 2024-09-05</p>
        <p><strong>Fecha de fin:</strong> 2024-09-12</p>
      </CardTA2>

      <CardTA2>
        <h2>Proyecto Frontend</h2>
        <p><strong>Descripción:</strong> Diseñar una interfaz de usuario con CSS y HTML.</p>
        <p><strong>Asignada a:</strong> Carlos Ramírez</p>
        <p><strong>Fecha de inicio:</strong> 2024-09-08</p>
        <p><strong>Fecha de fin:</strong> 2024-09-15</p>
      </CardTA2>

      <Input />
    </div>
  );
}

export default App;