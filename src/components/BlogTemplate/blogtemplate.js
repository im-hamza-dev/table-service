import * as React from "react";
import "./blogtemplate.scss";
import { graphql } from "gatsby";

import ImgBlog from "../../assets/images/home-bg-cover.png";
import Layout from "../Layout/layout";
import BlogPreview from "../BlogPreview/blogpreview";

const BlogTemplate = ({ data }) => {
  const post = data && data.wpPost?.blog;
  console.log(post);

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
          <div className="relative-blog-heading">Latest from the Blog</div>
          <div className="relative-blog-flex">
            <div className="relative-blog-item">
              <BlogPreview
                post={{
                  heroImage: ImgBlog,
                  title: "Customers return visits based on speed of ordering",
                  subtitle:
                    "People are making choices on what venues to visits based on the speed of service",
                }}
              />
            </div>
            <div className="relative-blog-item">
              <BlogPreview
                post={{
                  heroImage: ImgBlog,
                  title: "Customers return visits based on speed of ordering",
                  subtitle:
                    "People are making choices on what venues to visits based on the speed of service",
                }}
              />
            </div>
            <div className="relative-blog-item">
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
  }
`;
