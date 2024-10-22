// src/pages/Formulario.js
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import styles from './Formulario.module.css';

const Formulario = () => {
  const { register, handleSubmit } = useForm();
  const [subOptions, setSubOptions] = useState([]);

  // Opciones del select (pedido)
  const pedidos = [
    { id: '1', name: 'Tazas y Jarros', options: ['Tazas blancas', 'Tazas mágicas', 'Tazas con brillos', 'Tazas tornasoladas', 'Tazas esmeriladas', 'Jarros chop esmerilado', 'Jarros chop cerámica', 'Lapiceros cerámica', 'Mate cerámica'] },
    { id: '2', name: 'Remeras', options: ['Blanco talle adulto y niño (mangas largas y cortas)', 'Spum dama', 'Body para bebé (mangas cortas y largas)', 'Gris melange talle adulto y niño'] },
    { id: '3', name: 'Buzos y Camperas Friza', options: ['Buzo canguro blanco adulto y niño', 'Buzo cuello redondo gris melange adulto y niño', 'Buzo canguro gris melange adulto', 'Campera canguro gris melange adulto y niño'] },
    { id: '4', name: 'Cuellitos', options: ['Ketten adulto 27x24', 'Ketten niño 26x22'] },
    { id: '5', name: 'Gorras', options: ['Varios colores niño y adulto', 'Gorra flúor frente blanco', 'Gorra gabardina poliéster con abrojos'] },
    { id: '6', name: 'Mochilas', options: ['Mochila grande (42x30x14)', 'Mochila mediana (38x29x8)', 'Mochila jardín tela', 'Mochila jardín cordura', 'Mochila charol (30x20x8)', 'Mochila glitter (30x20x10)', 'Mochila lentejuela (30x20x8)'] },
    { id: '7', name: 'Bolsos', options: ['Bolso matero fondo negro (33x21x11)', 'Bolso matero con tapa (33x21x11)', 'Bolso material con flores (30x25x8)', 'Bolso deportivo negro (44x25)', 'Botinero chico (31x17x10)', 'Botinero grande (35,5x21x15)'] },
    { id: '8', name: 'Llaveros', options: ['Llavero corazón', 'Llavero casa', 'Llavero camiseta', 'Llavero hueso chico', 'Llavero hueso grande', 'Llavero chupete', 'Llavero pez', 'Llavero eclipse', 'Llavero círculo con ojal', 'Llavero círculo sin ojal', 'Llavero cuadrado con ojal', 'Llavero cuadrado sin ojal', 'Llavero rectángulo', 'Credencial vertical'] },
    { id: '9', name: 'Plásticos y Accesorios', options: ['Taza blanca apilable', 'Taza blanca con asa corazón', 'Jarro térmico (varios colores)', 'Jarro chopp plástico', 'Yerbera y azucarera con cuchara', 'Lapicero plástico'] },
    { id: '10', name: 'Polymer', options: ['Taza blanca', 'Taza línea F01', 'Vaso recto/porta lápices', 'Jarro térmico polymer', 'Jarro chopp polymer', 'Jarro con pico bebé', 'Jarro bebé forma animal', 'Termo con tapa', 'Mate polymer blanca', 'Azucarera y yerbera con pico vertedor', 'Vaso café'] },
    { id: '11', name: 'Artículos Textil', options: ['Almohadón con relleno 27x37', 'Almohadón con relleno 35x35', 'Funda smartphone simil neopreno', 'Neceser', 'Funda de asado con tabla', 'Baberos', 'Delantal blanco', 'Delantal negro', 'Delantal Argentina', 'Manopla con agarradera', 'Antifaz', 'Bolsa palanca auto', 'Pizarra tela sublimable', 'Billetera glitter', 'Pantuflas corderito', 'Lunchera térmica grande', 'Cartuchera simil neopreno', 'Porta cosméticos doble cierre', 'Set jardín bies color', 'Set jardín sin bies', 'Banda para jura de bandera', 'Llavero cinta', 'Canilleras infantil', 'Canilleras junior', 'Canilleras adulto'] },
    { id: '12', name: 'Cartón', options: ['Agenda docente A5', 'Agenda perpetua tapa dura A5', 'Cuaderno rayado A5', 'Anotador liso', 'Anotador liso plateado', 'Agenda pediátrica A5', 'Rompecabezas (4, 8, 35 piezas)'] }
];


  const handlePedidoChange = (event) => {
    const selectedPedido = pedidos.find(p => p.id === event.target.value);
    setSubOptions(selectedPedido ? selectedPedido.options : []);
  };

  const onSubmit = (data) => {
    // Preparar mensaje para enviar por WhatsApp
    const message = `Hola! soy ${data.nombreApellido}\ncategoria: ${data.pedido}\ntipo: ${data.subPedido}\n Descripción: ${data.descripcion}`;
    
    // Enviar datos a WhatsApp usando un enlace
    const whatsappLink = `https://api.whatsapp.com/send?phone=5493408400020&text=${encodeURIComponent(message)}`;
    window.open(whatsappLink, '_blank');
  };

  return (
    <div className={styles.formContainer}>
      <h2>Formulario de Pedido</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Nombre y Apellido */}
        <div className={styles.formGroup}>
          <label>Nombre y Apellido:</label>
          <input
            type="text"
            {...register('nombreApellido', { required: true })}
            placeholder="Ingresa tu nombre y apellido"
          />
        </div>

        {/* Pedido */}
        <div className={styles.formGroup}>
          <label>Categoría:</label>
          <select {...register('pedido')} onChange={handlePedidoChange}>
            <option value="">Selecciona una categoría</option>
            {pedidos.map((pedido) => (
              <option key={pedido.id} value={pedido.id}>
                {pedido.name}
              </option>
            ))}
          </select>
        </div>

        {/* Sub-Pedido (dependiente del select anterior) */}
        {subOptions.length > 0 && (
          <div className={styles.formGroup}>
            <label>Tipo:</label>
            <select {...register('subPedido')}>
            <option value="">Selecciona un tipo</option>
              {subOptions.map((option, index) => (
                <option key={index} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
        )}

        {/* Descripción */}
        <div className={styles.formGroup}>
          <label>Descripción:</label>
          <textarea
            {...register('descripcion')}
            placeholder="Describe lo mas detalladamente la idea del pedido"
          />
        </div>

        {/* Submit */}
        <button type="submit" className={styles.submitButton}>Enviar</button>
      </form>
    </div>
  );
};

export default Formulario;

//5493408400020