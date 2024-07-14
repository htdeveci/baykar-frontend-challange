import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

import classes from "@/styles/Header.module.css";

export default function Header() {
  return (
    <Navbar className={classes.navbar} expand="lg">
      <Container style={{ marginTop: 0 }}>
        <Navbar.Brand href="/" className={classes.brandText}>
          Collers
        </Navbar.Brand>

        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Nav>
            <Nav.Link href="#products">Products</Nav.Link>
            <Nav.Link href="#solutions">Solutions</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            <Nav.Link href="#resources">Resources</Nav.Link>
            <Nav.Link href="#logIn">Log In</Nav.Link>
            <Nav.Link
              href="#signUp"
              id="signUpButton"
              className={classes.signUpButton}
            >
              Sign up now
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
