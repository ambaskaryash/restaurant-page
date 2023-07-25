import React from 'react';

import { images } from '../../constants';
import './AboutUs.css';

const AboutUs = () => (
  <div className="app__aboutus app__bg flex__center section__padding" id="about">
    <div className="app__aboutus-overlay flex__center">
      <img src={images.T} alt="T_overlay" />
    </div>

    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">About Us</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">Have you ever had a Craving for a Delicious Juicy Burger with Fries, and you didn&apos;t want to get out of your Home due to bad weather, tiredness or simply because you didn&apos;t feel like it? Have you been sitting hungry because the good food you crave for being out of reach? You don&apos;t have to now. <b>&apos;The Secret Shop&apos;</b> is here!</p>
      </div>

      <div className="app__aboutus-content_knife flex__center">
        <img src={images.knife} alt="about_knife" />
      </div>

      <div className="app__aboutus-content_history">
        <h1 className="headtext__cormorant">Here&apos;s how it works:</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans"><ol type="number"><li>Call the Secret shop on 914-5646-914.</li><li>place an order from our <a href="#order">Menu.</a></li><li>Relax!</li></ol><br />We&apos;ll bring it to you, at work, at home, your kids sporting event, your gully cricket game. Wherever you may be, we will deliver to you!! </p>
        {/* <button type="button" className="custom__button">Know More</button> */}
      </div>
    </div>
  </div>
);

export default AboutUs;
