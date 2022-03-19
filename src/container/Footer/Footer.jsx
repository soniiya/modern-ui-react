import React from 'react';
import {FiFacebook,FiTwitter,FiInstagram} from 'react-icons/fi';
import {FooterOverlay , Newsletter} from '../../components';
import {images} from '../../constants';
import './Footer.css';

const Footer = () => (
  <div className='app__footer section__padding'>
    <FooterOverlay />
    <Newsletter />

    <div className='app__footer-links'>
    <div className='app__footer-links-contacts'>
        <h1 className='app__footer-headtext'>Contact us</h1>
        <p className='p__opensans'>Id veniam elit pariatur ut.</p>
        <p className='p__opensans'>Quis dolore nostrud est occ.</p>
        <p className='p__opensans'>Sint dolore id officia exe.</p>
    </div>

    <div className='app__footer-links-logo'>
      <img src={images.gericht} alt="logo" />
      <p className='p__opensans'>Deserunt nisi duis elit pariatur nisi ea aute cupidatat pariatur.</p>
      <img src={images.spoon} className='spoon__img' style={{marginTop: '15px'}} />
      <div className='app__footer-links-icons'>
        <FiFacebook />
        <FiTwitter />
        <FiInstagram />
      </div>
    </div>

    <div className='app__footer-links-work'>
    <h1 className='app__footer-headtext'>Working Hours</h1>
        <p className='p__opensans'>Id veniam elit pariatur ut.</p>
        <p className='p__opensans'>Quis dolore nostrud est occ.</p>
        <p className='p__opensans'>Sint dolore id officia exe.</p>
    </div>
    </div>
    <div className='footer__copyright'>
      <p className='p__opensans'>2022 Gericht. All right reserverd.</p>
    </div>
  </div>
);

export default Footer;
