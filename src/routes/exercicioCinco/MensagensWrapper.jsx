import './MensagensWrapper.css';

const MensagensWrapper = (props) => {
  return (
    <div className="caixa-mensagens">
      {props.mensagens.map((mensagem, index) => {
        return <p key={index}>{mensagem}</p>;
      })}
    </div>
  );
}

export default MensagensWrapper;
