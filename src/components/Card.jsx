import React from 'react';

const Card = ({nombre, cancion}) => {
  return (
    <div className="card">
      <h2>Hola      {nombre} !</h2>
      <p>Sabemos que tu Cancion Favorita Es:    {cancion}</p>
    </div>
  );
};

export default Card