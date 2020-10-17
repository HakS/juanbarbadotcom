/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: `Juan Barba`,
    siteUrl: 'https://juanbarba.com/'
  },
  pathPrefix: "/juanbarbadotcom",
  plugins: [
    `gatsby-plugin-cname`,
    `gatsby-plugin-next-seo`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-emotion`,
    `gatsby-plugin-fontawesome-css`,
    {
      resolve: `gatsby-source-filesystem`,
      options: { path: `./static/images` }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-69615603-1",
      }
    }
  ]
}
