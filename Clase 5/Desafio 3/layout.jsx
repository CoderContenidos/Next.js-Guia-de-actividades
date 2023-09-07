import "./globals.css";
import { Inter } from "next/font/google";
import Head from "next/head";
import Navbar from "../../components/Navbar";

// import firebase from 'firebase';
import '../../lib/firebase/client/client'

const inter = Inter({ subsets: ["latin"] });

export let metadata = {
  title: "Coderhouse | Next.js",
  description: "Aplicacion creada por Ezequiel M. Tartaglia para Coderhouse S.R.L",
};

const navRoutes = [
  { title: "Inicio", path: "/" },
  { title: "Contactos", path: "/contact" },
];

const userName = "example@example.com"

const RootLayout = ({ children }) => {
  
  return (
    <html lang="en">
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </Head>
      <body className={inter.className}>
        <Navbar navItems={navRoutes} userMail={userName} />
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
