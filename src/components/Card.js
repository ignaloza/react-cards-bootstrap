import React from "react";
import PropTypes from "prop-types";

import "./card.css";

function Card({ imageSource, title, text, url }) {
  return (
    <div className="card text-center bg-dark animate__animated animate__fadeInUp">
      <div className="conten-img">
        <img src={imageSource} alt="a wallpaper" className="img"/>
        </div>
      <div className="card-body text-light">
        <h4 className="card-title">{title}</h4>
        <p className="card-text">
          {text}
        </p>
        <a
          href={url ? url : "#!"}
          target="_blank"
          className="btn btn-primary"
          rel="noreferrer"
        >
        Verifica Offerta
        </a>
        <a
          href={url ? url : "#!"}
          target="_blank"
          className="btn btn-outline-secondary border-0"
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
