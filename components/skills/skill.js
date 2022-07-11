import styles from "./skill.module.css";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Skill({ src, alt, statement }) {
  return (
    <Col>
      <Row className={styles.skill}>
        <Col lg={4}>
          <Row className={styles.rowCenter}>
            <Image className={styles.logo} src={src} alt={alt} fluid />
          </Row>
        </Col>
        <Col lg={8}>
          <p className={styles.skillText}>{statement}</p>
        </Col>
      </Row>
    </Col>
  );
}

export default Skill;
