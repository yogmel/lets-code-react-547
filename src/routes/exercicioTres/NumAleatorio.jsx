import { useState } from "react";
import { InputWrapper, UserInputWrapper } from "./components";

const NumAleatorio = () => {
  const [intervaloNum, setIntervaloNum] = useState({
    min: 0,
    max: 100,
  });
  const [numAleatorio, setNumAleatorio] = useState();
  const [userNumber, setUserNumber] = useState(0);
  const [msgErro, setMsgErro] = useState("");
  const [feedback, setFeedback] = useState();

  const handleChange = (evento) => {
    const valor = parseInt(evento.target.value);
    const propriedade = evento.target.name;

    setIntervaloNum({
      ...intervaloNum,
      [propriedade]: valor,
    });
  };

  const gerarNumAleatorio = () => {
    const { min, max } = intervaloNum;

    if (max > min) {
      const num = Math.floor(Math.random() * (max - min)) + 1 + min;
      setNumAleatorio(num);
      setMsgErro("");
    } else if (max < min) {
      setMsgErro("Número máximo não pode ser menor que o mínimo");
    } else {
      setMsgErro("Números iguais, geração de número aleatório sem sentido");
    }
  };

  const handleClick = () => {
    if (!numAleatorio) {
      gerarNumAleatorio();
      return;
    }
    setNumAleatorio(null);
  };

  const checarNumeros = (num) => {
    if (num === undefined) {
      setMsgErro("Número indefinido. Gere novamente");
      return;
    }
    if (num > numAleatorio) {
      setFeedback("Seu número é maior que o sorteado");
    } else if (num < numAleatorio) {
      setFeedback("Seu número é menor que o sorteado");
    } else {
      setFeedback("Parabéns! O número sorteado é " + numAleatorio);
    }
  };

  return (
    <>
      <h2>Sorteie um número</h2>
      <InputWrapper
        handleClick={handleClick}
        handleChange={handleChange}
        disabled={!!numAleatorio}
      />

      {msgErro && <p>{msgErro}</p>}

      {!msgErro && numAleatorio && (
        <UserInputWrapper
          setUserNumber={setUserNumber}
          checarNumeros={checarNumeros}
          disabled={userNumber === numAleatorio}
        />
      )}

      {<p>{feedback}</p>}
    </>
  );
};

export default NumAleatorio;
