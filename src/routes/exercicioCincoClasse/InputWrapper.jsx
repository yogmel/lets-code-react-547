import React from 'react';

class InputWrapper extends React.Component {
  constructor(props) {
    super();

    this.props = props;
  }

  handleKeyDown = (ev) => {
    if (ev.key === "Enter") {
      this.props.onClick();
    }
  }

  render = () => {
    const { mensagemAtual, onChange, onClick } = this.props;
  
    return (
      <div>
        <input
          type="text"
          placeholder="Digite sua mensagem"
          value={mensagemAtual}
          onChange={onChange}
          onKeyDown={this.handleKeyDown}
        />
        <button onClick={onClick}>Adicionar mensagem</button>
      </div>
    );
  }
}

export default InputWrapper;
