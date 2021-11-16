import React from "react";
import PropTypes from "prop-types";

import "./card.css";

function Card({ imageSource, title, text, url }) {
  return (
    
    <div className="card col text-center animate__animated animate__fadeInUp">
      <div className="conten-img border-0">
        <img src={imageSource} alt="a wallpaper" className="img"/>
        </div>
      <div className="card-body text-text-info">
        <h4 className="card-title font-weight-bold text-info">{title}</h4>
        <p className="card-text text-secondary font-weight-bold">
          {text}
        </p>
        </div>
        <div className="card-low">
          <a
          href={url ? url : "#!"}
          target="_blank"
          className="btn btn-primary font-weight-bold"
          rel="noreferrer"
          >
        Verifica Offerta
          </a>
        <a
          href={url ? url : "#!"}
          target="_blank"
          className="btn btn-outline-secondary border-0 font-weight-light"
          rel="noreferrer"
        >
        Si applicano T&C
        </a>
      </div>
    </div>
  );
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string,
  url: PropTypes.string,
  imageSource: PropTypes.string
};

export default Card;
