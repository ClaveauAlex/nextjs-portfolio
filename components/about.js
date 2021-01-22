import styles from "../styles/About.module.css";
import Image from "next/image";

export default function About() {
  return (
    <>
      <h3>A propos</h3>
      <div>
        <div>
          <Image
            src="/illustration1.svg"
            alt="Illustration 1"
            width={200}
            height={200}
          />
          <div>
            <p>Vous êtes une entreprise ?</p>
            <p>
              Vous cherchez à vous faire connaître sur internet ? Convertir
              votre audience en futur clients ?
            </p>
            <p>
              Je m'appelle Alexandre Claveau et mon savoir-faire englobe le
              domaine de la programmation Web et le Design. Je suis un jeune
              Breton qui n'a pas peur des challenges et qui peut être celui que
              vous cherchez. Par mes différentes expériences, j'ai pu assister
              des entreprises dans la réalisation de leur site Web ou dans le
              développement d'interfaces clients. Mais pas seulement ! J'ai pu
              également les accompagner dans leurs choix afin de leur indiquer
              la meilleur façon d'arriver à leurs objectifs.
            </p>
          </div>
        </div>
        <div>
          <Image
            src="/illustration2.svg"
            alt="Illustration 2"
            width={200}
            height={200}
          />
          <div>
            <p>
              En d'autres termes, je développe votre projet en mettant en place
              une stratégie rigoureuse :
            </p>
            <p>
              Tout d'abord, un premier rendez-vous pour comprendre vos attentes
              et établir un cahier des charges.
            </p>
            <p>
              Ensuite, je vous proposerai une maquette réaliste du projet pour
              vous permettre de vous projeter. Ainsi, je mettrai en place une
              gestion de projet basée sur la méthode Agile. Celle-ci permettra
              d'avoir une meilleur vision de votre projet sur le long terme et
              une meilleur communication.
            </p>
            <p>
              Enfin, sur différentes itérations je vais développer votre projet
              avec des technologies tel que React. Il s'agit d'une bibliothèque
              permettant de faciliter la création d'application Web par
              l'intermédiaire de composants.
            </p>
          </div>
        </div>
        <div>
          <Image
            src="/illustration3.svg"
            alt="Illustration 3"
            width={200}
            height={200}
          />
          <div>
            <p>Alors n'hésitez pas à me contacter afin d'en discuter.</p>
            <p>
              Si vous avez encore des doutes sur la démarche, il vous suffit de
              regarder autour de vous. Certaines entreprises ont des sites ou
              plateformes mal réalisés. On retrouve un grand nombre qui
              investissent aujourd'hui beaucoup afin de développer le même
              projet mais différemment. Ce retour arrière est généralement lié à
              une mauvaise gestion de l'expérience utilisateur, ou un changement
              brutale de technologies.
            </p>
            <p>
              Voilà pourquoi, je peux vous permettre d'augmenter votre audience
              afin de la convertir en clients et ainsi éviter d'éventuel
              problèmes.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
