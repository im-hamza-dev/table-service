import React from "react";
import Link from "gatsby-link";
import Img from "gatsby-image";
import TruncateMarkup from "react-truncate-markup";
import Card from "react-bootstrap/Card";
import "./blogpreview.scss";

const BlogPreview = ({ post, highlighted, ...otherProps }) => {
  return (
    <Link to={`/blog/${post?.slug}`} className="card wrapper">
      {post.heroImage && (
        <div>
          {highlighted ? (
            <Img
              className="card-img-top img"
              title={post.title}
              fluid={post.heroImage.fluid}
            />
          ) : (
            <img
              className="card-img-top img"
              title={post.title}
              src={post.heroImage}
              alt="preview"
            />
          )}
        </div>
      )}
      <Card.Body className="body">
        <Card.Title className="title">
          <TruncateMarkup lines={2}>
            <h5 className={`${highlighted ? "highlightedTitle" : ""}`}>
              {post.title}
            </h5>
          </TruncateMarkup>
        </Card.Title>
        <p className="subtitle">
          <TruncateMarkup lines={2}>
            <span className={`${highlighted ? "highlightedSubtitle" : ""}`}>
              {post.subtitle}
            </span>
          </TruncateMarkup>
        </p>
      </Card.Body>
    </Link>
  );
};

export default BlogPreview;
