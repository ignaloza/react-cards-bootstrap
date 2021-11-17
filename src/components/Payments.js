import React from "react";

import Amex from "../assets/payments/AmericanExpress.png";
import Bonifico from "../assets/payments/Bonifico.png";
import MasterCard from "../assets/payments/MasterCard.png";
import Neteller from "../assets/payments/Neteller.png";
import PayPal from "../assets/payments/PayPal.png";
import PostePay from "../assets/payments/PostePay.png";
import Skrill from "../assets/payments/Skrill.png";
import Visa from "../assets/payments/Visa.png";
import VisaElectron from "../assets/payments/VisaElectron.png";
const payments = [{
  id: 1,
  image: Amex,
},
{
  id: 2,
  image: Bonifico,
},
{ id: 3,
  image: MasterCard,
},
{ id:4,
  image: Neteller,
},
{ id:5,
  image: PayPal,
},
{ id:6,
  image: PostePay,
},
{ id:7,
  image: Skrill,
},
{ id:8,
  image: Visa,
},
{ id:9,
  image: VisaElectron,
}


]


 const Payments = () => {
    return (
            <div className="row">
                {payments.map(({ image, id }) => (
                <div className="col-md-6" key={id}>
                    <img src={image} alt="payment" />
                </div>
                ))
                }        
    
            </div>
    );
}

export default Payments;