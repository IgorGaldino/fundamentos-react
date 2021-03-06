import "./styles/App.css";

import React from "react";

import Card from "./components/layout/Card";

import Primeiro from "./components/basic/Primeiro";
import ComParametro from "./components/basic/ComParametro";
import Fragmento from "./components/basic/Fragmento";
import Aleatorio from "./components/basic/Aleatorio";
import Familia from "./components/basic/Familia";
import FamiliaMembro from "./components/basic/FamiliaMembro";
import ListaAlunos from "./components/repeticao/ListaAlunos";
import TabelaProdutos from "./components/repeticao/TabelaProdutos";
import ParOuImpar from "./components/condicional/ParOuImpar";
import UsuarioInfo from "./components/condicional/UsuarioInfo";
import DiretaPai from "./components/comunicacao/DiretaPai";
import IndiretaPai from "./components/comunicacao/IndiretaPai";
import Input from "./components/form/Input";
import Contador from "./components/contador/Contador";

const App = () => {
  return (
    <div className="App">
      <h1>Fundamentos React</h1>
      <div className="Cards">
        <Card titulo="#12 - Contador" color="#424242">
          <Contador number={100} />
        </Card>

        <Card titulo="#11 - Componente Controlado (Input)" color="#E45F56">
          <Input />
        </Card>

        <Card titulo="#10 - Comunicação Indireta" color="#8BAD39">
          <IndiretaPai />
        </Card>

        <Card titulo="#09 - Comunicação Direta" color="#59323C">
          <DiretaPai />
        </Card>

        <Card titulo="#08 - Renderização Condicional" color="#982395">
          <ParOuImpar number={17} />
          <UsuarioInfo user={{ name: "Igor Galdino" }} />
        </Card>

        <Card titulo="#07 - Desafio Repetição" color="#3A9AD9">
          <TabelaProdutos />
        </Card>

        <Card titulo="#06 - Repetição" color="#FD4C65">
          <ListaAlunos />
        </Card>

        <Card titulo="#05 - Componentes com filhos" color="#00C8F8">
          <Familia sobrenome="Silva">
            <FamiliaMembro nome="Pedro" />
            <FamiliaMembro nome="Ana" />
            <FamiliaMembro nome="Gustavo" />
          </Familia>
        </Card>

        <Card titulo="#04 - Exemplo de Card" color="#FA6900">
          <Aleatorio min={1} max={60} />
        </Card>

        <Card titulo="#03 - Fragmento" color="#E94C6F">
          <Fragmento />
        </Card>

        <Card titulo="#02 - Com Parâmetro" color="#E8B71A">
          <ComParametro
            titulo="Situação do Aluno"
            aluno="Igor Galdino"
            nota={9.5}
          />
        </Card>

        <Card titulo="#1 - Primeiro Componente" color="#588C73">
          <Primeiro />
        </Card>
      </div>
    </div>
  );
};

export default App;
