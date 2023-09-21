import React, { useState } from 'react';

function FormComponent() {
  const [formData, setFormData] = useState({
    nombre: '',
    correo: '',
    password: '',
    recordar: false,
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    const inputValue = type === 'checkbox' ? checked : value;

    setFormData({
      ...formData,
      [name]: inputValue,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes manejar la lógica de envío del formulario, por ejemplo, enviar los datos a un servidor.
    console.log('Datos enviados:', formData);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Nombre:
          <input
            type="text"
            name="nombre"
            value={formData.nombre}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Correo Electrónico:
          <input
            type="email"
            name="correo"
            value={formData.correo}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Contraseña:
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Recordar sesión:
          <input
            type="checkbox"
            name="recordar"
            checked={formData.recordar}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <button type="submit">Enviar</button>
      </form>
      <div>
        <p>Nombre ingresado: {formData.nombre}</p>
        <p>Correo ingresado: {formData.correo}</p>
        {/* Agrega más visualización de datos según tus necesidades */}
      </div>
    </div>
  );
}

export default FormComponent;
