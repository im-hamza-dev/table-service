import * as React from "react";
import "./blog-details.scss";
import ImgBlog from "../assets/images/home-bg-cover.png";
import Layout from "../components/Layout/layout";
import BlogPreview from "../components/BlogPreview/blogpreview";

const BlogDetails = () => {
  return (
    <Layout>
      <div className="blog-details-parent">
        <div className="blog-details">
          <div className="blog-details-img-parent">
            <img src={ImgBlog} alt="preview" />
          </div>
          <div className="blog-details-title">
            Special treatment for special customers
          </div>
          <div className="blog-details-desc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            sollicitudin libero nibh. Sed suscipit pretium nibh, non lobortis
            nisl ultricies ut. Duis quis convallis lacus. Ut est augue,
            sollicitudin quis faucibus eget, iaculis a orci. Donec at libero
            turpis. Curabitur ultrices enim ornare pulvinar volutpat. Vivamus
            viverra turpis a volutpat volutpat. Phasellus ipsum ligula, commodo
            id lacus a, pretium fringilla ipsum. Integer vestibulum semper
            rutrum. Maecenas faucibus diam mi, ac luctus leo congue ac. Sed a
            sapien arcu. Nullam sit amet ipsum vel augue mattis lobortis. Aenean
            lacinia est eu urna elementum fermentum. In hac habitasse platea
            dictumst. Proin sit amet elit felis. Nam consectetur justo ut justo
            ultrices, eu condimentum nibh iaculis.
          </div>
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

export default BlogDetails;
