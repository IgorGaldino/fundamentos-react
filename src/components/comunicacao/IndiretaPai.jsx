import React from "react";
import IndiretaFilho from "./IndiretaFilho";

const IndiretaPai = () => {
  const fornecerInformacoes = (name, age, isGeek) => {
    console.log(name, age, isGeek);
  };

  return (
    <div>
      Pai
      <IndiretaFilho quandoClicar={fornecerInformacoes} />
    </div>
  );
};

export default IndiretaPai;
