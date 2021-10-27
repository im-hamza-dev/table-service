import * as React from "react";
import "./index.scss";
import ImgSide from "../assets/images/home-sectionb.png";
import ImgBlog from "../assets/images/home-bg-cover.png";
import Layout from "../components/Layout/layout";
import TopBanner from "../components/TopBanner/topbanner";
import ContentRow from "../components/ContentRow/contentrow";
import TabsServices from "../components/TabsServices/tabsservices";
import Reviews from "../components/Reviews/reviews";
import BlogPreview from "../components/BlogPreview/blogpreview";
import TryForm from "../components/TryForm/tryform";

const IndexPage = () => {
  return (
    <Layout>
      <TopBanner
        type="home"
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
      <TabsServices />
      <Reviews />
      <div className="home-section-blog-parent">
        <div className="home-section-blog-heading">Latest from the Blog</div>
        <div className="home-section-blog-flex">
          <div className="home-section-blog-item">
            <BlogPreview
              post={{
                heroImage: ImgBlog,
                title: "Customers return visits based on speed of ordering",
                subtitle:
                  "People are making choices on what venues to visits based on the speed of service",
              }}
            />
          </div>
          <div className="home-section-blog-item">
            <BlogPreview
              post={{
                heroImage: ImgBlog,
                title: "Customers return visits based on speed of ordering",
                subtitle:
                  "People are making choices on what venues to visits based on the speed of service",
              }}
            />
          </div>
          <div className="home-section-blog-item">
            <BlogPreview
              post={{
                heroImage: ImgBlog,
                title: "Customers return visits based on speed of ordering",
                subtitle:
                  "People are making choices on what venues to visits based on the speed of service",
              }}
            />
          </div>
        </div>
        <a href="/blog" className="home-section-blog-button">
          VIEW ALL
        </a>
      </div>
      <TryForm />
    </Layout>
  );
};

export default IndexPage;
