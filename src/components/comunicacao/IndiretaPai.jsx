import React, { useState } from "react";
import IndiretaFilho from "./IndiretaFilho";

const IndiretaPai = () => {
  const [name, setName] = useState("Igor");
  const [age, setAge] = useState(0);
  const [isGeek, setGeek] = useState(false);

  const fornecerInformacoes = (nome, idade, isNerd) => {
    setName(nome);
    setAge(idade);
    setGeek(isNerd);
  };

  return (
    <div>
      <div>
        <span>{name} </span>
        <span>
          <strong>{age} </strong>
        </span>
        <span>{isGeek ? "Verdadeiro" : "Falso"}</span>
      </div>
      <IndiretaFilho quandoClicar={fornecerInformacoes} />
    </div>
  );
};

export default IndiretaPai;
