import React from 'react';
import { Link } from 'react-router-dom';
import "../App.css";
import footimg from '../assets/footer/18.svg';
import footimg1 from '../assets/footer/Gioca_Senza_Esagerare.svg';
import footimg2 from '../assets/footer/ADM_Timone.svg';

const Footer = () => {
    return(       
        <div class="container">
            <div class="row">
                    <div className="col">
                        <div className="linklist">
                        <ul>
                            <li> <Link to="/privacy" className="linklist">Privacy & Cookies</Link></li>
                            <li><Link to="/giocoresponsabile" className="linklist">Gioco Responsabile</Link></li>
                            <li><Link to="/disclaimer" className="linklist">Disclaimer</Link></li>
                        </ul>
                        </div>
                    </div>
                    <div className="col">
                        <div className="mid-footy">
                            <div className="row">
                                <div className="col-md">
                                    <img src={footimg2} alt="footimg" className="mid-footy"/>
                                </div>
                                <div className="col"> 
                                    <img src={footimg1} alt="footimg1" className="mid-footy"/>
                                </div>
                                <div className="col">
                                    <img src={footimg} alt="footimg2" className="mid-footy"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div  className="col-md font-weight-bold">
                        Il gioco può causare dipendenza patologica  
                        | Gioca Responsabilmente |
                        © Ltd 2021
                    </div>
                </div>
                </div>
    );
}

export default Footer;