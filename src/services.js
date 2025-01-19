import { useRef } from "react";
import "./services.css";
const ServiceSection = () => {
  const services = [
    {
      id: 1,
      title: "Custom Software Development",
      description:
        " We build scalable and robust software tailored to your specific requirements.",
      imgSrc: "./photos/custom.png",
    },
    {
      id: 2,
      title: "UI/UX Design",
      description:
        "Designing intuitive and engaging user interfaces that enhance user experience.",
      imgSrc: "./photos/uiux.png",
      //   link: "https://play.google.com/store/apps/details?id=com.nct.smartkarobar&hl=en_US",
    },
    {
      id: 3,
      title: "Graphics Designing",
      description:
        "Delivering innovative and visually compelling graphic design solutions to enhance brand identity and user engagement.",
      imgSrc: "./photos/graphics-design.png",
      //   link: "https://play.google.com/store/apps/details?id=com.nct.restroms_inventory&hl=en_US",
    },
    {
      id: 4,
      title: "Mobile App Development",
      description:
        " Creating user-friendly mobile applications for both Android and iOS platforms.",
      imgSrc: "./photos/mobile.png",
      //   link: "",
    },
  ];

  // Reference to the portfolio container
  const serviceRef = useRef(null);

  // Scroll to the next set of cards
  const scrollNext = () => {
    const container = serviceRef.current;
    const cardWidth = container.querySelector(".service-card").offsetWidth + 30; // 30px includes margin
    container.scrollBy({ left: cardWidth, behavior: "smooth" });
  };

  // Scroll to the previous set of cards
  const scrollPrev = () => {
    const container = serviceRef.current;
    const cardWidth = container.querySelector(".service-card").offsetWidth + 30; // 30px includes margin
    container.scrollBy({ left: -cardWidth, behavior: "smooth" });
  };

  return (
    <section className="services-section">
      <h2>Our Services</h2>
      <i className="fa-solid fa-arrow-left" onClick={scrollPrev}></i>
      <div className="services-container" ref={serviceRef}>
        <div className="service-wrapper">
          {services.map((service) => (
            <a
              key={service.id}
              href=""
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="service-card">
                <img src={service.imgSrc} alt={service.title} />
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
      <i className="fa-solid fa-arrow-right" onClick={scrollNext}></i>
    </section>
  );
};

export default ServiceSection;
