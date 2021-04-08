import './MensagensWrapper.css';
import React from 'react';

class MensagensWrapper extends React.Component {
  constructor(props) {
    super();

    this.props = props;
  }

  render = () => {
    return (
      <div className="caixa-mensagens">
        {this.props.mensagens.map((mensagem, index) => {
          return <p key={index}>{mensagem}</p>;
        })}
      </div>
    );
  }
}


export default MensagensWrapper;
