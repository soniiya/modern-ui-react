import React from 'react';
import { images } from '../../constants';
import './AboutUs.css';

const AboutUs = () => (
  <div className='app__aboutus app__bg flex__center section__padding' id='about'>
   <div className='app__aboutus-overlay flex__center'> 
    <img src={images.G} alt="g letter" />
    </div>
  
  <div className='app__aboutus-content flex__center'>
  <div className='app__aboutus-content_about'>
    <h1 className='headtext__cormorant'>About us</h1>
    <img src={images.spoon} alt="about_spoon" className='spoon__img'/>
    <p className='p__opensans'>Velit officia dolore magna proident. Sint incididunt veniam ut commodo do duis voluptate culpa irure elit anim qui reprehenderit pariatur. Irure esse reprehenderit irure ad nisi id commodo.</p>
    <button className='custom__button' type="button" >Know more</button>
  </div>

    <div className='app__aboutus-content-knife'>
      <img src={images.knife} alt="knife" />
    </div>

  <div className='app__aboutus-content_history'>
    <h1 className='headtext__cormorant'>Our History</h1>
    <img src={images.spoon} alt="about_spoon" className='spoon__img'/>
    <p className='p__opensans'>Velit officia dolore magna proident. Sint incididunt veniam ut commodo do duis voluptate culpa irure elit anim qui reprehenderit pariatur. Irure esse reprehenderit irure ad nisi id commodo.</p>
    <button className='custom__button' type="button" >Know more</button>
  </div>
  </div>
  
  </div>
);

export default AboutUs;
