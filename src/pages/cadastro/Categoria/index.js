import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField/FormField';
import Button from '../../../components/Button';
import useForm from '../../../hooks/useForm';
import CategoriasRepository from '../../../repositories/categorias';

const CadastroCategoria= () => {
  const history = useHistory();
  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '',
  };

const { handleChange, values, clearForm } = useForm(valoresIniciais);
const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    if (window.location.href.includes('localhost')) {
      const URL_TOP = window.location.hostname.includes('localhost')
        ? 'http://localhost:8080/categorias'
        : 'https://coderflixx.herokuapp.com/categorias';
      fetch(URL_TOP)
        .then(async (respostaDoServer) => {
          if (respostaDoServer.ok) {
            const resposta = await respostaDoServer.json();
            setCategorias(resposta);
            return;
          }
          throw new Error('Não foi possível pegar os dados');
        });
    }
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    CategoriasRepository.create({
      titulo: values.nome,
      description: values.description,
      color: values.color,
    }).then(() => {
      clearForm(valoresIniciais);
      history.push('/');
    });
  };

  return (
    <PageDefault>
      <h1>Cadastro de Categoria:</h1>

      <form onSubmit={handleSubmit}>

        <FormField
          label="Nome da Categoria"
          type="text"
          name="nome"
          onChange={handleChange}
          value={values.nome}
        />

        <FormField
          label="Descrição:"
          type="textarea"
          name="descricao"
          onChange={handleChange}
          value={values.descricao}
        />
        {/* <div>
          <label>
            Descrição:
            <textarea
              type="text"
              value={values.descricao}
              name="descricao"
              onChange={handleChange}
            />
          </label>
        </div> */}

        <FormField
          label="Cor"
          type="color"
          name="cor"
          onChange={handleChange}
          value={values.cor}
        />
        {/* <div>
          <label>
            Cor:
            <input
              type="color"
              value={values.cor}
              name="cor"
              onChange={handleChange}
            />
          </label>
        </div> */}

        <Button type="submit">Cadastrar</Button>
      </form>
      <p />
      <form>
        <Button><Link to="/">Principal</Link></Button>
      </form>
      <p></p>

    </PageDefault>

  );
}

export default CadastroCategoria;
