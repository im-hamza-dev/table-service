import * as React from "react";
import "./index.scss";
import Layout from "../components/Layout/layout";

const IndexPage = () => {
  return (
    <Layout>
      <div className="home-section-a">
        <div className="home-section-a-heading">
          THE SNAPPIEST ORDER & PAY APP IN THE WORLD
        </div>
        <div className="home-section-a-content">
          Game changing order and pay platform that offers a better way to do
          business
        </div>
        <button className="home-section-a-button">WATCH VIDEO</button>
      </div>
    </Layout>
  );
};

export default IndexPage;
