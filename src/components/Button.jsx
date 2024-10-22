import React from 'react';
import styles from './Button.module.css'
import whatsapplogo from '../component-images/whatsapp_image.png'

const WhatsAppButton = () => {
  return (
    <a
      href="https://api.whatsapp.com/send/?phone=5493408400020"
      target="_blank"
      rel="noopener noreferrer"
      className={styles.whatsappbutton}
    >
      <img
        src= {whatsapplogo}
        alt="WhatsApp"
        className={styles.whatsapplogo}
      />
    </a>
  );
};

export default WhatsAppButton;
