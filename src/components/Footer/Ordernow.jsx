import React from 'react';

import SubHeading from '../SubHeading/SubHeading';
import { images } from '../../constants';
import './Ordernow.css';

const Ordernow = () => (
  <div className="app__ordernow" id="order">
    <div className="app__ordernow-heading">
      <SubHeading title="Order Now" />
      <p className="p__opensans">Why wait? Satisfy your cravings now!</p>
      <a href="https://www.swiggy.com/restaurants/the-secret-shop-mate-square-swavlambi-nagar-nagpur-53221" target="_blank" rel="noreferrer" id="first">
        <img src={images.swiggy} alt="swiggiy_icon" height="50" width="100" />
      </a>
      <a href="http://zoma.to/r/3301180" target="_blank" rel="noreferrer" id="second">
        <img src={images.zomato} alt="zomato_icon" height="50" width="100" />
      </a>
    </div>
  </div>
);

export default Ordernow;
