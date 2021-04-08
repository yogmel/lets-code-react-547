import MensagensWrapper from "./MensagensWrapper";
import InputWrapper from "./InputWrapper";
import React from 'react';

class ChatContainer extends React.Component {
  constructor() {
    super();
    
    this.state = {
      mensagens: [],
      mensagemAtual: ''
    };
  }

  handleChange = (evento) => {
    this.setState(() => ({ mensagemAtual: evento.target.value }));
  }

  handleClick = () => {
    this.setState((prevState) => {
      return {
        mensagens: [...prevState.mensagens, prevState.mensagemAtual],
        mensagemAtual: ""
      }
    });
  }

  render = () => {
    return (
      <div>
        <InputWrapper
          mensagemAtual={this.state.mensagemAtual}
          onChange={this.handleChange}
          onClick={this.handleClick}
        />
        <MensagensWrapper mensagens={this.state.mensagens} />
      </div>
    );
  }
}


export default ChatContainer;
