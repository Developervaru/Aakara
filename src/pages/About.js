import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import '../CSS/About.css';
import {
  FaInstagram,
  FaWhatsapp,
  FaEnvelope,
  FaMapMarkerAlt,
  FaUserTie
} from "react-icons/fa";

function About() {

  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);

  const team = [
    {
      name: "Mr. Chandru",
      role: "CEO",
      image: "https://via.placeholder.com/300"
    },
    {
      name: "Mr.Akshay Gowda G S",
      role: "Marketing Head",
      image: "https://via.placeholder.com/300"
    },
    {
      name: "Varun K S",
      role: "Senior Developer",
      image: "https://via.placeholder.com/300"
    }
  ];

  return (
    <div className="about-section">

      {/* HERO SECTION */}
      <div className="about-hero text-white text-center d-flex align-items-center justify-content-center">
        <div data-aos="fade-down">
          <h1 className="fw-bold display-5">About Aakara</h1>
          <p className="lead">Designing Spaces • Defining Lifestyle</p>
        </div>
      </div>

      {/* ABOUT CONTENT */}
      <div className="container py-5">

        <div className="row align-items-center">

          <div className="col-lg-6" data-aos="fade-right">
            <h3 className="fw-bold mb-3">Who We Are</h3>
            <p className="about-text">
              Aakara is an Architectural and Interior Design firm which believes in rendering architectural 
              and building solutions based on client need, lifestyle and ecology under one roof.
            </p>
            <p className="about-text">
              We offer design solutions tailored to client perception while complementing the ecological 
              uniqueness of the site.
            </p>
          </div>

          <div className="col-lg-6 text-center" data-aos="fade-left">
            <FaUserTie size={150} className="about-icon" />
          </div>

        </div>

        {/* ADDRESS SECTION */}
        {/* <div className="address-card mt-5 p-4 text-center" data-aos="zoom-in">
          <FaMapMarkerAlt size={30} className="mb-2 text-danger" />
          <h5>Our Location</h5>
          <p>
            Aakara, Shop Number- 7, Opposite Government Primary School,  
            Jnana Bharthi, P Shankar Rd, Mariyappana Palya,  
            Jnana Ganga Nagar, Bengaluru, Karnataka 560056
          </p>
          <a
            href="https://maps.app.goo.gl/4PVKZ9FpaAi9sVv1A"
            target="_blank"
            rel="noreferrer"
            className="btn btn-primary"
          >
            View On Google Maps
          </a>
        </div> */}

        {/* TEAM SECTION */}
        <h3 className="text-center mt-5 mb-4 fw-bold">Our Team</h3>

        <div className="row g-4">
          {team.map((member, index) => (
            <div
              className="col-lg-4 col-md-6"
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 150}
            >
              <div className="team-card text-center p-4">

                <img
                  src={member.image}
                  alt={member.name}
                  className="img-fluid rounded-circle mb-3 team-img"
                />

                <h5>{member.name}</h5>
                <p>{member.role}</p>

                <div className="team-social mt-3">
                  <a
                    href="https://www.instagram.com/aakara_arch"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaInstagram />
                  </a>

                  <a
                    href="https://wa.me/9480297100"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaWhatsapp />
                  </a>

                  <a href="mailto:designs.aakara@gmail.com">
                    <FaEnvelope />
                  </a>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

export default About;