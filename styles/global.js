// styles/global.js
import css from "styled-jsx/css";

export default css.global`
  body {
    margin: 0;
    padding: 0;
    background-color: #101010;
  }

  a {
    text-decoration: none;
    color: #228cee;
  }

  a:hover {
    text-decoration: none;
  }

  h1, h2 {
    font-family: "Roboto Mono", monospace;
    font-size: 2.3em;
  }
  p {
    font-family: "Roboto", sans-serif;
    line-height: 1.5em;
  }
  .navbar-neon .navbar-toggler-icon {
    background-image: url("/toggler.png");
    background-size: contain;
  }
  .navbar-toggler {
    color: #228cee;
  }
`;
