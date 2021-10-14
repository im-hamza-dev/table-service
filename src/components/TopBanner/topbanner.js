import * as React from "react";
import "./topbanner.scss";

const TopBanner = (props) => {
  return (
    <div className="top-banner" id={props.customId}>
      <div className="top-banner-content-parent">
        <div
          className="top-banner-heading"
          dangerouslySetInnerHTML={{ __html: props.heading }}
        />
        <div className="top-banner-content">{props.content}</div>
        <button className="top-banner-button">{props.buttonText}</button>
      </div>

      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 257">
        <path
          fill="#ffffff"
          fill-opacity="1"
          d="M0,64L60,69.3C120,75,240,85,360,117.3C480,149,600,203,720,202.7C840,203,960,149,1080,117.3C1200,85,1320,75,1380,69.3L1440,64L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
        ></path>
      </svg>
    </div>
  );
};

export default TopBanner;
