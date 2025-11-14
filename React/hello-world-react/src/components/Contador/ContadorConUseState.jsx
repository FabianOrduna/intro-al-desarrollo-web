import { useState } from "react";

const ContadorConUseState = () => {
  const [contador, setContador] = useState(0);

  return (
    <div>
      <p>Valor actual del contador: {contador}</p>
      <button onClick={() => setContador((anterior) => anterior + 1)}>
        Incrementa +1
      </button>
    </div>
  );
};

export default ContadorConUseState;
