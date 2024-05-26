import React from 'react';
import styled from 'styled-components';
import ImageSlider from './ImageSlider';
import '../styles/MainCon.css';


const images = [
  'public/images/art1.jpeg',
  'public/images/art2.jpeg',
  'public/images/art3.jpeg',
  'public/images/art4.jpeg'
];

const MainContent = () => (
  <div className='page-main-con'>
    <p>
      LIFEX IS MORE THAN JUST A SA-MP SERVER IT'S A COMMUNITY OF ROLEPLAYERS WHO LOVE GTA SA.
      WE CREATE, EXPLORE, AND ENJOY NEW FEATURES EVERY DAY.
    </p>
    <ImageSlider images={images} interval={3000} />
    
    <button>JOIN ASAP!</button>
  </div>
);

export default MainContent;
