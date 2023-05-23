import Link from "next/link";
import styles from "./navigation.module.css";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
function Navigation() {
  return (
    <div className={styles.navigation}>
      <Navbar
        collapseOnSelect
        expand="lg"
        className={styles.navigation}
        variant="neon"
      >
        <Navbar.Brand className={styles.logo} href="/">
          Güngör Öztürk
        </Navbar.Brand>
        <Navbar.Toggle
          className={styles.button}
          aria-controls="responsive-navbar-nav"
        />
        <Container>
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link className={styles.links} href="/">
                HOME
              </Nav.Link>
              <Nav.Link className={styles.links} href="/skills">
                SKILLS
              </Nav.Link>
               <Nav.Link className={styles.links} target="_blank" href="https://betik-blog.vercel.app/yazarlar/gungorozturk">
                BLOG
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Navigation;
