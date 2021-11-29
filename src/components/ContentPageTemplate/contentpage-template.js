import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../Layout/layout";
import TopBanner from "../TopBanner/topbanner";
import ContentRow from "../ContentRow/contentrow";
import Seo from "../Seo/seo";

const ContentPage = ({ data }) => {
  const topbanner = data?.wpPage?.contentpage?.topbanner;
  const contentrows = data?.wpPage?.contentpage?.contentrows || [];
  const button = data?.wpPage?.contentpage?.button;
  const seo = data?.wpPage?.contentpage?.seometa;

  return (
    <Layout>
      <Seo
        title={seo?.title}
        keywords={seo?.keywords}
        description={seo?.description}
      />
      {topbanner?.title && topbanner?.description && (
        <TopBanner
          type={topbanner?.backgroundcolor}
          heading={topbanner?.title}
          content={topbanner?.description}
          buttonText={topbanner?.button?.text}
          buttonLink={topbanner?.button?.link}
        />
      )}
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
        {button?.text && button?.link && (
          <a href={button?.link} className="content-page-button">
            {button?.text}
          </a>
        )}
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
        button {
          text
          link
        }
      }
    }
  }
`;
