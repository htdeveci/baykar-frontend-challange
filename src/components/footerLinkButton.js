import Image from "react-bootstrap/Image";

import classes from "@/styles/FooterLinkButton.module.css";

export default function FooterLinkButton({
  imageName = null,
  title = null,
  onClick,
}) {
  return (
    <div>
      {imageName && title && (
        <div onClick={onClick} className={classes.iconWithTitle}>
          <Image src={imageName} />
          {title}
        </div>
      )}

      {imageName && !title && (
        <Image
          src={imageName}
          className={classes.imageButton}
          onClick={onClick}
        />
      )}

      {!imageName && title && (
        <a className={classes.link} onClick={onClick}>
          {title}
        </a>
      )}
    </div>
  );
}
