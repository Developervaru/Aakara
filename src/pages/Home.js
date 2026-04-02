import React, { useEffect } from "react";
import Home1 from "../images/Home.png";
import HomeBg from '../images/HomeBg.png'
import { TypeAnimation } from 'react-type-animation';
// import { FaBuilding, FaHardHat, FaPaintRoller, FaArrowRight } from "react-icons/fa";
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
  FaCheckCircle,
  FaArrowRight
} from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

function Home() {


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

  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  return (
    <>
      {/* HERO SECTION */}
      <section
        className="hero-section d-flex align-items-center text-white"
        style={{
          backgroundImage: `url(${HomeBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "90vh",
          position: "relative"
        }}
      >
        <div className="overlay"></div>

        <div className="container text-center position-relative">
          {/* <h1 className="display-4 fw-bold" data-aos="fade-up">
            Building Your Dream Spaces
          </h1> */}
          <p className="lead text-dark" data-aos="fade-up" data-aos-delay="200">
            <b> Architecture | Construction | Interior Design </b>
          </p>
          <div className="container py-5 text-center">
            <TypeAnimation
              sequence={[
                "Aakara is an Architectural and Interior Design firm which believes in rendering architectural and building solutions based on client need, lifestyle and ecology under one roof.",
                2000,
                "We offer design solutions to suit the specific needs of the client based on their lifestyle and perception while also complementing the uniqueness ecology of the site.",
                2000,
              ]}
              wrapper="p"
              speed={50}
              repeat={Infinity}
              className="lead typing-text text-dark"
            />

          </div>

          <button className="btn btn-primary btn-lg mt-3" data-aos="zoom-in">
            Explore Services <FaArrowRight className="ms-2" />
          </button>
        </div>
      </section>


      {/* SERVICES SECTION */}
      <div className="container py-5">
        <h2 className="text-center mb-5 fw-bold" data-aos="fade-up">
          Services Offered
        </h2>

        <div className="row g-4">
          {services.map((service, index) => (
            <div
              className="col-lg-4 col-md-6"
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="card service-card h-100 text-center p-4 shadow">
                <div className="icon-wrapper mb-3">
                  {React.cloneElement(service.icon, { size: 40 })}
                </div>
                <h6 className="fw-bold">{service.title}</h6>
              </div>
            </div>
          ))}
        </div>
      </div>


      {/* PARALLAX SECTION */}
      <section
        className="parallax-section text-white text-center d-flex align-items-center"
        style={{
          backgroundImage: `url(${HomeBg})`,
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "60vh"
        }}
      >
        <div className="container text-dark">
          <h2 className="fw-bold">3+ Years of Excellence</h2>
          <p>Delivering Quality Construction Since 2025</p>
        </div>
      </section>



      {/* FLOATING WHATSAPP BUTTON */}
      {/* <a
        href="https://wa.me/919999999999"
        target="_blank"
        rel="noreferrer"
        className="whatsapp-float"
      >
        <FaHardHat size={28} />
      </a> */}
    </>
  );
}

export default Home;