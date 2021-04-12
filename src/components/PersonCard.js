import "./PersonCard.css";

import React from "react";

const PersonCard = ({ title, personName }) => {
  return (
    <div className="card">
      <div className="card__content">
        <h2 className="card__label">{title}</h2>
        <div className="card__title">
          <span>
            {personName}
          </span>
        </div>
      </div>
    </div>
  );
};

export default PersonCard;
