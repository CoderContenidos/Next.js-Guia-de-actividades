'use client'

import React, { useState } from "react"; 
import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "../../components/Navbar";

const inter = Inter({ subsets: ["latin"] });

const navRoutes = [
  { title: "Inicio", path: "/" },
  { title: "Contactos", path: "/contact" },
];

const RootLayout = ({ children }) => {
  // Aquí guardamos el estado de inicio de sesión
  const [user, setUser] = useState(null);

  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar navItems={navRoutes} user={user} setUser={setUser} />
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
