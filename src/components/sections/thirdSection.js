import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

import classes from "@/styles/ThirdSection.module.css";
import ItemCard from "../itemCard";
import ColoredPanel from "../coloredPanel";

export default function ThirdSection({ id }) {
  return (
    <div className={classes.backgroundPanel} id={id}>
      <Container className={classes.container}>
        <Row className={classes.titleRow}>
          <Col>
            <h1 className={classes.textColor}>The best of the best</h1>
          </Col>
          <Col className={classes.signUpButton}>
            <Button variant="outline-secondary">Sign up now</Button>
          </Col>
        </Row>

        <Row className={classes.cardRow} xs={1} lg={3}>
          <Col className="d-flex justify-content-center">
            <ColoredPanel
              width="200px"
              height="200px"
              bgColor="#be185d"
              position="relative"
              left="-70px"
              top="140px"
            />
            <div className={classes.cardContainer}>
              <ItemCard
                imageName={"leftCard.jpeg"}
                title={"Title"}
                description={
                  "Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse."
                }
              />
            </div>
          </Col>

          <Col className="d-flex justify-content-center">
            <ColoredPanel
              width="160px"
              height="160px"
              bgColor="#0369A1"
              position="relative"
              left="-90px"
              top="-30px"
            />
            <div className={classes.cardContainer}>
              <ColoredPanel
                width="100px"
                height="100px"
                bgColor="#B45309"
                position="relative"
                left="100px"
                top="250px"
              />
            </div>
            <div className={classes.cardContainer}>
              <ItemCard
                imageName={"middleCard.jpeg"}
                title={"Title"}
                description={
                  "Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse."
                }
              />
            </div>
          </Col>
          <Col className="d-flex justify-content-center">
            <ColoredPanel
              width="180px"
              height="180px"
              bgColor="#15803D"
              position="relative"
              left="90px"
              top="30px"
            />
            <div className={classes.cardContainer}>
              <ColoredPanel
                width="120px"
                height="120px"
                bgColor="#A21CAF"
                position="relative"
                left="0px"
                top="270px"
              />
            </div>
            <div className={classes.cardContainer}>
              <ItemCard
                imageName={"rightCard.jpeg"}
                title={"Title"}
                description={
                  "Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse."
                }
              />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
