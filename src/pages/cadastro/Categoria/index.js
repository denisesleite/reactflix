import React, { useState } from 'react';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import { Link } from 'react-router-dom';

function CadastroCategoria() {
  const [categorias, setCategorias] = useState([]);

  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: ''
  }

  const [values, setValues] = useState(valoresIniciais);

  function handleSubmit(e) {
    e.preventDefault();
    setCategorias([
      ...categorias,
      values
    ]);

    setValues(valoresIniciais);
  }

  function handleChangeInput({ target }) {
    valueInput(target.getAttribute('name'), target.value);
  }

  function valueInput(chave, valor) {
    //chave: nome, descrição
    setValues({
      ...values,
      [chave]: valor
    });

    console.log(values);
  }

  return (
    <PageDefault>
      <h1>Cadastro de Categoria: {values.nome} </h1>

      <form onSubmit={handleSubmit}>

        <FormField
          label="Nome: "
          type="text"
          name="nome"
          value={values.nome}
          onChange={handleChangeInput}
        />

        <div>
          <label>
            Descrição:
            <textarea
              type="text"
              name="descricao"
              value={values.descricao}
              onChange={handleChangeInput}
            />
          </label>
        </div>

        <FormField
          label="Cor: "
          type="text"
          name="cor"
          value={values.cor}
          onChange={handleChangeInput}
        />

        <button>
          Cadastrar
        </button>
      </form>

      <ul>
        {categorias.map((categoria, index) => {
          return (
            <li key={index}>{categoria.nome}</li>
          )
        })}
      </ul>

      <Link to="/">
        Ir para Home
      </Link>
    </PageDefault >
  )
}

export default CadastroCategoria;