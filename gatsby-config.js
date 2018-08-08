module.exports = {
  pathPrefix: `/health-outreach`,
  plugins: [
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        baseUrl: `health-outreach.library.queensu.ca`,
        protocol: `https`,
        hostingWPCOM: false,
        useACF: true,
      },
    },
    'gatsby-plugin-react-helmet',
    `gatsby-plugin-sass`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
  ],
}
