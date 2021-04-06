const Tarefa = (props) => {
  const { tarefa, alternarChecagemTarefa, removerTarefa } = props;

  const handleClick = () => {
    alternarChecagemTarefa(tarefa);
  }

  const handleDeleteButtonClick = () => {
    removerTarefa(tarefa);
  }

  return (
    <div className="tarefa__descricao">
      <p
        className={`tarefa ${tarefa.check === true ? "check" : ""}`}
        onClick={handleClick}
      >{tarefa.descricao}</p>
      <span onClick={handleDeleteButtonClick}>X</span>
    </div>
  );
}

export default Tarefa;
