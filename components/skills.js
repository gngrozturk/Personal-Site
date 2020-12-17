import Link from "next/link";
import styles from "./skills.module.css";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Skills() {
  return (
    <div>
      <Container>
        <Row className={styles.container}>
          <Col lg={10}>
            <Row className={styles.about}>
              <Col lg={10}>
                <h2>My Skills</h2>
              </Col>
            </Row>

            <Row className={styles.skill}>
              <Col md={4}>
                <Row className={styles.rowCenter}>
                  <Image className={styles.logo} src="js.png" alt="js" fluid />
                </Row>
              </Col>
              <Col md={8}>
                <p className={styles.rowCenter}>
                  I use Javascript to develop more dynamic projects. I'm
                  improving myself to be better at JavaScript libraries.
                </p>
              </Col>
            </Row>

            <Row className={styles.skill}>
              <Col md={4}>
                <Row className={styles.rowCenter}>
                  <Image className={styles.logo} src="react.png" alt="react" fluid />
                </Row>
              </Col>
              <Col md={8}>
                <p className={styles.rowCenter}>
                  I have been studying on React.js through Next.js for a while
                  to create more impressive user interfaces
                </p>
              </Col>
            </Row>

            <Row className={styles.skill}>
              <Col md={4}>
                <Row className={styles.rowCenter}>
                  <Image className={styles.logo} src="nextJs.png" alt="nextjs" fluid />
                </Row>
              </Col>
              <Col md={8}>
                <p className={styles.rowCenter}>
                  I started using Next.js to develop a blog with the JAMStack
                  approach and gain experience in React.js. This website, which
                  you are currently looking at, is my second Next.js project .
                </p>
              </Col>
            </Row>

            <Row className={styles.skill}>
              <Col md={4}>
                <Row className={styles.rowCenter}>
                  <Image className={styles.logo} src="HTML.png" alt="html" fluid />
                </Row>
              </Col>
              <Col md={8}>
                <p className={styles.rowCenter}>
                  I utilized HTML in many web projects that I developed. Also I
                  studied HTML in elective web programming lecture which I took
                  in the 3rd year of university.
                </p>
              </Col>
            </Row>

            <Row className={styles.skill}>
              <Col md={4}>
                <Row className={styles.rowCenter}>
                  <Image className={styles.logo} src="CSS.png" alt="css" fluid />
                </Row>
              </Col>
              <Col md={8}>
                <p className={styles.rowCenter}>
                  I use it in coding interface designs in my web projects.
                </p>
              </Col>
            </Row>

            <Row className={styles.skill}>
              <Col md={4}>
                <Row className={styles.rowCenter}>
                  <Image className={styles.logo} src="Bootstrap.png" alt="bootstrap" fluid />
                </Row>
              </Col>
              <Col md={8}>
                <p className={styles.rowCenter}>
                  I use the bootstrap framework to develop responsive user
                  interfaces in my web projects
                </p>
              </Col>
            </Row>

            <Row className={styles.skill}>
              <Col md={4}>
                <Row className={styles.rowCenter}>
                  <Image className={styles.logo} src="figma.png" alt="figma" fluid />
                </Row>
              </Col>
              <Col md={8}>
                <p className={styles.rowCenter}>
                  Before I start coding, I use Figma for design. I also use it
                  to create visual materials like logo, icon etc. for my
                  projects.
                </p>
              </Col>
            </Row>

            <Row className={styles.skill}>
              <Col md={4}>
                <Row className={styles.rowCenter}>
                  <Image className={styles.logo} src="reactNative.png" alt="reactNative" fluid />
                </Row>
              </Col>
              <Col md={8}>
                <p className={styles.rowCenter}>
                  I started learning from a single codebase to develop apps for
                  both android and ios platforms. I'm still learning.
                </p>
              </Col>
            </Row>

            <Row className={styles.skill}>
              <Col md={4}>
                <Row className={styles.rowCenter}>
                  <Image className={styles.logo} src="strapi.png" alt="strapi" fluid />
                </Row>
              </Col>
              <Col md={8}>
                <p className={styles.rowCenter}>
                  I used it to pull data in my blog project that I developed to
                  gain more experience on the JAMStack approach.
                </p>
              </Col>
            </Row>

            <Row className={styles.skill}>
              <Col md={4}>
                <Row className={styles.rowCenter}>
                  <Image className={styles.logo} src="heroku.png" alt="heroku" fluid />
                </Row>
              </Col>
              <Col md={8}>
                <p className={styles.rowCenter}>
                  I used it to deploy the back-end of some of my projects.
                </p>
              </Col>
            </Row>

            <Row className={styles.skill}>
              <Col md={4}>
                <Row className={styles.rowCenter}>
                  <Image className={styles.logo} src="flutter.png" alt="flutter" fluid />
                </Row>
              </Col>
              <Col md={8}>
                <p className={styles.rowCenter}>
                  I attended the Mustafa Akgül Free Software Winter Camp to
                  start learning Flutter. During my part-time work at Konya
                  Technical University Information Technologies Department, I
                  took small tasks in a Flutter project.
                </p>
              </Col>
            </Row>

            <Row className={styles.skill}>
              <Col md={4}>
                <Row className={styles.rowCenter}>
                  <Image className={styles.logo} src="java.png" alt="java" fluid />
                </Row>
              </Col>
              <Col md={8}>
                <p className={styles.rowCenter}>
                  I started learning in object-oriented programming course in
                  the second year of university. Then I took the Visual
                  Programming Languages ​​course about GUI development with Java
                  Swing.
                </p>
              </Col>
            </Row>

            <Row className={styles.skill}>
              <Col md={4}>
                <Row className={styles.rowCenter}>
                  <Image className={styles.logo} src="C.png" alt="C" fluid />
                </Row>
              </Col>
              <Col md={8}>
                <p className={styles.rowCenter}>
                  In the first year of university, I received basic C training
                  in Algorithm and Programming 1-2 lessons. In the second grade,
                  I used it in Data Structures, Algorithms lessons and some
                  small projects.
                </p>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Skills;
