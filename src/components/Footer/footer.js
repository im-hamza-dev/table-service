import React from "react";
import "./footer.scss";
import LogoFooter from "../../assets/svg/footer-icon.svg";
import Facebook from "../../assets/svg/fb.svg";
import Instagram from "../../assets/svg/ins.svg";
import Linkedin from "../../assets/svg/link.svg";
import Twitter from "../../assets/svg/tw.svg";
import Youtube from "../../assets/svg/youtube.svg";

const Footer = () => {
  return (
    <>
      <div className="footer-parent">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#ffffff"
            fillOpacity="1"
            d="M0,64L60,69.3C120,75,240,85,360,117.3C480,149,600,203,720,202.7C840,203,960,149,1080,117.3C1200,85,1320,75,1380,69.3L1440,64L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
          ></path>
        </svg>
        <div className="footer">
          <div className="footer-row-1">
            <div className="footer-item">
              <img
                src={LogoFooter}
                alt="footer-icon"
                className="footer-item-icon"
              />
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
                  <a href="https://twitter.com/?lang=en">
                    <img src={Youtube} alt="youtube" />
                  </a>
                </div>
              </div>
            </div>
            <div className="footer-item">
              <div className="footer-item-heading">Pages</div>
              <a className="footer-item-text" href="/">
                Who we are
              </a>
              <a className="footer-item-text" href="/">
                Our Team
              </a>
              <a className="footer-item-text" href="/">
                How It Works
              </a>
              <a className="footer-item-text" href="/">
                Blog
              </a>
              <a className="footer-item-text" href="/">
                Features
              </a>
              <a className="footer-item-text" href="/">
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
              <div>Terms of Use</div> <span> |</span>
              <div>Terms of Service</div> <span> |</span>
              <div>Privacy Policy</div>
            </div>
            <div>Table Service App Limited</div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Footer;
