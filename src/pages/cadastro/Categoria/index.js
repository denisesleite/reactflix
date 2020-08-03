/* eslint-disable no-use-before-define */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import useForm from '../../../hooks/useForm';

function CadastroCategoria() {
  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '',
  };

  const [categorias, setCategorias] = useState([]);
  const { values, handleChangeInput, clearForm } = useForm(valoresIniciais);

  function handleSubmit(e) {
    e.preventDefault();
    setCategorias([
      ...categorias,
      values,
    ]);

    clearForm();
  }

  useEffect(() => {
    setTimeout(() => {
      if (window.location.href.includes('localhost')) {
        const URL = 'http://localhost:8080/categorias';
        fetch(URL)
          .then(async (res) => {
            if (res.ok) {
              const resposta = await res.json();
              setCategorias(resposta);
              return;
            }
            throw new Error('Não foi possível pegar os dados');
          });
      }
    }, 4000);
  }, []);

  return (
    <PageDefault>
      <h1>
        Cadastro de Categoria:
        {values.nome}
      </h1>

      <form onSubmit={handleSubmit}>

        <FormField
          label="Nome: "
          type="text"
          name="nome"
          value={values.nome}
          onChange={handleChangeInput}
        />

        <FormField
          label="Descrição: "
          type="textarea"
          name="descricao"
          value={values.descricao}
          onChange={handleChangeInput}
        />

        <FormField
          label="Cor: "
          type="color"
          name="cor"
          value={values.cor}
          onChange={handleChangeInput}
        />

        <Button>
          Cadastrar
        </Button>
      </form>

      {categorias.length === 0 && (
        <div>Loading...</div>
      )}

      <ul>
        {categorias.map((categoria) => (
          <li key={categoria.titulo}>{categoria.titulo}</li>
        ))}
      </ul>

      <Link to="/">
        Ir para Home
      </Link>
    </PageDefault>
  );
}

export default CadastroCategoria;
