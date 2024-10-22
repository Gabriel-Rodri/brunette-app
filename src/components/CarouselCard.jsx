// src/components/CarouselCard.js
import React, { useState, useEffect } from 'react';
import styles from './CarouselCard.module.css';

const CarouselCard = ({ titulo, precio, imagenes }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Función para pasar a la siguiente imagen
  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imagenes.length);
  };

  // Función para regresar a la imagen anterior
  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? imagenes.length - 1 : prevIndex - 1
    );
  };

  // Cambiar imagen automáticamente cada 4 segundos
  useEffect(() => {
    const intervalId = setInterval(() => {
      nextImage();
    }, 4000); // 4000 ms = 4 segundos

    // Limpiar el intervalo cuando el componente se desmonte
    return () => clearInterval(intervalId);
  }, [imagenes]);

  return (
    <div className={styles.card}>
      <h3>{titulo}</h3>
      <p>{precio}</p>
      <div className={styles.carousel}>
        <button onClick={prevImage} className={styles.carouselButton}>‹</button>
        <img
          src={imagenes[currentImageIndex]}
          alt={titulo}
          className={styles.carouselImage}
        />
        <button onClick={nextImage} className={styles.carouselButton}>›</button>
      </div>
    </div>
  );
};

export default CarouselCard;
