import * as React from "react";
import "./index.scss";
import ImgSide from "../assets/images/home-sectionb.png";
import Layout from "../components/Layout/layout";
import TopBanner from "../components/TopBanner/topbanner";
import ContentRow from "../components/ContentRow/contentrow";

const ContentPage1 = () => {
  return (
    <Layout>
      <TopBanner
        type="A"
        customId="features-section-a"
        heading={
          'Look after your regular customer & make more <span class="yellow">profit</span>'
        }
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "
        buttonText="TELL ME MORE"
      />
      <ContentRow
        customId="features-section-b"
        heading={"Reduce current Fee's"}
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. <br/><br/> Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        sideImg={ImgSide}
      />
      <ContentRow
        customId="features-section-b"
        heading={"0% Commission Fees"}
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. <br/><br/> Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        sideImg={ImgSide}
        right={true}
      />
      <ContentRow
        customId="features-section-b"
        heading={"Regular Customer"}
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. <br/><br/> Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        sideImg={ImgSide}
      />
      <div className="content-page-button-parent">
        <a href="/blog" className="content-page-button">
          TELL ME MORE
        </a>
      </div>
    </Layout>
  );
};

export default ContentPage1;
