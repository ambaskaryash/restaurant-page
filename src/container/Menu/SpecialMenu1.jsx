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
        <p className="app__SpecialMenu1-menu_heading">Specials 2</p>
        <div className="app__SpecialMenu1_menu_items">
          {data.specials2.map((special2, index) => (
            <MenuItem key={special2.title + index} title={special2.title} price={special2.price} tags={special2.tags} />
          ))}
        </div>
      </div>

      <div className="app__SpecialMenu1-menu_rotis flex__center">
        <p className="app__SpecialMenu1-menu_heading">For the Friend In Need</p>
        <div className="app__SpecialMenu1_menu_items">
          {data.friends.map((friend, index) => (
            <MenuItem key={friend.title + index} title={friend.title} price={friend.price} tags={friend.tags} />
          ))}
        </div>
      </div>
    </div>
    <div className="app__SpecialMenu1-title">
      <SubHeading title="**Rates shown may vary." />
    </div>

  </div>
);

export default SpecialMenu11;
