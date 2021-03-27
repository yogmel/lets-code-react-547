import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronCircleLeft } from '@fortawesome/free-solid-svg-icons';

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

function App() {
  return (
    <div className="App">
      <FontAwesomeIcon icon={faChevronCircleLeft} />
    </div>
  );
}

export default App;
