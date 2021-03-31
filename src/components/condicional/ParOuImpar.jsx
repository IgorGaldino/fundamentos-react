import React from "react";

const ParOuImpar = (props) => {
  const { number } = props;

  return <div>{number % 2 === 0 ? <span>Par</span> : <span>Ímpar</span>}</div>;
};

export default ParOuImpar;
