import * as React from "react";
import "./topbanner.scss";
import Snap from "../../assets/svg/snap.svg";

const TopBanner = ({
  customId,
  heading,
  content,
  buttonText,
  type,
  buttonLink,
  frontImage,
}) => {
  return (
    <div
      className={`top-banner ${type === "home" ? "home" : ""} ${
        type === "A" ? "content-A" : ""
      } ${type === "B" ? "content-B" : ""} ${type === "C" ? "content-C" : ""}
      ${type === "D" ? "content-D" : ""}      
      `}
      id={customId}
    >
      {type === "D" && (
        <img
          className="top-banner-typeD-mockup"
          src={frontImage}
          alt="mobile-mockup"
        />
      )}
      <div
        className={`top-banner-content-parent ${type === "D" ? "typeD" : ""}`}
      >
        <div className={type === "home" ? "headingParent" : ""}>
          {type === "home" && <img src={Snap} alt="snap-icon" />}

          <div
            className="top-banner-heading"
            dangerouslySetInnerHTML={{ __html: heading }}
          />
        </div>

        <div
          className="top-banner-content"
          dangerouslySetInnerHTML={{ __html: content }}
        />
        {buttonText && buttonLink && (
          <a href={buttonLink} className="top-banner-button">
            {buttonText}
          </a>
        )}
      </div>

      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 257">
        <path
          fill={`${type === "home" ? "#f4f5ff" : "#ffffff"}`}
          fillOpacity="1"
          d="M0,64L60,69.3C120,75,240,85,360,117.3C480,149,600,203,720,202.7C840,203,960,149,1080,117.3C1200,85,1320,75,1380,69.3L1440,64L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
        ></path>
      </svg>
    </div>
  );
};

export default TopBanner;
