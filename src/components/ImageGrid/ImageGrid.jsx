

import React, { useState } from 'react';
import './Imagegrid.css';
import { Pictures } from '../../utils/images';

const ImageGrid = () => {
  const [isImageHovered, setIsImageHovered] = useState(false);

  const handleButtonClick = () => {
    setIsImageHovered(!isImageHovered);
  };

        
  return (
    <div id='services'>
    <div className='container'>
       <div className='boxContainer'>
       <div className='image-containerOne image-container'>
  <img
    src={Pictures.HomeInsure}
    alt="image 1"
    className={isImageHovered ? 'image-hovered' : ''}
  />
  <br />
  <button className='custom-button' onClick={handleButtonClick}>
    Home insurance
  </button>
</div>




        <div className='image-containertwo'>
            <img src={Pictures.Beach} alt="image 2" />
        </div>
        <div className='image-containerthree image-containerB'>
            <h3>Best choice</h3>
            <p>Not all insurance are same. <br />
                That's why agency
                 knows that your <br />
                insurance should be customised to 
                fit your situation</p>
            <button className='custom-buttonB'>View all services</button>
        </div>
       </div>



       <div className='secondRow'>
       <div className='secondRowOne image-containerC'>
  <img
    src={Pictures.Vehicle}
    alt="image 3"
    className={isImageHovered ? 'image-hovered' : ''}
  />
  <br />
  <button className='custom-button' onClick={handleButtonClick}>
    Vehicle damage
  </button>
</div>




<div className='secondRowtwo image-containerC'>
  <img
    src={Pictures.Mortage}
    alt="image 4"
    className={isImageHovered ? 'image-hovered' : ''}
  />
  <br />
  <button className='custom-buttonB' onClick={handleButtonClick}>
  Mortgage insurance
  </button>
</div>

<div className='secondRowthree image-containerC'>
  <img
    src={Pictures.medical}
    alt="image 5"
    className={isImageHovered ? 'image-hovered' : ''}
  />
  <br />
  <button className='custom-buttonC' onClick={handleButtonClick}>
  Mortgage insurance
  </button>
</div>

       </div>
     </div>
     </div>
  );
};

export default ImageGrid;
