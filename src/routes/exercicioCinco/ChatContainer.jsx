import { useState } from "react";
import MensagensWrapper from "./MensagensWrapper";
import InputWrapper from "./InputWrapper";

const ChatContainer = () => {
  const [mensagens, setMensagens] = useState([]);
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
      <InputWrapper
        mensagemAtual={mensagemAtual}
        onChange={handleChange}
        onClick={handleClick}
      />
      <MensagensWrapper mensagens={mensagens} />
    </div>
  );
};

export default ChatContainer;
