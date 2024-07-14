import Image from "react-bootstrap/Image";

import classes from "@/styles/ListItemWithIcon.module.css";

export default function ListItemWithIcon({ imageName, imageClass, children }) {
  return (
    <div className={classes.container}>
      <Image src={imageName} className={imageClass} />
      {children}
    </div>
  );
}
