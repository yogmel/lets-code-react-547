import { useEffect, useState } from "react";
import PrevisaoCard from "./PrevisaoCard";
import dadosPrevisao from "./../../data";
import "./PrevisaoCard.css";

const PrevisaoDoTempoContainer = () => {
  const [contador, setContador] = useState(0);
  const [contadorMultiplicado, setContadorMultiplicado] = useState(1);

  // quando o componente é montado
  // toda vez que ele for atualizado
  useEffect(() => {
    console.log("aloka");
  });

  // quando o componente é montado
  // executa uma função ao ser desmontado
  useEffect(() => {
    console.log("fui criado");
    return () => {
      console.log("desmontado");
    };
  }, []);

  // aciona somente quando a dependência é modificada
  useEffect(() => {
    console.log("contador modificado");
  }, [contador]);

  const adicionarNum = () => {
    setContador(contador + 1);
  };

  const multiplicarNum = () => {
    setContadorMultiplicado(contadorMultiplicado * 2);
  };

  return (
    <div>
      <button onClick={adicionarNum}>add 1</button>
      <p>{contador}</p>

      <button onClick={multiplicarNum}>multiplica por 2</button>
      <p>{contadorMultiplicado}</p>
      {dadosPrevisao.map((previsao, index) => (
        <PrevisaoCard key={index} dadoPrevisao={previsao} />
      ))}
    </div>
  );
};

export default PrevisaoDoTempoContainer;
