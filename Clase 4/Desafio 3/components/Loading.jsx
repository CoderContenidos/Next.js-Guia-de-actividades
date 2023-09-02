import styles from "./Loading.module.css";

export default function Loading() {
  return (
    <div className={styles.container}>
      <div className={styles.loader}></div>
      <div className={styles.loadingText}>Cargando...</div>
    </div>
  );
}
