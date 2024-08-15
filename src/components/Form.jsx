import React, { useState } from 'react';
import Card from './Card';

const Form = () => {

    const [datos, setDatos] = useState({
      nombre: "",
      cancion: "",
    });
  
    const [mensaje, setMensaje] = useState(false);
    const [mostrarCard, setMostrarCard] = useState(false);
  
    const datoNombre = (e) => {
        const nuevoNombre = e.target.value.trim();
        if (nuevoNombre.length < 3 ) {
            setMensaje('El nombre debe tener al menos 3 caracteres y no puede empezar con un espacio.');
            setMostrarCard(false); 
          } else {
            setMensaje('');
          }
      setDatos({ ...datos, nombre: nuevoNombre});
    };
    const datoCancion = (e) => {
        const nuevaCancion = e.target.value;
        if (nuevaCancion.length < 6) {
            setMensaje('La canción debe tener al menos 6 caracteres.');
            setMostrarCard(false); 
          } else {
            setMensaje('');
          }
      setDatos({ ...datos, cancion: nuevaCancion});
    };
  
    const validarFormulario = (e) => {
        e.preventDefault();
        if (datos.nombre.length < 3 || datos.nombre.startsWith(' ') || datos.cancion.length < 6) {
            setMensaje('Por favor chequea que la información sea correcta');
            setMostrarCard(false);
          } else {
            setMensaje(''); 
            setMostrarCard(true); 
          }
      };
  
    return (
      <div>
      <form onSubmit={validarFormulario}>
        <label>Nombre: </label>
        <input type="text" value={datos.nombre} onChange={datoNombre} />
        <br />
        <label>Cancion: </label>
        <input type="text" value={datos.cancion} onChange={datoCancion} />
        <br />
        <button type='submit'>Enviar</button>
      </form>
      {mensaje && <p style={{ color: 'red' }}>{mensaje}</p>}
      {mostrarCard && <Card nombre={datos.nombre} cancion={datos.cancion}/>}
    </div>
    )
}

export default Form