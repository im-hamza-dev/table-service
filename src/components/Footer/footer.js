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
          <div className="footer-item-heading">CONTACT US</div>
          <div className="footer-item-text">287A Outram Road,</div>
          <div className="footer-item-text">Singapore 169070</div>
          <div className="footer-item-text">chat@noodlefactory.ai</div>
          <div className="footer-item-social">
            <div className="footer-item-heading">FOLLOW US ON</div>
            <div className="footer-icons-parent">
              {
                <a href="https://www.linkedin.com/">
                  <img src={Linkedin} alt="linkedin" />
                </a>
              }
              {
                <a href="https://www.facebook.com/">
                  <img src={Facebook} alt="facebook" />
                </a>
              }
              {
                <a href="https://www.instagram.com/">
                  <img src={Instagram} alt="instagram" />
                </a>
              }
              {
                <a href="https://twitter.com/?lang=en">
                  <img src={Twitter} alt="twitter" />
                </a>
              }
            </div>
          </div>
        </div>
        <div className="footer-item">
          <div className="footer-item-heading">HOW IT WORKS</div>
          <a className="footer-item-text" href="/how-it-works#aipowered">
            AI-Powered
          </a>
          <a className="footer-item-text" href="/how-it-works#features">
            Features
          </a>
          <a className="footer-item-text" href="/how-it-works#pricing">
            Pricing
          </a>
          <a className="footer-item-text" href="/how-it-works#faq">
            FAQs
          </a>
        </div>
        <div className="footer-item">
          <div className="footer-item-heading">USE CASES</div>
          <a className="footer-item-text" href="/use-cases#education">
            Education
          </a>
          <a className="footer-item-text" href="/use-cases#adult-learning">
            Adult Learning
          </a>
        </div>
        <div className="footer-item">
          <div className="footer-item-heading">ABOUT US</div>
          <a className="footer-item-text" href="/about-us#our-origin-story">
            Our Origin Story
          </a>
          <a className="footer-item-text" href="/about-us#meet-the-team">
            Meet The Team
          </a>
          <a className="footer-item-text">In the News</a>
          <a className="footer-item-text" href="/about-us#work-with-us">
            Work with Us
          </a>
        </div>
        <div className="footer-item">
          <div className="footer-item-heading">RESOURCES</div>
          <a className="footer-item-text" href="/resources">
            Blog
          </a>
          <a className="footer-item-text" href="/resources">
            Media Gallery
          </a>
          <a className="footer-item-text" href="/resources">
            Past Webinars
          </a>
        </div>
        <div className="footer-item">
          <div className="footer-item-heading">INFORMATION</div>
          <div className="footer-item-text">Privacy Policy</div>
          <div className="footer-item-text">End User License Agreement</div>
          <div className="footer-item-text">Terms of Service</div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
