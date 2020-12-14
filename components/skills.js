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
                <h2>Yeterlilikler</h2>
              </Col>
            </Row>

            <Row className={styles.skill}>
              <Col md={4}>
                <Row className={styles.rowCenter}>
                  <Image className={styles.logo} src="js.png" fluid />
                </Row>
              </Col>
              <Col md={8}>
                <p className={styles.rowCenter}>
                  Geliştirdiğim projelerimi daha dinamik hale getirmek için
                  kullanıyorum. Kütüphanelerinde kendimi geliştirmeye
                  çalışıyorum
                </p>
              </Col>
            </Row>

            <Row className={styles.skill}>
              <Col md={4}>
                <Row className={styles.rowCenter}>
                  <Image className={styles.logo} src="react.png" fluid />
                </Row>
              </Col>
              <Col md={8}>
                <p className={styles.rowCenter}>
                  Daha etkileyici arayüzler kodlamak için Next.js ile birlikte
                  öğrenmeye başladım.
                </p>
              </Col>
            </Row>

            <Row className={styles.skill}>
              <Col md={4}>
                <Row className={styles.rowCenter}>
                  <Image className={styles.logo} src="nextJs.png" fluid />
                </Row>
              </Col>
              <Col md={8}>
                <p className={styles.rowCenter}>
                  JAMStack yaklaşımıyla bir blog geliştirmek ve React.js
                  hakkında daha fazla tecrübe kazanmak için kullanmaya başladım
                  şuan görüntülediğiniz bu site 2. Next.js projem
                </p>
              </Col>
            </Row>

            <Row className={styles.skill}>
              <Col md={4}>
                <Row className={styles.rowCenter}>
                  <Image className={styles.logo} src="HTML.png" fluid />
                </Row>
              </Col>
              <Col md={8}>
                <p className={styles.rowCenter}>
                  Uzun zamandır geliştirdiğim birçok web projesinde ve
                  üniversite 3.sınıfta aldığım seçmeli web programlama dersinde
                  kullandım.
                </p>
              </Col>
            </Row>

            <Row className={styles.skill}>
              <Col md={4}>
                <Row className={styles.rowCenter}>
                  <Image className={styles.logo} src="CSS.png" fluid />
                </Row>
              </Col>
              <Col md={8}>
                <p className={styles.rowCenter}>
                  Web projelerimde arayüz tasrımlarımı kodlarken kullanıyorum.
                </p>
              </Col>
            </Row>

            <Row className={styles.skill}>
              <Col md={4}>
                <Row className={styles.rowCenter}>
                  <Image className={styles.logo} src="Bootstrap.png" fluid />
                </Row>
              </Col>
              <Col md={8}>
                <p className={styles.rowCenter}>
                  Web projelerimde responsive arayüzler geliştirmek için
                  bootstrap framework'ünü sıklıkla kullanıyorum.
                </p>
              </Col>
            </Row>

            <Row className={styles.skill}>
              <Col md={4}>
                <Row className={styles.rowCenter}>
                  <Image className={styles.logo} src="figma.png" fluid />
                </Row>
              </Col>
              <Col md={8}>
                <p className={styles.rowCenter}>
                  Projelerimi kodlamaya başlamadan önce tasarlarken ve
                  projelerimin bazı modüllerindeki logo, icon vb görsel
                  materyalleri üretirken Figma'yı kullanıyorum.
                </p>
              </Col>
            </Row>

            <Row className={styles.skill}>
              <Col md={4}>
                <Row className={styles.rowCenter}>
                  <Image className={styles.logo} src="reactNative.png" fluid />
                </Row>
              </Col>
              <Col md={8}>
                <p className={styles.rowCenter}>
                  Tek kod tabanından hem android hem de ios platformlara
                  uygulama geliştirmek amacıyla öğrenmeye başladım. Hala öğrenme
                  aşamasındayım.
                </p>
              </Col>
            </Row>

            <Row className={styles.skill}>
              <Col md={4}>
                <Row className={styles.rowCenter}>
                  <Image className={styles.logo} src="strapi.png" fluid />
                </Row>
              </Col>
              <Col md={8}>
                <p className={styles.rowCenter}>
                  JAMStack kavramı hakkında daha fazla tecrübe edinmek amacıyla
                  geliştirdiğim blog projemde verileri çekmek için kullandım.
                </p>
              </Col>
            </Row>

            <Row className={styles.skill}>
              <Col md={4}>
                <Row className={styles.rowCenter}>
                  <Image className={styles.logo} src="heroku.png" fluid />
                </Row>
              </Col>
              <Col md={8}>
                <p className={styles.rowCenter}>
                  Bazı projelerimin back-end'inin deploy edilmesinde kullandım.
                </p>
              </Col>
            </Row>

            <Row className={styles.skill}>
              <Col md={4}>
                <Row className={styles.rowCenter}>
                  <Image className={styles.logo} src="flutter.png" fluid />
                </Row>
              </Col>
              <Col md={8}>
                <p className={styles.rowCenter}>
                  Katıldığım Mustafa Akgül Özgür Yazılım Kış Kampında öğrenmeye
                  başladım sonrasında yarı zamanlı olarak çalışırken bir flutter
                  projesinde küçük çaplı görevler aldım.
                </p>
              </Col>
            </Row>

            <Row className={styles.skill}>
              <Col md={4}>
                <Row className={styles.rowCenter}>
                  <Image className={styles.logo} src="java.png" fluid />
                </Row>
              </Col>
              <Col md={8}>
                <p className={styles.rowCenter}>
                  Üniversite 2.sınıfta nesneye yönelik programlama dersinde
                  öğrenmeye başladım. Sonrasında ise Java Swing ile GUI
                  geliştirme üzerine Görsel Programlama Dilleri dersi aldım.
                </p>
              </Col>
            </Row>

            <Row className={styles.skill}>
              <Col md={4}>
                <Row className={styles.rowCenter}>
                  <Image className={styles.logo} src="C.png" fluid />
                </Row>
              </Col>
              <Col md={8}>
                <p className={styles.rowCenter}>
                  Üniversite 1.sınıfta Algotitma ve Programlama 1-2 derslerinde
                  temel C eğitimi aldım, 2. sınıfta Veri Yapıları, Algoritmalar
                  derslerinde ve bazı küçük projelerde kullandım.
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
