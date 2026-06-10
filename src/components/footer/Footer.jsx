import React from "react";
import { assets } from "../../assets/assets.js";
import "./footer.css";
function Footer() {
  return (
    <div className="footer">

      <div className="footmain">
        <img src={assets.logo} alt="logo" />
        <div>
          Discover the world's most extraordinary places to stay from bountique
          hotel to luxury villas and private islands
        </div>
        <div className="social">
          <img src={assets.instagramIcon} alt="" />
          <img src={assets.facebookIcon} alt="" />
          <img src={assets.twitterIcon} alt="" />
          <img src={assets.linkendinIcon} alt="" />
        </div>
      </div>
      <div className="foot-comoponysupport">
      <div className="foot-compony">
        <h3>COMPANY</h3>
        <ul>
          <li>About</li>
          <li>Careers</li>
          <li>Press</li>
          <li>Blog</li>
          <li>Partners</li>
        </ul>
      </div>
      <div className="foot-support">
        <h3>SUPPORT</h3>
        <ul>
          <li>Help Center</li>
          <li>Safrty information</li>
          <li>Cancellation Options</li>
          <li>Contact Us</li>
          <li>Accessibility</li>
        </ul>
      </div>
      </div>
      <div className="foot-update">
        <h3>STAY UPDATED</h3>
        <p>Subscribe to our newsletter for travel insperation and special offers</p>
      <div className="foot-email">
        <input type="text" placeholder="Your email" autoCorrect="" autoComplete="false" />
        <button type="submit" value="Submit" >
          <img src={assets.arrowIcon} alt=""  />
        </button>
      </div>
      </div>
    </div>
  );
}

export default Footer;
