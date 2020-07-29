import React from 'react';
import Logo from '../../assets/img/logo.svg';
import './style.css';

import Button from '../Button';

function Menu() {
  return (
    <nav className="Menu">
      <a href="/">
        <img src={Logo} className="Logo" alt="Aluraflix" />
      </a>

      <Button href="/">
        Novo Vídeo
      </Button>
    </nav >
  )
}

export default Menu;