import styles from "../styles/Skills.module.css";
import Image from "next/image";

export default function Skills() {
  return (
    <section>
      <h3>Compétences</h3>
      <div>
        <Image
          src="/dev.svg"
          alt="Icon Développement"
          width={100}
          height={100}
        />
        <h4>Développement</h4>
        <div>
          <p>React</p>
          <p>CSS</p>
          <p>Node</p>
          <p>Express</p>
          <p>MongoDB</p>
          <p>Git</p>
        </div>
      </div>
      <div>
        <Image src="/design.svg" alt="Icon Design" width={100} height={100} />
        <h4>Design</h4>
        <div>
          <p>Figma</p>
          <p>Affinity Designer</p>
          <p>Illustrator</p>
          <p>Photoshop</p>
        </div>
      </div>
    </section>
  );
}
