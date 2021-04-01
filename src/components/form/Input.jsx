import "../../styles/form/Input.css";
import React, { useState } from "react";

const Input = (props) => {
  const [valor, setValor] = useState("Inicial");
  return (
    <div className="Input">
      <h2>{valor}</h2>
      <input
        type="text"
        value={valor}
        onChange={(e) => setValor(e.target.value)}
      />
      <input type="text" value={valor} readOnly />
      <input type="text" value={undefined} />
    </div>
  );
};

export default Input;
