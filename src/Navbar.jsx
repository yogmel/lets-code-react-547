import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <Link to="/home">Home</Link> |<Link to="/exercicioUm">Exercicio Um</Link>{" "}
      |<Link to="/exercicioDois/Ricardo/12345">Exercicio Dois</Link> |
      <Link to="/exercicioTres">Exercicio Três</Link> |
      <Link to="/exercicioQuatro">Exercicio Quatro</Link> |
      <Link to="/exercicioCinco">Exercicio Cinco</Link> |
      <Link to="/exercicioSeis">Exercicio Seis</Link> |
      <Link to="/exercicioSete">Exercicio Sete</Link> |
    </>
  );
};

export default Navbar;
