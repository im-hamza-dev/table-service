import * as React from "react";
import "./index.scss";
import { graphql } from "gatsby";
import Layout from "../components/Layout/layout";
import TopBanner from "../components/TopBanner/topbanner";
import ContentRow from "../components/ContentRow/contentrow";
import TabsServices from "../components/TabsServices/tabsservices";
import Reviews from "../components/Reviews/reviews";
import BlogPreview from "../components/BlogPreview/blogpreview";
import TryForm from "../components/TryForm/tryform";
import Benefits from "../components/Benefits/benefits";
import Seo from "../components/Seo/seo";

const IndexPage = ({ data }) => {
  const topbanner = data?.homePost?.nodes[0]?.home?.topbannerhome;
  const contentrow = data?.homePost?.nodes[0]?.home?.contentrow;
  const tabs = data?.homePost?.nodes[0]?.home?.tabs;
  const reviews = data?.homePost?.nodes[0]?.home?.reviews;
  const benefits = data?.homePost?.nodes[0]?.home?.benefits;
  const form = data?.homePost?.nodes[0]?.home?.form;
  const seo = data?.homePost?.nodes[0]?.home?.seometainfo;

  const allblogs = (data && data.allWpPost && data.allWpPost?.edges) || [];
  const blogsLatest = allblogs?.filter(
    (item) => item?.node?.blog?.category === "Latest"
  );

  console.log(data);
  return (
    <Layout>
      <Seo
        title={seo?.title}
        keywords={seo?.keywords}
        description={seo?.description}
      />
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
        bgimg
        right
        type="home"
      />
      <TabsServices services={tabs} />
      <Reviews reviews={reviews || []} />
      <Benefits benefits={benefits} />
      <div className="home-section-blog-parent">
        <div className="home-section-blog-heading">Latest from the Blog</div>
        <div className="home-section-blog-flex">
          {blogsLatest &&
            blogsLatest?.map((item, index) => (
              <div className="home-section-blog-item" key={`blog-${index}`}>
                <BlogPreview
                  post={{
                    heroImage: item?.node?.blog?.blogimage?.sourceUrl,
                    title: item?.node?.blog?.title,
                    subtitle: item?.node?.blog?.subtitle,
                    slug: item?.node?.slug,
                    category: item?.node?.blog?.category,
                  }}
                />
              </div>
            ))}
        </div>
        <a href="/blog" className="home-section-blog-button">
          VIEW ALL
        </a>
      </div>
      <TryForm form={form} />
    </Layout>
  );
};

export default IndexPage;

export const query = graphql`
  query homePage {
    homePost: allWpPage(filter: { id: { eq: "cG9zdDoyMjI2" } }) {
      nodes {
        home {
          fieldGroupName
          seometainfo {
            title
            description
            keywords {
              word
            }
          }
          form {
            title
            description
          }
          topbannerhome {
            description
            fieldGroupName
            title
            button {
              link
              text
            }
          }
          benefits {
            description
            heading
            sideimg {
              id
              sourceUrl
              title
            }
            points {
              point {
                title
                content
                icon {
                  title
                  sourceUrl
                  id
                }
              }
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
            description
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
    allWpPost {
      edges {
        node {
          ...BlogPreviewFields2
        }
      }
    }
  }
`;

export const BlogPreviewFields = graphql`
  fragment BlogPreviewFields2 on WpPost {
    slug
    title
    blog {
      title
      subtitle
      description
      category
      blogimage {
        title
        sourceUrl
        id
      }
    }
  }
`;
