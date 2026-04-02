import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../CSS/Services.css";
import Tilt from "react-parallax-tilt";
import {
  FaDraftingCompass,
  FaCubes,
  FaPaintRoller,
  FaUsersCog,
  FaMapMarkedAlt,
  FaTree,
  FaBuilding,
  FaHardHat,
  FaCalculator,
  FaUniversity,
  FaCheckCircle
} from "react-icons/fa";

function Services() {

  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);

  const services = [
    { icon: <FaDraftingCompass />, title: "Architectural Planning" },
    { icon: <FaCubes />, title: "Illustration Rendering & 3D Design Modelling" },
    { icon: <FaPaintRoller />, title: "Interior Design" },
    { icon: <FaUsersCog />, title: "Consultant Coordination & Management" },
    { icon: <FaMapMarkedAlt />, title: "Layout Planning" },
    { icon: <FaTree />, title: "Landscaping Design" },
    { icon: <FaBuilding />, title: "Structural Design" },
    { icon: <FaHardHat />, title: "Construction & PMC Works" },
    { icon: <FaCalculator />, title: "Cost Estimation (Design Options)" },
    { icon: <FaUniversity />, title: "Bank Estimations" },
    { icon: <FaCheckCircle />, title: "Complete Building Services (Start to End)" }
  ];

  return (
    <div className="services-section py-5">

      <div className="container">
        <h2 className="text-center fw-bold mb-5 gradient-text" data-aos="fade-down">
          Our Premium Services
        </h2>

        <div className="row g-4">
          {services.map((service, index) => (
            <div
              className="col-lg-4 col-md-6"
              key={index}
              data-aos="zoom-in"
              data-aos-delay={index * 100}
            >
              <Tilt
                glareEnable={true}
                glareMaxOpacity={0.3}
                scale={1.05}
                transitionSpeed={2000}
              >
                <div className="service-glass-card text-center p-4">

                  <div className="floating-icon mb-3">
                    {React.cloneElement(service.icon, { size: 45 })}
                  </div>

                  <h6 className="fw-bold">{service.title}</h6>

                </div>
              </Tilt>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Services;