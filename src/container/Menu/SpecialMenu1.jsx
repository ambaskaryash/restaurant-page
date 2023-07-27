import React from 'react';

import { SubHeading, MenuItem } from '../../components';
import { data } from '../../constants';
import './SpecialMenu1.css';

const SpecialMenu11 = () => (
  <div className="app__SpecialMenu1 flex__center section__padding" id="menu">
    <div className="app__SpecialMenu1-title">
      <h1 className="headtext__cormorant">Special Menu</h1>
    </div>

    <div className="app__SpecialMenu1-menu">

      <div className="app__specialMenu-menu_eggMainCourse  flex__center">
        <p className="app__specialMenu-menu_heading">Specials</p>
        <div className="app__specialMenu_menu_items">
          {data.specials.map((special, index) => (
            <MenuItem key={special.title + index} title={special.title} price={special.price} tags={special.tags} />
          ))}
        </div>
      </div>

      <div className="app__SpecialMenu1-menu_rolls  flex__center">
        <p className="app__SpecialMenu1-menu_heading">Beverages</p>
        <div className="app__SpecialMenu1_menu_items">
          {data.beverages.map((beverage, index) => (
            <MenuItem key={beverage.title + index} title={beverage.title} price={beverage.price} tags={beverage.tags} />
          ))}
        </div>
      </div>

      <div className="app__SpecialMenu1-menu_rotis  flex__center">
        <p className="app__SpecialMenu1-menu_heading">Roti</p>
        <div className="app__SpecialMenu1_menu_items">
          {data.rotis.map((roti, index) => (
            <MenuItem key={roti.title + index} title={roti.title} price={roti.price} tags={roti.tags} />
          ))}
        </div>
      </div>
    </div>
    <div className="app__SpecialMenu1-title">
      <SubHeading title="**Rates shown only for half plate" />
    </div>

  </div>
);

export default SpecialMenu11;
