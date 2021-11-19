import React from "react";
import "./benefits.scss";

const Benefits = (props) => {
  console.log(".");

  return (
    <div className="benefits">
      <div
        className="benefits-heading"
        dangerouslySetInnerHTML={{ __html: props.benefits?.heading }}
      />
      <div
        className="benefits-description"
        dangerouslySetInnerHTML={{ __html: props.benefits?.description }}
      />

      <div className="benefits-parent">
        <div className="benefits-left">
          {props.benefits?.points?.map((item, index) => (
            <div className="benefits-left-point">
              <div className="benefits-left-point-flex">
                <img
                  src={item?.point?.icon?.sourceUrl}
                  alt={item?.point?.icon?.title}
                />
                <div
                  className="benefits-left-heading"
                  dangerouslySetInnerHTML={{ __html: item?.point?.title }}
                />
              </div>

              <div
                className="benefits-left-content"
                dangerouslySetInnerHTML={{ __html: item?.point?.content }}
              />
            </div>
          ))}
        </div>
        <div className="benefits-right">
          <img
            src={props.benefits?.sideimg?.sourceUrl}
            alt="benefits-sideimg"
          />
        </div>
      </div>
    </div>
  );
};

export default Benefits;
