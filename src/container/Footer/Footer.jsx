import React from 'react';
import { FiMapPin, FiFacebook, FiInstagram } from 'react-icons/fi';

import { FooterOverlay, Ordernow } from '../../components';
import { images } from '../../constants';
import './Footer.css';

const currYear = new Date().getFullYear();

const Footer = () => (
  <div className="app__footer section__padding" id="login">
    <FooterOverlay />
    <Ordernow />

    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext">Contact Us</h1>
        <p className="p__opensans">Shop no. 6, Magh Appts, Square, opposite Padole Hospital, Swavalambi Nagar, Nagpur, Maharashtra 440022</p>
        <p className="p__opensans">+91 91456 46914</p>
      </div>

      <div className="app__footer-links_logo">
        <img src={images.tkb} alt="footer_logo" />
        <p className="p__opensans">&quot;Serving the best burgers in town since 2014. No place for vegans.&quot;</p>
        {/* <p className="p__opensans"><i>fssai</i> License No. 21422170001323</p> */}
        <img src={images.spoon} className="spoon__img" style={{ marginTop: 15 }} />
        <div className="app__footer-links_icons">
          <a href="https://goo.gl/maps/MYRTepTvscQYBRLJ8" target="_blank" rel="noreferrer">
            <FiMapPin />
          </a>
          <a href="https://www.facebook.com/thesecretshopnagpur" target="_blank" rel="noreferrer">
            <FiFacebook />
          </a>
          <a href="https://www.instagram.com/thesecretshopnagpur/" target="_blank" rel="noreferrer">
            <FiInstagram />
          </a>
        </div>
      </div>

      <div className="app__footer-links_work">
        <h1 className="app__footer-headtext">Working Hours</h1>
        <p className="p__opensans">Monday-Sunday:</p>
        <p className="p__opensans">12:00 pm - 10:30 pm</p>
        <p className="p__opensans">On Holidays:</p>
        <p className="p__opensans">Timings may differ</p>
      </div>
    </div>

    <div className="footer__copyright">
      <p className="p__opensans">{currYear} The Secret Shop. All Rights reserved.</p>
    </div>

  </div>
);

export default Footer;
