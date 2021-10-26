import * as React from "react";
import "./tryform.scss";

const TryForm = (props) => {
  const handleSubmit = () => {};
  return (
    <div className="try-form">
      <div className="try-form-heading">Try our platform</div>
      <div className="try-form-desc">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam,
      </div>
      <div className="form-parent">
        <form
          name="demo"
          method="post"
          action="/thanks/"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          onSubmit={handleSubmit}
          id="demo-form"
        >
          <div className="form-group">
            <div className="flex-input">
              <input
                type="text"
                required
                id="demo-input-firstname"
                name="firstname"
                placeholder="First name*"
              />
              <input
                type="text"
                required
                id="demo-input-lastname"
                name="lastname"
                placeholder="Last name*"
              />
            </div>
            <input
              type="text"
              required
              id="demo-input-email"
              name="email"
              placeholder="Email Address*"
              className="full-width"
            />
            <div className="flex-input">
              <input
                type="text"
                required
                id="demo-input-postcode"
                name="postcode"
                placeholder="Postcode*"
              />
              <input
                type="text"
                required
                id="demo-input-phone"
                name="phone"
                placeholder="Phone*"
              />
            </div>
            <div className="flex-input">
              <input
                type="text"
                required
                id="demo-input-companyname"
                name="companyName"
                placeholder="Company Name"
              />
              <input
                type="text"
                required
                id="demo-input-Looking for"
                name="lookingFor"
                placeholder="Looking For?*"
              />
            </div>
          </div>

          <div>
            <button type="submit" className="form-submit-button">
              get in touch
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TryForm;
