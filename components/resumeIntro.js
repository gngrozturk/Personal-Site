import Link from "next/link";
import styles from "./home.module.css";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Resume() {
  return (
    <div>
      <Container>
        <Row className={styles.container} id="resume">
          <Col lg={10}>
            <Row className={styles.about}>
              <Col lg={12}>
                <h2>Introduction</h2>
                <p>
                  I have been involved in software development for about 3
                  years. During this time usually web and mobile I worked on
                  programming. I designed and developed responsive, corporate
                  web sites for many firm in many sector. I created a two blog
                  sites by two different front-end approach for gain more
                  experience about browsers and data transportation. I also
                  worked on mobile application development. I attended a
                  software camp about flutter in 2020's semester break. After
                  semester break I took small assignments in a mobile
                  application project in the IT department of Konya Technical
                  University. I think learning is like an endless highway. And I
                  shape my work with this perspective.
                </p>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Resume;
