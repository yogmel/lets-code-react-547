import { useState } from "react";

const ChatContainer = () => {
  const [mensagens, setMensagens] = useState([
    "mensagem1",
    "mensagem2",
    "mensagem3",
  ]);
  const [mensagemAtual, setMensagemAtual] = useState("");

  const handleChange = (evento) => {
    setMensagemAtual(evento.target.value);
  };

  const handleClick = () => {
    setMensagens([...mensagens, mensagemAtual]);
    setMensagemAtual("");
  };

  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="Digite sua mensagem"
          value={mensagemAtual}
          onChange={handleChange}
        />
        <button onClick={handleClick}>Adicionar mensagem</button>
      </div>

      <div className="caixa-mensagens">
        {mensagens.map((mensagem, index) => {
          return <p key={index}>{mensagem}</p>;
        })}
      </div>
    </div>
  );
};

export default ChatContainer;
