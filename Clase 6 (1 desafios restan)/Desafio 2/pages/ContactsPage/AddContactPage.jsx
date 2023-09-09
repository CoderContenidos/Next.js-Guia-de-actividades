'use client'
import React, { useState, useRef } from 'react'
import { useRouter } from 'next/navigation';
import { getFirestore, addDoc, collection } from 'firebase/firestore';
import Link from 'next/link';
import styles from './AddContactPage.module.css'; 

const AddContactPage = () => {
  const [formInput, setFormInput] = useState({
    fullname: '',
    city: '',
    email: '',
    phone: '',
  })

  const formRef = useRef()
  const router = useRouter()
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // Obtén una referencia a la instancia de Firestore
    const firestore = getFirestore();
  
    try {
    // Agrega el nuevo contacto a la colección "contacts" en Firestore
    const docRef = await addDoc(collection(firestore, 'contacts'), {
      fullname: formInput.fullname,
      email: formInput.email,
      phone: formInput.phone,
      city: formInput.city,
    });
  
      // Limpia el formulario después de enviar los datos
      formRef.current.reset();
  
      // Redirecciona al usuario a donde desees después de agregar el contacto
      router.push(`/contact/${docRef.id}`);
      // Por ejemplo, puedes redirigirlo a la lista de contactos o a otra página.
    } catch (error) {
      console.error('Error al agregar el contacto:', error);
    }
  };

  const handleChange = (e) =>
  setFormInput((prev) => ({
    ...prev,
    [e.target.name]: e.target.value,
  }))

  return (
    <div className={styles.container}>
      <Link href="/contact" className={styles.goBackButton}>
        Volver atrás
      </Link>
 
      <form className={styles.contactItem} ref={formRef} onSubmit={handleSubmit}>
        <div className={styles.inputFieldContainer}>
          <label className={styles.label} htmlFor="fullname">Nombre completo</label>
          <input
            className={styles.inputField}
            value={formInput.fullname}
            name="fullname"
            type="text"
            placeholder="Nombre"
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.inputFieldContainer}>
          <label className={styles.label} htmlFor="email">Email</label>
          <input
            className={styles.inputField}
            value={formInput.email}
            name="email"
            type="email"
            placeholder="Email"
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.inputFieldContainer}>
          <label className={styles.label} htmlFor="phone">Teléfono</label>
          <input
            className={styles.inputField}
            value={formInput.phone}
            name="phone"
            type="tel"
            placeholder="Teléfono"
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.inputFieldContainer}>
          <label className={styles.label} htmlFor="city">Ciudad</label>
          <input
            className={styles.inputField}
            value={formInput.city}
            name="city"
            type="text"
            placeholder="Ciudad"
            onChange={handleChange}
            required
          />
        </div>
        <button className={`${styles.link} ${styles.submitButton}`} type="submit">Agregar Contacto</button>
      </form>
    </div>
  )
}

export default AddContactPage
