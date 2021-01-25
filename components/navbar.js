import styles from "../styles/Navbar.module.css";
import Image from "next/image";
import { AiOutlineMenu } from "react-icons/ai";

export default function Navbar() {
  return (
    <nav className={styles.container}>
      <div className={styles.logo}>
        <Image
          src="/Logo_bubble.svg"
          alt="Logo entreprise"
          width={40}
          height={40}
        />
      </div>
      <ul className={styles.links}>
        <li>A propos</li>
        <li>Compétences</li>
        <li>Expériences</li>
      </ul>
      <div className={styles.menu}>
        <AiOutlineMenu />
      </div>
      <a className={styles.contact}>Me contacter</a>
    </nav>
  );
}
