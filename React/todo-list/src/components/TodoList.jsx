import { useEffect, useState } from "react";

// Componente para representar un ítem de la lista
// Creado como funcion con declaración clásica
function ListItem({ id, completado, texto, cambiaValor }) {
  return (
    <li>
      <input
        className="form-check-input"
        type="checkbox"
        checked={completado}
        id={`check-${id}`}
        // Cuando se le da click al elemento, se llama a la función cambiaValor pasada como prop
        // Lo correcto sería usar onChange en lugar de onClick para inputs de tipo checkbox
        onClick={() => cambiaValor()}
      />
      <span>{texto}</span>
    </li>
  );
}

// Componente principal de la lista de tareas
// Creado como función con expresión de función flecha
export const TodoList = () => {
  // Estado para las tareas. Se usa useState para manejar la variable de estado 'tareas'
  // El usar useState permite que se recuerde el valor entre renderizados y que al cambiar el valor
  // se vuelva a renderizar el componente
  const [tareas, setTareas] = useState([
    { id: 1, completado: true, texto: "Aprender HTML" },
    { id: 2, completado: false, texto: "Aprender CSS" },
  ]);

  // Estado para la última hora de cambios
  const [ultimaHoraDeCambios, setUltimaHoraDeCambios] = useState("");

  // Efecto secundario para actualizar la última hora de cambios cuando las tareas cambian
  useEffect(() => {
    const cambio = new Date().toLocaleTimeString();
    setUltimaHoraDeCambios(cambio);
  }, [tareas]);

  // Función para cambiar el estado de una tarea por su ID
  // Lo correcto sería usar un map en lugar de find y filter para evitar mutaciones directas
  const cambiaTareaPorId = (id) => {
    setTareas((arregloPrevio) => {
      let elementoModificado = arregloPrevio.find((item) => item.id === id);
      elementoModificado = {
        ...elementoModificado,
        completado: !elementoModificado.completado,
      };
      const restoDeElementos = arregloPrevio.filter(
        (elemento) => elemento.id !== id
      );
      restoDeElementos.push(elementoModificado);

      return restoDeElementos.sort();
    });
  };

  return (
    <>
      <div>
        <h1>Todo list</h1>
        {tareas.map((tarea) => (
          <ListItem
            key={tarea.id}
            id={tarea.id}
            completado={tarea.completado}
            texto={tarea.texto}
            cambiaValor={() => cambiaTareaPorId(tarea.id)}
          />
        ))}
      </div>
      <div>Ultimo cambio: {ultimaHoraDeCambios}</div>
    </>
  );
};
export default TodoList;
