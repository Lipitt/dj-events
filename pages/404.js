import { FaExclamationTriangle } from "react-icons/fa";
import Link from "next/link";
import Layout from "@/components/layout";
import styles from "@/styles/404.module.css";
export default function NotFoundPage() {
  return (
    <Layout title="Pagina no encontrada">
      <div className={styles.error}>
        <h1>
          <FaExclamationTriangle /> 404
        </h1>
        <h4>Lo sentimos, no hay nada aqui</h4>
        <Link href="/">Volver al home</Link>
      </div>
    </Layout>
  );
}
