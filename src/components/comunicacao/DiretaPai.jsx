import React from "react";
import DiretaFilho from "./DiretaFilho";

const DiretaPai = () => {
  return (
    <div>
      <DiretaFilho name="João" age={20} isGeek />
      <DiretaFilho name="Marcos" age={17} isGeek={false} />
    </div>
  );
};

export default DiretaPai;
