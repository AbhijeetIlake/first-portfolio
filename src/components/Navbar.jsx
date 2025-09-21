import React from "react";
import Button from "./Button";
import "../styles/Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <Button type="small" text="AI" />
        <p className="logoText">Abhijeet Ilake</p>
      </div>
      <ul className="nav-links">
        <li>
          <a className="nav-link" href="#home">
            Projects
          </a>
        </li>
        <li>
          <a className="nav-link" href="#home">
            Experience
          </a>
        </li>
        <li>
          <a className="nav-link" href="#home">
            Skills
          </a>
        </li>
        <li>
          <a className="nav-link" href="#home">
            Education
          </a>
        </li>
        <li>
          <a className="nav-link" href="#home">
            Certifications
          </a>
        </li>
        <li>
          <a className="nav-link" href="#home">
            Contact
          </a>
        </li>
      </ul>
      <div className="nav-btns">
        <Button type="small" text={null} icon="fa fa-sliders" />
        <Button type="medium" text="Resume" />
      </div>
    </nav>
  );
};

export default Navbar;
