import Head from "next/head";
import Navigation from "./navigation/navigation";
import globalStyles from "../styles/global.js";
import Container from "react-bootstrap/Container";

function Layout({ children }) {
  return (
    <div lang="en">
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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Chivo&family=Krub&display=swap"
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
      <Container>
        <main>{children}</main>
      </Container>
    </div>
  );
}

export default Layout;
