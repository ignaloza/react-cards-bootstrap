import React from "react";
import Card from "./Card";
import "./card.css"

import image1 from "../assets/image1.jpg";
import image2 from '../assets/image2.jpg'
import image3 from '../assets/image3.jpg'
import sisal from "../assets/sisal.jpg"
import betclic from "../assets/betclic.jpg";
import codere from "../assets/codere.jpg";
import eurobet from "../assets/eurobet.jpg";
import goldbet from "../assets/goldbet.jpg";
import bwin from "../assets/bwin.jpg";
import planetwin from "../assets/planetwin365.jpg"
import snai from "../assets/snai.jpg";

const cards = [
  {
    id: 1,
    title: "5 € convalida documento +350€ massimo di benvenuto",
    image: sisal,
    url: "https://faztweb.com",
  },
  {
    id: 2,
    title: "5 € convalida documento +350€ massimo di benvenuto",
    image: betclic,
    url: "https://blog.faztweb.com",
  },
  {
    id: 3,
    title: "Fazt Youtube",
    image: codere,
    url: "https://youtube.com/fazttech",
  },
  {
    id: 4,
    title: "Fazt Youtube",
    image: eurobet,
    url: "https://youtube.com/fazttech",
  },
  {
    id: 5,
    title: "Fazt Youtube",
    image: bwin,
    url: "https://youtube.com/fazttech",
  },
  {
    id: 6,
    title: "Fazt Youtube",
    image: planetwin,
    url: "https://youtube.com/fazttech",
  },
  {
    id: 7,
    title: "goldbet",
    image: goldbet,
    url: "https://youtube.com/fazttech",
  },
  {
    id: 8,
    title: "Fazt Youtube",
    image: snai,
    url: "https://youtube.com/fazttech",
  },
];

function Cards() {
  return (
    <div className="container d-flex justify-content-center align-items-center">
      <div className="row justify-content-center align-items-center  h-100">
        {cards.map(({ title, image, url, id }) => (
          <div className="col-md-6" key={id}>
            <Card imageSource={image} title={title} url={url} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cards;
