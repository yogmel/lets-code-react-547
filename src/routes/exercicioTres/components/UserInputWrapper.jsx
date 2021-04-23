import { useState } from "react";

const UserInputWrapper = (props) => {
  const [num, setNum] = useState(0);

  const { setUserNumber, checarNumeros, disabled } = props;

  const handleUserNumberChange = (evento) => {
    const valor = parseInt(evento.target.value);
    setNum(valor);
  };

  const checarNumHandle = () => {
    setUserNumber(num);
    checarNumeros(num);
  };

  return (
    <div>
      <input
        type="number"
        name="userNumber"
        defaultValue={0}
        onChange={handleUserNumberChange}
        placeholder="Sua tentativa aqui"
        disabled={disabled}
      />
      <button onClick={checarNumHandle} disabled={disabled}>
        Tentar número
      </button>
    </div>
  );
};

export default UserInputWrapper;
