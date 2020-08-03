import { useState } from 'react';

function useForm(valoresIniciais) {
  const [values, setValues] = useState(valoresIniciais);

  function handleChangeInput({ target }) {
    // eslint-disable-next-line no-use-before-define
    valueInput(target.getAttribute('name'), target.value);
  }

  function valueInput(chave, valor) {
    // chave: nome, descrição
    setValues({
      ...values,
      [chave]: valor,
    });

    console.log(values);
  }

  function clearForm() {
    setValues(valoresIniciais);
  }

  return {
    values,
    handleChangeInput,
    clearForm,
  };
}

export default useForm;
