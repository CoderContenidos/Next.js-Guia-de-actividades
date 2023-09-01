import React from "react";
import Link from "next/link";
import Image from "next/image";
import { signInWithGoogle, signOutUser } from "../firebase/client/client";
import styles from "./Navbar.module.css";

const Navbar = ({ navItems, user, setUser }) => {
  const handleSignInWithGoogle = async () => {
    try {
      const userResult = await signInWithGoogle();
      setUser(userResult);
    } catch (error) {
      console.error("Error al iniciar sesión con Google:", error);
    }
  };

  const handleSignOutUser = async () => {
    try {
      if (user && user !== null) {
        await signOutUser();
        setUser(null);
      }
    } catch (error) {
      console.error("Error al cerrar sesión:", error);
    }
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.navContainer}>
        <div className={styles.navGroup}>
          {/* Logo */}
          <Link href="/" className={styles.logoLink}>
            <Image
              src="/logo.png"
              alt="Logo"
              width={70}
              height={70}
              className={styles.logoImage}
            />
          </Link>

          {/* Navigation Links */}
          <ul className={styles.navList}>
            {navItems.map((item) => (
              <li key={item.path} className={styles.navItem}>
                <Link href={item.path}>{item.title}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.navGroup}>
          {/* User Profile or Sign In with Google */}
          {(user && user !== null) ? (
            <>
              <Link href="/profile" className={styles.navItem}>
                {user.user.displayName}
              </Link>
              
              <button
                id="logoutBtn"
                type="button"
                className={`${styles.navItem} ${styles.logoutBtn}`}
                onClick={handleSignOutUser}
              >
                Cerrar sesión
              </button>
            </>
          ) : (
            <button
              id="loginWithGoogleBtn"
              type="button"
              className={`${styles.navItem} ${styles.loginBtn}`}
              onClick={handleSignInWithGoogle}
            >
              Iniciar sesión con Google
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
