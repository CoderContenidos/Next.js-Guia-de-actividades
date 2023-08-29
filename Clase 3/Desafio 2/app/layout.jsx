import "./globals.css";
import { Inter } from "next/font/google";
import Head from "next/head";
import React from "react";
import Navbar from "../../components/Navbar";

const inter = Inter({ subsets: ["latin"] });

// Add custom <head>
export let metadata = {
  title: "Coderhouse | Next.js",
  description: "Aplicacion creada por Ezequiel M. Tartaglia para Coderhouse S.R.L",
};

const navRoutes = [
  { title: "Inicio", path: "/" },
  { title: "Contactos", path: "/contact" },
];

const userName = "mail@example.com"

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </Head>
      <body className={inter.className}>
        <Navbar navItems={navRoutes} userMail={userName}/>
        {children}
        </body>
    </html>
  );
}
