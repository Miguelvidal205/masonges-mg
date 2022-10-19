import React from "react";
import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
  Heading,
} from "./FooterStyles";
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';

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
            <Heading>Familia 13 20</Heading>
            <FooterLink href="https://instagram.com/masones.argentina?igshid=YmMyMTA2M2Y=">Malditos Santos MC</FooterLink>
            <FooterLink href="https://www.facebook.com/JinetesDelAsfaltoMCBsAs/">Jinetes Del Asfalto MC</FooterLink>
          </Column>
          <Column>
            <Heading>Redes sociales</Heading>
            <FooterLink href="https://instagram.com/masones.argentina?igshid=YmMyMTA2M2Y=">
              <i className="fab fa-instagram">
                <span style={{ marginLeft: "10px" }}>
                  <InstagramIcon /> Instagram
                </span>
              </i>
            </FooterLink>
            <FooterLink href="https://www.facebook.com/Masones-MG-Argentina-112099304708430">
              <i className="fab fa-facebook">
                <span style={{ marginLeft: "10px" }}>
                  <FacebookIcon /> Facebook
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