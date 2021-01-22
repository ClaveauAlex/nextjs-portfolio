import styles from "../styles/Footer.module.css";
import Link from "next/link";
import { AiFillLinkedin, AiFillInstagram } from "react-icons/ai";

export default function Footer() {
  const linkedinUrl = "https://www.linkedin.com/in/alexandre-claveau/";
  const instagramUrl = "https://www.instagram.com/alexandre_claveau.me/";

  return (
    <>
      <footer>
        <div>
          <p>Ce site</p>
          <p>Fait à la main avec React, Nextjs & CSS.</p>
          <p>© Alexandre Claveau {new Date().getFullYear()}</p>
        </div>
        <div>
          <p>Liens</p>
          <ul>
            <li>A propos</li>
            <li>Compétences</li>
            <li>Expériences</li>
            <li>
              <Link href="/contact">
                <a>Me contacter</a>
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <p>Trouvez-moi ailleurs</p>
          <ul>
            <li>
              <AiFillLinkedin />
              <a href={linkedinUrl}>linkedin.fr/claveau</a>
            </li>
            <li>
              <AiFillInstagram />
              <a href={instagramUrl}>alexandre_claveau.me</a>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
}
