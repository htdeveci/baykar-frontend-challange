import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {
  FaRegArrowAltCircleLeft,
  FaRegArrowAltCircleRight,
} from "react-icons/fa";

import classes from "@/styles/FifthSection.module.css";
import CommentCard from "../commentCard";
import ColoredPanel from "../coloredPanel";
import HorizontalSwipeController from "../horizontalSwipeController";

export default function FifthSection({ id }) {
  const [screenWidth, setScreenWidth] = useState();

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const [comments, setComments] = useState([
    {
      id: 1,
      iconName: "kontrasttr.png",
      title: "kontrasttr",
      message:
        "Amet morbi enim sodales quis dui, in habitant pharetra. Risus id fringilla sed adipiscing volutpat sit varius turpis. Sed pretium se.",
      footer: <div>this is footer 22</div>,
    },
    {
      id: 2,
      iconName: "zoomerr.png",
      title: "Zoomerr",
      message:
        "Non risus viverra enim, quis. Eget vitae arcu vivamus sit tellus, viverra turpis lorem. Varius a turpis urna id porttitor.",
      footer: <div>this is footer</div>,
    },

    {
      id: 3,
      iconName: "shells.png",
      title: "SHELLS",
      message:
        "Aliquet ridiculus mi porta habitant vulputate rhoncus, mattis amet enim. Sit purus venenatis velit semper lectus sed ornare quam nulla.",
      footer: <div>this is footer 22</div>,
    },
    {
      id: 4,
      iconName: "artvenue.png",
      title: "ArtVenue",
      message:
        "A eget sed posuere dui risus habitasse mauris. Venenatis aliquet id ultrices a lacus. Pretium vehicula pretium posuere justo sed.",
      footer: <div>this is footer 22</div>,
    },
    {
      id: 5,
      iconName: "waves.png",
      title: "WAVES",
      message:
        "Magna egestas aliquet ut integer non. Sed diam enim nibh sit. Aliquam laoreet aenean metus nibh eu scelerisque.",
      footer: <div>this is footer 22</div>,
    },
  ]);

  const leftArrowClickHandler = () => {
    setComments((prevState) => {
      const newState = Array.from(prevState);
      const lastComment = newState.pop();
      newState.unshift(lastComment);
      return newState;
    });
  };

  const rightArrowClickHandler = () => {
    setComments((prevState) => {
      const newState = Array.from(prevState);
      const firstComment = newState.shift();
      newState.push(firstComment);
      return newState;
    });
  };

  return (
    <Container id={id}>
      <Row className={classes.titleRow}>
        <Col>
          <h1>Because they love us</h1>
        </Col>

        {screenWidth > 992 && (
          <Col className="d-flex justify-content-end">
            <div className={classes.arrowContainer}>
              <FaRegArrowAltCircleLeft
                size={30}
                color="#78350F"
                style={{ cursor: "pointer" }}
                onClick={leftArrowClickHandler}
              />
              <FaRegArrowAltCircleRight
                size={30}
                color="#78350F"
                style={{ cursor: "pointer" }}
                onClick={rightArrowClickHandler}
              />
            </div>
          </Col>
        )}
      </Row>

      <div style={{ position: "relative" }}>
        <ColoredPanel
          width="100%"
          top="-40px"
          height="300px"
          bgColor="#FDE68A"
          position="absolute"
          borderRadius="5px"
        />
      </div>

      <HorizontalSwipeController
        onSwipeLeft={rightArrowClickHandler}
        onSwipeRight={leftArrowClickHandler}
      >
        <Row className={classes.commentsContainer}>
          {comments.map((comment) => {
            return (
              <Col key={comment.id}>
                <CommentCard
                  iconName={comment.iconName}
                  title={comment.title}
                  message={comment.message}
                  footer={comment.footer}
                />
              </Col>
            );
          })}
        </Row>
      </HorizontalSwipeController>
    </Container>
  );
}
