import React, { useState, useRef } from "react";
import { Container, Form, Button } from "react-bootstrap";
import emailjs from "emailjs-com"; 
import "./contact.css"; 
import Footer from "./Footer";

const Contact = () => {
  const form = useRef(); 


  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

 
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ug6ykor",
        "template_2nzd92r",
        form.current,
        "Z9OBhxcrzynPR-b6e"
      )
      .then(
        (result) => {
          console.log(result.text);

          setFormData({
            name: "",
            email: "",
            message: "",
          });
          alert("Your form has been submitted, Thank You !")
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <><Container className="contact-container">
      <div className="contact-form">
        <h1>Contact Us</h1>
        <Form ref={form} onSubmit={handleSubmit} className="mt-4">
          <Form.Group controlId="formName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required />
          </Form.Group>
          <Form.Group controlId="formEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter your email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required />
          </Form.Group>
          <Form.Group controlId="formMessage">
            <Form.Label>Message</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Enter your message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              required />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
      <div className="contact-image">
        <img src="Contact.svg" alt="Contact" />
      </div>
    </Container><Footer /></>
  );
};

export default Contact;
