import { useState } from "react";

const UserInputWrapper = (props) => {
  const [num, setNum] = useState();

  const { setUserNumber, checarNumeros } = props;

  const handleUserNumberChange = (evento) => {
    const valor = parseInt(evento.target.value);
    setNum(valor);
  };

  const checarNumHandle = () => {
    console.log("num", num);
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
      />
      <button onClick={checarNumHandle}>Tentar número</button>
    </div>
  );
};

export default UserInputWrapper;
