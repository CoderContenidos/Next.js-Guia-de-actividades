import React, { useState, useEffect } from 'react';

function UserFetchData() {
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    // Realizar la solicitud GET a la API de usuarios
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => setUsuarios(data))
      .catch(error => console.error('Error al obtener los usuarios:', error));
  }, []);

  return (
    <div>
      <h1>Lista de Usuarios</h1>
      <ul>
        {usuarios.map(usuario => (
          <li key={usuario.id}>
            <strong>Nombre:</strong> {usuario.name} <br />
            <strong>Correo Electrónico:</strong> {usuario.email}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserFetchData;
