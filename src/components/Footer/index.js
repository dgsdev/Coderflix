import React from 'react';
import styled from 'styled-components';
import {
  FaLinkedinIn, FaInstagram, FaFacebookF, FaGithub,
} from 'react-icons/fa';

import Logo from '../../Assets/img/Logo.png';
import { FooterBase } from './styles';

export default function Footer() {
  return (
    <FooterBase>
      <img src={Logo} alt="" />
      <div className="social">
        <a href="https://github.com/dgsdev" rel="noopener noreferrer" target="_blank"><FaGithub /></a>
        <a href="https://www.linkedin.com/in/dgsdouglaspinheiro/" rel="noopener noreferrer" target="_blank"><FaLinkedinIn /></a>
        <a href="https://www.instagram.com/douglaspramos/" rel="noopener noreferrer" target="_blank"><FaInstagram /></a>
        <a href="https://www.facebook.com/dgspramos" rel="noopener noreferrer" target="_blank"><FaFacebookF /></a>
      </div>
    </FooterBase>
  );
}
