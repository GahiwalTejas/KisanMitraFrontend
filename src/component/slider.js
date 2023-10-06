import React from 'react';
import { BsTextCenter } from 'react-icons/bs';
import SimpleImageSlider from 'react-simple-image-slider';
import './Sliders.css'; 

const images = [
    '../assets/Farmer01.png',
    '../assets/farmer11.png'
];

function slider() {
  return (
    <div className="slider-container">
      <div className="slider-wrapper">
        <SimpleImageSlider
          width={1400}
          height={500}
          images={images}
          placeItem={BsTextCenter}
          showBullets={true}
          showNavs={true}
          autoPlay={true}
        />
      </div>
    </div>
  );
}

export default slider;