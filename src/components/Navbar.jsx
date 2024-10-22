// src/components/Navbar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.navListLeft}>
        <ul>
          <Link to="/">Inicio</Link>
        </ul>
        <ul>
          <Link to="/blibioteca">Biblioteca</Link>
        </ul>
      </div>

      {/* Logo centrado */}
      <div className={styles.logo}>
        <img
          src="../logo_brunette_recort.jpg"
          alt="Brunette Desing"
          width={120}
        />
      </div>

      <div className={styles.navListRight}>
        <ul>
          <Link to="/aboutme">Sobre Nosotros</Link>
        </ul>
      </div>

      {/* Botón de menú para pantallas pequeñas */}
      <div className={styles.burgerMenu} onClick={toggleMenu}>
        ☰
      </div>

      {/* Menú desplegable en pantallas pequeñas */}
      {isMenuOpen && (
        <ul className={styles.dropdownMenu}>
          <ul>
            <Link to="/">Inicio</Link>
          </ul>
          <ul>
            <Link to="/blibioteca">Biblioteca</Link>
          </ul>
          <ul>
            <Link to="/aboutme">Sobre Nosotros</Link>
          </ul>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
