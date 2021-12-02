/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: "Dev.zookeeper",
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
    `gatsby-plugin-sharp`,
    `gatsby-remark-images`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 600,
              sizeByPixelDensity: true,
              wrapperStyle: 'margin-bottom: 40px;margin-top: 40px;-webkit-box-shadow: 3px 5px 15px 5px #D6D6D6;box-shadow: 3px 5px 15px 5px #D6D6D6;'
            },
          },
        ],
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
