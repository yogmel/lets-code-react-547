import "./App.css";
import React from "react";
import PrevisaoCard from "./routes/exercicioQuatro";

/*
 * Componente tem como pré-requisito:
 * - Seu nome começa com letra maiúscula
 * - É uma função ou classe
 * - Retorna necessariamente um JSX (Javascript XML)
 * - (opcional) Ele pode receber props, que é um objeto.
 *              As props são públicas e imutáveis.
 * - (opcional) Ele pode ter estados (ou states).
 *              Os estados são privados e mutáveis após a primeira renderização.
 */

// componentes funcionais ou stateLESS components
function App() {
  return (
    <div className="App">
      <PrevisaoCard />
    </div>
  );
}

// componentes classe com estado ou stateFUL components
// class App extends React.Component {
//   constructor(props) {
//     super();

//     this.state = {
//       nome: "mell",
//       contador: 0,
//     };
//     this.adicionaUm = this.adicionaUm.bind(this); // bind() atrela um contexto (que é passado como parâmetro) a uma função
//   }

//   adicionaUm() {
//     this.setState((estadoAnterior) => {
//       return {
//         contador: estadoAnterior.contador + 1,
//       };
//     });
//   }

//   render() {
//     return (
//       <div className="App">
//         <button onClick={this.adicionaUm}>Adicionar 1</button>
//         <p>contador: {this.state.contador}</p>
//         <p>nome: {this.state.nome}</p>
//         <p>props: {this.props.nome}</p>
//         <ListaTarefas />
//       </div>
//     );
//   }
// }

export default App;
