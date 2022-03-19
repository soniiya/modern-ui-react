import React from 'react';
import {images} from '../../constants';
import { SubHeading } from '../../components';
import './Chef.css';

const Chef = () => (
  <div className='app__bg app__wrapper section__padding'>
    <div className='app__wrapper_img app__wrapper_img-reverse'>
      <img src={images.chef} alt ="chefimg" />
    </div>

    <div className='app__wrapper_info'>
        <SubHeading 
          title="Chef's work"
        />
        <h1 className='headtext__cormorant'>What we believe in</h1>

        <div className='app__chef-content'>
            <div className='app__chef-content-quote'>
                <img src={images.quote} />
                <p className='p__opensans'>Culpa nostrud ullamco proident elit ullamco mollit tempor sit anim eu magna incididunt incididunt.</p>
            </div>
            <p className='p__opensans'>Fugiat mollit mollit magna occaecat elit cupidatat eu ut elit Lorem consequat magna. Tempor tempor elit Lorem laboris sunt qui amet nulla mollit id reprehenderit. Cupidatat anim voluptate ullamco in quis eu occaecat amet.</p>
        </div>

        <div className='app__chef-sign'>
        <p>Kevin Lou</p>
        <p className='p__opensans'>Chef & Founder</p>
        <img src={images.sign}/>
        </div>
    </div>
  </div>
);

export default Chef;
