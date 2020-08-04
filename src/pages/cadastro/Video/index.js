import React from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import Button from '../../../components/Button'

function CadastroVideo() {
  return (
    <PageDefault>
      <h1>Cadastro de Video</h1>

      <Link to="/cadastro/categoria">
      <Button>Cadastrar Categoria</Button>
      </Link>
    </PageDefault>
  )
}

export default CadastroVideo; 
