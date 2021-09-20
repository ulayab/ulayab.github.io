/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: "My Zoo",
    description: "This is where I write my thoughts.",
    siteUrl: "http://google.com",
    headline: "",
    description: "",
    image: "",
    video: "",
    twitter: "",
    name: "",
    logo: "",
  },
  plugins: [
    `gatsby-plugin-mdx`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/_posts`,
      },
    },
  ],
}
