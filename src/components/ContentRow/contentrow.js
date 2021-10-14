import * as React from "react";
import "./contentrow.scss";

const ContentRow = (props) => {
  return (
    <div className="content-row">
      <div className="content-row-flex" id={props.customId}>
        <div className="content-row-text-parent">
          <div>
            <div
              className="content-row-heading"
              dangerouslySetInnerHTML={{ __html: props.heading }}
            />
            <div className="content-row-content">{props.content}</div>
          </div>
          <button className="content-row-button">Tell me more</button>
        </div>
        <div className="content-row-img-parent">
          <img src={props.sideImg} alt="side-img" />
        </div>
      </div>
    </div>
  );
};

export default ContentRow;
