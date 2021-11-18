import React from 'react';
import "./card.css"
import { Link } from 'react-router-dom';

const Privacy = () => {
    return (
        <><div className="title">
                <h2 className="text-center font-weight-bold mb-5">Bonus Welcome Comparator</h2>
                <h2 className="text-center font-weight-bold mb-5">Privacy & Cookies</h2>
                <div className="subtitle">
                    <h5 className="text-center font-weight-bold">

                        <h5 className="text-center font-weight-bold text-white mb-5">-Informativa sulla privacy-</h5>
                        <p>Da www.bonuswelcome.com puntiamo sul valore della privacy, sicurezza e affidabilità non soltanto nelle nostre recensioni dei concessionari di gioco ma anche all'interno del sito che mettiamo a disposizione dei visitatori. Abbiamo creato questa pagina con l'informativa sulla privacy per rendervi consapevoli di come i dati da voi forniti vengano trattati, di come www.bonuswelcome.com garantisca la tutela della privacy dell'utente e sul funzionamento generale del nostro sito. Con l'uso del nostro prodotto, concordi alle seguenti disposizioni e condizioni d'uso.
                        </p>
                        <h5 className="text-center font-weight-bold text-white"> •Finalità del trattamento</h5>
                        <p className="text-center"> Il sito e il servizio di www.bonuswelcome.com può essere usato senza dover effettuare una registrazione e quindi gli unici dati raccolto sono quelli tramite Google Analytics. I dati raccolti vengono usati per migliorare il prodotto a disposizione su www.bonuswelcome.com.
                        </p>
                        <h5 className="text-center font-weight-bold text-white "> Definizioni</h5>
                        <p className="text-left"> •	Prodotto: Il prodotto è il sito di www.bonuswelcome.com.</p>
                        <p className="text-left">           •	Dati personali: I dati personali include il vostro indirizzo e-mail fornito volontariamente.
                        </p>
                        <p className="text-left">           •	Dati utente: I dati utente sono i dati collezionati automaticamente con l'uso del nostro prodotto come per esempio il tempo trascorso sulla pagina o la quantità di pagine visitate.
                        </p>
                        <h5 className="text-center font-weight-bold text-white "> Modalità del trattamento</h5>
                        <p>I dati raccolti vengono gestiti con la massima riservatezza, utilizzando misure di sicurezza informatica per impedire la visibilità di essi da parte di fonti esterne. Inoltre, vogliamo specificare che i dati forniti non saranno soggetti a qualsiasi tipo di diffusione e comunicazione a società esterne.
                        </p>
                        <h5 className="text-center font-weight-bold text-white ">  Utilizzo cookies</h5>
                        <p>       Usiamo i cookies per l'unico scopo di poter analizzare i dati utente raccolti tramite Google Analytics. I dati utente ci permettono di migliorare il nostro servizio per la tua prossima visita.
                        </p>
                        <h5 className="text-center font-weight-bold text-white ">   Titolare del trattamento</h5>
                        <p><a
                            href="https://www.bonuswelcome.com/"
                            target="_blank"
                            className="text-center font-weight-bold"
                            rel="noreferrer"
                        >www.bonuswelcome.com</a></p>
                    </h5>

                </div>
                <Link
            to="/"
            className="btn btn-primary font-weight-bold"
        >Back</Link>
            </div></>
    );
    }

    export default Privacy;