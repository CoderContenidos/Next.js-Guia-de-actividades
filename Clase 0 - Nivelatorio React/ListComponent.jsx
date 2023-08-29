import React, { useState } from 'react';

function ListComponent() {
  const [items, setItems] = useState(['Item 1', 'Item 2', 'Item 3']);

  const handleDelete = (index) => {
    const newItems = items.filter((_, i) => i !== index);
    setItems(newItems);
  };

  return (
    <div>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={() => handleDelete(index)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListComponent;
