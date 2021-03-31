import React from "react";

const DiretaFilho = (props) => {
  const { name, age, isGeek } = props;
  return (
    <div>
      <span>{name} </span>
      <span>
        <strong>{age} </strong>
      </span>
      <span>{isGeek ? "Verdadeiro" : "Falso"}!</span>
    </div>
  );
};

export default DiretaFilho;
