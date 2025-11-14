import "./App.css";

export const MiBotonDeMarca = (props) => {
  const esPrimario = props.primario || false;
  const colorDeFondo = esPrimario ? "purple" : "gray";
  const colorDeTexto = esPrimario ? "yellow" : "white";
  return (
    <button style={{ backgroundColor: colorDeFondo, color: colorDeTexto }}>
      {props.title}
    </button>
  );
};

export const MiBotonDeMarca2 = ({ title, primario }) => {
  const esPrimario = primario || false;
  const colorDeFondo = esPrimario ? "purple" : "gray";
  const colorDeTexto = esPrimario ? "yellow" : "white";
  return (
    <button style={{ backgroundColor: colorDeFondo, color: colorDeTexto }}>
      {title}
    </button>
  );
};

function App() {
  const botonUno = {
    title: "Botón 1",
    primario: true,
  };
  return (
    <>
      <div>
        <MiBotonDeMarca {...botonUno} />

        <MiBotonDeMarca title={"Subir"} primario={true} />
        <MiBotonDeMarca title={"Enviar correo"} />
        <MiBotonDeMarca2 title={"Botón 2"} />
      </div>
    </>
  );
}

export default App;
