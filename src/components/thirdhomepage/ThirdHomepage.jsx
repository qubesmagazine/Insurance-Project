import React from 'react';
import './Thirdhomepage.css';
import { Pictures } from '../../utils/images';
import CircleFonts from '../../utils/CircleFonts';
import{Link} from 'react-router-dom'

function ThirdHomepage() {
  const handleButtonClick = () => {
  
    console.log('Button clicked!');
  };

  return (
    <div className='top-new'>
      <div className='first-roll'>
        <h3>
          Support<br />
          at Every<br />
          <span>step</span>
        </h3>
      </div>
      <div className='second-roll'>
        <div>
          <CircleFonts />
          <p>
            Participate <span className='spannews'> in the loyalty program.</span> Pay for the <br />
            service online to get bonuses for our other services. <br />
            We have a lot of bonuses!
          </p>
        </div>
        <div>
          <CircleFonts />
         <Link to='/blog' id='blog'> <p>You can help other people: choose a donation <br />
             fund and share the link with your friends</p></Link>
        </div>
        <div>
          <button onClick={handleButtonClick}>Choose a fund</button>
        </div>
      </div>
      <div className='third-roll'>
        <div className='img-container' onClick={handleButtonClick}>
          <img
            src={Pictures.Mother}
            style={{ height: '400px', width: '200px' }}
            alt="Mother"
            className='arrow-icon'
          />
        </div>
      </div>
    </div>
  );
}

export default ThirdHomepage;
