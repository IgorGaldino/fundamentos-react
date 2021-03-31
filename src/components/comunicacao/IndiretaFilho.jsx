import React from "react";

const IndiretaFilho = (props) => {
  const { quandoClicar } = props;
  return (
    <div>
      <div>Filho</div>
      <button type="button" onClick={() => quandoClicar("João", 53, true)}>
        Enviar informações
      </button>
    </div>
  );
};

export default IndiretaFilho;
