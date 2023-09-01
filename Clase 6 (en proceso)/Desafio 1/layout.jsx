'use client'

import React, { useState } from "react"; 
import "./globals.css";
import { Inter } from "next/font/google";
import Head from "next/head";
import Navbar from "../../components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export let metadata = {
  title: "Coderhouse | Next.js",
  description: "Aplicacion creada por Ezequiel M. Tartaglia para Coderhouse S.R.L",
};

const navRoutes = [
  { title: "Inicio", path: "/" },
  { title: "Contactos", path: "/contact" },
];

const RootLayout = ({ children }) => {
  // Aquí guardamos el estado de inicio de sesión
  const [user, setUser] = useState(null);

  return (
    <html lang="en">
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </Head>
      <body className={inter.className}>
        <Navbar navItems={navRoutes} user={user} setUser={setUser} />
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
