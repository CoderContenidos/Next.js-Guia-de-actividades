'use client'

import Link from "next/link";
import styles from "./ContactsPage.module.css";
import Loading from "../../components/Loading";
import { Suspense, useEffect, useState } from "react";
import Error from "@/app/contact/error";
import { getFirestore, collection, getDocs } from 'firebase/firestore';

export default function ContactPage() {
  const [contactos, setContactos] = useState([]);

  useEffect(() => {
    const fetchContactos = async () => {
      try {
        // Obtenemos una referencia a la colección en Firestore
        const firestore = getFirestore(); // Asegúrate de haber inicializado Firebase correctamente
        const contactosRef = collection(firestore, "contacts");

        // Obtenemos los documentos desde Firestore
        const contactosSnapshot = await getDocs(contactosRef);

        if (!contactosSnapshot.empty) {
          // Si hay documentos en Firestore, los guardamos en el estado
          const contactosArray = [];
          contactosSnapshot.forEach((doc) => {
            contactosArray.push({ id: doc.id, ...doc.data() });
          });
          setContactos(contactosArray);
        } else {
          // Si no hay documentos, hacemos algo, por ejemplo, mostrar un mensaje de error.
          console.error("No se encontraron contactos en Firestore");
        }
      } catch (error) {
        console.error("Error al obtener los contactos desde Firestore:", error);
        throw new Error("Error al cargar los contactos desde Firestore");
      }
    };

    fetchContactos();
  }, []);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Página de contactos</h1>
      {contactos.map((contacto) => (
        <Suspense fallback={<Loading/>}>
          <div key={contacto.id} className={styles.contactItem}>
            <div className={styles.contactContent}>
              <p>{contacto.fullname}</p>
              <Link href={`/contact/${contacto.id}`} className={styles.link}>
                <span>Ver Detalles</span>
              </Link>
            </div>
          </div>
        </Suspense>
      ))}
    </div>
  );
}
