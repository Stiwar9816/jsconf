module.exports = {
  siteMetadata: {
    title: `JSConfco Colombia 2019 | October 18th & 19th, Medellín`,
    titleShort: `JSConfco Colombia 2019`,
    description: `Bringing the Colombian JavaScript community under the roof.`,
    author: `@jsconfco`,
    // image: 'https://colombia.nodeconf.com/assets/images/social.png',
    url: 'https://jsconf.co/'
  },
  pathPrefix: "/colombia",
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        // icon: `src/assets/images/logo.png`, // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    'gatsby-plugin-offline'
  ],
}
