import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/My project.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
// import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import navIcon4 from '../assets/img/nav-icon4.svg';

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" style={{width:"15%"}}/>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/sudhanshu-srivastava-1a17b51b7/"><img src={navIcon1} alt="Icon" /></a>
              <a href="https://github.com/sudh-202"><img src={navIcon4} alt="Icon" /></a>
              <a href="https://www.instagram.com/sudh0074/"><img src={navIcon3} alt="Icon" /></a>
            </div>
            <p>Copyright 2022,Sudhanshu. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
