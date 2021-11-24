import React, { useState, useEffect } from "react";
import "./blog.scss";
import { graphql } from "gatsby";
import Layout from "../components/Layout/layout";
import BlogPreview from "../components/BlogPreview/blogpreview";
import Seo from "../components/Seo/seo";

const Blog = ({ data }) => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [filteredPost, setFilteredPost] = useState([]);
  const allPosts = (data && data.allWpPost && data.allWpPost?.edges) || [];
  const blogpage =
    data && data.allWpPage && data.allWpPage?.nodes[0]?.bloghomepage;

  const categoriesPost =
    data && data.allWpCategory && data.allWpCategory?.nodes;

  const highlightedPost = allPosts?.filter(
    (item) => item?.node?.blog?.highlighted === "Yes"
  );

  const generateFilteredPost = (item) => {
    setSelectedCategory(item);
    if (item === "All") {
      setFilteredPost(allPosts);
    } else {
      let filtered = allPosts.filter(
        (x) => x?.node?.categories?.nodes[0]?.name === item
      );
      setFilteredPost(filtered);
    }
  };
  useEffect(() => {
    generateFilteredPost("All");
  }, []);

  return (
    <Layout>
      <Seo
        title={blogpage?.seometadata?.title}
        keywords={blogpage?.seometadata?.keywords}
        description={blogpage?.seometadata?.description}
      />
      <div className="blog-parent">
        <div className="blog-heading">{blogpage?.title}</div>
        <div className="blog-buttons-flex">
          {categoriesPost &&
            categoriesPost?.map((item, index) => (
              <div
                to="#list"
                className={`blog-category-button ${
                  item.name === selectedCategory ? "selected" : ""
                }`}
                key={`category-${index}`}
                onClick={() => {
                  document.getElementById("highlighted-desc").scrollIntoView();

                  generateFilteredPost(item.name);
                }}
              >
                {item.name}
              </div>
            ))}
        </div>
        <div className="blog-highlighted">
          <div className="blog-highlighted-img-parent">
            <img
              src={highlightedPost[0]?.node?.blog?.blogimage?.sourceUrl}
              alt="preview"
            />
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 457">
              <path
                fill="#ffffff"
                fillOpacity="1"
                d="M0,64L60,69.3C120,75,240,85,360,117.3C480,149,600,203,720,202.7C840,203,960,149,1080,117.3C1200,85,1320,75,1380,69.3L1440,64L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
              ></path>
            </svg>
          </div>

          <div
            className="blog-highlighted-title"
            dangerouslySetInnerHTML={{
              __html: highlightedPost[0]?.node?.blog?.title,
            }}
          />
          <div
            id="highlighted-desc"
            className="blog-highlighted-desc"
            dangerouslySetInnerHTML={{
              __html: highlightedPost[0]?.node?.blog?.subtitle,
            }}
          />
        </div>
        <div className="blog-flex" id="list">
          {filteredPost &&
            filteredPost?.map((item, index) => (
              <div className="blog-item" key={`blog-${index}`}>
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
          {filteredPost?.length === 0 && (
            <div className="blog-not-found-content">
              Not found blogpost of this category
            </div>
          )}
        </div>
        <br />

        <a href="/blog" className="blog-button">
          Load More
        </a>
      </div>
    </Layout>
  );
};

export default Blog;

export const pageQuery = graphql`
  query BlogIndexQuery {
    allWpPost {
      edges {
        node {
          ...BlogPreviewFields
        }
      }
    }
    allWpPage(filter: { id: { eq: "cG9zdDoyNDI0" } }) {
      nodes {
        bloghomepage {
          seometadata {
            title
            description
            keywords {
              word
            }
          }
          title
        }
      }
    }
    allWpCategory {
      nodes {
        id
        name
      }
    }
  }
`;

export const BlogPreviewFields = graphql`
  fragment BlogPreviewFields on WpPost {
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
      highlighted
      description
      blogimage {
        title
        sourceUrl
        id
      }
    }
  }
`;
