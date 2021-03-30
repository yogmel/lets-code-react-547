import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp, faArrowDown } from "@fortawesome/free-solid-svg-icons";

const PrevisaoCard = (props) => {
  const [destaque, setDestaque] = useState(false);

  const { data, icone, temperatura } = props.dadoPrevisao;

  const handleClick = () => {
    setDestaque(!destaque);
  };

  return (
    <>
      <div className={`card ${destaque === true ? "ativo" : ""}`}>
        <h3>{data}</h3>
        <FontAwesomeIcon size="5x" icon={icone} />
        <div>
          <FontAwesomeIcon icon={faArrowUp} />
          <span>{temperatura.max}ºC</span>
        </div>
        <div>
          <FontAwesomeIcon icon={faArrowDown} />
          <span>{temperatura.min}ºC</span>
        </div>
      </div>

      <button onClick={handleClick}>Destacar card</button>
    </>
  );
};

export default PrevisaoCard;
