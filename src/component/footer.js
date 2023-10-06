
import React from "react";
import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
  Heading,
} from "./FooterStyles";
import {BsFacebook,BsInstagram,BsTwitter,BsYoutube} from "react-icons/bs";
  
const Footer = () => {
  return (
    <Box>
      <Container>
        <Row>
        <Column>
            <Heading>Social Media</Heading>
            <FooterLink href="https://www.facebook.com/">
              <BsFacebook/>
                <span style={{ marginLeft: "10px" }}>
                  Facebook
                </span>
            </FooterLink>
            <FooterLink href="https://www.instagram.com/">
              <BsInstagram/>
                <span style={{ marginLeft: "10px" }}>
                  Instagram
                </span>
            </FooterLink>
            <FooterLink href="https://twitter.com/login?lang=en">
              <BsTwitter/>
                <span style={{ marginLeft: "10px" }}>
                  Twitter
                </span>
            </FooterLink>
            <FooterLink href="https://www.youtube.com/">
              <BsYoutube/>
                <span style={{ marginLeft: "10px" }}>
                  Youtube
                </span>
            </FooterLink>
          </Column>
          <Column>
            <Heading>About</Heading>
            <FooterLink href="/AboutUs">About Us</FooterLink>
            <FooterLink href="/ContactUs">Contact Us</FooterLink>
            <FooterLink href="/Careers">Careers</FooterLink>
          </Column>
          <Column>
            <Heading>Help & Policies</Heading>
            <FooterLink href="./PrivacyPolicy">Privacy Policy</FooterLink>
            <FooterLink href="#">Payment Security</FooterLink>
            <FooterLink href="./ReturnPolicy">Return Policy</FooterLink>
            <FooterLink href="#">Terms & Conditions</FooterLink>
          </Column>
          <Column>
            <Heading>Weather Forecast</Heading>
            <FooterLink href="https://www.accuweather.com/en/in/india-weather">Weather Forecast</FooterLink>
            <FooterLink href="https://krishi.maharashtra.gov.in/">Articals</FooterLink>
          </Column>
          
        </Row>
      </Container>
    </Box>
  );
};
export default Footer;