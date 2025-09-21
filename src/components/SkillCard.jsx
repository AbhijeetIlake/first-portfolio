import React from "react";
import "../styles/SkillCard.css";

const SkillCard = (props) => {
  return (
      <p className="skill-card"
        style={{
          color: `${props.skillcolor}`,
          border: `4px solid ${props.skillcolor}`,
          boxShadow: `0px 0px 4px ${props.skillcolor}`,
        }}
      >
        {props.skillname}
      </p>
  );
};

export default SkillCard;
