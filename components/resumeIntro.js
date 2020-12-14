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
        <Row className={styles.container}>
          <Col lg={10}>
            <Row className={styles.about}>
              <Col lg={12}>
                <h2>Özet</h2>
                <p>
                  Merhaba, ben Güngör Öztürk. Konya Teknik Üniversitesi
                  Bilgisayar Mühendisliği Bölümü 3.sınıf öğrencisiyim. Bugün
                  uzun zamandır hayalini kurduğum bu platformda, Betik çatısı
                  altında sizlerle buluşabildiğim için çok mutluyum. Değişen
                  zamanla birlikte bilginin değerinin de ivmelenerek arttığını
                  ve bu bilgileri sadece kendimize saklamak yerine elimizden
                  geldiğince birbirimizle paylaşarak fikir dünyalarımıza katkı
                  sağlamamız gerektiğini düşünüyorum.Bu nedenle teknoloji,
                  geldiğince birbirimizle paylaşarak fikir dünyalarımıza katkı
                  sağlamamız gerektiğini düşünüyorum.Bu nedenle
                  teknoloji,geldiğince birbirimizle paylaşarak fikir
                  dünyalarımıza katkı sağlamamız gerektiğini düşünüyorum.Bu
                  nedenle teknoloji,
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
