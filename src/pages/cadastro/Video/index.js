import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import Button from '../../../components/Button'
import useForm from '../../../hooks/useForm';
import FormField from '../../../components/FormField/FormField';
import VideosRepository from '../../../repositories/videos';
import useEffect from 'react';

import categoriasRepository from '../../../repositories/categorias';


function CadastroVideo() {
  const history = useHistory();
  const [categorias, setCategorias] = useState([]);
  const categoryTitles = categorias.map(({ titulo }) => titulo);
  const {handleChange, values } = useForm({
   titulo: 'Video Padrão',
   url: 'https://www.youtube.com/watch?v=VKmPGmFY7H4&feature=youtu.be',
   categoria: 'Front End',

  });

//  useEffect(() => {
//  categoriasRepository
//  .getAll()
//  .then((categoriasFromServer) => {
//        setCategorias(categoriasFromServer);
//      });
// }, []);

  return (
    <PageDefault>
      <h1>Cadastro de Video</h1>

      <form onSubmit={(event) => {
        event.preventDefault();

        alert('Novo vídeo cadastrado com Sucesso!');

        const categoriaId = categorias.find((categoria) => {
          return categoria.titulo === values.categoria;
        });

        VideosRepository.create({
          values: values.titulo,
          values: values.url,
         categoriaId: 1,
        })

        .then(() => {
        console.log('Cadastrou com sucesso!');
        history.push('/');
        });

      }}
      >

      <FormField
          label="Título da categoria"
          type="text"
          name="titulo"
          value={values.titulo}
          onChange={handleChange}
        />
         <FormField
          label="URL"
          type="text"
          name="url"
          value={values.url}
          onChange={handleChange}
        />
         <FormField
          label="Categoria"
          type="datalist"
          name="categoria"
          value={values.categoria}
          onChange={handleChange}
          suggestions={categoryTitles}
        />

        <Button type="submit">
          Cadastrar
        </Button>

      </form>

     <Link to="/cadastro/categoria">
     <Button>Cadastrar Categoria</Button>
      </Link>
    </PageDefault>
  )
}

export default CadastroVideo; 
