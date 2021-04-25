import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp, faArrowDown } from "@fortawesome/free-solid-svg-icons";

class PrevisaoCard extends React.Component {
  constructor(props) {
    super();

    this.props = props;
    this.state = {
      destaque: false,
      aqi: null,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    const apiKey = "a8868b8ed509c59de081619871a3a53e";

    const { lat, lon } = this.props.dadoPrevisao.coordenadas;

    fetch(
      `http://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${apiKey}`
    )
      .then((response) => response.json())
      .then((data) => {
        this.setState(() => {
          return {
            aqi: data.list[0].main.aqi,
          };
        });
      });
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
    const { destaque, aqi } = this.state;

    return (
      <>
        {aqi >= 4 && <p>Ar muito ruim</p>}
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
