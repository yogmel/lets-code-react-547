import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp, faArrowDown } from "@fortawesome/free-solid-svg-icons";

class PrevisaoCard extends React.Component {
  constructor(props) {
    super();

    this.props = props;
    this.state = {
      destaque: false,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState((estadoAnterior) => {
      return {
        destaque: !estadoAnterior.destaque,
      };
    });
  }

  render() {
    const { dadoPrevisao } = this.props;
    const { nome, descricao, icone, temperatura } = dadoPrevisao;
    const { destaque } = this.state;

    return (
      <>
        <div className={`card ${destaque === true ? "ativo" : ""}`}>
          <h3>{nome}</h3>
          <p>{descricao}</p>
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

        <button onClick={this.handleClick}>Destacar card</button>
      </>
    );
  }
}

export default PrevisaoCard;
