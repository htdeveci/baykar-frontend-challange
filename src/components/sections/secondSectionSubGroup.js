import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";

import classes from "@/styles/SecondSectionSubGroup.module.css";

export default function SecondSectionSubGroup({ image, title, text }) {
  return (
    <Container className={classes.container}>
      <Row>
        <Image src={image} style={{ height: "100px", width: "auto" }} />
      </Row>
      <Row>
        <h4>{title}</h4>
      </Row>
      <Row>
        <p>{text}</p>
      </Row>
    </Container>
  );
}
