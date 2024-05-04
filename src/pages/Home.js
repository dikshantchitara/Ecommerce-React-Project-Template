import React from "react";
import { Container, Row, Col, Card, Carousel } from "react-bootstrap";
import "./Home.css";
import Footer from "./Footer";
import Accordion from "react-bootstrap/Accordion";
// Array of images for the carousel and cards
const images = [
  "Untitled design (1).svg",
  "Untitled design.svg",
  "Untitled design (1).png",
  "Untitled design (2).png",
  "Untitled design (3).png",
  "Untitled design (1).svg",
  "Untitled design.svg",
  "Untitled design (1).png",
  "Untitled design (2).png",
  "Untitled design (3).png",
  "Untitled design (1).svg",
  "Untitled design.svg",
];
const cardimage = [
  "01 (1).svg",
  "01 (2).svg",
  "01 (3).svg",
  "01 (4).svg",
  "01 (5).svg",
  "01 (6).svg",
  "01 (7).svg",
  "01 (8).svg",
  "01 (9).svg",
  "01 (10).svg",
  "01 (11).svg",
  "01 (12).svg",
];

const Home = () => {
  return (
    <Container>
      <h1 className="mt-5">Style Your Fashion</h1>
      <Carousel className="mb-5">
        {images.map((image, index) => (
          <Carousel.Item key={index}>
            <img className="d-block w-100" src={image} alt={`Slide ${index}`} />
          </Carousel.Item>
        ))}
      </Carousel>

      <h2 className="mt-5">Our Collections</h2>
      <Row>
        {cardimage.map((image, index) => (
          <Col key={index} xs={12} sm={6} md={4} lg={3} className="mb-4">
            <Card>
              <Card.Img variant="top" src={image} />
              <Card.Body>
                <Card.Title>Collection {index + 1}</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <button type="button">
                  Check More Latest From The Collections
                </button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      {/* Custom card feature */}
      <h2 className="mt-5">WE BELIVE CUSTOMER SATISFACTION</h2>
      <Row>
        <Col xs={14} sm={8} md={4} lg={3} className="mb-4">
          <Card className="custom-card">
            <Card.Body>
              <Card.Title>CUSTOMER REVIEWS</Card.Title>
              <Card.Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
                reprehenderit dolores quae maiores dolorum asperiores cumque ex
                quis ad amet veritatis eligendi, tempore excepturi? Iure labore
                repellendus esse aspernatur quia?
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={14} sm={8} md={4} lg={3} className="mb-4">
          <Card className="custom-card">
            <Card.Body>
              <Card.Title>CUSTOMER SATISFACTION</Card.Title>
              <Card.Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
                reprehenderit dolores quae maiores dolorum asperiores cumque ex
                quis ad amet veritatis eligendi, tempore excepturi? Iure labore
                repellendus esse aspernatur quia?
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={14} sm={8} md={4} lg={3} className="mb-4">
          <Card className="custom-card">
            <Card.Body>
              <Card.Title>CUSTOMER RATINGS</Card.Title>
              <Card.Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
                reprehenderit dolores quae maiores dolorum asperiores cumque ex
                quis ad amet veritatis eligendi, tempore excepturi? Iure labore
                repellendus esse aspernatur quia?
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={14} sm={8} md={4} lg={3} className="mb-4">
          <Card className="custom-card">
            <Card.Body>
              <Card.Title>FREE DELIVERY</Card.Title>
              <Card.Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
                reprehenderit dolores quae maiores dolorum asperiores cumque ex
                quis ad amet veritatis eligendi, tempore excepturi? Iure labore
                repellendus esse aspernatur quia?
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <div className="testimonials">
          <h2 className="text-center">Our Customer Reviews </h2>
          <Carousel fade>
            <Carousel.Item>
              <div className="testimonial-content">
                <img
                  className="d-block mx-auto testimonial-img"
                  src="https://via.placeholder.com/150"
                  alt="First slide"
                />
                <p>
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam malesuada est non dui posuere, a faucibus mauris
                  blandit."
                </p>
                <p className="customer-name">- John Doe</p>
                <p className="rating">⭐️⭐️⭐️⭐️⭐️</p>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="testimonial-content">
                <img
                  className="d-block mx-auto testimonial-img"
                  src="https://via.placeholder.com/150"
                  alt="First slide"
                />
                <p>
                  "Vestibulum consectetur nunc in arcu dapibus, vel mattis eros
                  placerat. Praesent tristique, orci nec sodales aliquet, sapien
                  metus tincidunt ante."
                </p>
                <p className="customer-name">- Jane Doe</p>
                <p className="rating">⭐️⭐️⭐️⭐️</p>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="testimonial-content">
                <img
                  className="d-block mx-auto testimonial-img"
                  src="https://via.placeholder.com/150"
                  alt="First slide"
                />
                <p>
                  "Fusce quis fringilla urna. Sed at aliquam mi. Proin eleifend
                  dolor sed justo dapibus, non cursus nisi pellentesque."
                </p>
                <p className="customer-name">- Michael Smith</p>
                <p className="rating">⭐️⭐️⭐️</p>
              </div>
            </Carousel.Item>
          </Carousel>
        </div>
      </Row>
      <Row>
        <Accordion>
          <Accordion.Item eventKey="0">
            <Accordion.Header>Accordion Item #1</Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Accordion Item #2</Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>Accordion Item #3</Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Row>
      <Footer />
    </Container>
  );
};

export default Home;
