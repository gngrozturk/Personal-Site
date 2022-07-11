import Skill from "../components/skills/skill";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Layout from "../components/layout";
import styles from "../components/title.module.css";

function Skills() {
  return (
    <Layout>
      <Row className="justify-content-center mt-4">
        <Col lg={10}>
          <h1 className={styles.title}>My Skills</h1>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col lg={10}>
          <Skill
            src="js.png"
            alt="js"
            statement="I use Javascript to develop more dynamic projects. I improve myself to be better at JavaScript libraries."
          />
          <Skill
            src="reactNative.png"
            alt="reactNative"
            statement="I have been learning react-native to develop cross-platform mobile applications. I took a very efficient online course as a start and developed several hobby projects for practice. Besides that, I used it in the second phase of my graduation project and during my internship at ICS Defense."
          />
          <Skill
            src="vue.png"
            alt="vue"
            statement="I have been learning Vue.js to develop component-based dynamic websites. I used it in the first phase of my graduation project which was liked very much by my counsellor professors."
          />
          <Skill
            src="nextJs.png"
            alt="nextJs"
            statement="I started using Next.js to develop a blog with the JAMStack
              approach and gain experience in React.js. This website, which
              you are currently looking at, is my second Next.js project."
          />
          <Skill
            src="react.png"
            alt="react"
            statement="I have been studying React.js through Next.js for a while to create more impressive and component-based user interfaces."
          />

          <Skill
            src="HTML.png"
            alt="HTML"
            statement="I utilized HTML in many web projects that I developed. Also, I studied HTML in an elective web programming lecture which I took in my 3rd year of university."
          />

          <Skill
            src="CSS.png"
            alt="CSS"
            statement="I use CSS in coding interface designs in my web projects."
          />
          <Skill
            src="Bootstrap.png"
            alt="Bootstrap"
            statement="I use Bootstrap to create responsive websites."
          />

          <Skill
            src="figma.png"
            alt="figma"
            statement="I benefit from Figma to design my project before starting coding it. I also use it to create visual materials like logos, icons etc. for my projects. I took an online course to improve my UI&UX design skills at Figma."
          />

          <Skill
            src="strapi.png"
            alt="strapi"
            statement="I have been using Strapi to get data in my blog project that I developed to gain more experience with the JAMStack approach."
          />

          <Skill
            src="heroku.png"
            alt="heroku"
            statement="I have been using Heroku to deploy the back-end of some of my
              projects."
          />
          <Skill
            src="flutter.png"
            alt="flutter"
            statement="I attended the Mustafa Akgül Free Software Winter Camp to start learning Flutter. During my part-time work at Konya Technical University Information Technologies Department, I was given simple tasks about the University's mobile application."
          />
          <Skill
            src="java.png"
            alt="java"
            statement="I started learning object-oriented programming courses in my second year of university. Then I took the Visual Programming Languages ​​course about GUI development with Java Swing."
          />
          <Skill
            src="C.png"
            alt="C"
            statement="In the first year of university, I took basic C training in
            Algorithms and Programming 1-2 lessons. In the second grade, I
                  used it in Data Structures, Algorithms lessons, and some simple
                  projects."
          />
        </Col>
      </Row>
    </Layout>
  );
}

export default Skills;
