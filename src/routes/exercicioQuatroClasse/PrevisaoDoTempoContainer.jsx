import React from "react";
import PrevisaoCard from "./PrevisaoCard";
import { faSun } from "@fortawesome/free-solid-svg-icons";
import "./PrevisaoCard.css";

class PrevisaoDoTempoContainer extends React.Component {
  constructor() {
    super();

    this.state = {
      dadosPrevisao: [],
    };
  }

  componentDidMount = () => {
    const cidades = [
      "itaquaquecetuba",
      "aracariguama",
      "colatina",
      "nova petropolis",
      "maranhao",
    ];
    const apiKey = "a8868b8ed509c59de081619871a3a53e";

    cidades.forEach((cidade) => {
      const url = `http://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${apiKey}&units=metric&lang=pt`;

      fetch(url)
        .then((response) => response.json())
        // 1. capturar (get) os dados
        .then((data) => {
          // 2. formatar os dados para o meu próprio uso
          const dadosFormatados = this.formatarDadosPrevisao(data);
          // 3. guardar esses dados dentro do state
          this.atualizarDadosPrevisao(dadosFormatados);
        });
    });
  };

  formatarDadosPrevisao = (data) => {
    const { name, weather, main } = data;

    return {
      nome: name,
      descricao: weather[0].description,
      icone: faSun,
      temperatura: {
        min: main.temp_min,
        max: main.temp_max,
      },
    };
  };

  atualizarDadosPrevisao = (data) => {
    this.setState((estadoAnterior) => {
      return {
        dadosPrevisao: [...estadoAnterior.dadosPrevisao, data],
      };
    });
  };

  render = () => {
    return (
      <div>
        {this.state.dadosPrevisao.map((previsao, index) => (
          <PrevisaoCard key={index} dadoPrevisao={previsao} />
        ))}
      </div>
    );
  };
}

export default PrevisaoDoTempoContainer;
