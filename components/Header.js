import Link from "next/link";
import styles from "../styles/Header.module.css";

export default function Header() {
  return (
    <Header className={styles.header}>
      <div className={styles.logo}>
        <Link href="/">
          <a>Eventos DJ</a>
        </Link>
      </div>

      <nav>
        <ul>
          <li>
            <Link href="/events">
              <a>Eventos</a>
            </Link>
          </li>
        </ul>
      </nav>
    </Header>
  );
}
