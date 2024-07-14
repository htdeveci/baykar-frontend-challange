import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";

import classes from "@/styles/CommentCard.module.css";

export default function CommentCard({ iconName, title, message, footer }) {
  return (
    <Card className={classes.cardContainer}>
      <Card.Title>
        <Image
          src={iconName}
          height={26}
          style={{ marginRight: 6, marginBottom: 4 }}
        />
        {title}
      </Card.Title>
      <Card.Body className={classes.messageContainer}>{message}</Card.Body>
      <Card.Footer className={classes.footerContainer}>{footer}</Card.Footer>
    </Card>
  );
}
