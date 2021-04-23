const InputWrapper = (props) => {
  const { handleChange, handleClick, disabled } = props;

  return (
    <div>
      <div>
        <label htmlFor="min">De: </label>
        <input
          type="number"
          name="min"
          defaultValue={0}
          onChange={handleChange}
          placeholder="Mínimo"
          disabled={disabled}
        />
      </div>
      <div>
        <label htmlFor="max">Para: </label>
        <input
          type="number"
          name="max"
          defaultValue={100}
          onChange={handleChange}
          placeholder="Máximo"
          disabled={disabled}
        />
      </div>
      <button onClick={handleClick}>
        {disabled ? "Gerar novamente" : "Gerar número"}
      </button>
    </div>
  );
};

export default InputWrapper;
