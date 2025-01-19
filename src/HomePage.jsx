import React from "react";
import PortfolioSection from "./project.js";
import "./Homepage.css"; // Import the CSS file
import ServiceSection from "./services.js";
import Footer from "./footer.js";

function HomePage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>Welcome to NCT Soft Pvt Ltd</h1>
          <p>Your Partner in Innovative Software Solutions</p>
          <a href="#contact" className="cta-button">
            Get Started
          </a>
        </div>
        <div className="hero-image">
          <img src="./photos/home-image.jpg" alt="Hero" />
        </div>
      </section>

      {/* About Us */}
      <section className="about-section" id="about-section">
        <h2>About Us</h2>
        <p>
          Nepal Creative Tech Soft Pvt. Ltd (NCT) is an innovative IT solutions
          provider located in Butwal, Nepal, established in 2010. With a passion
          for technology, we specialize in custom software development, web and
          mobile applications, graphic design, and IT consultancy. Our skilled
          team combines creativity with cutting-edge technology to deliver
          tailored solutions that empower businesses to grow in today’s digital
          world. We are committed to providing exceptional service, ensuring
          your digital transformation journey is smooth and successful.
        </p>
      </section>

      <ServiceSection />
      {/* Portfolio */}
      <PortfolioSection />

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default HomePage;
