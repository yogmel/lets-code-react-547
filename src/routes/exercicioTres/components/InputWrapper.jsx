const InputWrapper = (props) => {
  const { handleChange, handleClick } = props;

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
        />
      </div>
      <button onClick={handleClick}>Gerar número</button>
    </div>
  );
};

export default InputWrapper;
