import React from "react";
import "./footer.scss";
import { useStaticQuery, graphql } from "gatsby";
import LogoFooter from "../../assets/svg/footer-icon.svg";
import Facebook from "../../assets/svg/fb.svg";
import Instagram from "../../assets/svg/ins.svg";
import Linkedin from "../../assets/svg/link.svg";
import Twitter from "../../assets/svg/tw.svg";
import Youtube from "../../assets/svg/youtube.svg";

const Footer = () => {
  const data = useStaticQuery(graphql`
    query footerQuery {
      footerData: allWpPage(filter: { title: { eq: "Footer" } }) {
        nodes {
          footer {
            description
            facebook
            instagram
            linkedin
            title
            twitter
            youtube
            button {
              link
              text
            }
            contactus {
              appname
              telephone
              email
              companyno
              address
            }
          }
        }
      }
    }
  `);
  const footer = data?.footerData?.nodes[0]?.footer;
  console.log(data);
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
              <div
                className="footer-item-heading"
                dangerouslySetInnerHTML={{ __html: footer?.title }}
              />
              <div
                className="footer-item-text"
                dangerouslySetInnerHTML={{ __html: footer?.description }}
              />

              {footer?.button?.text && (
                <a href={footer?.button?.link} className="footer-item-button">
                  {footer?.button?.text}
                </a>
              )}
              <div className="footer-item-social">
                <div className="footer-icons-parent">
                  {footer?.facebook && (
                    <a href={footer?.facebook}>
                      <img src={Facebook} alt="facebook" />
                    </a>
                  )}
                  {footer?.instagram && (
                    <a href={footer?.instagram}>
                      <img src={Instagram} alt="instagram" />
                    </a>
                  )}
                  {footer?.linkedin && (
                    <a href={footer?.linkedin}>
                      <img src={Linkedin} alt="linkedin" />
                    </a>
                  )}
                  {footer?.twitter && (
                    <a href={footer?.twitter}>
                      <img src={Twitter} alt="twitter" />
                    </a>
                  )}
                  {footer?.youtube && (
                    <a href={footer?.youtube}>
                      <img src={Youtube} alt="youtube" />
                    </a>
                  )}
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
                <div>{footer?.contactus?.appname}</div>
                <div>t: {footer?.contactus?.telephone}</div>
                <div>e: {footer?.contactus?.email}</div>
                <br />
                <div>Company No. {footer?.contactus?.companyno}</div>
                <div>Registered Address: {footer?.contactus?.address}</div>
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
