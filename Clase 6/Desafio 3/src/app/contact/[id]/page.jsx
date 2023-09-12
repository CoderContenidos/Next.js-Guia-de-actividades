'use client'
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { getFirestore, doc, getDoc, updateDoc, deleteDoc } from 'firebase/firestore';
import { Suspense } from "react";
import Loading from "../../../../components/Loading";
import Error from "./error";

export default function ContactDetailPage({ params }) {
  const { id } = params;
  const [contacto, setContacto] = useState(null);
  const [editMode, setEditMode] = useState(false); 
  const [updatedContacto, setUpdatedContacto] = useState(null); 

  useEffect(() => {
    const fetchContacto = async () => {
      try {
        // Obtenemos una referencia al documento en Firestore
        const firestore = getFirestore(); 
        const contactoRef = doc(firestore, "contacts", id);

        // Obtenemos el documento desde Firestore
        const contactoSnap = await getDoc(contactoRef);

        if (contactoSnap.exists()) {
          // Si el documento existe en Firestore, lo guardamos en el estado
          setContacto(contactoSnap.data());
          // Inicializamos el estado de los datos editados con los mismos datos
          setUpdatedContacto(contactoSnap.data());
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

  // Función para manejar la edición de los campos
  const handleEdit = () => {
    setEditMode(true);
  };

  // Función para manejar los cambios en los campos editados
  const handleFieldChange = (e) => {
    const { name, value } = e.target;
    setUpdatedContacto((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Función para guardar los cambios en Firestore
  const handleSaveChanges = async () => {
    try {
      const firestore = getFirestore();
      const contactoRef = doc(firestore, "contacts", id);

      // Actualizamos el documento en Firestore con los datos editados
      await updateDoc(contactoRef, updatedContacto);

      // Desactivamos el modo de edición
      setEditMode(false);

      // Actualizamos el estado de 'contacto' con los datos editados
      setContacto(updatedContacto);
    } catch (error) {
      console.error("Error al guardar los cambios en Firestore:", error);
      // Manejar el error, por ejemplo, mostrar un mensaje de error.
    }
  };

  // Función para eliminar el contacto
  const handleDelete = async () => {
    try {
      const firestore = getFirestore();
      const contactoRef = doc(firestore, "contacts", id);

      // Eliminamos el documento en Firestore
      await deleteDoc(contactoRef);

      // Redirigimos a la página de contactos después de eliminar
      window.location.href = "/contact";
    } catch (error) {
      console.error("Error al eliminar el contacto desde Firestore:", error);
      // Manejar el error, por ejemplo, mostrar un mensaje de error.
    }
  };

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

 
return (
  <Suspense fallback={<Loading />}>
    <div style={{ maxWidth: "800px", margin: "40px auto", padding: "20px", border: "1px solid #ddd", borderRadius: "5px", boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)" }}>
      <Link href="/contact" style={{ color: "#007bff", textDecoration: "none", marginBottom: "10px", display: "inline-block" }}>
        Volver atrás
      </Link>
        <h1 style={{ margin: "20px auto" }}>Detalles del contacto:</h1>
        {editMode ? ( // Mostrar campos editables si editMode es verdadero
          <>
            <p style={{ textAlign: "left", marginBottom: "10px" }}>
              Nombre:{" "}
              <input
                type="text"
                name="fullname"
                value={updatedContacto.fullname}
                onChange={handleFieldChange}
                style={{ width: "100%", margin: "10px 0", padding: "10px", border: "1px solid #ccc", borderRadius: "4px", display: "inline-block" }}
              />
            </p>
            <p style={{ textAlign: "left", marginBottom: "10px" }}>
              Email:{" "}
              <input
                type="text"
                name="email"
                value={updatedContacto.email}
                onChange={handleFieldChange}
                style={{ width: "100%", margin: "10px 0", padding: "10px", border: "1px solid #ccc", borderRadius: "4px", display: "inline-block" }}
              />
            </p>
            <p style={{ textAlign: "left", marginBottom: "10px" }}>
              Teléfono:{" "}
              <input
                type="text"
                name="phone"
                value={updatedContacto.phone}
                onChange={handleFieldChange}
                style={{ width: "100%", margin: "10px 0", padding: "10px", border: "1px solid #ccc", borderRadius: "4px", display: "inline-block" }}
              />
            </p>
            <p style={{ textAlign: "left", marginBottom: "10px" }}>
              Ciudad:{" "}
              <input
                type="text"
                name="city"
                value={updatedContacto.city}
                onChange={handleFieldChange}
                style={{ width: "100%", margin: "10px 0", padding: "10px", border: "1px solid #ccc", borderRadius: "4px", display: "inline-block" }}
              />
            </p>
            <button onClick={handleSaveChanges} style={{ backgroundColor: "#007bff", color: "#fff", border: "none", borderRadius: "4px", padding: "10px", 
            cursor: "pointer", margin: "10px 0", width: "100%", alignItems: "center" }}>
              Guardar cambios
            </button>
            <button onClick={() => {
            setEditMode(false);
            setUpdatedContacto(contacto); 
        }} style={{ backgroundColor: "red", color: "#fff", border: "none", borderRadius: "4px", padding: "10px", cursor: "pointer", margin: "10px 0", width: "100%", alignItems: "center" }}>
          Cancelar
        </button>
          </>
        ) : (
          // Mostrar campos no editables si editMode es falso
          <>
            <p style={{ textAlign: "left", marginBottom: "10px" }}>
            Nombre:{" "}
            <span
                style={{ width: "100%", margin: "10px 0", padding: "10px", border: "1px solid #ccc", borderRadius: "4px", display: "inline-block", fontSize: "12px"}}
                >{contacto.fullname}
              </span>
            </p>

            <p style={{ textAlign: "left", marginBottom: "10px" }}>
            Email:{" "}
            <span
                style={{ width: "100%", margin: "10px 0", padding: "10px", border: "1px solid #ccc", borderRadius: "4px", display: "inline-block", fontSize: "12px"}}
                >{contacto.email}
            </span>
            </p>

            <p style={{ textAlign: "left", marginBottom: "10px" }}>
              Teléfono:{" "}
              <span
                style={{ width: "100%", margin: "10px 0", padding: "10px", border: "1px solid #ccc", borderRadius: "4px", display: "inline-block", fontSize: "12px"}}
                >{contacto.phone}
              </span>
            </p>
            
            <p style={{ textAlign: "left", marginBottom: "10px" }}>
            Ciudad:{" "}
              <span
                style={{ width: "100%", margin: "10px 0", padding: "10px", border: "1px solid #ccc", borderRadius: "4px", display: "inline-block", fontSize: "12px"}}
              >{contacto.city}
              </span>
            </p>  

            <button onClick={handleEdit} style={{ backgroundColor: "#007bff", color: "#fff", border: "none", borderRadius: "4px", padding: "10px", 
            cursor: "pointer", margin: "10px 0", width: "100%", alignItems: "center" }}>
              Editar
            </button>
            <button onClick={handleDelete} style={{ backgroundColor: "red", color: "#fff", border: "none", borderRadius: "4px", padding: "10px", 
            cursor: "pointer", margin: "10px 0", width: "100%", alignItems: "center" }}>
              Eliminar
            </button>
          </>
        )}

    </div>
  </Suspense>
);
}