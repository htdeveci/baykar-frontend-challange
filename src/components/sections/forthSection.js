import Card from "react-bootstrap/Card";
import { FaRegPlayCircle } from "react-icons/fa";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

import classes from "@/styles/ForthSection.module.css";
import ListItemWithIcon from "../listItemWithIcon";
import ImageWithWindowFrame from "../imageWithWindowFrame";

export default function ForthSection({ id }) {
  return (
    <Container>
      <Card className={classes.cardContainer} id={id}>
        <Card.Body className={classes.cardBody}>
          <div className={classes.signUpDiv}>
            <Card.Title style={{ fontSize: 50, marginBottom: 20 }}>
              Why join us
            </Card.Title>

            <ul className={classes.list}>
              <ListItemWithIcon
                imageName="check.png"
                imageClass={classes.listIcon}
              >
                Est et in pharetra magna adipiscing ornare aliquam.
              </ListItemWithIcon>

              <ListItemWithIcon
                imageName="check.png"
                imageClass={classes.listIcon}
              >
                Tellus arcu sed consequat ac velit ut eu blandit.
              </ListItemWithIcon>

              <ListItemWithIcon
                imageName="check.png"
                imageClass={classes.listIcon}
              >
                Ullamcorper ornare in et egestas dolor orci.
              </ListItemWithIcon>
            </ul>

            <Button variant="outline-primary">Sign up now</Button>
          </div>

          <div>
            <ImageWithWindowFrame
              imageName="videoImage.jpeg"
              iconOnImage={
                <FaRegPlayCircle
                  size={"10rem"}
                  style={{
                    position: "absolute",
                    top: "calc(50% - 5rem)",
                    left: "calc(50% - 5rem)",
                  }}
                  color="#000000bd"
                />
              }
            />
          </div>
        </Card.Body>
      </Card>
    </Container>
  );
}
