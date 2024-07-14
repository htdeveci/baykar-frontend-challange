import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Stack from "react-bootstrap/Stack";
import FooterLinkButton from "./footerLinkButton";

import classes from "@/styles/Footer.module.css";

export default function Footer() {
  const firstCol = [
    { id: 1, title: "Product" },
    { id: 2, title: "Pricing" },
    { id: 3, title: "Overview" },
    { id: 4, title: "Browse" },
    { id: 5, title: "Accessibility" },
    { id: 6, title: "Five" },
  ];

  const secondCol = [
    { id: 1, title: "Solutions" },
    { id: 2, title: "Brainstorming" },
    { id: 3, title: "Ideation" },
    { id: 4, title: "Wireframing" },
    { id: 5, title: "Research" },
    { id: 6, title: "Design" },
  ];

  const thirdCol = [
    { id: 1, title: "Support" },
    { id: 2, title: "Contact Us" },
    { id: 3, title: "Developers" },
    { id: 4, title: "Documentation" },
    { id: 5, title: "Integrations" },
    { id: 6, title: "Reports" },
  ];

  const stackGap = 4;

  const linkClickHandler = (title) => {
    console.log(title);
  };

  return (
    <div className={classes.backgroundPanel}>
      <Container>
        <Row className={classes.buttonsRow} xs={1} lg={4}>
          <Col>
            <Stack gap={stackGap}>
              {firstCol.map((element) => {
                return (
                  <FooterLinkButton
                    key={element.id}
                    title={element.title}
                    onClick={linkClickHandler.bind(this, element.title)}
                  />
                );
              })}
            </Stack>
          </Col>

          <Col>
            <Stack gap={stackGap}>
              {secondCol.map((element) => {
                return (
                  <FooterLinkButton
                    key={element.id}
                    title={element.title}
                    onClick={linkClickHandler.bind(this, element.title)}
                  />
                );
              })}
            </Stack>
          </Col>

          <Col>
            <Stack gap={stackGap}>
              {thirdCol.map((element) => {
                return (
                  <FooterLinkButton
                    key={element.id}
                    title={element.title}
                    onClick={linkClickHandler.bind(this, element.title)}
                  />
                );
              })}
            </Stack>
          </Col>

          <Col>
            <Stack gap={stackGap}>
              <text>Get the App</text>
              <FooterLinkButton
                imageName="appStore.png"
                onClick={linkClickHandler.bind(this, "App Store")}
              />
              <FooterLinkButton
                imageName="googlePlay.png"
                onClick={linkClickHandler.bind(this, "Google Play")}
              />

              <text>Follow Us</text>
              <div className={classes.shareIconsContainer}>
                <FooterLinkButton
                  imageName="youtube.png"
                  onClick={linkClickHandler.bind(this, "Youtube")}
                />
                <FooterLinkButton
                  imageName="facebook.png"
                  onClick={linkClickHandler.bind(this, "Facebook")}
                />
                <FooterLinkButton
                  imageName="twitter.png"
                  onClick={linkClickHandler.bind(this, "Twitter")}
                />
                <FooterLinkButton
                  imageName="instagram.png"
                  onClick={linkClickHandler.bind(this, "Instagram")}
                />
                <FooterLinkButton
                  imageName="linkedin.png"
                  onClick={linkClickHandler.bind(this, "LinkedIn")}
                />
              </div>
            </Stack>
          </Col>
        </Row>

        <Row className={classes.copyrightRow}>
          <Col>
            <text>Collers @ 2023. All rights reserved.</text>
          </Col>

          <Col>
            <div className={classes.lastLowButtonsContainer}>
              <FooterLinkButton
                title="Terms"
                onClick={linkClickHandler.bind(this, "Terms")}
              />
              <FooterLinkButton
                title="Privacy"
                onClick={linkClickHandler.bind(this, "Privacy")}
              />
              <FooterLinkButton
                title="Contact"
                onClick={linkClickHandler.bind(this, "Contact")}
              />
              <FooterLinkButton
                imageName="language.png"
                title="EN"
                onClick={linkClickHandler.bind(this, "Change Language")}
              />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
