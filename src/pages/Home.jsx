// src/pages/Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import CarouselCard from '../components/CarouselCard';
import Button from '../components/Button';
import styles from './Home.module.css';
import cartshopping from '../component-images/shopping-cart.png'

const Home = () => {
  const productos = [
    {
      id: 1,
      titulo: 'Producto 1',
      precio: '$100',
      imagenes: [
        'https://via.placeholder.com/300x200?text=Producto+1+-+1',
        'https://via.placeholder.com/300x200?text=Producto+1+-+2',
        'https://via.placeholder.com/300x200?text=Producto+1+-+3',
      ]
    },
    {
      id: 2,
      titulo: 'Producto 2',
      precio: '$200',
      imagenes: [
        'https://via.placeholder.com/300x200?text=Producto+2+-+1',
        'https://via.placeholder.com/300x200?text=Producto+2+-+2',
        'https://via.placeholder.com/300x200?text=Producto+2+-+3',
      ]
    },
    {
      id: 3,
      titulo: 'Producto 1',
      precio: '$100',
      imagenes: [
        'https://via.placeholder.com/300x200?text=Producto+1+-+1',
        'https://via.placeholder.com/300x200?text=Producto+1+-+2',
        'https://via.placeholder.com/300x200?text=Producto+1+-+3',
      ]
    },
    {
      id: 4,
      titulo: 'Producto 2',
      precio: '$200',
      imagenes: [
        'https://via.placeholder.com/300x200?text=Producto+2+-+1',
        'https://via.placeholder.com/300x200?text=Producto+2+-+2',
        'https://via.placeholder.com/300x200?text=Producto+2+-+3',
      ]
    },
    {
      id: 5,
      titulo: 'Producto 1',
      precio: '$100',
      imagenes: [
        'https://via.placeholder.com/300x200?text=Producto+1+-+1',
        'https://via.placeholder.com/300x200?text=Producto+1+-+2',
        'https://via.placeholder.com/300x200?text=Producto+1+-+3',
      ]
    },
    {
      id: 6,
      titulo: 'Producto 2',
      precio: '$200',
      imagenes: [
        'https://via.placeholder.com/300x200?text=Producto+2+-+1',
        'https://via.placeholder.com/300x200?text=Producto+2+-+2',
        'https://via.placeholder.com/300x200?text=Producto+2+-+3',
      ]
    }, {
      id: 7,
      titulo: 'Producto 1',
      precio: '$100',
      imagenes: [
        'https://via.placeholder.com/300x200?text=Producto+1+-+1',
        'https://via.placeholder.com/300x200?text=Producto+1+-+2',
        'https://via.placeholder.com/300x200?text=Producto+1+-+3',
      ]
    },
    {
      id: 8,
      titulo: 'Producto 2',
      precio: '$200',
      imagenes: [
        'https://via.placeholder.com/300x200?text=Producto+2+-+1',
        'https://via.placeholder.com/300x200?text=Producto+2+-+2',
        'https://via.placeholder.com/300x200?text=Producto+2+-+3',
      ]
    },
    {
      id: 9,
      titulo: 'Producto 1',
      precio: '$100',
      imagenes: [
        'https://via.placeholder.com/300x200?text=Producto+1+-+1',
        'https://via.placeholder.com/300x200?text=Producto+1+-+2',
        'https://via.placeholder.com/300x200?text=Producto+1+-+3',
      ]
    },
    {
      id: 10,
      titulo: 'Producto 2',
      precio: '$200',
      imagenes: [
        'https://via.placeholder.com/300x200?text=Producto+2+-+1',
        'https://via.placeholder.com/300x200?text=Producto+2+-+2',
        'https://via.placeholder.com/300x200?text=Producto+2+-+3',
      ]
    },
    {
      id: 11,
      titulo: 'Producto 1',
      precio: '$100',
      imagenes: [
        'https://via.placeholder.com/300x200?text=Producto+1+-+1',
        'https://via.placeholder.com/300x200?text=Producto+1+-+2',
        'https://via.placeholder.com/300x200?text=Producto+1+-+3',
      ]
    },
    {
      id: 12,
      titulo: 'Producto 2',
      precio: '$200',
      imagenes: [
        'https://via.placeholder.com/300x200?text=Producto+2+-+1',
        'https://via.placeholder.com/300x200?text=Producto+2+-+2',
        'https://via.placeholder.com/300x200?text=Producto+2+-+3',
      ]
    }, {
      id: 13,
      titulo: 'Producto 1',
      precio: '$100',
      imagenes: [
        'https://via.placeholder.com/300x200?text=Producto+1+-+1',
        'https://via.placeholder.com/300x200?text=Producto+1+-+2',
        'https://via.placeholder.com/300x200?text=Producto+1+-+3',
      ]
    },
    {
      id: 14,
      titulo: 'Producto 2',
      precio: '$200',
      imagenes: [
        'https://via.placeholder.com/300x200?text=Producto+2+-+1',
        'https://via.placeholder.com/300x200?text=Producto+2+-+2',
        'https://via.placeholder.com/300x200?text=Producto+2+-+3',
      ]
    },
    {
      id: 15,
      titulo: 'Producto 1',
      precio: '$100',
      imagenes: [
        'https://via.placeholder.com/300x200?text=Producto+1+-+1',
        'https://via.placeholder.com/300x200?text=Producto+1+-+2',
        'https://via.placeholder.com/300x200?text=Producto+1+-+3',
      ]
    },
    {
      id: 16,
      titulo: 'Producto 2',
      precio: '$200',
      imagenes: [
        'https://via.placeholder.com/300x200?text=Producto+2+-+1',
        'https://via.placeholder.com/300x200?text=Producto+2+-+2',
        'https://via.placeholder.com/300x200?text=Producto+2+-+3',
      ]
    },
    {
      id: 17,
      titulo: 'Producto 1',
      precio: '$100',
      imagenes: [
        'https://via.placeholder.com/300x200?text=Producto+1+-+1',
        'https://via.placeholder.com/300x200?text=Producto+1+-+2',
        'https://via.placeholder.com/300x200?text=Producto+1+-+3',
      ]
    },
    {
      id: 18,
      titulo: 'Producto 2',
      precio: '$200',
      imagenes: [
        'https://via.placeholder.com/300x200?text=Producto+2+-+1',
        'https://via.placeholder.com/300x200?text=Producto+2+-+2',
        'https://via.placeholder.com/300x200?text=Producto+2+-+3',
      ]
    }, {
      id: 19,
      titulo: 'Producto 1',
      precio: '$100',
      imagenes: [
        'https://via.placeholder.com/300x200?text=Producto+1+-+1',
        'https://via.placeholder.com/300x200?text=Producto+1+-+2',
        'https://via.placeholder.com/300x200?text=Producto+1+-+3',
      ]
    },
    {
      id: 20,
      titulo: 'Producto 2',
      precio: '$200',
      imagenes: [
        'https://via.placeholder.com/300x200?text=Producto+2+-+1',
        'https://via.placeholder.com/300x200?text=Producto+2+-+2',
        'https://via.placeholder.com/300x200?text=Producto+2+-+3',
      ]
    },
    {
      id: 21,
      titulo: 'Producto 1',
      precio: '$100',
      imagenes: [
        'https://via.placeholder.com/300x200?text=Producto+1+-+1',
        'https://via.placeholder.com/300x200?text=Producto+1+-+2',
        'https://via.placeholder.com/300x200?text=Producto+1+-+3',
      ]
    },
    {
      id: 22,
      titulo: 'Producto 2',
      precio: '$200',
      imagenes: [
        'https://via.placeholder.com/300x200?text=Producto+2+-+1',
        'https://via.placeholder.com/300x200?text=Producto+2+-+2',
        'https://via.placeholder.com/300x200?text=Producto+2+-+3',
      ]
    },
    {
      id: 23,
      titulo: 'Producto 1',
      precio: '$100',
      imagenes: [
        'https://via.placeholder.com/300x200?text=Producto+1+-+1',
        'https://via.placeholder.com/300x200?text=Producto+1+-+2',
        'https://via.placeholder.com/300x200?text=Producto+1+-+3',
      ]
    },
    {
      id: 24,
      titulo: 'Producto 2',
      precio: '$200',
      imagenes: [
        'https://via.placeholder.com/300x200?text=Producto+2+-+1',
        'https://via.placeholder.com/300x200?text=Producto+2+-+2',
        'https://via.placeholder.com/300x200?text=Producto+2+-+3',
      ]
    },

  ];

  return (
    <div className={styles.homeContainer}>
      {productos.map((producto) => (
        <div className={styles.carouselCard} key={producto.id}>
          <CarouselCard
            titulo={producto.titulo}
            precio={producto.precio}
            imagenes={producto.imagenes}
          />
        </div>
      ))}

      {/* Botón fijo para ir al formulario */}
      <div className={styles.buttonContainer}>
        <Link to="/formulario" className={styles.customOrderButton}>
          Pedido Personalizado
        </Link>
      </div>
      <div>

        <Link to="/formulario" className={styles.cartButton}>
        <img
            src={cartshopping}
            alt="WhatsApp"
            className={styles.cartshopping}
          />
        </Link>
      </div>

      {/* Botón fijo en la esquina inferior derecha */}
      <div className={styles.fixedButton}>
        <Button />
      </div>
    </div>
  );
};

export default Home;
