import React from 'react';
import { FooterBase } from './styles';

function Footer() {
  return (
    <FooterBase>
      <a href="https://github.com/dgsdev">
        <img src="https://fontmeme.com/permalink/200728/a4db44de5877739d924353b7d384eaa8.png" alt="Logo Beccaflix" />
      </a>
      <p>
        Criado por
        {' '}
        <a href="https://github.com/dgsdev">dgsdev</a>
        {' '}
        durante a
        {' '}
        <a href="https://www.alura.com.br/">
          Imersão React da Alura
        </a>
      </p>
    </FooterBase>
  );
}

export default Footer;
