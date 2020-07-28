import React from 'react';
import { FooterBase } from './styles';

function Footer() {
  return (
    <FooterBase>
      <a href="https://github.com/dgsdev">
        <img src="https://fontmeme.com/permalink/200728/7e61772242360ba60113458b31872879.png" alt="Logo Beccaflix"/>
      </a>
      <p>
        Orgulhosamente criado por dgsdev durante a
        {' '}
        <a href="https://www.alura.com.br/">
          Imersão React da Alura
        </a>
      </p>
    </FooterBase>
  );
}

export default Footer;
