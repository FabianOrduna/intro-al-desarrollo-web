import { use, useState, useEffect } from "react";
import "./App.css";

const Persona = ({
  id,
  nombre,
  apellido_paterno,
  apellido_materno,
  fecha_nacimiento,
}) => {
  return (
    <div id={id}>
      <h2>
        {nombre} {apellido_paterno} {apellido_materno}
      </h2>
      <p>{fecha_nacimiento}</p>
    </div>
  );
};

function App() {
  const [personas, setPersonas] = useState([]);
  const [contador, setContador] = useState(0);

  useEffect(() => {
    fetch("https://intro-al-desarrollo-web.onrender.com/personas")
      .then((response) => response.json())
      .then((data) => setPersonas(data.users));
  }, []);

  useEffect(() => {
    console.log("El contador ha cambiado:", contador);
  }, [contador]);

  return (
    <div>
      <h1>Personas</h1>
      {personas.map((persona) => (
        <Persona key={persona.id} {...persona} />
      ))}
      <button onClick={() => setContador((prev) => prev + 1)}>
        Incrementa
      </button>
    </div>
  );
}

export default App;
