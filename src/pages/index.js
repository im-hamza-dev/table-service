import * as React from "react";
import "./index.scss";
import ImgSide from "../assets/images/home-sectionb.png";
import Layout from "../components/Layout/layout";
import TopBanner from "../components/TopBanner/topbanner";
import ContentRow from "../components/ContentRow/contentrow";

const IndexPage = () => {
  return (
    <Layout>
      <TopBanner
        customId="home-section-a"
        heading={
          'THE <span class="yellow">SNAPPIEST</span> ORDER & PAY APP IN THE WORLD'
        }
        content="Game changing order and pay platform that offers a better way to do
        business"
        buttonText="WATCH VIDEO"
      />
      <ContentRow
        customId="home-section-b"
        heading={"Main introduction to TSA"}
        content="Introduction to the brand, our product, the speed and who are
        customers are , pubs, bars, resturants, hotels, takeaways etc.."
        sideImg={ImgSide}
        button
      />
    </Layout>
  );
};

export default IndexPage;
