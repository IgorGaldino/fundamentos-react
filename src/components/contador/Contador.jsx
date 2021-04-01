import React, { useState } from "react";

const Contador = (props) => {
  const { number } = props;
  const [num, setNum] = useState(number);
  return (
    <div>
      <h2>Contador</h2>
      <h3>{num}</h3>
      <div>
        <label htmlFor="passoInput">
          Passo:
          <input
            id="passoInput"
            type="number"
            value={num}
            onChange={(e) => {
              setNum(e.target.value);
            }}
          />
        </label>
      </div>
      <button type="button" onClick={() => setNum(num - 1)}>
        +
      </button>
      <button type="button" onClick={() => setNum(num + 1)}>
        -
      </button>
    </div>
  );
};

export default Contador;
