import * as React from "react";
import "./blogtemplate.scss";
import { graphql } from "gatsby";
import Layout from "../Layout/layout";
import BlogPreview from "../BlogPreview/blogpreview";

const BlogTemplate = ({ data }) => {
  const post = data && data.wpPost?.blog;

  const allblogs = (data && data.allWpPost && data.allWpPost?.edges) || [];
  const relatedPost = allblogs?.filter(
    (item) =>
      item?.node?.categories?.nodes[0]?.name ===
      data?.wpPost?.categories?.nodes[0]?.name
  );
  return (
    <Layout>
      <div className="blog-details-parent">
        <div className="blog-details">
          {post?.blogimage?.sourceUrl && (
            <div className="blog-details-img-parent">
              <img src={post?.blogimage?.sourceUrl} alt="preview" />
            </div>
          )}
          <div
            className="blog-details-title"
            dangerouslySetInnerHTML={{ __html: post?.title }}
          />
          <div
            className="blog-details-desc"
            dangerouslySetInnerHTML={{ __html: post?.description }}
          />
        </div>
        <div className="relative-blog-parent">
          <div className="relative-blog-heading">Related Articles</div>
          <div className="relative-blog-flex">
            {relatedPost &&
              relatedPost?.map((item, index) => (
                <div className="relative-blog-item" key={`blog-${index}`}>
                  <BlogPreview
                    post={{
                      heroImage: item?.node?.blog?.blogimage?.sourceUrl,
                      title: item?.node?.blog?.title,
                      subtitle: item?.node?.blog?.subtitle,
                      slug: item?.node?.slug,
                      category: item?.node?.categories?.nodes[0]?.name,
                    }}
                  />
                </div>
              ))}
          </div>
          <a href="/blog" className="relative-blog-button">
            VIEW ALL
          </a>
        </div>
      </div>
    </Layout>
  );
};

export default BlogTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    wpPost(slug: { eq: $slug }) {
      slug
      title
      categories {
        nodes {
          name
        }
      }
      blog {
        title
        subtitle
        description
        blogimage {
          title
          sourceUrl
          id
        }
      }
    }
    allWpPost {
      edges {
        node {
          ...BlogPreviewFields3
        }
      }
    }
  }
`;

export const BlogPreviewFields = graphql`
  fragment BlogPreviewFields3 on WpPost {
    slug
    title
    categories {
      nodes {
        name
      }
    }
    blog {
      title
      subtitle
      description
      blogimage {
        title
        sourceUrl
        id
      }
    }
  }
`;
