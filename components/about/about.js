import styles from "./about.module.css";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Home() {
  return (
    <Row className={styles.about}>
      <Col lg={8}>
        <h1>About Me</h1>
        <p>
          Hi, I am Güngör. I have a bachelor's degree from the Computer
          Engineering Department of Konya Technical University. I have been
          studying front-end development on websites and mobile applications.
          The reason I work in these fields is that I like to develop platforms
          that can solve people’s daily life problems.
        </p>
        <br />
        <p>
          I love learning and sharing what I learned. That's why I created
          a
          <span className={styles.link}>
            {" "}
            <a target="_blank" href="https://www.betikblog.com/">
              blog
            </a>{" "}
          </span>
          website where we periodically share what we learned with my friends.
          As part of this project, we also started creating
          <span className={styles.link}>
            {" "}
            <a
              target="_blank"
              href="https://www.youtube.com/channel/UCSWKuakUfWuDKphpYVakTQA"
            >
              Youtube
            </a>{" "}
          </span>
          content.
        </p>
        <br />
        <p>
          I spend my free time with my hobbies such as playing instruments,
          traveling, cooking, doing exercise, and reading poetry. This way, I
          both have a pleasant time and increase my productivity.
        </p>
        <br />
        <p>
          I enjoy developing open-source projects. If you want to see them, you
          can view my Github profile by clicking the button below.
        </p>
      </Col>

      <Col className={styles.meImg} md={6} lg={4}>
        <Image src="me.png" alt="gungor ozturk" fluid />
      </Col>
    </Row>
  );
}

export default Home;
