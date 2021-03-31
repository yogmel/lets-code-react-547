const InputWrapper = (props) => {
  const { mensagemAtual, onChange, onClick } = props;

  const handleKeyDown = (ev) => {
    if (ev.key === "Enter") {
      onClick();
    }
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Digite sua mensagem"
        value={mensagemAtual}
        onChange={onChange}
        onKeyDown={handleKeyDown}
      />
      <button onClick={onClick}>Adicionar mensagem</button>
    </div>
  );
}

export default InputWrapper;
