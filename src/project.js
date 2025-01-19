import { useRef } from "react";
import "./project.css";
const PortfolioSection = () => {
  const projects = [
    {
      id: 1,
      title: "Menumakchha",
      description:
        "Menumakchha is a digital platform designed for restaurants, cafes, and hotels to create and manage their menus online. It offers a paperless solution through QR codes, enhancing safety, reducing costs, and promoting eco-friendly dining. The platform supports various food establishments, streamlining operations and improving customer satisfaction.",
      imgSrc: "./photos/menumakchha-logo.png",
      link: "https://www.menumakchha.com/",
    },
    {
      id: 2,
      title: "Smart Karobar",
      description:
        "Smart Karobar is an accounting app designed to streamline financial management for businesses. It helps users track income, expenses, and ledger entries while securely handling personal and financial data. With features for cash flow management, instant report generation,user-friendly navigation, Smart Karobar enhances operational efficiency and supports sound business health.",
      imgSrc: "./photos/smart.png",
      link: "https://play.google.com/store/apps/details?id=com.nct.smartkarobar&hl=en_US",
    },
    {
      id: 3,
      title: "Restro MS",
      description:
        "Restro MS is a restaurant management system that streamlines meal ordering, billing, and inventory control. It supports efficient operations with a POS system that sends orders to the kitchen and manages bill payments. Features include inventory management, accounting, online orders, and billing, enhancing the restaurant’s workflow and customer experience",
      imgSrc: "./photos/Restro-ms.png",
      link: "https://play.google.com/store/apps/details?id=com.nct.restroms_inventory&hl=en_US",
    },
    {
      id: 4,
      title: "Upasthiti",
      description:
        "Upasthiti is an employee time and attendance management system that tracks working hours and shift management. It simplifies attendance monitoring, leave requests, and holiday allocation while generating various reports related to attendance, taxes, and overtime. The platform integrates with attendance devices like smart cards and biometric systems for real-time monitoring.",
      imgSrc: "./photos/Upastithi.png",
      link: "",
    },
    {
      id: 5,
      title: "Daddy's Kitchen",
      description:
        "Daddy's Kitchen is a popular restaurant located in Butwal, offering a diverse menu that includes delicious pizzas and flavorful chicken wings. Known for its commitment to quality and hygiene, it provides a welcoming atmosphere for casual dining and gatherings. With friendly staff and halal options, it caters to various dietary preferences, ensuring customer satisfaction.",
      imgSrc: "./photos/daddys.jpeg",
      link: "https://play.google.com/store/apps/details?id=com.nct.daddyskitchen&hl=en_US",
    },
  ];

  // Reference to the portfolio container
  const portfolioRef = useRef(null);

  // Scroll to the next set of cards
  const scrollNext = () => {
    const container = portfolioRef.current;
    const cardWidth =
      container.querySelector(".portfolio-card").offsetWidth + 30; // 30px includes margin
    container.scrollBy({ left: cardWidth, behavior: "smooth" });
  };

  // Scroll to the previous set of cards
  const scrollPrev = () => {
    const container = portfolioRef.current;
    const cardWidth =
      container.querySelector(".portfolio-card").offsetWidth + 30; // 30px includes margin
    container.scrollBy({ left: -cardWidth, behavior: "smooth" });
  };

  return (
    <section className="portfolio-section">
      <h2>Our Projects</h2>
      <i className="fa-solid fa-arrow-left" onClick={scrollPrev}></i>
      <div className="portfolio-container" ref={portfolioRef}>
        <div className="portfolio-wrapper">
          {projects.map((project) => (
            <a
              key={project.id}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="portfolio-card">
                <img src={project.imgSrc} alt={project.title} />
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
      <i className="fa-solid fa-arrow-right" onClick={scrollNext}></i>
    </section>
  );
};

export default PortfolioSection;
