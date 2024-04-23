import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './blogs.css'
import Footer from './Footer';
const Blogs = () => {

  const blogs = [
    {
      title: "10 Tips for Creating Beautiful Web Designs",
      image: "1.svg",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed commodo nisl vitae ex efficitur fringilla. Proin et urna nec ligula malesuada dignissim. Vivamus malesuada metus nec erat vestibulum, nec bibendum odio accumsan. Integer vel ante at lectus semper consequat."
    },
    {
      title: "The Importance of Responsive Design in Today's Websites",
      image: "2.svg",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed commodo nisl vitae ex efficitur fringilla. Proin et urna nec ligula malesuada dignissim. Vivamus malesuada metus nec erat vestibulum, nec bibendum odio accumsan. Integer vel ante at lectus semper consequat."
    },
    {
      title: "Tips for Creating Engaging Content for Your Blog",
      image: "3.svg",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed commodo nisl vitae ex efficitur fringilla. Proin et urna nec ligula malesuada dignissim. Vivamus malesuada metus nec erat vestibulum, nec bibendum odio accumsan. Integer vel ante at lectus semper consequat."
    },
    {
      title: "Tips for Creating Engaging Content for Your Blog",
      image: "4.svg",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed commodo nisl vitae ex efficitur fringilla. Proin et urna nec ligula malesuada dignissim. Vivamus malesuada metus nec erat vestibulum, nec bibendum odio accumsan. Integer vel ante at lectus semper consequat."
    },
    {
      title: "Tips for Creating Engaging Content for Your Blog",
      image: "5.svg",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed commodo nisl vitae ex efficitur fringilla. Proin et urna nec ligula malesuada dignissim. Vivamus malesuada metus nec erat vestibulum, nec bibendum odio accumsan. Integer vel ante at lectus semper consequat."
    },
     {
      title: "Tips for Creating Engaging Content for Your Blog",
      image: "about.svg",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed commodo nisl vitae ex efficitur fringilla. Proin et urna nec ligula malesuada dignissim. Vivamus malesuada metus nec erat vestibulum, nec bibendum odio accumsan. Integer vel ante at lectus semper consequat."
    },
    // Add more blog objects as needed
  ];

  return (
    <Container className="mt-5">
      <h1 className="mb-4">Blogs</h1>
      <Row>
        {blogs.map((blog, index) => (
          <Col key={index} md={4} className="mb-4">
            <Card>
              <Card.Img variant="top" src={blog.image} />
              <Card.Body>
                <Card.Title>{blog.title}</Card.Title>
                <Card.Text>{blog.content}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <Footer/>
    </Container>
  );
};

export default Blogs;
