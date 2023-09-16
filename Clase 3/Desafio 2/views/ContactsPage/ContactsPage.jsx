import React from 'react';
import Link from 'next/link';
import contactClass from './contactClass';
import styles from './ContactsPage.module.css'; 

export default function ContactPage() {
  const array = contactClass();
  
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Página de contactos</h1>
      {array.map(contacto => (
        <div key={contacto.id} className={styles.contactItem}>
          <div className={styles.contactContent}>
            <p>{contacto.nombre} {contacto.apellido}</p>
            <Link href={`/contact/${contacto.id}`} className={styles.link}>
              <span>Ver Detalles</span>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
