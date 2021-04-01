import React from "react";

const IndiretaFilho = (props) => {
  const { quandoClicar } = props;
  const gerarIdade = () => Math.floor(Math.random() * 20 + 50);
  const gerarNerd = () => Math.random() > 0.5;
  return (
    <div>
      <div>Filho</div>
      <button
        type="button"
        onClick={() => quandoClicar("João", gerarIdade(), gerarNerd())}
      >
        Enviar informações
      </button>
    </div>
  );
};

export default IndiretaFilho;
