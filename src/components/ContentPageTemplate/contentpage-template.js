import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../Layout/layout";
import TopBanner from "../TopBanner/topbanner";
import ContentRow from "../ContentRow/contentrow";
import Seo from "../Seo/seo";

const ContentPage = ({ data }) => {
  const topbanner = data?.wpPage?.contentpage?.topbanner;
  const contentrows = data?.wpPage?.contentpage?.contentrows || [];
  const seo = data?.wpPage?.contentpage?.seometa;

  return (
    <Layout>
      <Seo
        title={seo?.title}
        keywords={seo?.keywords}
        description={seo?.description}
      />
      <TopBanner
        type={topbanner?.backgroundcolor}
        heading={topbanner?.title}
        content={topbanner?.description}
        buttonText={topbanner?.button?.text}
        buttonLink={topbanner?.button?.link}
      />
      {contentrows &&
        contentrows?.map((item, index) => (
          <ContentRow
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

export default ContentPage;

export const query = graphql`
  query contentPageQuery1($slug: String!) {
    wpPage(slug: { eq: $slug }) {
      contentpage {
        seometa {
          title
          description
          keywords {
            word
          }
        }
        navmenu
        topbanner {
          title
          description
          backgroundcolor
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
`;
