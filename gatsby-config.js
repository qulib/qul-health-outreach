module.exports = {
  siteMetadata: {
    title: `Site Title Goes Here`,
    subtitle: `Site subtitle goes here`,
  },
  plugins: [
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        baseUrl: `qul.wordpress`,
        protocol: `http`,
        hostingWPCOM: false,
        useACF: false,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography.js`,
      },
    },
  ],
}
