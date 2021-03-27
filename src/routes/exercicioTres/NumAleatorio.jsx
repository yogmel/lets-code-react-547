import { useState } from 'react';

const NumAleatorio = () => {
	const [intervaloNum, setIntervaloNum] = useState({
    min: 0,
    max: 100
  });
  const [numAleatorio, setNumAleatorio] = useState(0);
  const [msgErro, setMsgErro] = useState('');

  const handleChange = (evento) => {
    const valor = parseInt(evento.target.value);
    const propriedade = evento.target.name;

    setIntervaloNum({
      ...intervaloNum,
      [propriedade]: valor
    });
  }

  const gerarNumAleatorio = () => {
    const { min, max } = intervaloNum;

    if (max > min) {
      const num = Math.floor(Math.random() * (max - min)) + 1 + min;
      setNumAleatorio(num);
      setMsgErro('');
    } else if (max < min) {
      setMsgErro('Número máximo não pode ser menor que o mínimo');
    } else {
      setMsgErro('Números iguais, geração de número aleatório sem sentido');
    }
  }

  const handleClick = () => {
    gerarNumAleatorio();
  }

  return (
    <>
      <h2>Sorteie um número</h2>
      <div>
        <div>
          <label htmlFor="min">De: </label>
          <input
            type="number"
            name="min"
            defaultValue={0}
            onChange={handleChange}
            placeholder="Mínimo"
          />
        </div>
        <div>
          <label htmlFor="max">Para: </label>
          <input
            type="number"
            name="max"
            defaultValue={100}
            onChange={handleChange}
            placeholder="Máximo"
          />
        </div>
        <button onClick={handleClick}>Gerar número</button>
      </div>

      <div>
        <h3>O número gerado é:</h3>
        <p>{numAleatorio}</p>
        <p>{msgErro}</p>
      </div>
    </>
  );
};

export default NumAleatorio;
