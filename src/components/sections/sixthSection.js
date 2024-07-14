import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Stack from "react-bootstrap/Stack";

import classes from "@/styles/SixthSection.module.css";
import ListItemWithIcon from "../listItemWithIcon";
import ImageWithWindowFrame from "../imageWithWindowFrame";

export default function SixthSection({ id }) {
  return (
    <Container id={id}>
      <Row className={classes.textRow}>
        <h1>Grow your collection</h1>
        <p>
          Enim neque massa porta adipiscing elit. Sem libero id faucibus nibh
          amet dictum pellentesque sed. Eu non turpis risus odio sapien, fames
          sit rhoncus. Nec magna sed interdum sit purus tellus. Et volutpat
          proin neque placerat at bibendum quam tellus.
        </p>
      </Row>

      <Row className={classes.imageRow}>
        <Col className={classes.listCol}>
          <Stack gap={4} className={classes.listStack}>
            <ListItemWithIcon imageName={"6-1.png"} imageClass={classes.image}>
              Bibendum tellus
            </ListItemWithIcon>
            <ListItemWithIcon imageName={"6-2.png"} imageClass={classes.image}>
              Cras eget
            </ListItemWithIcon>
            <ListItemWithIcon imageName={"6-3.png"} imageClass={classes.image}>
              Dolor pharetra
            </ListItemWithIcon>
            <ListItemWithIcon imageName={"6-4.png"} imageClass={classes.image}>
              Amet, fringilla
            </ListItemWithIcon>
            <ListItemWithIcon imageName={"6-5.png"} imageClass={classes.image}>
              Amet nibh
            </ListItemWithIcon>
            <ListItemWithIcon imageName={"6-6.png"} imageClass={classes.image}>
              Sed velit
            </ListItemWithIcon>
          </Stack>
        </Col>

        <Col className={classes.imageCol}>
          <div className={classes.backFrame}>
            <ImageWithWindowFrame imageName="framed-back.png" />
          </div>
          <div className={classes.frontFrame}>
            <ImageWithWindowFrame imageName="framed-middle.png" />
          </div>
          <div className={classes.frontUnrame}>
            <Image src="unframed-front.png" width={250} />
          </div>
        </Col>
      </Row>
    </Container>
  );
}
