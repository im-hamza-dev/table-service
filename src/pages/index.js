import * as React from "react";
import "./index.scss";
import { graphql } from "gatsby";
import ImgSide from "../assets/images/home-sectionb.png";
import ImgBlog from "../assets/images/home-bg-cover.png";
import Layout from "../components/Layout/layout";
import TopBanner from "../components/TopBanner/topbanner";
import ContentRow from "../components/ContentRow/contentrow";
import TabsServices from "../components/TabsServices/tabsservices";
import Reviews from "../components/Reviews/reviews";
import BlogPreview from "../components/BlogPreview/blogpreview";
import TryForm from "../components/TryForm/tryform";

const IndexPage = ({ data }) => {
  const topbanner = data?.homePost?.nodes[0]?.home?.topbanner;
  const contentrow = data?.homePost?.nodes[0]?.home?.contentrow;
  const tabs = data?.homePost?.nodes[0]?.home?.tabs;
  const reviews = data?.homePost?.nodes[0]?.home?.reviews;

  return (
    <Layout>
      <TopBanner
        type="home"
        customId="home-section-a"
        heading={topbanner?.title}
        content={topbanner?.description}
        buttonText={topbanner?.button?.text}
        buttonLink={topbanner?.button?.link}
      />
      <ContentRow
        customId="home-section-b"
        heading={contentrow?.title}
        content={contentrow?.description}
        sideImg={contentrow?.sideimage?.sourceUrl}
        buttonText={contentrow?.button?.text}
        buttonLink={contentrow?.button?.link}
      />
      <TabsServices services={tabs} />
      <Reviews reviews={reviews || []} />
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

export const query = graphql`
  query homePage {
    homePost: allWpPage(filter: { title: { eq: "Home" } }) {
      nodes {
        home {
          fieldGroupName
          topbanner {
            description
            fieldGroupName
            title
            button {
              link
              text
            }
          }
          contentrow {
            title
            description
            sideimage {
              id
              sourceUrl
              title
            }
            button {
              text
              link
            }
          }
          tabs {
            title
            tabsgroup {
              tab {
                tabtitle
                title
                description
                points {
                  point
                }
              }
            }
          }
          reviews {
            review {
              title
              description
              name
              role
            }
          }
        }
      }
    }
  }
`;
