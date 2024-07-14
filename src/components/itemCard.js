import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { FiShoppingCart } from "react-icons/fi";

import classes from "@/styles/ItemCard.module.css";

export default function ItemCard({ imageName, title, description }) {
  return (
    <Card className={classes.cardContainer}>
      <Card.Img
        variant="top"
        src={imageName}
        style={{ height: "200px", objectFit: "cover" }}
      />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <div className="d-grid">
          <Button variant="outline-secondary" className={classes.iconButton}>
            <FiShoppingCart size={20} />
            Buy Now
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}
