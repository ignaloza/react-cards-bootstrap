import React from 'react';
import "./card.css"
import { Link } from 'react-router-dom';

const Disclaimer = () => {
  return (
    <><div className="container w-100">
              <div className="title">
                  <h2 className="text-center font-weight-bold mb-5">Bonus Welcome Comparator</h2>
                  <h2 className="text-center font-weight-bold mb-5">Disclaimer</h2>
                  <div className="subtitle">
                      <h5 className="text-center font-weight-bold mb-5">
                          Il sito www.bonuswelcome.com non è una testata giornalistica in quanto viene aggiornato senza alcuna regolarità.
                          <p> Non può quindi considerarsi un prodotto editoriale ai sensi della legge n° 62 del 7.03.2001.
                          </p>
                          <p>Lo scopo del sito è quello di fornire informazioni sulle migliori slot online. Inoltre, verifichiamo la sicurezza e l’affidabilità dei Bookmaker Online ADM. Il tutto attraverso un’analisi comparativa delle offerte bonus degli operatori.
                          </p>
                          <p>Puoi giocare d’azzardo solo se hai compiuto 18 anni.</p>
                          <h3 className="text-center font-weight-bold text-white">
                              <br />

                              <p>Il gioco può causare dipendenza patologica.</p>
                          </h3>


                      </h5>

                  </div>
              </div>
          </div>
          <Link
          to="/"
          className="btn btn-primary font-weight-bold"
      >Back</Link>
      </>
  );
}
export default Disclaimer;