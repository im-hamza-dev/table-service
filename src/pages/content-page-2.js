import * as React from "react";
import "./index.scss";
import { graphql } from "gatsby";
import Layout from "../components/Layout/layout";
import TopBanner from "../components/TopBanner/topbanner";
import ContentRow from "../components/ContentRow/contentrow";

const ContentPage2 = ({ data }) => {
  const topbanner = data?.contentPost2?.nodes[0]?.contentpage?.topbanner;
  const contentrows =
    data?.contentPost2?.nodes[0]?.contentpage?.contentrows || [];
  return (
    <Layout>
      <TopBanner
        type="B"
        customId="content2-section-a"
        heading={topbanner?.title}
        content={topbanner?.description}
        buttonText={topbanner?.button?.text}
        buttonLink={topbanner?.button?.link}
      />
      {contentrows &&
        contentrows?.map((item, index) => (
          <ContentRow
            customId={`content2-${index}`}
            heading={item?.row?.title}
            content={item?.row?.description}
            sideImg={item?.row?.sideimage?.sourceUrl}
            right={item?.row?.imagelocation === "left"}
          />
        ))}
      <div className="content-page-button-parent">
        <a href="/" className="content-page-button">
          TELL ME MORE
        </a>
      </div>
    </Layout>
  );
};

export default ContentPage2;
export const query = graphql`
  query contentPageQuery2 {
    contentPost2: allWpPage(filter: { title: { eq: "ContentPage-2" } }) {
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
