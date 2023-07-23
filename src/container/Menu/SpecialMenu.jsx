import React from 'react';

import { SubHeading, MenuItem } from '../../components';
import { data } from '../../constants';
import './SpecialMenu.css';

const SpecialMenu = () => (
  <div className="app__specialMenu flex__center section__padding" id="menu">
    <div className="app__specialMenu-title">
      <h1 className="headtext__cormorant">Menu</h1>
    </div>

    <div className="app__specialMenu-menu">
      <div className="app__specialMenu-menu_biryani  flex__center">
        <p className="app__specialMenu-menu_heading">Burgers</p>
        <div className="app__specialMenu_menu_items">
          {data.burgers.map((burgers, index) => (
            <MenuItem key={burgers.title + index} title={burgers.title} price={burgers.price} tags={burgers.tags} />
          ))}
        </div>
      </div>

      <div className="app__specialMenu-menu_chickenMainCourse  flex__center">
        <p className="app__specialMenu-menu_heading">Sandwich Burger</p>
        <div className="app__specialMenu_menu_items">
          {data.sandwichburger.map((sandwichburgers, index) => (
            <MenuItem key={sandwichburgers.title + index} title={sandwichburgers.title} price={sandwichburgers.price} tags={sandwichburgers.tags} />
          ))}
        </div>
      </div>

      <div className="app__specialMenu-menu_eggMainCourse  flex__center">
        <p className="app__specialMenu-menu_heading">Specials</p>
        <div className="app__specialMenu_menu_items">
          {data.specials.map((special, index) => (
            <MenuItem key={special.title + index} title={special.title} price={special.price} tags={special.tags} />
          ))}
        </div>
      </div>

      <div className="app__specialMenu-menu_eggMainCourse  flex__center">
        <p className="app__specialMenu-menu_heading">Fries</p>
        <div className="app__specialMenu_menu_items">
          {data.fries.map((fries, index) => (
            <MenuItem key={fries.title + index} title={fries.title} price={fries.price} tags={fries.tags} />
          ))}
        </div>
      </div>
    </div>
    <div className="app__specialMenu-title">
      <SubHeading title="**Rates shown may vary." />
    </div>
  </div>
);

export default SpecialMenu;
