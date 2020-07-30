import React from 'react';
import Logo from '../../assets/img/logo.svg';
import { Link } from 'react-router-dom';
import './style.css';

import Button from '../Button';

function Menu() {
  return (
    <nav className="Menu">
      <Link to="/">
        <img src={Logo} className="Logo" alt="Aluraflix" />
      </Link>

      <Button as={Link} to="/cadastro/video">
        Novo Vídeo
      </Button>
    </nav >
  )
}

export default Menu;