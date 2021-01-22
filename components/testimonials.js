import styles from "../styles/Testimonials.module.css";
import Image from "next/image";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

export default function Testimonials() {
  return (
    <>
      <h3>Témoignages</h3>
      <div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus mauris
          diam massa vitae at posuere lorem fringilla. Sit dolor, quis nullam
          porttitor duis hendrerit.{" "}
        </p>
        <IoIosArrowBack />
        <IoIosArrowForward />
        <Image
          src="/testimonial1.svg"
          alt="Personne Témoignage"
          width={64}
          height={64}
        />
        <p>Directeur des ventes</p>
      </div>
    </>
  );
}
