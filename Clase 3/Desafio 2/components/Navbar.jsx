import Link from "next/link";
import Image from "next/image";
import styles from "./Navbar.module.css";

const Navbar = ({ navItems, userMail }) => {
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
          {/* User Profile */}
          <Link href="/profile" className={styles.navItem}>
            {userMail}
          </Link>
          
          {/* Logout */}
          <Link href="/logout" className={styles.navItem}>
            Salir
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
