import { useState } from 'react';
import './App.css';

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


/*
  * Atividades a mais:
  * - Adicionar dropdown de gênero (masc, fem, outro)
  * - A palavra "portadora" pode ser modificada a partir do gênero
  * - Adicionar uma data no documento
  * - Validar campos (não aceitar texto no cpf e não aceitar campo vazio)
*/

function App() {
  let nomeTemp = '';

  const [nome, setNome] = useState('');

  const handleClick = () => {
    setNome(nomeTemp);
  }

  const handleChange = (evento) => {
    nomeTemp = evento.target.value;
  }

  return (
    <div className="App">
      <div>
        <div>
          <label htmlFor="nome">Nome: </label>
          <input
            type="text"
            name="nome"
            placeholder="Insira seu nome"
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="cpf">CPF: </label>
          <input type="text" name="cpf" placeholder="Insira seu cpf" />
        </div>
        <button onClick={handleClick}>
          Gerar documento
        </button>
      </div>

      <p>Eu, {nome}, portadora do CPF _______, aceito os termos deste contrato.</p>
    </div>
  );
}

export default App;
