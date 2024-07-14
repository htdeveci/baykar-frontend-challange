import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import ButtonToolbar from "react-bootstrap/ButtonToolbar";
import Image from "react-bootstrap/Image";
import { FaRegPlayCircle } from "react-icons/fa";

import classes from "@/styles/FirstSection.module.css";
import ColoredPanel from "../coloredPanel";

export default function FirstSection({ id }) {
  return (
    <Container id={id}>
      <Row>
        <Col className={[classes.textCol, "centerText"]}>
          <Row>
            <h1 className={classes.caption}>Collectible Sneakers</h1>
          </Row>

          <Row>
            <p>
              Sit elit feugiat turpis sed integer integer accumsan turpis. Sed
              suspendisse nec lorem mauris. Pharetra, eu imperdiet ipsum
              ultrices amet.
            </p>
          </Row>

          <Row>
            <ButtonToolbar className={classes.buttonToolbar}>
              <ButtonGroup className={classes.buttonGroup}>
                <Button variant="outline-primary" className={classes.buttons}>
                  Sign up now
                </Button>
              </ButtonGroup>
              <ButtonGroup className={classes.buttonGroup}>
                <Button variant="link" className={classes.iconButton}>
                  <FaRegPlayCircle size={20} className={classes.icon} />
                  Watch Demo
                </Button>
              </ButtonGroup>
            </ButtonToolbar>
          </Row>
        </Col>

        <Col className={classes.imageCol}>
          <ColoredPanel width={"367px"} height={"372px"} bgColor={"#fbbf24"}>
            <Image src="sneaker.png" fluid className={classes.sneakerImage} />
          </ColoredPanel>
        </Col>
      </Row>
    </Container>
  );
}
