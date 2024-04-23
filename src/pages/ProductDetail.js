import React, { useState } from "react";
import { useParams } from "react-router-dom";
import "./ProductDetails.css"; // Import CSS file for styling
import Footer from "./Footer";
import Accordion from "react-bootstrap/Accordion";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";

/* eslint-disable no-unused-vars */
/* global getProductById */

export default function ProductDetails() {
  const { productId } = useParams();
  const product = getProductById(productId);
  const [cartItems, setCartItems] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const [showCart, setShowCart] = useState(false);


  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
    setShowPopup(false); // Close the pop-up after adding to cart
    setShowCart(true); // Show the cart
  };
  const handleCheckout = () => {
    // Redirect to the checkout page
    // Replace '/checkout' with the actual URL of your checkout page
    window.location.href = "/checkout";
  };

  const removeFromCart = (productToRemove) => {
    const updatedCart = cartItems.filter(
      (item) => item.id !== productToRemove.id
    );
    setCartItems(updatedCart);
  };

  const handleCloseCart = () => setShowCart(false);
  const handleShowCart = () => setShowCart(true);

  if (!product) {
    return <div className="product-not-found">Product not found!</div>;
  }

  return (
    <div>
      <div className="product-details-container">
        <div className="product-image-container">
          <img
            src={`/${product.image}`}
            alt={product.name}
            className="product-image"
          />
        </div>
        <div className="product-info-container">
          <h2>{product.name}</h2>
          <p className="product-description">
            <h2>Introducing the Multi-Mood Candle: Aromatherapy on Demand!</h2>
            <p>
              Tired of having a single scented candle that only fits{" "}
              <b>one mood</b>?
            </p>
            <p>
              Introducing the Multi-Mood Candle, the all-in-one solution for
              your olfactory desires! This handcrafted candle features a unique
              double-wick design, allowing you to burn one wick for a calming
              lavender scent or the other for an invigorating citrus aroma. Want{" "}
              <b>both</b>? Light both wicks and experience a transformative
              fusion scent that's perfect for unwinding after a long day or
              getting energized for a productive morning.{" "}
            </p>
            <p>
              Made with <b>100% natural soy wax and essential oils</b>, the
              Multi-Mood Candle is a clean-burning and eco-friendly way to
              enhance your environment. The beautiful ceramic vessel adds a
              touch of elegance to any room, and the long-lasting burn time
              ensures you'll get months of enjoyment.
            </p>
            <p>
              <b>Light the way</b> to a more mindful and aromatic life, order
              your Multi-Mood Candle today!
            </p>
          </p>
          <p className="product-price">Price: {product.price}</p>
          <button className="product-button" onClick={() => setShowPopup(true)}>
            Add to cart
          </button>
        </div>
      </div>
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>Accordion Item #1</Accordion.Header>
          <Accordion.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Accordion Item #2</Accordion.Header>
          <Accordion.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
      <Footer />
      {showPopup && (
        <div className="quick-shop-popup">
          {/* Popup content */}
          <div className="quick-shop-content">
            <span className="close" onClick={() => setShowPopup(false)}>
              &times;
            </span>
            <h2>Quick Shop</h2>
            <img
              src={`/${product.image}`}
              alt={product.name}
              className="product-image"
            />
            <h3>{product.name}</h3>
            <p className="product-price">Price: {product.price}</p>
            <button
              className="quick-shop-button"
              onClick={() => addToCart(product)}
            >
              Add to Cart
            </button>
          </div>
        </div>
      )}
      <Offcanvas show={showCart} onHide={handleCloseCart}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Shopping Cart</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {cartItems.length > 0 ? (
            <ul>
              {cartItems.map((item) => (
                <li key={item.id}>
                  <div className="cart-item">
                    <img
                      src={`/${item.image}`}
                      alt={item.name}
                      className="cart-item-image"
                    />
                    <div>
                      <p>{item.name}</p>
                      <p>{item.price}</p>
                    </div>
                    <span
                      className="remove-item"
                      onClick={() => removeFromCart(item)}
                    >
                      &times;
                    </span>
                    <Button variant="primary" onClick={handleCheckout}>
                      Checkout
                    </Button>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <p>Your cart is empty.</p>
          )}
          <Button variant="primary" onClick={handleCloseCart}>
            Close Cart
          </Button>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
}


function getProductById(productId) {
  const products = [
    { id: 1, name: "Product 1", image: "product1.svg", price: "99$" },
    { id: 2, name: "Product 2", image: "product2.svg", price: "1919$" },
    { id: 3, name: "Product 3", image: "product3.svg", price: "199$" },
    { id: 4, name: "Product 4", image: "product4.svg", price: "25$" },
    { id: 5, name: "Product 5", image: "product5.svg", price: "19$" },
    { id: 6, name: "Product 6", image: "product6.svg", price: "9$" },
    { id: 7, name: "Product 7", image: "product7.svg", price: "56$" },
    { id: 8, name: "Product 8", image: "product8.svg", price: "89$" },
    { id: 9, name: "Product 9", image: "product9.svg", price: "978$" },
    { id: 10, name: "Product 10", image: "product10.svg", price: "454$" },
    { id: 11, name: "Product 11", image: "product11.svg", price: "465$" },
    { id: 12, name: "Product 12", image: "product12.svg", price: "99$" },
    { id: 13, name: "Product 13", image: "product1.svg", price: "55$" },
    { id: 14, name: "Product 14", image: "product2.svg", price: "65$" },
    { id: 15, name: "Product 15", image: "product3.svg", price: "44$" },
    { id: 16, name: "Product 16", image: "product4.svg", price: "9496$" },
    { id: 17, name: "Product 17", image: "product5.svg", price: "45$" },
    { id: 18, name: "Product 18", image: "product6.svg", price: "87$" },
    { id: 19, name: "Product 19", image: "product7.svg", price: "98$" },
    { id: 20, name: "Product 20", image: "product8.svg", price: "99$" },
    { id: 21, name: "Product 21", image: "product9.svg", price: "98$" },
    { id: 22, name: "Product 22", image: "product10.svg", price: "12$" },
    { id: 23, name: "Product 23", image: "product11.svg", price: "32$" },
    { id: 24, name: "Product 24", image: "product12.svg", price: "32$" },
    { id: 25, name: "Product 25", image: "product1.svg", price: "854" },
    { id: 26, name: "Product 26", image: "product10.svg", price: "6546$" },
    { id: 27, name: "Product 27", image: "product1.svg", price: "98$" },
    { id: 28, name: "Product 28", image: "product2.svg", price: "65$" },
    { id: 29, name: "Product 29", image: "product3.svg", price: "62$" },
    { id: 30, name: "Product 30", image: "product4.svg", price: "32$" },
    { id: 31, name: "Product 31", image: "product5.svg", price: "554$" },
    { id: 32, name: "Product 32", image: "product6.svg", price: "655$" },
    { id: 32, name: "Product 32", image: "product6.svg", price: "95$" },
    { id: 32, name: "Product 32", image: "product6.svg", price: "454$" },
    { id: 32, name: "Product 32", image: "product6.svg", price: "919$" },
    { id: 32, name: "Product 32", image: "product6.svg", price: "121$" },
    { id: 32, name: "Product 32", image: "product6.svg", price: "245$" },
    { id: 32, name: "Product 32", image: "product6.svg", price: "121$" },
    { id: 32, name: "Product 32", image: "product6.svg", price: "99$" },
    { id: 32, name: "Product 32", image: "product6.svg", price: "529$" },
    { id: 32, name: "Product 32", image: "product6.svg", price: "989$" },
    { id: 33, name: "Product 33", image: "product7.svg", price: "8959" },
    { id: 34, name: "Product 34", image: "product8.svg", price: "859$" },
    { id: 35, name: "Product 35", image: "product9.svg", price: "98$" },
    { id: 36, name: "Product 36", image: "product10.svg", price: "998$" },
    { id: 37, name: "Product 37", image: "product11.svg", price: "985$" },
    { id: 38, name: "Product 38", image: "product12.svg", price: "51$" },
    { id: 39, name: "Product 39", image: "product1.svg", price: "46$" },
    { id: 40, name: "Product 40", image: "product2.svg", price: "32$" },
    { id: 41, name: "Product 41", image: "product3.svg", price: "85$" },
    { id: 42, name: "Product 42", image: "product4.svg", price: "98$" },
    { id: 43, name: "Product 43", image: "product5.svg", price: "97$" },
    { id: 44, name: "Product 44", image: "product6.svg", price: "98$" },
    { id: 45, name: "Product 45", image: "product7.svg", price: "74$" },
  ];

  return products.find((product) => product.id === parseInt(productId));
}
