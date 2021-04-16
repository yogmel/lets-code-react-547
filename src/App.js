import "./App.css";
import React, { useEffect, useState } from "react";
import { gerarNumeroAleatorio } from "./utils";

/*
 * Componente tem como pré-requisito:
 * - Seu nome começa com letra maiúscula
 * - É uma função ou classe
 * - Retorna necessariamente um JSX (Javascript XML)
 * - (opcional) Ele pode receber props, que é um objeto.
 *              As props são públicas e imutáveis.
 * - (opcional) Ele pode ter estados (ou states).
 *              Os estados são privados e mutáveis após a primeira renderização.
 */

// componentes funcionais ou stateLESS components
function App() {
  const [imageUrl, setImageUrl] = useState("");
  const [gifs, setGifs] = useState([]);
  const [index, setIndex] = useState(0);
  const [loading, setLoading] = useState(false);

  const limit = 20;

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      const api_key = process.env.REACT_APP_GIPHY_API_KEY;
      const url = `https://api.giphy.com/v1/gifs/trending?api_key=${api_key}&limit=${limit}`;
      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          const index = gerarNumeroAleatorio(limit);
          setImageUrl(data.data[index].images.original.url);
          setGifs(data.data);
          setIndex(index);
          setLoading(false);
        });
    }, 2000);
  }, []);

  const atualizarGif = () => {
    let indexAtual = gerarNumeroAleatorio(limit);

    while (indexAtual === index) {
      indexAtual = gerarNumeroAleatorio(limit);
    }

    const url = gifs[indexAtual].images.original.url;
    setImageUrl(url);
  };

  return (
    <div className="App">
      {loading && <p>Carregando...</p>}
      {!loading && (
        <>
          <h2>Seu humor</h2>
          <img src={imageUrl} alt="" />
          <button onClick={atualizarGif}>Gerar novo humor</button>
        </>
      )}
    </div>
  );
}

export default App;
