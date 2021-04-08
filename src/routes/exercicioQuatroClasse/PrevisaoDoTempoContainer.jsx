import React from 'react';
import PrevisaoCard from "./PrevisaoCard";
import dadosPrevisao from './../../data';
import "./PrevisaoCard.css";

class PrevisaoDoTempoContainer extends React.Component {
  render = () => {
    return (
      <div>
        {dadosPrevisao.map(
          (previsao, index) => <PrevisaoCard key={index} dadoPrevisao={previsao} />
        )}
      </div>
    )
  }
}

export default PrevisaoDoTempoContainer;
