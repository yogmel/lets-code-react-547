import { useState } from 'react';
import Tarefa from './Tarefa';

/*
  interface Tarefa {
    id: number;
    descricao: string;
    check: boolean;
  }
*/

const ListaTarefas = () => {
  const [id, setId] = useState(0);
  const [tarefas, setTarefas] = useState([]);
  const [tarefaAtual, setTarefaAtual] = useState({});

  // adicionar tarefa
  const atualizarTarefaAtual = (ev) => {
    const descricao = ev.target.value;

    setTarefaAtual({
      id,
      descricao,
      check: false
    });
  }

  const adicionarTarefa = () => {
    /* adiciona uma tarefa nova com a descrição do input */ 
    setTarefas([
      ...tarefas,
      tarefaAtual
    ]);
    /* limpa o input */ 
    setTarefaAtual({
      descricao: ''
    })
    /* incrementa o valor do id */ 
    setId(id + 1);
  }

  const adicionarTarefaKeyDown = (ev) => {
    if (ev.key === "Enter") {
      adicionarTarefa();
    }
  }

  // checar uma tarefa
  const alternarChecagemTarefa = (tarefa) => {
    tarefa.check = !tarefa.check;

    const id = tarefas.findIndex((item) => item.id === tarefa.id);
    
    tarefas[id] = tarefa;
  
    setTarefas([...tarefas]);
  }

  // checar todas as tarefas, se houver pelo menos uma tarefa com check: false // some()
  // deschecar todas as tarefas, somente se TODOS os itens tiverem check: true // every()
  const checarTodasTarefas = () => {
    const todasTarefasFeitas = tarefas.every((tarefa) => tarefa.check === true);

    let tarefasAtualizada = [];

    if (todasTarefasFeitas) {
      tarefasAtualizada = tarefas.map(tarefa => (
        {
          ...tarefa,
          check: false
        }
      ));
    } else {
      tarefasAtualizada = tarefas.map(tarefa => (
        {
          ...tarefa,
          check: true
        }
      ));
    }

    setTarefas(tarefasAtualizada);
  }

  // remover uma tarefa
  const removerTarefa = (tarefa) => {
    const tarefasAtualizada = tarefas.filter(item => item.id !== tarefa.id);

    setTarefas(tarefasAtualizada);
  }

  // remover todas as tarefas
  const removerTodasTarefas = () => {
    setTarefas([]);
  }

  return (
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
          {tarefas.map((tarefa) => (
            <Tarefa
              key={tarefa.id}
              tarefa={tarefa}
              alternarChecagemTarefa={alternarChecagemTarefa}
              removerTarefa={removerTarefa}
            />
          ))}
        </div>

        <div className="tarefa__buttons">
          <button onClick={checarTodasTarefas}>Checar todos</button>
          <button onClick={removerTodasTarefas}>Remover todos</button>
        </div>
      </section>
  );
}

export default ListaTarefas;
