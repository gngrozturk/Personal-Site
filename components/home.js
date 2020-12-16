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
                  Hi, I am Güngör. I am a 3rd grade student in Konya Technical
                  University Computer Engineering Department. I have been
                  studying on front-end development websites and mobile
                  applications. The risen I work in theese fields is I think I
                  can develop platforms that can solve problems of people in
                  daily lives. I love learning and share what I have learnt.
                  That's why I created a{" "}
                  <span className={styles.blogLink}>
                    {" "}
                    <Link href="https://www.betikblog.com/">
                      <a target="_blank">blog</a>
                    </Link>{" "}
                  </span>{" "}
                  website where we periodically share what we learnt with my
                  friends. I enjoy developing open source projects. If you want
                  to see my projects, you can view my github profile by clicking
                  the button below. I spend my free time playing instruments and
                  reading poetry. In this way, I both have a pleasant time and
                  increase my productivity. You can use the buttons below to
                  contact me.
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
