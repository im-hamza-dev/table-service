import React from "react";
import "./footer.scss";
import Facebook from "../../assets/svg/fb.svg";
import Instagram from "../../assets/svg/ins.svg";
import Linkedin from "../../assets/svg/link.svg";
import Twitter from "../../assets/svg/tw.svg";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-row-1">
        <div className="footer-item">
          <div className="footer-item-heading">
            Get setup and running within 30 mins...
          </div>
          <div className="footer-item-text">
            You are 30 minutes away from having the fastest, easiest to use
            order and pay platform in the world.
          </div>
          <button className="footer-item-button">Join Now</button>
          <div className="footer-item-social">
            <div className="footer-icons-parent">
              <a href="https://www.facebook.com/">
                <img src={Facebook} alt="facebook" />
              </a>

              <a href="https://www.instagram.com/">
                <img src={Instagram} alt="instagram" />
              </a>

              <a href="https://www.linkedin.com/">
                <img src={Linkedin} alt="linkedin" />
              </a>

              <a href="https://twitter.com/?lang=en">
                <img src={Twitter} alt="twitter" />
              </a>
            </div>
          </div>
        </div>
        <div className="footer-item">
          <div className="footer-item-heading">Pages</div>
          <a className="footer-item-text" href="/how-it-works#aipowered">
            Who we are
          </a>
          <a className="footer-item-text" href="/how-it-works#features">
            Our Team
          </a>
          <a className="footer-item-text" href="/how-it-works#pricing">
            How It Works
          </a>
          <a className="footer-item-text" href="/how-it-works#faq">
            Blog
          </a>
          <a className="footer-item-text" href="/how-it-works#faq">
            Features
          </a>
          <a className="footer-item-text" href="/how-it-works#faq">
            Pricing
          </a>
        </div>
        <div className="footer-item">
          <div className="footer-item-heading">Contact Us</div>
          <div className="footer-item-text">
            <div>Table Service App Ltd</div>
            <div>t: 0800 048 5790</div>
            <div>e: hello@tablesserviceapp.com</div>
            <br />
            <div>Company No. 13310818</div>
            <div>Registered Address: 6th Floor</div>
            <div>49 Peter Street, Manchester</div>
            <div>United Kingdom, M2 3NG</div>
          </div>
        </div>
      </div>
      <hr />
      <div className="footer-row-2">
        <div className="footer-row-2-sub-flex">
          <div>Terms of Use</div> |<div>Terms of Service</div> |
          <div>Privacy Policy</div>
        </div>
        <div>Table Service App Limited</div>
      </div>
    </div>
  );
};
export default Footer;
