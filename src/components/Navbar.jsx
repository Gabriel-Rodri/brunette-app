// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.navList}>
        <div className={styles.navListLeft}>
          <li>
            <Link to="/">Inicio</Link>
          </li>
          <li>
            <Link to="/blibioteca">Biblioteca</Link>
          </li>
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
          <li>
            <Link to="/aboutme">Sobre mí</Link>
          </li>
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;
