import Card from "react-bootstrap/Card";

import classes from "@/styles/ImageWithWindowFrame.module.css";

export default function ImageWithWindowFrame({ imageName, iconOnImage }) {
  return (
    <Card>
      <Card.Header style={{ borderBottom: "none" }}>
        <div className={classes.dotContainer}>
          <span
            className={classes.dot}
            style={{ backgroundColor: "#E11D48" }}
          ></span>
          <span
            className={classes.dot}
            style={{ backgroundColor: "#FBBF24" }}
          ></span>
          <span
            className={classes.dot}
            style={{ backgroundColor: "#22C55E" }}
          ></span>
        </div>
      </Card.Header>

      <Card.Body style={{ padding: "5px", paddingTop: 0 }}>
        <Card.Img
          src={imageName}
          style={{
            maxHeight: "16rem",
            objectFit: "cover",
            borderTopLeftRadius: 0,
            borderTopRightRadius: 0,
          }}
        />
        {iconOnImage}
      </Card.Body>
    </Card>
  );
}
