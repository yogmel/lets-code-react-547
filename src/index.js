import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

/*
  * ReactDOM.render() é um método que injeta um determinado componente (primeiro parâmetro)
  * em um elemento especificado no HTML (segundo parâmetro)
*/

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
