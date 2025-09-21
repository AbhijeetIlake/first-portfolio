import React from "react";
import "../styles/Btn.css";

const Button = (props) => {
  return (
    <button className={props.type}>
      <i className={props.icon} aria-hidden="true"></i> {props.text}
    </button>
  );
};

export default Button;
