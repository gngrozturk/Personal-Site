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
                <h2>Hakkımda</h2>
                <p>
                  Merhaba, ben Güngör Öztürk. Konya Teknik Üniversitesi
                  Bilgisayar Mühendisliği Bölümü 3.sınıf öğrencisiyim. Bugün
                  uzun zamandır hayalini kurduğum bu platformda, Betik çatısı
                  altında sizlerle buluşabildiğim için çok mutluyum. Değişen
                  zamanla birlikte bilginin değerinin de ivmelenerek arttığını
                  ve bu bilgileri sadece kendimize saklamak yerine elimizden
                  geldiğince birbirimizle paylaşarak fikir dünyalarımıza katkı
                  sağlamamız gerektiğini düşünüyorum.Bu nedenle teknoloji,
                  yazılım ve benzeri konularda yapacağım araştırmaların
                  sonucunda öğrendiklerimi burada sizlerle paylaşmaya
                  çalışacağım. Birlikte çok şey öğreneceğimize inandığım bu
                  yolda bugün ilk adımlarımızı atarken adımlarımızın zamanla
                  daha da sıklaşacağını ümit ediyor ve bana eşlik ettiğiniz için
                  teşekkür ediyorum.
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
