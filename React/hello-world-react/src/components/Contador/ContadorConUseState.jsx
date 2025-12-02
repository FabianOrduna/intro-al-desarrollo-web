import { useState } from "react";

const ContadorConUseState = () => {
  const [contador, setContador] = useState(0);

  return (
    <div>
      <p>Valor actual del contador: {contador}</p>
      <button
        onClick={() => {
          setContador(contador + 1);
          setContador(contador + 1);
          setContador(contador + 1);
        }}
      >
        Sumar 3 (versión insegura)
      </button>
      <button onClick={() => setContador(contador + 1)}>+1</button>
      <button onClick={() => setContador(contador + 5)}>+5</button>
      <button onClick={() => setContador(contador + 10)}>+10</button>
      <button onClick={() => setContador((anterior) => anterior + 1)}>
        Incrementa +1
      </button>
    </div>
  );
};

export default ContadorConUseState;
