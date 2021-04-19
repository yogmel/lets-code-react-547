import { Route, Switch } from "react-router";
import { BrowserRouter, Link } from "react-router-dom";
import "./App.css";
import ChatContainer from "./routes/exercicioCinco";
import GeradorDocumento from "./routes/exercicioDois";
import PrevisaoDoTempoContainer from "./routes/exercicioQuatro";
import ListaTarefas from "./routes/exercicioSeis";
import Giphy from "./routes/exercicioSete";
import NumAleatorio from "./routes/exercicioTres";
import CitacaoContainer from "./routes/exercicioUm";

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
    <Link to='/home'>Home</Link> | 
    <Link to='/exercicioUm'>Exercicio Um</Link> | 
    <Link to='/exercicioDois/Ricardo/12345'>Exercicio Dois</Link> |
    <Link to='/exercicioTres'>Exercicio Três</Link> |
    <Link to='/exercicioQuatro'>Exercicio Quatro</Link> |
    <Link to='/exercicioCinco'>Exercicio Cinco</Link> |
    <Link to='/exercicioSeis'>Exercicio Seis</Link> |
    <Link to='/exercicioSete'>Exercicio Sete</Link> |
    <Switch>
      <Route path='/exercicioUm'><CitacaoContainer/></Route>
      <Route path='/exercicioDois/:nome/:cpf'><GeradorDocumento/></Route>
      <Route path='/exercicioTres'><NumAleatorio/></Route>
      <Route path='/exercicioQuatro'><PrevisaoDoTempoContainer/></Route>
      <Route path='/exercicioCinco'><ChatContainer/></Route>
      <Route path='/exercicioSeis'><ListaTarefas/></Route>
      <Route path='/exercicioSete'><Giphy/></Route>
      <Route exact={true} path='/'>Home dos exercicios!!</Route>
    </Switch>
  </BrowserRouter>
  </div>);
}

export default App;
