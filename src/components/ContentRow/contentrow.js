import * as React from "react";
import "./contentrow.scss";

const ContentRow = (props) => {
  return (
    <div
      className={`content-row ${props.bgimg ? "enableimg" : ""} ${
        props.type === "home" ? "home" : ""
      }`}
    >
      <div
        className={`content-row-flex ${props.right ? "right" : ""}`}
        id={props.customId}
      >
        <div
          className={`content-row-text-parent ${
            props.sideImg ? "" : "only-text"
          } `}
        >
          <div>
            <div
              className="content-row-heading"
              dangerouslySetInnerHTML={{ __html: props.heading }}
            />
            <div
              className="content-row-content"
              dangerouslySetInnerHTML={{ __html: props.content }}
            />
          </div>
          {props.buttonText && props.buttonLink && (
            <a className="content-row-button" href={props.buttonLink}>
              {props.buttonText}
            </a>
          )}
        </div>
        {props.sideImg && (
          <div
            className={`content-row-img-parent ${
              props.type === "home" ? "imghome" : ""
            }`}
          >
            <img src={props.sideImg} alt="side-img" />
          </div>
        )}
      </div>
    </div>
  );
};

export default ContentRow;
