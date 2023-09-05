import React from "react";
import Link from "next/link";
import styles from "./ContactsPage.module.css";
import Loading from "../../components/Loading";
import { Suspense } from "react";
import Error from "@/app/contact/error";

export default async function ContactPage() {
  //const array = contactClass();
  try {
    const fetchUsers = () => {
      return fetch("https://jsonplaceholder.typicode.com/users",{
        cache: 'force-cache',
        next: {
            revalidate: 3600
        }
    }).then((res) => res.json());
    };
    const ArrayUsers = await fetchUsers();
    return (
      <div className={styles.container}>
        <h1 className={styles.title}>Página de contactos</h1>
        {ArrayUsers.map((contacto) => (
          <Suspense fallback={<Loading/>}>
          <div key={contacto.id} className={styles.contactItem}>
            <div className={styles.contactContent}>
              <p>{contacto.name}</p>
              <Link href={`/contact/${contacto.id}`} className={styles.link}>
                <span>Ver Detalles</span>
              </Link>
            </div>
          </div>
          </Suspense>
        ))}
      </div>
    );
  } catch (error) {
    // Capturar errores en consola
    console.error(error)
    throw new Error("Error al cargar los contactos");
  }
}
