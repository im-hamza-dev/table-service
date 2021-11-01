import * as React from "react";
import "./index.scss";
import { graphql } from "gatsby";
import Layout from "../components/Layout/layout";
import TopBanner from "../components/TopBanner/topbanner";
import ContentRow from "../components/ContentRow/contentrow";

const ContentPage4 = ({ data }) => {
  const topbanner = data?.contentPost4?.nodes[0]?.contentpage?.topbanner;
  const contentrows =
    data?.contentPost4?.nodes[0]?.contentpage?.contentrows || [];
  return (
    <Layout>
      <TopBanner
        type="D"
        customId="content4-section-a"
        heading={topbanner?.title}
        content={topbanner?.description}
        frontImage={topbanner?.frontimg?.sourceUrl}
      />
      {contentrows &&
        contentrows?.map((item, index) => (
          <ContentRow
            customId={`content4-${index}`}
            heading={item?.row?.title}
            content={item?.row?.description}
            sideImg={item?.row?.sideimage?.sourceUrl}
            right={item?.row?.imagelocation === "left"}
          />
        ))}
      <div className="content-page-button-parent">
        <a href="/blog" className="content-page-button">
          TELL ME MORE
        </a>
      </div>
    </Layout>
  );
};

export default ContentPage4;

export const query = graphql`
  query contentPageQuery4 {
    contentPost4: allWpPage(filter: { title: { eq: "ContentPage-4" } }) {
      nodes {
        contentpage {
          topbanner {
            title
            description
            button {
              link
              text
            }
            frontimg {
              id
              sourceUrl
              title
            }
          }
          contentrows {
            row {
              title
              description
              imagelocation
              sideimage {
                id
                sourceUrl
                title
              }
            }
          }
        }
      }
    }
  }
`;
