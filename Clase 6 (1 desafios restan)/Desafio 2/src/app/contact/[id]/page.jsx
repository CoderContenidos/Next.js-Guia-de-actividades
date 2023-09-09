'use client'
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { getFirestore, doc, getDoc } from 'firebase/firestore';
import { Suspense } from "react";
import Loading from "../../../../components/Loading";
import Error from "./error";

export default function ContactDetailPage({ params }) {
  const { id } = params;
  const [contacto, setContacto] = useState(null);
  useEffect(() => {
    const fetchContacto = async () => {
      try {
        // Obtenemos una referencia al documento en Firestore
        const firestore = getFirestore(); // Asegúrate de haber inicializado Firebase correctamente
        const contactoRef = doc(firestore, "contacts", id);

        // Obtenemos el documento desde Firestore
        const contactoSnap = await getDoc(contactoRef);

        if (contactoSnap.exists()) {
          // Si el documento existe en Firestore, lo guardamos en el estado
          setContacto(contactoSnap.data());
        } else {
          // Si el documento no existe, hacemos algo, por ejemplo, mostrar un mensaje de error.
          console.error("Contacto no encontrado en Firestore");
          throw new Error("Contacto no encontrado en Firestore");
        }
      } catch (error) {
        console.error("Error al obtener el contacto desde Firestore:", error);
        throw new Error("Error al cargar los contactos desde Firestore");
      }
    };
    fetchContacto();
  }, [id]);

  if (!contacto) {
    return (
      <div style={{ maxWidth: "800px", margin: "40px auto", padding: "20px", border: "1px solid #ddd", borderRadius: "5px", boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)" }}>
        <Link href="/contact" style={{ color: "#007bff", textDecoration: "none", marginBottom: "10px", display: "inline-block" }}>
          Volver atrás
        </Link>
        <h1 style={{ fontSize: "24px", marginBottom: "10px" }}>Contacto no encontrado</h1>
      </div>
    );
  }
  return (<Suspense fallback={<Loading/>}>
    <div style={{ maxWidth: "800px", margin: "40px auto", padding: "20px", border: "1px solid #ddd", borderRadius: "5px", boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)" }}>
      <Link href="/contact" style={{ color: "#007bff", textDecoration: "none", marginBottom: "10px", display: "inline-block" }}>
        Volver atrás
      </Link>
      <div>
        <h1 style={{ fontSize: "24px", marginBottom: "10px" }}>Detalles del contacto:</h1>
        <p style={{ fontSize: "16px", marginBottom: "5px" }}>Nombre: {contacto.fullname}</p>
        <p style={{ fontSize: "16px", marginBottom: "5px" }}>Email: {contacto.email}</p>
        <p style={{ fontSize: "16px", marginBottom: "5px" }}>Teléfono: {contacto.phone}</p>
        <p style={{ fontSize: "16px", marginBottom: "5px" }}>Ciudad: {contacto.city}</p>
      </div>
    </div>
    </Suspense>);
}
