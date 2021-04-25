import { useState } from "react";
import "./NumAleatorio.css";
import { useParams } from "react-router-dom";

const NumAleatorio = () => {
  const params = useParams();

  const [intervaloNum, setIntervaloNum] = useState({
    min: params.min || 0,
    max: params.max || 100,
  });
  const [numAleatorio, setNumAleatorio] = useState(null);
  const [numTentativa, setNumTentativa] = useState(null);
  const [msgErro, setMsgErro] = useState("");
  const [feedback, setFeedback] = useState("");

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
    gerarNumAleatorio();
  };

  const setarTentativa = (evento) => {
    setNumTentativa(evento.target.value);
  };

  const gerarFeedback = () => {
    const feedback = setarFeedback();
    setFeedback(feedback);
  };

  const setarFeedback = () => {
    if (numAleatorio > numTentativa) {
      return "Seu número é menor do que o sorteado";
    } else if (numAleatorio < numTentativa) {
      return "Seu número é maior do que o sorteado";
    } else {
      return "Parabéns! Você acertou! O número é " + numTentativa;
    }
  };

  return (
    <div className="num-container">
      <h2>Sorteie um número</h2>
      <div>
        <div>
          <label htmlFor="min">De: </label>
          <input
            type="number"
            name="min"
            value={intervaloNum.min}
            onChange={handleChange}
            placeholder="Mínimo"
          />
        </div>
        <div>
          <label htmlFor="max">Para: </label>
          <input
            type="number"
            name="max"
            value={intervaloNum.max}
            onChange={handleChange}
            placeholder="Máximo"
          />
        </div>
        <button onClick={handleClick}>Gerar número</button>
      </div>

      <p>{msgErro}</p>

      {numAleatorio && (
        <div>
          <input
            type="number"
            placeholder="Digite sua tentativa"
            onChange={setarTentativa}
          />
          <button onClick={gerarFeedback}>Tentar número</button>
        </div>
      )}

      {numTentativa && <p>{feedback}</p>}
    </div>
  );
};

export default NumAleatorio;
