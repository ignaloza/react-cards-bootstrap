import React from "react";
import Card from "./Card";
import "./card.css"
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
    text:"Recivi 5€ alla convalida del documento e un bonus pari al 30% dell'importo giocato fino al 35€ se la giocatta è perdente. Ogni setimana per 31 settimane ricevi fino a 10 € di bonus Scommesse sportive, sbloccabili a scaglioni da 1€ ogni 10 Status Point ottenuti.",
    url: "https://areaprivata.sisal.it/registrazioneJwt/",
  },
  {
    id: 2,
    title: "50% del primo deposito fino a 20€ + 100% del primo deposito fino a 1000€",
    image: betclic,
    text:"Ricevi 50% del primo deposito fino a un massimo di 20€ ed il 100% del primo deposito fino a un masssimo di 1000€",
    url: "https://wlbetclic.adsrv.eacdn.com/C.ashx?btag=a_28200b_18011c_&affid=18196&siteid=28200&adid=18011&c=&AutoR=1",
  },
  {
    id: 3,
    title: "Offerta benvenuto Sport - Gioca 10€ Ottieni 10€",
    image: codere,
    text:"Effettua un deposito di almeno 10€- Effettua una scommessa sportiva di almeno 10€ - Ricevi 10€ gratis in Freebet",
    url: "https://www.codere.it/pacchetto-benvenuto",
  },
  {
    id: 4,
    title: "Bonus fino a 10€",
    image: goldbet,
    text:"25% fino a 50€ + 5€ a settimana per 21 settimane.",
    url: "https://promo.goldbet.it/bonus-di-benvenuto/bonus-benvenuto-primo-deposito--",
  },
  {
    id: 5,
    title: "Bonus di Benvenuto Sport fino a 365€",
    image: planetwin,
    text:"Il Bonus Play500 di Planetwin365 permetterà al nuovi clienti di ricevere un Bonus deposito iniziale pari al 50% dell'importo del Deposito Qualificante iniziale fino ad un massimo di 300€ e del Bonus Extra (riscattabili in ulteriori 2 tranche) fino a 200€, quindi fino a 500€ totali.",
    url: "https://promos.planetwin365.it/planetwin/?btag=654687_1E385BBDCD374ACCB9B32BEE4B2EDC6E",
  },
  {
    id: 6,
    title: "5€ subito al deposito + 10€ fino a 100€ di Bonus",
    image:  eurobet,
    text:"Registrati, deposita e scommetti: ricevi subito 5€ per le scommesse sportive più un bonus di benvenuto del 50% dell'importo delle scommesse sportive effettuate entro 7 giorni dalla registrazione, fino a un massimo di 100€! ",
    url: "https://www.eurobet.it/it/landing/scommesse/welcome-bonus-sport-casino/?partid=X3OMaenD6jbOApj4wnyeFWNd7ZgqdRLk&maagid=3351&amc_cid=af_landing_null_bonus-sport-casino_null",
  },
  {
    id: 7,
    title: "Scegli tra i vari bonus disponibili il più adatto a te",
    image: bwin,
    text:"Quotte Maggiorate - Multiple Maggiorate - Bonus Multipla. In più vivi tutto lo sport in diretta su bwin. ",
    url: "https://promo.bwin.it/it/promo/s/p/sports/accaboost?wm=5178815",
  },
  {
    id: 8,
    title: "5€ FREE + BONUS FINO A 350€",
    image: snai,
    text:"Ricevi 25€ su prima giocata sportiva, 25€ su prima giocata virtuale e 10€ a settimana.",
    url: "https://www.snai.it/services/info/scommesse/?COD_PROM=BB_SPORT&provenienza=nr/&btag=917027_512847D51DDC4A318C39E95DC0A124D4",
  }, 
];

function Cards() {
  return (
    <div className="title">
      <h2 className="text-center font-weight-bold mb-5">Bonus Welcome Comparator</h2>
      <div className="subtitle">
      <h5 className="text-center font-weight-bold">Ecco il tuo comparatore bonus definitivo e aggiornato.</h5>
      <h5 className="text-center font-weight-bold">Confrontiamo i bonus di benvenuto dei vari operatori di gioco online con regolare licenza aams.</h5>
      <h5 className="text-center font-weight-bold"> Oltre ai bonus è possibile trovare altre informazioni per conoscere meglio la sala e scegliere cosi tra una vasta offerta di possibilitá.</h5>
      </div>
    <div className="container d-flex justify-content-center align-items-center border-0">
        <div className="row justify-content-center align-items-center  h-100 border-0">
          {cards.map(({ title, image, text, url, id }) => (
            <div className="col-md-6" key={id}>
              <Card imageSource={image} title={title} text={text} url={url} />
            </div>
          ))}
        </div>
      </div>
      </div>
  );
}

export default Cards;
