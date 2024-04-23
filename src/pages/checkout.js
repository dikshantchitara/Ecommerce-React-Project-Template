import React, { useState } from "react";
import { useParams } from "react-router-dom";

// Function to fetch product by ID

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


const Checkout = () => {
  // Get the productId from the URL params
  const { productId } = useParams();

  // Fetch the product details based on the productId
  const product = getProductById(productId);

  // State variables to store form data
  const [fullName, setFullName] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [zipCode, setZipCode] = useState("");

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform form validation here
    // You can also submit the form data to a backend server
  };

  // Function to render product details
  const renderProductDetails = () => {
    if (!product) {
      return <p>Product not found!</p>;
    }

    return (
      <div className="product-item">
        <img src={product.image} alt={product.name} />
        <div className="product-info">
          <h3>{product.name}</h3>
          <p>{product.price}</p>
          {/* Add more product details here if needed */}
        </div>
      </div>
    );
  };

  return (
    <div className="checkout-container">
      {/* Left side: Address details */}
      <div className="address-details">
        <h2>Address Details</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="fullName">Full Name:</label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="address">Address:</label>
            <textarea
              id="address"
              name="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
            ></textarea>
          </div>
          <div className="form-group">
            <label htmlFor="city">City:</label>
            <input
              type="text"
              id="city"
              name="city"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="zipCode">Zip Code:</label>
            <input
              type="text"
              id="zipCode"
              name="zipCode"
              value={zipCode}
              onChange={(e) => setZipCode(e.target.value)}
              required
            />
          </div>
          {/* Add more fields as needed */}
          <button type="submit">Place Order</button>
        </form>
      </div>

      {/* Right side: Product details */}
      <div className="product-details">
        <h2>Product Details</h2>
        <div className="product-list">{renderProductDetails()}</div>
      </div>
    </div>
  );
};

export default Checkout;
