import Head from "next/head";
import Link from "next/link";
import Navbar from "../components/navbar";
import Hero from "../components/hero";
import About from "../components/about";
import Skills from "../components/skills";
import Experiences from "../components/experiences";
import Testimonials from "../components/testimonials";
import Cta from "../components/cta";
import Footer from "../components/footer";
import styles from "../styles/Home.module.css";

export const informations = {
  name: "Alexandre Claveau",
  siteTitle: "Alexandre Claveau Portfolio",
  description:
    "Développeur Frontend freelance à Brest. Je développe des sites Web, interfaces ainsi que des maquettes.",
  url: "https://alexandre-claveau.fr",
};

export default function Home() {
  return (
    <div>
      <Head>
        <title>{informations.siteTitle}</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content={informations.description} />
        <meta property="og:locale" content="fr_FR" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={informations.siteTitle} />
        <meta property="og:description" content={informations.description} />
        <meta property="og:url" content={informations.url} />
        <meta property="og:site_name" content={informations.name} />
      </Head>
      <Navbar></Navbar>
      <Hero></Hero>
      <About></About>
      <Skills></Skills>
      <Experiences></Experiences>
      <Testimonials></Testimonials>
      <Cta></Cta>
      <Footer></Footer>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to{" "}
          <Link href="/contact">
            <a>Alexandre Claveau</a>
          </Link>
        </h1>

        <p className={styles.description}>
          Get started by editing{" "}
          <code className={styles.code}>pages/index.js</code>
        </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h3>Documentation &rarr;</h3>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h3>Learn &rarr;</h3>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className={styles.card}
          >
            <h3>Examples &rarr;</h3>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h3>Deploy &rarr;</h3>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  );
}
