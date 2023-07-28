
import React from 'react';
import Swipper from '../../swipperslides/Swipper';
import CircleFonts from '../../utils/CircleFonts';
import './FourthpageStyle.css'; 

function FourthPage() {
  return (
    <div  id='aboutus' className='SlideContainer'>
      <div>
        <div className='swipperdiv'>
        <Swipper />
        </div>
      </div>
      <div className='exp'>
        <div>
      <CircleFonts/>
      </div>
        <h2>Our <br />
          Expert <br />
          say
        </h2>
      </div>
    </div>
  );
}

export default FourthPage;
