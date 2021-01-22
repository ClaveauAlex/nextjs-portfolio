import styles from "../styles/Experiences.module.css";
import Image from "next/image";

export default function Experiences() {
  return (
    <>
      <h3>Expériences</h3>
      <div>
        <div>
          <Image
            src="/experienceFutur.svg"
            alt="Futur expérience"
            width={220}
            height={220}
          />
          <div>
            <p>Et si votre projet était le suivant ?</p>
            <button>&rarr; Me contacter</button>
          </div>
        </div>
        <div>
          <Image
            src="/experience1.svg"
            alt="Expérience 1"
            width={220}
            height={220}
          />
          <div>
            <h4>Consultant Développeur Front-End</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus
              mauris diam massa vitae at posuere lorem fringilla. Sit dolor,
              quis nullam porttitor duis hendrerit.{" "}
            </p>
            <button>En savoir plus</button>
          </div>
        </div>
        <div>
          <Image
            src="/experience2.svg"
            alt="Expérience 2"
            width={220}
            height={220}
          />
          <div>
            <h4>Alternant Développeur Front-End</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus
              mauris diam massa vitae at posuere lorem fringilla. Sit dolor,
              quis nullam porttitor duis hendrerit.{" "}
            </p>
            <button>En savoir plus</button>
          </div>
        </div>
        <div>
          <Image
            src="/experience3.svg"
            alt="Expérience 3"
            width={220}
            height={220}
          />
          <div>
            <h4>Alternant Développeur Front-End</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus
              mauris diam massa vitae at posuere lorem fringilla. Sit dolor,
              quis nullam porttitor duis hendrerit.{" "}
            </p>
            <button>En savoir plus</button>
          </div>
        </div>
      </div>
    </>
  );
}
