import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";

import classes from "@/styles/SeventhSection.module.css";
import Ellipse from "../ellipse";

export default function SeventhSection() {
  const ellipses = [
    { id: 1, size: 24, top: 300, left: 250 },
    { id: 2, size: 24, top: 500, left: 330 },
    { id: 3, size: 16, top: 450, left: 370 },
    { id: 4, size: 30, top: 180, left: 350 },
    { id: 5, size: 25, top: 460, left: 580 },
    { id: 6, size: 16, top: 330, left: 894 },
    { id: 7, size: 16, top: 70, left: 410 },
    { id: 8, size: 24, top: 350, left: 770 },
    { id: 9, size: 24, top: 485, left: 915 },
    { id: 10, size: 32, top: 225, left: 150 },
  ];

  return (
    <div className={classes.backgroundPanel}>
      <Container className={classes.container}>
        <Image src="worldMap.png" />
        <div className={classes.centeredTextContainer}>
          <h1 style={{ fontWeight: "bold", fontSize: "5rem" }}> 11,658,467</h1>
          <h2 style={{ fontWeight: "bold", fontSize: "2.5rem" }}>
            Shoes Collected
          </h2>
        </div>

        <div>
          {ellipses.map((ellipse) => {
            return (
              <Ellipse
                key={ellipse.id}
                size={ellipse.size}
                top={ellipse.top}
                left={ellipse.left}
              />
            );
          })}
        </div>
      </Container>
    </div>
  );
}
