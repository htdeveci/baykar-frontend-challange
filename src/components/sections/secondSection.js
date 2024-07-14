import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import SecondSectionSubGroup from "./secondSectionSubGroup";

export default function SecondSection({ id }) {
  return (
    <Container id={id}>
      <Row xs={1} md={3}>
        <Col>
          <SecondSectionSubGroup
            image={"left.png"}
            title={"Nibh viverra"}
            text={
              "Sit bibendum donec dolor fames neque vulputate non sit aliquam. Consequat turpis natoque leo, massa."
            }
          />
        </Col>

        <Col>
          <SecondSectionSubGroup
            image={"middle.png"}
            title={"Cursus amet"}
            text={
              "Sit bibendum donec dolor fames neque vulputate non sit aliquam. Consequat turpis natoque leo, massa."
            }
          />
        </Col>

        <Col>
          <SecondSectionSubGroup
            image={"right.png"}
            title={"Ipsum fermentum"}
            text={
              "Sit bibendum donec dolor fames neque vulputate non sit aliquam. Consequat turpis natoque leo, massa."
            }
          />
        </Col>
      </Row>
    </Container>
  );
}
