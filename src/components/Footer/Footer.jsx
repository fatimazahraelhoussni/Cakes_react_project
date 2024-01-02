import React from "react";
import { ListGroupItem,ListGroup,Container,Row,Col } from "reactstrap";
import { Link } from "react-router-dom";
import logo from "../../assets/images/Pink_Cute_Cake___Bakery_Logo-removebg-preview.png";
import "../../styles/footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg='3' md='6'sm='6'>
          <div className="logo1 footer__logo text-start">
           <img src={logo} alt="logo" className="logo_pink"/>
           <h5 ></h5>
           <span>Your gourmet destination for exquisite sweet creations.</span>
          </div>
          </Col>
          <Col lg='3' md='6' sm='6'>
          <h5 className="footer__title mb-3">Delivery Time</h5>
          <ListGroup className="deliver_item-list">
          <ListGroupItem className="delivery__time-item border-0 ps-0">
          <span>Sunday - Thersday</span>
            <p>10:00am - 11:00pm</p>
          </ListGroupItem>
          <ListGroupItem className="delivery__time-item border-0 ps-0">
          <span>Friday - Saturday</span>
            <p>Off day</p>
          </ListGroupItem>
        </ListGroup>
          </Col>
          <Col lg='3' md='6'sm='6'>
          <h5 className="footer__title mb-3">Contact</h5>
          <ListGroup className="deliver_item-list">
          <ListGroupItem className="delivery__time-item border-0 ps-0">
          <span>Location: Hay Qods, Morocco</span>
           
          </ListGroupItem>
          <ListGroupItem className="delivery__time-item border-0 ps-0">
          <span>Fhone: 01712345678</span>
           
          </ListGroupItem>
          <ListGroupItem className="delivery__time-item border-0 ps-0">
          <span>Email: example@gmail.com</span>
            
          </ListGroupItem>
        </ListGroup>
          </Col>
          <Col lg='3' md='6'sm='6'>
          <h5 className="footer__title mb-3">Newsletter</h5>
          <p>Subscribe our newsletter</p>
          <div className="newsletter">
           <input type="email" placeholder="Enter your email" />
           
           <span>
            <i className="ri-send-plane-line"></i>
            </span>
          </div>
          </Col>
        </Row>
        <Row className="mt-5">
          <Col lg='6' md='6' className="copyright__text">
            <p>CopyRight-2024,website made by fatima zahra elhoussni.All Rights Reserved</p>
          </Col>
          <Col lg='6' md='6'>
            <div className="social__links d-flex align-items-center gap-4 justify-content-end">
              <p className="m-0">Follow:</p>
              <span>{" "}
                <Link to='#'><i className="ri-facebook-line"></i></Link>
                {" "}</span>
              <span>{" "}<Link to='#'><i className="ri-github-line"></i></Link>{" "}</span>
              <span><Link to='#'><i className="ri-linkedin-line"></i></Link></span>
            </div>
          </Col>

        </Row>
      </Container>
      
      
    </footer>
  );
};

export default Footer;
