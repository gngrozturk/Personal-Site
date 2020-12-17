import Navigation from "../components/navigation";
import Home from "../components/home";
import Contact from "../components/contact";
import Resume from "../components/resumeIntro";
import Skills from "../components/skills";
import Head from "next/head";
import styles from "./index.module.css";
import globalStyles from "../styles/global.js";

function HomePage() {
  return (
    <div className={styles.body}>
      <style jsx global>
        {globalStyles}
      </style>
      <Head>
        <title>Güngör Öztürk</title>
        
        <link rel="shortcut icon" href="/favicon.ico" />

        <meta name="description" content="Güngör Öztürk's Personal Website" />

        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Yellowtail&display=swap"
          rel="stylesheet"
        />

        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto+Mono&display=swap"
          rel="stylesheet"
        />

        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto&display=swap"
          rel="stylesheet"
        />

        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
          integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
          crossorigin="anonymous"
        />
      </Head>
      <Navigation />
      <Home />
      <Contact/>
      <Resume/>
      <Skills/>
    </div>
  );
}

export default HomePage;
