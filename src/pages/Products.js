import React from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import "./Products.css"; 
import Footer from "./Footer";
import { Link } from "react-router-dom"; 

export default function Products() {

  const products = [
    { id: 1, name: "Product 1", image: "product1.svg" },
    { id: 2, name: "Product 2", image: "product2.svg" },
    { id: 3, name: "Product 3", image: "product3.svg" },
    { id: 4, name: "Product 4", image: "product4.svg" },
    { id: 5, name: "Product 5", image: "product5.svg" },
    { id: 6, name: "Product 6", image: "product6.svg" },
    { id: 7, name: "Product 7", image: "product7.svg" },
    { id: 8, name: "Product 8", image: "product8.svg" },
    { id: 9, name: "Product 9", image: "product9.svg" },
    { id: 10, name: "Product 10", image: "product10.svg" },
    { id: 11, name: "Product 11", image: "product11.svg" },
    { id: 12, name: "Product 12", image: "product12.svg" },
    { id: 13, name: "Product 13", image: "product1.svg" },
    { id: 14, name: "Product 14", image: "product2.svg" },
    { id: 15, name: "Product 15", image: "product3.svg" },
    { id: 16, name: "Product 16", image: "product4.svg" },
    { id: 17, name: "Product 17", image: "product5.svg" },
    { id: 18, name: "Product 18", image: "product6.svg" },
    { id: 19, name: "Product 19", image: "product7.svg" },
    { id: 20, name: "Product 20", image: "product8.svg" },
    { id: 21, name: "Product 21", image: "product9.svg" },
    { id: 22, name: "Product 22", image: "product10.svg" },
    { id: 23, name: "Product 23", image: "product11.svg" },
    { id: 24, name: "Product 24", image: "product12.svg" },
    { id: 25, name: "Product 25", image: "product1.svg" },
    { id: 26, name: "Product 26", image: "product12.svg" },
    { id: 27, name: "Product 27", image: "product1.svg" },
    { id: 28, name: "Product 28", image: "product2.svg" },
    { id: 29, name: "Product 29", image: "product3.svg" },
    { id: 30, name: "Product 30", image: "product4.svg" },
    { id: 31, name: "Product 31", image: "product5.svg" },
    { id: 32, name: "Product 32", image: "product6.svg" },
    { id: 33, name: "Product 33", image: "product7.svg" },
    { id: 34, name: "Product 34", image: "product8.svg" },
    { id: 35, name: "Product 35", image: "product9.svg" },
    { id: 36, name: "Product 36", image: "product10.svg" },
    { id: 37, name: "Product 37", image: "product11.svg" },
    { id: 38, name: "Product 38", image: "product12.svg" },
    { id: 39, name: "Product 39", image: "product1.svg" },
    { id: 40, name: "Product 40", image: "product2.svg" },
    { id: 41, name: "Product 41", image: "product3.svg" },
    { id: 42, name: "Product 42", image: "product4.svg" },
    { id: 43, name: "Product 43", image: "product5.svg" },
    { id: 44, name: "Product 44", image: "product6.svg" },
    { id: 45, name: "Product 45", image: "product7.svg" },
    
  ];

  return (
    <Container className="product-catalog">
      <Row>
        {/* Filter/Search Section */}
        <Col md={3}>
          <div className="filter-section">
            <h4>Filter Products</h4>
            <hr />
            <Form.Control
              type="text"
              placeholder="Search products"
              className="search-input"
            />
            <hr />
            <h5>Price Range</h5>
            <h5>Min-500 - Max-1000</h5>
            <input type="range" min="0" max="100" step="10" defaultValue="0" />
            <hr />
            <h5>Choose Brand</h5>
            <select>
              <option value="brand1">Lakme</option>
              <option value="brand2">Oral</option>
              <option value="brand1">Lakme</option>
              <option value="brand2">Oral</option>
              <option value="brand1">Lakme</option>
              <option value="brand2">Oral</option>
              <option value="brand1">Lakme</option>
              <option value="brand2">Oral</option>
              <option value="brand1">Lakme</option>
              <option value="brand2">Oral</option>
              <option value="brand1">Lakme</option>
              <option value="brand2">Oral</option>
              <option value="brand1">Lakme</option>
              <option value="brand2">Oral</option>
              <option value="brand1">Lakme</option>
              <option value="brand2">Oral</option>
            </select>
            <hr />
            <h5>Customer Review</h5>
            <div>
              <input type="checkbox" id="review1" name="review1" />
              <label htmlFor="review1">4 Stars & Above</label>
            </div>
            <div>
              <input type="checkbox" id="review2" name="review2" />
              <label htmlFor="review2">3 Stars & Above</label>
            </div>
            <div>
              <input type="checkbox" id="review2" name="review2" />
              <label htmlFor="review2">2 Stars & Above</label>
            </div>
            <div>
              <input type="checkbox" id="review2" name="review2" />
              <label htmlFor="review2">1 Stars & Above</label>
            </div>
          </div>
        </Col>
        {/* Product Grid */}
        <Col md={9}>
          <Row>
            {products.map((product) => (
              <Col key={product.id} md={4} className="product-item">
                {/* Wrap each product card with Link component */}
                <Link to={`/products/${product.id}`} className="product-link">
                  <div className="product-card">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="product-image"
                    />
                    <div className="product-details-product">
                      <h3 className="product-name">{product.name}</h3>
                    </div>
                    <button type="submit" className="product-button-readmore">
                      Read More
                    </button>
                  </div>
                </Link>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
      <Footer />
    </Container>
  );
}
