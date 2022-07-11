import styles from "./contact.module.css";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Contact() {
  return (
    <Row className={styles.contact}>
      <Col lg sm xs={4}>
        <a target="_blank" href="mailto:gungorozturk.dev@gmail.com">
          <Image className={styles.icon} src="/mail.png" alt="mail" fluid />
        </a>
      </Col>
      <Col lg sm xs={4}>
        <a target="_blank" href="https://www.instagram.com/ozturkk.gungor/">
          <Image
            className={styles.icon}
            src="/insta.png"
            alt="instagram"
            fluid
          />
        </a>
      </Col>
      <Col lg sm xs={4}>
        <a target="_blank" href="https://twitter.com/ozturkkgungorr?s=08">
          <Image
            className={styles.icon}
            src="/twitter.png"
            alt="twitter"
            fluid
          />
        </a>
      </Col>
      <Col lg sm xs={6}>
        <a
          target="_blank"
          href="https://www.linkedin.com/in/güngör-öztürk-8224a6198"
        >
          <Image
            className={styles.icon}
            src="/linkedin.png"
            alt="linkedin"
            fluid
          />
        </a>
      </Col>
      <Col lg sm xs={6}>
        <a target="_blank" href="https://github.com/gngrozturk">
          <Image className={styles.icon} src="/github.png" alt="github" fluid />
        </a>
      </Col>
    </Row>
  );
}

export default Contact;
