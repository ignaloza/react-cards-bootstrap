import React from 'react';
import "../App.css";
import footimg from '../assets/footer/18.svg';
import footimg1 from '../assets/footer/Gioca_Senza_Esagerare.svg';
import footimg2 from '../assets/footer/ADM_Timone.svg';

const Footer = () => {
    return(       
        <div class="container">
            <div class="row">
                    <div className="col text-secondary">
                        <ul>
                            <li><a href="https://www.bonuswelcome.com/privacy/ text-secondary">Privacy & Cookies</a></li>
                            <li><a href="https://www.bonuswelcome.com/gioco_responsabile/">Gioco Responsabile</a></li>
                            <li><a href="https://www.bonuswelcome.com/disclaimer/">Disclaimer</a></li>
                        </ul>
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
                    <div  className="col-md">
                        Il gioco può causare dipendenza patologica  
                        | Gioca Responsabilmente |
                        © Ltd 2021
                    </div>
                </div>
                </div>
    );
}

export default Footer;