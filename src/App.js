import './App.css';
import { useState } from 'react';

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
  const [tarefas, setTarefas] = useState([
    {
      descricao: 'tarefa 1',
      check: false
    },
    {
      descricao: 'tarefa 2',
      check: true
    }
  ]);
  const [tarefaAtual, setTarefaAtual] = useState({});

  // adicionar tarefa
  const atualizarTarefaAtual = (ev) => {
    setTarefaAtual({
      descricao: ev.target.value,
      check: false
    });
  }

  const adicionarTarefa = () => {
    setTarefas([
      ...tarefas,
      tarefaAtual
    ]);
    setTarefaAtual({
      descricao: ''
    })
  }

  const adicionarTarefaKeyDown = (ev) => {
    if (ev.key === "Enter") {
      adicionarTarefa();
    }
  }

  // checar todas as tarefas
  // deschecar todas as tarefas
  const checarTodasTarefas = () => {
    const tarefasChecadas = tarefas.map(tarefa => (
      {
        descricao: tarefa.descricao,
        check: true
      }
    ));

    setTarefas(tarefasChecadas);
  }

  // remover tarefa
  // remover todas as tarefas

  return (
    <div className="App">
      <section>
        <div className="tarefa__input">
          <input
            onChange={atualizarTarefaAtual}
            onKeyDown={adicionarTarefaKeyDown}
            value={tarefaAtual.descricao}
            type="text"
            placeholder="adicione sua tarefa"
          />
          <button onClick={adicionarTarefa}>Adicionar tarefa</button>
        </div>

        <div className="tarefa__container">
          {tarefas.map((tarefa) => {
            return (
              <div className="tarefa__descricao">
                <p className={`tarefa ${tarefa.check === true ? "check" : ""}`}>{tarefa.descricao}</p>
                <span>X</span>
              </div>
            );
          })}

        </div>

        <div className="tarefa__buttons">
          <button onClick={checarTodasTarefas}>Checar todos</button>
          <button>Remover todos</button>
        </div>
      </section>
    </div>
  );
}

export default App;
