import React from "react";
import contactClass from "../../../../views/ContactsPage/contactClass";
import Link from "next/link";

export default function ContactDetailPage({ params }) {
  const { id } = params;

  const array = contactClass();
  const contacto = array.find((contacto) => contacto.id.toString() === id);

  if (!contacto) {
    return (
      <>
        <div
          style={{
            maxWidth: "800px",
            margin: "40px auto",
            padding: "20px",
            border: "1px solid #ddd",
            borderRadius: "5px",
            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
          }}
        >
          <Link
            href="/contact"
            style={{
              color: "#007bff",
              textDecoration: "none",
              marginBottom: "10px",
              display: "inline-block",
            }}
          >
            Volver atrás
          </Link>

          <h1
            style={{
              fontSize: "24px",
              marginBottom: "10px",
            }}
          >
            Contacto no encontrado
          </h1>
        </div>
      </>
    );
  }

  return (
    <div
      style={{
        maxWidth: "800px",
        margin: "40px auto",
        padding: "20px",
        border: "1px solid #ddd",
        borderRadius: "5px",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
      }}
    >
      <Link
        href="/contact"
        style={{
          color: "#007bff",
          textDecoration: "none",
          marginBottom: "10px",
          display: "inline-block",
        }}
      >
        Volver atrás
      </Link>
      <div>
        <h1
          style={{
            fontSize: "24px",
            marginBottom: "10px",
          }}
        >
          Detalles del contacto con ID: {contacto.id}
        </h1>

        <p
          style={{
            fontSize: "16px",
            marginBottom: "5px",
          }}
        >
          Nombre: {contacto.nombre}
        </p>
        <p
          style={{
            fontSize: "16px",
            marginBottom: "5px",
          }}
        >
          Apellido: {contacto.apellido}
        </p>
        <p
          style={{
            fontSize: "16px",
            marginBottom: "5px",
          }}
        >
          Teléfono: {contacto.telefono}
        </p>
        <p
          style={{
            fontSize: "16px",
            marginBottom: "5px",
          }}
        >
          Seniority: {contacto.seniority}
        </p>
      </div>
    </div>
  );
}
