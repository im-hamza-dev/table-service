/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require("path");

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  return new Promise((resolve, reject) => {
    const blogPost = path.resolve(
      "./src/components/BlogTemplate/blogtemplate.js"
    );
    const contentPage = path.resolve(
      "./src/components/ContentPageTemplate/contentpage-template.js"
    );
    resolve(
      graphql(
        `
          {
            allWpPost {
              edges {
                node {
                  title
                  slug
                }
              }
            }
            allWpPage {
              edges {
                node {
                  title
                  slug
                  contentpage {
                    navmenu
                  }
                }
              }
            }
          }
        `
      ).then((result) => {
        if (result.errors) {
          console.log(result.errors);
          reject(result.errors);
        }
        // blog-post

        const posts = result.data.allWpPost.edges;
        posts.forEach((post, index) => {
          createPage({
            path: `/blog/${post.node.slug}/`,
            component: blogPost,
            context: {
              slug: post.node.slug,
            },
          });
        });

        // content-pages
        const pages = result.data.allWpPage.edges;
        pages.forEach((page, index) => {
          if (page?.node?.contentpage?.navmenu === "Yes") {
            createPage({
              path: `/${page.node.slug}/`,
              component: contentPage,
              context: {
                slug: page.node.slug,
              },
            });
          }
        });
      })
    );
  });
};
