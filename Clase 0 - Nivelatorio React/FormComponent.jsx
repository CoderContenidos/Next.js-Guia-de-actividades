import React, { useState } from 'react';

function FormComponent() {
  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');

  return (
    <div>
      <form>
        <label>Nombre: <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} /></label>
        <br />
        <label>Correo Electrónico: <input type="email" value={correo} onChange={(e) => setCorreo(e.target.value)} /></label>
      </form>
      <div>
        <p>Nombre ingresado: {nombre}</p>
        <p>Correo ingresado: {correo}</p>
      </div>
    </div>
  );
}

export default FormComponent;
