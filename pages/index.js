import Home from "../components/about/about";
import Contact from "../components/contact/contact";
import Layout from "../components/layout";
import Button from "../components/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styles from "./index.module.css";

function HomePage() {
  return (
    <Layout>
      <Row className="justify-content-center">
        <Col lg={10}>
          <Row className={styles.rowAlign}>
            <Col>
              <Home />
            </Col>
          </Row>
          <Row className={styles.rowAlign}>
            <Col lg={10}>
              <Contact />
            </Col>
          </Row>
          <Row className={styles.rowAlign}>
            <Button btnTitle="Download my Resume" href="/NewResume.pdf" />
          </Row>
        </Col>
      </Row>
    </Layout>
  );
}

export default HomePage;
