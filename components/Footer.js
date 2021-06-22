import Link from "next/link";
import styles from "@/styles/Footer.module.css";
export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>Copyright &copy; Eventos DJ 2021</p>
      <p>
        <Link href="/about">Acerca de este proyecto</Link>
      </p>
    </footer>
  );
}
