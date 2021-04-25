import { Route, Switch } from "react-router";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Navbar from "./Navbar";
import {
  ChatContainer,
  GeradorDocumento,
  PrevisaoDoTempoContainer,
  ListaTarefas,
  NumAleatorio,
  Giphy,
  CitacaoContainer,
} from "./routes";

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
    <div>
      <BrowserRouter>
        <p>Nossa galera de exercicios</p>
        <Navbar />
        <Switch>
          <Route path="/exercicioUm">
            <CitacaoContainer />
          </Route>
          <Route path="/exercicioDois/:nome/:cpf">
            <GeradorDocumento />
          </Route>
          <Route path="/exercicioTres">
            <NumAleatorio />
          </Route>
          <Route path="/exercicioQuatro">
            <PrevisaoDoTempoContainer />
          </Route>
          <Route path="/exercicioCinco">
            <ChatContainer />
          </Route>
          <Route path="/exercicioSeis">
            <ListaTarefas />
          </Route>
          <Route path="/exercicioSete">
            <Giphy />
          </Route>
          <Route exact={true} path="/">
            Home dos exercicios!!
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
