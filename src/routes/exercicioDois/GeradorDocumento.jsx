import { useState } from 'react';

/*
  * Atividades a mais:
  * - Adicionar dropdown de gênero (masc, fem, outro)
  * - A palavra "portadora" pode ser modificada a partir do gênero
  * - Adicionar uma data no documento
  * - Validar campos (não aceitar texto no cpf e não aceitar campo vazio)
*/

const GeradorDocumento = () => {
	const [pessoaAtual, setPessoaAtual] = useState({
    nome: '',
    cpf: ''
  });
  const [pessoa, setPessoa] = useState({
    nome: '',
    cpf: ''
  });

  const handleClick = () => setPessoa(pessoaAtual);

  const handleChange = (evento) => {
    const propriedade = evento.target.name;
    setPessoaAtual({
      ...pessoaAtual,
      [propriedade]: evento.target.value
    });
  }

  return (
    <>
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
          <input
            type="text"
            name="cpf"
            placeholder="Insira seu cpf"
            onChange={handleChange}
          />
        </div>
        <button onClick={handleClick}>Gerar documento</button>
      </div>

      <p>
        Eu, {pessoa.nome}, portadora do CPF {pessoa.cpf}, aceito os termos deste
        contrato.
      </p>
    </>
  );
};

export default GeradorDocumento;
