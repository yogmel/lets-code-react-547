import React from 'react';
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp, faArrowDown } from "@fortawesome/free-solid-svg-icons";

// const PrevisaoCard = (props) => {
//   const [destaque, setDestaque] = useState(false);

//   const { data, icone, temperatura } = props.dadoPrevisao;

//   const handleClick = () => {
//     setDestaque(!destaque);
//   };

//   return (
//     <>
//       <div className={`card ${destaque === true ? "ativo" : ""}`}>
//         <h3>{data}</h3>
//         <FontAwesomeIcon size="5x" icon={icone} />
//         <div>
//           <FontAwesomeIcon icon={faArrowUp} />
//           <span>{temperatura.max}ºC</span>
//         </div>
//         <div>
//           <FontAwesomeIcon icon={faArrowDown} />
//           <span>{temperatura.min}ºC</span>
//         </div>
//       </div>

//       <button onClick={handleClick}>Destacar card</button>
//     </>
//   );
// };

class PrevisaoCard extends React.Component {
  constructor(props) {
    super();

    this.props = props;
    this.state = {
      destaque: false
    }

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    console.log('this', this);
    this.setState((estadoAnterior) => {
      return {
        destaque: !estadoAnterior.destaque
      };
    });
  }

  render() {
    const { dadoPrevisao } = this.props;
    const { data, icone, temperatura } = dadoPrevisao;
    const { destaque } = this.state;

    return (
      <>
        <div className={`card ${destaque === true ? "ativo" : ""}`}>
          <h3>{data}</h3>
          <FontAwesomeIcon size="5x" icon={icone} />
          <div>
            <FontAwesomeIcon icon={faArrowUp} />
            <span>{temperatura.max}ºC</span>
          </div>
          <div>
            <FontAwesomeIcon icon={faArrowDown} />
            <span>{temperatura.min}ºC</span>
          </div>
        </div>

        <button onClick={this.handleClick}>Destacar card</button>
      </>
    )
  }
}


export default PrevisaoCard;
