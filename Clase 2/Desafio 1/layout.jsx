import "./globals.css";
import { Inter } from "next/font/google";
import Head from "next/head";
import React from "react";

const inter = Inter({ subsets: ["latin"] });

// Agregar metadatos utilizados en <head>
export const metadata = {
  title: "Coderhouse | Next.js",
  description: "Aplicacion creada por Ezequiel M. Tartaglia para Coderhouse S.R.L",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </Head>
      <body className={inter.className}>
        {children}
        </body>
    </html>
  );
}
