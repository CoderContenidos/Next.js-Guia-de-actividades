import "./globals.css";
import { Inter } from "next/font/google";
import React from "react";
import Navbar from "../../components/Navbar";

const inter = Inter({ subsets: ["latin"] });

const navRoutes = [
  { title: "Inicio", path: "/" },
  { title: "Contactos", path: "/contact" },
];

const userName = "mail@example.com"

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar navItems={navRoutes} userMail={userName}/>
        {children}
        </body>
    </html>
  );
}
