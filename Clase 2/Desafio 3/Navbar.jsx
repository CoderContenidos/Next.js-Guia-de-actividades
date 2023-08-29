import Image from "next/image";
import styles from "./Navbar.module.css";

const Navbar = ({ navItems, userMail }) => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navContainer}>
        <div className={styles.navGroup}>
          {/* Logo */}
          <a href="/" className={styles.logoa}>
              <Image
                src="/logo.png"
                alt="Logo"
                width={70}
                height={70}
                className={styles.logoImage}
              />
          </a>
          
          {/* Navigation as */}
          <ul className={styles.navList}>
            {navItems.map((item) => (
              <li key={item.path} className={styles.navItem}>
                <a href={item.path}>{item.title}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.navGroup}>
          {/* User Profile */}
          <a href="/profile" className={styles.navItem}>
            {userMail}
          </a>
          
          {/* Logout */}
          <a href="/logout" className={styles.navItem}>
            Salir
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
