import React from "react";
import If, { Else } from "./If";

const UsuarioInfo = (props) => {
  const { user } = props;
  return (
    <div>
      <If test={user && user.name}>
        Seja bem vindo <strong>{user.name}</strong>!
        <Else>
          Seja bem vindo <strong>amigão</strong>!
        </Else>
      </If>
    </div>
  );
};

export default UsuarioInfo;
