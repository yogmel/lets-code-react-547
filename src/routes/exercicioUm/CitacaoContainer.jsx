import { useState } from 'react';
import "./CitacaoContainer.css";

/*
	* Atividades extras:
	* - Mudar a cor de fundo (ou o fundo em geral) a cada mudança de citação
	* - Adicionar estilos na aplicação
*/

const CitacaoContainer = () => {
	let citacaoDois = '';

  const [citacao, setCitacao] = useState(''); // hook

  const handleClick = () => {
    setCitacao(citacaoDois);
  };

  const handleChange = (evento) => {
    citacaoDois = evento.target.value;
  }

  return (
    <>
      <blockquote className="citacao">"{citacao}"</blockquote>
      <div>
        <input
          type="text"
          placeholder="Insira uma nova citação"
          onChange={handleChange}
        />
        <button onClick={handleClick}>Inserir citação</button>
      </div>
    </>
  );
};

export default CitacaoContainer;
