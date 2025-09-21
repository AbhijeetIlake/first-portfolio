import React from "react";
import Navbar from "../components/Navbar";
import "../styles/Home.css";
import Button from "../components/Button";
import SkillCard from "../components/SkillCard";

const Home = () => {
  return (
    <div className="hero-section">
      <Navbar />
      <div className="overlay">
        <div className="section-two">
          <p className="sub-heading">MERN STACK DEVELOPER</p>
          <h1 className="heading">Abhijeet Ilake</h1>
          <p className="sub-heading">
            MERN stack developer crafting responsive, scalable web apps with
            clean design and seamless API integration.
          </p>
          <div className="hero-btn">
            <Button type="large" text="Get in touch" icon="fa fa-paper-plane" />
            <Button type="large" text="Download Resume" icon="fa fa-download" />
          </div>
        </div>
        <div className="section-one">
          <div className="cards-section">
            <h3 className="skills-heading">
              <i className="fa fa-code-fork" aria-hidden="true"></i> STACK
            </h3>
            <div className="skills-container">
              <SkillCard skillname="HTML5" skillcolor="#E34F26" />
              <SkillCard skillname="CSS3" skillcolor="#1572B6" />
              <SkillCard skillname="JavaScript" skillcolor="#F7DF1E" />
              <SkillCard skillname="ReactJS" skillcolor="#61DAFB" />
              <SkillCard skillname="NodeJS" skillcolor="#339933" />
              <SkillCard skillname="MongoDB" skillcolor="#47A248" />
            </div>
          </div>
          <div className="focus-section">
            <h3 className="focus-heading">
              <i className="fa fa-bullseye" aria-hidden="true"></i> FOCUS
            </h3>
            <div className="focus-content">
              <p className="focus-text">Responsive Web Design</p>
              <p className="focus-text">API Integration</p>
              <p className="focus-text">Web App Development</p>
              <p className="focus-text">Database Management</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
