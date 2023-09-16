import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "../../components/Navbar";

// import firebase from 'firebase';
import '../../lib/firebase/client/client'

const inter = Inter({ subsets: ["latin"] });

const navRoutes = [
  { title: "Inicio", path: "/" },
  { title: "Contactos", path: "/contact" },
];

const userName = "example@example.com"

const RootLayout = ({ children }) => {
  
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar navItems={navRoutes} userMail={userName} />
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
