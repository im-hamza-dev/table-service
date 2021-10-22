import * as React from "react";
import "./blog.scss";
import ImgBlog from "../assets/images/home-bg-cover.png";
import Layout from "../components/Layout/layout";
import BlogPreview from "../components/BlogPreview/blogpreview";

const Blog = () => {
  return (
    <Layout>
      <div className="blog-parent">
        <div className="blog-heading">OUR BLOG</div>
        <div className="blog-highlighted">
          <div className="blog-highlighted-img-parent">
            <img src={ImgBlog} alt="preview" />
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 257">
              <path
                fill="#ffffff"
                fillOpacity="1"
                d="M0,64L60,69.3C120,75,240,85,360,117.3C480,149,600,203,720,202.7C840,203,960,149,1080,117.3C1200,85,1320,75,1380,69.3L1440,64L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
              ></path>
            </svg>
          </div>
          <div className="blog-highlighted-title">
            Special treatment for special customers
          </div>
          <div className="blog-highlighted-desc">
            Changing the way people eat & drink with the worlds fastest order
            and pay platform, creating a seemless order experience for you and
            your customers.
          </div>
        </div>
        <div className="blog-flex">
          <div className="blog-item">
            <BlogPreview
              post={{
                heroImage: ImgBlog,
                title: "Customers return visits based on speed of ordering",
                subtitle:
                  "People are making choices on what venues to visits based on the speed of service",
              }}
            />
          </div>
          <div className="blog-item">
            <BlogPreview
              post={{
                heroImage: ImgBlog,
                title: "Customers return visits based on speed of ordering",
                subtitle:
                  "People are making choices on what venues to visits based on the speed of service",
              }}
            />
          </div>
          <div className="blog-item">
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
        <a href="/blog" className="blog-button">
          LOAD MORE
        </a>
      </div>
    </Layout>
  );
};

export default Blog;
