import React from "react";
import "./tryform.scss";
// import { createWidget } from "@typeform/embed";
// import "@typeform/embed/build/css/widget.css";
// createWidget("THqKGdCq", { container: document.querySelector("#form") });
import { Widget } from "@typeform/embed-react";

const TryForm = (props) => {
  // useEffect(() => {
  // });
  return (
    <div className="try-form">
      <div
        className="try-form-heading"
        dangerouslySetInnerHTML={{ __html: props.form.title }}
      />

      <div
        className="try-form-desc"
        dangerouslySetInnerHTML={{ __html: props.form.description }}
      />
      {/* <div
        id="form"
        data-tf-widget="THqKGdCq"
        data-tf-disable-auto-focus
        style={{ width: "100%", height: 500 }}
      ></div>

      <script src="//embed.typeform.com/next/embed.js"></script> */}
      <Widget
        id="THqKGdCq"
        disableAutoFocus
        style={{ width: "100%", height: 500 }}
        className="my-form"
      />
    </div>
  );
};

export default TryForm;
