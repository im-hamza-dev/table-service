import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
// import { useStaticQuery, graphql } from "gatsby";

function SEO({ description, lang, meta, keywords, title }) {
  const metaTitle = `Table Service`;
  const metaDescription = description;
  const metaUrl = "https://www.tableserviceapp.com/";

  let keywordsNew = [];
  keywords?.map((word) => keywordsNew.push(word?.word));

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={title}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: metaTitle,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          property: `og:url`,
          content: metaUrl,
        },
        {
          property: `og:image`,
          content: `https://stagingtsanew.wpengine.com/wp-content/uploads/2021/11/social-tas-new-2.png`,
        },

        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
        {
          name: `twitter:domain`,
          content: `tableserviceapp.com`,
        },
        {
          name: `twitter:url`,
          content: metaUrl,
        },
        {
          property: `twitter:image`,
          content: `https://stagingtsanew.wpengine.com/wp-content/uploads/2021/11/social-tas-new-2.png`,
        },

        {
          name: `robots`,
          content: `noindex,nofollow`,
        },
      ]
        .concat(
          keywordsNew?.length > 0
            ? {
                name: `keywords`,
                content: keywordsNew.join(`, `),
              }
            : []
        )
        .concat(meta)}
    >
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
        crossorigin="anonymous"
      />
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap-theme.min.css"
        integrity="sha384-rHyoN1iRsVXV4nD0JutlnGaslCJuC7uwjduW9SVrLvRYooPp2bWYgmgJQIXwl/Sp"
        crossorigin="anonymous"
      />
      {/* react-slick */}
      <link
        rel="stylesheet"
        type="text/css"
        charset="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        crossorigin="anonymous"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        crossorigin="anonymous"
      />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Muli:200,300,600"
      />
    </Helmet>
  );
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  keywords: [],
  description: ``,
};

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  keywords: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string.isRequired,
};

export default SEO;
