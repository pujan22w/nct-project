import React from "react";
import "./footer.css";
const Footer = () => {
  return (
    <footer>
      <div className="container">
        {/* Company Info */}
        <div className="column">
          <h3>Nepal Creative Tech Pvt. Ltd.</h3>
          <p>Golpark-3, Butwal, Nepal</p>
          <p>Phone: +977-71-537167</p>
          <p>
            Email:{" "}
            <a href="mailto:contact@nctbutwal.com.np">
              contact@nctbutwal.com.np
            </a>
          </p>
        </div>

        {/* Navigation Links */}
        <div className="column">
          <h4>Quick Links</h4>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Our Services</a>
            </li>
            <li>
              <a href="#">Product</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>

        {/* Social Media Links */}
        <div className="column">
          <h4>Follow Us</h4>
          <a href="#">Facebook</a>
          <br />
          <a href="#">Twitter</a>
          <br />
          <a href="#">Instagram</a>
        </div>
      </div>
      <div className="bottom-bar">
        <p>© 2022 Nepal Creative Tech Pvt. Ltd. All Rights Reserved.</p>
      </div>
    </footer>
  );
};
export default Footer;
