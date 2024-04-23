import React from "react";
import Footer from "./Footer";
import "./aboutus.css";

export default function AboutUs() {
  return (
    <><div className="about-us-wrapper">
      <div className="about-us-container">
        <div className="about-us-content">
          <div className="about-us-text">
            <div className="about-us-header">
              <h1>Welcome to Our Company</h1>
              <p>
                <b>
                  We are a team of passionate individuals dedicated to
                  delivering high-quality products and services.
                </b>
              </p>
            </div>
          </div>
        </div>
        <div className="about-us-image">
          <img src="ab.gif" alt="About Us" />
        </div>
        <div className="about-us-image">
          <img src="aboutuss.svg" alt="About Us" />
        </div>
        <div className="about-us-image">
          <img src="Upcoming Event (1).svg" alt="About Us" />
        </div>
        <div className="about-us-image">
          <img src="Upcoming Event.svg" alt="About Us" />
        </div>
      </div>

    </div><Footer /></>
  );
}
