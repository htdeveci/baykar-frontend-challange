import Image from "react-bootstrap/Image";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import Card from "react-bootstrap/Card";
import { useState } from "react";

import classes from "@/styles/Ellipse.module.css";

const TooltipCard = ({ children }) => {
  return (
    <OverlayTrigger
      placement="top"
      overlay={
        <Tooltip className={classes.tooltipContainer}>
          <Card className={classes.cardContainer}>
            <Card.Img src="shoes.png" />
            <Card.Footer>
              Emma Simpson collected one pair of Cool Shoes.
            </Card.Footer>
          </Card>
        </Tooltip>
      }
    >
      {children}
    </OverlayTrigger>
  );
};

export default function Ellipse({ size, top, left }) {
  const [ellipseImageName, setEllipseImageName] = useState("ellipse.png");

  const mouseEnterHandler = () => {
    setEllipseImageName("ellipseHover.png");
  };

  const mouseLeaveHandler = () => {
    setEllipseImageName("ellipse.png");
  };

  return (
    <>
      <div className={classes.ellipse} style={{ top: top, left: left }}>
        <TooltipCard>
          <Image
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
            src={ellipseImageName}
            width={size}
          />
        </TooltipCard>
      </div>
    </>
  );
}
