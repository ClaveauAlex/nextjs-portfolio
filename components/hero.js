import styles from "../styles/Hero.module.css";
import Image from "next/image";

export default function Hero() {
  return (
    <>
      <Image
        src="/me-design.svg"
        alt="Alexandre Claveau"
        width={215}
        height={205}
      />
      <div>
        <h1>Je m'appelle Alexandre Claveau</h1>
        <h3>Développeur Frontend</h3>
        <p>
          J'aide les entreprises à créer ou améliorer leur site Web pour
          convertir plus de visiteurs en clients.{" "}
        </p>
      </div>
    </>
  );
}
