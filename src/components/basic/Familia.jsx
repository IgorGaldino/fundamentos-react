import React, { cloneElement } from "react";

const Familia = (props) => {
  const { children, sobrenome } = props;
  return (
    <div>
      {React.Children.map(children, (child) => {
        return cloneElement(child, props);
      })}
    </div>
  );
};

export default Familia;
