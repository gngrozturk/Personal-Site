// styles/global.js
import css from "styled-jsx/css";

export default css.global`
  body {
    margin: 0;
    padding: 0;
    background-color: #101010;
    color: #f3f3f3;
  }

  a {
    text-decoration: none;
    color: #228cee;
  }

  a:hover {
    text-decoration: none;
  }

  h1,
  h2 {
    font-family: "Chivo", sans-serif;
  }

  h3 {
    font-family: "Chivo", sans-serif;
  }

  p {
    font-family: "Krub", sans-serif;
    line-height: 1.6rem;
    margin-bottom: 0;
  }
  .navbar-neon .navbar-toggler-icon {
    background-image: url("/toggler.png");
    background-size: contain;
  }
  .navbar-toggler {
    color: #228cee;
  }
`;
