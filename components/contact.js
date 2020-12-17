import Link from "next/link";
import styles from "./contact.module.css";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Contact() {
  return (
    <div>
      <Container>
        <Row className={styles.container}>
          <Col lg={7}>
            <Row className={styles.icons}>
              <Col lg sm xs={4}>
                <Link href="mailto:gungor.betikblog@gmail.com">
                  <a target="_blank">
                    <Image className={styles.icon} src="/mail.png" alt="mail" fluid />
                  </a>
                </Link>
              </Col>
              <Col lg sm xs={4}>
                <Link href="https://www.instagram.com/ozturkk.gungor/">
                  <a target="_blank">
                    <Image className={styles.icon} src="/insta.png" alt="instagram" fluid />
                  </a>
                </Link>
              </Col>
              <Col lg sm xs={4}>
                <Link href="https://twitter.com/ozturkkgungorr?s=08">
                  <a target="_blank">
                    <Image className={styles.icon} src="/twitter.png" alt="twitter" fluid />
                  </a>
                </Link>
              </Col>
              <Col lg sm xs={6}>
                <Link href="https://www.linkedin.com/in/güngör-öztürk-8224a6198">
                  <a target="_blank">
                    <Image className={styles.icon} src="/linkedin.png" alt="linkedin" fluid />
                  </a>
                </Link>
              </Col>
              <Col lg sm xs={6}>
                <Link href="https://github.com/gngrozturk">
                  <a target="_blank">
                    <Image className={styles.icon} src="/github.png" alt="github"  fluid />
                  </a>
                </Link>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Contact;
