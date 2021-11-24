import React, { useEffect } from "react";
import "./tryform.scss";
import { createWidget } from "@typeform/embed";
import "@typeform/embed/build/css/widget.css";

const TryForm = (props) => {
  useEffect(() => {
    createWidget("THqKGdCq", { container: document.querySelector("#form") });
  });
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
      <div
        id="form"
        data-tf-widget="THqKGdCq"
        style={{ width: "100%", height: 500 }}
      ></div>

      <script src="//embed.typeform.com/next/embed.js"></script>
    </div>
  );
};

export default TryForm;
