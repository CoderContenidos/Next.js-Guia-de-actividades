import React from 'react';
import Link from 'next/link';
import styles from './ContactsPage.module.css'; 

export default async function ContactPage() {
  //const array = contactClass();
  
  const fetchUsers = () => {
    return fetch('https://jsonplaceholder.typicode.com/users')
    .then(res=> res.json())
  }

  const ArrayUsers = await fetchUsers()

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Página de contactos</h1>
      {ArrayUsers.map(contacto => (
        <div key={contacto.id} className={styles.contactItem}>
          <div className={styles.contactContent}>
            <p>{contacto.name}</p>
            <Link href={`/contact/${contacto.id}`} className={styles.link}>
              <span>Ver Detalles</span>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
