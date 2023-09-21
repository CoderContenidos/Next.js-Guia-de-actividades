import "./globals.css";
import { Inter } from "next/font/google";
import React from "react";

const inter = Inter({ subsets: ["latin"] });

//Add custom <head> 
export const metadata = {
  title: 'Coderhouse Next.Js',
  description: 'Pagina de inicio de aplicacion Next.Js creada por Ezequiel M. Tartaglia para Coderhouse S.R.L',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        </body>
    </html>
  );
}
