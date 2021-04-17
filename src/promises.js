const soma = (a, b) => {
  return new Promise((resolve, reject) => {
    try {
      if (a < 0 || b < 0) {
        throw new Error("ACEITO SÓ NUMEROS MAIORES QUE 0");
      }
      setTimeout(() => {
        resolve(a + b);
      }, 2000);
    } catch (err) {
      reject(`err: ${err}`);
    }
  });
};

soma(1, 1)
  .then((resultadoSoma) => {
    return soma(resultadoSoma, 1);
  })
  .then((resultadoSoma) => {
    return soma(resultadoSoma, 1);
  })
  .then((resultadoSoma) => {
    console.log("resultadoSoma", resultadoSoma);
  })
  .catch((err) => {
    console.log("CATCH ERR", err);
  });

const calculaSoma = async () => {
  const somaUm = await soma(1, 1);
  const somaDois = await soma(somaUm, 1);
  const somaTres = await soma(somaDois, 1);
};
