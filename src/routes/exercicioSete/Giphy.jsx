import { gerarNumeroAleatorio, useEffect, useState } from "react";

const Giphy = () => {
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
};

export default Giphy;
