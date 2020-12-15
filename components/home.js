import Link from "next/link";
import styles from "./home.module.css";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
function Home() {
  return (
    <div>
      <Container>
        <Row className={styles.container}>
          <Col lg={10}>
            <Row className={styles.about}>
              <Col lg={8}>
                <h2>About Me</h2>
                <p>
                  Hi, I am Güngör. I am a 3rd year student at Konya Technical
                  University Computer Engineering Department. I am studying at
                  web and mobile development as a front-end developer. I work in
                  these areas because I think I can develop platforms that can
                  solve problems in people's daily lives. I love to learn and
                  share what I have learned. That's why I created a blog website
                  where we periodically share what we learned with my friends. I
                  enjoy developing open source projects. If you want to see my
                  projects, you can view my github profile with the button
                  below. I spend my free time playing instruments and reading
                  poetry. In this way, I both have a pleasant time and increase
                  my productivity. If you want to contact me, you can use the
                  buttons below.
                </p>
              </Col>

              <Col className={styles.meImg} md={6} lg={4}>
                <Image src="me.png" fluid />
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;
