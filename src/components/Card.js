import React from "react";
import PropTypes from "prop-types";
import "./card.css";

function Card({ imageSource, title, text, url, payments }) {
  return (
    
    <div className="card col text-center animate__animated animate__fadeInUp">
      <div className="conten-img border-0">
        <img src={imageSource} alt="a wallpaper" className="img"/>
        </div>
      <div className="card-body text-text-info">
        <h4 className="card-title font-weight-bold">{title}</h4>
        <p className="card-text font-weight-bold ">
          {text}
        </p>
        </div>
        <div className="content">
        <div className="card-low">
          <div className="row bg-transparent">
          <div className="col-6">
          <a
          href={url}
          target="_blank"
          className="btn btn-primary font-weight-bold"
          rel="noreferrer"
          >
            Verifica Offerta
          </a>
          </div>
          <div className="col-6">
          <button
          className="tycbtn"
          data-trigger="click" 
          data-toggle="tooltip" 
          data-placement="bottom" 
          title="" 
          data-original-title="Offerte e Bonus sono soggetti a cambi da parte degli Advertisers. Bonuswelcome.com non si assume alcuna responsabilitá e vi invita a verificare la congruenza delle informazioni riportate. " >
          Si applicano T&C
          </button>
          </div>
          </div>
          </div>
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
