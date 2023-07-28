import React from 'react';
import './LastPageStyle.css';

function LastPage() {
  return (
    <div  id='contactus' className='classcontainer'>
<div className="container">
      <div className="heading">
        <h1>Need numbers?</h1>
      </div>

      <div className="buttons-row">
        <button>Travel</button>
        <button>Health</button>
        <button>CASCO</button>
        <button>Mortgage</button>
        <button>Fire</button>
      </div>

      <div className="input-section">
        <div className="input-wrapper">
          <p>Enter the country</p>
          <input type='text' placeholder='Nigeria' />
        </div>
        <div className="input-wrapper">
          <p>Choose travel dates</p>
          <input type='date' placeholder='11 April-20 April-20' />
        </div>
      </div>

      <button className="calculator-button">Calculator</button>
    </div>




<div className="containertwo">
      <div>
        <div>
          <h1>Insurance Services</h1>
          <p>Get your home insurance instantly, anytime, anywhere <br/>w
          ith the PDW Investment anywhere in the world</p>
        </div>
        <div>
          <h1>Company</h1>
          <p>Get your home insurance instantly, anytime</p>
        </div>
        <div>
          <h1>Insurance Services</h1>
          <p>Get your home insurance instantly</p>
        </div>
      </div>
    </div>
    </div>



    
  );
}

export default LastPage;
