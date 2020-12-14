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
                    <Image className={styles.icon} src="/mail.png" fluid />
                  </a>
                </Link>
              </Col>
              <Col lg sm xs={4}>
                <Link href="https://www.instagram.com/ozturkk.gungor/">
                  <a target="_blank">
                    <Image className={styles.icon} src="/insta.png" fluid />
                  </a>
                </Link>
              </Col>
              <Col lg sm xs={4}>
                <Link href="https://twitter.com/ozturkkgungorr?s=08">
                  <a target="_blank">
                    <Image className={styles.icon} src="/twitter.png" fluid />
                  </a>
                </Link>
              </Col>
              <Col lg sm xs={6}>
                <Link href="">
                  <a target="_blank">
                    <Image className={styles.icon} src="/linkedin.png" fluid />
                  </a>
                </Link>
              </Col>
              <Col lg sm xs={6}>
                <Link href="https://github.com/gngrozturk">
                  <a target="_blank">
                    <Image className={styles.icon} src="/github.png" fluid />
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
