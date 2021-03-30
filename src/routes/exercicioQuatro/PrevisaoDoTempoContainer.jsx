import PrevisaoCard from "./PrevisaoCard";
import dadosPrevisao from './../../data';
import "./PrevisaoCard.css";

const PrevisaoDoTempoContainer = () => {
	return (
    <div>
      {dadosPrevisao.map(
        (previsao, index) => <PrevisaoCard key={index} dadoPrevisao={previsao} />
      )}
    </div>
  );
};

export default PrevisaoDoTempoContainer;
