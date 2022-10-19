import React from "react";
import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
  Heading,
} from "./FooterStyles";
  
const FooterPage = () => {
  return (
    <Box>
      <h1 style={{ color: "green", 
                   textAlign: "center", 
                   marginTop: "-90px" }}>
      </h1>
      <Container>
        <Row>
          <Column>
            <Heading>About Us</Heading>
            <FooterLink href="#">Aim</FooterLink>
            <FooterLink href="#">Vision</FooterLink>
            <FooterLink href="#">Testimonials</FooterLink>
          </Column>
          <Column>
            <Heading>Social Media</Heading>
            <FooterLink href="#">
              <i className="fab fa-instagram">
                <span style={{ marginLeft: "10px" }}>
                  Instagram
                </span>
              </i>
            </FooterLink>
          </Column>
        </Row>
      </Container>
    </Box>
  );
};
export default FooterPage;