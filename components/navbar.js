import styles from "../styles/Navbar.module.css";
import Image from "next/image";
import { AiOutlineMenu } from "react-icons/ai";

export default function Navbar() {
  return (
    <>
      <div>
        <Image
          src="/Logo_bubble.svg"
          alt="Logo entreprise"
          width={40}
          height={40}
        />
      </div>
      <div>
        <ul>
          <li>A propos</li>
          <li>Compétences</li>
          <li>Expériences</li>
        </ul>
      </div>
      <div>
        <AiOutlineMenu/>
      </div>
    </>
  );
}
